#!/usr/bin/env python3
"""Reanalyse pinned SANDLab saved metrics; no model training or inference."""
from __future__ import annotations
import argparse
import ast
import csv
import hashlib
import html
import json
import math
import time
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

import numpy as np
import pandas as pd
import wfdb

HERE = Path(__file__).resolve().parent
COMMIT = 'ba350e1c6b8f40448335e363d367789f4cada3ef'
MODELS = ['TimesFM', 'Chronos-2', 'Moirai 2.0']
SUBJECTS = '16265 16272 16273 16420 16483 16539 16773 16786 16795 17052 17453 18177 18184 19088 19090 19093 19140 19830'.split()
CONTEXT, HORIZON, FS, LOCAL = 8192, 1024, 128, 16

def sha256(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()

def input_files(root, download):
    manifest = json.loads((HERE / 'source_manifest.json').read_text())
    def ensure(entry):
        path = root / entry['path']
        if not path.exists():
            if not download:
                raise FileNotFoundError(path)
            path.parent.mkdir(parents=True, exist_ok=True)
            for attempt in range(3):
                try:
                    with urlopen(Request(entry['url'], headers={'User-Agent':'SANDLab-reanalysis/1.0'}), timeout=30) as response:
                        content = response.read()
                    break
                except HTTPError as exc:
                    if exc.code not in {429,500,502,503,504} or attempt==2:raise
                    time.sleep(2*(attempt+1))
                except (TimeoutError, URLError):
                    if attempt==2:raise
                    time.sleep(2*(attempt+1))
            if hashlib.sha256(content).hexdigest() != entry['sha256']:
                raise ValueError('Downloaded content hash mismatch: ' + entry['path'])
            path.write_bytes(content)
        if sha256(path) != entry['sha256']:
            raise ValueError('Cached content hash mismatch: ' + entry['path'])
        return path
    with ThreadPoolExecutor(max_workers=6) as pool:
        list(pool.map(ensure, manifest['files']))
    return manifest

def source_components(repo):
    """Use two bounded upstream components without importing model packages.

    Exact pinned source is fetched privately, not vendored. Only the constant
    beat-symbol set and the pure TimesFM input-padding function are evaluated.
    """
    tree = ast.parse((repo / 'ecg_dataloader.py').read_text())
    beat_node = next(n.value for n in tree.body if isinstance(n, ast.Assign) and any(isinstance(t, ast.Name) and t.id == 'BEAT_ANNOTATION_SYMBOLS' for t in n.targets))
    beats = ast.literal_eval(beat_node)
    model_tree = ast.parse((repo / 'models.py').read_text())
    fn = next(n for n in model_tree.body if isinstance(n, ast.FunctionDef) and n.name == '_fixed_length_context')
    namespace = {'np': np}
    exec(compile(ast.Module(body=[fn], type_ignores=[]), 'pinned_upstream_padding_helper', 'exec'), namespace)
    return beats, namespace['_fixed_length_context']

def history_audit(root, beats, pad):
    result = []
    for sid in SUBJECTS:
        record = root / 'nsrdb' / sid
        header = wfdb.rdheader(str(record))
        if header.fs != FS or header.n_sig != 2:
            raise ValueError('Unexpected NSRDB header: ' + sid)
        ann = wfdb.rdann(str(record), 'atr')
        peaks = ann.sample[np.asarray([s in beats for s in ann.symbol])]
        rr = np.diff(peaks).astype(np.float32)
        lengths, checks, target_indices = [], [], set()
        for origin in range(32):
            boundary = origin * HORIZON + CONTEXT
            boundary_index = max(0, int(np.searchsorted(peaks, boundary, side='left')) - 1)
            target_indices.update(range(boundary_index, min(len(rr), boundary_index+HORIZON)))
            observed = rr[max(0, boundary_index - CONTEXT):boundary_index]
            lengths.append(len(observed))
            padded = pad(observed, CONTEXT)  # actual unmodified upstream helper
            assert len(padded) == CONTEXT
            assert len(observed) > 0
            assert np.array_equal(padded[-len(observed):], observed)
            assert np.all(padded[:CONTEXT - len(observed)] == observed[0])
            checks.append(True)
        unique_targets = rr[sorted(target_indices)] / FS
        result.append({'subjectId': sid, 'observedHistoryMin': int(min(lengths)),
                       'observedHistoryMax': int(max(lengths)), 'observedHistoryMedian': float(np.median(lengths)),
                       'nominalBeats': CONTEXT, 'paddingFractionMin': float(1-max(lengths)/CONTEXT),
                       'paddingFractionMax': float(1-min(lengths)/CONTEXT),
                       'observedHistoryByOrigin': lengths, 'upstreamPaddingChecks': sum(checks),
                       'maxTargetRrSeconds':float(np.max(unique_targets)),
                       'targetRrOver2sCount':int(np.sum(unique_targets>2.0)),
                       'targetUniqueRrCount':len(unique_targets),
                       'targetQcThresholdSeconds':2.0})
    return result

def joint_pass(row, rmse_limit=200, factor=2):
    return row['rmseMs'] <= rmse_limit and 1/factor <= row['rmssdRetention'] <= factor

def analyse(root):
    repo = root / 'ecg-tsfm-benchmark'
    means, steps, rows = [], [], []
    full_coverage = []
    for sid in SUBJECTS:
        a = pd.read_csv(repo / 'figures/results' / f'subject_{sid}_rr_sweep.csv', dtype={'subject_id':str})
        s = pd.read_csv(repo / 'figures/results' / f'subject_{sid}_rr_sweep_step_metrics.csv', dtype={'subject_id':str})
        if set(a.subject_id) != {sid} or set(s.subject_id) != {sid}:
            raise ValueError('Record ID mismatch')
        for model in MODELS:
            for context in [2048,4096,8192]:
                for horizon in [256,512,1024]:
                    v0 = s.query('model == @model and context_length == @context and horizon == @horizon and metric_type == "rr_variability"')
                    full_coverage.append({'subjectId':sid,'model':model,'context':context,'horizon':horizon,'variabilityPositions':len(v0)})
            a0 = a.query('model == @model and context_length == @CONTEXT and horizon == @HORIZON')
            s0 = s.query('model == @model and context_length == @CONTEXT and horizon == @HORIZON')
            e = s0.query('metric_type == "rr"').sort_values('step_index')
            v = s0.query('metric_type == "rr_variability"').sort_values('step_index')
            if len(a0) != 1 or list(e.step_index) != list(range(HORIZON)) or list(v.step_index) != list(range(8,1017)):
                raise ValueError('Incomplete/duplicate matched setting: ' + sid + ' ' + model)
            if not (e['count'].eq(64).all() and v['count'].eq(64).all()):
                raise ValueError('Unexpected series count')
            z = a0.iloc[0]
            assert z.num_windows == 32 and z.num_series == 64
            assert np.isfinite(v[['rmssd_ratio','sdnn_ratio']]).all().all()
            # Identical counts mean pooled RMSE can be reconstructed from step RMSE.
            reconstructed = float(np.sqrt(np.mean(e.rmse.to_numpy()**2)))
            assert abs(reconstructed-float(z.rr_rmse)) < 1e-4
            profile = []
            for start in range(0,HORIZON,64):
                ep = e.query('@start <= step_index < @start + 64')
                vp = v.query('@start <= step_index < @start + 64')
                profile.append({'startBeat': start, 'endBeat':start+64,
                                'rmseMs':float(np.sqrt(np.mean(ep.rmse.to_numpy()**2))*1000/FS),
                                'rmssdRetention':float(vp.rmssd_ratio.median())})
            rows.append({'subjectId':sid,'model':model,'rmseMs':float(z.rr_rmse*1000/FS),
                         'maeMs':float(z.rr_mae*1000/FS),'rmssdRetention':float(v.rmssd_ratio.median()),
                         'sdnnRetention':float(v.sdnn_ratio.median()),
                         'meanObservedRmssdMs':float(v.true_rmssd.mean()*1000/FS),
                         'meanPredictedRmssdMs':float(v.pred_rmssd.mean()*1000/FS),
                         'stepCount':len(v),'profile':profile})
            means.append(a0)
            steps.append(v[['subject_id','model','step_index','true_rmssd','true_sdnn']])
    references = pd.concat(steps).groupby(['subject_id','step_index'])[['true_rmssd','true_sdnn']]
    assert (references.max()-references.min()).to_numpy().max() == 0
    summary = []
    for model in MODELS:
        rr = [r for r in rows if r['model'] == model]
        summary.append({'model':model,'medianRmseMs':float(np.median([r['rmseMs'] for r in rr])),
                        'meanRmseMs':float(np.mean([r['rmseMs'] for r in rr])),
                        'medianRmssdRetention':float(np.median([r['rmssdRetention'] for r in rr])),
                        'defaultErrorPass':sum(r['rmseMs'] <= 200 for r in rr),
                        'defaultJointPass':sum(joint_pass(r) for r in rr)})
    # Reproduce the official equal-subject arithmetic means; no independent validation.
    official = pd.read_csv(repo / 'figures/paper/rr_sweep.csv')
    reproduction = []
    for model in MODELS:
        row = official.query('model == @model and context_length == @CONTEXT and horizon == @HORIZON').iloc[0]
        ours = next(x for x in summary if x['model']==model)['meanRmseMs']
        delta = abs(ours-float(row.rr_rmse)*1000/FS)
        assert delta < 1e-8
        reproduction.append({'model':model,'officialMeanRmseMs':float(row.rr_rmse)*1000/FS,'absoluteDifferenceMs':delta})
    beats, pad = source_components(repo)
    history = history_audit(root, beats, pad)
    return {'schemaVersion':1,
        'source':{'repo':'https://github.com/SubramanianLab/ecg-tsfm-benchmark','commit':COMMIT,
                  'dataUrl':'https://physionet.org/content/nsrdb/1.0.0/',
                  'paperUrl':'https://www.biorxiv.org/content/10.64898/2026.05.25.727760v2',
                  'cohort':'18 MIT-BIH NSRDB records; referred subjects without significant arrhythmias'},
        'settings':{'nominalContext':CONTEXT,'horizonBeats':HORIZON,'fsHz':FS,
                    'variabilityWindowBeats':LOCAL,'defaultRmseMs':200,'defaultFactor':2},
        'models':MODELS,'subjects':SUBJECTS,'rows':rows,'summary':summary,
        'protocol':{'history':history,'origins':32,'leadInstances':2,'originSeconds':[64+8*i for i in range(32)],
                    'padding':{'TimesFM':'left extension of first observed RR','Chronos-2':'left zero-padding','Moirai 2.0':'left zero-padding'},
                    'annotationSymbols':sorted(beats),'upstreamHelper':'models.py::_fixed_length_context',
                    'verifiedPaddingCalls':sum(h['upstreamPaddingChecks'] for h in history)},
        'reproduction':reproduction,
        'coverage':{'summaryRows':648,'stepRows':687130,'matchedModelSubjects':54,
                    'fullMatchedSetting':{'context':CONTEXT,'horizon':HORIZON},'sourceSettingCoverage':full_coverage},
        'limitations':[
            'Secondary reanalysis of saved outputs, not new model inference or independent validation.',
            'A smooth point forecast does not establish a poorly calibrated predictive distribution.',
            'Local 16-beat RR variability is not a direct autonomic-state measure or standard clinical HRV endpoint.',
            'Overlapping origins, two repeated RR lead inputs and sliding positions are not independent subjects.',
            'Requested context differs from observed history; padding effects are hypotheses, not causal conclusions.',
            'Exploratory thresholds are user choices, not validated clinical criteria.',
            'The source uses broad beat annotations, not exclusively normal-to-normal intervals.',
            'Filtered annotations can bridge gaps: long target RR intervals may reflect annotation gaps/artifact, not physiological variation. No records are excluded.',
            'Saved per-subject LSTM uses a different training design and is omitted from this matched comparison.',
            'No raw forecasts are reconstructed, and no surgical restricted-access data were used.']}

def svg_header(width,height,title):
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}"><title>{html.escape(title)}</title><rect width="100%" height="100%" fill="#ffffff"/><style>text{{font-family:Arial,sans-serif;fill:#202020}}.small{{font-size:12px}}.axis{{stroke:#888;stroke-width:1}}.grid{{stroke:#e2e4e3;stroke-width:1}}</style>'

def figures(data,out):
    folder = out/'figures'; folder.mkdir(exist_ok=True)
    colors = {'TimesFM':'#777777','Chronos-2':'#1f7a8c','Moirai 2.0':'#222222'}
    svg = [svg_header(900,620,'Saved forecast error versus retained local RR variability'),'<text x="58" y="36" font-size="22">Error is only one part of the review</text>',
           '<text x="58" y="59" class="small">18 records × 3 foundation models · nominal context 8192 · horizon 1024 beats</text>']
    xmin=min(40,min(r['rmseMs'] for r in data['rows'])*.9)
    xmax=max(3000,max(r['rmseMs'] for r in data['rows'])*1.1)
    ymax=max(.7,max(r['rmssdRetention'] for r in data['rows'])*1.1)
    x=lambda v:85+(math.log10(v)-math.log10(xmin))/(math.log10(xmax)-math.log10(xmin))*725
    y=lambda v:505-v/ymax*375
    for tick in [50,100,200,500,1000,2000]:
        svg.extend([f'<line x1="{x(tick):.2f}" y1="110" x2="{x(tick):.2f}" y2="505" class="grid"/>',f'<text x="{x(tick):.2f}" y="528" text-anchor="middle" class="small">{tick}</text>'])
    for tick in [0,.1,.2,.3,.4,.5,.6]:
        svg.extend([f'<line x1="85" y1="{y(tick):.2f}" x2="810" y2="{y(tick):.2f}" class="grid"/>',f'<text x="75" y="{y(tick)+4:.2f}" text-anchor="end" class="small">{tick:.1f}</text>'])
    for row in data['rows']:
        svg.append(f'<circle cx="{x(row["rmseMs"]):.2f}" cy="{y(row["rmssdRetention"]):.2f}" r="4.5" fill="{colors[row["model"]]}" opacity=".85"><title>{row["subjectId"]} {row["model"]}: {row["rmseMs"]:.2f} ms; retention {row["rmssdRetention"]:.4f}</title></circle>')
    svg.extend(['<text x="450" y="560" text-anchor="middle" font-size="14">Subject pooled RR RMSE (ms; logarithmic axis)</text>','<text x="22" y="320" transform="rotate(-90 22 320)" text-anchor="middle" font-size="14">Median local-RMSSD retention ratio</text>'])
    for i,model in enumerate(MODELS):
        svg.extend([f'<circle cx="{140+i*240}" cy="590" r="4" fill="{colors[model]}"/>',f'<text x="{152+i*240}" y="594" class="small">{model}</text>'])
    svg.append('</svg>'); (folder/'error-variability.svg').write_text(''.join(svg))
    svg=[svg_header(900,700,'Requested versus observed RR history audit'),'<text x="50" y="35" font-size="22">How much requested history was observed?</text>',
         '<text x="50" y="60" class="small">Median over the 32 source origins. Remainder is padding, not measured RR intervals.</text>']
    for i,row in enumerate(data['protocol']['history']):
        yy=100+i*28; observed=row['observedHistoryMedian']; w=observed/8192*570
        svg.extend([f'<text x="50" y="{yy+14}" class="small">{row["subjectId"]}</text>',f'<rect x="120" y="{yy}" width="570" height="18" fill="#dfdfd7"/>',f'<rect x="120" y="{yy}" width="{w:.3f}" height="18" fill="#183d52"/>',f'<text x="705" y="{yy+14}" class="small">{observed:g} / 8192</text>'])
    svg.extend(['<text x="120" y="635" class="small">Observed intervals</text>','<text x="300" y="635" class="small">Padding: first-value extension (TimesFM) or zeros (Chronos/Moirai)</text>','<text x="50" y="672" class="small">Diagnostic reconstruction from source code and public annotations; not proof of the cause of forecast smoothing.</text>','</svg>'])
    (folder/'observed-history.svg').write_text(''.join(svg))

def write_outputs(data,manifest,out):
    out.mkdir(parents=True,exist_ok=True)
    payload=json.dumps(data,indent=2,allow_nan=False)
    (out/'data.json').write_text(payload+'\n')
    (out/'data.js').write_text('window.UNIVERSITY_LAB_DEMO_DATA = '+payload+';\n')
    fields=[k for k in data['rows'][0] if k!='profile']
    with (out/'results.csv').open('w',newline='') as handle:
        writer=csv.DictWriter(handle,fieldnames=fields);writer.writeheader()
        writer.writerows({k:r[k] for k in fields} for r in data['rows'])
    with (out/'history-audit.csv').open('w',newline='') as handle:
        writer=csv.writer(handle);writer.writerow(['subject_id','origin_index','boundary_seconds','observed_rr_intervals','nominal_rr_intervals','padded_fraction'])
        for h in data['protocol']['history']:
            for i,n in enumerate(h['observedHistoryByOrigin']):writer.writerow([h['subjectId'],i,64+8*i,n,8192,1-n/8192])
    provenance={'analysisVersion':'1.0.0','retrievalDate':'2026-11-09','upstream':data['source'],
        'inputManifest':'source_manifest.json','inputFiles':len(manifest['files']),
        'repositoryLicense':'No LICENSE found at pinned commit. Upstream code/raw CSVs are not redistributed.',
        'nsrdbLicense':'Open Data Commons Attribution License v1.0',
        'actualUpstreamReuse':['18 per-subject saved summary and step tables','source beat-annotation symbol set','unmodified pure models.py::_fixed_length_context run 576 times on real observed RR histories'],
        'noModelInference':True,'noIndependentValidation':True,'reproduction':data['reproduction'],
        'definitions':{'rmseMs':'source rr_rmse ×1000/128',
            'rmssdRetention':'median across1009 source positions of mean(predicted16beatRMSSD)/mean(observed16beatRMSSD)',
            'profile':'64-beat disjoint display bins; sqrt(mean squared step RMSE), median source local-ratio centers in bin',
            'meanObservedRmssdMs':'arithmetic mean of1009 source window-averaged observed RMSSDs ×1000/128; not a ratio denominator for the median ratio',
            'history':'header128Hz; same source beat-symbol set; each boundary64+8*i seconds, preceding RR interval count by source searchsorted rule',
            'targetQC':'Union of unique annotation-derived RR indices in each of32 forecast target ranges [boundary_rr_idx,boundary_rr_idx+1024); max and count strictly over2s. Descriptive QC flag, not clinical cutoff; no exclusion or metric changes.'},
        'limitations':data['limitations']}
    (out/'PROVENANCE.json').write_text(json.dumps(provenance,indent=2)+'\n')
    figures(data,out)

def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('--source-dir','--source-root',type=Path,help='Existing private source root containing ecg-tsfm-benchmark/ and nsrdb/; all files verified')
    p.add_argument('--fetch',action='store_true',help='Explicitly request the default pinned network fetch (also default without --source-dir)')
    p.add_argument('--cache',type=Path,default=Path.home()/'.cache'/'sandlab-reanalysis-ba350e1')
    p.add_argument('--output',type=Path,default=HERE)
    args=p.parse_args();root=(args.source_dir or args.cache).resolve()
    if root==HERE or HERE in root.parents:raise ValueError('Keep upstream inputs outside the public demo directory')
    manifest=input_files(root,download=args.source_dir is None)
    data=analyse(root);write_outputs(data,manifest,args.output)
    print(json.dumps({'rows':len(data['rows']),'subjects':len(data['subjects']),'summary':data['summary'],'historyObservedRange':[min(h['observedHistoryMin'] for h in data['protocol']['history']),max(h['observedHistoryMax'] for h in data['protocol']['history'])]},indent=2))

if __name__=='__main__':main()

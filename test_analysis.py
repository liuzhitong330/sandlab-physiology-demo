"""Fast exported-output tests; analysis.py also asserts source invariants."""
import csv
import json
import math
import unittest
from pathlib import Path
import numpy as np

ROOT=Path(__file__).resolve().parent

class ReanalysisTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):cls.data=json.loads((ROOT/'data.json').read_text())

    def test_unique_matched_records(self):
        d=self.data
        self.assertEqual(len(d['rows']),54)
        self.assertEqual(len({(r['subjectId'],r['model']) for r in d['rows']}),54)
        self.assertEqual({r['subjectId'] for r in d['rows']},set(d['subjects']))
        for model in d['models']:self.assertEqual(sum(r['model']==model for r in d['rows']),18)

    def test_metrics_finite(self):
        for r in self.data['rows']:
            self.assertEqual(r['stepCount'],1009)
            for key in ['rmseMs','maeMs','rmssdRetention','sdnnRetention','meanObservedRmssdMs','meanPredictedRmssdMs']:
                self.assertTrue(math.isfinite(r[key]));self.assertGreaterEqual(r[key],0)
            self.assertGreaterEqual(r['rmseMs'],r['maeMs'])

    def test_profile_reconstructs_rmse(self):
        for r in self.data['rows']:
            self.assertEqual(len(r['profile']),16)
            self.assertEqual([p['startBeat'] for p in r['profile']],list(range(0,1024,64)))
            self.assertAlmostEqual(math.sqrt(sum(p['rmseMs']**2 for p in r['profile'])/16),r['rmseMs'],delta=.001)

    def test_subject_summary_and_gate(self):
        for s in self.data['summary']:
            rows=[r for r in self.data['rows'] if r['model']==s['model']]
            self.assertAlmostEqual(s['medianRmseMs'],float(np.median([r['rmseMs'] for r in rows])))
            self.assertAlmostEqual(s['medianRmssdRetention'],float(np.median([r['rmssdRetention'] for r in rows])))
            self.assertEqual(s['defaultJointPass'],sum(r['rmseMs']<=200 and .5<=r['rmssdRetention']<=2 for r in rows))
        self.assertEqual([s['defaultJointPass'] for s in self.data['summary']],[0,0,0])

    def test_two_sided_inclusive_thresholds(self):
        gate=lambda error,retained,limit=200,factor=2:error<=limit and 1/factor<=retained<=factor
        self.assertTrue(gate(200,.5));self.assertTrue(gate(200,2))
        self.assertFalse(gate(200,2.01));self.assertFalse(gate(200,.49));self.assertFalse(gate(200.01,1))

    def test_protocol(self):
        p=self.data['protocol'];self.assertEqual(p['verifiedPaddingCalls'],576)
        self.assertEqual(p['originSeconds'],list(range(64,313,8)))
        self.assertEqual(len(p['history']),18)
        for h in p['history']:
            self.assertEqual(len(h['observedHistoryByOrigin']),32)
            self.assertEqual(h['observedHistoryMin'],min(h['observedHistoryByOrigin']))
            self.assertEqual(h['observedHistoryMax'],max(h['observedHistoryByOrigin']))
            self.assertLess(h['observedHistoryMax'],8192)
            self.assertAlmostEqual(h['paddingFractionMin'],1-h['observedHistoryMax']/8192)
            self.assertGreaterEqual(h['targetUniqueRrCount'],1024)
            self.assertGreaterEqual(h['targetRrOver2sCount'],0)
            self.assertLessEqual(h['targetRrOver2sCount'],h['targetUniqueRrCount'])
            self.assertEqual(h['targetQcThresholdSeconds'],2)
        by_id={h['subjectId']:h for h in p['history']}
        self.assertEqual(by_id['16272']['maxTargetRrSeconds'],39.390625)
        self.assertEqual(by_id['19088']['maxTargetRrSeconds'],68.6875)

    def test_official_reproduction(self):
        self.assertEqual(len(self.data['reproduction']),3)
        for r in self.data['reproduction']:self.assertLess(r['absoluteDifferenceMs'],1e-8)

    def test_exports_and_manifest(self):
        js=(ROOT/'data.js').read_text()
        self.assertEqual(json.loads(js.removeprefix('window.UNIVERSITY_LAB_DEMO_DATA = ').rstrip(';\n')),self.data)
        with (ROOT/'results.csv').open() as handle:
            rows=list(csv.DictReader(handle))
        self.assertEqual(len(rows),54)
        for a,b in zip(rows,self.data['rows']):
            self.assertEqual(a['subjectId'],b['subjectId']);self.assertEqual(a['model'],b['model'])
            self.assertEqual(float(a['rmseMs']),b['rmseMs'])
        manifest=json.loads((ROOT/'source_manifest.json').read_text())
        self.assertEqual(len(manifest['files']),78)
        self.assertEqual(len({f['path'] for f in manifest['files']}),78)
        for f in manifest['files']:
            self.assertEqual(len(f['sha256']),64)
            self.assertNotIn('..',Path(f['path']).parts)
            if 'githubusercontent' in f['url']:self.assertIn(manifest['commit'],f['url'])

    def test_figures_exist(self):
        for name in ['error-variability.svg','observed-history.svg']:
            content=(ROOT/'figures'/name).read_text()
            self.assertIn('<svg',content);self.assertIn('</svg>',content)
            self.assertNotIn('/Users/',content)

if __name__=='__main__':unittest.main()

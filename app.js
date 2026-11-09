(function () {
  "use strict";
  const data = window.UNIVERSITY_LAB_DEMO_DATA;
  const el = (id) => document.getElementById(id);
  if (!data || !Array.isArray(data.rows) || data.rows.length === 0) {
    el("readout").textContent = "The source-derived results could not be loaded. Reload the page before interpreting any result.";
    el("export-review").disabled = true;
    return;
  }
  const state = { rmse:data.settings.defaultRmseMs, factor:data.settings.defaultFactor, subject:String(data.subjects[0]), model:null };
  const models = data.models;
  const fmt = (n, digits = 1) => Number(n).toLocaleString("en-US", { maximumFractionDigits:digits });
  const ratioFmt = (n) => Number(n) === 0 ? "0" : Number(n) < 0.001 ? Number(n).toExponential(2) : fmt(n, 4);
  const median = (values) => { const a=values.slice().sort((x,y)=>x-y),m=Math.floor(a.length/2); return a.length%2 ? a[m] : (a[m-1]+a[m])/2; };
  let reviewRows = [];
  const numberKeys = ["rmseMs", "rmssdRetention"];
  if (data.rows.some((r) => numberKeys.some((key) => !Number.isFinite(r[key]) || r[key] < 0))) {
    el("readout").textContent = "A required source-derived metric is missing or invalid. The comparison is paused rather than treating missing values as zero.";
    el("export-review").disabled = true;
    return;
  }
  function node(tag, text, attributes={}) {
    const item=document.createElement(tag); item.textContent=text;
    Object.entries(attributes).forEach(([k,v])=>item.setAttribute(k,v)); return item;
  }
  function svgNode(tag, attributes={}, text) {
    const item=document.createElementNS("http://www.w3.org/2000/svg",tag);
    Object.entries(attributes).forEach(([k,v])=>item.setAttribute(k,v));
    if(text!==undefined)item.textContent=text; return item;
  }
  function outcome(row) {
    const error=row.rmseMs<=state.rmse;
    const variation=row.rmssdRetention>=1/state.factor&&row.rmssdRetention<=state.factor;
    return {error,variation,joint:error&&variation,label:error&&variation?"Both checks":error?"Error only":variation?"Variation only":"Neither check"};
  }
  function plot() {
    const svg=el("hero-viz"); svg.replaceChildren();
    const compact=Number(window.innerWidth)<=600;
    const width=compact?Math.max(280,Math.round(svg.clientWidth||window.innerWidth-70)):600;
    const left=compact?48:64,right=compact?width-12:580,top=24,bottom=compact?260:283;
    svg.setAttribute("viewBox",`0 0 ${width} ${compact?320:350}`);
    const positiveError=data.rows.map(r=>r.rmseMs).filter(v=>v>0),positiveRatio=data.rows.map(r=>r.rmssdRetention).filter(v=>v>0);
    const xMin=Math.min(10,Math.min(...positiveError)/2),xMax=Math.max(1000,...positiveError)*1.15;
    const yMin=10**Math.floor(Math.log10(Math.min(...positiveRatio))),yMax=Math.max(2,10**Math.ceil(Math.log10(Math.max(...positiveRatio))));
    const x=(v)=>left+(Math.log10(Math.max(xMin,v))-Math.log10(xMin))/(Math.log10(xMax)-Math.log10(xMin))*(right-left);
    const y=(v)=>bottom-(Math.log10(Math.max(yMin,v))-Math.log10(yMin))/(Math.log10(yMax)-Math.log10(yMin))*(bottom-top);
    const clipX=(v)=>Math.max(left,Math.min(right,x(v))),clipY=(v)=>Math.max(top,Math.min(bottom,y(v)));
    svg.appendChild(svgNode("title",{},`RMSE and retained local RR-RMSSD for ${data.subjects.length} participants and ${models.length} models. Participant ${state.subject} highlighted.`));
    svg.appendChild(svgNode("rect",{x:left,y:clipY(state.factor),width:Math.max(0,clipX(state.rmse)-left),height:Math.max(0,clipY(1/state.factor)-clipY(state.factor)),fill:"#e6f1f3"}));
    (compact?[25,100,500,2000]:[10,25,50,100,200,500,1000,2000,5000,10000]).filter(t=>t>=xMin&&t<=xMax).forEach(t=>{
      svg.appendChild(svgNode("line",{x1:x(t),x2:x(t),y1:top,y2:bottom,stroke:"#eee"}));
      svg.appendChild(svgNode("text",{x:x(t),y:bottom+19,"text-anchor":"middle","font-size":10.5,fill:"#666"},fmt(t,0)));
    });
    const yTicks=[];for(let power=Math.ceil(Math.log10(yMin));power<=Math.floor(Math.log10(yMax));power++)yTicks.push(10**power);
    if(yMax>=2)yTicks.push(2);
    [...new Set(yTicks)].sort((a,b)=>a-b).forEach(t=>{
      svg.appendChild(svgNode("line",{x1:left,x2:right,y1:y(t),y2:y(t),stroke:t===1?"#aaa":"#eee","stroke-dasharray":t===1?"4 3":"0"}));
      svg.appendChild(svgNode("text",{x:left-8,y:y(t)+4,"text-anchor":"end","font-size":11,fill:"#666"},ratioFmt(t)));
    });
    if(state.rmse>=xMin&&state.rmse<=xMax)svg.appendChild(svgNode("line",{x1:x(state.rmse),x2:x(state.rmse),y1:top,y2:bottom,stroke:"#1f7a8c","stroke-dasharray":"4 3"}));
    [1/state.factor,state.factor].filter(v=>v>=yMin&&v<=yMax).forEach(v=>svg.appendChild(svgNode("line",{x1:left,x2:right,y1:y(v),y2:y(v),stroke:"#1f7a8c","stroke-dasharray":"4 3"})));
    svg.appendChild(svgNode("text",{x:(left+right)/2,y:bottom+44,"text-anchor":"middle","font-size":compact?11:12,fill:"#555"},compact?"RMSE (ms; log)":"RR-interval RMSE (ms · logarithmic axis)"));
    svg.appendChild(svgNode("text",{x:compact?12:15,y:(top+bottom)/2,transform:`rotate(-90 ${compact?12:15} ${(top+bottom)/2})`,"text-anchor":"middle","font-size":compact?11:12,fill:"#555"},compact?"Local RR-RMSSD ratio (log)":"Retained local RR-RMSSD (ratio · log axis)"));
    const ordered=data.rows.slice().sort((a,b)=>(String(a.subjectId)===state.subject?1:0)-(String(b.subjectId)===state.subject?1:0));
    ordered.forEach(row=>{
      const selected=String(row.subjectId)===state.subject,idx=models.indexOf(row.model),cx=x(row.rmseMs),cy=y(row.rmssdRetention),r=selected?6:4;
      const attrs={fill:["#777","#1f7a8c","#222"][idx],opacity:selected?1:.43,stroke:selected?"#111":"#fff","stroke-width":selected?1.2:.6,class:"data-point",tabindex:0,role:"button","aria-label":`Participant ${row.subjectId}, ${row.model}, RMSE ${fmt(row.rmseMs)} milliseconds, local ratio ${ratioFmt(row.rmssdRetention)}. Inspect participant.`};
      const point=idx===0?svgNode("circle",{...attrs,cx,cy,r}):idx===1?svgNode("rect",{...attrs,x:cx-r,y:cy-r,width:2*r,height:2*r}):svgNode("path",{...attrs,d:`M ${cx} ${cy-r-1} L ${cx-r-1} ${cy+r} L ${cx+r+1} ${cy+r} Z`});
      point.appendChild(svgNode("title",{},`${row.subjectId} · ${row.model}\nRMSE ${fmt(row.rmseMs)} ms\nLocal ratio ${ratioFmt(row.rmssdRetention)}\n${outcome(row).label}`));
      const choose=()=>{state.subject=String(row.subjectId);state.model=row.model;el("subject-select").value=state.subject;render();};
      point.addEventListener("click",choose);point.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();choose();}});
      svg.appendChild(point);
    });
  }
  function renderAudit() {
    const history=data.protocol&&data.protocol.history||[];
    const item=history.find(r=>String(r.subjectId)===state.subject);
    el("audit-body").replaceChildren();
    if(!item){el("audit-summary").textContent="Per-participant observed-history audit is not available. Requested context must not be interpreted as the amount of recorded history.";el("annotation-qc").textContent="Target annotation quality has not been quantified for this participant; do not assume the annotation-derived intervals form a cleaned beat series.";return;}
    const values=[
      ["Requested context",`${fmt(item.nominalBeats,0)} RR intervals`],
      ["Observed history across origins",`${fmt(item.observedHistoryMin,0)}–${fmt(item.observedHistoryMax,0)} RR intervals`],
      ["Median observed history",`${fmt(item.observedHistoryMedian,1)} RR intervals`],
      ["Padding / extension fraction",`${fmt(item.paddingFractionMin*100)}–${fmt(item.paddingFractionMax*100)}%`],
      ["Nearby origins / repeated inputs",`${data.protocol.origins} origins × ${data.protocol.leadInstances} annotation-derived lead inputs`]
    ];
    const hasAnnotationQc=Number.isFinite(item.maxTargetRrSeconds)&&Number.isFinite(item.targetRrOver2sCount)&&Number.isFinite(item.targetUniqueRrCount);
    if(hasAnnotationQc){
      values.push(["Largest annotated target interval",`${fmt(item.maxTargetRrSeconds,3)} seconds`]);
      values.push(["Annotated target intervals >2 s",`${fmt(item.targetRrOver2sCount,0)} / ${fmt(item.targetUniqueRrCount,0)} unique intervals`]);
    }
    el("annotation-qc").textContent=(hasAnnotationQc?`Target annotation QC: maximum interval ${fmt(item.maxTargetRrSeconds,3)} s; ${fmt(item.targetRrOver2sCount,0)} of ${fmt(item.targetUniqueRrCount,0)} unique target intervals exceed 2 s. `:"Target annotation QC is not quantified here. ")+"Long annotation intervals may reflect missed/noisy beats; their cause is unverified. They can affect error and variation, and the saved summaries cannot be cleaned retrospectively. The 2-second flag is descriptive, not clinical; no records are excluded.";
    values.forEach(([label,value])=>{const tr=document.createElement("tr");tr.appendChild(node("td",label));tr.appendChild(node("td",value));el("audit-body").appendChild(tr);});
    const min=Math.min(...history.map(r=>r.observedHistoryMin)),max=Math.max(...history.map(r=>r.observedHistoryMax));
    el("audit-title").textContent=`Participant ${state.subject}: ${fmt(item.observedHistoryMin,0)}–${fmt(item.observedHistoryMax,0)} observed RR intervals`;
    el("audit-summary").textContent=`Across all ${history.length} participants, the audited origins contain ${fmt(min,0)}–${fmt(max,0)} observed RR intervals, not ${fmt(item.nominalBeats,0)}. The remainder is padding or value extension. This is a protocol fact, not an explanation established for the forecast results.`;
    const svg=el("history-viz"),compact=Number(window.innerWidth)<=600;
    const totalWidth=compact?Math.max(280,Math.round(svg.clientWidth||window.innerWidth-70)):600;
    const left=compact?12:24,right=compact?totalWidth-12:580,width=right-left;
    svg.replaceChildren();
    svg.setAttribute("viewBox",`0 0 ${totalWidth} 112`);
    svg.appendChild(svgNode("title",{},`Participant ${state.subject}: ${item.observedHistoryMin}–${item.observedHistoryMax} observed RR intervals versus ${item.nominalBeats} requested.`));
    svg.appendChild(svgNode("text",{x:left,y:22,"font-size":compact?11:12,fill:"#444"},`${fmt(item.observedHistoryMin,0)}–${fmt(item.observedHistoryMax,0)} observed intervals${compact?"":" across origins"}`));
    svg.appendChild(svgNode("rect",{x:left,y:38,width,height:20,fill:"#e7e7e7"}));
    svg.appendChild(svgNode("rect",{x:left,y:38,width:width*item.observedHistoryMax/item.nominalBeats,height:20,fill:"#acd0d7"}));
    svg.appendChild(svgNode("rect",{x:left,y:38,width:width*item.observedHistoryMin/item.nominalBeats,height:20,fill:"#1f7a8c"}));
    svg.appendChild(svgNode("text",{x:left,y:79,"font-size":11,fill:"#666"},"0"));
    svg.appendChild(svgNode("text",{x:right,y:79,"font-size":11,"text-anchor":"end",fill:"#666"},`${fmt(item.nominalBeats,0)} requested RR intervals`));
    el("history-caption").textContent="Full requested-length scale, not truncated. Dark teal reaches the minimum observed count; pale teal extends to the maximum across origins. Gray is the remainder of the requested span. This is an input-length audit, not a reconstructed physiological trace.";
  }
  function render() {
    const outcomes=data.rows.map(row=>({...row,check:outcome(row)}));
    const errorPass=outcomes.filter(r=>r.check.error).length,jointPass=outcomes.filter(r=>r.check.joint).length;
    const discordant=outcomes.filter(r=>r.check.error&&!r.check.variation);
    el("threshold-label").textContent=`Chosen checks: RMSE ≤ ${fmt(state.rmse)} ms and retained local RR-RMSSD between ${ratioFmt(1/state.factor)} and ${ratioFmt(state.factor)}. Inclusive boundaries; neither check is clinically validated.`;
    el("readout").textContent=`${errorPass} of ${outcomes.length} model–participant records meet the RMSE ceiling; ${jointPass} meet both checks. ${discordant.length} are within your RMSE rule but have a local-variation ratio outside your chosen range.`;
    el("lab-value").textContent=discordant.length?`Prioritize these ${discordant.length} error–variation disagreements for a distributional and protocol-controlled rerun, rather than reading point RMSE as physiological fidelity.`:"No error–variation disagreements remain under these settings. This reflects the chosen tolerance, not a clinical or distributional validation.";
    el("metric-one").textContent=String(data.subjects.length);
    el("metric-two").textContent=`${errorPass} / ${outcomes.length}`;
    el("metric-three").textContent=`${jointPass} / ${outcomes.length}`;
    const selected=outcomes.filter(r=>String(r.subjectId)===state.subject);
    el("subject-heading").textContent=`Participant ${state.subject} — the same recording, three models`;
    el("subject-body").replaceChildren();
    selected.forEach(row=>{const tr=document.createElement("tr");tr.setAttribute("data-focused",String(row.model===state.model));[row.model,`${fmt(row.rmseMs)} ms`,ratioFmt(row.rmssdRetention),row.check.label].forEach(value=>tr.appendChild(node("td",value)));el("subject-body").appendChild(tr);});
    el("subject-note").textContent=`Each ratio summarizes ${selected[0].stepCount} overlapping 16-beat positions. It is a median of source window-averaged ratios, not a confidence interval. “Both checks” means only that the two exploratory numerical conditions are met.`;
    el("model-body").replaceChildren();
    models.forEach(model=>{const rows=outcomes.filter(r=>r.model===model),tr=document.createElement("tr");[model,`${rows.filter(r=>r.check.error).length} / ${rows.length}`,`${rows.filter(r=>r.check.joint).length} / ${rows.length}`,ratioFmt(median(rows.map(r=>r.rmssdRetention)))].forEach(value=>tr.appendChild(node("td",value)));el("model-body").appendChild(tr);});
    el("comparison-summary").textContent="The denominator stays at the same 18 participants for each model. Counts describe the released point forecasts under your settings; they do not rank predictive distributions or identify physiological states.";
    plot();renderAudit();reviewRows=outcomes;
  }
  data.subjects.forEach(subject=>el("subject-select").appendChild(node("option",`Participant ${subject}`,{value:subject})));
  el("subject-select").value=state.subject;el("rmse-limit").value=state.rmse;el("ratio-factor").value=state.factor;
  el("source-version").textContent=`Source repository commit: ${data.source.commit}. Derived results retain the fixed requested context and forecast horizon; no model was rerun for this page. Upstream raw tables and code are not redistributed here.`;
  el("rmse-limit").addEventListener("input",()=>{
    const value=Number(el("rmse-limit").value),valid=el("rmse-limit").value!==""&&Number.isFinite(value)&&value>=0&&value<=10000;
    el("export-review").disabled=!valid;
    el("rmse-limit").setAttribute("aria-invalid",String(!valid));
    el("input-status").textContent=valid?"":`Enter an RMSE ceiling from 0 to 10,000 ms. Results still show the last valid ceiling (${fmt(state.rmse)} ms); export is disabled until the entry is valid.`;
    if(valid){state.rmse=value;render();}
  });
  el("ratio-factor").addEventListener("change",()=>{state.factor=Number(el("ratio-factor").value);render();});
  el("subject-select").addEventListener("change",()=>{state.subject=String(el("subject-select").value);state.model=null;render();});
  if(typeof window.addEventListener==="function")window.addEventListener("resize",()=>{plot();renderAudit();});
  el("export-review").addEventListener("click",()=>{
    if(el("export-review").disabled)return;
    const header=["subject_id","model","rmse_ms","retained_local_rr_rmssd","rmse_ceiling_ms","ratio_lower","ratio_upper","within_rmse","within_variation_range","both_checks","review_outcome","nominal_context_beats","horizon_beats","max_annotated_target_rr_seconds","annotated_target_rr_over_2s_count","unique_target_interval_count","source_commit","interpretation"];
    const rows=reviewRows.map(r=>{
      const history=(data.protocol.history||[]).find(h=>String(h.subjectId)===String(r.subjectId))||{};
      return [r.subjectId,r.model,r.rmseMs,r.rmssdRetention,state.rmse,1/state.factor,state.factor,r.check.error,r.check.variation,r.check.joint,r.check.label,data.settings.nominalContext,data.settings.horizonBeats,history.maxTargetRrSeconds??"not quantified",history.targetRrOver2sCount??"not quantified",history.targetUniqueRrCount??"not quantified",data.source.commit,"Exploratory point-forecast review; no exclusions. Annotation gaps/noise may affect metrics. The 2s flag is descriptive QC, not clinical. Not predictive-distribution validation."];
    });
    const csv=[header,...rows].map(row=>row.map(cell=>`"${String(cell).replaceAll('"','""')}"`).join(",")).join("\r\n");
    const url=URL.createObjectURL(new Blob(["\uFEFF",csv,"\r\n"],{type:"text/csv;charset=utf-8"}));
    const a=document.createElement("a");a.href=url;a.download=`sandlab-review-rmse${state.rmse}ms-factor${state.factor}.csv`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
    el("export-status").textContent=`Downloaded ${reviewRows.length} review records with the exact settings and source commit.`;
  });
  render();
}());

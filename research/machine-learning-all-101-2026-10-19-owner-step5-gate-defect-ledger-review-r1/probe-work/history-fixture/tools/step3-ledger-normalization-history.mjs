// Verify-only bridge for explicit schema normalization of frozen Step-3 rows.
import {existsSync,readFileSync,writeFileSync,lstatSync,realpathSync} from 'node:fs';
import {join,resolve,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {isPublishedItem} from './published-repair-policy.mjs';
const sha=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const need=(v,m)=>{if(!v)throw Error('Step 3 ledger normalization history: '+m);};
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const marker=(root,run)=>join(root,'research',`${run}-step3-ledger-normalization-history.json`);
const selected=(root,run)=>readFileSync(join(root,'research','defect-ledger.jsonl'),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse)
  .filter(r=>r.run===run&&['3a-adjudicate','3b-cross'].includes(r.caught_at_stage)&&!isPublishedItem(root,r.subject))
  .sort((a,b)=>String(a.defect_id).localeCompare(String(b.defect_id)));
const mappings={
  class:{logical:'accuracy',clarity:'accuracy'},
  subclass:{'underspecified-procedure':'ill-formed','sign-error':'other','implicit-constant-normalization':'other',
    'dependency-citation':'citation-missing','proof-gap':'unsupported-inference',typing:'ill-typed-claim',
    'undefined-expression':'undefined-notation','missing-prerequisite':'unsupported-inference',
    'algorithm-input-contract':'other','proof-exposition':'other','incorrect-proof-computation':'other','proof-quantifier-notation':'other'},
  location:{proof:'proof-step','Proof step 3.1':'proof-step','Proof steps 1.1–1.2':'proof-step',
    'example-and-fact':'statement','proof-step-1.3-and-6.1':'proof-step','Statement/Proof':'page-summary'},
};
// V2 admits only the real later native operator finding, not new math work.
const v2Mappings={
  class:{statement:'accuracy',inference:'accuracy'},
  subclass:{'missing-justification':'unsupported-inference'},
  location:{'Statement and Proof step 2.2':'statement',citation:'frontmatter',
    'Proof 2.1':'proof-step','Proof 1.1 and 5.1':'proof-step',
    'Verification 1.1, 1.2 and 2.1':'proof-step','Proof 3.1':'proof-step',
    'sources.references locator':'frontmatter'},
};
function validateV2Evidence(root,run,row,bound,creation,before,after,applications){
  const request=JSON.parse(bound(row.owner_gate_request));
  need(request.version===1&&request.run===run&&request.group==='5.6-impact'
    &&same(request.stages,['5.6-impact'])&&request.id===row.owner_gate_request_id
    &&Number.isFinite(Date.parse(request.at))&&Date.parse(request.at)<=Date.parse(row.recorded_at),
    'missing actual5.6 owner request');
  const report=JSON.parse(bound(row.operator_report)),native=JSON.parse(bound(row.operator_dispatch_result));
  const phase='impact-repeat-pass-2',label=`step5-v2-${phase}-r1-u1`;
  const collected=JSON.parse(bound(row.operator_collection));
  need(row.operator_collection.path===`research/${run}-step5-v2/${phase}-1-collected.json`
    &&collected.run===run&&collected.phase===phase&&collected.round===1&&same(collected.errors,[])
    &&[row.operator_report,row.operator_pack,row.operator_dispatch_result].every(ref=>collected.evidence?.[resolve(root,ref.path)]===ref.sha256),
    'operator report/pack/result differ from their genuine frozen native collection');
  need(row.operator_report.path===`research/${run}-step5-v2/${label}.json`
    &&row.operator_dispatch_result.path===`research/${run}-dispatch/alpha-repair-${label}.result.json`
    &&report.run===run&&report.phase===phase&&report.round===1&&String(report.unit)==='1'
    &&native.run===run&&native.role==='alpha-repair'&&native.label===label&&same(native.covers,[`${phase}:1`])
    &&native.runner==='codex'&&native.model==='gpt-6.1-sol'&&native.provider_effort==='high'
    &&native.ok===true&&native.exit_code===0&&native.process_exit_code===0&&native.timed_out===false
    &&native.terminal_summary?.task_completed===true&&native.terminal_summary.task_aborted===false
    &&native.terminal_summary.final_response_present===true&&native.terminal_summary.error_events===0
    &&Number.isSafeInteger(native.attempt)&&native.attempt>0&&native.evidence_tag===`.attempt-${native.attempt}`,
    'operator finding lacks its genuine completed immutable native owner');
  const attempt=row.operator_dispatch_result.path.replace(/\.result\.json$/,`.attempt-${native.attempt}.result.json`);
  need(row.operator_immutable_attempt.path===attempt&&bound(row.operator_dispatch_result)===bound(row.operator_immutable_attempt)
    &&row.operator_pack.path===`research/${run}-step5-v2/${phase}-1.json`
    &&report.input_sha256===sha(JSON.parse(bound(row.operator_pack)))
    &&resolve(root,row.operator_prompt.path)===resolve(root,native.prompt??'')
    &&row.operator_prompt.path===attempt.replace(/\.result\.json$/,'.prompt.md'),
    'operator exact pack/attempt/prompt identity differs');
  const prompt=bound(row.operator_prompt),observed=creation.dispatches?.[`5.6-impact:${label}`];
  need(prompt.includes(`run: ${run}\nrole: alpha-repair\nlabel: ${label}\n`)
    &&prompt.includes(report.input_sha256)&&prompt.includes(`output: ${row.operator_report.path}\n`)
    &&observed?.stage==='5.6-impact'&&observed.role==='alpha-repair'&&observed.label===label
    &&same(observed.covers,[`${phase}:1`])&&observed.attempt===native.attempt&&observed.lastExitOk===true
    &&[observed.startedAt,observed.endedAt,native.started_at,native.ended_at].every(x=>Number.isFinite(Date.parse(x)))
    &&Date.parse(observed.startedAt)<=Date.parse(native.started_at)&&Date.parse(native.started_at)<=Date.parse(native.ended_at)
    &&Date.parse(native.ended_at)<=Date.parse(observed.endedAt)&&Date.parse(observed.endedAt)<=Date.parse(request.at),
    'operator is not the actual completed paused-boundary handoff');
  const finding=report.operator_work?.[row.operator_work_index];
  need(row.operator_work_index===0&&finding?.kind==='outside-assignment-ledger-schema'
    &&finding.command===`node tools/defect-ledger.mjs validate --run ${run}`&&finding.exit_code===1
    &&Array.isArray(finding.subjects)&&finding.subjects.length>0&&new Set(finding.subjects).size===finding.subjects.length
    &&same([...finding.subjects].sort(),row.deltas.map(d=>d.defect_id).sort())
    &&finding.error_count===row.deltas.reduce((n,d)=>n+d.fields.length,0),
    'normalization differs from exact native operator finding');
  const a=bound(row.canonical_before),b=bound(row.canonical_after),oldLines=a.split(/(?<=\n)/),newLines=b.split(/(?<=\n)/),changed=new Set(row.deltas.map(d=>d.defect_id));
  need(oldLines.length===newLines.length,'normalization appended/deleted canonical lines');
  const oldRows=[],newRows=[];for(let i=0;i<oldLines.length;i++){
    if(!oldLines[i].trim()){need(oldLines[i]===newLines[i],'canonical whitespace residual changed');continue;}
    const old=JSON.parse(oldLines[i]),now=JSON.parse(newLines[i]);oldRows.push(old);newRows.push(now);
    need(old.defect_id===now.defect_id&&(!changed.has(old.defect_id)?oldLines[i]===newLines[i]:old.run===run&&now.run===run),
      'foreign or unrelated canonical row changed');
  }
  const projection=rows=>rows.filter(r=>r.run===run&&['3a-adjudicate','3b-cross'].includes(r.caught_at_stage)
    &&!isPublishedItem(root,r.subject)).sort((a,b)=>String(a.defect_id).localeCompare(String(b.defect_id)));
  need(same(projection(oldRows),before)&&same(projection(newRows),after)
    &&oldRows.filter(r=>r.run===run).length===finding.checked_rows,'full canonical snapshots do not bind the exact original/current projection');
  need(applications.length===1&&applications[0].owner==='/root'&&applications[0].stage==='5.6-impact'
    &&same([...applications[0].changed_ids].sort(),[...changed].sort())
    &&applications[0].before_ledger_sha256===row.canonical_before.sha256
    &&applications[0].after_ledger_sha256===row.canonical_after.sha256
    &&Number.isFinite(Date.parse(applications[0].normalized_at))
    &&Date.parse(applications[0].normalized_at)>=Date.parse(native.ended_at)
    &&Date.parse(applications[0].normalized_at)>=Date.parse(request.at)
    &&Date.parse(applications[0].normalized_at)<=Date.parse(row.recorded_at),
    'missing genuine current root normalization time/application');
}
export function validateStep3LedgerNormalizationHistory(root,run,row,closure,currentRows){
  const {sha256,...payload}=row,v2=row.version===2;
  need(/^[a-z0-9][a-z0-9-]*$/.test(run)&&sha256===sha(payload)&&[1,2].includes(row.version)
    &&row.kind==='owner-step3-ledger-schema-normalization-history'&&row.run===run&&row.authorized_by==='owner'
    &&row.owner_identity==='/root'&&row.historical_only===true&&row.mathematical_acceptance===false
    &&row.native_coverage_adopted===false&&Number.isFinite(Date.parse(row.recorded_at))&&Date.parse(row.recorded_at)<=Date.now()
    &&typeof row.reason==='string'&&row.reason.trim().length>=80&&Array.isArray(row.deltas)&&row.deltas.length>0,
    'invalid explicit owner history');
  const bound=ref=>{
    need(ref&&typeof ref.path==='string'&&!ref.path.startsWith('/')&&/^[a-f0-9]{64}$/.test(ref.sha256??''),'invalid bound reference');
    const p=resolve(root,ref.path),research=realpathSync(join(root,'research'))+'/';
    need(p.startsWith(resolve(root,'research')+'/')&&lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()
      &&realpathSync(p).startsWith(research),'nonregular/outside research evidence');
    const bytes=readFileSync(p,'utf8');need(sha(bytes)===ref.sha256,'changed bound evidence '+ref.path);return bytes;
  };
  need(row.closure.path===`research/${run}-step3-closure.json`&&same(JSON.parse(bound(row.closure)),closure)
    &&closure.version===3&&closure.run===run&&closure.status==='closed'&&closure.basis==='dependency-ordered-step3a',
    'not the exact original closed receipt');
  need(row.native_close_result.path===`research/${run}-dispatch/tool-step3-close.result.json`,'wrong genuine close result');
  const result=JSON.parse(bound(row.native_close_result));
  need(result.run===run&&result.role==='tool'&&result.label==='step3-close'&&result.ok===true&&result.written_by==='autopilot'
    &&same(result.covers,['all'])&&Date.parse(result.ended_at)>=Date.parse(closure.closed_at)
    &&Date.parse(result.ended_at)<=Date.parse(row.recorded_at),'missing original successful native close');
  const before=JSON.parse(bound(row.original_rows)),after=JSON.parse(bound(row.normalized_rows));
  need(Array.isArray(before)&&Array.isArray(after)&&before.length===closure.step3_ledger_rows_count
    &&sha(before)===closure.step3_ledger_rows_sha256&&same(after,currentRows)
    &&before.length===after.length&&new Set(before.map(r=>r.defect_id)).size===before.length
    &&same(before.map(r=>r.defect_id),after.map(r=>r.defect_id)),'original/current selected inventory mismatch');
  const creation=JSON.parse(bound(row.creation_state));
  need(creation.run===run&&creation.stage===(v2?'5.6-impact':'5.9-repair')&&creation.paused===true
    &&Object.values(creation.dispatches??{}).every(d=>!d.startedAt||Boolean(d.endedAt)),'missing actual paused drained recording archive');
  for(const ref of row.proposal_evidence??[])bound(ref);
  const applications=(row.normalization_evidence??[]).map(ref=>JSON.parse(bound(ref)));
  need(applications.length>0&&applications.every(r=>r.run===run),'missing own normalization application evidence');
  const sources=(row.preimages??[]).flatMap(ref=>bound(ref).split(/\r?\n/).filter(Boolean).map(JSON.parse));
  const appliedIds=applications.flatMap(r=>Array.isArray(r.changed_ids)?r.changed_ids:(r.changes??[]).map(c=>c.id));
  if(v2)validateV2Evidence(root,run,row,bound,creation,before,after,applications);
  const byId=new Map(row.deltas.map(d=>[d.defect_id,d]));need(byId.size===row.deltas.length,'duplicate row delta');
  const changed=[];
  for(let i=0;i<before.length;i++){
    const old=before[i],now=after[i];if(same(old,now))continue;
    const delta=byId.get(old.defect_id);changed.push(old.defect_id);
    need(old.run===run&&now.run===run&&delta&&typeof delta.reason==='string'&&delta.reason.trim().length>=40
      &&delta.before_sha256===sha(old)&&delta.after_sha256===sha(now)
      &&sources.some(r=>same(r,old)),'missing authentic original row/delta');
    const fields=[...new Set([...Object.keys(old),...Object.keys(now)])].filter(k=>!same(old[k],now[k])).sort();
    need(same(fields,delta.fields),'exact field delta inventory changed');
    for(const field of fields){
      const a=old[field],b=now[field];let allowed=false;
      const aliases=v2?v2Mappings:mappings;
      if(Object.hasOwn(aliases,field))allowed=Object.hasOwn(old,field)&&(!v2||Object.hasOwn(aliases[field],a))&&aliases[field][a]===b;
      if(field==='caught_by_role')allowed=(v2?a==='alpha-batch-52'&&String(old.batch)==='52':a==='alpha')&&b==='group-alpha';
      if(field==='at')allowed=!Object.hasOwn(old,'at')&&b==='unknown';
      if(!v2&&field==='location'&&!Object.hasOwn(old,'location'))allowed=['definition','proof-step'].includes(b);
      if(!v2&&field==='subclass_note')allowed=!Object.hasOwn(old,field)&&now.subclass==='other'
        &&typeof b==='string'&&b.trim().length>=40&&b.includes(old.subclass);
      if(!v2&&field==='evidence')allowed=typeof a==='string'&&Array.isArray(b)&&b.length===1
        &&same(Object.keys(b[0]).sort(),['note','path'])&&b[0].note===a
        &&typeof b[0].path==='string'&&(b[0].path===old.report||b[0].path===old.decision_ref?.split('#')[0]);
      if(!v2&&field==='metadata_normalization'){
        allowed=!Object.hasOwn(old,field)&&!Object.hasOwn(old,'at')&&b?.by==='root'&&b.original_timestamp_missing===true
          &&Number.isFinite(Date.parse(b.at))&&Date.parse(b.at)>=Date.parse(closure.closed_at)&&Date.parse(b.at)<=Date.parse(row.recorded_at)
          &&typeof b.reason==='string'&&b.reason.trim().length>=40
          &&(row.preimages??[]).some(ref=>ref.path===b.original_record_archive)
          &&same(Object.keys(b).sort(),['at','by','original_record_archive','original_timestamp_missing','reason']);
      }
      if(!v2&&field==='disposition')allowed=a==='escalated'&&b==='open'&&old.status==='open'
        &&before.some(r=>r.run===run&&r.subject===old.subject&&r.disposition==='fixed'
          &&Array.isArray(r.supersedes)&&r.supersedes.includes(old.defect_id)&&same(r,after.find(n=>n.defect_id===r.defect_id)));
      need(allowed,'non-normalization semantic field change '+old.defect_id+'/'+field);
    }
  }
  need(same(changed,[...byId.keys()])&&changed.every(id=>appliedIds.includes(id)),'unaccounted/missing normalized rows');return true;
}
export function step3LedgerNormalizationHistory(root,run,closure,currentRows){
  const p=marker(root,run);if(!existsSync(p))return false;
  return validateStep3LedgerNormalizationHistory(root,run,read(p),closure,currentRows);
}
export function recordStep3LedgerNormalizationHistory(root,run,payload){
  const v2=payload.version===2,statePath=join(root,'.autopilot',run,'state.json'),stateBytes=readFileSync(statePath,'utf8'),state=JSON.parse(stateBytes);
  need(state.run===run&&state.stage===(v2?'5.6-impact':'5.9-repair')&&state.paused===true
    &&Object.values(state.dispatches??{}).every(d=>!d.startedAt||Boolean(d.endedAt)),'requires actual paused drained own normalization stage');
  const closure=read(join(root,'research',`${run}-step3-closure.json`)),row={...payload,sha256:sha(payload)},currentRows=selected(root,run);
  validateStep3LedgerNormalizationHistory(root,run,row,closure,currentRows);
  need(readFileSync(resolve(root,row.creation_state.path),'utf8')===stateBytes,'creation state differs from actual recording boundary');
  const canonicalBytes=v2?readFileSync(join(root,'research','defect-ledger.jsonl'),'utf8'):null;
  if(v2)need(sha(canonicalBytes)===row.canonical_after.sha256&&readFileSync(join(root,'.autopilot',run,'owner-gate-request.json'),'utf8')===readFileSync(resolve(root,row.owner_gate_request.path),'utf8'),'current full ledger/request differs from actual normalization boundary');
  const p=marker(root,run);need(!existsSync(p)&&readFileSync(statePath,'utf8')===stateBytes&&same(selected(root,run),currentRows)&&(!v2||readFileSync(join(root,'research','defect-ledger.jsonl'),'utf8')===canonicalBytes),'existing receipt or recording boundary changed');
  writeFileSync(p,JSON.stringify(row,null,2)+'\n',{flag:'wx'});return {path:p,historical_only:true,mathematical_acceptance:false};
}

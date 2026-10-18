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
export function validateStep3LedgerNormalizationHistory(root,run,row,closure,currentRows){
  const {sha256,...payload}=row;
  need(/^[a-z0-9][a-z0-9-]*$/.test(run)&&sha256===sha(payload)&&row.version===1
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
  need(creation.run===run&&creation.stage==='5.9-repair'&&creation.paused===true
    &&Object.values(creation.dispatches??{}).every(d=>!d.startedAt||Boolean(d.endedAt)),'missing actual paused drained recording archive');
  for(const ref of row.proposal_evidence??[])bound(ref);
  const applications=(row.normalization_evidence??[]).map(ref=>JSON.parse(bound(ref)));
  need(applications.length>0&&applications.every(r=>r.run===run),'missing own normalization application evidence');
  const sources=(row.preimages??[]).flatMap(ref=>bound(ref).split(/\r?\n/).filter(Boolean).map(JSON.parse));
  const appliedIds=applications.flatMap(r=>Array.isArray(r.changed_ids)?r.changed_ids:(r.changes??[]).map(c=>c.id));
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
      if(Object.hasOwn(mappings,field))allowed=Object.hasOwn(old,field)&&mappings[field][a]===b;
      if(field==='caught_by_role')allowed=a==='alpha'&&b==='group-alpha';
      if(field==='at')allowed=!Object.hasOwn(old,'at')&&b==='unknown';
      if(field==='location'&&!Object.hasOwn(old,'location'))allowed=['definition','proof-step'].includes(b);
      if(field==='subclass_note')allowed=!Object.hasOwn(old,field)&&now.subclass==='other'
        &&typeof b==='string'&&b.trim().length>=40&&b.includes(old.subclass);
      if(field==='evidence')allowed=typeof a==='string'&&Array.isArray(b)&&b.length===1
        &&same(Object.keys(b[0]).sort(),['note','path'])&&b[0].note===a
        &&typeof b[0].path==='string'&&(b[0].path===old.report||b[0].path===old.decision_ref?.split('#')[0]);
      if(field==='metadata_normalization'){
        allowed=!Object.hasOwn(old,field)&&!Object.hasOwn(old,'at')&&b?.by==='root'&&b.original_timestamp_missing===true
          &&Number.isFinite(Date.parse(b.at))&&Date.parse(b.at)>=Date.parse(closure.closed_at)&&Date.parse(b.at)<=Date.parse(row.recorded_at)
          &&typeof b.reason==='string'&&b.reason.trim().length>=40
          &&(row.preimages??[]).some(ref=>ref.path===b.original_record_archive)
          &&same(Object.keys(b).sort(),['at','by','original_record_archive','original_timestamp_missing','reason']);
      }
      if(field==='disposition')allowed=a==='escalated'&&b==='open'&&old.status==='open'
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
  const statePath=join(root,'.autopilot',run,'state.json'),stateBytes=readFileSync(statePath,'utf8'),state=JSON.parse(stateBytes);
  need(state.run===run&&state.stage==='5.9-repair'&&state.paused===true
    &&Object.values(state.dispatches??{}).every(d=>!d.startedAt||Boolean(d.endedAt)),'requires actual paused drained own5.9');
  const closure=read(join(root,'research',`${run}-step3-closure.json`)),row={...payload,sha256:sha(payload)},currentRows=selected(root,run);
  validateStep3LedgerNormalizationHistory(root,run,row,closure,currentRows);
  need(readFileSync(resolve(root,row.creation_state.path),'utf8')===stateBytes,'creation state differs from actual recording boundary');
  const p=marker(root,run);need(!existsSync(p)&&readFileSync(statePath,'utf8')===stateBytes&&same(selected(root,run),currentRows),'existing receipt or recording boundary changed');
  writeFileSync(p,JSON.stringify(row,null,2)+'\n',{flag:'wx'});return {path:p,historical_only:true,mathematical_acceptance:false};
}

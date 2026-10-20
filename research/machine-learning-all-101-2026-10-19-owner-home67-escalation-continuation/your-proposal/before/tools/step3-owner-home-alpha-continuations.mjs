// One owner-registered fresh native home adjudication; never inherited acceptance.
import { existsSync, readFileSync, readdirSync, lstatSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { loadForeignRefuterRoutes, foreignRefuterHash } from './step3-owner-foreign-refuter-routes.mjs';
export const HOME_ALPHA_POLICY = 'owner-step3-foreign-refuter-home-alpha-continuation-v1';
const sha=x=>createHash('sha256').update(x).digest('hex');
const need=(x,m)=>{if(!x)throw Error(`home Alpha continuation: ${m}`);};
const fileFor=run=>`research/${run}-step3-home-alpha-continuations.json`;
const batch=x=>typeof x==='string'&&/^[1-9]\d*$/.test(x);
function bytes(root,p){
 need(typeof p==='string'&&!isAbsolute(p)&&!p.includes('\\'),'invalid path');
 const full=resolve(root,p),rel=relative(resolve(root),full);need(rel&&!rel.startsWith('..')&&!isAbsolute(rel),'escaping path');
 let at=resolve(root);for(const part of rel.split('/')){at=resolve(at,part);need(!lstatSync(at).isSymbolicLink(),'symlink evidence');}
 need(lstatSync(full).isFile(),'nonregular evidence');return readFileSync(full);
}
const parse=b=>JSON.parse(b.toString());
function ref(root,run,r){need(r&&typeof r.path==='string'&&r.path.startsWith(`research/${run}-`)&&/^[a-f0-9]{64}$/.test(r.sha256??''),'invalid reference');const b=bytes(root,r.path);need(sha(b)===r.sha256,`changed evidence ${r.path}`);return b;}
const pages=d=>Array.isArray(d)?d:d.pages??[];
const ids=d=>pages(d).flatMap(p=>(p.items??[]).map(x=>typeof x==='string'?x:x.id));
const exact=(a,b)=>a.length===b.length&&new Set(a).size===a.length&&a.every(x=>b.includes(x));
export const homeAlphaLabel=unit=>`3a-batch-${unit}-foreign-refuter-continuation-1`;
export function homeAlphaContinuations(root,run,{beforeDispatch=false,units=null,selected=null}={}){
 need(/^[a-zA-Z0-9_-]+$/.test(run),'invalid run');const path=fileFor(run);
 if(!existsSync(resolve(root,path)))return [];
 const registry=bytes(root,path),doc=parse(registry);
 need(doc.version===1&&doc.run===run&&doc.policy===HOME_ALPHA_POLICY&&doc.authorized_by==='owner'
  &&typeof doc.authorization==='string'&&doc.authorization.trim().length>=40&&Array.isArray(doc.continuations)&&doc.continuations.length,'invalid owner authority');
 need(new Set(doc.continuations.map(e=>e.unit)).size===doc.continuations.length,'duplicate unit');
 if(units)need(doc.continuations.length<=units.length&&doc.continuations.every(e=>units.map(String).includes(e.unit)),'unit outside native stage');
 const assignments=parse(bytes(root,`research/${run}-alpha-groups.json`));const groups=Array.isArray(assignments)?assignments:assignments.groups??[];
 return doc.continuations.map(e=>{
  const unit=e.unit,canonical=`batch-${unit}`,oldPrefix=`research/${run}-dispatch/alpha-3a-${canonical}`;
  need(e.version===1&&e.run===run&&e.owner_identity==='/root'&&batch(unit)&&e.label===homeAlphaLabel(unit)
   &&e.canonical_group===canonical&&e.mathematical_acceptance===false&&e.previous_acceptance_inherited===false
   &&e.historical_artifact_basis==='owner-captured current completed-native artifacts; no structured-output byte attestation'
   &&typeof e.reason==='string'&&e.reason.trim().length>=80&&Number.isFinite(Date.parse(e.writers_drained_at)),'invalid entry');
  const owners=groups.filter(g=>g.covers?.map(String).includes(unit));need(owners.length===1,'ambiguous Alpha assignment');
  const stable=ref(root,run,e.previous_result),old=parse(stable),attempt=ref(root,run,e.previous_attempt),prompt=ref(root,run,e.previous_prompt);
  need(e.previous_result.path===oldPrefix+'.result.json'&&Number.isSafeInteger(old.attempt)&&old.attempt>=1
   &&e.previous_attempt.path===oldPrefix+`.attempt-${old.attempt}.result.json`&&attempt.equals(stable)
   &&e.previous_prompt.path===oldPrefix+`.attempt-${old.attempt}.prompt.md`
   &&old.run===run&&old.role==='alpha'&&old.label===`3a-${canonical}`&&old.ok===true&&old.exit_code===0&&old.process_exit_code===0
   &&typeof old.session_id==='string'&&old.session_id.length>0&&old.timed_out!==true&&old.covers?.length===1&&String(old.covers[0])===unit
   &&old.terminal_summary?.task_completed===true&&old.terminal_summary.task_aborted===false&&old.terminal_summary.final_response_present===true
   &&typeof old.prompt==='string'&&old.prompt.endsWith('/'+e.previous_prompt.path)
   &&Number.isFinite(Date.parse(old.started_at))&&Number.isFinite(Date.parse(old.ended_at))&&Date.parse(old.started_at)<=Date.parse(old.ended_at)
   &&Date.parse(old.ended_at)<=Date.parse(e.writers_drained_at)&&prompt.length>0,'not genuine original standalone home Alpha completion');
  const reportPath=`research/${run}-alpha-${canonical}-3a.md`,decisionsPath=`research/${run}-alpha-${canonical}-3a-decisions.json`,scopePath=`research/${run}-step3-scope-${unit}.json`;
  need(e.previous_report.path!==reportPath&&e.previous_decisions.path!==decisionsPath&&e.previous_scope.path!==scopePath,'original artifact must be immutable archive');
  const report=ref(root,run,e.previous_report),decisionBytes=ref(root,run,e.previous_decisions),decisions=parse(decisionBytes),scopeBytes=ref(root,run,e.previous_scope),scope=parse(scopeBytes);
  need(typeof old.tail==='string'&&old.tail.includes(reportPath)&&old.tail.includes(decisionsPath)&&report.length>0,'native completion lacks canonical artifacts');
  need(decisions.version===1&&decisions.run===run&&decisions.group===canonical&&Array.isArray(decisions.decisions)
   &&new Set(decisions.decisions.map(d=>d.obligation)).size===decisions.decisions.length,'wrong original decisions');
  need(scope.version===2&&scope.run===run&&String(scope.batch)===unit&&scope.group===String(owners[0].label),'wrong original scope/group');
  const manifest=parse(ref(root,run,e.registration_manifest)),itemIds=ids(manifest),pageIds=pages(manifest).map(p=>p.id);
  need(itemIds.length>0&&new Set(itemIds).size===itemIds.length&&new Set(pageIds).size===pageIds.length
   &&exact(itemIds,scope.manifest_post??[])&&exact(pageIds,scope.page_manifest_post??[]),'scope/manifest membership changed');
  const requiredPaths=[scopePath,`research/${run}-batch-${unit}.pages.json`,`research/${run}-batch-${unit}.proof-contracts.json`,
    ...itemIds.map(id=>`items/${id}.md`),...pages(manifest).map(p=>`library/${p.category}/${p.id}.md`)];
  need(Array.isArray(e.current_inputs)&&exact(e.current_inputs.map(x=>x.path),requiredPaths)
   &&e.current_inputs.every(x=>/^[a-f0-9]{64}$/.test(x.sha256??'')),'incomplete current guards');
  const byPath=new Map(e.current_inputs.map(x=>[x.path,x.sha256]));
  need(byPath.get(scopePath)===e.previous_scope.sha256&&byPath.get(`research/${run}-batch-${unit}.pages.json`)===e.registration_manifest.sha256,'scope/manifest registration mismatch');
  const foreignPath=`research/${run}-step3-owner-foreign-refuter-routes.json`,foreign=parse(bytes(root,foreignPath));
  need(foreign.version===1&&foreign.run===run&&foreign.authorized_by==='owner'&&Array.isArray(foreign.routes),'missing foreign route authority');
  const homeRoutes=foreign.routes.filter(x=>x.target_batch===unit);
  need(homeRoutes.length>0&&Array.isArray(e.foreign_refuter_routes)&&e.foreign_refuter_routes.length===homeRoutes.length
   &&new Set(e.foreign_refuter_routes.map(foreignRefuterHash)).size===e.foreign_refuter_routes.length,'missing/duplicate foreign home bindings');
  for(const route of homeRoutes)need(e.foreign_refuter_routes.some(r=>r.path===foreignPath&&r.entry_sha256===foreignRefuterHash(route)),'changed exact foreign entry');
  need(homeRoutes.some(r=>!decisions.decisions.some(d=>d.obligation===`gate:${r.defect_id}`)),'no newly owed foreign gate');
  const task=ref(root,run,e.task).toString();
  need(task.includes(reportPath)&&task.includes(decisionsPath)&&task.includes(canonical)
   &&homeRoutes.every(r=>task.includes(`gate:${r.defect_id}`)),'fresh task omits canonical identity/mandatory gates');
  const captured=ref(root,run,e.owner_capture),capture=parse(captured);
  need(capture.version===1&&capture.run===run&&capture.unit===unit&&capture.owner_identity==='/root'
   &&capture.native_acceptance_claimed===false&&capture.original_artifact_bytes_native_bound===false
   &&capture.report_sha256===e.previous_report.sha256&&capture.decisions_sha256===e.previous_decisions.sha256
   &&capture.scope_sha256===e.previous_scope.sha256&&capture.old_result_sha256===e.previous_result.sha256,'missing honest owner artifact capture');
  if(beforeDispatch&&(selected===null||selected.map(String).includes(unit))){
   const freshPrefix=`alpha-${e.label}`;need(!readdirSync(resolve(root,`research/${run}-dispatch`)).some(n=>n===freshPrefix+'.result.json'||new RegExp('^'+freshPrefix+'\\.attempt-[1-9]\\d*\\.result\\.json$').test(n)),'one fresh native home attempt already completed');
   need(bytes(root,reportPath).equals(report)&&bytes(root,decisionsPath).equals(decisionBytes),'canonical original artifact changed before launch');
   for(const input of e.current_inputs)need(sha(bytes(root,input.path))===input.sha256,`current input changed ${input.path}`);
   const currentRoutes=loadForeignRefuterRoutes(root,run).filter(x=>x.e.target_batch===unit);
   need(exact(currentRoutes.map(x=>foreignRefuterHash(x.binding)),e.foreign_refuter_routes.map(foreignRefuterHash)),'foreign current route changed');
  }
  return {entry:e,binding:{path,entry_sha256:foreignRefuterHash(e)},old_decisions:decisions,old_scope:scope};
 });
}
export function homeAlphaReviewIdentity(root,run,unit){
 const route=homeAlphaContinuations(root,run).find(x=>x.entry.unit===String(unit));
 const label=route?route.entry.label:`3a-batch-${unit}`;
 if(route&&existsSync(resolve(root,`research/${run}-dispatch/alpha-${label}.result.json`)))freshHomeAlphaEvidence(root,run,route.entry);
 return {registered:Boolean(route),label,group:`batch-${unit}`,prefix:`research/${run}-dispatch/alpha-${label}`,stable_path:`research/${run}-dispatch/alpha-${label}.result.json`};
}
export function registeredHomeAlphaResult(root,run,row){
 if(!root||!run||row?.run!==run||row.role!=='alpha')return false;
 const m=/^3a-batch-([1-9]\d*)-foreign-refuter-continuation-1$/.exec(row.label??'');if(!m)return false;
 const route=homeAlphaContinuations(root,run).find(x=>x.entry.unit===m[1]);
 if(!(route&&row.attempt===1&&row.label===route.entry.label&&row.covers?.length===1&&String(row.covers[0])===m[1]))return false;
 try {freshHomeAlphaEvidence(root,run,route.entry);return foreignRefuterHash(row)===foreignRefuterHash(parse(bytes(root,`research/${run}-dispatch/alpha-${route.entry.label}.result.json`)));}
 catch{return false;}
}
function freshHomeAlphaEvidence(root,run,e){
 const prefix=`research/${run}-dispatch/alpha-${e.label}`;
 const stable=bytes(root,prefix+'.result.json'),result=parse(stable),attempt=bytes(root,prefix+'.attempt-1.result.json'),prompt=bytes(root,prefix+'.attempt-1.prompt.md');
 need(stable.equals(attempt)&&result.run===run&&result.role==='alpha'&&result.label===e.label&&result.attempt===1
  &&result.evidence_tag==='.attempt-1'&&result.ok===true&&result.exit_code===0&&result.process_exit_code===0&&result.timed_out!==true
  &&result.covers?.length===1&&String(result.covers[0])===e.unit&&typeof result.session_id==='string'&&result.session_id.length>0
  &&result.terminal_summary?.task_completed===true&&result.terminal_summary.task_aborted===false&&result.terminal_summary.final_response_present===true
  &&Number.isFinite(Date.parse(result.started_at))&&Number.isFinite(Date.parse(result.ended_at))&&Date.parse(result.started_at)<=Date.parse(result.ended_at)
  &&Date.parse(result.started_at)>=Date.parse(e.writers_drained_at)
  &&typeof result.prompt==='string'&&result.prompt.endsWith('/'+prefix+'.attempt-1.prompt.md'),'fresh native completion is missing/failed/wrong or not exact one-shot');
 const text=prompt.toString();
 const reportPath=`research/${run}-alpha-${e.canonical_group}-3a.md`;
 const decisionsPath=`research/${run}-alpha-${e.canonical_group}-3a-decisions.json`;
 // dispatch.mjs resolves run/unit/output, but ordinary task G remains a
 // protocol variable. Authenticate that actual grammar without claiming that
 // the old fallback-array planner embedded its later candidate tasks.
 const header=`# This dispatch\n\nrun: ${run}\nrole: alpha\nlabel: ${e.label}\ncovers: ${e.unit}\noutput: ${reportPath}\n\n`;
 const canonicalRule="- An owner-registered fresh dispatch `3a-batch-N-foreign-refuter-continuation-1` retains canonical `G=batch-N`, covers exactly batch N, and writes the normal `alpha-batch-N-3a.md` and `alpha-batch-N-3a-decisions.json` with `group: batch-N`. Its fresh result filename is separate. Read the authenticated continuation task and original archived report/decisions/scope; independently re-review every old owed obligation, current risk review and every new required foreign gate. Old acceptance supplies history, never your verdict. For all other labels, follow the ordinary rule below.";
 const ordinary=text.includes(canonicalRule)
  &&text.includes(`research/${run}-step3-scope-${e.unit}.json`)
  &&text.includes(`research/${run}-alpha-G-3a-order.task.md`)
  &&text.includes('- Write `research/'+run+'-alpha-G-3a.md` with evidence, verdicts, repairs, sources, published findings, checks, and blockers.')
  &&text.includes('- Write `research/'+run+'-alpha-G-3a-decisions.json` as `{version:1,run,group,decisions}`.');
 const deliveredRegisteredTask=text.includes(ref(root,run,e.task).toString())
  &&text.includes(decisionsPath);
 need(text.split('# This dispatch\n').length===2&&(text.startsWith(header)||text.includes('\n'+header))
  &&(ordinary||deliveredRegisteredTask),'fresh native prompt lacks authentic canonical assignment');
 return {[prefix+'.result.json']:sha(stable),[prefix+'.attempt-1.result.json']:sha(attempt),[prefix+'.attempt-1.prompt.md']:sha(prompt)};
}
export function homeAlphaClosureEvidence(root,run){
 const path=fileFor(run);if(!existsSync(resolve(root,path)))return {};
 const doc=parse(bytes(root,path)),out={[path]:sha(bytes(root,path))};
 // Historical inputs remain exact after genuine native source amendments.
 for(const e of doc.continuations??[]){
  for(const key of ['previous_result','previous_attempt','previous_prompt','previous_report','previous_decisions','previous_scope','registration_manifest','owner_capture','task']){ref(root,run,e[key]);out[e[key].path]=e[key].sha256;}
  Object.assign(out,freshHomeAlphaEvidence(root,run,e));
 }
 return out;
}

// Preserve every old owed decision independently of a later scope projection.
export function homeAlphaRequiredObligations(root,run,unit){
 const route=homeAlphaContinuations(root,run).find(x=>x.entry.unit===String(unit));if(!route)return [];
 const {old_scope:s,binding,old_decisions:doc}=route,targets=new Map();
 const add=t=>targets.set(t.obligation,{...t,batch:String(unit),owner_home_alpha_continuation:binding});
 for(const id of s.touched??[])add({obligation:`touched:${unit}:${id}`,id,route:'touched',added:(s.added??[]).includes(id)});
 for(const id of s.pages_touched??[])add({obligation:`page:${unit}:${id}`,id,route:'page',order_anchor:s.page_order_anchors?.[id]??[]});
 for(const finding of s.reader_findings??[])add({...finding,route:'reader'});
 for(const finding of s.refuter_findings??[])add({...finding,route:'flagged'});
 for(const d of doc.decisions)if(!targets.has(d.obligation)){
  need(d.route==='gate'&&d.obligation===`gate:${d.defect_ids?.[0]}`&&d.defect_ids?.length===1
    &&(s.manifest_post??[]).concat(s.page_manifest_post??[]).includes(d.id),'original decision is not a supported owed scope/gate obligation');
  add({obligation:d.obligation,id:d.id,route:'gate'});
 }
 return [...targets.values()];
}

// One-shot scheduling after a genuine proof repair; never a passed collection.
import {existsSync,readFileSync,writeFileSync,mkdirSync,lstatSync,realpathSync,readdirSync} from 'node:fs';
import {resolve,join,relative,dirname} from 'node:path';
import {createHash} from 'node:crypto';
import {itemHashGuard} from './item-hash.mjs';
import {statementHash} from './step5-statement.mjs';
import {readLibraryItems,discoverDownstream} from './step5-rounds.mjs';
import {execution,loadReportingOwnerRecovery,reportingOwnerHome} from './step5-reporting-owner-recovery.mjs';
import {reviewContextHashes,buildSuccessorReportingObservation} from './step5-workflow.mjs';
const hash=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b),read=p=>JSON.parse(readFileSync(p,'utf8'));
const need=(v,m)=>{if(!v)throw Error('Step 5 successor uncertainty: '+m);};
const date=x=>typeof x==='string'&&Number.isFinite(Date.parse(x));
const drained=s=>Object.values(s.dispatches??{}).every(d=>!d.startedAt||Boolean(d.endedAt));
const phase='impact-initial-pass-2',nextPhase='impact-initial-pass-3';
const directory=(root,run)=>join(root,'research',`${run}-step5-v2`);
export const successorUncertaintyPath=(root,run)=>join(directory(root,run),'impact-initial-pass-2-1-owner-uncertainty-continuation.json');
const progressPath=(root,run)=>join(directory(root,run),'impact-initial-1-progress.json');
const loaded=new WeakSet();
export const isSuccessorUncertaintyContinuation=v=>loaded.has(v);
const graph=items=>items.map(({id,deps,references,aliases,published})=>({id,deps,references,aliases,published}));
function scope(items,supplier){
 const result=new Set([supplier]),queue=[supplier];
 while(queue.length)for(const row of discoverDownstream({items,repairedIds:[queue.shift()]}))if(!result.has(row.id)){result.add(row.id);queue.push(row.id);}
 return [...result].sort();
}
function hold(root,run,state,request,executions){
 need(state.run===run&&state.stage==='5.2-impact'&&state.paused===true&&(state.stageRounds?.['5.2-impact']??1)===1&&drained(state)
  &&request.run===run&&request.version===1&&request.group==='5.2-impact'&&same(request.stages,['5.2-impact'])&&date(request.at),'not actual paused/drained 5.2 hold');
 for(const v of executions){const n=v.native,o=state.dispatches?.[`5.2-impact:${n.label}`];
  need(o?.stage==='5.2-impact'&&o.role==='alpha-repair'&&o.label===n.label&&same(o.covers,[`${phase}:${v.report.unit}`])&&o.attempt===n.attempt&&o.lastExitOk===true&&date(o.startedAt)&&date(o.endedAt)
   &&Date.parse(o.startedAt)<=Date.parse(n.started_at)&&Date.parse(n.ended_at)<=Date.parse(o.endedAt)&&Date.parse(o.endedAt)<=Date.parse(request.at),'hold does not bind exact successful successor executions');
 }
}
function validate(root,run,row,{current=false,bytes=null,archives=null}={}){
 const path=successorUncertaintyPath(root,run),{sha256,...payload}=row;
 need(sha256===hash(payload)&&row.version===1&&row.kind==='owner-successor-uncertainty-scheduling-continuation'&&row.root===resolve(root)&&row.run===run&&row.phase===phase&&row.round===1&&row.unit==='3'
  &&same(row.units,['1','2','3'])&&row.authorized_by==='owner'&&row.owner_identity==='/root'&&date(row.recorded_at)&&Date.parse(row.recorded_at)<=Date.now()&&row.review_credit_granted===false&&row.native_acceptance===false&&row.resume_original_reporting_session===true
  &&typeof row.reason==='string'&&row.reason.trim().length>=80,'invalid explicit successor envelope');
 const evidence={[path]:hash(bytes??readFileSync(path,'utf8'))};
 const boundText=f=>{const p=resolve(root,f);need(p.startsWith(resolve(root,'research')+'/')&&(archives?.has(p)||existsSync(p)&&lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()&&realpathSync(p).startsWith(realpathSync(join(root,'research'))+'/')),'invalid immutable archive');
  const b=archives?.get(p)??readFileSync(p,'utf8');need(row.bindings?.[relative(root,p)]===hash(b),'stale/missing evidence '+f);evidence[p]=hash(b);return b;};
 const bound=f=>JSON.parse(boundText(f));for(const p of Object.keys(row.bindings??{}))boundText(p);
 const initial=loadReportingOwnerRecovery(root,run,'impact-initial',1);need(initial&&initial.row.version===2,'genuine initial all-owner recovery required');
 for(const [p,h]of Object.entries(initial.evidence))need(evidence[p]===h,'initial recovery provenance omitted');
 const pack=bound(join(directory(root,run),`${phase}-1.json`)),progress=bound(row.creation_progress),state=bound(row.creation_state),request=bound(row.owner_gate_request);
 need(pack.run===run&&pack.phase===phase&&pack.basePhase==='impact-initial'&&pack.round===1&&pack.repair_scope==='frontier'&&same(pack.units,['1','2','3'])&&pack.reporting_owner_recovery?.path===initial.path
  &&progress.run===run&&progress.phase==='impact-initial'&&progress.round===1&&progress.complete===false&&progress.activePhase===phase&&same(progress.passes,['impact-initial',phase])&&!progress.activeMaintenance
  &&request.id===row.owner_gate_request_id&&Date.parse(request.at)<=Date.parse(row.recorded_at),'not exact first persistent successor boundary');
 const executions=pack.units.map(unit=>execution(root,run,pack,unit,boundText));hold(root,run,state,request,executions);
 const original=executions.find(v=>v.report.unit==='3'),uncertain=executions.flatMap(v=>v.report.reviews.filter(r=>r.uncertain===true).map(r=>({unit:String(v.report.unit),row:r})));
 need(uncertain.length===1&&uncertain[0].unit==='3'&&same(row.original_uncertain_review,uncertain[0].row)&&row.supplier===uncertain[0].row.id&&row.original_session_id===original.native.session_id
  &&resolve(root,original.native.session_home??'')===reportingOwnerHome(root,run,'impact-initial',1,'3')&&row.original_final_sha256===original.final_sha256,'wrong exact persistent reporting owner or native uncertainty');
 for(const v of executions){const u=String(v.report.unit),n=v.native;need(typeof n.session_id==='string'&&n.session_id.length>0&&resolve(root,n.session_home??'')===reportingOwnerHome(root,run,'impact-initial',1,u)
  &&n.session_id!==initial.values.find(l=>l.row.unit===u).row.original_session_id&&same(v.report.created_items,[])&&same(v.report.decisions,[]),'wrong genuine new initial reporting identities');}
 const snapshot=bound(row.current_snapshot),repair=bound(row.repair_evidence_file),items=snapshot.inventory,targets=scope(items,row.supplier);
 need(repair.original_report_sha256===hash(boundText(original.reportPath))&&repair.original_result_sha256===hash(boundText(original.dispatch))&&repair.original_pack_sha256===hash(boundText(join(directory(root,run),`${phase}-1.json`)))&&repair.original_uncertain_review_sha256===hash(row.original_uncertain_review),'completed root repair differs from exact captured original uncertainty evidence');
 need(Array.isArray(items)&&new Set(items.map(i=>i.id)).size===items.length&&same(row.targets,targets)&&targets.every(id=>pack.frontier_ids.includes(id)),'affected supplier/consumer scope is incomplete or outside frontier');
 const nativePost={...pack.before,...Object.fromEntries(executions.flatMap(v=>v.report.reviews).map(r=>[r.id,r.post_sha256]))},rootChanges=snapshot.sources.filter(s=>s.guard_sha256!==nativePost[s.id]).map(s=>s.id);
 need(rootChanges.length>0&&rootChanges.every(id=>targets.includes(id)),'current frontier mathematical delta is outside completed repair scope');
 need(repair.version===1&&repair.kind==='owner-completed-proof-repair'&&repair.run===run&&repair.phase===phase&&repair.round===1&&repair.unit==='3'&&repair.supplier===row.supplier
  &&repair.completed===true&&repair.mathematical_review_completed===true&&repair.native_coverage_granted===false&&repair.statement_narrowed===false&&repair.owner_identity==='/root'&&typeof repair.repairer_identity==='string'&&repair.repairer_identity.startsWith('/root/')
  &&date(repair.completed_at)&&Date.parse(repair.completed_at)>=Date.parse(original.native.ended_at)&&Date.parse(repair.completed_at)<=Date.parse(row.recorded_at)&&same(repair.rows?.map(r=>r.id).sort(),targets),'missing genuine completed same-owner proof repair and all consumer dispositions');
 for(const r of repair.rows){const before=boundText(r.before_file),after=boundText(r.after_file),id=r.id,post=snapshot.sources.find(s=>s.id===id),nativeReview=executions.flatMap(v=>v.report.reviews).find(v=>v.id===id);
  const fm=text=>text.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/)?.[0];
  need(fm(before)&&fm(before)===fm(after)&&statementHash(before)===statementHash(after)&&r.before_raw_sha256===hash(before)&&r.after_raw_sha256===hash(after)&&r.before_guard_sha256===itemHashGuard(before)&&r.after_guard_sha256===itemHashGuard(after)
   &&r.before_statement_sha256===statementHash(before)&&r.after_statement_sha256===statementHash(after)&&post?.raw_sha256===hash(after)&&post.guard_sha256===itemHashGuard(after)
   &&r.reviewer_identity===repair.repairer_identity&&r.uncertain===false&&typeof r.reason==='string'&&r.reason.trim().length>=80&&r.review_context_sha256===snapshot.contexts[id]?.review_context_sha256&&['repaired','unaffected'].includes(r.disposition)
   &&(r.disposition==='repaired')===(hash(before)!==hash(after)),'invalid proof-only same-owner repair/current consumer evidence '+id);
  need(itemHashGuard(before)===(nativeReview?.post_sha256??pack.before[id]),'repair before bytes differ from actual native reviewed carrier '+id);
  if(id===row.supplier)need(itemHashGuard(before)===row.original_uncertain_review.post_sha256&&itemHashGuard(before)!==itemHashGuard(after)&&r.disposition==='repaired','no actual repair of the native uncertain supplier');
  const owner=pack.reporting_owner_review_owners?.[id]??initial.owners.get(id);need(!owner||owner==='3','affected consumer has a conflicting original review owner');
 }
 const prep=bound(row.preparation_file),inputs=bound(row.preparation_inputs_file);
 need(prep.run===run&&prep.owner==='/root'&&prep.ok===true&&prep.metadata_checked===true&&prep.native_execution_coverage===false&&prep.mathematical_review_claimed===false&&prep.selected_count===inputs.selected_count
  &&inputs.run===run&&inputs.native_execution_coverage===false&&inputs.mathematical_review_claimed===false&&inputs.selected_count===inputs.items.length&&same(snapshot.sources,inputs.items.map(i=>({id:i.id,raw_sha256:i.raw_sha256,guard_sha256:i.guard_sha256})))
  &&new Set(snapshot.sources.map(s=>s.id)).size===snapshot.sources.length&&targets.every(id=>snapshot.contexts[id]?.post_sha256===snapshot.sources.find(s=>s.id===id)?.guard_sha256),'missing complete current mechanical preparation');
 const observation=bound(row.historical_observation),allReviews=executions.flatMap(v=>v.report.reviews),eligible=allReviews.filter(r=>!targets.includes(r.id)&&r.uncertain===false&&r.post_sha256===snapshot.contexts[r.id]?.post_sha256&&r.review_context_sha256===snapshot.contexts[r.id]?.review_context_sha256);
 need(observation.kind==='successor-uncertainty-historical-scheduling-observation'&&observation.run===run&&observation.phase===phase&&observation.round===1&&observation.native_acceptance===false&&observation.historical_only===true&&same(observation.reviews,[])
  &&same(observation.historical_reviews,allReviews)&&same(observation.genuine_current_native_reviews,eligible)&&snapshot.sources.every(s=>observation.post?.[s.id]===s.guard_sha256)&&same(observation.errors,[`invalid review 3/${row.supplier}`])&&Object.entries(observation.evidence).every(([p,h])=>evidence[p]===h),'observation cannot grant uncertain/stale review credit or hide errors');
 const next=join(directory(root,run),`${nextPhase}-1.json`);if(existsSync(next)){const p=read(next);need(p.successor_uncertainty_continuation?.path===path&&p.reporting_owner_sessions?.['3']?.mode==='resume'&&p.reporting_owner_sessions['3'].session_id===row.original_session_id
  &&targets.every(id=>p.assignments['3'].includes(id))&&Object.entries(evidence).every(([f,h])=>p.input_evidence?.[f]===h),'genuine first continuation pack no longer binds admission/scope/session');}
 if(current){const live=read(join(root,'.autopilot',run,'state.json')),qr=readFileSync(join(root,'.autopilot',run,'owner-gate-request.json'),'utf8');hold(root,run,live,JSON.parse(qr),executions);
  need(qr===boundText(row.owner_gate_request)&&row.units?.every(u=>{const k=`5.2-impact:${executions.find(v=>String(v.report.unit)===u).native.label}`;return same(live.dispatches[k],state.dispatches[k]);})&&readFileSync(progressPath(root,run),'utf8')===boundText(row.creation_progress)&&!existsSync(next)
   &&!existsSync(join(directory(root,run),`${phase}-1-collected.json`)),'live hold/progress/request changed or successor already frozen');
  const actual=readLibraryItems(root,{run});need(same(snapshot.inventory,graph(actual.filter(i=>targets.includes(i.id))))&&same(targets,scope(actual,row.supplier))&&same(snapshot.contexts,reviewContextHashes(root,snapshot.sources.map(s=>s.id))),'actual current dependency inventory/context changed');
  for(const s of snapshot.sources){const b=readFileSync(join(root,'items',s.id+'.md'),'utf8');need(hash(b)===s.raw_sha256&&itemHashGuard(b)===s.guard_sha256,'current source changed '+s.id);}
  const manifests=readdirSync(join(root,'research')).filter(f=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(f)).map(f=>'research/'+f).sort(),guards=new Map(inputs.guards.map(g=>[g.path,g.raw_sha256]));
  need(same(manifests,snapshot.manifests.map(m=>m.path).sort()),'missing manifest');const selected=new Set();for(const m of snapshot.manifests){need(hash(readFileSync(join(root,m.path),'utf8'))===m.sha256&&guards.get(m.path)===m.sha256,'current manifest changed');for(const p of read(join(root,m.path)))for(const i of p.items??[])selected.add(i.id);}need(same([...selected].sort(),snapshot.sources.map(s=>s.id).sort()),'source vector is not exact manifest scope');
  const regenerated=buildSuccessorReportingObservation(root,run,pack,executions.map(v=>v.report),observation.evidence),relevant=v=>Object.fromEntries(Object.entries(v).filter(([key])=>key!=='post'));need(same(relevant(observation),relevant(regenerated)),'historical observation differs from actual native/current inputs');
 }
 const value={root,run,row,path,evidence,pack,original,targets:new Set(targets),snapshot,observation,observationPath:resolve(root,row.historical_observation)};loaded.add(value);return value;
}
export function loadSuccessorUncertaintyContinuation(root,run,{current=false}={}){const p=successorUncertaintyPath(root,run);return existsSync(p)?validate(root,run,read(p),{current}):null;}
export async function previewSuccessorUncertaintyContinuation(root,run,payload){return recordSuccessorUncertaintyContinuation(root,run,payload,{dryRun:true});}
export async function recordSuccessorUncertaintyContinuation(root,run,payload,{dryRun=false}={}){
 need(same(Object.keys(payload).sort(),['reason','repair_evidence_file','preparation_file','preparation_inputs_file'].sort()),'invalid typed recorder payload');
 const sp=join(root,'.autopilot',run,'state.json'),qp=join(root,'.autopilot',run,'owner-gate-request.json'),sb=readFileSync(sp,'utf8'),qb=readFileSync(qp,'utf8'),pb=readFileSync(progressPath(root,run),'utf8');need(!existsSync(successorUncertaintyPath(root,run)),'one-shot continuation already recorded');
 const archives=new Map(),bindings={},store=(name,b)=>{const p=join(directory(root,run),'successor-uncertainty-continuation',name);need(!existsSync(p)||readFileSync(p,'utf8')===b,'immutable archive conflict');archives.set(p,b);bindings[relative(root,p)]=hash(b);return relative(root,p);},bind=f=>{const p=resolve(root,f);bindings[relative(root,p)]=hash(readFileSync(p,'utf8'));};
 const creation_state=store('creation-state.json',sb),owner_gate_request=store('owner-gate-request.json',qb),creation_progress=store('creation-progress.json',pb),initial=loadReportingOwnerRecovery(root,run,'impact-initial',1);need(initial,'initial recovery required');for(const p of Object.keys(initial.evidence))bind(p);
 const packPath=join(directory(root,run),`${phase}-1.json`),pack=read(packPath);bind(packPath);const executions=pack.units.map(unit=>execution(root,run,pack,unit));for(const v of executions)for(const f of [v.reportPath,v.dispatch,v.attempt,v.logPath,v.promptPath])bind(f);
 for(const p of [payload.repair_evidence_file,payload.preparation_file,payload.preparation_inputs_file])bind(p);const repair=read(resolve(root,payload.repair_evidence_file));for(const r of repair.rows){bind(r.before_file);bind(r.after_file);}
 const original=executions.find(v=>String(v.report.unit)==='3'),uncertain=original.report.reviews.filter(r=>r.uncertain===true);need(uncertain.length===1,'one exact uncertainty required');
 const inputs=read(resolve(root,payload.preparation_inputs_file));const inventory=readLibraryItems(root,{run}),affected=scope(inventory,uncertain[0].id),snapshot={sources:inputs.items.map(i=>({id:i.id,raw_sha256:i.raw_sha256,guard_sha256:i.guard_sha256})),contexts:reviewContextHashes(root,inputs.items.map(i=>i.id)),inventory:graph(inventory.filter(i=>affected.includes(i.id))),manifests:inputs.guards.filter(g=>new RegExp(`^research/${run}-batch-\\d+\\.pages\\.json$`).test(g.path)).map(g=>({path:g.path,sha256:g.raw_sha256}))},current_snapshot=store('current-snapshot.json',JSON.stringify(snapshot,null,2)+'\n');
 const observation=buildSuccessorReportingObservation(root,run,pack,executions.map(v=>v.report),Object.fromEntries(Object.entries(bindings).map(([p,h])=>[resolve(root,p),h]))),historical_observation=store('historical-scheduling-observation.json',JSON.stringify(observation,null,2)+'\n');
 const row={...payload,version:1,kind:'owner-successor-uncertainty-scheduling-continuation',root:resolve(root),run,phase,round:1,unit:'3',units:['1','2','3'],authorized_by:'owner',owner_identity:'/root',recorded_at:new Date().toISOString(),review_credit_granted:false,native_acceptance:false,resume_original_reporting_session:true,supplier:uncertain[0].id,original_uncertain_review:uncertain[0],original_session_id:original.native.session_id,original_final_sha256:original.final_sha256,targets:scope(snapshot.inventory,uncertain[0].id),creation_state,owner_gate_request,owner_gate_request_id:JSON.parse(qb).id,creation_progress,current_snapshot,historical_observation,bindings},receipt={...row,sha256:hash(row)},bytes=JSON.stringify(receipt,null,2)+'\n',v=validate(root,run,receipt,{current:true,bytes,archives});
 need(readFileSync(sp,'utf8')===sb&&readFileSync(qp,'utf8')===qb&&readFileSync(progressPath(root,run),'utf8')===pb,'actual hold/progress changed');if(!dryRun){for(const [p,b]of archives){mkdirSync(dirname(p),{recursive:true});if(!existsSync(p))writeFileSync(p,b,{flag:'wx'});}writeFileSync(v.path,bytes,{flag:'wx'});}return {path:v.path,dry_run:dryRun,targets:[...v.targets],session_id:row.original_session_id,resume_original_reporting_session:true,native_acceptance:false};
}
// An in-memory scheduling view of individually authenticated genuine native rows.
// The immutable observation itself always has reviews:[] and is not a collection.
export function successorSchedulingView(value){need(loaded.has(value),'unvalidated successor observation');return {...value.observation,reviews:value.observation.genuine_current_native_reviews};}

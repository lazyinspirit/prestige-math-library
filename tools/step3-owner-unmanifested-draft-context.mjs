// Opt-in read-only context route. No helper writes a registry or grants ownership.
import { readFileSync, existsSync, readdirSync, lstatSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { split, yaml } from './pathway-lib.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { requiredPageHash as hash } from './step3-owner-required-page-routes.mjs';
export const OWNER_CURRENT_CONTEXT_BASIS='in-flight-null-consumer-unobserved-owner-current-context-v1';
export const OWNER_REPAIRED_CONTEXT_BASIS='exact-observed-owner-repaired-unmanifested-context-v1';
const ownerRepaired=e=>e.owner_repair_basis===OWNER_REPAIRED_CONTEXT_BASIS;
const ownerCurrent=e=>e.native_finding_basis===OWNER_CURRENT_CONTEXT_BASIS;
const contextConsumer=e=>ownerCurrent(e)?e.owner_context_consumer_id:e.consumer_id;
const contextSource=e=>ownerCurrent(e)?e.owner_current_source:e.observed_source;
export const UNMANIFESTED_POLICY='owner-step3-unchanged-unmanifested-draft-context-v1';
const sha=x=>createHash('sha256').update(x).digest('hex');
const check=(x,m)=>{if(!x)throw Error(`unmanifested draft context: ${m}`);};
const validId=x=>typeof x==='string'&&/^[a-z][a-z0-9-]*$/.test(x);
const registry=run=>`research/${run}-step3-owner-unmanifested-draft-context.json`;
function bytes(root,p){
 check(typeof p==='string'&&!isAbsolute(p)&&!p.includes('\\')&&!p.split('/').some(x=>!x||x==='.'||x==='..'),'unsafe path');
 const full=resolve(root,p),rel=relative(resolve(root),full);check(rel&&!rel.startsWith('..')&&!isAbsolute(rel),'escaping path');
 let cursor=resolve(root);for(const part of rel.split('/')){cursor=resolve(cursor,part);check(!lstatSync(cursor).isSymbolicLink(),'symlink');}
 check(lstatSync(full).isFile(),'nonregular file');return readFileSync(full);
}
const parse=b=>JSON.parse(b.toString());
const fm=b=>yaml().parse(split(b.toString()).fm);
function ref(root,run,r){check(r&&typeof r.path==='string'&&r.path.startsWith(`research/${run}-`)&&/^[a-f0-9]{64}$/.test(r.sha256??''),'invalid evidence reference');const b=bytes(root,r.path);check(sha(b)===r.sha256,`changed evidence ${r.path}`);return b;}
function manifests(root,run){
 const homes=new Map();for(const name of readdirSync(resolve(root,'research'))){
  const match=name.match(new RegExp(`^${run}-batch-([1-9]\\d*)\\.pages\\.json$`));if(!match)continue;
  const p=`research/${name}`,doc=parse(bytes(root,p));for(const page of Array.isArray(doc)?doc:doc.pages??[])for(const item of page.items??[]){const id=typeof item==='string'?item:item.id;if(!homes.has(id))homes.set(id,[]);homes.get(id).push({batch:match[1],path:p,item:typeof item==='string'?{id:item}:item});}
 }return homes;
}
const directEdge=(deps,id)=>Array.isArray(deps)&&validId(id)&&deps.every(validId)&&deps.includes(id);
function validateOwnerCurrentReview(root,run,e,source,consumer){
 const review=parse(ref(root,run,e.owner_current_review)),obligation=`reader:${e.batch}:${e.index}`;
 check(review.version===1&&review.run===run&&review.owner_identity==='/root'&&review.completed===true&&review.full_current_proof_read===true&&review.affected_consumer_use_reviewed===true&&review.source_repaired===false&&review.mathematical_acceptance===false&&review.native_coverage_adopted===false&&review.obligation===obligation&&review.supplier_id===e.id&&review.routing_consumer_witness===contextConsumer(e),'missing genuine root current proof/use review');
 check(Number.isFinite(Date.parse(review.recorded_at))&&Date.parse(e.at)>=Date.parse(review.recorded_at),'registration predates root review');
 check(hash(review.current_source)===hash(e.owner_current_source)&&hash(review.current_consumer)===hash(e.consumer_source),'review archive mismatch');
 ref(root,run,review.current_source);ref(root,run,review.current_consumer);ref(root,run,review.current_provenance);
 const delegated=parse(ref(root,run,review.delegated_review));
 check(delegated.run===run&&typeof delegated.reviewer==='string'&&delegated.reviewer.startsWith('/root/')&&delegated.completed===true&&delegated.mathematical_acceptance===false&&delegated.native_coverage_adopted===false&&delegated.source_repaired===false&&delegated.original_obligation===obligation&&delegated.supplier_id===e.id&&delegated.routing_consumer_witness===contextConsumer(e),'unbound delegated current review');
 check(typeof delegated.used_clause==='string'&&delegated.used_clause.length>=40&&source.toString().includes(delegated.used_clause)&&Array.isArray(delegated.consumer_premise_quotes)&&delegated.consumer_premise_quotes.length>0&&delegated.consumer_premise_quotes.every(q=>typeof q==='string'&&q.length>=40&&consumer.toString().includes(q)),'nonliteral current proof/use evidence');
 for(const k of ['root_actual_reading','interface_result','preserved_gap','history','limits'])check(typeof review[k]==='string'&&review[k].trim().length>=80,`missing typed review ${k}`);
 return delegated;
}
function proofOnlyParts(raw){
 const text=raw.toString(),m=/^## Proof\s*$/m.exec(text);check(m,'repair requires existing Proof section');
 const tail=text.slice(m.index),end=/^## (?!Proof\s*$).+$/m.exec(tail.slice(m[0].length));
 const stop=end?m.index+m[0].length+end.index:text.length;
 return {prefix:text.slice(0,m.index),proof:text.slice(m.index,stop),suffix:text.slice(stop)};
}
function validateOwnerRepair(root,run,e,before,consumer){
 check(!ownerCurrent(e)&&e.native_finding_basis===undefined&&e.owner_current_source===undefined&&e.owner_current_review===undefined&&e.owner_context_consumer_id===undefined,'repaired mode cannot inherit nullable authority');
 const actualBefore=ref(root,run,e.owner_repair_before),after=ref(root,run,e.owner_repair_after);
 check(actualBefore.equals(before)&&!after.equals(before),'repair before must match exact native observation and change proof');
 const a=proofOnlyParts(before),z=proofOnlyParts(after);
 check(a.prefix===z.prefix&&a.suffix===z.suffix&&hash(fm(before))===hash(fm(after)),'repair changed Statement, Facts, metadata or nonproof interfaces');
 const record=parse(ref(root,run,e.owner_repair_record));
 check(record.version===1&&record.run===run&&record.owner_identity==='/root'&&record.completed===true&&record.source_repaired===true&&record.mathematical_acceptance===false&&record.native_coverage_adopted===false&&record.original_obligation===`reader:${e.batch}:${e.index}`&&record.supplier_id===e.id,'missing actual root repair application');
 check(hash(record.before)===hash(e.owner_repair_before)&&hash(record.after)===hash(e.owner_repair_after)&&Array.isArray(record.edits)&&record.edits.length>0&&record.edits.length<=4,'unbound repair application');
 let reconstructed=a.proof;for(const edit of record.edits){check(typeof edit.before==='string'&&edit.before&&typeof edit.after==='string'&&edit.after&&edit.before!==edit.after&&reconstructed.split(edit.before).length===2,'ambiguous proof repair');reconstructed=reconstructed.replace(edit.before,()=>edit.after);}
 check(reconstructed===z.proof,'unaccounted proof change');
 const review=parse(ref(root,run,e.owner_repair_review));
 check(review.version===1&&review.run===run&&review.owner_identity==='/root'&&review.completed===true&&review.full_current_proof_read===true&&review.affected_consumer_use_reviewed===true&&review.source_repaired===true&&review.mathematical_acceptance===false&&review.native_coverage_adopted===false&&review.original_obligation===record.original_obligation&&review.supplier_id===e.id&&review.routing_consumer_witness===e.consumer_id,'missing full repaired proof and primary use root review');
 check(hash(review.current_source)===hash(e.owner_repair_after)&&hash(review.current_consumer)===hash(e.consumer_source)&&hash(review.application)===hash(e.owner_repair_record),'repair review archive mismatch');
 check(validId(e.defect_id),'missing exact repaired defect identity');
 for(const value of [record.recorded_at,review.recorded_at])check(Number.isFinite(Date.parse(value)),'invalid repair chronology');
 check(Date.parse(review.recorded_at)>=Date.parse(record.recorded_at)&&Date.parse(e.at)>=Date.parse(review.recorded_at),'repair review chronology');
 const delegated=parse(ref(root,run,review.delegated_review));
 check(delegated.run===run&&typeof delegated.reviewer==='string'&&delegated.reviewer.startsWith('/root/')&&delegated.completed===true&&delegated.full_current_proof_read===true&&delegated.affected_consumer_use_reviewed===true&&delegated.mathematical_acceptance===false&&delegated.native_coverage_adopted===false&&delegated.original_obligation===record.original_obligation&&delegated.supplier_id===e.id&&delegated.routing_consumer_witness===e.consumer_id&&hash(delegated.current_source)===hash(e.owner_repair_after)&&hash(delegated.current_consumer)===hash(e.consumer_source),'unbound primary full repaired review');
 check(typeof delegated.used_clause==='string'&&delegated.used_clause.length>=40&&after.toString().includes(delegated.used_clause)&&Array.isArray(delegated.consumer_premise_quotes)&&delegated.consumer_premise_quotes.length>0&&delegated.consumer_premise_quotes.every(q=>typeof q==='string'&&q.length>=40&&consumer.toString().includes(q)),'nonliteral repaired use evidence');
 for(const k of ['root_actual_reading','repair_result','history','limits'])check(typeof review[k]==='string'&&review[k].trim().length>=80,`missing repaired review ${k}`);
 return {after,review};
}
export function validateUnmanifestedRepairDecision(root,run,carrier,decision){
 check(carrier?.owner_repaired_context===true,'not a repaired context carrier');
 check(decision.verdict==='confirmed_fatal'&&decision.repair_confidence===1,'repaired context needs complete independent fatal repair');
 check(decision.defect_ids?.length===1&&decision.defect_ids[0]===carrier.repaired_defect_id,'wrong repaired defect identity');
 const review=decision.independent_repair_review;
 check(review&&review.independent===true&&review.full_current_proof_read===true&&review.affected_consumer_use_reviewed===true&&review.original_obligation===decision.obligation&&review.supplier_id===decision.id&&review.consumer_id===decision.consumer_id&&hash(review.current_source)===hash(carrier.owner_repair_after)&&hash(review.current_consumer)===hash(carrier.reviewed_consumer_source)&&hash(review.application)===hash(carrier.owner_repair_record),'missing independent full-current helper and consumer repair review');
 check(Number.isFinite(Date.parse(review.recorded_at))&&Date.parse(review.recorded_at)>=Date.parse(carrier.root_repair_reviewed_at),'independent review predates completed root repair review');
 const source=ref(root,run,review.current_source).toString(),consumer=ref(root,run,review.current_consumer).toString();
 check(typeof review.used_clause==='string'&&review.used_clause.length>=40&&source.includes(review.used_clause)&&Array.isArray(review.consumer_premise_quotes)&&review.consumer_premise_quotes.length>0&&review.consumer_premise_quotes.every(q=>typeof q==='string'&&q.length>=40&&consumer.includes(q)),'nonliteral independent repaired use evidence');
 check(Array.isArray(review.original_gap_resolutions)&&review.original_gap_resolutions.length>=2&&review.original_gap_resolutions.every(t=>typeof t==='string'&&t.trim().length>=80),'missing independent original gap resolutions');
}
function nativeEvidence(root,run,e){
 check(e.version===1&&e.run===run&&e.policy===UNMANIFESTED_POLICY&&e.owner_identity==='/root'&&e.reviewed===true&&e.mathematical_acceptance===false&&e.edit_permission===false&&e.coverage_adopted===false,'invalid authority');
 check(/^[1-9]\d*$/.test(e.batch??'')&&Number.isSafeInteger(e.index)&&e.index>0&&validId(e.id)&&validId(contextConsumer(e))&&e.id!==contextConsumer(e),'invalid identity');
 check(typeof e.reason==='string'&&e.reason.trim().length>=80&&Number.isFinite(Date.parse(e.at)),'missing reason/time');
 const report=parse(ref(root,run,e.findings)),native=parse(ref(root,run,e.native_result));ref(root,run,e.prompt);
 check(e.reader_report?.path===`research/${run}-reader-${e.batch}.md`,'reader report must be exact canonical native prose path');ref(root,run,e.reader_report);
 check(e.findings.path!==`research/${run}-reader-findings-${e.batch}.json`,'findings require immutable archive');
 check(e.native_result.path===`research/${run}-dispatch/reader-reader-${e.batch}.attempt-${native.attempt}.result.json`&&Number.isSafeInteger(native.attempt)&&native.attempt>0&&native.run===run&&native.role==='reader'&&native.label===`reader-${e.batch}`&&native.covers?.length===1&&String(native.covers[0])===e.batch&&native.ok===true&&native.exit_code===0&&native.process_exit_code===0&&native.timed_out!==true&&native.terminal_summary?.task_completed===true&&native.terminal_summary?.task_aborted===false,'not successful exact native attempt');
 check(e.prompt.path===e.native_result.path.replace(/\.result\.json$/,'.prompt.md')&&native.prompt?.endsWith('/'+e.prompt.path),'wrong prompt');
 check(Number.isFinite(Date.parse(native.ended_at))&&Date.parse(e.at)>=Date.parse(native.ended_at),'registration predates native completion');
 let tail;try{tail=JSON.parse(native.tail);}catch{check(false,'complete structured native tail required');}
 check(hash(tail)===hash(report)&&[e.batch,`${run}-batch-${e.batch}`].includes(String(report.batch)),'native report mismatch');
 const original=report.findings?.[e.index-1];
 check(e.native_finding_basis===undefined||ownerCurrent(e),'unknown native observation basis');
 check(e.owner_repair_basis===undefined||ownerRepaired(e),'unknown repaired context basis');
 if(ownerRepaired(e))check(!ownerCurrent(e)&&original?.severity==='fatal'&&original.defect==='unlicensed-inference','repaired context needs exact fatal inference observation');
 if(ownerCurrent(e)){
  check(original?.id===e.id&&original.subject_type==='in-flight-item'&&original.consumer_id===null&&original.observed_source===null&&e.consumer_id===undefined&&e.observed_source===undefined&&hash(original)===e.finding_sha256,'wrong original nullable finding');
 } else check(original?.id===e.id&&original.consumer_id===contextConsumer(e)&&original.subject_type==='in-run-dependency'&&original.observed_source?.snapshot==='current'&&hash(original)===e.finding_sha256,'wrong original indexed finding');
 const source=ref(root,run,contextSource(e)),s=fm(source);
 check(s.id===e.id&&s.status==='draft'&&s.pipeline_run===run&& (ownerCurrent(e)||e.observed_source.sha256===original.observed_source.item_sha256),'wrong current/observed draft archive');
 const consumer=ref(root,run,e.consumer_source),c=fm(consumer),manifest=parse(ref(root,run,e.consumer_manifest));
 const rows=(Array.isArray(manifest)?manifest:manifest.pages??[]).flatMap(p=>p.items??[]).filter(i=>(typeof i==='string'?i:i.id)===contextConsumer(e));
 check(e.consumer_manifest.path===`research/${run}-batch-${e.batch}.pages.json`||e.consumer_manifest_original_path===`research/${run}-batch-${e.batch}.pages.json`,'wrong manifest origin');
 check(c.id===contextConsumer(e)&&c.status==='draft'&&c.pipeline_run===run&&directEdge(c.deps,e.id)&&rows.length===1&&typeof rows[0]==='object'&&directEdge(rows[0].deps,e.id),'missing archived direct source/manifest edge');
 if(ownerCurrent(e)){
  validateOwnerCurrentReview(root,run,e,source,consumer);
  const prose=ref(root,run,e.reader_report).toString();
  check(prose.includes(e.id)&&prose.includes(contextConsumer(e)),'native prose does not name owner routing witness');
 }
 const repair=ownerRepaired(e)?validateOwnerRepair(root,run,e,source,consumer):null;
 if(repair){const application=parse(ref(root,run,e.owner_repair_record));check(Date.parse(application.recorded_at)>=Date.parse(native.ended_at),'repair predates native finding');}
 return {original,source,consumer,repair};
}
export function loadUnmanifestedDraftContexts(root,run,batch){
 check(/^[A-Za-z0-9_-]+$/.test(run??'')&&/^[1-9]\d*$/.test(String(batch)),'invalid run/batch');
 const p=registry(run);if(!existsSync(resolve(root,p)))return new Map();
 const doc=parse(bytes(root,p));check(doc.version===1&&doc.run===run&&doc.policy===UNMANIFESTED_POLICY&&doc.authorized_by==='owner'&&typeof doc.authorization==='string'&&doc.authorization.trim().length>=40&&Array.isArray(doc.contexts)&&doc.contexts.length,'invalid registry');
 const homes=manifests(root,run),out=new Map(),seen=new Set();
 for(const e of doc.contexts){
  const evidence=nativeEvidence(root,run,e),key=`reader:${e.batch}:${e.index}`;check(!seen.has(key),'duplicate obligation');seen.add(key);
  check((homes.get(e.id)??[]).length===0,'target acquired a manifest home');
  const own=homes.get(contextConsumer(e))??[];check(own.length===1&&own[0].batch===e.batch&&directEdge(own[0].item.deps,e.id),'consumer must have unique actual owned direct manifest edge');
  const current=bytes(root,`items/${e.id}.md`),cfm=fm(current),consumer=bytes(root,`items/${contextConsumer(e)}.md`),cm=fm(consumer);
  check(cfm.id===e.id&&cfm.status==='draft'&&cfm.pipeline_run===run&&current.equals(ownerRepaired(e)?evidence.repair.after:evidence.source),'context source edited; ordinary owner repair required');
  check(cm.id===contextConsumer(e)&&cm.status==='draft'&&cm.pipeline_run===run&&directEdge(cm.deps,e.id),'current direct consumer edge removed');
  if(ownerRepaired(e))check(consumer.equals(evidence.consumer),'reviewed primary consumer changed');
  if(ownerCurrent(e)){
   // The archived full consumer is immutable historical review evidence, not
   // a ban on independently owed edits elsewhere in the owned consumer.
   const reviewed=validateOwnerCurrentReview(root,run,e,evidence.source,evidence.consumer);
   check(reviewed.consumer_premise_quotes.every(q=>consumer.toString().includes(q)),
    'current reviewed consumer premise changed; root use review required');
  }
  check(hash(parse(bytes(root,`research/${run}-reader-findings-${e.batch}.json`)))===hash(parse(ref(root,run,e.findings))),'canonical native findings rewritten');
  if(e.batch!==String(batch))continue;
  const binding={path:p,entry_sha256:hash(e)};
  const carrier={item_sha256:sha(current),context_guard_sha256:itemHashGuard(current.toString()),consumer_item_sha256:sha(consumer),consumer_manifest_sha256:hash(own[0].item),owner_unmanifested_draft_context:binding,...(ownerRepaired(e)?{owner_repaired_context:true,owner_repaired_context_basis:OWNER_REPAIRED_CONTEXT_BASIS,observed_before_sha256:e.observed_source.sha256,owner_repair_before:e.owner_repair_before,owner_repair_after:e.owner_repair_after,owner_repair_record:e.owner_repair_record,owner_repair_review:e.owner_repair_review,root_repair_reviewed_at:evidence.repair.review.recorded_at,reviewed_consumer_source:e.consumer_source,repaired_defect_id:e.defect_id}:{unchanged_context:true})};
  out.set(key,{entry:e,original:evidence.original,binding,carrier});
 }return out;
}
export function bindUnmanifestedDraftContext(root,run,batch,finding){
 const r=loadUnmanifestedDraftContexts(root,run,batch).get(finding.obligation);check(r,'missing authority');
 const {obligation,...original}=finding;check(hash(original)===hash(r.original),'changed native finding');
 if(ownerCurrent(r.entry))return {...finding,subject_type:'unmanifested-draft-dependency',consumer_id:null,observed_source:null,owner_context_consumer_id:contextConsumer(r.entry),owner_current_context_basis:OWNER_CURRENT_CONTEXT_BASIS,owner_unmanifested_draft_context:r.binding,observed_sha256:null,observation_basis:'unbound-native-observation; owner-current-source only'};
 return {...finding,subject_type:'unmanifested-draft-dependency',...(ownerRepaired(r.entry)?{owner_repaired_context_basis:OWNER_REPAIRED_CONTEXT_BASIS}:{}),owner_unmanifested_draft_context:r.binding,observed_sha256:hash({item_sha256:r.entry.observed_source.sha256,owner_unmanifested_draft_context:r.binding}),observation_basis:'exact-observed-source; no producer carrier or manifested home'};
}
export function unmanifestedDraftCarrier(root,run,batch,finding){
 if(finding.owner_unmanifested_refuter_context){
  const scope=parse(bytes(root,`research/${run}-step3-scope-${batch}.json`));
  const native=nativeRefuter(root,run,batch),index=finding.owner_unmanifested_refuter_context.index;
  const original=native.report.flagged[index-1];
  const expected=bindUnmanifestedRefuterContext(root,run,batch,{...original,obligation:finding.obligation},scope);
  const {route:_route,batch:_batch,...value}=finding;
  check(hash(value)===hash(expected),'changed refuter context binding');
  const reader=unmanifestedRefuterContexts(root,run,batch,scope).get(finding.id);
  return {...reader.r.carrier,owner_unmanifested_refuter_context:expected.owner_unmanifested_refuter_context};
 }
 const r=loadUnmanifestedDraftContexts(root,run,batch).get(finding.obligation);check(r,'missing authority');
 const expected=bindUnmanifestedDraftContext(root,run,batch,{...r.original,obligation:finding.obligation});
 for(const k of ['subject_type','id','consumer_id','location','defect','evidence','severity','observed_source','owner_context_consumer_id','owner_current_context_basis','owner_repaired_context_basis','owner_unmanifested_draft_context','observed_sha256','observation_basis'])check(hash({value:finding[k]})===hash({value:expected[k]}),`changed routed ${k}`);
 check(finding.producer_batch===undefined&&finding.producer_pre_snapshot===undefined,'fictitious producer');return r.carrier;
}
export const unmanifestedDraftVerdictAllowed=(verdict,carrier)=>carrier?.owner_repaired_context===true
 ? ['confirmed_fatal','escalated'].includes(verdict) : ['false_positive','confirmed_nonfatal','escalated'].includes(verdict);
export function unmanifestedDraftClosureEvidence(root,run){
 const p=registry(run);if(!existsSync(resolve(root,p)))return {};
 const doc=parse(bytes(root,p)),closurePath=`research/${run}-step3-closure.json`,closed=existsSync(resolve(root,closurePath))?parse(bytes(root,closurePath)):null;
 // Later verify authenticates frozen evidence, without rereading current source or ownership.
 if(!(closed?.version===3&&closed.run===run&&closed.status==='closed'&&closed.basis==='dependency-ordered-step3a')){
  check(Array.isArray(doc.contexts),'invalid context inventory');for(const b of new Set(doc.contexts.map(e=>e.batch)))loadUnmanifestedDraftContexts(root,run,b);
 }
 const out={[p]:sha(bytes(root,p))};for(const e of doc.contexts??[])for(const k of ['findings','native_result','prompt','reader_report',...(ownerCurrent(e)?['owner_current_source','owner_current_review']:['observed_source']),'consumer_source','consumer_manifest']){ref(root,run,e[k]);out[e[k].path]=e[k].sha256;}
 for(const e of doc.contexts??[])if(ownerCurrent(e)){const review=parse(ref(root,run,e.owner_current_review));for(const k of ['delegated_review','current_provenance','current_source','current_consumer']){ref(root,run,review[k]);out[review[k].path]=review[k].sha256;}}
 for(const e of doc.contexts??[])if(ownerRepaired(e)){for(const k of ['owner_repair_before','owner_repair_after','owner_repair_record','owner_repair_review']){ref(root,run,e[k]);out[e[k].path]=e[k].sha256;}const review=parse(ref(root,run,e.owner_repair_review));ref(root,run,review.delegated_review);out[review.delegated_review.path]=review.delegated_review.sha256;}
 for(const batch of new Set((doc.contexts??[]).map(e=>e.batch))){
  const scopePath=`research/${run}-step3-scope-${batch}.json`;if(!existsSync(resolve(root,scopePath)))continue;
  const scope=parse(bytes(root,scopePath));for(const finding of scope.refuter_findings??[])if(finding.owner_unmanifested_refuter_context){
   if(!(closed?.version===3&&closed.run===run&&closed.status==='closed'&&closed.basis==='dependency-ordered-step3a'))unmanifestedDraftCarrier(root,run,batch,finding);
   const evidence=finding.owner_unmanifested_refuter_context;for(const k of ['report','native_result','prompt']){ref(root,run,evidence[k]);out[evidence[k].path]=evidence[k].sha256;}
  }
 }return out;
}

// Existing reader authority is necessary, never a new refuter scope assignment.
function nativeRefuter(root,run,batch){
 const reportPath=`research/${run}-refute-${batch}.json`,stablePath=`research/${run}-dispatch/refuter-refute-${batch}.result.json`;
 const reportRaw=bytes(root,reportPath),report=parse(reportRaw),stableRaw=bytes(root,stablePath),native=parse(stableRaw);
 check(Number.isSafeInteger(native.attempt)&&native.attempt>0,'invalid refuter attempt');
 const nativePath=`research/${run}-dispatch/refuter-refute-${batch}.attempt-${native.attempt}.result.json`,nativeRaw=bytes(root,nativePath);
 check(nativeRaw.equals(stableRaw)&&native.run===run&&native.role==='refuter'&&native.label===`refute-${batch}`&&native.covers?.length===1&&String(native.covers[0])===String(batch)&&native.ok===true&&native.exit_code===0&&native.process_exit_code===0&&native.timed_out!==true&&native.terminal_summary?.task_completed===true&&native.terminal_summary?.task_aborted===false&&Number.isFinite(Date.parse(native.ended_at)),'not genuine successful refuter');
 const promptPath=nativePath.replace(/\.result\.json$/,'.prompt.md');check(native.prompt?.endsWith('/'+promptPath),'wrong refuter prompt');const promptRaw=bytes(root,promptPath);
 let tail;try{tail=JSON.parse(native.tail);}catch{check(false,'complete structured refuter tail required');}
 check(hash(tail)===hash(report)&&[String(batch),`${run}-batch-${batch}`].includes(String(report.batch))&&Array.isArray(report.opened)&&Array.isArray(report.not_opened)&&Array.isArray(report.flagged),'refuter report differs from complete native output');
 return {report,binding:{report:{path:reportPath,sha256:sha(reportRaw)},native_result:{path:nativePath,sha256:sha(nativeRaw)},prompt:{path:promptPath,sha256:sha(promptRaw)}}};
}
export function unmanifestedRefuterContexts(root,run,batch,scope){
 const contexts=loadUnmanifestedDraftContexts(root,run,batch);
 if(!contexts.size)return new Map();
 check(scope.version===2&&scope.run===run&&String(scope.batch)===String(batch),'wrong registered reader scope');
 const byId=new Map(),counts=new Map();
 for(const r of contexts.values())counts.set(r.entry.id,(counts.get(r.entry.id)??0)+1);
 for(const [obligation,r] of contexts){
  const anchor=(scope.reader_findings??[]).find(f=>f.obligation===obligation);
  if(!anchor)continue;
  check((scope.manifest_post??[]).includes(contextConsumer(r.entry)),'context consumer is not assigned');
  unmanifestedDraftCarrier(root,run,batch,anchor);
  if(!byId.has(r.entry.id))byId.set(r.entry.id,[]);byId.get(r.entry.id).push({obligation,anchor,r});
 }
 return new Map([...byId].map(([id,rows])=>[id,counts.get(id)===1&&rows.length===1?rows[0]:{ambiguous:true,contexts:rows}]));
}
export function bindUnmanifestedRefuterContext(root,run,batch,finding,scope){
 const route=unmanifestedRefuterContexts(root,run,batch,scope).get(finding.id);check(route,'unregistered refuter context');
 check(route.ambiguous!==true,'ambiguous registered consumer context for refuter flag');
 check(!ownerRepaired(route.r.entry),'repaired context cannot inherit an extra refuter flag');
 const native=nativeRefuter(root,run,batch),match=new RegExp(`^refuter:${batch}:([1-9]\\d*)$`).exec(finding.obligation??'');check(match,'wrong refuter obligation');
 const index=Number(match[1]),original=native.report.flagged[index-1];
 const {obligation,...raw}=finding;check(hash(raw)===hash(original)&&native.report.opened.filter(id=>id===finding.id).length===1&&!(scope.refuter_scope??[]).includes(finding.id),'changed original flagged context or assigned coverage');
 const reader=bindUnmanifestedDraftContext(root,run,batch,{...route.r.original,obligation:route.obligation});
 if(ownerCurrent(route.r.entry)){
  // Native refuter flags have no consumer/source-attribution fields. Preserve
  // that original projection; null normalized fields are explicitly unbound.
  check(original.consumer_id===undefined&&original.observed_source===undefined&&original.observed_sha256===undefined&&original.subject_type===undefined,'invented current-only refuter attribution');
  return {...finding,subject_type:'unmanifested-draft-dependency',consumer_id:null,observed_source:null,
   owner_context_consumer_id:contextConsumer(route.r.entry),owner_current_context_basis:OWNER_CURRENT_CONTEXT_BASIS,
   owner_unmanifested_draft_context:route.r.binding,owner_unmanifested_refuter_context:{...native.binding,index,
    finding_sha256:hash(original),reader_obligation:route.obligation,
    owner_current_source_sha256:route.r.entry.owner_current_source.sha256,historical_source_observed:false},
   observed_sha256:null,observation_basis:'unbound-native-refuter-observation; owner-current-source only'};
 }
 return {...finding,subject_type:'unmanifested-draft-dependency',consumer_id:route.r.entry.consumer_id,observed_source:reader.observed_source,owner_unmanifested_draft_context:route.r.binding,owner_unmanifested_refuter_context:{...native.binding,index,finding_sha256:hash(original),reader_obligation:route.obligation,source_sha256:route.r.entry.observed_source.sha256},observed_sha256:reader.observed_sha256,observation_basis:'registered unchanged reader context; no additional refuter raw-byte observation claimed'};
}
export function validateUnmanifestedRefuterOpened(root,run,batch,id,scope){
 check(unmanifestedRefuterContexts(root,run,batch,scope).has(id),'unregistered extra read-only context');
 const {report}=nativeRefuter(root,run,batch);check(report.opened.filter(x=>x===id).length===1,'context not actually opened');return true;
}

// One owner-registered fresh native home adjudication; never inherited acceptance.
import { existsSync, readFileSync, readdirSync, lstatSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { foreignRefuterHash } from './step3-owner-foreign-refuter-routes.mjs';
import { loadStep3OwnerCreation } from './auditor-created-items.mjs';
export const OWNER_ESCALATION_HOME_POLICY = 'owner-step3-escalated-home-alpha-continuation-v1';
const sha=x=>createHash('sha256').update(x).digest('hex');
const need=(x,m)=>{if(!x)throw Error(`owner escalation home Alpha: ${m}`);};
const fileFor=run=>`research/${run}-step3-owner-escalation-home-alpha-continuations.json`;
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
export const ownerEscalationHomeLabel=unit=>`3a-batch-${unit}-owner-escalation-continuation-1`;
export function ownerEscalationHomeContinuations(root,run,{beforeDispatch=false,units=null,selected=null}={}){
 need(/^[a-zA-Z0-9_-]+$/.test(run),'invalid run');const path=fileFor(run);
 if(!existsSync(resolve(root,path)))return [];
 const registry=bytes(root,path),doc=parse(registry);
 need(doc.version===1&&doc.run===run&&doc.policy===OWNER_ESCALATION_HOME_POLICY&&doc.authorized_by==='owner'
  &&typeof doc.authorization==='string'&&doc.authorization.trim().length>=40&&Array.isArray(doc.continuations)&&doc.continuations.length,'invalid owner authority');
 need(new Set(doc.continuations.map(e=>e.unit)).size===doc.continuations.length,'duplicate unit');
 if(units)need(doc.continuations.length<=units.length&&doc.continuations.every(e=>units.map(String).includes(e.unit)),'unit outside native stage');
 const assignments=parse(bytes(root,`research/${run}-alpha-groups.json`));const groups=Array.isArray(assignments)?assignments:assignments.groups??[];
 return doc.continuations.map(e=>{
  const unit=e.unit,canonical=`batch-${unit}`,oldPrefix=`research/${run}-dispatch/alpha-3a-${canonical}`;
  need(e.version===1&&e.run===run&&e.owner_identity==='/root'&&unit==='67'&&e.label===ownerEscalationHomeLabel(unit)
   &&e.canonical_group===canonical&&e.mathematical_acceptance===false&&e.previous_acceptance_inherited===false
   &&e.historical_artifact_basis==='owner-captured current completed-native artifacts; no structured-output byte attestation'
   &&typeof e.reason==='string'&&e.reason.trim().length>=80&&Number.isFinite(Date.parse(e.writers_drained_at)),'invalid entry');
  const owners=groups.filter(g=>g.covers?.map(String).includes(unit));need(owners.length===1,'ambiguous Alpha assignment');
  const stable=ref(root,run,e.previous_result),old=parse(stable),attempt=ref(root,run,e.previous_attempt),prompt=ref(root,run,e.previous_prompt);
  need(e.previous_result.path===oldPrefix+'.result.json'&&Number.isSafeInteger(old.attempt)&&old.attempt>=1
   &&e.previous_attempt.path===oldPrefix+`.attempt-${old.attempt}.result.json`&&attempt.equals(stable)
   &&e.previous_prompt.path===oldPrefix+`.attempt-${old.attempt}.prompt.md`
   &&old.evidence_tag===`.attempt-${old.attempt}`&&old.written_by!=='autopilot'
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
   &&Array.isArray(e.added_helpers)&&e.added_helpers.length>0&&new Set(e.added_helpers).size===e.added_helpers.length
   &&exact(itemIds,[...(scope.manifest_post??[]),...e.added_helpers])&&exact(pageIds,scope.page_manifest_post??[])
   &&e.added_helpers.every(id=>/^lem-[a-z0-9-]+$/.test(id)&&!(scope.manifest_post??[]).includes(id)),'unregistered inventory change');
  const requiredPaths=[scopePath,`research/${run}-step3-hash-${unit}-pre-3a.json`,`research/${run}-batch-${unit}.pages.json`,`research/${run}-batch-${unit}.proof-contracts.json`,
    ...itemIds.map(id=>`items/${id}.md`),...pages(manifest).map(p=>`library/${p.category}/${p.id}.md`)];
  need(Array.isArray(e.current_inputs)&&exact(e.current_inputs.map(x=>x.path),requiredPaths)
   &&e.current_inputs.every(x=>/^[a-f0-9]{64}$/.test(x.sha256??'')),'incomplete current guards');
  const byPath=new Map(e.current_inputs.map(x=>[x.path,x.sha256]));
  need(byPath.get(scopePath)===e.previous_scope.sha256&&byPath.get(`research/${run}-batch-${unit}.pages.json`)===e.registration_manifest.sha256,'scope/manifest registration mismatch');
  const escalated=decisions.decisions.filter(d=>d.verdict==='escalated'||d.repair_confidence!==undefined&&d.repair_confidence!==1);
  need(escalated.length>0&&Array.isArray(e.escalated_obligations)&&exact(e.escalated_obligations,escalated.map(d=>d.obligation)),'missing exact native escalation');
  const oldTargets=[...(scope.touched??[]).map(id=>`touched:${unit}:${id}`),...(scope.pages_touched??[]).map(id=>`page:${unit}:${id}`),...(scope.reader_findings??[]).map(x=>x.obligation),...(scope.refuter_findings??[]).map(x=>x.obligation)];
  need(exact(oldTargets,decisions.decisions.map(d=>d.obligation)),'incomplete original obligation archive');
  const stabilized=parse(ref(root,run,e.stabilized_snapshot));
  need(e.stabilized_snapshot.path===`research/${run}-step3-hash-${unit}-pre-3a.json`
   &&byPath.get(e.stabilized_snapshot.path)===e.stabilized_snapshot.sha256&&stabilized.version===2&&stabilized.run===run
   &&String(stabilized.batch)===unit&&stabilized.label==='pre-3a'&&exact(stabilized.manifest??[],itemIds)
   &&exact(stabilized.page_manifest??[],pageIds),'wrong stabilized current inventory');
  const readerPost=parse(ref(root,run,e.reader_post));
  need(e.reader_post.path===`research/${run}-step3-hash-${unit}-post.json`&&readerPost.version===2&&readerPost.run===run
   &&String(readerPost.batch)===unit&&readerPost.label==='post'&&exact(readerPost.manifest??[],scope.manifest_post??[])
   &&exact(readerPost.page_manifest??[],scope.page_manifest_post??[]),'wrong original reader-post snapshot');
  const additional=[];
  for(const id of itemIds)if(!(scope.touched??[]).includes(id)&&foreignRefuterHash(readerPost.hashes?.[id])!==foreignRefuterHash(stabilized.hashes?.[id]))additional.push({obligation:`post-reader:${unit}:${id}`,id,batch:unit,stabilized:true,added:!readerPost.manifest.includes(id),route:'touched'});
  for(const id of pageIds){const old=readerPost.page_hashes?.[id],now=stabilized.page_hashes?.[id],anchor=(old?.item_order??[]).filter(x=>(now?.item_order??[]).includes(x));
   const orderChanged=JSON.stringify(anchor)!==JSON.stringify((now?.item_order??[]).filter(x=>(old?.item_order??[]).includes(x)));
   if(!(scope.pages_touched??[]).includes(id)&&(!old||!now||old.file_sha256!==now.file_sha256||old.manifest_sha256!==now.manifest_sha256||orderChanged))additional.push({obligation:`post-reader:${unit}:${id}`,id,batch:unit,stabilized:true,added:false,route:'page',order_anchor:anchor});
  }
  const originRefs=[];
  need(Array.isArray(e.helper_origins)&&exact(e.helper_origins.map(x=>x.id),e.added_helpers),'missing helper origins');
  for(const helper of e.helper_origins){
   const origin=loadStep3OwnerCreation(root,run,helper.id,helper.origin);
   need(origin&&String(origin.receipt.batch)===unit&&itemIds.includes(helper.id),'helper lacks proper owner-created origin');
   const h=stabilized.hashes?.[helper.id],c=origin.receipt.carriers;
   need(h&&h.item_sha256===c.item_file_sha256&&h.manifest_sha256===c.manifest_sha256&&h.contract_sha256===c.contract_sha256,'helper origin is not current at registration');
   originRefs.push({id:helper.id,...origin.marker});
  }
  need(Array.isArray(e.repairs)&&e.repairs.length>0&&new Set(e.repairs.map(x=>x.id)).size===e.repairs.length,'missing actual repair');
  for(const repair of e.repairs){
   need((scope.manifest_post??[]).includes(repair.id),'repair outside original home');
   const before=ref(root,run,repair.before),after=ref(root,run,repair.after),application=parse(ref(root,run,repair.application));
   need(repair.before.sha256!==repair.after.sha256&&stabilized.hashes?.[repair.id]?.item_sha256===repair.after.sha256,'repair successor not stabilized');
   const rows=application.files?.filter(x=>x.path===`items/${repair.id}.md`);
   need(application.run===run&&application.owner_identity==='/root'&&application.native_finding_unchanged===true
    &&rows?.length===1&&rows[0].before_sha256===sha(before)&&rows[0].after_sha256===sha(after),'not genuine root repair application');
  }
  need(escalated.every(d=>e.repairs.some(r=>r.id===d.id)||Array.isArray(d.defect_ids)&&d.defect_ids.some(id=>e.resolved_defect_ids?.includes(id)))
   &&Array.isArray(e.resolved_defect_ids)&&exact(e.resolved_defect_ids,[...new Set(escalated.flatMap(d=>d.defect_ids??[]))]),'native escalation not accounted for');
  const review=parse(ref(root,run,e.owner_review));
  need(review.run===run&&review.unit===unit&&review.owner_identity==='/root'&&review.mathematical_repair_approved===true
   &&review.full_current_proof_read===true&&review.consumer_checks_complete===true&&review.native_acceptance_claimed===false
   &&foreignRefuterHash(review.repairs)===foreignRefuterHash(e.repairs)
   &&foreignRefuterHash(review.helper_origins)===foreignRefuterHash(originRefs)
   &&foreignRefuterHash(review.current_inputs)===foreignRefuterHash(e.current_inputs)
   &&Array.isArray(review.evidence_refs)&&review.evidence_refs.length>0&&typeof review.evidence==='string'&&review.evidence.trim().length>=80,'missing full current owner repair/consumer review');
  for(const evidence of review.evidence_refs)ref(root,run,evidence);
  const task=ref(root,run,e.task).toString();
  const newTargets=additional.map(x=>x.obligation);
  need(task.includes(reportPath)&&task.includes(decisionsPath)&&task.includes(canonical)
   &&[...oldTargets,...newTargets,...e.resolved_defect_ids].every(x=>task.includes(x)),'fresh task omits canonical identity/old or helper obligations');
  const captured=ref(root,run,e.owner_capture),capture=parse(captured);
  need(capture.version===1&&capture.run===run&&capture.unit===unit&&capture.owner_identity==='/root'
   &&capture.native_acceptance_claimed===false&&capture.original_artifact_bytes_native_bound===false
   &&capture.report_sha256===e.previous_report.sha256&&capture.decisions_sha256===e.previous_decisions.sha256
   &&capture.scope_sha256===e.previous_scope.sha256&&capture.old_result_sha256===e.previous_result.sha256,'missing honest owner artifact capture');
  if(beforeDispatch&&(selected===null||selected.map(String).includes(unit))){
   const freshPrefix=`alpha-${e.label}`;need(!readdirSync(resolve(root,`research/${run}-dispatch`)).some(n=>n===freshPrefix+'.result.json'||new RegExp('^'+freshPrefix+'\\.attempt-[1-9]\\d*\\.result\\.json$').test(n)),'one fresh native home attempt already completed');
   need(bytes(root,reportPath).equals(report)&&bytes(root,decisionsPath).equals(decisionBytes),'canonical original artifact changed before launch');
   for(const input of e.current_inputs)need(sha(bytes(root,input.path))===input.sha256,`current input changed ${input.path}`);
   const contracts=parse(bytes(root,`research/${run}-batch-${unit}.proof-contracts.json`)).contracts??{};
   for(const page of pages(manifest)){
    const {items:rows=[],...metadata}=page;
    for(const raw of rows){const row=typeof raw==='string'?{id:raw}:raw,id=row.id,h=stabilized.hashes?.[id];need(h&&h.item_sha256===sha(bytes(root,`items/${id}.md`))&&h.contract_sha256===foreignRefuterHash(contracts[id]??null)&&h.manifest_sha256===foreignRefuterHash({...row,__step4_page_id:page.id}),'stabilized item carrier differs from launch input');}
    const h=stabilized.page_hashes?.[page.id];need(h&&h.file_sha256===sha(bytes(root,`library/${page.category}/${page.id}.md`))&&h.manifest_sha256===foreignRefuterHash(metadata)&&foreignRefuterHash(h.item_order)===foreignRefuterHash(rows.map(x=>typeof x==='string'?x:x.id)),'stabilized page carrier differs from launch input');
   }

  }
  return {entry:e,binding:{path,entry_sha256:foreignRefuterHash(e)},old_decisions:decisions,old_scope:scope,additional_obligations:additional};
 });
}
export function ownerEscalationHomeClosureEvidence(root,run){
 const path=fileFor(run);if(!existsSync(resolve(root,path)))return {};
 const rows=ownerEscalationHomeContinuations(root,run),out={[path]:sha(bytes(root,path))};
 const collect=r=>{ref(root,run,r);out[r.path]=r.sha256;};
 for(const {entry:e}of rows){
  for(const key of ['previous_result','previous_attempt','previous_prompt','previous_report','previous_decisions','previous_scope','registration_manifest','owner_capture','task','stabilized_snapshot','reader_post','owner_review'])collect(e[key]);
  for(const helper of e.helper_origins){collect(helper.origin);const origin=parse(ref(root,run,helper.origin));for(const source of origin.sources)collect(source);}
  for(const repair of e.repairs)for(const key of ['before','after','application'])collect(repair[key]);
  for(const evidence of parse(ref(root,run,e.owner_review)).evidence_refs)collect(evidence);
 }
 return out;
}

// A native receipt alone grants neither current review nor creation credit.
export function ownerEscalationHomeCurrentOutputs(root,run,e){
 const route=ownerEscalationHomeContinuations(root,run).find(x=>x.entry.unit===e.unit);need(route,'missing exact current output authority');
 const reportPath=`research/${run}-alpha-${e.canonical_group}-3a.md`,decisionsPath=`research/${run}-alpha-${e.canonical_group}-3a-decisions.json`;
 const report=bytes(root,reportPath),body=bytes(root,decisionsPath),doc=parse(body);
 const expected=[...route.old_decisions.decisions,...route.additional_obligations];
 need(report.length>0&&sha(report)!==e.previous_report.sha256&&doc.version===1&&doc.run===run&&doc.group===e.canonical_group
  &&Array.isArray(doc.decisions)&&exact(doc.decisions.map(d=>d.obligation),expected.map(d=>d.obligation))
  &&expected.every(t=>doc.decisions.some(d=>d.obligation===t.obligation&&d.id===t.id&&d.route===t.route))
  &&doc.decisions.every(d=>d.verdict!=='escalated'&&(d.repair_confidence===undefined||d.repair_confidence===1)),
  'fresh canonical outputs omit current obligations or retain an escalation');
 return {[reportPath]:sha(report),[decisionsPath]:sha(body)};
}

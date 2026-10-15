// A failed adjudication cannot license its own false-positive edit. Root may
// request a separate, native current-carrier adoption; original evidence stays.
import { existsSync, readFileSync, realpathSync } from 'node:fs';
import { basename, isAbsolute, join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { itemHashGuard } from './item-hash.mjs';

const raw = bytes => createHash('sha256').update(bytes).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const need = (ok, message) => { if (!ok) throw Error('inherited correction: '+message); };
const sha = value => /^[a-f0-9]{64}$/.test(value ?? '');
const text = value => typeof value === 'string' && value.trim().length >= 40;
export const correctionPhase = phase => 'correction-'+phase;
export const correctionProgressPath = (dir,phase,round) => join(dir, correctionPhase(phase)+'-'+round+'-progress.json');

function bind(root,run,ref,evidence) {
  need(ref && typeof ref.path === 'string' && !isAbsolute(ref.path) && sha(ref.sha256),'invalid evidence reference');
  const file=resolve(root,ref.path), research=realpathSync(join(root,'research'));
  const rel=relative(research,realpathSync(file));
  need(!isAbsolute(rel) && !rel.startsWith('..') && rel.startsWith(run+'-'),'evidence is not run-local');
  need(raw(readFileSync(file))===ref.sha256,'evidence changed: '+ref.path);
  evidence[file]=ref.sha256;return file;
}

/** Pure request authentication apart from its caller's native preparation.
 * Never accepts a fixed ledger row alone as permission for a false-positive edit. */
export function correctionRequest(root,run,phase,round,{pack,reports,current,statements,items,errors,dir}) {
  if(!['initial','repeat'].includes(phase))return null;
  const pointerPath=join(dir,'owner-inherited-repair-request.json');
  if(!existsSync(pointerPath))return null;
  const pointer=read(pointerPath),evidence={};
  need(pointer.version===1 && pointer.run===run,'invalid root advertisement');
  const requestPath=bind(root,run,pointer.request,evidence),request=read(requestPath);
  need(resolve(requestPath,'..')===resolve(dir)
    && /^owner-inherited-repair-[a-zA-Z0-9._-]+\.json$/.test(basename(requestPath))
    && basename(requestPath)!=='owner-inherited-repair-request.json','request must be immutable workflow evidence');
  // Keep consumed earlier-phase advertisements harmless, but not mutable.
  if(request.phase!==phase||request.round!==round){
    const prior=correctionProgressPath(dir,request.phase,request.round);
    need(existsSync(prior)&&read(prior).request.sha256===pointer.request.sha256,'request targets another unconsumed round');
    return null;
  }
  need(request.version===1&&request.run===run&&request.reviewer==='/root'
    && ['initial','repeat'].includes(request.phase)&&Number.isInteger(round)&&round>0,'invalid root request');
  const {subject:id,supplier,unit}=request;
  need(typeof id==='string'&&typeof supplier==='string'&&id!==supplier&&typeof unit==='string','invalid subject or supplier');
  need(pack.repair_scope==='frontier'&&pack.frontier_ids?.includes(id)&&pack.frontier_ids.includes(supplier),'outside frozen frontier');
  const assigned=new Set((pack.assignments[unit]??[]).map(row=>row.id));
  need(assigned.has(id)&&assigned.has(supplier),'supplier and consumer must share the original native owner');
  const originalPack=bind(root,run,request.original_pack,evidence),originalReport=bind(root,run,request.original_report,evidence);
  need(originalPack===join(dir,phase+'-'+round+'.json')
    && originalReport===join(dir,'step5-v2-'+phase+'-r'+round+'-u'+unit+'.json'),'wrong original pack/report');
  const originalTask=bind(root,run,request.original_task,evidence);
  need(originalTask===originalReport.replace(/\.json$/,'.task.md')
    &&readFileSync(originalTask,'utf8').includes('Do not edit false-positive items.'),
    'missing exact original task prohibition');
  const failure=read(bind(root,run,request.failure_evidence,evidence)),diagnostic='change without confirmed adjudication '+id;
  need(Array.isArray(failure)&&failure.some(row=>row.type==='gate'&&row.id==='step5-wave-evidence'
    &&row.ok===false&&Number.isInteger(row.code)&&row.code!==0
    &&row.why===diagnostic&&typeof row.output==='string'&&row.output.trim()===diagnostic),
    'missing actual failed native collection gate evidence');
  const report=reports.find(row=>String(row.unit)===unit);
  need(report&&JSON.stringify(read(originalReport))===JSON.stringify(report),'original report differs');
  const subjectDecisions=report.decisions.filter(row=>row.id===id);
  need(subjectDecisions.length>0&&subjectDecisions.every(row=>row.outcome==='false_positive'),'not an originally false-positive subject');
  need(report.decisions.some(row=>row.id===supplier&&['confirmed_fatal','confirmed_nonfatal'].includes(row.outcome))
    && report.reviews.some(row=>row.id===supplier&&row.disposition==='repaired'&&row.post_sha256===current[supplier])
    && pack.before[supplier]!==current[supplier]
    && pack.before_statements?.[supplier]&&pack.before_statements[supplier]!==statements[supplier],'supplier has no confirmed public-interface repair');
  need(items.some(row=>row.id===id&&[...(row.deps??[]),...(row.references??[])].includes(supplier)),'no actual supplier-consumer edge');
  const edge=report.repair_notes?.consumer_checks?.find(row=>row.supplier===supplier&&row.consumer===id);
  need(edge&&text(edge.affected_use)&&text(edge.invalidated_claim)&&text(edge.minimality)
    && edge.disposition==='repaired_in_assigned_item','missing exact inherited affected-use evidence');
  need(report.ledger_updates?.some(row=>row.id===id&&row.ledger==='canonical-defect-ledger'
    &&row.status==='fixed'&&row.defect_type==='logic'&&text(row.reason)),'missing distinct recorded logic repair');
  const completed=report.repair_notes?.completed??[];
  need(completed.some(row=>row.id===supplier&&row.interface_changed===true),'supplier interface event not recorded');
  need(report.downstream.includes(id)&&report.reviews.some(row=>row.id===id&&row.disposition==='repaired'
    &&row.post_sha256===current[id]),'missing original repaired-carrier review/inventory');
  need(errors.length===1&&errors[0]==='change without confirmed adjudication '+id,'request must match the sole actual collection failure');
  need(sha(request.before_sha256)&&sha(request.observed_sha256)
    &&request.before_sha256===pack.before[id]&&request.observed_sha256===current[id]
    &&request.before_sha256!==request.observed_sha256,'stale subject guards');
  const before=bind(root,run,request.before_source,evidence),observed=bind(root,run,request.observed_source,evidence);
  need(itemHashGuard(readFileSync(before,'utf8'))===request.before_sha256
    &&itemHashGuard(readFileSync(observed,'utf8'))===request.observed_sha256
    &&raw(readFileSync(observed))===raw(readFileSync(join(root,'items',id+'.md'))),'preserved/current carrier mismatch');
  bind(root,run,request.scientific_review,evidence);
  for(const ref of request.scientific_support??[])bind(root,run,ref,evidence);
  need(text(request.reason),'missing root violation/recovery explanation');
  const stateDir=resolve(root,pointer.state_dir??'.physics-autopilot/'+run);
  need(relative(root,stateDir).startsWith('.physics-autopilot/')&&basename(stateDir)===run,'wrong state directory');
  const state=read(join(stateDir,'state.json')),stage=phase==='initial'?'5.1-adjudicate':'5.5-adjudicate';
  need(state.run===run&&state.stage===stage&&!state.finishedAt&&!state.stages?.[stage]?.doneAt,'wrong native stage');
  need(!existsSync(join(dir,phase+'-'+round+'-collected.json')),'original collection already immutable');
  return {request:{path:requestPath,sha256:pointer.request.sha256},payload:request,evidence,edge,state,
    violation:'Original native task prohibited editing false-positive items. The inherited edit exceeded that assignment; this continuation reviews adoption now and does not license the historical write.'};
}

export function assertCorrectionDrained(root,context) {
  need(Object.values(context.state.dispatches??{}).every(row=>!row.startedAt||row.endedAt),'writers have not drained');
  need(!existsSync(join(root,'.physics-autopilot','step5-shared-write.lock')),'shared metadata writer is active');
}

export function correctionAdoption(report,request,current,currentReview) {
  const id=request.subject,rows=report.inherited_adjudications,adoptions=report.inherited_adoptions;
  need(Array.isArray(rows)&&rows.length===1&&rows[0].id===id
    &&['confirmed_fatal','confirmed_nonfatal'].includes(rows[0].outcome)
    &&rows[0].defect_type==='logic'&&rows[0].uncertain===false&&text(rows[0].reason)
    &&Array.isArray(rows[0].source_urls)&&rows[0].source_urls.every(url=>typeof url==='string'&&/^https:\/\//.test(url))
    &&(rows[0].source_urls.length>0||rows[0].familiar===true)
    &&!Object.hasOwn(rows[0],'model')&&!Object.hasOwn(rows[0],'context_sha256'),'missing separate native inherited adjudication');
  need(Array.isArray(adoptions)&&adoptions.length===1&&adoptions[0].id===id
    &&adoptions[0].disposition==='adopted'&&adoptions[0].original_scope_violation===true
    &&text(adoptions[0].reason),'missing explicit adoption and historical violation');
  const review=report.reviews?.find(row=>row.id===id);
  need(review?.disposition==='unaffected'&&review.post_sha256===request.observed_sha256
    &&review.post_sha256===current[id]&&review.review_context_sha256===currentReview.review_context_sha256,
    'fresh native adoption must cover the exact unchanged current carrier and context');
  need(report.decisions?.length===0&&report.created_items?.length===0,'correction cannot invent a judge tuple or author prerequisites');
  return {review,decision:{...rows[0],origin:'native-inherited-correction',phase:report.phase,round:report.round,
    item_sha256:request.before_sha256},adoption:adoptions[0]};
}

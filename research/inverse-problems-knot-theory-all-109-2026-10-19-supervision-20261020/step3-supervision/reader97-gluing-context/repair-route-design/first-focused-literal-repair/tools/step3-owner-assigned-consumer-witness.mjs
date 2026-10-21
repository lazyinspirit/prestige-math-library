// Explicit same-assignment attribution witness. No edit permission or acceptance.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, lstatSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { split, yaml } from './pathway-lib.mjs';
import { draftOwnerMatcher } from './run-draft-ownership.mjs';
export const ASSIGNED_WITNESS_POLICY = 'owner-step3-same-assignment-consumer-witness-v1';
const sha = b => createHash('sha256').update(b).digest('hex');
const canon = x => Array.isArray(x) ? x.map(canon) : x && typeof x === 'object' ? Object.fromEntries(Object.keys(x).sort().map(k => [k,canon(x[k])])) : x;
export const assignedWitnessHash = x => sha(JSON.stringify(canon(x)) ?? 'undefined');
const need = (v,m) => { if (!v) throw Error('assigned consumer witness: '+m); };
const hex = x => /^[a-f0-9]{64}$/.test(x ?? '');
const batch = x => typeof x === 'string' && /^[1-9]\d*$/.test(x);
const registry = run => `research/${run}-step3-owner-assigned-consumer-witnesses.json`;
const parse = b => JSON.parse(String(b));
const front = b => yaml().parse(split(String(b)).fm);
function bytes(root,p) {
 need(typeof p === 'string' && !isAbsolute(p) && !p.includes('\\') && !p.split('/').some(x=>!x||x==='.'||x==='..'),'invalid path');
 const full=resolve(root,p), rel=relative(resolve(root),full);
 need(rel && !rel.startsWith('..') && !isAbsolute(rel),'escaping path');
 let at=resolve(root); for(const part of rel.split('/')) { at=resolve(at,part); need(!lstatSync(at).isSymbolicLink(),'symlink evidence'); }
 need(lstatSync(full).isFile(),'nonregular evidence'); return readFileSync(full);
}
function ref(root,run,r) {
 need(r && typeof r.path==='string' && r.path.startsWith(`research/${run}-`) && hex(r.sha256),'invalid evidence reference');
 const b=bytes(root,r.path); need(sha(b)===r.sha256,'changed '+r.path); return b;
}
function homes(root,run,id) {
 const hits=[];
 for(const name of readdirSync(resolve(root,'research'))) {
  const match=name.match(new RegExp(`^${run}-batch-([1-9]\\d*)\\.pages\\.json$`)); if(!match)continue;
  const doc=parse(bytes(root,'research/'+name));
  for(const page of Array.isArray(doc)?doc:doc.pages??[]) for(const row of page.items??[]) if((typeof row==='string'?row:row.id)===id)hits.push({batch:match[1],row});
 }
 need(hits.length===1,'missing/ambiguous home '+id); return hits[0];
}
function snapshot(root,run,r,n) {
 need(r.path===`research/${run}-step3-hash-${n}-pre.json`,'wrong pre snapshot');
 const s=parse(ref(root,run,r)); need(s.version===2 && s.run===run && String(s.batch)===n && s.label==='pre' && Array.isArray(s.manifest) && new Set(s.manifest).size===s.manifest.length,'invalid pre snapshot'); return s;
}
function edge(fm,id,kind) {
 return ['deps','justified_by'].includes(kind) && Array.isArray(fm[kind]) && fm[kind].includes(id) && ['deps','justified_by'].filter(k=>Array.isArray(fm[k])&&fm[k].includes(id)).length===1;
}
const refs=['findings','report','native_result','prompt','native_last_message','capture','origin_pre','producer_pre','observed_source','actual_consumer','owner_review'];
function authenticate(root,run,e,binding,{live=true}={}) {
 need(e.version===1 && e.policy===ASSIGNED_WITNESS_POLICY && e.run===run && e.owner_identity==='/root' && e.reviewed===true && e.mathematical_acceptance===false && e.edit_permission===false && e.scope_waiver===false && e.home_coverage_owed===true,'invalid owner authority');
 need(batch(e.origin_batch)&&batch(e.producer_batch)&&e.origin_batch!==e.producer_batch&&Number.isSafeInteger(e.index)&&e.index>0&&e.consumer_id!==e.actual_consumer_id,'invalid identities');
 need(e.scope_misattribution==='named-and-actual-consumers-both-assigned'&&typeof e.reason==='string'&&e.reason.trim().length>=80,'missing attribution explanation');
 for(const k of refs)ref(root,run,e[k]);
 need(e.findings.path!==`research/${run}-reader-findings-${e.origin_batch}.json`&&e.report.path!==`research/${run}-reader-${e.origin_batch}.md`,'original artifacts must be archived');
 const findings=parse(ref(root,run,e.findings)), original=findings.findings?.[e.index-1], native=parse(ref(root,run,e.native_result));
 need([e.origin_batch,`${run}-batch-${e.origin_batch}`].includes(String(findings.batch))&&original?.subject_type==='in-run-dependency'&&original.id===e.id&&original.consumer_id===e.consumer_id&&original.severity==='nonfatal'&&original.observed_source?.snapshot==='current'&&hex(original.observed_source.item_sha256)&&assignedWitnessHash(original)===e.finding_sha256,'changed native finding');
 need(native.run===run&&native.role==='reader'&&native.label===`reader-${e.origin_batch}`&&Number.isSafeInteger(native.attempt)&&native.attempt>0&&native.ok===true&&native.exit_code===0&&native.process_exit_code===0&&native.timed_out===false&&native.covers?.length===1&&String(native.covers[0])===e.origin_batch&&native.terminal_summary?.task_completed===true&&native.terminal_summary?.final_response_present===true&&native.terminal_summary?.task_aborted===false&&typeof native.session_id==='string'&&native.session_id.trim().length>0&&native.written_by!=='autopilot','not successful native attempt');
 const stem=`research/${run}-dispatch/reader-reader-${e.origin_batch}.attempt-${native.attempt}`;
 need(e.native_result.path===stem+'.result.json'&&e.prompt.path===stem+'.prompt.md'&&e.native_last_message.path===stem+'.last-message.json'&&native.prompt?.endsWith('/'+e.prompt.path),'wrong native attempt paths');
 need(assignedWitnessHash(parse(ref(root,run,e.native_last_message)))===assignedWitnessHash(findings),'complete last-message differs from full findings');
 let tailIsComplete=true; try { tailIsComplete=assignedWitnessHash(parse(native.tail))===assignedWitnessHash(findings); } catch {tailIsComplete=false;}
 need(!tailIsComplete && typeof native.tail==='string' && native.tail.length>0,'this policy requires explicitly incomplete tail');
 const capture=parse(ref(root,run,e.capture));
 need(capture.version===1&&capture.run===run&&capture.owner_identity==='/root'&&capture.basis==='root-capture-of-existing-native-last-message-no-native-output-digest'&&capture.native_output_digest_absent===true&&capture.native_tail_complete===false&&capture.native_result_sha256===e.native_result.sha256&&capture.prompt_sha256===e.prompt.sha256&&capture.native_last_message_sha256===e.native_last_message.sha256&&capture.findings_sha256===e.findings.sha256&&capture.native_attempt===native.attempt&&capture.native_session_id===native.session_id&&typeof capture.evidence==='string'&&capture.evidence.trim().length>=80,'missing honest root capture attestation');
 need(!Object.keys(native).some(k=>/last.?message|output.*(?:hash|digest|sha256)/i.test(k)),'native sidecar/digest present: explicit new binding required');
 need(Number.isFinite(Date.parse(native.ended_at))&&Number.isFinite(Date.parse(capture.at))&&Number.isFinite(Date.parse(e.at))&&Date.parse(capture.at)>=Date.parse(native.ended_at)&&Date.parse(e.at)>=Date.parse(capture.at),'invalid capture/review chronology');
 const origin=snapshot(root,run,e.origin_pre,e.origin_batch),producer=snapshot(root,run,e.producer_pre,e.producer_batch);
 need(origin.manifest.includes(e.consumer_id)&&origin.manifest.includes(e.actual_consumer_id)&&!origin.manifest.includes(e.id)&&producer.manifest.includes(e.id),'not exact same-assignment/producer homes');
 need(['item_sha256','contract_sha256','manifest_sha256'].every(k=>hex(producer.hashes?.[e.id]?.[k])),'incomplete producer baseline');
 const source=ref(root,run,e.observed_source),consumer=ref(root,run,e.actual_consumer);
 need(sha(source)===original.observed_source.item_sha256&&front(source).id===e.id&&front(consumer).id===e.actual_consumer_id&&edge(front(consumer),e.id,e.edge_kind),'unbound observation or actual edge');
 need(draftOwnerMatcher(root,run)(front(source))&&draftOwnerMatcher(root,run)(front(consumer)),'not current-run draft carriers');
 const review=parse(ref(root,run,e.owner_review));
 need(review.run===run&&review.owner_identity==='/root'&&review.obligation===`reader:${e.origin_batch}:${e.index}`&&review.native_consumer_id===e.consumer_id&&review.actual_consumer_id===e.actual_consumer_id&&review.source_sha256===e.observed_source.sha256&&review.consumer_sha256===e.actual_consumer.sha256&&review.actual_declared_edge===e.edge_kind&&review.native_severity==='nonfatal'&&review.original_obligation_owed===true&&review.native_acceptance_claimed===false&&typeof review.evidence==='string'&&review.evidence.trim().length>=80&&Array.isArray(review.evidence_refs)&&review.evidence_refs.length>0,'missing focused owner use review');
 for(const r of review.evidence_refs)ref(root,run,r);
 if(live) {
  need(bytes(root,`research/${run}-reader-findings-${e.origin_batch}.json`).equals(ref(root,run,e.findings))&&bytes(root,`research/${run}-reader-${e.origin_batch}.md`).equals(ref(root,run,e.report)),'native live artifacts changed');
  need(homes(root,run,e.id).batch===e.producer_batch&&homes(root,run,e.consumer_id).batch===e.origin_batch&&homes(root,run,e.actual_consumer_id).batch===e.origin_batch,'unique homes changed');
  need(edge(homes(root,run,e.actual_consumer_id).row,e.id,e.edge_kind),'actual manifest direct edge missing');
  need(sha(bytes(root,`items/${e.actual_consumer_id}.md`))===e.actual_consumer.sha256,'actual consumer changed');
  const current=front(bytes(root,`items/${e.id}.md`)); need(current.id===e.id&&draftOwnerMatcher(root,run)(current),'current producer not owned draft');
 }
 return {e,binding,original};
}
export function loadAssignedConsumerWitnesses(root,run,options={}) {
 need(/^[a-zA-Z0-9_-]+$/.test(run),'invalid run'); const p=registry(run); if(!existsSync(resolve(root,p)))return new Map();
 const d=parse(bytes(root,p)); need(d.version===1&&d.run===run&&d.policy===ASSIGNED_WITNESS_POLICY&&d.authorized_by==='owner'&&typeof d.authorization==='string'&&d.authorization.trim().length>=40&&Array.isArray(d.routes)&&d.routes.length>0,'invalid registry');
 const out=new Map(),subjects=new Set();
 for(const e of d.routes) {const key=`reader:${e.origin_batch}:${e.index}`;need(!out.has(key)&&!subjects.has(`${e.origin_batch}:${e.id}`),'duplicate witness');subjects.add(`${e.origin_batch}:${e.id}`);out.set(key,authenticate(root,run,e,{path:p,entry_sha256:assignedWitnessHash(e)},options));} return out;
}
const derived=['obligation','batch','route','producer_batch','dependency_path','producer_carrier_at_split','producer_pre_snapshot','observation_basis','observed_sha256','owner_assigned_consumer_witness','owner_actual_consumer_id'];
export function assignedConsumerWitness(root,run,batch,finding,dependencies) {
 const anchor=finding.owner_assigned_reader_obligation??finding.obligation;
 const route=loadAssignedConsumerWitnesses(root,run).get(anchor);
 if(!route){need(!finding.owner_assigned_consumer_witness&&!finding.owner_actual_consumer_id&&!finding.owner_assigned_reader_obligation,'unregistered authority');return null;}
 const {e,original}=route;
 need(e.origin_batch===String(batch)&&finding.id===e.id&&finding.consumer_id===e.consumer_id,'subject mismatch');
 if(finding.owner_assigned_reader_obligation) {
  need(new RegExp(`^refuter:${batch}:[1-9]\\d*$`).test(finding.obligation??'')&&finding.subject_type==='in-run-dependency','invalid refuter anchor');
 } else {const raw={...finding};for(const k of derived)delete raw[k];need(assignedWitnessHash(raw)===assignedWitnessHash(original),'native finding changed');}
 const ordinary=dependencies.get(e.id),path=ordinary?.consumers.get(e.actual_consumer_id);
 need(!ordinary?.consumers.has(e.consumer_id),'native named consumer already has ordinary route');
 need(ordinary?.producer_batch===e.producer_batch&&path?.length===2&&path[0]===e.actual_consumer_id&&path[1]===e.id,'missing ordinary assigned direct path');
 if(finding.owner_assigned_consumer_witness)need(assignedWitnessHash(finding.owner_assigned_consumer_witness)===assignedWitnessHash(route.binding)&&finding.owner_actual_consumer_id===e.actual_consumer_id,'witness binding changed');
 if(finding.dependency_path!==undefined)need(Array.isArray(finding.dependency_path)&&finding.dependency_path.length===2&&finding.dependency_path[0]?.id===e.actual_consumer_id&&finding.dependency_path[0]?.item_sha256===e.actual_consumer.sha256&&finding.dependency_path[1]?.id===e.id&&hex(finding.producer_carrier_at_split?.item_sha256)&&finding.dependency_path[1]?.item_sha256===finding.producer_carrier_at_split.item_sha256,'frozen actual path changed');
 return route;
}
export function assignedConsumerWitnessClosureEvidence(root,run,{frozenArtifacts=null}={}) {
 if(frozenArtifacts?.[registry(run)])need(existsSync(resolve(root,registry(run))),'frozen registry removed');
 const routes=loadAssignedConsumerWitnesses(root,run,{live:!frozenArtifacts});if(!routes.size)return{};
 const p=registry(run),out={[p]:sha(bytes(root,p))};
 for(const {e} of routes.values()) {for(const k of refs)out[e[k].path]=e[k].sha256;for(const r of parse(ref(root,run,e.owner_review)).evidence_refs){ref(root,run,r);out[r.path]=r.sha256;}}
 if(frozenArtifacts)for(const [p,h]of Object.entries(out))need(frozenArtifacts[p]===h,'frozen witness evidence changed '+p);
 return out;
}

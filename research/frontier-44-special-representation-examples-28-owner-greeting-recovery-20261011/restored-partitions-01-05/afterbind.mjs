import fs from 'node:fs';
import crypto from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011';
const dir=base+'/restored-partitions-01-05';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const at=(d,p)=>p.split('/').slice(1).reduce((a,k)=>a[k.replace(/~1/g,'/').replace(/~0/g,'~')],d);
const packet=read(dir+'/integration-packet.json');
const inventory=read(dir+'/review-inventory.json');
const holds=[];
const fields=packet.json_operations.map(op=>{
 const actual=at(read(op.path),op.pointer);const equal=JSON.stringify(actual)===JSON.stringify(op.after);
 const row={path:op.path,pointer:op.pointer,current_raw_file_sha256:sha(op.path),actual_field:actual,equals_reviewed_target:equal,proposal_origin:op.proposal_origin};
 if(!equal)holds.push({path:op.path,pointer:op.pointer,reason:'Integrated field differs from reviewed target'});
 if(op.pointer.includes('/boundaries/')){
  const path='items/'+op.pointer.split('/')[2]+'.md';const guard=itemHashGuard(fs.readFileSync(path,'utf8'));
  row.actual_current_source={path,raw_sha256:sha(path),itemHashGuard:guard};row.current_template_guard_matches=actual.template_review?.item_sha256===guard;
  if(!row.current_template_guard_matches)holds.push({path:op.path,pointer:op.pointer,reason:'Current source/template guard mismatch'});
 }
 return row;
});
const sources=packet.source_operations.map(op=>{
 const actual=fs.readFileSync(op.path,'utf8'),proposal=fs.readFileSync(op.after_path,'utf8');
 const exact=actual===proposal;const same=itemHashGuard(actual)===itemHashGuard(proposal);
 if(!same)holds.push({path:op.path,reason:'Integrated mathematics differs from source accepted target'});
 return {path:op.path,current_raw_sha256:sha(op.path),current_itemHashGuard:itemHashGuard(actual),reviewed_target_path:op.after_path,reviewed_raw_sha256:sha(op.after_path),exact_bytes_match:exact,mathematics_guard_matches:same,acceptance:'Actual current carrier binds focused repaired source/consumer proof acceptance documented in review-inventory.json; no whole unrelated audit.'};
});
const sourceSubject='lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage';
const currentDeps=new Map();
for(const file of fs.readdirSync('items').filter(x=>x.endsWith('.md'))){const text=fs.readFileSync('items/'+file,'utf8');const m=/^deps:\s*\[([^\]]*)\]/m.exec(text);currentDeps.set(file.slice(0,-3),new Set((m?.[1]??'').match(/[a-z][a-z0-9-]+/g)??[]));}
const closure=new Set([sourceSubject]);let addition;
do{addition=false;for(const [id,deps] of currentDeps)if(!closure.has(id)&&[...deps].some(x=>closure.has(x))){closure.add(id);addition=true;}}while(addition);
const original=inventory.mathematical_repair_assessment.consumer_rows;
const exactCone=closure.size===original.length+1&&original.every(x=>closure.has(x.id));
if(!exactCone)holds.push({reason:'Current cellular consumer cone differs from independently reviewed cone'});
const consumers=original.map(r=>{
 const path='items/'+r.id+'.md';const current=sha(path);const own=sources.find(s=>s.path===path);
 const acceptable=own?own.mathematics_guard_matches:current===r.current_raw_sha256;
 if(!acceptable)holds.push({path,reason:'Current consumer carrier changed since focused acceptance'});
 const currentText=fs.readFileSync(path,'utf8');
 const excerpts=currentText.split('\n\n').filter(b=>!b.startsWith('---')&&(b.includes('shared')||b.includes(sourceSubject))).slice(0,3).map(b=>b.slice(0,950));
 return {id:r.id,path,current_raw_sha256:current,current_itemHashGuard:itemHashGuard(currentText),current_consumed_clause_excerpts:excerpts,affected_use_assessment:r.assessment,actual_target_matches_review:acceptable,verdict:acceptable?'ACCEPT_CURRENT_FOCUSED_AFFECTED_USE':'HOLD',whole_item_audit:false};
});
const creation='research/'+packet.run+'-step3-owner-creation-'+sourceSubject+'.json';
const nativeReview='research/'+packet.run+'-step3b-review-'+sourceSubject+'.json';
const ownerReview='research/'+packet.run+'-step3b-owner-'+sourceSubject+'.json';
const classification={id:sourceSubject,owner_creation_registration_exists:fs.existsSync(creation),native_review:{path:nativeReview,raw_sha256:sha(nativeReview),record:read(nativeReview)},current_owner_decision:{path:ownerReview,raw_sha256:sha(ownerReview),record:read(ownerReview)},observed_origin:'Native authored Step3b carrier has genuine owner:false native author review; no owner-spawned creation registration exists. This repair does not reclassify authorship.',owner_creation_claim_resolution_required:false,reason:'Owner-held creation claim resolver applies only to a genuine immutable owner-spawned creation registration. No such registration exists for source03; normal current owner item hold resolution remains root/engine owned.',historical_native_acceptance_not_reused_as_current_acceptance:true};
if(classification.owner_creation_registration_exists)holds.push({reason:'Unexpected source03 owner creation registration requires root classification review'});
const result={version:1,run:packet.run,reviewer:'/root/restore_boundary_01_05',recorded_at:new Date().toISOString(),kind:'current-actual-focused-source-consumer-and-row-afterbinding',application_receipt:{path:base+'/restored-root-integration/applied.json',raw_sha256:sha(base+'/restored-root-integration/applied.json')},reviewed_packet:{path:dir+'/integration-packet.json',raw_sha256:sha(dir+'/integration-packet.json')},reviewed_acceptance:{path:dir+'/review-inventory.json',raw_sha256:sha(dir+'/review-inventory.json')},actual_fields:fields,actual_sources:sources,actual_cellular_consumer_checks:consumers,current_consumer_cone_exact:exactCone,creation_origin_classification:classification,counts:{fields:fields.length,owned_boundary_rows:fields.filter(x=>x.pointer.includes('/boundaries/')).length,sources:sources.length,cellular_consumers:consumers.length},focused_acceptance:'All integrated source bytes and row/field values are now checked against reviewed targets. Source03 zero-cell argument and unchanged/nonzero consumer premises retain the independently checked sound route; exact integrated uses accepted in the focused scope. Source01 targeted degree and nil-Hecke center repairs accepted. Source13 seven case rows bind actual successor correction; substantive source13 proof acceptance belongs lead11.',holds,remaining_holds:holds.length,canonical_writes:false,gates_attempted:false,whole_item_audit_claimed:false};
fs.writeFileSync(dir+'/current-actual-afterbinding.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({counts:result.counts,holds,classification},null,2));

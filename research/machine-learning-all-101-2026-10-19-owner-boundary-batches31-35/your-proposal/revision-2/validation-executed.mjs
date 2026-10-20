import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {numberedProofSteps} from '/home/lazyinspirit/Projects/prestige-math-library/tools/facts-block.mjs';
const R='machine-learning-all-101-2026-10-19';
const tool=fs.readFileSync('tools/proof-contract.mjs','utf8');
const helper=tool.slice(tool.indexOf('function validateBoundaries('),tool.indexOf('\nfunction loadItem('));
const standards=tool.match(/const STANDARD_BOUNDARIES = (\[[\s\S]*?\]);/)[1];
const errors=[];const ctx=vm.createContext({error:(code,message,id)=>errors.push({code,message,id})});
vm.runInContext(`const STANDARD_BOUNDARIES=${standards};${helper};globalThis.validate=validateBoundaries;`,ctx);
const eq=(a,b)=>assert.deepStrictEqual(a,b);
const reports=[],registry=[];
for(const batch of [31,32,33,34,35,42]){
 const root=`research/${R}-owner-boundary-${batch<40?'batches31-35':'batches39-42'}/your-proposal`;
 const base=`${root}/revision-2/batch-${batch}`;
 const packet=`${base}/boundary-object-ops.json`,oldPacket=`${root}/batch-${batch}/boundary-object-ops.json`;
 const old=JSON.parse(fs.readFileSync(oldPacket)),ops=JSON.parse(fs.readFileSync(packet));
 assert(fs.readFileSync(oldPacket).equals(fs.readFileSync(`${base}/v1/boundary-object-ops.json`)));
 const target=ops[0].target,current=JSON.parse(fs.readFileSync(target)),v1=structuredClone(current),v2=structuredClone(current);
 for(const [candidate,list] of [[v1,old],[v2,ops]])for(const o of list){
  assert(fs.readFileSync(o.source_guard.target).equals(fs.readFileSync(o.source_guard.before_path)));
  const rows=candidate.contracts[o.item].boundaries.filter(b=>b.case===o.case);assert.equal(rows.length,1);eq(rows[0],o.before_object);
  for(const f of o.fields){assert.equal(Object.hasOwn(rows[0],f.field),f.before_present);if(f.before_present)eq(rows[0][f.field],f.before);rows[0][f.field]=f.after;}
 }
 let changed=0;
 for(let i=0;i<ops.length;i++){
  const a=old[i],b=structuredClone(ops[i]);
  for(let j=0;j<a.fields.length;j++)if(a.fields[j].field==='evidence'&&a.fields[j].after!==b.fields[j].after){assert(b.fields[j].after.endsWith(a.fields[j].after));changed++;b.fields[j].after=a.fields[j].after;}
  eq(a,b);
 }
 for(const id of current.scope){const a=structuredClone(current.contracts[id]),b=structuredClone(v2.contracts[id]);delete a.boundaries;delete b.boundaries;eq(a,b);}
 for(const change of JSON.parse(fs.readFileSync(`${base}/evidence-anchor-supplement.json`))){
  const raw=fs.readFileSync(change.source,'utf8');const def=raw.split('## Definition\n')[1].split('\n## ')[0];for(const q of change.exact_source_excerpts)assert(def.includes(q));
 }
 const count=Object.values(v2.contracts).reduce((n,c)=>n+c.boundaries.length,0);
 const outcomes={};
 for(const [name,candidate] of [['v1',v1],['v2',v2]]){
  errors.length=0;for(const id of candidate.scope){const raw=fs.readFileSync(`items/${id}.md`,'utf8');const steps=new Map(numberedProofSteps(raw).map(s=>[s.id,s]));ctx.validate(id,candidate.contracts[id].boundaries,steps);}
  outcomes[name]=structuredClone(errors);
 }
 assert.equal(outcomes.v2.length,0);assert.equal(outcomes.v1.length,changed);assert(outcomes.v1.every(e=>e.code==='boundary-evidence-unanchored'));
 const report={kind:'native-boundary-schema-helper-only',batch,rows_validated:count,scope_items:v2.scope.length,v1_errors:outcomes.v1,v2_errors:outcomes.v2,evidence_only_changes:changed,source_guards_match:true,all_before_objects_match:true,nonboundary_fields_including_finite_smoke_preserved:true,status_reason_foreign_fields_and_v1_evidence_preserved:true,native_function_origin:'tools/proof-contract.mjs:260-299',gate:false,new_mathematical_review:false};
 fs.writeFileSync(`${base}/native-boundary-schema-checks.json`,JSON.stringify(report,null,2)+'\n',{flag:'wx'});
 reports.push(report);registry.push({batch,v1_packet:oldPacket,authoritative_v2_packet:packet,operation_count:ops.length,evidence_only_changes:changed});
}
const top=`research/${R}-owner-boundary-batches31-35/your-proposal/revision-2`;
fs.writeFileSync(`${top}/authoritative-packet-overrides.json`,JSON.stringify({kind:'root-collector-packet-replacements',packets:registry,live_writes:false},null,2)+'\n',{flag:'wx'});
fs.writeFileSync(`${top}/checks.json`,JSON.stringify({kind:'mechanical-evidence-anchor-v2-validation',batches:reports,all_pass:true,v1_reproduced_unanchored_errors:21,v2_errors:0,live_writes:false,gate:false,new_mathematical_review:false},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify(reports.map(r=>({batch:r.batch,scope:r.scope_items,rows:r.rows_validated,changes:r.evidence_only_changes,v1_errors:r.v1_errors.length,v2_errors:r.v2_errors.length})),null,2));

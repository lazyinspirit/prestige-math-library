import {readFileSync as read,writeFileSync as write,copyFileSync as copy} from 'node:fs';
import {createHash} from 'node:crypto';
import {numberedProofSteps} from '../../tools/physics-support/facts-block.mjs';
const base=new URL('./',import.meta.url),root=new URL('../../',import.meta.url),id='thm-tgr-finite-current-production-balance';
const file='research/physics-remaining-80-2026-10-17-batch-50.proof-contracts.json',path=new URL(file,root),before=read(path),doc=JSON.parse(before),old=structuredClone(doc);
const sha=x=>createHash('sha256').update(x).digest('hex');
const originalReportPath=new URL('final-report.json',base),originalReport=read(originalReportPath),report=JSON.parse(originalReport);
for(const [f,h]of Object.entries(report.current_inputs))if(sha(read(new URL(f,root)))!==h)throw Error('Source changed '+f);
const steps=numberedProofSteps(read(new URL(`items/${id}.md`,root),'utf8')),entry=doc.contracts[id];
copy(path,new URL('before/batch-50.proof-contracts.before-worksheet-sync.json',base));
const additions=new Set(['1.4','2.2','4.1']),existing=new Map(entry.derivations.map(row=>[row.step,row]));
entry.derivations=steps.map(step=>{
 if(!additions.has(step.id)){
  const row=existing.get(step.id);if(!row||row.claim!==step.claim)throw Error('Unrelated claim mismatch '+step.id);return row;
 }
 return {id:`step-${step.id.replace('.','-')}`,step:step.id,claim:step.claim,inputs:step.inputs};
});
const citationChanges=[];
for(const row of entry.citations){
 const actual=steps.filter(step=>step.inputs.includes(row.fact)).map(step=>step.id);
 if(JSON.stringify(row.uses)!==JSON.stringify(actual)){citationChanges.push({fact:row.fact,source:row.source,before:row.uses,after:actual});row.uses=actual;}
}
for(const [key,value]of Object.entries(old.contracts))if(key!==id&&JSON.stringify(doc.contracts[key])!==JSON.stringify(value))throw Error('Unrelated contract modified');
for(const [key,value]of Object.entries(old.contracts[id]))if(!['derivations','citations'].includes(key)&&JSON.stringify(entry[key])!==JSON.stringify(value))throw Error('Unrelated target field modified '+key);
if(!read(path).equals(before))throw Error('Concurrent worksheet writer');
write(path,JSON.stringify(doc,null,2)+'\n');
if(!read(originalReportPath).equals(originalReport))throw Error('Original scientific release modified');
write(new URL('worksheet-sync-addendum.json',base),JSON.stringify({version:1,run:'physics-remaining-80-2026-10-17',batch:'50',owner:'physics_gate_coverage_tgr',recorded_at:new Date().toISOString(),scope:'Exact original batch50 theorem derivations and citation uses only',original_scientific_release:{path:'research/physics-remaining-80-2026-10-17-owner-step2-batch50-cycle1/final-report.json',raw_sha256:sha(originalReport),unchanged:true},worksheet:{path:file,before_raw_sha256:sha(before),current_raw_sha256:sha(read(path)),before_file:'before/batch-50.proof-contracts.before-worksheet-sync.json'},source_inputs_unchanged:report.current_inputs,added_derivations:[...additions],current_order:steps.map(s=>s.id),citation_changes:citationChanges,preserved:'All other five contracts, every existing derivation object, all boundary rows and review bindings, citation quotes, risk review, finite checks and all other keys preserved exactly. No source/status/hash-stamp/readiness/manifest/level/native edits.'},null,2)+'\n');
console.log(JSON.stringify({derivations:steps.length,added:[...additions],citation_uses_updated:citationChanges.length}));

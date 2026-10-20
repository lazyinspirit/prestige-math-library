import fs from 'node:fs';
import {createHash} from 'node:crypto';
const base='research/machine-learning-all-101-2026-10-19-owner-native-smoke-';
const {gaussianVCMLChecks}=await import('../../'+base+'gaussian-vc/your-proposal/finite-smoke-ml101-gaussian-vc.mjs');
const {flowMatchingMLChecks}=await import('../../'+base+'flow/your-proposal/finite-smoke-ml101-flow.mjs');
const read=p=>JSON.parse(fs.readFileSync(p));
const bindings=[],results=[];
const normalise=s=>s.replace(/\s+/g,' ').trim();
for(const [tag,reg,packet,ops]of[
 ['gaussian-vc',gaussianVCMLChecks,'field-cas.json',null],['flow',flowMatchingMLChecks,'packet.json',null]]){
 const p=base+tag+'/your-proposal/'+packet,d=read(p),fields=d.fields??d.operations;
 for(const field of fields){
  const source=fs.readFileSync(field.source_path??field.source_guard.path,'utf8');
  for(const row of field.replacement_finite_smoke??field.after){
   const valid=reg[row.check](row);
   const bad=[null,[],{...row,fixture:'unsupported-fixture'},{...row,unsupported_parameter:2}];
   for(const [k,v]of Object.entries(row))if(typeof v==='number')bad.push({...row,[k]:NaN});
   const rejects=bad.map(v=>reg[row.check](v));
   const assertionPresent=normalise(source).includes(normalise(row.asserts));
   if(!valid.ok||!assertionPresent||rejects.some(r=>r.ok!==false))throw Error('focused check failed '+row.check);
   results.push({group:tag,id:field.id,check:row.check,actual_assertion_excerpt_present:assertionPresent,positive:valid,invalid_probes_rejected:rejects.length});
  }
 }
 const modulePath=base+tag+'/your-proposal/'+(tag==='flow'?'finite-smoke-ml101-flow.mjs':'finite-smoke-ml101-gaussian-vc.mjs');
 bindings.push({path:modulePath,sha256:createHash('sha256').update(fs.readFileSync(modulePath)).digest('hex')});
}
fs.writeFileSync(new URL('./focused-results.json',import.meta.url),JSON.stringify({native_gate:false,whole_registry_selftest:false,scope:'Only 28 supplied proposal rows, positive and malformed selectors plus exact actual source excerpts. No proof-review credit.',bindings,results},null,2)+'\n');
console.log(JSON.stringify({positive_rows:results.length,groups:['gaussian-vc','flow'],native_gate:false}));

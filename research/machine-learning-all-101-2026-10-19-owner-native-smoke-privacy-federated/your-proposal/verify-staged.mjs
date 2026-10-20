#!/usr/bin/env node
// Focused proposal verification only: no live edits, gates or global self-test.
import {readFileSync,writeFileSync} from 'node:fs';
import {privacyFederatedMLChecks as checks} from './finite-smoke-privacy-federated-ml.mjs';
const base=new URL('./',import.meta.url),read=p=>readFileSync(p,'utf8'),packet=JSON.parse(read(new URL('operations.json',base)));
const outcomes=[],guards=[],paths=new Set(),assert=(ok,msg)=>{if(!ok)throw Error(msg);};
for(const op of packet.operations){
 assert(!paths.has(op.path+op.json_pointer),'duplicate field operation');paths.add(op.path+op.json_pointer);
 const current=read(op.path),before=read(op.contract_raw_guard),source=read(op.source_path),sourceBefore=read(op.source_raw_guard);
 assert(current===before,'contract raw guard drift '+op.id);assert(source===sourceBefore,'source raw guard drift '+op.id);
 const doc=JSON.parse(current);assert(JSON.stringify(doc.contracts[op.id].finite_smoke)===JSON.stringify(op.expected_value),'expected array mismatch');
 assert(op.expected_value.length===op.replacement_value.length,'finite obligation removed');
 for(let i=0;i<op.replacement_value.length;i++){
  const row=op.replacement_value[i],old=op.expected_value[i];
  for(const[k,v]of Object.entries(old))assert(k==='check'?row.original_check===v:JSON.stringify(row[k])===JSON.stringify(v),'original obligation metadata lost '+op.id+' '+k);
  assert(source.includes(row.asserts),'assertion excerpt not exact source substring');
  const outcome=checks[row.check](row),bad=[{...row,fixture:'unsupported'},{...row,parameters:{n:1}},{...row,epsilon:3},{...row,check:'unsupported'}].map(x=>checks[row.check](x));
  assert(outcome.ok,'callback failed '+row.check+': '+outcome.summary);assert(bad.every(x=>!x.ok),'unsupported selector accepted');
  outcomes.push({id:op.id,check:row.check,...outcome,invalid_selector_rejections:true});
 }
 guards.push({id:op.id,source_raw_exact:true,contract_raw_exact:true,expected_array_exact:true,original_row_metadata_preserved:true,exact_source_assertions:true});
}
for(const path of new Set(packet.operations.map(o=>o.path))){
 const before=JSON.parse(read(path)),candidate=JSON.parse(read(new URL('candidates/'+path,base)));
 for(const op of packet.operations.filter(o=>o.path===path)){assert(JSON.stringify(candidate.contracts[op.id].finite_smoke)===JSON.stringify(op.replacement_value),'candidate mismatch');delete before.contracts[op.id].finite_smoke;delete candidate.contracts[op.id].finite_smoke;}
 assert(JSON.stringify(before)===JSON.stringify(candidate),'unrelated contract field changed '+path);
}
assert(outcomes.length===22&&Object.keys(checks).length===22,'callback inventory mismatch');
writeFileSync(new URL('focused-callback-results.json',base),JSON.stringify({version:1,run:packet.run,kind:'focused-staged-callback-checks',checks:22,passed:22,failed:[],invalid_selector_rejections:true,negative_tests:88,outcomes},null,2)+'\n');
writeFileSync(new URL('preservation-and-current-guards.json',base),JSON.stringify({version:1,proposal_only:true,array_fields:20,original_finite_obligations:22,unique_operations:true,candidate_files:3,all_unrelated_contract_fields_preserved:true,no_live_mutations:true,no_gate_or_global_selftest:true,guards},null,2)+'\n');
console.log(JSON.stringify({focused_passed:outcomes.length,unsupported_selector_tests_rejected:88,source_contract_guards_exact:guards.length,unrelated_fields_preserved:true}));

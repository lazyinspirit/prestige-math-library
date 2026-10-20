import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {calibrationMLChecks} from './finite-smoke-calibration-ml.mjs';
const base=fileURLToPath(new URL('.',import.meta.url));
const read=p=>fs.readFileSync(p,'utf8'),sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const proposal=JSON.parse(read(base+'field-cas.json')),rows=JSON.parse(read(base+'focused-rows.json'));
assert.equal(sha(proposal.module.path),proposal.module.sha256);
const positive=[],negative=[],guards=[];
for(const op of proposal.operations){
 const current=JSON.parse(read(op.path));assert.deepEqual(current.contracts[op.contract_key].finite_smoke,op.before);
 assert.equal(sha(op.source_guard.path),op.source_guard.raw_sha256);
 assert.equal(op.before.length,op.after.length);
 const nativeRaw=read(op.source_guard.path);
 for(let i=0;i<op.after.length;i++){
  const before=op.before[i],after=op.after[i];assert(nativeRaw.includes(after.asserts));
  for(const [k,v]of Object.entries(before))if(!['check','parameters','asserts'].includes(k)&&!(op.contract_key==='thm-posterior-forecast-minimizes-scoring-risk'&&k==='result'))assert.deepEqual(after[k],v);
  if(op.contract_key==='thm-posterior-forecast-minimizes-scoring-risk')assert.equal(after.historical_result,before.result);
 }
 guards.push({id:op.contract_key,source_sha256:op.source_guard.raw_sha256,exact_field_guard:true,assertion_substrings:true,prior_obligations_preserved:true});
}
for(const row of rows){const outcome=calibrationMLChecks[row.smoke.check](row.smoke);assert.equal(outcome.ok,true,`${row.id}[${row.index}]:${outcome.summary}`);assert.equal(typeof outcome.summary,'string');positive.push({id:row.id,index:row.index,check:row.smoke.check,fixture:row.smoke.parameters.fixture,...outcome})}
for(const [name,fn]of Object.entries(calibrationMLChecks)){
 const good=rows.find(r=>r.smoke.check===name).smoke;
 for(const [label,bad]of Object.entries({null:null,array:[],missing:{},wrong_check:{...good,check:'unsupported-check'},missing_parameters:{...good,parameters:undefined},unknown_fixture:{...good,parameters:{fixture:'unsupported-fixture'}},extra_parameter:{...good,parameters:{...good.parameters,unsupported:true}},array_parameters:{...good,parameters:[]},top_level_fixture:{...good,fixture:good.parameters.fixture},unknown_top_level:{...good,unknown_parameter:NaN},horizon:{...good,horizon:999},nonenumerable_top:Object.defineProperty({...good},'hidden',{value:1}),symbol_top:{...good,[Symbol('bad')]:1},nonenumerable_parameter:{...good,parameters:Object.defineProperty({...good.parameters},'hidden',{value:1})},symbol_parameter:{...good,parameters:{...good.parameters,[Symbol('bad')]:1}}})){
  const v=fn(bad);assert.equal(v.ok,false,`${name} accepted ${label}`);negative.push({check:name,selector:label,...v});
 }
}
assert.equal(rows.length,38);assert.equal(proposal.operations.length,23);
const report={kind:'focused-staged-callback-check-only',module_sha256:sha(proposal.module.path),positive_count:positive.length,rejected_unsupported_count:negative.length,source_field_guards:guards,positive,negative,ok:true,limitations:'These are bounded fixed model checks. No general proof, production registry execution, gate, readiness, or source modification is asserted.'};
fs.writeFileSync(base+'focused-results.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({ok:true,positive:positive.length,unsupported_rejected:negative.length,guarded_items:guards.length,registered_families:Object.keys(calibrationMLChecks).length}));

import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base=fileURLToPath(new URL('.',import.meta.url)),sha=v=>crypto.createHash('sha256').update(v).digest('hex'),packets=['field-cas-23-24-25.json','field-cas-26.json'],results=[];
for(const filename of packets){
 const p=JSON.parse(fs.readFileSync(base+filename)),cache=new Map();
 for(const op of p.operations){
  const current=JSON.parse(fs.readFileSync(op.path));const row=current.contracts[op.contract_key].boundaries[op.index];assert.equal(row.case,op.case);assert.deepEqual(row,op.before);
  const source=fs.readFileSync(op.source_guard.path);assert.equal(sha(source),op.source_guard.raw_sha256);assert.equal(itemHashGuard(source.toString()),op.source_guard.item_guard_sha256);
  for(const [key,value]of Object.entries(op.before))if(!['reason','status','reviewed','template_review'].includes(key))assert.deepEqual(op.after[key],value);
  if(op.after.template_review){const v=op.after.template_review;assert.equal(v.item_sha256,itemHashGuard(source.toString()));assert.equal(v.row_sha256,sha(JSON.stringify({case:op.after.case,status:op.after.status,text:op.after.reason??op.after.evidence??''})));assert(v.reason.length>=40);}
  if(!cache.has(op.path))cache.set(op.path,structuredClone(current));cache.get(op.path).contracts[op.contract_key].boundaries[op.index]=op.after;
 }
 for(const [path,expected]of cache){
  const before=JSON.parse(fs.readFileSync(path)),staged=JSON.parse(fs.readFileSync(base+'proposed-contracts/'+path.split('/').at(-1)));assert.deepEqual(staged,expected);
  for(const id of Object.keys(before.contracts))assert.deepEqual(before.contracts[id].finite_smoke,staged.contracts[id].finite_smoke);
 }
 results.push({packet:filename,packet_sha256:sha(fs.readFileSync(base+filename)),items:p.source_read_scope,operations:p.operations.length,exact_current_row_guards:true,source_guards:true,template_review_bindings:true,unknown_keys_preserved:true,finite_smoke_all_contracts_preserved:true});
}
const report={kind:'staged-boundary-field-CAS-preservation-check-only',ok:true,results,actual_sources_changed:false,actual_contracts_changed:false,native_gate_execution:false};fs.writeFileSync(base+'focused-preservation-results.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));

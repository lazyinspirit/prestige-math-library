#!/usr/bin/env node
// PREPARED ONLY. Root reviews and runs; preparation agent must not execute.
// Usage: node .../root-integrate.mjs --seal FILE --seal-sha SHA --apply-root-reviewed
import {readFileSync as read,writeFileSync as write,existsSync as exists,lstatSync as stat,mkdirSync as mkdir,renameSync as rename,chmodSync as chmod} from 'node:fs';
import {resolve,dirname,join,relative} from 'node:path';
import {createHash,randomBytes} from 'node:crypto';
import {isDeepStrictEqual as equal} from 'node:util';
const argv=process.argv.slice(2),opt=k=>argv[argv.indexOf(k)+1],sha=b=>createHash('sha256').update(b).digest('hex');
if(!argv.includes('--apply-root-reviewed')||!argv.includes('--seal')||!argv.includes('--seal-sha'))throw Error('Root-reviewed execution requires --seal FILE --seal-sha SHA --apply-root-reviewed. No default action.');
const root=process.cwd(),sealFile=resolve(opt('--seal')),sealBytes=read(sealFile);
if(sha(sealBytes)!==opt('--seal-sha'))throw Error('Seal hash mismatch');
const seal=JSON.parse(sealBytes),expectedRun='machine-learning-all-101-2026-10-19';
if(seal.version!==1||seal.run!==expectedRun||seal.kind!=='root-only-page-closure-integration-seal')throw Error('Invalid integration seal');
const fail=m=>{throw Error(m)},inside=p=>{const f=resolve(root,p);if(relative(root,f).startsWith('..')||f===root)fail('Outside repository: '+p);return f};
const regular=p=>{const f=inside(p);if(!stat(f).isFile()||stat(f).isSymbolicLink())fail('Not regular: '+p);return f};
const hashFile=p=>sha(read(regular(p))),json=p=>JSON.parse(read(regular(p),'utf8'));
if(hashFile(relative(root,sealFile))!==opt('--seal-sha'))fail('Seal must be inside repository');
if(hashFile(seal.report.path)!==seal.report.sha256)fail('Accepted report drift');
if(sha(read(new URL(import.meta.url)))!==seal.script_sha256)fail('Reviewed script drift');
for(const guard of seal.artifact_guards)if(hashFile(guard.path)!==guard.sha256)fail('Staged artifact drift: '+guard.path);
// Historical readiness records are intentionally not mutation/context guards:
// the root already refreshed them. Only immutable content context is guarded.
for(const guard of seal.content_context_guards)if(hashFile(guard.path)!==guard.sha256)fail('Content context drift: '+guard.path);
const prepared=new Map();
function target(path){
 if(prepared.has(path))return prepared.get(path);
 const original=read(regular(path)),value=JSON.parse(original.toString('utf8'));
 const row={path,original,before_sha256:sha(original),value,mode:stat(inside(path)).mode,operations:[]};prepared.set(path,row);return row;
}
for(const op of seal.row_operations){
 const row=target(op.path);
 if(op.operation==='replace-array-row'){
  if(!Array.isArray(row.value))fail('Expected array: '+op.path);
  const hits=row.value.map((v,i)=>Object.entries(op.match).every(([k,val])=>equal(v?.[k],val))?i:-1).filter(i=>i>=0);
  if(hits.length!==1)fail('Row identity is not unique: '+op.path);
  const index=hits[0];if(!equal(row.value[index],op.before))fail('Owned row guard mismatch: '+op.path+' '+JSON.stringify(op.match));
  row.value[index]={...row.value[index],...op.after};
 }else if(op.operation==='set-property-if-absent'){
  if(!row.value||typeof row.value!=='object'||Array.isArray(row.value)||Object.hasOwn(row.value,op.property))fail('Property already present/invalid: '+op.path+' '+op.property);
  row.value[op.property]=op.after;
 }else fail('Unknown row operation');
 row.operations.push(op);
}
const contract=target(seal.contract_key.path);
if(!equal(contract.value.contracts?.[seal.contract_key.key],seal.contract_key.before))fail('High-probability contract-key guard mismatch');
contract.value.contracts[seal.contract_key.key]=seal.contract_key.after;
contract.operations.push({operation:'replace-exact-contract-key',key:seal.contract_key.key});
// Retain every non-owned row/property/contract entry in its current form.
for(const row of prepared.values())row.next=Buffer.from(JSON.stringify(row.value,null,2)+'\n');
const source=seal.source_replacement,original=read(regular(source.path)),next=read(regular(source.proposed));
if(sha(original)!==source.before_sha256||sha(next)!==source.after_sha256)fail('High-probability source guard mismatch');
if(prepared.has(source.path))fail('Duplicate source target');
prepared.set(source.path,{path:source.path,original,before_sha256:sha(original),next,mode:stat(inside(source.path)).mode,operations:[{operation:'exact-source-replacement'}]});
for(const op of seal.new_addenda){
 if(exists(inside(op.path)))fail('New addendum already exists: '+op.path);
 const next=read(regular(op.proposed));if(sha(next)!==op.sha256)fail('Addendum proposal drift: '+op.path);
 if(prepared.has(op.path))fail('Duplicate new target');
 prepared.set(op.path,{path:op.path,original:null,before_sha256:null,next,mode:0o100644,operations:[{operation:'create-separate-addendum'}]});
}
if(seal.row_operations.length!==30||seal.new_addenda.length!==7)fail('Wrong bounded integration scope');
const archive=inside(seal.archive_directory);if(exists(archive))fail('Non-overwriting archive already exists');
// ALL report, staged-artifact, source, row/key, new-file and content guards have
// passed before the first archive/write. Bind exact current foreign residuals.
const inventory=[...prepared.values()].map(row=>({path:row.path,before_sha256:row.before_sha256,after_sha256:sha(row.next),operations:row.operations}));
const context={run:expectedRun,seal_file:relative(root,sealFile),seal_sha256:sha(sealBytes),report:seal.report,script_sha256:seal.script_sha256,prepared_at:new Date().toISOString(),targets:inventory,canonical_plan_mutated:false,readiness_mutated:false,native_history_mutated:false};
mkdir(archive,{recursive:true});mkdir(join(archive,'before'));
for(const row of prepared.values())if(row.original!==null){const out=join(archive,'before',row.path);mkdir(dirname(out),{recursive:true});write(out,row.original,{flag:'wx'});if(sha(read(out))!==row.before_sha256)fail('Archive failed');}
write(join(archive,'prepared.json'),JSON.stringify(context,null,2)+'\n',{flag:'wx'});
// Refuse drift after archiving and before any live mutation.
for(const row of prepared.values())if(row.original===null?exists(inside(row.path)):hashFile(row.path)!==row.before_sha256)fail('Target changed after full preflight: '+row.path);
const applied=[];let success=false;
try{
 for(const row of prepared.values()){
  if(row.original===null?exists(inside(row.path)):hashFile(row.path)!==row.before_sha256)fail('Late target race: '+row.path);
  const dest=inside(row.path),temp=dest+'.page-closure-'+randomBytes(8).toString('hex');
  write(temp,row.next,{flag:'wx'});chmod(temp,row.mode&0o777);rename(temp,dest);
  if(hashFile(row.path)!==sha(row.next))fail('Post-write hash mismatch: '+row.path);
  applied.push(row.path);
 }
 success=true;
}finally{
 write(join(archive,'result.json'),JSON.stringify({...context,completed_at:new Date().toISOString(),status:success?'integrated-root-owned-recertification-still-owed':'partial-failure-no-automatic-rollback',applied,actual_readiness_writes:false,gates_attempted:false},null,2)+'\n',{flag:'wx'});
}
console.log(JSON.stringify({status:'integrated',archive:relative(root,archive),targets:applied.length,row_operations:30,new_addenda:7,source_replacements:1,contract_keys:1,readiness_written:false,gates_attempted:false}));

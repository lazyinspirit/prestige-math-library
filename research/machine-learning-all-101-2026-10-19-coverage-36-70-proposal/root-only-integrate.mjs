#!/usr/bin/env node
// Prepared only; delegated owner must not execute. Coverage metadata only.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {prepareCoverageCAS} from './cas-core.mjs';
const base=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(base,'../..');
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
if(process.argv.length!==3||process.argv[2]!=='--apply-reviewed-root-only')throw Error('Root-only integration requires --apply-reviewed-root-only. Do not run during proposal preparation.');
const core=path.join(base,'cas-core.mjs'),patchPath=path.join(base,'owned-field-cas.json');
if(sha(fs.readFileSync(core))!=='9485a6ea8914b633e81071bbad1fe79866687b31e01ba6d0f5cdac6409f6034c')throw Error('CAS core changed');
if(sha(fs.readFileSync(patchPath))!=='b9cec985947cfac56fdfb87e732b5988a05f71bdefc73789d75caa4cb7b8cbd4')throw Error('CAS patch changed');
const patch=JSON.parse(fs.readFileSync(patchPath,'utf8')),prepared=[];
for(const file of patch.files){
  if(file.batch<36||file.batch>70||!/^research\/machine-learning-all-101-2026-10-19-batch-\d+\.coverage\.json$/.test(file.target))throw Error('Foreign target');
  const destination=path.resolve(root,file.target),before=fs.readFileSync(destination),doc=JSON.parse(before);
  const after=Buffer.from(JSON.stringify(prepareCoverageCAS(doc,file.operations),null,2)+'\n');
  prepared.push({target:file.target,destination,before,after,before_sha256:sha(before),after_sha256:sha(after)});
}
// All owned fields compare against their recorded preimages before any archive/write.
// Current fetch/recovery/foreign fields are read and retained, never replaced by stale full snapshots.
for(const file of prepared)if(sha(fs.readFileSync(file.destination))!==file.before_sha256)throw Error('Concurrent document edit; retry after serialization: '+file.target);
const execution=path.join(base,'root-execution-record');if(fs.existsSync(execution))throw Error('Single-use execution record already exists');fs.mkdirSync(execution);
const rows=prepared.map(({target,before_sha256,after_sha256})=>({target,before_sha256,after_sha256}));
for(const file of prepared){const archive=path.join(execution,'before',file.target);fs.mkdirSync(path.dirname(archive),{recursive:true});fs.writeFileSync(archive,file.before,{flag:'wx'});}
fs.writeFileSync(path.join(execution,'intent.json'),JSON.stringify({run:patch.run,scope:patch.scope,files:rows},null,2)+'\n',{flag:'wx'});
for(const file of prepared)fs.writeFileSync(file.destination,file.after);
for(const file of prepared)if(sha(fs.readFileSync(file.destination))!==file.after_sha256)throw Error('Postwrite mismatch: '+file.target);
fs.writeFileSync(path.join(execution,'completed.json'),JSON.stringify({run:patch.run,files:rows,owned_field_CAS:true,protected_fetch_recovery_fields_preserved:true,math_cycles_reopened:false,readiness_or_gate_credit:false},null,2)+'\n',{flag:'wx'});
console.log('Integrated43 metadata CAS operations in7coverage files. Existing fetch/recovery edits preserved. Fetch owner may now fill5new companion-row receipts; actual coverage checks remain owed.');

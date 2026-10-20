#!/usr/bin/env node
// Prepared for root only; repair owner has not executed this script.
// Per-file atomic replacement with full preflight and rollback; root serializes all source writers.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const base=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(base,'../..');
const sha=x=>createHash('sha256').update(x).digest('hex');
const split=raw=>{const m=raw.toString('utf8').match(/^(---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$))([\s\S]*)$/);if(!m)throw Error('Missing frontmatter');return {prefix:m[1],body:m[2]};};
if(process.argv.length!==3||process.argv[2]!=='--apply-reviewed-root-only')throw Error('Root-only integration requires --apply-reviewed-root-only. Do not run during delegated preparation.');
const manifestPath=path.join(base,'body-cas-manifest.json');
if(sha(fs.readFileSync(manifestPath))!=='2b69a8ada10a56e10e1b2e22742ae34d1cd904a0f4b1e540508022b62f864905')throw Error('Manifest changed');
const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8')),prepared=[];
for(const row of manifest.files){
  if(!['30','33','42','56'].includes(row.batch)||row.target!==`items/${row.id}.md`)throw Error('Foreign source target');
  const destination=path.join(root,row.target),before=fs.readFileSync(destination),current=split(before),proposedRaw=fs.readFileSync(path.join(root,row.proposed)),proposed=split(proposedRaw);
  if(sha(proposedRaw)!==row.proposed_raw_sha256||sha(proposed.body)!==row.proposed_body_sha256)throw Error('Proposed source changed: '+row.id);
  if(sha(current.body)!==row.before_body_sha256)throw Error('Current body CAS failed: '+row.id);
  if(current.prefix.split(/\r?\n/).find(line=>line.startsWith('id:'))?.slice(3).trim()!==row.id)throw Error('Current source identity changed: '+row.id);
  // Keep the CURRENT frontmatter prefix byte-for-byte, including orthogonal URL metadata edits.
  const after=Buffer.from(current.prefix+proposed.body);
  prepared.push({...row,destination,before,after,current_prefix:current.prefix,before_full_sha256:sha(before),after_full_sha256:sha(after)});
}
// Validate all nine bodies before touching actual files. Serialize with other source writers.
for(const row of prepared)if(sha(fs.readFileSync(row.destination))!==row.before_full_sha256)throw Error('Concurrent edit during preflight: '+row.id);
const record=path.join(base,'root-execution-record');if(fs.existsSync(record))throw Error('Single-use execution record exists');fs.mkdirSync(record);
const summary=prepared.map(({id,target,before_full_sha256,after_full_sha256,before_body_sha256,proposed_body_sha256})=>({id,target,before_full_sha256,after_full_sha256,before_body_sha256,proposed_body_sha256}));
for(const row of prepared){const archive=path.join(record,'before',row.target);fs.mkdirSync(path.dirname(archive),{recursive:true});fs.writeFileSync(archive,row.before,{flag:'wx'});row.temporary=path.join(path.dirname(row.destination),'.'+row.id+'.statement-format-'+process.pid+'.tmp');fs.writeFileSync(row.temporary,row.after,{flag:'wx'});}
fs.writeFileSync(path.join(record,'intent.json'),JSON.stringify({run:manifest.run,scope:manifest.scope,body_only_CAS:true,files:summary},null,2)+'\n',{flag:'wx'});
const committed=[];
try{
  for(const row of prepared){if(sha(fs.readFileSync(row.destination))!==row.before_full_sha256)throw Error('Concurrent edit before atomic replacement: '+row.id);fs.renameSync(row.temporary,row.destination);committed.push(row);}
  for(const row of prepared){const current=fs.readFileSync(row.destination);if(sha(current)!==row.after_full_sha256||split(current).prefix!==row.current_prefix)throw Error('Postwrite body/frontmatter mismatch: '+row.id);}
}catch(error){
  for(const row of committed.reverse()){const restore=row.temporary+'.rollback';fs.writeFileSync(restore,row.before,{flag:'wx'});fs.renameSync(restore,row.destination);}
  for(const row of prepared)if(fs.existsSync(row.temporary))fs.unlinkSync(row.temporary);
  fs.writeFileSync(path.join(record,'rolled-back.json'),JSON.stringify({reason:String(error),files:summary},null,2)+'\n',{flag:'wx'});throw error;
}
fs.writeFileSync(path.join(record,'completed.json'),JSON.stringify({run:manifest.run,files:summary,current_frontmatter_preserved:true,mathematical_sections_facts_proofs_unchanged:true,contract_operations:0,native_gate_or_readiness_credit:false},null,2)+'\n',{flag:'wx'});
console.log('Integrated nine guarded formatting-only bodies; current frontmatter retained. Root actual native checks and recertification remain owed.');

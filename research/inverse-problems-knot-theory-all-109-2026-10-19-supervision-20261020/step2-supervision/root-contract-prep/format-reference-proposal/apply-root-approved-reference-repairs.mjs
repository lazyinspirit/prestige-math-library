#!/usr/bin/env node
// ROOT ONLY; native writers must have drained. No workflow or metadata controls.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const repo=path.resolve(here,'../../../../..');
const proposal=JSON.parse(fs.readFileSync(path.join(here,'proposal.json'),'utf8'));
const entries=proposal.files.map(e=>({...e,target:path.resolve(repo,e.canonical),before:fs.readFileSync(path.resolve(repo,e.preimage),'utf8'),after:fs.readFileSync(path.resolve(repo,e.proposed_after),'utf8')}));
if(entries.length!==10)throw Error('Exact ten-file scope required.');
if(entries.every(e=>fs.readFileSync(e.target,'utf8')===e.after)){console.log('Exact packet already applied; no actions.');process.exit(0);}
const drift=entries.filter(e=>fs.readFileSync(e.target,'utf8')!==e.before);
if(drift.length)throw Error('Preimage drift; no writes; root must reconcile active native changes: '+drift.map(e=>e.canonical).join(', '));
if(!process.argv.includes('--apply-root-approved')){console.log(JSON.stringify({status:'preview-only-no-writes',files:entries.map(e=>e.canonical),native_writers_drain_confirmation_required:true}));process.exit(0);}
if(!process.argv.includes('--native-writers-drained'))throw Error('Root must explicitly confirm native writers drained; no writes.');
const archive=path.join(here,'root-before-application');if(fs.existsSync(archive))throw Error('Archive exists; refusing overwrite.');fs.mkdirSync(archive);
for(const e of entries)fs.writeFileSync(path.join(archive,path.basename(e.target)),e.before,{flag:'wx'});
const changed=[];
try{for(const e of entries){const tmp=e.target+'.root-reference-format.tmp';fs.writeFileSync(tmp,e.after,{flag:'wx'});fs.renameSync(tmp,e.target);changed.push(e);}}
catch(err){for(const e of changed)fs.writeFileSync(e.target,e.before);throw err;}
fs.writeFileSync(path.join(here,'root-application-receipt.json'),JSON.stringify({at:new Date().toISOString(),files:entries.map(e=>e.canonical),archive:path.relative(repo,archive),scope:'Exact root-approved reference syntax and proof-block ordering only. No claim/source/dependency/state/counter/hash/metadata/gate change. Root owns contract row-mirror refresh.'},null,2)+'\n',{flag:'wx'});
console.log('Applied exact reference packet with archived preimages; root owns separate contract row refresh.');

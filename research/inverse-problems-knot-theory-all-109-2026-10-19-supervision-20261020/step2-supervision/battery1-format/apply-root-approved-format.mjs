#!/usr/bin/env node
// ROOT ONLY: literal formatting packet. No gates, hashes, state or stamps.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const repo=path.resolve(here,'../../../..');
const plan=JSON.parse(fs.readFileSync(path.join(here,'guarded-format-plan.json'),'utf8'));
const skipKT05=process.argv.includes('--leave-kt05-for-root-merge');
const entries=plan.files.filter(e=>!skipKT05||e.id!=='cex-knot-kt-05-boundary-case').map(e=>({...e,target:path.resolve(repo,e.canonical),before:fs.readFileSync(path.resolve(repo,e.preimage),'utf8'),after:fs.readFileSync(path.resolve(repo,e.proposed_after),'utf8')}));
if(entries.length!==(skipKT05?54:55))throw Error('Exact55-file scope required, or54with explicitKT05rootmerge.');
if(entries.every(e=>fs.readFileSync(e.target,'utf8')===e.after)){console.log('Exact packet already applied; no actions.');process.exit(0);}
const drift=entries.filter(e=>fs.readFileSync(e.target,'utf8')!==e.before);if(drift.length)throw Error('Preimage drift; no writes: '+drift.map(e=>e.canonical).join(', '));
if(!process.argv.includes('--apply-root-approved')){console.log(JSON.stringify({status:'preview-only-no-writes',files:entries.map(e=>e.canonical),kt05_separate_merge:skipKT05}));process.exit(0);}
const archive=path.join(here,'root-before-application');if(fs.existsSync(archive))throw Error('Archive exists; refusing overwrite.');fs.mkdirSync(archive);
for(const e of entries)fs.writeFileSync(path.join(archive,path.basename(e.target)),e.before,{flag:'wx'});
const changed=[];try{for(const e of entries){const tmp=e.target+'.root-battery1-format.tmp';fs.writeFileSync(tmp,e.after,{flag:'wx'});fs.renameSync(tmp,e.target);changed.push(e);}}catch(err){for(const e of changed)fs.writeFileSync(e.target,e.before);throw err;}
fs.writeFileSync(path.join(here,'root-application-receipt.json'),JSON.stringify({at:new Date().toISOString(),files:entries.map(e=>e.canonical),archive:path.relative(repo,archive),kt05_separate_merge:skipKT05,scope:'Root-approved literal source formatting and local row mirrors only. No mathematical/source/dependency change; no metadata/hash/gate/state/stamp/counter/readiness operation.'},null,2)+'\n',{flag:'wx'});
console.log('Applied exact root-approved source-format packet; preimages archived.');

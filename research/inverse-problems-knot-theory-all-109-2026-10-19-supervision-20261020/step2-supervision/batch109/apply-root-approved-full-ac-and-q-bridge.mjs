#!/usr/bin/env node
// ROOT ONLY: exact five-file source/axiom reconciliation. No workflow controls.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const repo=path.resolve(here,'../../../..');
const plan=JSON.parse(fs.readFileSync(path.join(here,'guarded-full-ac-and-q-bridge-plan.json'),'utf8'));
const entries=plan.files.map(e=>({...e,target:path.resolve(repo,e.canonical),before:fs.readFileSync(path.resolve(repo,e.preimage),'utf8'),after:fs.readFileSync(path.resolve(repo,e.proposed_after),'utf8')}));
if(entries.length!==5)throw Error('Exact five-file scope required.');
if(entries.every(e=>fs.readFileSync(e.target,'utf8')===e.after)){console.log('Already applied exactly; no actions.');process.exit(0);}
const drift=entries.filter(e=>fs.readFileSync(e.target,'utf8')!==e.before);if(drift.length)throw Error('Canonical preimage drift; no writes: '+drift.map(e=>e.canonical).join(', '));
if(!process.argv.includes('--apply-root-approved')){console.log(JSON.stringify({status:'preview-only-no-writes',files:entries.map(e=>e.canonical),root_final_required:true}));process.exit(0);}
if(!process.argv.includes('--full-ac-scope-adopted'))throw Error('Root fullAC scope-adoption token required; no writes.');
const archive=path.join(here,'root-before-full-ac-application');if(fs.existsSync(archive))throw Error('Archive exists; refusing overwrite.');fs.mkdirSync(archive);
for(const e of entries)fs.writeFileSync(path.join(archive,path.basename(e.target)),e.before,{flag:'wx'});
const changed=[];try{for(const e of entries){const tmp=e.target+'.batch109-owner.tmp';fs.writeFileSync(tmp,e.after,{flag:'wx'});fs.renameSync(tmp,e.target);changed.push(e);}}catch(err){for(const e of changed)fs.writeFileSync(e.target,e.before);throw err;}
fs.writeFileSync(path.join(here,'root-full-ac-application-receipt.json'),JSON.stringify({at:new Date().toISOString(),files:entries.map(e=>e.canonical),archive:path.relative(repo,archive),scope:'Root-adopted classical fullAC scope and precise terminal input, direct consumer reconciliation and separate localQ bridge. No weaker-choice source theorem certified. No workflow state/history/counter/hash/metadata/gate operation.'},null,2)+'\n',{flag:'wx'});
console.log('Applied exact root-approved five-file packet; original preimages archived.');

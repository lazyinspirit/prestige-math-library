#!/usr/bin/env node
// ROOT ONLY: two test files; production tools and canonical fixtures untouched.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const repo=path.resolve(here,'../../../..');
const plan=JSON.parse(fs.readFileSync(path.join(here,'guarded-test-addition-plan.json'),'utf8'));
const entries=plan.files.map(e=>({...e,target:path.join(repo,e.canonical),before:e.preimage==='absent'?null:fs.readFileSync(path.join(repo,e.preimage),'utf8'),after:fs.readFileSync(path.join(repo,e.proposed_after),'utf8')}));
if(entries.every(e=>fs.existsSync(e.target)&&fs.readFileSync(e.target,'utf8')===e.after)){console.log('Exact test proposal already applied; no actions.');process.exit(0);}
for(const e of entries){if(e.before===null?fs.existsSync(e.target):!fs.existsSync(e.target)||fs.readFileSync(e.target,'utf8')!==e.before)throw Error('Exact preimage/absence guard failed: '+e.canonical);}
if(!process.argv.includes('--apply-root-approved')){console.log(JSON.stringify({status:'preview-only-no-writes',files:entries.map(e=>e.canonical)}));process.exit(0);}
const archive=path.join(here,'root-before-application');if(fs.existsSync(archive))throw Error('Archive exists; refusing overwrite.');fs.mkdirSync(archive);
for(const e of entries)if(e.before!==null)fs.writeFileSync(path.join(archive,path.basename(e.target)),e.before,{flag:'wx'});
const changed=[];try{for(const e of entries){const tmp=e.target+'.contract-test-proposal.tmp';fs.writeFileSync(tmp,e.after,{flag:'wx'});fs.renameSync(tmp,e.target);changed.push(e);}}catch(err){for(const e of changed){if(e.before===null)fs.unlinkSync(e.target);else fs.writeFileSync(e.target,e.before);}throw err;}
fs.writeFileSync(path.join(here,'root-test-application.json'),JSON.stringify({at:new Date().toISOString(),files:entries.map(e=>e.canonical),scope:'Regression test additions only; no production tool or canonical fixture/state/gate changes.'},null,2)+'\n',{flag:'wx'});
console.log('Applied exact root-approved two-file test proposal; no tests/gates automatically run.');

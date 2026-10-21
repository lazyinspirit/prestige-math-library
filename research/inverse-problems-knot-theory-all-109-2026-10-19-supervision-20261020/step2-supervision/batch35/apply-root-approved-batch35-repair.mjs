#!/usr/bin/env node
// ROOT ONLY. No hashes, validators, gates or native eligibility controls.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const repo=path.resolve(here,'../../../..');
const phase='batch35';
const plan=JSON.parse(fs.readFileSync(path.join(here,'guarded-repair-plan.json'),'utf8'));
const entries=plan.files.filter(e=>e.phase===phase).map(e=>({...e,target:path.resolve(repo,e.canonical),before:fs.readFileSync(path.resolve(repo,e.expected_preimage),'utf8'),after:fs.readFileSync(path.resolve(repo,e.proposed_after),'utf8')}));
if(entries.length!==7)throw Error('Wrong exact phase scope');
if(entries.every(e=>fs.readFileSync(e.target,'utf8')===e.after)){console.log('Already applied exactly; no actions.');process.exit(0);}
const drift=entries.filter(e=>fs.readFileSync(e.target,'utf8')!==e.before);
if(drift.length)throw Error('Exact preimage drift; no writes: '+drift.map(e=>e.canonical).join(','));
if(!process.argv.includes('--apply-root-approved')){console.log(JSON.stringify({status:'preview-only-no-writes',phase,files:entries.map(e=>e.canonical),benchmark_coordination_required:phase==='benchmark51'}));process.exit(0);}
if(phase==='benchmark51'&&!process.argv.includes('--batch51-write-coordinated'))throw Error('Root batch51 write coordination token required; no writes/controls.');
const archive=path.join(here,'root-before-'+phase);
if(fs.existsSync(archive))throw Error('Archive exists; refusing overwrite');
fs.mkdirSync(archive);
for(const e of entries)fs.writeFileSync(path.join(archive,path.basename(e.target)),e.before,{flag:'wx'});
const changed=[];
try{for(const e of entries){const tmp=e.target+'.batch35-owner.tmp';fs.writeFileSync(tmp,e.after,{flag:'wx'});fs.renameSync(tmp,e.target);changed.push(e);}}
catch(err){for(const e of changed)fs.writeFileSync(e.target,e.before);throw err;}
fs.writeFileSync(path.join(here,'root-application-'+phase+'.json'),JSON.stringify({at:new Date().toISOString(),phase,files:entries.map(e=>e.canonical),archive:path.relative(repo,archive),scope:'Root-approved focused source repair only. No native hold cleared and no hash/readiness/validator/gate operation.',batch51_write_coordination:phase==='benchmark51'},null,2)+'\n',{flag:'wx'});
console.log('Applied root-approved '+phase+' source repair; exact preimages archived.');

#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const repo=path.resolve(here,'../../../..');
const target=path.join(repo,'items/thm-ip-closed-range-pseudoinverse-stability.md');
const before=fs.readFileSync(path.join(here,'supplier-preimage.md'),'utf8');
const after=fs.readFileSync(path.join(here,'supplier-proposed-after.md'),'utf8');
const current=fs.readFileSync(target,'utf8');
if(current===after){console.log('Already applied exactly; no actions.');process.exit(0);}
if(current!==before)throw Error('Exact preimage drift; no writes. Root must reconcile.');
if(!process.argv.includes('--apply-root-approved')){console.log('Preview only: restrict proof2.1 to k>=1; Statement/allotherproof/deps unchanged.');process.exit(0);}
const archive=path.join(here,'root-before-quantifier-repair.md');
fs.writeFileSync(archive,before,{flag:'wx'});
fs.writeFileSync(target,after);
fs.writeFileSync(path.join(here,'root-application.json'),JSON.stringify({at:new Date().toISOString(),target:path.relative(repo,target),archive:path.relative(repo,archive),change:'proof2.1 For eachk -> For eachk>=1 only',scope:'No Statement/Facts/deps changes; no hash/validator/gate/engine action.'},null,2)+'\n',{flag:'wx'});
console.log('Applied root-approved positive-index quantifier; exact preimage archived.');

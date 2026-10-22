#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const repo=path.resolve(here,'../../../..');
const target=path.join(repo,'items/lem-aspherical-pl-targets-admit-incompressible-surface-preimages.md');
const before=fs.readFileSync(path.join(here,'unused-edge-preimage.md'),'utf8');
const after=fs.readFileSync(path.join(here,process.argv.includes('--header-only')?'unused-edge-header-only-proposed.md':'unused-edge-recommended-proposed.md'),'utf8');
const current=fs.readFileSync(target,'utf8');
if(current===after){console.log('Already applied exactly; no actions.');process.exit(0);}
if(current!==before)throw Error('Exact preimage drift: no writes; root must reconcile.');
if(!process.argv.includes('--apply-root-approved')){console.log('Preview only: one unused dependency edge; recommended nonlogical F1 broken-link cleanup; no proof or Statement changes.');process.exit(0);}
const archive=path.join(here,'root-unused-edge-before.md');
fs.writeFileSync(archive,before,{flag:'wx'});
fs.writeFileSync(target,after);
fs.writeFileSync(path.join(here,'root-unused-edge-application.json'),JSON.stringify({at:new Date().toISOString(),target:path.relative(repo,target),archive:path.relative(repo,archive),scope:'Root-approved removal of authentic final-review optional unused edge; no proof or Statement change, no validator/hash/gate.',header_only:process.argv.includes('--header-only')},null,2)+'\n',{flag:'wx'});
console.log('Applied one root-approved unused-edge correction; exact preimage archived.');

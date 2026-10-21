#!/usr/bin/env node
// ROOT ONLY: exact-byte source proposal; no workflow controls or validators.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const repo=path.resolve(here,'../../../..');
const target=path.join(repo,'items/lem-framed-link-diagram-calculus.md');
const before=fs.readFileSync(path.join(here,'supplier-preimage.md'),'utf8');
const after=fs.readFileSync(path.join(here,'supplier-proposed-after.md'),'utf8');
const actual=fs.readFileSync(target,'utf8');
if(actual===after){console.log('Exact proposal already applied; no action.');process.exit(0);}
if(actual!==before)throw Error('Canonical preimage drift; no writes.');
if(!process.argv.includes('--apply-root-approved')){console.log('Preview only: one supplier relative parameterized framing lift, unchanged Statement/dependencies; no writes.');process.exit(0);}
const archive=path.join(here,'root-before-application.md');
if(fs.existsSync(archive))throw Error('Archive exists; refusing overwrite.');
fs.writeFileSync(archive,before,{flag:'wx'});
const temporary=target+'.batch84-owner.tmp';
fs.writeFileSync(temporary,after,{flag:'wx'});
fs.renameSync(temporary,target);
fs.writeFileSync(path.join(here,'root-application-receipt.json'),JSON.stringify({at:new Date().toISOString(),target:path.relative(repo,target),archive:path.relative(repo,archive),scope:'Root-approved relative parameterized framing transport only; no Statement change, native state/history/counter/metadata/hash/gate operation.'},null,2)+'\n',{flag:'wx'});
console.log('Applied exact root-approved parameterized framing lift; preimage archived.');

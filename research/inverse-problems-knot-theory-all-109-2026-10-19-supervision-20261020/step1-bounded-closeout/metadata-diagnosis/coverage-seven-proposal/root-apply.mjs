#!/usr/bin/env node
// Root-only exact metadata proposal; author has not executed this application.
import fs from'node:fs';import path from'node:path';import assert from'node:assert/strict';
const args=process.argv.slice(2),value=k=>{const i=args.indexOf(k);return i<0?undefined:args[i+1];};
assert(value('--plan')&&value('--archive-dir'));
const plan=JSON.parse(fs.readFileSync(value('--plan'),'utf8'));
assert.equal(plan.authorized_by,'/root');assert.deepEqual(plan.plans.map(p=>p.batch),[4,19,21,32,33,36,46]);
const ready=[];
for(const p of plan.plans){const after=fs.readFileSync(p.proposed_after,'utf8'),current=fs.readFileSync(p.file,'utf8');
 assert(current===p.before_text||current===after,`Changed coverage input: ${p.file}`);
 ready.push({...p,after,changed:current!==after});}
console.log(JSON.stringify({mode:args.includes('--apply')?'root-apply':'proposal-only',changes:ready.map(p=>({batch:p.batch,file:p.file,changed:p.changed,metadata:p.changes})),no_hashes_gates_readiness_or_mathreview:true},null,2));
if(!args.includes('--apply'))process.exit(0);
assert(args.includes('--battery-drained'),'Root must attest the collecting battery is drained before writes');
const archive=value('--archive-dir');fs.mkdirSync(archive,{recursive:true});
for(const p of ready){if(!p.changed)continue;const target=path.join(archive,path.basename(p.file));
 if(fs.existsSync(target))assert.equal(fs.readFileSync(target,'utf8'),p.before_text,'Do not overwrite prior source history');
 else fs.writeFileSync(target,p.before_text,{flag:'wx'});
 assert.equal(fs.readFileSync(p.file,'utf8'),p.before_text,'Concurrent coverage mutation');
 const temp=p.file+`.root-coverage-${process.pid}.tmp`;fs.writeFileSync(temp,p.after,{flag:'wx'});fs.renameSync(temp,p.file);
}

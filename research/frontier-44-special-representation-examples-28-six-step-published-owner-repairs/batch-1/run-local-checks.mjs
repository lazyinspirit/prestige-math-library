import {readFileSync,writeFileSync,copyFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base='research/frontier-44-special-representation-examples-28-six-step-published-owner-repairs/batch-1';
const ids=['rem-real-exponents-deferred','fs-rational-power-of-negative-base','lem-power-monotone'];
const evidence={recorded_at:new Date().toISOString(),items:{},batch_checks:[]};
function check(args,paths){
 const checked_at=new Date().toISOString();
 const result=spawnSync('node',args,{encoding:'utf8',maxBuffer:16*1024*1024});
 const hashes=Object.fromEntries(paths.map(p=>[p,itemHashGuard(readFileSync(p,'utf8'))]));
 const row={command:'node '+args.join(' '),output:result.stdout+result.stderr,exit_code:result.status,checked_at,hashes};
 console.log(JSON.stringify(row));
 if(result.status!==0) throw new Error('Check failed');
 return row;
}
for (const id of ids){
 const path='items/'+id+'.md';
 const archive=base+'/before/'+id+'.pre-reflow.md';
 if(existsSync(archive)) throw new Error('Pre-reflow archive already exists');
 copyFileSync(path,archive);
 const preReflowRaw=createHash('sha256').update(readFileSync(archive)).digest('hex');
 const reflow=check(['tools/tsx-run.mjs','tools/reflow.mts',path],[path]);
 const precheck=check(['tools/tsx-run.mjs','tools/precheck.mts',path,'--json'],[path]);
 const ordinaryPrecheck=id==='rem-real-exponents-deferred'?null:check(['tools/tsx-run.mjs','tools/precheck.mts',path],[path]);
 const rendercheck=check(['tools/rendercheck.mjs',path],[path]);
 const rendercheckJson=check(['tools/rendercheck.mjs',path,'--json'],[path]);
 evidence.items[id]={before_reflow_file:archive,before_reflow_raw_sha256:preReflowRaw,content_sha256:itemHashGuard(readFileSync(path,'utf8')),reflow,precheck,ordinary_precheck:ordinaryPrecheck,rendercheck,rendercheck_json:rendercheckJson};
}
evidence.batch_checks.push(check(['tools/proof-layout.mjs',...ids.map(id=>'items/'+id+'.md')],ids.map(id=>'items/'+id+'.md')));
writeFileSync(base+'/local-checks.json',JSON.stringify(evidence,null,2)+'\n');

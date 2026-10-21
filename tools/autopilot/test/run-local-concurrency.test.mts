import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {fileURLToPath} from 'node:url';
const runner=fileURLToPath(new URL('../../tsx-run.mjs',import.meta.url)),cli=fileURLToPath(new URL('../bin/autopilot.mts',import.meta.url));
function fixture(t:any,sharedCap:any=17){
 const repo=mkdtempSync(join(tmpdir(),'run-local-cap-')),stateDir=join(repo,'.autopilot','demo'),stage=join(repo,'stages.mts');t.after(()=>rmSync(repo,{recursive:true,force:true}));mkdirSync(stateDir,{recursive:true});
 // The real public doctor passes the merged CLI config into native stage units.
 // A diagnostic marker observes that value without starting an executor/worker.
 writeFileSync(stage,`export const stages=[{id:'fixture',label:'fixture',units:(ctx)=>{throw Error('CAP_OBSERVED='+ctx.config.globalConcurrency)},pattern:/^tool-/,plan:()=>[],gatesWaived:'Diagnostic-only fixture'}];\n`);
 const shared=join(repo,'autopilot.config.json'),local=join(stateDir,'config.json');writeFileSync(shared,JSON.stringify({stages:stage,...(sharedCap===undefined?{}:{globalConcurrency:sharedCap})}));
 const put=(value:any)=>writeFileSync(local,JSON.stringify(value));
 const invoke=(run='demo',scopeDir=stateDir)=>spawnSync(process.execPath,[runner,cli,'doctor','--repo',repo,'--state-dir',scopeDir,'--run',run],{encoding:'utf8',timeout:30000});
 return {repo,stateDir,stage,shared,local,put,invoke};
}
test('run-local cap overrides shared concurrency only for its exact namespace and does not rewrite configuration',t=>{
 const f=fixture(t),shared=readFileSync(f.shared,'utf8');f.put({run:'demo',stages:f.stage,globalConcurrency:4});const local=readFileSync(f.local,'utf8'),r=f.invoke();assert.match(r.stdout,/CAP_OBSERVED=4\b/);assert.doesNotMatch(r.stderr,/unsupported run-local|globalConcurrency must/);assert.equal(readFileSync(f.shared,'utf8'),shared);assert.equal(readFileSync(f.local,'utf8'),local);assert.equal(existsSync(join(f.stateDir,'state.json')),false);
 const other=f.invoke('other',join(f.repo,'.autopilot','other'));assert.match(other.stdout,/CAP_OBSERVED=17\b/);
 const foreign=f.invoke('other');assert.match(foreign.stderr,/--run does not match run-local configuration/);assert.doesNotMatch(foreign.stdout,/CAP_OBSERVED/);
});
test('absent local cap retains shared and default values',t=>{
 const f=fixture(t);assert.match(f.invoke().stdout,/CAP_OBSERVED=17\b/);f.put({run:'demo',stages:f.stage});assert.match(f.invoke().stdout,/CAP_OBSERVED=17\b/);writeFileSync(f.shared,JSON.stringify({stages:f.stage}));assert.match(f.invoke().stdout,/CAP_OBSERVED=20\b/);
});
test('local cap rejects nonnumeric, nonfinite, noninteger and nonpositive values while retaining strict key/run/stage validation',t=>{
 const f=fixture(t);for(const value of [0,-1,1.5,'4',null,true,[],{}]){f.put({run:'demo',stages:f.stage,globalConcurrency:value});const r=f.invoke();assert.notEqual(r.status,0);assert.match(r.stderr,/globalConcurrency must be a positive finite integer/);assert.doesNotMatch(r.stdout,/CAP_OBSERVED/);}
 writeFileSync(f.local,`{"run":"demo","stages":${JSON.stringify(f.stage)},"globalConcurrency":1e309}`);assert.match(f.invoke().stderr,/globalConcurrency must be a positive finite integer/);
 for(const value of [{run:'demo',stages:f.stage,globalConcurrency:4,concurrency:4},{run:'demo',globalConcurrency:4},{stages:f.stage,globalConcurrency:4}]){f.put(value);assert.match(f.invoke().stderr,/unsupported run-local configuration|needs run and stages/);}
});

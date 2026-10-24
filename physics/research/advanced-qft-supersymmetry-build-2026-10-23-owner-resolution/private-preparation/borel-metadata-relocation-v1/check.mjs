// Diagnostic subprocesses only: no native gate, receipt adoption or source write.
import {spawnSync} from 'node:child_process';
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {resolve,join} from 'node:path';
const dir=fileURLToPath(new URL('.',import.meta.url)),root=resolve(dir,'../../../..'),repo=resolve(root,'..');
const run='advanced-qft-supersymmetry-build-2026-10-23';
const sha=p=>createHash('sha256').update(readFileSync(p)).digest('hex');
const candidate=JSON.parse(readFileSync(join(dir,'PENDING-original-maintenance.json')));
const canonical=join(root,'research',`${run}-original-maintenance.json`);
if(existsSync(canonical))throw Error('Canonical authority must remain absent');
const inputs={...candidate.inputs};
for(const p of ['tools/physics-support/physics-check.mjs','tools/physics-support/physics-imports.mjs','tools/physics-support/original-maintenance.mjs','tools/physics-support/original-rendering-maintenance.mjs','tools/physics-support/frontier-import-scope.mjs'])inputs[resolve(repo,p)]=sha(resolve(repo,p));
inputs[join(root,'research/plan-spec.json')]=sha(join(root,'research/plan-spec.json'));
inputs[join(dir,'PENDING-original-maintenance.json')]=sha(join(dir,'PENDING-original-maintenance.json'));
inputs[join(dir,'pending-receipt-preload.mjs')]=sha(join(dir,'pending-receipt-preload.mjs'));
const checks=[];
for(const name of ['actual-baseline','pending-candidate']){
 const args=[...(name==='pending-candidate'?['--import',join(dir,'pending-receipt-preload.mjs')]:[]),join(repo,'tools/physics-support/physics-check.mjs'),'--root',root,'--run',run,'--json'];
 const started=new Date().toISOString();const r=spawnSync(process.execPath,args,{cwd:root,encoding:'utf8',maxBuffer:20*1024*1024,timeout:300000});
 writeFileSync(join(dir,`${name}.stdout.json`),r.stdout??'');writeFileSync(join(dir,`${name}.stderr.txt`),r.stderr??'');
 checks.push({name,command:[process.execPath,...args],started,ended:new Date().toISOString(),exit_code:r.status,signal:r.signal,error:r.error?.message??null,stdout_sha256:sha(join(dir,`${name}.stdout.json`)),stderr_sha256:sha(join(dir,`${name}.stderr.txt`))});
 console.log(JSON.stringify(checks.at(-1)));
}
const drift=Object.entries(inputs).filter(([p,h])=>sha(resolve(root,p))!==h).map(([p])=>p);
const report={version:1,run,kind:'private-read-only-production-checker-diagnostic',status:'pending-root-adoption',native_gate:false,root_acceptance:false,canonical_authority_absent:!existsSync(canonical),scope:{batches:Object.keys(candidate.frontier).length,items:453,consumers:candidate.entries[0].consumers.length},inputs,current_input_drift:drift,checks,limitations:'Baseline uses actual canonical disk. Candidate diagnostic invokes the same production checker with only the absent receipt pathname redirected to the pending candidate in process memory; canonical receipt, sources, pins, native state and gate authority remain unchanged. This diagnostic supplies no mathematical body audit or Root adoption.'};
writeFileSync(join(dir,'checker-diagnostic.json'),JSON.stringify(report,null,2)+'\n');

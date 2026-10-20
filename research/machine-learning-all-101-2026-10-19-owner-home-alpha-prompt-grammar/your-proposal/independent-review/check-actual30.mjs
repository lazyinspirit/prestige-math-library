import {mkdtempSync,copyFileSync,symlinkSync,readFileSync,writeFileSync,rmSync} from 'node:fs';
import {resolve} from 'node:path';
import {tmpdir} from 'node:os';
import {pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
const repo=process.cwd(),packet=resolve(repo,'research/machine-learning-all-101-2026-10-19-owner-home-alpha-prompt-grammar/your-proposal');
const run='machine-learning-all-101-2026-10-19';
const scratch=mkdtempSync(resolve(tmpdir(),'independent-alpha30-'));
const hash=b=>createHash('sha256').update(b).digest('hex');
const inputs=['tools/step3-owner-home-alpha-continuations.mjs','tools/autopilot/stages/home-alpha-continuations.mts','tools/autopilot/test/home-alpha-continuations.test.mts','tools/step3-owner-home-alpha-continuations.md'];
const before=Object.fromEntries(inputs.map(p=>[p,hash(readFileSync(resolve(packet,p)))]));
try{
 copyFileSync(resolve(packet,inputs[0]),resolve(scratch,'step3-owner-home-alpha-continuations.mjs'));
 symlinkSync(resolve(repo,'tools/step3-owner-foreign-refuter-routes.mjs'),resolve(scratch,'step3-owner-foreign-refuter-routes.mjs'));
 const api=await import(pathToFileURL(resolve(scratch,'step3-owner-home-alpha-continuations.mjs')));
 const identity=api.homeAlphaReviewIdentity(repo,run,'30');
 const closure=api.homeAlphaClosureEvidence(repo,run);
 const prefix=`research/${run}-dispatch/alpha-3a-batch-30-foreign-refuter-continuation-1`;
 const stable=readFileSync(resolve(repo,prefix+'.result.json')),attempt=readFileSync(resolve(repo,prefix+'.attempt-1.result.json')),prompt=readFileSync(resolve(repo,prefix+'.attempt-1.prompt.md'));
 const entry=JSON.parse(readFileSync(resolve(repo,`research/${run}-step3-home-alpha-continuations.json`))).continuations.find(e=>e.unit==='30');
 const registryTask=readFileSync(resolve(repo,entry.task.path),'utf8'),text=prompt.toString();
 if(!stable.equals(attempt)||identity.label!==entry.label||closure[prefix+'.attempt-1.prompt.md']!==hash(prompt))throw Error('actual native identity/closure mismatch');
 if(text.includes(registryTask)||text.includes(`research/${run}-alpha-batch-30-3a-decisions.json`))throw Error('fixture no longer demonstrates the actual non-additive historical prompt');
 const after=Object.fromEntries(inputs.map(p=>[p,hash(readFileSync(resolve(packet,p)))]));
 if(JSON.stringify(before)!==JSON.stringify(after))throw Error('candidate drift during read-only check');
 const out={candidate_sha256:before,actual_prompt_sha256:hash(prompt),actual_stable_sha256:hash(stable),actual_attempt_sha256:hash(attempt),identity,closure_accepted:true,closure_hash_count:Object.keys(closure).length,legacy_registered_task_embedded:false,legacy_resolved_decisions_literal_present:false,native_artifacts_mutated:false,gate_or_dispatch_run:false};
 writeFileSync(resolve(packet,'independent-review/actual30-result.json'),JSON.stringify(out,null,2)+'\n');
 console.log(JSON.stringify(out,null,2));
}finally{rmSync(scratch,{recursive:true,force:true});}

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
const run='physics-td-qft-rpm-62-2026-10-14';
const dir=`research/${run}-owner-frontier-declaration-reconciliation`;
const args=process.argv.slice(2);
const queue=JSON.parse(fs.readFileSync(`${dir}/owner-resolution-queue.json`,'utf8'));
const ml=JSON.parse(fs.readFileSync(`${dir}/research-only-ml06-proposal.json`,'utf8')).patches[0];
const canonical=x=>JSON.stringify(x);
if(args.includes('--apply-ml06')) {
  if(!args.includes('--root-owner')||!args.includes('--writers-drained')) throw new Error('Root owner and drained writers must be explicitly affirmed.');
  const src=fs.readFileSync(ml.path,'utf8');
  if(src.includes(ml.replacement)&&!src.includes(ml.test)) {console.log('ML06 existing research clarification already applied.');process.exit(0);}
  if(src.split(ml.test).length-1!==1) throw new Error('ML06 exact preimage must occur once.');
  const archive=`${dir}/ml06-before.md`;if(fs.existsSync(archive))throw new Error('Existing ML06 preimage archive; inspect before replay.');
  fs.writeFileSync(archive,src);fs.writeFileSync(ml.path,src.replace(ml.test,ml.replacement));
  fs.writeFileSync(`${dir}/ml06-root-application-receipt.json`,JSON.stringify({run,root_owner:true,applied_at:new Date().toISOString(),path:ml.path,before_file:archive,scope:'Existing research prose only; no pair/item authoring',before:ml.test,after:ml.replacement},null,2)+'\n');
  console.log('Applied guarded ML06 research clarification.');process.exit(0);
}
const commands=queue.queue.map(row=>({batch:row.batch,args:['tools/physics-support/batch-scope-review.mjs','owner-resolve','--run',run,'--batch',row.batch,'--decision','accept','--reviewer',row.reviewer,'--reason',row.exact_reason]}));
if(!args.includes('--execute-queue')) {console.log(JSON.stringify({run,mode:'preview-only',count:commands.length,commands},null,2));process.exit(0);}
if(!args.includes('--root-owner')||!args.includes('--writers-drained'))throw new Error('Root owner and drained writers required.');
const ri=args.indexOf('--integration-receipt');if(ri<0||!args[ri+1])throw new Error('Root integration receipt path required.');
const receipt=JSON.parse(fs.readFileSync(args[ri+1],'utf8'));
if(receipt.template===true||receipt.status!=='completed-integration')throw new Error('Incomplete/template integration receipt cannot authorize owner acceptance.');
if(receipt.run!==run||receipt.reviewer!=='/root')throw new Error('Root integration identity mismatch.');
for(const k of ['writers_drained','source_guards_verified','metadata_synced','contracts_synced','declarations_synced','new11_registered','dependency_levels_synced','readiness_reconciled'])if(receipt[k]!==true)throw new Error(`Missing actual root integration attestation: ${k}`);
if(!fs.readFileSync(ml.path,'utf8').includes(ml.replacement))throw new Error('ML06 research clarification still unapplied.');
const engine=JSON.parse(fs.readFileSync(`.physics-autopilot/${run}/state.json`,'utf8'));
if(engine.stage!=='2-scope-review'||engine.paused!==true)throw new Error('Native controller must remain paused at Step2.');
for(const row of queue.queue){
 const current=JSON.parse(fs.readFileSync(row.loop_state_path,'utf8'));
 if(canonical(current)!==canonical(row.loop_state_preimage))throw new Error(`Batch${row.batch} state changed; regenerate and inspect queue.`);
 for(const e of row.evidence_paths)if(!fs.existsSync(e))throw new Error(`Missing evidence ${e}`);
}
const result=[];
for(const cmd of commands){
 const row=queue.queue.find(x=>x.batch===cmd.batch);const current=JSON.parse(fs.readFileSync(row.loop_state_path,'utf8'));
 if(canonical(current)!==canonical(row.loop_state_preimage))throw new Error(`Batch${row.batch} preimage changed before transition.`);
 const r=spawnSync(process.execPath,cmd.args,{cwd:process.cwd(),encoding:'utf8'});
 result.push({batch:cmd.batch,command_args:cmd.args,exit_code:r.status,stdout:r.stdout,stderr:r.stderr});
 fs.writeFileSync(`${dir}/root-queue-execution-receipt.json`,JSON.stringify({run,integration_receipt:args[ri+1],result},null,2)+'\n');
 if(r.status!==0)throw new Error(`Native owner-resolve batch${cmd.batch} failed; remaining queue not executed.`);
}
console.log(`Native owner-resolve completed for ${result.length} held batches; no gate run.`);

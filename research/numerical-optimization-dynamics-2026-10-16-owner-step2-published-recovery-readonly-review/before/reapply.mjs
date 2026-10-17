// ROOT-ONLY PREPARED UTILITY. Not executed by its preparer.
// Usage: node research/.../reapply.mjs --authorization research/ROOT-APPROVAL.json
import * as fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {itemHashGuard, stripVerification} from '../../tools/item-hash.mjs';
import {recordedPublishedRepair} from '../../tools/published-repair-policy.mjs';

const run='numerical-optimization-dynamics-2026-10-16';
const root=process.cwd();
const sha=b=>createHash('sha256').update(b).digest('hex');
const read=p=>fs.readFileSync(path.resolve(root,p));
const json=p=>JSON.parse(read(p));
const assert=(v,m)=>{if(!v) throw Error(m);};
const now=()=>new Date().toISOString();
const arg=process.argv.indexOf('--authorization');
assert(arg>=0 && process.argv[arg+1], 'Explicit root authorization JSON required; no default execution.');
const authorizationPath=process.argv[arg+1];
assert(authorizationPath.startsWith('research/'), 'Authorization must be durable research evidence.');
const authBytes=read(authorizationPath), auth=JSON.parse(authBytes);
assert(auth.version===1 && auth.run===run && auth.authorized_by==='root'
  && auth.action==='guarded-published-proof-reapplication'
  && auth.all_native_and_owner_workers_drained===true
  && auth.initial_preclaim_application_acknowledged===true,
  'Missing exact root authorization, drain acknowledgement, or honest initial application history.');
assert(typeof auth.output_directory==='string' && auth.output_directory.startsWith(`research/${run}-`)
  && !auth.output_directory.includes('..'),'Invalid fresh output directory.');
assert(!fs.existsSync(auth.output_directory),'Output exists: never overwrite prior recovery history.');
const expectedIds=[
 'lem-real-polynomial-factor-at-a-root',
 'thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots',
 'lem-binomial-coefficients-symmetric-and-unimodal',
 'thm-baire-category-for-complete-metric-spaces',
 'thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one',
].sort();
assert(Array.isArray(auth.items) && JSON.stringify(auth.items.map(r=>r.id).sort())===JSON.stringify(expectedIds),
 'Authorization must cover exactly the five published proof-only repairs.');
function boundary(){
 const s=json(`.autopilot/${run}/state.json`);
 assert(s.run===run && s.paused===true && /^2-/.test(s.stage),'Run must be paused at Step 2.');
 assert(Object.values(s.dispatches??{}).every(d=>!d.startedAt || Boolean(d.endedAt)), 'Native dispatches not drained.');
 // Owner workers are outside native dispatches; root must genuinely establish that condition.
 return s;
}
boundary();
const claimsPath=`research/${run}-step3-published-claims.jsonl`;
const ledgerPath='research/published-consumer-supplier-ledger.md';
const lines=p=>fs.existsSync(p)?read(p).toString().split(/\r?\n/).filter(Boolean).map(JSON.parse):[];
const claims=lines(claimsPath);
const groups=json(`research/${run}-alpha-groups.json`);
const itemBatch=id=>id==='thm-baire-category-for-complete-metric-spaces'?'5':id.startsWith('thm-stationary-splitting-')?'18':'4';
const prepared=auth.items.map(row=>{
 const owners=groups.filter(g=>(g.covers??[]).includes(itemBatch(row.id)));
 assert(owners.length===1 && row.group===owners[0].label,`${row.id}: root group must match exact current alpha-group ownership.`);
 assert(/^[a-zA-Z0-9_-]+$/.test(row.group),'Invalid per-item owner group.');
 const item=`items/${row.id}.md`, before=read(row.before_file), first=read(item);
 assert(sha(first)===row.expected_current_raw_sha256,`${row.id}: current source differs from root-reviewed bytes.`);
 assert(sha(before)===row.expected_before_raw_sha256,`${row.id}: original archive differs.`);
 assert(!claims.some(c=>c.id===row.id),`${row.id}: ownership already claimed; do not reuse/rewrite claims.`);
 const beforeText=before.toString(), firstText=first.toString();
 assert(/^status: published\s*$/m.test(beforeText) && /^status: published\s*$/m.test(firstText),`${row.id}: publication status missing.`);
 assert(/^verification:\n(?:[ \t]+[^\n]*\n)*? {2}(audited|verified):/m.test(beforeText),`${row.id}: archived preimage lacks actual prior audit.`);
 assert(itemHashGuard(beforeText)!==itemHashGuard(firstText),`${row.id}: no substantive correction.`);
 const at=beforeText.indexOf('\n## Proof\n'), bt=firstText.indexOf('\n## Proof\n');
 assert(at>=0 && bt>=0 && beforeText.slice(0,at)===firstText.slice(0,bt),`${row.id}: repair is not proof-only with identical pre-Proof bytes.`);
 assert(typeof row.correction==='string' && row.correction.trim(),`${row.id}: concrete correction required.`);
 const completion=read(row.completion_file);
 assert(sha(completion)===row.expected_completion_raw_sha256,`${row.id}: completion changed.`);
 const c=JSON.parse(completion);
 assert(Array.isArray(c.changed_paths) && c.changed_paths.includes(item),`${row.id}: genuine completion does not list current item.`);
 const approved=read(row.applied_archive);
 assert(approved.equals(first),`${row.id}: approved applied archive is not actual current full bytes.`);
 return {...row,item,before,first,completion,pre:itemHashGuard(beforeText),content:itemHashGuard(firstText)};
});
const output=auth.output_directory;
fs.mkdirSync(output,{recursive:false});
const save=(p,b)=>fs.writeFileSync(`${output}/${p}`,b,{flag:'wx'});
save('root-authorization.json',authBytes);
save('alpha-groups-at-entry.json',read(`research/${run}-alpha-groups.json`));
save('state-at-entry.json',read(`.autopilot/${run}/state.json`));
save('claims-at-entry.jsonl',fs.existsSync(claimsPath)?read(claimsPath):Buffer.alloc(0));
save('ledger-at-entry.md',read(ledgerPath));
const journal=p=>fs.appendFileSync(`${output}/journal.jsonl`,JSON.stringify({at:now(),...p})+'\n');
journal({event:'initial-preclaim-application-explicitly-preserved',meaning:'The first proof application preceded any native claim. This is not represented as an originally claimed repair. A new real restore/claim/reapplication follows.',authorization:authorizationPath});
for(const row of prepared){
 save(`${row.id}.initial-applied.md`,row.first);
 save(`${row.id}.original-audited.md`,row.before);
 save(`${row.id}.initial-completion.json`,row.completion);
}
function command(command){
 const started=now();
 const result=spawnSync(command[0],command.slice(1),{cwd:root,encoding:'utf8',maxBuffer:32*1024*1024});
 return {command:command.slice(1),invocation:command,exit_code:result.status,
  output:(result.stdout??'')+(result.stderr??''),started_at:started,checked_at:now()};
}
function same(p,b){assert(read(p).equals(b),`Concurrent change: ${p}`);}
// This run-specific exclusive lock is additional to native claim serialization.
const lock=`${output}.lock`;
fs.mkdirSync(lock);
try{
 for(const row of prepared){
  boundary(); same(row.item,row.first);
  assert(!lines(claimsPath).some(c=>c.id===row.id),`${row.id}: concurrent ownership claim.`);
  journal({event:'restore-original-before-new-claim',id:row.id,initial_applied_raw_sha256:sha(row.first),original_raw_sha256:sha(row.before)});
  fs.writeFileSync(row.item,row.before);
  let claim;
  try{
   same(row.item,row.before);
   const result=command([process.execPath,'tools/published-repairs.mjs','claim','--run',run,'--id',row.id,'--group',row.group]);
   save(`${row.id}.native-claim-result.json`,JSON.stringify(result,null,2)+'\n');
   assert(result.exit_code===0,`${row.id}: native claim failed.`);
   const matches=lines(claimsPath).filter(c=>c.id===row.id);
   assert(matches.length===1 && matches[0].group===row.group && matches[0].pre_sha256===row.pre,`${row.id}: claim guard mismatch.`);
   claim=matches[0]; same(row.item,row.before);
   journal({event:'actual-native-preedit-claim-for-new-reapplication',id:row.id,claim});
  }finally{
   // Restore the approved mathematics even if claim creation fails. No foreign edit is overwritten.
   same(row.item,row.before);
   fs.writeFileSync(row.item,row.first);
   journal({event:'exact-approved-proof-reapplied',id:row.id,raw_sha256:sha(read(row.item)),claim_recorded:Boolean(claim)});
  }
  const receiptPath=`${output}/${row.id}.repair.json`;
  const text=row.first.toString();
  const replacement=`verification:\n  precheck: pass\n  repair: ${receiptPath}\n`;
  const matches=text.match(/^verification:\n(?:[ \t]+[^\n]*\n)*/gm)??[];
  assert(matches.length===1,`${row.id}: expected one block verification mapping.`);
  const final=text.replace(/^verification:\n(?:[ \t]+[^\n]*\n)*/m,replacement);
  assert(stripVerification(final)===stripVerification(text),`${row.id}: metadata edit altered mathematics.`);
  same(row.item,row.first);fs.writeFileSync(row.item,final);
  journal({event:'stale-verification-replaced-by-local-repair-pointer',id:row.id,raw_sha256:sha(final)});
  const local_checks={};
  for(const [tool,args] of [
   ['precheck',['tools/tsx-run.mjs','tools/precheck.mts',row.item]],
   ['rendercheck',['tools/rendercheck.mjs',row.item]],
  ]){
   boundary(); same(row.item,Buffer.from(final));
   const check=command([process.execPath,...args]);
   local_checks[tool]={...check,content_sha256:row.content};
   save(`${row.id}.${tool}.json`,JSON.stringify(local_checks[tool],null,2)+'\n');
   assert(check.exit_code===0,`${row.id}: ${tool} failed; see durable check output.`);
   same(row.item,Buffer.from(final));
  }
  const layout=command([process.execPath,'tools/proof-layout.mjs',row.item]);
  save(`${row.id}.proof-layout.json`,JSON.stringify(layout,null,2)+'\n');
  assert(layout.exit_code===0,`${row.id}: final proof-layout failed.`);
  same(row.item,Buffer.from(final));
  const marker=`${run}:step2-guarded-reapply:${row.id}`;
  const start=`<!-- local-published-repair:${marker}:begin -->`;
  const end=`<!-- local-published-repair:${marker}:end -->`;
  const evidence=`\nRecorded local proof correction of ${row.id}; current content_sha256 ${row.content}.\n${row.correction}\nStatement/Definition unchanged. Initial preclaim application and true subsequent native preedit claim/reapplication are preserved in ${output}/journal.jsonl. This records no independent acceptance or gate coverage.\n`;
  const ledgerBefore=read(ledgerPath);
  assert(!ledgerBefore.includes(Buffer.from(start)) && !ledgerBefore.includes(Buffer.from(end)),`${row.id}: ledger marker already exists.`);
  const fragment=Buffer.from(`\n${start}${evidence}${end}\n`);
  save(`${row.id}.ledger-before.md`,ledgerBefore);
  save(`${row.id}.ledger-fragment.md`,fragment);
  boundary();same(ledgerPath,ledgerBefore);
  fs.appendFileSync(ledgerPath,fragment); // Append preserves all prior foreign bytes.
  same(ledgerPath,Buffer.concat([ledgerBefore,fragment]));
  const receipt={version:1,kind:'recorded-local-published-repair',id:row.id,run,group:row.group,
   correction:row.correction,content_sha256:row.content,before_file:`${output}/${row.id}.original-audited.md`,
   before_raw_sha256:sha(row.before),pre_sha256:row.pre,ledger_marker:marker,ledger_sha256:sha(evidence),
   local_checks,recorded_at:now(),initial_application_history:`${output}/${row.id}.initial-completion.json`,
   honest_reapplication_journal:`${output}/journal.jsonl`,actual_native_claim:claim,
   final_proof_layout:`${output}/${row.id}.proof-layout.json`};
  save(`${row.id}.repair.json`,JSON.stringify(receipt,null,2)+'\n');
  const policy=recordedPublishedRepair(root,row.id,final,receiptPath);
  save(`${row.id}.policy-result.json`,JSON.stringify(policy,null,2)+'\n');
  assert(policy.ok,`${row.id}: local policy did not validate: ${policy.reason}`);
  save(`${row.id}.final.md`,read(row.item));
  journal({event:'recorded-local-repair-sealed',id:row.id,receipt:receiptPath,receipt_raw_sha256:sha(read(receiptPath))});
 }
 save('completion.json',JSON.stringify({run,kind:'honest-guarded-published-proof-reapplication-complete',at:now(),items:prepared.map(r=>r.id),limitations:'No initial claim timestamp invented. No mathematical acceptance, rejudgment, gate, manifest, contract or level certification supplied.'},null,2)+'\n');
}catch(error){
 journal({event:'stopped-with-preserved-history',error:String(error),instruction:'Root must inspect exact current source and append history; never erase claims or retry blindly.'});
 throw error;
}finally{fs.rmdirSync(lock);}

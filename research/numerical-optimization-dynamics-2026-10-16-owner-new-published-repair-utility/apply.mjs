// ROOT ONLY. New genuine claim-before-write, ONE published carrier. No recovery/reapply.
// Preparing this file does not execute it. Failure leaves honest partial history; never rerun blindly.
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {itemHashGuard,stripVerification} from '../../tools/item-hash.mjs';
import {recordedPublishedRepair} from '../../tools/published-repair-policy.mjs';
const root=process.cwd(),run='numerical-optimization-dynamics-2026-10-16';
const assert=(ok,message)=>{if(!ok)throw Error(message);},now=()=>new Date().toISOString();
const arg=process.argv.indexOf('--authorization'),authPath=process.argv[arg+1];
assert(arg>0&&authPath,'Usage: node .../apply.mjs --authorization research/<run>-.../ROOT-authorization.json');
const read=p=>fs.readFileSync(path.resolve(root,p)),sha=x=>createHash('sha256').update(x).digest('hex');
function research(p){assert(typeof p==='string'&&p.startsWith(`research/${run}-`)&&!p.includes('\\')&&!p.split('/').includes('..'),'Expected own-run research path');return p;}
research(authPath);const authBytes=read(authPath),a=JSON.parse(authBytes);
assert(a.version===1&&a.run===run&&a.action==='new-claim-before-write-published-repair'&&a.authorized_by==='root'&&a.source_writers_drained===true,'Explicit root authorization and affected source-writer drain required');
assert(/^[a-z][a-z0-9-]*$/.test(a.id??'')&&/^[a-zA-Z0-9_-]+$/.test(a.group??'')&&a.correction?.trim(),'Invalid id/group/correction');
assert(/^[a-zA-Z0-9:_-]+$/.test(a.ledger_marker??''),'Explicit unique ledger marker required');
const file=`items/${a.id}.md`,output=research(a.output_directory),beforePath=research(a.before_file),proposalPath=research(a.proposal_file);
assert(!fs.existsSync(output),'Fresh output directory required');
const before=read(beforePath),proposal=read(proposalPath),same=(p,b)=>assert(read(p).equals(b),`Exact-byte guard failed: ${p}`);
same(file,before);
function field(text,key){return new RegExp(`^${key}:\\s*["']?([^\\n"']+?)["']?\\s*$`,'m').exec(/^---\n([\s\S]*?)\n---\n/.exec(text)?.[1]??'')?.[1];}
for(const bytes of [before,proposal])assert(field(bytes.toString(),'id')===a.id&&field(bytes.toString(),'status')==='published'&&field(bytes.toString(),'proved_here')!=='false','Before/proposal must name existing published proved carrier');
const claimsPath=`research/${run}-step3-published-claims.jsonl`,ledger='research/published-consumer-supplier-ledger.md';
const claimRows=()=>fs.existsSync(claimsPath)?read(claimsPath).toString().split(/\r?\n/).filter(Boolean).map(JSON.parse):[];
assert(!claimRows().some(x=>x.id===a.id),'NEW claims only; existing ownership requires separate owner handling');
const audit=/^verification:[ \t]*\n(?:[ \t]+[^\n]*\n)*? {2}(?:audited|verified):/m.test(before.toString());
function git(args){const p=spawnSync('git',['--no-replace-objects','-C',root,...args],{maxBuffer:16*1024*1024});assert(p.status===0,'Prior-publication git authentication failed');return p.stdout;}
if(!audit){const commit=a.prior_publication_commit;assert(/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/.test(commit??''),'Exact prior-publication ancestor required for unaudited before');git(['merge-base','--is-ancestor',commit,'HEAD']);assert(git(['show',`${commit}:${file}`]).equals(before),'Prior publication differs from exact before');const [oid,seconds]=git(['show','--no-patch','--format=%H%n%ct',commit]).toString().trim().split('\n');assert(oid===commit&&Number(seconds)*1000<=Date.now(),'Invalid/future publication ancestor');}
const receiptPath=`${output}/repair.json`,text=proposal.toString(),m=/^---\n([\s\S]*?)\n---\n/.exec(text);assert(m,'LF frontmatter required');
const verification=[...m[1].matchAll(/^verification:(?:\n(?:[ \t]+.*\n?)*|[^\n]*\n?)/gm)];assert(verification.length===1,'Exactly one verification mapping required');
// No audit/judge stamp survives. Actual precheck success is recorded in receipt after execution.
const final=text.replace(m[0],`---\n${m[1].replace(verification[0][0],`verification:\n  repair: ${receiptPath}\n`).replace(/\n$/,'')}\n---\n`);
assert(stripVerification(final)===stripVerification(text),'Verification pointer replacement changed proposal body/provenance');
const pre=itemHashGuard(before.toString()),content=itemHashGuard(final);assert(pre!==content,'Not a genuine content repair');
fs.mkdirSync(output);const save=(name,data)=>fs.writeFileSync(`${output}/${name}`,data,{flag:'wx'}),journal=x=>fs.appendFileSync(`${output}/journal.jsonl`,JSON.stringify({at:now(),...x})+'\n');
save('ROOT-authorization.json',authBytes);save('before.md',before);save('proposal.md',proposal);save('claims-before.jsonl',fs.existsSync(claimsPath)?read(claimsPath):'');
function command(name,args){const started_at=now(),p=spawnSync(process.execPath,args,{cwd:root,encoding:'utf8',maxBuffer:32*1024*1024});const row={command:args,exit_code:p.status,signal:p.signal,started_at,checked_at:now(),output:(p.stdout??'')+(p.stderr??'')};save(`${name}.json`,JSON.stringify(row,null,2)+'\n');assert(p.status===0,`${name} failed; stop, retain source/claim/history, no automatic rollback or reapply`);return row;}
try{
 same(authPath,authBytes);same(beforePath,before);same(proposalPath,proposal);same(file,before);
 command('claim',['tools/published-repairs.mjs','claim','--run',run,'--id',a.id,'--group',a.group]);
 const claims=claimRows().filter(x=>x.id===a.id);assert(claims.length===1&&claims[0].group===a.group&&claims[0].pre_sha256===pre,'Actual pre-edit claim mismatch');const claim=claims[0];save('actual-claim.json',JSON.stringify(claim,null,2)+'\n');
 same(file,before);same(proposalPath,proposal);same(authPath,authBytes);
 fs.writeFileSync(file,final);journal({event:'approved-source-applied-after-actual-claim',id:a.id,claim});save('final.md',final);
 const hasProof=/^## (?:Proof|Refutation|Counterexample|Verification)\b/m.test(final),local_checks={};
 for(const [tool,args]of [['precheck',['tools/tsx-run.mjs','tools/precheck.mts',...(hasProof?[]:['--json']),file]],['rendercheck',['tools/rendercheck.mjs',file]],['proof-layout',['tools/proof-layout.mjs',file]]]){
  same(file,Buffer.from(final));const result=command(tool,args);same(file,Buffer.from(final));if(tool!=='proof-layout')local_checks[tool]={...result,content_sha256:content};
 }
 const lock='research/.published-consumer-ledger.lock';fs.mkdirSync(lock); // No stealing/deleting foreign locks; EEXIST stops.
 try{
  const oldLedger=read(ledger),start=`<!-- local-published-repair:${a.ledger_marker}:begin -->`,end=`<!-- local-published-repair:${a.ledger_marker}:end -->`;
  assert(!oldLedger.includes(Buffer.from(start))&&!oldLedger.includes(Buffer.from(end)),'Duplicate ledger marker');
  const evidence=`\nRecorded local published repair: ${a.id}; current content_sha256 ${content}.\n${a.correction}\nOwner ${a.group}; actual pre-edit claim ${claim.claimed_at}; exact before and local checks retained in ${output}. Local correction only; no whole-item audit or new acceptance.\n`;
  const fragment=Buffer.from(`\n${start}${evidence}${end}\n`);save('ledger-before.md',oldLedger);save('ledger-fragment.md',fragment);same(file,Buffer.from(final));same(ledger,oldLedger);fs.appendFileSync(ledger,fragment);same(ledger,Buffer.concat([oldLedger,fragment]));
  const receipt={version:1,kind:'recorded-local-published-repair',id:a.id,run,group:a.group,correction:a.correction,content_sha256:content,before_file:`${output}/before.md`,before_raw_sha256:sha(before),pre_sha256:pre,recorded_at:now(),ledger_marker:a.ledger_marker,ledger_sha256:sha(evidence),local_checks,...(a.prior_publication_commit?{prior_publication_commit:a.prior_publication_commit}:{})};save('repair.json',JSON.stringify(receipt,null,2)+'\n');
  const policy=recordedPublishedRepair(root,a.id,read(file).toString(),receiptPath);save('policy.json',JSON.stringify(policy,null,2)+'\n');assert(policy.ok,`Actual recorded repair policy failed: ${policy.reason}`);
 }finally{fs.rmdirSync(lock);}
 // Optional native repair row must be supplied explicitly by root, never inferred from a reader finding.
 if(a.repair_row){assert(a.repair_row.kind==='repaired','Root row must be repaired');const row={...a.repair_row,id:a.id,group:a.group,repair_owner_group:a.group,pre_sha256:pre,receipt:receiptPath};save('native-repair-row.json',JSON.stringify(row,null,2)+'\n');command('published-repair-append',['tools/published-repairs.mjs','append','--run',run,'--file',`${output}/native-repair-row.json`]);}
 same(file,Buffer.from(final));save('completion.json',JSON.stringify({at:now(),run,id:a.id,receipt:receiptPath,policy_ok:true,checks:['precheck','rendercheck','proof-layout'],gates_run:false},null,2)+'\n');journal({event:'completed'});
}catch(error){journal({event:'STOPPED',error:String(error),instruction:'Preserve actual claim/source/history. Root diagnoses; this NEW-claim utility cannot retry/recover.'});throw error;}

// Root-only scoped CAS integration. No native control or gates.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {yaml} from '../../tools/pathway-lib.mjs';
import {itemHashGuard} from '../../tools/item-hash.mjs';
const run='machine-learning-all-101-2026-10-19';
const base=`research/${run}-owner-step4-published-alert-repair`;
const out=`${base}/application`;
const read=p=>fs.readFileSync(p,'utf8');
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const need=(v,m)=>{if(!v)throw Error(m);};
const fm=t=>yaml().parse(/^---\n([\s\S]*?)\n---\n/.exec(t)?.[1]??'');
const reviewRaw=read(`${base}/review/review.json`);
need(sha(reviewRaw)==='b1409a1504556a7e3437a320efe235ff7f82705a6018c33ca216b9a93f3497b8','Independent review bytes changed');
const review=JSON.parse(reviewRaw),inventory=JSON.parse(read(`${base}/inventory.json`));
need(review.verdict==='approved-candidates'&&!review.blockers.length&&review.candidates.length===261,'Approval missing');
const state=JSON.parse(read(`.autopilot/${run}/state.json`));
need(state.run===run&&state.stage==='4-judge'&&state.paused===true,'Exact native boundary not paused');
need(Object.values(state.dispatches).every(x=>!x.startedAt||x.endedAt),'Native work not drained');
const claims=new Map(read(`research/${run}-step3-published-claims.jsonl`).trim().split('\n').map(l=>{const r=JSON.parse(l);return[r.id,r];}));
const git=args=>{const r=spawnSync('git',['--no-replace-objects',...args],{maxBuffer:16*1024*1024});need(r.status===0,`git ${args[0]} failed`);return r.stdout.toString();};
const head=git(['rev-parse','HEAD']).trim();
const candidates=new Map(review.candidates.map(r=>[r.id,r]));
const ordered=[],seen=new Set(),active=new Set();
function visit(id){if(seen.has(id))return;need(!active.has(id),`Scoped supplier cycle: ${id}`);active.add(id);const r=candidates.get(id);for(const d of fm(read(r.candidate_file)).deps??[])if(candidates.has(d))visit(d);active.delete(id);seen.add(id);ordered.push(r);}
for(const id of candidates.keys())visit(id);
function stamp(text,receipt){
 if(/^verification:\n/m.test(text))return text.replace(/^verification:\n(?:[ \t]+.*\n)*/m,old=>old.replace(/^ {2}repair:.*\n/m,'').replace('verification:\n',`verification:\n  repair: ${receipt}\n`));
 need(!/^verification:/m.test(text),'Unsupported verification shape');
 return text.replace(/^---\n/,`---\nverification:\n  repair: ${receipt}\n`);
}
fs.mkdirSync(out,{recursive:true});
const rows=[];
for(const r of ordered){
 const source=`items/${r.id}.md`,before=read(source),candidate=read(r.candidate_file),claim=claims.get(r.id);
 need(sha(before)===r.original_raw_sha256&&sha(candidate)===r.candidate_raw_sha256,`CAS mismatch: ${r.id}`);
 need(itemHashGuard(before)===r.original_content_sha256&&itemHashGuard(candidate)===r.candidate_content_sha256,`Canonical mismatch: ${r.id}`);
 need(claim&&claim.run===run,'Missing actual pre-edit ownership');
 let beforeFile=`${base}/preimage/${source}`,beforeRaw=sha(before),pre=itemHashGuard(before),prior=head;
 let previousRepair=null;
 if(fm(before).verification?.repair){
  const p=fm(before).verification.repair,raw=read(p);previousRepair={path:p,sha256:sha(raw),archived_copy:`${out}/prior-receipts/${r.id}.json`};
 }
 if(claim.pre_sha256!==pre){
  need(r.id==='thm-of-square-roots'&&previousRepair,'Unexpected earlier ownership content');
  const previous=JSON.parse(read(previousRepair.path));
  need(previous.run===run&&previous.group===claim.group&&previous.pre_sha256===claim.pre_sha256,'Original ownership mismatch');
  beforeFile=previous.before_file;beforeRaw=previous.before_raw_sha256;pre=previous.pre_sha256;prior=previous.prior_publication_commit;
  need(sha(read(beforeFile))===beforeRaw&&itemHashGuard(read(beforeFile))===pre,'Original before history changed');
 }else if(!fm(before).verification?.audited&&!Object.hasOwn(fm(before).verification??{},'verified')){
  need(git(['show',`${head}:${source}`])===before,`Prior committed publication differs: ${r.id}`);
 }
 const receipt=`${out}/receipts/${r.id}.json`,final=stamp(candidate,receipt);
 need(itemHashGuard(final)===r.candidate_content_sha256,`Evidence stamp changed canonical content: ${r.id}`);
 const corrections={
  'def-frobenius-matrix-norm':'Declare the existing proved inner-product norm-axiom corollary and relocate Definition links, preserving the complete original mathematical assertion and rendered labels.',
  'thm-c1-dependence-of-solutions-on-initial-data':'Replace the invalid single-cylinder/secant argument by a compact tube, two-sided first-exit estimates and uniform variational remainder/continuity estimates, preserving the full original Statement and common interval.',
  'thm-natural-logarithm-laws':'Derive exp(0)=1 from exponential addition and positivity before applying inverse identities, with all three required supplier tags; preserve the original Statement.',
  'thm-continuous-implies-integrable':'Relocate Statement hyperlinks without changing rendered prose; establish boundedness from uniform continuity and a finite mesh, aligning the compactness-use Remark and preserving the full Statement.',
  'thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space':'Relocate Statement hyperlinks without changing rendered prose and move the existing L2/L3 tags after the complete displayed proof paragraph; preserve the mathematical argument.'
 };
 rows.push({...r,source,claim,before_file:beforeFile,before_raw_sha256:beforeRaw,pre_sha256:pre,prior_publication_commit:prior,previous_repair:previousRepair,receipt,final_raw_sha256:sha(final),ledger_marker:`${run}-step4-${r.id}`,correction:corrections[r.id]??'Move hyperlinks out of the complete mathematical Statement or Definition into immediately following references, preserving exact renderer display labels, all hypotheses, conclusions, proof text, dependencies and publication status.'});
}
const plan={version:1,run,at:new Date().toISOString(),review_sha256:sha(reviewRaw),scope:{suppliers:261,alerts:630},rows};
if(!process.argv.includes('--apply')){
 fs.writeFileSync(`${out}/plan.json`,JSON.stringify(plan,null,2)+'\n',{flag:'wx'});
 console.log(JSON.stringify({mode:'plan',suppliers:rows.length,alerts:inventory.alerts,source_writes:0}));
}else{
 const prior=JSON.parse(read(`${out}/plan.json`));need(JSON.stringify(prior.rows)===JSON.stringify(rows),'Plan changed');
 for(const r of rows){
  if(r.previous_repair){fs.mkdirSync(path.dirname(r.previous_repair.archived_copy),{recursive:true});fs.writeFileSync(r.previous_repair.archived_copy,read(r.previous_repair.path),{flag:'wx'});}
  const final=stamp(read(r.candidate_file),r.receipt);need(sha(read(r.source))===r.original_raw_sha256,'Source changed during install');fs.writeFileSync(r.source,final);need(sha(read(r.source))===r.final_raw_sha256,'Installed bytes differ');
 }
 fs.writeFileSync(`${out}/applied.json`,JSON.stringify({version:1,run,at:new Date().toISOString(),review_sha256:sha(reviewRaw),plan_sha256:sha(read(`${out}/plan.json`)),installed:rows.map(r=>({id:r.id,raw_sha256:r.final_raw_sha256,content_sha256:r.candidate_content_sha256}))},null,2)+'\n',{flag:'wx'});
 console.log(JSON.stringify({mode:'applied',suppliers:rows.length,source_writes:rows.length,native_artifacts_changed:false}));
}

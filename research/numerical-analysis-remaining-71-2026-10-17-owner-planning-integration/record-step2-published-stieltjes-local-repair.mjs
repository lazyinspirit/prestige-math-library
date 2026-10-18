import {readFileSync as read,writeFileSync as write,existsSync as exists,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {itemHashGuard} from '../../tools/item-hash.mjs';
import {recordedPublishedRepair} from '../../tools/published-repair-policy.mjs';
const run='numerical-analysis-remaining-71-2026-10-17', dir=`research/${run}-owner-planning-integration`;
const specs=[['thm-lebesgue-stieltjes-measures-are-regular-on-r','scope39-monotone-evolution-owner',`${dir}/scope39-before/items/thm-lebesgue-stieltjes-measures-are-regular-on-r.md`,'Control entire open-cover excess by bounded open covers of increasing bounded truncations with summable errors, preserving the complete regularity Statement.']];
const sha=x=>createHash('sha256').update(x).digest('hex');
const claims=read(`research/${run}-step3-published-claims.jsonl`,'utf8').trim().split('\n').map(JSON.parse);
const out=`${dir}/step2-published-stieltjes-local-repair`;mkdirSync(out,{recursive:true});
const results=[];
for(const [id,group,before_file,correction] of specs){
 const path=`items/${id}.md`, receiptPath=`${out}/${id}.json`, raw=read(path,'utf8');
 if(exists(receiptPath))throw Error(`Existing receipt, do not overwrite ${id}`);
 const claim=claims.find(x=>x.id===id);const before=read(before_file,'utf8');
 if(claim?.group!==group||claim.pre_sha256!==itemHashGuard(before))throw Error('Claim mismatch '+id);
 if(!exists(`${out}/${id}-before-owner-normalization.md`))write(`${out}/${id}-before-owner-normalization.md`,raw);
 let text=raw;
 if(id==='thm-gamma-meromorphic-continuation'){
  text=text.replace(/^2\.2 /m,'3.1 ').replace(/^3\.1 Near /m,'4.1 Near ');
  const stripRows=x=>[...x.matchAll(/^\d+\.\d+ (.*)$/gm)].map(m=>m[1]);
  if(JSON.stringify(stripRows(raw))!==JSON.stringify(stripRows(text)))throw Error('Proof row changed');
 }
 text=text.replace(/^verification:\n(?:[ \t]+.*\n)*/m,`verification:\n  precheck: pass\n  repair: ${receiptPath}\n`);
 if(!text.includes(`  repair: ${receiptPath}`))throw Error('No verification block');
 write(path,text);
 const checks={};
 for(const tool of ['precheck','rendercheck']){
  const command=tool==='precheck'?['node','tools/tsx-run.mjs','tools/precheck.mts',path]:['node','tools/rendercheck.mjs',path];
  const r=spawnSync(command[0],command.slice(1),{encoding:'utf8',maxBuffer:16*1024*1024});
  checks[tool]={command,exit_code:r.status,checked_at:new Date().toISOString(),content_sha256:itemHashGuard(read(path,'utf8')),output:r.stdout+r.stderr};
  write(`${out}/${id}-${tool}.out`,checks[tool].output);
  if(r.status!==0)throw Error(`${id} ${tool}: ${checks[tool].output}`);
 }
 const layout=spawnSync('node',['tools/proof-layout.mjs',path],{encoding:'utf8'});write(`${out}/${id}-proof-layout.out`,layout.stdout+layout.stderr);if(layout.status!==0)throw Error('layout '+id);
 const current=itemHashGuard(read(path,'utf8')),marker=`${run}:${id}`;
 const evidence=`\n${id}: ${correction}\nRun ${run}; owner group ${group}; current canonical hash ${current}.\nFocused delegated repair and root review preserve the original Statement. Actual current precheck and rendercheck pass; no whole-item audit or native gate credit is claimed.\n`;
 const ledger='research/published-consumer-supplier-ledger.md',old=read(ledger,'utf8');
 if(old.includes(`<!-- local-published-repair:${marker}:begin -->`))throw Error('duplicate ledger marker');
 write(ledger,old+`\n<!-- local-published-repair:${marker}:begin -->${evidence}<!-- local-published-repair:${marker}:end -->\n`);
 const receipt={version:1,kind:'recorded-local-published-repair',id,run,group,correction,content_sha256:current,before_file,before_raw_sha256:sha(before),pre_sha256:claim.pre_sha256,recorded_at:new Date().toISOString(),ledger_marker:marker,ledger_sha256:sha(evidence),local_checks:checks};
 write(receiptPath,JSON.stringify(receipt,null,2)+'\n');
 const policy=recordedPublishedRepair(process.cwd(),id,read(path,'utf8'),receiptPath);if(!policy.ok)throw Error(JSON.stringify(policy));
 results.push({id,receipt:receiptPath,content_sha256:current,policy,proof_layout:layout.stdout.trim()});
}
write(`${dir}/step2-published-stieltjes-local-repair.json`,JSON.stringify({version:1,run,recorded_at:new Date().toISOString(),actual_repairs:results,native_gate_credit:false},null,2)+'\n');
console.log(JSON.stringify(results,null,2));

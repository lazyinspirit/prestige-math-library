import {readFileSync as read,writeFileSync as write,existsSync as exists} from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {itemHashGuard} from '../../tools/item-hash.mjs';
import {recordedPublishedRepair} from '../../tools/published-repair-policy.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,dir=`${base}/step3-qr-escalation`;
const id='alg-strong-rank-revealing-qr-with-finite-swaps',consumer='alg-strong-rrqr-interpolative-decomposition';
const receiptPath=`${dir}/local-published-repair.json`;
if(exists(receiptPath))throw Error('Nonoverwriting integration already exists');
const sha=x=>createHash('sha256').update(x).digest('hex');
const reportPath=`${dir}/repair-report.json`,reportRaw=read(reportPath),report=JSON.parse(reportRaw);
if(report.run!==run)throw Error('Wrong delegated report');
const claim=read(`research/${run}-step3-published-claims.jsonl`,'utf8').trim().split('\n').map(JSON.parse).find(x=>x.id===id);
const previous=JSON.parse(read(`${dir}/1-${id}.json`,'utf8'));
if(claim.group!==previous.group||claim.pre_sha256!==previous.pre_sha256)throw Error('Original ordinary claim changed');
const before=read(previous.before_file,'utf8');
const pub=spawnSync('git',['show',`${previous.prior_publication_commit}:items/${id}.md`],{encoding:'utf8'});
if(pub.status!==0||pub.stdout!==before||itemHashGuard(before)!==claim.pre_sha256)throw Error('Original publication preimage mismatch');
const ancestor=spawnSync('git',['merge-base','--is-ancestor',previous.prior_publication_commit,'HEAD']);
if(ancestor.status!==0)throw Error('Original publication not ancestor');
const normalized=[];
for(const name of [id,consumer]){
 const path=`items/${name}.md`,raw=read(path,'utf8');
 const expected=name===id?'bc324eb9a40c3f28ebceed2fa4086e93cc02d64ce00300c0379d47eb3057a528':'ffa7834815724566a164aa0b1b6350d71130355364d925b6effcc893b97ffe49';
 if(sha(raw)!==expected)throw Error('Delegated endpoint changed '+name);
 write(`${dir}/root-normalization-before-${name}.md`,raw,{flag:'wx'});
 let current=raw.replace(/^\$\$\n([^\n]+)\n\$\$$/gm,(_m,math)=>`$$${math}$$`);
 if(raw.replace(/\s+/g,'')!==current.replace(/\s+/g,''))throw Error('Display normalization changed text');
 current=current.replace(/^  statement: literature-derived$/m,'  statement: ai-altered');
 if(name===id)current=current.replace(/^verification:\n(?:[ \t]+.*\n)*/m,()=>`verification:\n  precheck: n/a\n  repair: ${receiptPath}\n`);
 write(path,current);write(`${dir}/root-normalization-after-${name}.md`,current,{flag:'wx'});
 normalized.push({id:name,path,before_raw_sha256:sha(raw),after_raw_sha256:sha(current),reason:'Normalize display delimiters, truthfully mark locally specified procedure as ai-altered, and replace only stale published verification with a fresh local repair pointer.'});
}
const checks={};
for(const tool of ['precheck','rendercheck']){
 const command=tool==='precheck'?['node','tools/tsx-run.mjs','tools/precheck.mts','--json',`items/${id}.md`]:['node','tools/rendercheck.mjs',`items/${id}.md`];
 const r=spawnSync(command[0],command.slice(1),{encoding:'utf8',maxBuffer:16*1024*1024});
 checks[tool]={command,exit_code:r.status,checked_at:new Date().toISOString(),content_sha256:itemHashGuard(read(`items/${id}.md`,'utf8')),output:r.stdout+r.stderr};
 write(`${dir}/${id}-${tool}.out`,checks[tool].output);if(r.status!==0)throw Error(checks[tool].output);
}
for(const command of [['node','tools/rendercheck.mjs',`items/${consumer}.md`],['node','tools/proof-layout.mjs',`items/${id}.md`,`items/${consumer}.md`]]){
 const r=spawnSync(command[0],command.slice(1),{encoding:'utf8',maxBuffer:16*1024*1024});
 write(`${dir}/${command[1].includes('proof-layout')?'final-proof-layout':'consumer-rendercheck'}.out`,r.stdout+r.stderr);if(r.status!==0)throw Error(r.stdout+r.stderr);
}
const content=itemHashGuard(read(`items/${id}.md`,'utf8')),marker=`${run}:${id}:step3-explicit-finite-procedure`;
const correction='Specify the rounded Householder operations and dyadic transformation record, exact rational unitary reconstruction, score-square checks and finite residual certification; preserve the exact algorithm and rich certified conclusions, with same-reviewer consumer verification.';
const evidence=`\n${id}: ${correction}\nRun ${run}; owner group ${claim.group}; current canonical hash ${content}.\nOriginal ordinary pre-edit ownership claim and Git-authenticated publication remain unchanged. Additional repair resolves native Alpha18 supplier and ID-consumer escalations. Delegated source/consumer review: ${reportPath} (SHA256 ${sha(reportRaw)}). Root independently checked the exact rational reflector identity, product order, finite rounded instructions and ID symbolic-bound interface. Actual current local precheck/rendercheck and final proof-layout pass; no new native execution, whole-item audit, judge acceptance or gate coverage is claimed. Previous Step2 receipt and ledger block remain historical.\n`;
const ledger='research/published-consumer-supplier-ledger.md',old=read(ledger,'utf8');if(old.includes(`<!-- local-published-repair:${marker}:begin -->`))throw Error('Duplicate ledger marker');
write(ledger,old+`\n<!-- local-published-repair:${marker}:begin -->${evidence}<!-- local-published-repair:${marker}:end -->\n`);
const receipt={...previous,correction,content_sha256:content,recorded_at:new Date().toISOString(),ledger_marker:marker,ledger_sha256:sha(evidence),local_checks:checks,previous_receipt:`${dir}/1-${id}.json`,delegated_evidence:{path:reportPath,sha256:sha(reportRaw)}};
write(receiptPath,JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});
const policy=recordedPublishedRepair(process.cwd(),id,read(`items/${id}.md`,'utf8'),receiptPath);if(!policy.ok)throw Error(JSON.stringify(policy));
write(`${dir}/root-integration.json`,JSON.stringify({version:1,run,at:new Date().toISOString(),report:{path:reportPath,sha256:sha(reportRaw)},normalization:normalized,receipt:receiptPath,policy,mathematical_owner:'gate_coverage_harvest',native_execution_credit:false},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({receipt:receiptPath,policy,normalized:normalized.length}));

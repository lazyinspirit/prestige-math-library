import {readFileSync as read,writeFileSync as write,mkdirSync,rmSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {itemHashGuard} from '../../tools/item-hash.mjs';
import {recordedPublishedRepair} from '../../tools/published-repair-policy.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,dir=`${base}/step3-reference-simplex65`,id='def-matching-affine-simplicial-meshes',path=`items/${id}.md`,receiptPath=`${dir}/local-published-repair.json`;
if(existsSync(receiptPath))throw Error('Nonoverwriting local repair already exists');
const sha=x=>createHash('sha256').update(x).digest('hex');
const before_file=`${dir}/${id}-before.md`,before=read(before_file,'utf8'),raw=read(path,'utf8');
if(!raw.includes('underlying coordinate index set')||!raw.includes('e_i(i-1)=1'))throw Error('Expected delegated coordinate repair absent');
const claim=read(`research/${run}-step3-published-claims.jsonl`,'utf8').trim().split('\n').map(JSON.parse).find(x=>x.id===id);
if(claim.group!=='scope65-simplex-owner'||claim.pre_sha256!==itemHashGuard(before))throw Error('Original ownership changed');
write(`${dir}/before-root-verification.md`,raw,{flag:'wx'});
const text=raw.replace('  statement: literature-derived','  statement: ai-altered').replace(/^verification:\n(?:[ \t]+.*\n)*/m,()=>`verification:\n  precheck: pass\n  repair: ${receiptPath}\n`);
if(!text.includes(`  repair: ${receiptPath}`))throw Error('Verification pointer not installed');
write(path,text);write(`${dir}/after-root-verification.md`,text,{flag:'wx'});
const content=itemHashGuard(text),checks={};
for(const tool of ['precheck','rendercheck']){
 const command=tool==='precheck'?['node','tools/tsx-run.mjs','tools/precheck.mts',path]:['node','tools/rendercheck.mjs',path];
 const r=spawnSync(command[0],command.slice(1),{encoding:'utf8',maxBuffer:4*1024*1024});
 checks[tool]={command,exit_code:r.status,checked_at:new Date().toISOString(),content_sha256:content,output:r.stdout+r.stderr};
 write(`${dir}/${tool}.out`,checks[tool].output);if(r.status!==0)throw Error(checks[tool].output);
}
const layout=spawnSync('node',['tools/proof-layout.mjs',path],{encoding:'utf8'});write(`${dir}/final-proof-layout.out`,layout.stdout+layout.stderr);if(layout.status!==0)throw Error(layout.stdout+layout.stderr);
const marker=`${run}:${id}:step3-coordinate-typing-correction`,correction='The underlying coordinate index set is explicitly zero-based, conventional labels1..d are bijectively mapped to indices0..d-1, and barycentric vertex labels0..d remain distinct. Every reference simplex point, vertex, affine map and geometry interface is unchanged.';
const evidence=`\n${id}: ${correction}\nRun ${run}; original pre-edit group ${claim.group}; current canonical hash ${content}.\nActual same-reviewer proof repair and both ALE-use reviews: ${base}/step3-reference-simplex65-repair-report.json. Root checked the coordinate-label bijection defines exactly the same positivity and sum constraints and all d coordinate unit functions. The declared old/current373-item closure retains the same geometry, with no consumer edits. Actual local precheck/rendercheck and final proof-layout pass. Original native escalation remains historical; no fresh native execution, audit, judgment or gate credit.\n`;
const lock='research/.published-consumer-ledger.lock';mkdirSync(lock);
try{const ledger='research/published-consumer-supplier-ledger.md',old=read(ledger,'utf8');if(old.includes(`<!-- local-published-repair:${marker}:begin -->`))throw Error('Duplicate marker');write(ledger,old+`\n<!-- local-published-repair:${marker}:begin -->${evidence}<!-- local-published-repair:${marker}:end -->\n`);}finally{rmSync(lock,{recursive:true});}
const receipt={version:1,kind:'recorded-local-published-repair',id,run,group:claim.group,correction,content_sha256:content,before_file,before_raw_sha256:sha(before),pre_sha256:claim.pre_sha256,recorded_at:new Date().toISOString(),ledger_marker:marker,ledger_sha256:sha(evidence),local_checks:checks};
write(receiptPath,JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});
const policy=recordedPublishedRepair(process.cwd(),id,read(path,'utf8'),receiptPath);if(!policy.ok)throw Error(JSON.stringify(policy));
write(`${dir}/root-local-integration.json`,JSON.stringify({run,at:new Date().toISOString(),receipt:receiptPath,policy,normalization:{before_raw_sha256:sha(raw),after_raw_sha256:sha(text),author:'/root',scope:'Only stale verification replaced and statement provenance marked ai-altered for the actual Definition adaptation. Root made no body or other frontmatter change.'},native_coverage_credit:false},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({receipt:receiptPath,policy}));

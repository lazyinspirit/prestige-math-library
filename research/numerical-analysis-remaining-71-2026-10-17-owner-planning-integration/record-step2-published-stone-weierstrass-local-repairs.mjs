import {readFileSync as read,writeFileSync as write,existsSync as exists,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {itemHashGuard} from '../../tools/item-hash.mjs';
import {recordedPublishedRepair} from '../../tools/published-repair-policy.mjs';
const run='numerical-analysis-remaining-71-2026-10-17', dir=`research/${run}-owner-planning-integration`;
const specs=[
 ['lem-uniform-closure-of-a-real-function-algebra-is-a-lattice','scope55-stone-weierstrass-owner',`${dir}/scope55-published-before/items/lem-uniform-closure-of-a-real-function-algebra-is-a-lattice.md`,'Replace unsupported approximating-sequence and diagonal selections with explicit fixed-epsilon finite algebra witnesses and a single polynomial approximant, preserving the choice-free lattice Statement.'],
 ['thm-real-stone-weierstrass-for-compact-metric-spaces','scope55-stone-weierstrass-owner',`${dir}/scope55-published-before/items/thm-real-stone-weierstrass-for-compact-metric-spaces.md`,'Use the covers indexed by all admissible interpolants and all qualifying finite maxima, with only finite representative selection, preserving the original choice-free compact-metric Stone-Weierstrass Statement.']
];
const sha=x=>createHash('sha256').update(x).digest('hex');
const claims=read(`research/${run}-step3-published-claims.jsonl`,'utf8').trim().split('\n').map(JSON.parse);
const out=`${dir}/step2-published-stone-weierstrass-local-repairs`;mkdirSync(out,{recursive:true});
const results=[];
for(const [id,group,before_file,correction] of specs){
 const path=`items/${id}.md`, receiptPath=`${out}/${id}.json`, raw=read(path,'utf8');
 if(exists(receiptPath))throw Error(`Existing receipt, do not overwrite ${id}`);
 const claim=claims.find(x=>x.id===id);const before=read(before_file,'utf8');
 if(claim?.group!==group||claim.pre_sha256!==itemHashGuard(before))throw Error('Claim mismatch '+id);
 if(!exists(`${out}/${id}-before-owner-normalization.md`))write(`${out}/${id}-before-owner-normalization.md`,raw,{flag:"wx"});
 let text=raw;
 text=text.replace(/(^\d+\.\d+ [\s\S]*?)(?=\n\d+\.\d+ |\n## |(?![\s\S]))/gm,block=>block.trim().split(/\r?\n/).map(x=>x.trim()).join(' ')+'\n\n');
 text=text.replace(/\$\$([\s\S]*?)\$\$/g,(full,math)=>{if(/(?<!\\)%/.test(math))throw Error('TeX comment');return '$$'+math.split(/\r?\n/).join(' ').trim()+'$$';});
 if(text.replace(/\s+/g,' ')!==raw.replace(/\s+/g,' '))throw Error('Mathematical text changed during display formatting');
 if(id==='lem-uniform-closure-of-a-real-function-algebra-is-a-lattice'){
  const map={'2.1':'1.2','3.1':'2.1'};
  text=text.replace(/^(2\.1|3\.1) /gm,(_,x)=>map[x]+' ').replace(/\b([Ss]tep) (2\.1|3\.1)\b/g,(_,w,x)=>w+' '+map[x]);
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
write(`${dir}/step2-published-stone-weierstrass-local-repairs.json`,JSON.stringify({version:1,run,recorded_at:new Date().toISOString(),actual_repairs:results,native_gate_credit:false},null,2)+'\n');
console.log(JSON.stringify(results,null,2));

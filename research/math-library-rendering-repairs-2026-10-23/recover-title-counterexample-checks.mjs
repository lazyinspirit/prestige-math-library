// Focused evidence recovery for two unchanged-body legacy counterexamples.
// Preserve the failed receipts; run actual checks, never manufacture a proof.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {itemHashGuard,stripVerification} from '../../tools/item-hash.mjs';
import {recordedPublishedRepair} from '../../tools/published-repair-policy.mjs';
const dir='research/math-library-rendering-repairs-2026-10-23';
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const results=[];
for(const id of ['cex-nilpotent-polynomial-data-invisible-to-zero-locus','cex-regular-bijection-not-isomorphism-cusp']){
 const file=`items/${id}.md`,rp=`${dir}/receipts/${id}.json`;
 const source=fs.readFileSync(file,'utf8'),raw=fs.readFileSync(rp,'utf8'),receipt=JSON.parse(raw);
 const prior=recordedPublishedRepair(process.cwd(),id,source,rp);
 if(prior.ok){results.push({id,status:'already-valid'});continue;}
 if(prior.reason!=='missing current successful local precheck check')throw Error(prior.reason);
 const before=fs.readFileSync(receipt.before_file,'utf8');
 if(sha(before)!==receipt.before_raw_sha256||itemHashGuard(source)!==receipt.content_sha256)throw Error('Source mismatch');
 if(stripVerification(source).replace(/^title:[^\n]*\n/m,'')!==stripVerification(before).replace(/^title:[^\n]*\n/m,''))throw Error('Not title only');
 const historical=`${dir}/receipt-history/${id}-${sha(raw)}.json`;
 if(!fs.existsSync(historical))fs.writeFileSync(historical,raw,{flag:'wx'});
 if(fs.readFileSync(historical,'utf8')!==raw)throw Error('History mismatch');
 const updated=source.replace(/^  precheck: pass$/m,'  precheck: n/a');
 if(itemHashGuard(updated)!==receipt.content_sha256||source===updated)throw Error('Unexpected metadata');
 const input=`${dir}/recording-inputs/${id}-${sha(updated)}.md`;
 if(!fs.existsSync(input))fs.writeFileSync(input,updated,{flag:'wx'});
 // Evidence metadata only; the mathematical carrier and status are exact.
 if(fs.readFileSync(file,'utf8')!==source)throw Error('Source raced');
 fs.writeFileSync(file+'.receipt-recovery',updated,{flag:'wx'});fs.renameSync(file+'.receipt-recovery',file);
 const execute=(name,args)=>{
  const p=spawnSync(process.execPath,args,{encoding:'utf8',maxBuffer:16*1024*1024,env:{...process.env,TMPDIR:path.resolve(dir,'runtime-cache')}});
  const c={input_file:input,input_raw_sha256:sha(updated),command:['node',...args],exit_code:p.status,output:(p.stdout??'')+(p.stderr??''),checked_at:new Date().toISOString(),content_sha256:itemHashGuard(updated)};
  const cp=`${dir}/checks/${id}--root-recovery-${name}.json`;fs.writeFileSync(cp,JSON.stringify(c,null,2)+'\n');
  if(p.status!==0)throw Error(c.output);if(fs.readFileSync(file,'utf8')!==updated)throw Error('Source raced');return c;
 };
 receipt.local_checks.precheck=execute('precheck',['tools/tsx-run.mjs','tools/precheck.mts',file,'--json']);
 receipt.local_checks.rendercheck=execute('rendercheck',['tools/rendercheck.mjs',file]);
 receipt.proof_layout=execute('proof-layout',['tools/proof-layout.mjs',file]);
 receipt.recorded_at=new Date().toISOString();
 receipt.check_evidence_recovery={previous_receipt:historical,previous_receipt_sha256:sha(raw),reason:'Actual structured not-applicable phase-proof precheck for an unchanged-body title-only legacy counterexample; no whole-item proof audit.'};
 if(fs.readFileSync(rp,'utf8')!==raw)throw Error('Receipt raced');
 fs.writeFileSync(rp+'.recovery',JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});fs.renameSync(rp+'.recovery',rp);
 const check=recordedPublishedRepair(process.cwd(),id,updated,rp);if(!check.ok)throw Error(check.reason);
 results.push({id,status:'valid',previous_receipt:historical,current_receipt:rp,mathematical_content_unchanged:true,publication_status_unchanged:true});
}
const out={checked_at:new Date().toISOString(),results};
fs.writeFileSync(`${dir}/root-title-counterexample-check-recovery.json`,JSON.stringify(out,null,2)+'\n');
console.log(JSON.stringify(out));

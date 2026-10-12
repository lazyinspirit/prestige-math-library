import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { loadStep3,itemHash,itemInputPaths,itemDecision } from '../../../tools/step3-decisions.mjs';
const run='frontier-44-special-representation-examples-28';
const out=`research/${run}-owner-crash-recovery-20261010T1736/constructible-current-recovery`;
const prior=JSON.parse(readFileSync(`research/${run}-owner-step3-constructible-point-binding-round1/final-actual-binding.json`));
const snap=loadStep3(process.cwd(),run);
const hash=p=>createHash('sha256').update(readFileSync(p)).digest('hex');
const rows=prior.subjects.map(r=>{
 const x=snap.items.get(r.id); const d=itemDecision(snap,r.id);
 return {id:r.id,page:x.page.id,batch:x.page.batch,actual_raw_sha256:hash(r.path),actual_native_input_sha256:itemHash(snap,r.id),current_bookkeeping_closed:d.closed,current_decision:d.decision,current_reason:d.reason,input_paths:itemInputPaths(snap,r.id).map(p=>({path:p.replace(process.cwd()+'/', ''),raw_sha256:hash(p)}))};
});
writeFileSync(`${out}/native-input-current-guards.json`,JSON.stringify({version:1,run,reviewer:'/root/repair_step3_constructible_current_recovery',at:new Date().toISOString(),mechanical_hash_binding_only:true,rows},null,2)+'\n');
console.log(JSON.stringify(rows.map(({id,page,current_bookkeeping_closed})=>({id,page,current_bookkeeping_closed}))));

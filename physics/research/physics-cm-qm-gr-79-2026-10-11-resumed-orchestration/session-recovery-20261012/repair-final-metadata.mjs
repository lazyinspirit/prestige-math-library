import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { loadStep3, itemHash } from '../../../tools/physics-support/frontier-snapshot.mjs';
import { step1Decision } from '../../../tools/physics-support/step1-decisions.mjs';
const root=process.cwd(), run='physics-cm-qm-gr-79-2026-10-11';
const dest=path.join(root,'research',run+'-resumed-orchestration/session-recovery-20261012');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const write=(p,d)=>fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');
const state=read(path.join(root,'.physics-autopilot',run,'state.json'));
if(Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt))throw Error('Native writer active');
const old=loadStep3(root,run), rows=[];
for(const id of old.items.keys()){
 const decision=step1Decision(old,id);
 if(!decision.closed)throw Error('Prior readiness not current: '+id);
 rows.push({id,prior:decision.row,hash:itemHash(old,id,decision.row.dependencies)});
}
fs.mkdirSync(path.join(dest,'before'),{recursive:true});
const changed=[];
function archive(p){const bytes=fs.readFileSync(path.join(root,p));const out=path.join(dest,'before',p);fs.mkdirSync(path.dirname(out),{recursive:true});if(fs.existsSync(out))throw Error('Existing archive: '+p);fs.writeFileSync(out,bytes);return sha(bytes);}
function replace(p,action){const before=archive(p);action(path.join(root,p));changed.push({path:p,before_sha256:before,after_sha256:sha(fs.readFileSync(path.join(root,p)))});}
const source='pthm-cm13-hamiltonian-field-integrates-the-model-equations';
const raw=fs.readFileSync(path.join(root,'items',source+'.md'),'utf8');
const statement=raw.split('## Statement\n')[1].split('\n## ')[0].trim();
const ids=['pthm-cm14-hamilton-jacobi-characteristics','pthm-cm14-action-angle','pthm-cm14-adiabatic-invariance','cex-cm14-free-particle-noncompact-fibre'];
replace('research/'+run+'-batch-30.proof-contracts.json',p=>{
 const d=read(p);let count=0;
 for(const id of ids)for(const c of d.contracts[id].citations)if(c.source===source){
  // The consumers use the unchanged potential-branch identification, not the corrected componentwise additive freedom in clause 4.
  const before=c.quote.split('4. **(when is the forced field Hamiltonian?)**')[0];
  if(before!==statement.split('4. **(when is the forced field Hamiltonian?)**')[0])throw Error('Relevant supplier clauses changed: '+id);
  c.quote=statement;count++;
 }
 if(count!==4)throw Error('Expected four exact quote records');write(p,d);
});
for(const p of ['research/'+run+'-batch-14.pages.json','research/plan-spec.json'])replace(p,file=>{
 const d=read(file), pages=Array.isArray(d)?d:d.pages;
 const page=pages.find(p=>p.id==='cm-math-kam');
 if(!page||page.requires.includes('the-exponential-function'))throw Error('Unexpected page prerequisites');
 page.requires.push('the-exponential-function');write(file,d);
});
replace('library/non-relativistic-classical-mechanics-mathematics/cm-math-kam.md',file=>{
 const raw=fs.readFileSync(file,'utf8');
 if(!/^requires: \[.*\]$/m.test(raw))throw Error('Unexpected requires format');
 fs.writeFileSync(file,raw.replace(/^(requires: \[.*)\]$/m,'$1, "the-exponential-function"]'));
});
const current=loadStep3(root,run), refreshed=[];
for(const row of rows.sort((a,b)=>current.items.get(a.id).item.dependency_level-current.items.get(b.id).item.dependency_level)){
 const hash=itemHash(current,row.id,row.prior.dependencies);
 if(hash===row.hash)continue;
 const p='research/'+run+'-step1-'+row.id+'.json';
 if(JSON.stringify(read(path.join(root,p)))!==JSON.stringify(row.prior))throw Error('Readiness row changed: '+row.id);
 const before=archive(p);
 write(path.join(root,p),{...row.prior,sha256:hash,at:new Date().toISOString(),reason:row.prior.reason+' Mechanical currency only: declare the already-used exponential supplier page for cm-math-kam; item statements, definitions, proofs and dependencies unchanged. Archived prior current readiness and exact before/after evidence in '+path.relative(root,dest)+'. No new substantive acceptance.'});
 refreshed.push({id:row.id,prior_sha256:row.hash,current_sha256:hash,before_raw_sha256:before,after_raw_sha256:sha(fs.readFileSync(path.join(root,p)))});
}
for(const row of rows)if(!step1Decision(current,row.id).closed)throw Error('Final readiness failed: '+row.id);
write(path.join(dest,'repair-receipt.json'),{version:1,run,at:new Date().toISOString(),scope:'Final gate metadata only: four stale full-Statement quotes and already-used exponential page prerequisite',source_sha256:sha(raw),failed_items:ids,unchanged_relevant_source_clauses:true,operative_item_carriers_unchanged:true,changed,refreshed,prior_current:rows.length,current_ready:rows.length,repair_cycle:1,cap:2,no_native_history_or_acceptance_changes:true});
console.log(JSON.stringify({current_ready:rows.length,refreshed:refreshed.length,changed:changed.length,receipt:path.relative(root,path.join(dest,'repair-receipt.json'))}));

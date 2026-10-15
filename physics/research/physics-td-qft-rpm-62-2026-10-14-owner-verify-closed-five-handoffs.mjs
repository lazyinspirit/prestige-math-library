import fs from 'node:fs';import crypto from 'node:crypto';
import {itemHashGuard} from '../../tools/physics-support/item-hash.mjs';
const run='physics-td-qft-rpm-62-2026-10-14',dir=`research/${run}-step5-v2`,read=p=>JSON.parse(fs.readFileSync(p)),sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const progress=read(`${dir}/impact-initial-1-progress.json`),state=read(`.physics-autopilot/${run}/state.json`);
if(!progress.complete||progress.activeMaintenance||Object.values(state.dispatches).some(x=>x.startedAt&&!x.endedAt))throw Error('Not drained native closure');
const ref=progress.closed_receipt;if(sha(fs.readFileSync(ref.path))!==ref.sha256)throw Error('Closed receipt changed');
const closed=read(ref.path);if(closed.run!==run||closed.errors.length)throw Error('Wrong actual native closure');
for(const [path,hash]of Object.entries(closed.evidence))if(sha(fs.readFileSync(path))!==hash)throw Error('Bound closure evidence changed: '+path);
const targets={'def-qft-fock-and-test-spaces':'1','lem-qft-fock-ccr-car':'1','pthm-td-clapeyron-local':'1','thm-qft-example-finite-dyson-unitarity':'2','pthm-qft-free-fock-statistics':'2','pthm-qft-lattice-gauge-existence':'3','pthm-td-reservoir-minimum-principles':'3'},rows=[];
for(const [id,unit]of Object.entries(targets)){
 const path=`${dir}/step5-v2-impact-initial-pass-2-r1-u${unit}.json`,report=read(path),dispatch=read(`research/${run}-dispatch/alpha-repair-step5-v2-impact-initial-pass-2-r1-u${unit}.result.json`),review=report.reviews.find(x=>x.id===id),retained=closed.reviews.find(x=>x.id===id),text=fs.readFileSync(`items/${id}.md`,'utf8'),guard=itemHashGuard(text);
 if(dispatch.ok!==true||dispatch.model!=='gpt-6.1-sol'||dispatch.provider_effort!=='high'||review?.uncertain!==false||!['unaffected','repaired'].includes(review.disposition)||guard!==review.post_sha256||guard!==closed.post[id]||JSON.stringify(review)!==JSON.stringify(retained))throw Error('Not genuine completed current native target: '+id);
 rows.push({id,unit,report:path,native_dispatch_ended_at:dispatch.ended_at,disposition:review.disposition,current_raw_sha256:sha(fs.readFileSync(`items/${id}.md`)),current_item_guard:guard,native_review_context_sha256:review.review_context_sha256,context_currency_authority:'Actual engine advanceImpact closure complete, pending set empty; exact final review retained in closed receipt. No independent Root context graph calculation.'});
}
const result={run,at:new Date().toISOString(),native_closed_receipt:ref,bound_evidence_verified:Object.keys(closed.evidence).length,rows,metadata_currency_only:true,independent_scientific_review:false,native_transition:false,recertification:false};
const path=`research/${run}-owner-closed-five-handoff-currency.json`;fs.writeFileSync(path,JSON.stringify(result,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({path,targets:rows.length,bound_evidence_verified:result.bound_evidence_verified,all_current_sources_match:true,native_context_closure_complete:true}));

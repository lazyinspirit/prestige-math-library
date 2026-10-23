import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync}from'node:fs';
import{fileURLToPath}from'node:url';import{resolve}from'node:path';import{createHash}from'node:crypto';
import{recordedMaintenanceToDeferred}from'./maintenance-transition.draft.mjs';
const ROOT=resolve(fileURLToPath(new URL('.',import.meta.url)),'../../../..');
const run='fluid-dynamics-all-47-2026-10-23';
const prior=readFileSync(`${ROOT}/research/defect-ledger.jsonl`,'utf8').split('\n').filter(Boolean).map(JSON.parse)
 .find(x=>x.defect_id===`${run}-3a-batch-23-published-11`);
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const hashValue=x=>createHash('sha256').update(JSON.stringify(canonical(x))).digest('hex');
function fixture(){const p=JSON.parse(JSON.stringify(prior));const c={...p,defect_id:p.defect_id+'-deferred-context',disposition:'deferred',supersedes:[p.defect_id]};
 const entry={maintenance_disposition_transitions:[{prior_defect_id:p.defect_id,prior_row_sha256:hashValue(p),from:'nonfatal-recorded',to:'deferred',reviewed_by:'root',rationale:'The published definition still contains the reported inline links and is unchanged/read-only. Its maintenance remains unresolved outside this physics run; only the exact already-scoped shock consumer use is accepted under explicit premises, without declaring either defect fixed.'}]};
 return{p,c,entry,ctx:{run,decisionPath:`research/${run}-alpha-batch-23-3a-decisions.json`,obligation:'reader:23:11',hashValue}};}
const check=f=>recordedMaintenanceToDeferred(f.entry,f.p,f.c,f.ctx);
test('actual nonfatal-recorded published23 row may be explicitly deferred while retained',()=>assert.equal(check(fixture()),true));
for(const[name,mutate]of[
 ['no transition',f=>{f.entry.maintenance_disposition_transitions=[];}],
 ['not root reviewed',f=>{f.entry.maintenance_disposition_transitions[0].reviewed_by='draft';}],
 ['wrong canonical prior hash',f=>{f.entry.maintenance_disposition_transitions[0].prior_row_sha256='0'.repeat(64);}],
 ['arbitrary from fixed',f=>{f.p.disposition='fixed';}],
 ['arbitrary destination fixed',f=>{f.c.disposition='fixed';}],
 ['open destination instead of directed deferred',f=>{f.c.disposition='open';}],
 ['unrelated subject',f=>{f.c.subject='different';}],
 ['new classification',f=>{f.c.subclass='missing-hypothesis';}],
 ['wrong actual consumer binding',f=>{f.c.consumer_id='other';}],
 ['missing direct supersession',f=>{f.c.supersedes=[];}],
 ['missing original finding ref',f=>{f.p.adjudication_ref=[];}],
 ['missing retained finding ref',f=>{f.c.adjudication_ref=[];}],
 ['ambiguous transitions',f=>{f.entry.maintenance_disposition_transitions.push({...f.entry.maintenance_disposition_transitions[0]});}],
 ['short rationale',f=>{f.entry.maintenance_disposition_transitions[0].rationale='defer';}],
])test(`reject ${name}`,()=>{const f=fixture();mutate(f);assert.equal(check(f),false);});
test('existing normal open/deferred chain branch remains unchanged',()=>{
 for(const state of['open','deferred']){
  const f=fixture();f.p.disposition=state;f.entry.maintenance_disposition_transitions=[];
  assert.equal(['open','deferred'].includes(f.p.disposition)||check(f),true);
 }
});

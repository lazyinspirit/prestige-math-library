// Simulated root receipts exist ONLY in memory. No production approval/seal is
// emitted. Actual 3/12 records are read from the local draft fixture.
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {sharedCausalRepair,digest,hashObject,decisionCore} from './shared-causal-repair.draft.mjs';
const fixture=JSON.parse(readFileSync(new URL('./test-inputs.actual-records.json',import.meta.url)));
const clone=x=>JSON.parse(JSON.stringify(x));
function setup(mutator=()=>{}){
 const f=clone(fixture),e=f.entryTemplate;
 const primaryPath=`research/${f.run}-alpha-batch-3-3a-decisions.json`;
 const causalPath=e.causal_repair_receipt.path;
 const receiptPath=`research/${f.run}-step3-cross-group-causal-repairs.json`;
 const causal={...f.causalTemplate,accepted_by:'root',status:'IN-MEMORY TEST SIMULATION ONLY'};
 f.input[causalPath]=JSON.stringify(causal);
 e.canonical_row_sha256=hashObject(f.merged);
 e.current_carrier_sha256=hashObject(f.currentCarrier);
 e.primary.decision_guard.sha256=digest(f.input[primaryPath]);
 e.primary.decision_core_sha256=hashObject(decisionCore(f.primary));
 for(const a of e.aliases)a.decision_core_sha256=hashObject(decisionCore(f.aliases.find(x=>x.obligation===a.obligation)));
 e.causal_repair_receipt.sha256=digest(f.input[causalPath]);
 const receipt={version:1,run:f.run,reviewed_by:'root',kind:'cross-group-shared-causal-repair',repairs:[e]};
 const state={f,e,receipt};mutator(state);
 f.input[receiptPath]=JSON.stringify(receipt);
 for(const a of f.aliases)a.shared_causal_receipt_sha256=digest(f.input[receiptPath]);
 return {f,e,receipt,check:(index=0)=>{
  const a=f.aliases[index];const s=JSON.parse(f.input[e.consumer_scope_guard.path]);
  const target=[...s.reader_findings,...s.refuter_findings].find(x=>x.obligation===a.obligation);
  return sharedCausalRepair({run:f.run,prior:f.primary,decision:a,
   target:{...target,batch:'12',route:a.route},canonicalRow:f.merged,
   currentCarrier:f.currentCarrier,readBytes:p=>Buffer.from(f.input[p])});
 }};
}
test('actual3 touched plus actual12 reader/refuter share one simulated canonical row',()=>{
 const s=setup();assert.equal(s.check(0),true);assert.equal(s.check(1),true);
 const scope=JSON.parse(s.f.input[s.e.consumer_scope_guard.path]);
 assert.equal(scope.reader_findings.find(x=>x.obligation==='reader:12:1').severity,'nonfatal');
 assert.equal(scope.refuter_findings.find(x=>x.obligation==='refuter:12:1').severity,'fatal');
});
for(const [name,mutate] of [
 ['receipt not root reviewed',s=>{s.receipt.reviewed_by='draft';}],
 ['not one cause',s=>{s.e.one_actual_defect=false;}],
 ['unrelated primary route',s=>{s.f.primary.route='reader';}],
 ['same group relabel',s=>{s.e.aliases[0].batch='3';}],
 ['wrong causal subject',s=>{s.e.subject='other-subject';}],
 ['extra unreviewed alias',s=>{s.e.aliases.push({...s.e.aliases[0],obligation:'reader:13:1'});}],
 ['missing snapshot guard',s=>{s.e.immutable_guards=s.e.immutable_guards.filter(x=>!x.path.endsWith('step3-hash-12-pre.json'));}],
 ['missing original ledger guard',s=>{s.e.original_ledger_row_guards.pop();}],
 ['missing final science evidence',s=>{s.e.final_scientific_reports=[];}],
 ['different canonical successor',s=>{s.f.merged.supersedes.pop();s.e.canonical_row_sha256=hashObject(s.f.merged);}],
 ['lost original adjudication ref',s=>{s.f.merged.adjudication_ref.pop();s.e.canonical_row_sha256=hashObject(s.f.merged);}],
 ['explicit pointer absent',s=>{delete s.f.aliases[0].same_defect_as;}],
 ['changed frozen report bytes',s=>{s.f.input[s.e.immutable_guards[0].path]+=' ';}],
 ['stale current supplier carrier',s=>{s.f.currentCarrier.item_sha256='f'.repeat(64);}],
 ['rewritten original observed source',s=>{s.f.aliases[0].observed_source.item_sha256='f'.repeat(64);}],
 ['unaccepted causal repair receipt',s=>{
   const c=JSON.parse(s.f.input[s.e.causal_repair_receipt.path]);c.accepted_by=null;
   s.f.input[s.e.causal_repair_receipt.path]=JSON.stringify(c);
   s.e.causal_repair_receipt.sha256=digest(s.f.input[s.e.causal_repair_receipt.path]);
 }],
])test(`reject ${name}`,()=>assert.equal(setup(mutate).check(0),false));
test('reject stale root receipt pointer',()=>{
 const s=setup();s.f.aliases[0].shared_causal_receipt_sha256='0'.repeat(64);assert.equal(s.check(),false);
});

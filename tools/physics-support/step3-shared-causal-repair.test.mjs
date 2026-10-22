// Simulated root approvals exist only in memory; no production record is read.
import test from 'node:test';
import assert from 'node:assert/strict';
import {sharedCausalRepair,digest,hashObject,decisionCore} from './step3-shared-causal-repair.mjs';
// A deliberately synthetic producer/consumer fixture; approvals exist in memory.
function makeFixture(){
 const run='demo',subject='def-supplier',consumer='thm-consumer',mergedId='merged-defect',ids=['producer-defect','duplicate-defect'],input={};
 const path=name=>`research/${run}-${name}.json`,bind=(p,value)=>{input[p]=JSON.stringify(value);return{path:p,sha256:digest(input[p])};};
 const frozen=(obligation,severity)=>({obligation,id:subject,defect:'missing-hypothesis',severity,location:'Definition',subject_type:'in-run-dependency',producer_batch:'3',consumer_id:consumer,observed_source:{snapshot:'current',item_sha256:'a'.repeat(64)},observed_sha256:'b'.repeat(64),dependency_path:[{id:consumer},{id:subject}]});
 const rf=frozen('reader:12:1','nonfatal'),ff=frozen('refuter:12:1','fatal');
 const primary={obligation:`touched:3:${subject}`,id:subject,route:'touched',verdict:'amended_repair',repair_confidence:1,defect_ids:[mergedId]};
 const aliases=[rf,ff].map((f,i)=>({...f,route:i?'flagged':'reader',verdict:'confirmed_fatal',repair_confidence:1,defect_ids:[mergedId],same_defect_as:primary.obligation,same_defect_evidence:'The producer repair and these two frozen observations concern the same missing normalization hypothesis. The exact source repair and all consumer checks are recorded, while the original severities and raw source observations remain preserved.'}));
 const merged={defect_id:mergedId,run,subject,caught_at_stage:'3a-adjudicate',disposition:'fixed',severity:'fatal',repair_confidence:1,supersedes:ids,adjudication_ref:[{path:path('alpha-batch-3-3a-decisions'),obligation:primary.obligation},...aliases.map(a=>({path:path('alpha-batch-12-3a-decisions'),obligation:a.obligation}))]};
 const scope3=bind(path('step3-scope-3'),{run,batch:'3',touched:[subject]}),scope12=bind(path('step3-scope-12'),{run,batch:'12',reader_findings:[rf],refuter_findings:[ff]});
 const originalGuards=ids.map((id,i)=>bind(path(`old-row-${i}`),{defect_id:id,run,subject}));
 const decisionGuard=bind(path('alpha-batch-3-3a-decisions'),{decisions:[primary]});
 const immutable=[];for(const b of ['3','12'])for(const name of [`reader-findings-${b}`,`refute-${b}`,`step3-hash-${b}-pre`,`step3-hash-${b}-post`])immutable.push(bind(path(name),{fixture:name}));
 const finalReports=[bind(path('scientific-resolution'),{fixture:'science'}),bind(path('final-consumers'),{fixture:'consumers'})];
 const causalTemplate={run,subject,one_actual_defect:true,merged_original_ids:ids,primary_obligation:primary.obligation,alias_obligations:aliases.map(a=>a.obligation),same_literal_fault:aliases[0].same_defect_evidence};
 const causalPath=path('causal-acceptance');input[causalPath]=JSON.stringify(causalTemplate);
 const entryTemplate={canonical_defect_id:mergedId,subject,merged_original_ids:ids,one_actual_defect:true,causal_statement:aliases[0].same_defect_evidence,original_ledger_row_guards:originalGuards,primary:{batch:'3',obligation:primary.obligation,route:'touched',scope_guard:scope3,decision_guard:decisionGuard},aliases:aliases.map((a,i)=>({batch:'12',obligation:a.obligation,route:a.route,consumer_id:consumer,frozen_finding_sha256:hashObject(i?ff:rf)})),consumer_scope_guard:scope12,immutable_guards:immutable,causal_repair_receipt:{path:causalPath,sha256:null},final_scientific_reports:finalReports};
 return{run,subject,merged,primary,aliases,currentCarrier:{item_sha256:'c'.repeat(64),contract_sha256:'d'.repeat(64),manifest_sha256:'e'.repeat(64)},input,entryTemplate,causalTemplate};
}
const fixture=makeFixture();

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
test('exact producer repair and consumer observations share one simulated canonical row',()=>{
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

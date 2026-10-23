// Actual 3/4 immutable observations; root approvals simulated only in memory.
import test from 'node:test';import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';import {fileURLToPath} from 'node:url';import {resolve} from 'node:path';
import {sharedCausalRepair,digest,hashObject,decisionCore} from './step3-shared-causal-repair.readiness4.draft.mjs';
const ROOT=resolve(fileURLToPath(new URL('.',import.meta.url)),'../../../..');
const run='fluid-dynamics-all-47-2026-10-23',subject='def-fd-quantity-and-frame-conventions';
const path=n=>`research/${run}-${n}.json`,clone=x=>JSON.parse(JSON.stringify(x));
function setup(mutate=()=>{},unbound=false){
 const input={},read=p=>readFileSync(`${ROOT}/${p}`),load=p=>JSON.parse(read(p));
 const bind=(p,x)=>{input[p]=typeof x==='string'?x:JSON.stringify(x);return{path:p,sha256:digest(input[p])};};
 const real=p=>bind(p,read(p).toString());
 const scopes=[3,4].map(b=>load(path(`step3-scope-${b}`)));
 const frozen=scopes[1].reader_findings.find(x=>x.obligation==='reader:4:1');
 if(unbound){frozen.observation_basis='unbound';frozen.observed_sha256=null;delete frozen.observed_source;}
 const original=read('research/defect-ledger.jsonl').toString().split('\n').filter(Boolean).map(JSON.parse)
   .find(x=>x.defect_id===`${run}-3a-batch-4-historical-supplier-readiness`);
 const pd=load(path('alpha-batch-3-3a-decisions')),ad=load(path('alpha-batch-4-3a-decisions'));
 const primary=clone(pd.decisions.find(x=>x.obligation===`touched:3:${subject}`));
 const alias=clone(ad.decisions.find(x=>x.obligation==='reader:4:1'));
 const id=`${original.defect_id}-canonical-reference`;
 primary.defect_ids=primary.defect_ids.map(x=>x===original.defect_id?id:x);
 alias.defect_ids=[id];alias.same_defect_as=primary.obligation;
 alias.same_defect_evidence='The exact producer repair and original reader4 historical readiness finding concern one false missing-readiness sentence. The real dated readiness record and archived historical source establish that literal fault; current source removes it and all observations remain unchanged.';
 alias.owner_resolution=alias.same_defect_evidence;
 if(unbound){alias.observation_basis='unbound';alias.observed_sha256=null;delete alias.observed_source;alias.historical_delta_unknown=true;}
 const row={...original,defect_id:id,supersedes:[original.defect_id],adjudication_ref:[
  {path:path('alpha-batch-3-3a-decisions'),obligation:primary.obligation},
  {path:path('alpha-batch-4-3a-decisions'),obligation:alias.obligation}]};
 const currentCarrier={item_sha256:digest(read(`items/${subject}.md`)),contract_sha256:'a'.repeat(64),manifest_sha256:'b'.repeat(64)};
 input[`items/${subject}.md`]=read(`items/${subject}.md`).toString();
 const primaryGuard=bind(path('alpha-batch-3-3a-decisions'),{...pd,decisions:pd.decisions.map(x=>x.obligation===primary.obligation?primary:x)});
 const immutable=[];for(const b of [3,4])for(const n of [`reader-findings-${b}`,`refute-${b}`,`step3-hash-${b}-pre`,`step3-hash-${b}-post`])immutable.push(real(path(n)));
 const e={kind:'single-historical-readiness-reference',canonical_defect_id:id,subject,
  canonical_row_sha256:hashObject(row),merged_original_ids:[original.defect_id],one_actual_defect:true,causal_statement:alias.same_defect_evidence,
  original_ledger_row_guards:[bind(path('test-original-readiness-row'),original)],
  primary:{batch:'3',obligation:primary.obligation,route:'touched',scope_guard:bind(path('step3-scope-3'),scopes[0]),decision_guard:primaryGuard,decision_core_sha256:hashObject(decisionCore(primary))},
  aliases:[{batch:'4',obligation:alias.obligation,route:'reader',consumer_id:alias.consumer_id,frozen_finding_sha256:hashObject(frozen),decision_core_sha256:hashObject(decisionCore(alias))}],
  consumer_scope_guard:bind(path('step3-scope-4'),scopes[1]),immutable_guards:immutable,
  historical_source_guard:real(`research/${run}-owner-step2-escalations/before-root-metadata/items__${subject}.md`),
  ready_record_guard:real(path('step1-def-fd-smooth-motion')),
  final_scientific_reports:[real(`research/${run}-owner-step3-escalations/source3/round1-final-scientific-resolution.json`),real(`research/${run}-owner-step3-escalations/source3/local-momentum-context-final-freshness.json`)],current_carrier_sha256:hashObject(currentCarrier)};
 const causal={run,subject,accepted_by:'root',one_actual_defect:true,merged_original_ids:e.merged_original_ids,primary_obligation:primary.obligation,alias_obligations:[alias.obligation],same_literal_fault:alias.same_defect_evidence};
 e.causal_repair_receipt=bind(path('test-readiness-causal-acceptance'),causal);
 const receipt={version:1,run,reviewed_by:'root',kind:'cross-group-shared-causal-repair',repairs:[e]};
 const state={input,e,alias,primary,row,currentCarrier,receipt};mutate(state);
 const rp=path('step3-cross-group-causal-repairs');input[rp]=JSON.stringify(receipt);alias.shared_causal_receipt_sha256=digest(input[rp]);
 return sharedCausalRepair({run,prior:primary,decision:alias,target:{...frozen,route:'reader'},canonicalRow:row,currentCarrier,readBytes:p=>Buffer.from(input[p])});
}
test('actual bound reader4 reuses one nonfatal producer3 repair row',()=>assert.equal(setup(),true));
test('unbound simulation retains explicit unknown history without fabricating source binding',()=>assert.equal(setup(()=>{},true),true));
test('unbound simulation without unknown-history declaration rejects',()=>assert.equal(setup(s=>{s.alias.historical_delta_unknown=false;},true),false));
for(const [name,mutate] of [
 ['wrong alias',s=>{s.e.aliases[0].obligation='reader:5:1';}],
 ['fatal readiness reclassification',s=>{s.row.severity='fatal';s.e.canonical_row_sha256=hashObject(s.row);}],
 ['extra alias',s=>{s.e.aliases.push({...s.e.aliases[0],obligation:'refuter:4:1'});}],
 ['changed historical archive',s=>{s.input[s.e.historical_source_guard.path]+=' ';}],
 ['missing historical archive',s=>{delete s.e.historical_source_guard;}],
 ['stale readiness record',s=>{s.input[s.e.ready_record_guard.path]+=' ';}],
 ['current source not fixed',s=>{s.input[`items/${subject}.md`]+='The current supplier readiness record is missing.';}],
 ['stale source carrier',s=>{s.currentCarrier.item_sha256='f'.repeat(64);}],
 ['different original subject',s=>{s.row.subject='other';s.e.canonical_row_sha256=hashObject(s.row);}],
])test(`readiness4 rejects ${name}`,()=>assert.equal(setup(mutate),false));

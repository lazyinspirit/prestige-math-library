import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {loadStep3,itemHash,itemDecision,itemInputPaths} from '../../../tools/step3-decisions.mjs';
import {step3OwnerCreationClaim} from '../../../tools/step3-owner-creation.mjs';
import {yaml} from '../../../tools/pathway-lib.mjs';

const run='frontier-44-special-representation-examples-28';
const base=`research/${run}-owner-step3-mixed-hodge-filtration-round1`;
const out=`research/${run}-owner-crash-recovery-20261010T1736/mixedhodge-current-recovery`;
const sha=x=>createHash('sha256').update(x).digest('hex');
const ref=path=>({path,raw_sha256:sha(fs.readFileSync(path))});
const json=path=>JSON.parse(fs.readFileSync(path,'utf8'));
const write=(name,x)=>fs.writeFileSync(`${out}/${name}`,JSON.stringify(x,null,2)+'\n',{flag:'wx'});
const old=json(`${base}/final-actual-binding.json`);
const s=loadStep3(process.cwd(),run);
const own=old.current12_items_and4_manifests.filter(r=>r.path.startsWith('items/'));
const review=ref(`${out}/review.md`);
const owned=own.map(r=>{
  const id=r.path.slice(6,-3),claim=step3OwnerCreationClaim(s,id),decision=itemDecision(s,id);
  const receipt=`research/${run}-step3b-review-${id}.json`;
  if(claim.item_file_sha256!==r.current_raw_sha256)throw Error(`Owned carrier changed: ${id}`);
  return {id,page:claim.page,batch:claim.batch,actual_raw_sha256:claim.item_file_sha256,
    actual_claim_sha256:claim.claim_sha256,actual_native_input_sha256:itemHash(s,id),
    suggestion:'repaired',review_evidence:review,
    whole_sufficiency:'Current whole own Definition or Statement, Facts and supplied argument sufficient relative to declared local prerequisite interfaces; no recursive independent audit',
    original_repair_author:old.reviewer,current_reviewer:'/root/repair_step3_mixedhodge_current_recovery',
    historical_actual_binding:ref(`${base}/final-actual-binding.json`),
    current_ordinary_decision:decision,ordinary_rebind_required:!decision.closed,
    canonical_native_review:fs.existsSync(receipt)?{...ref(receipt),receipt:json(receipt)}:null};
});
const consumers=old.all36_actual_consumer_bindings.map(r=>{
  const text=fs.readFileSync(r.path,'utf8'),body=text.replace(/^---\n[\s\S]*?\n---/,'');
  const paras=body.split(/\n\s*\n/),supplierParas=paras.filter(p=>r.supplier_edges.some(id=>p.includes(id)));
  if(r.id==='lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree')
    supplierParas.push(...paras.filter(p=>p.startsWith('[F2]')||p.startsWith('2.1 ')));
  const labels=supplierParas.flatMap(p=>[...p.matchAll(/^\[([FALC]\d+)\]/gm)].map(m=>m[1]));
  const useParas=paras.filter(p=>/^\d+\.\d+\s/.test(p)&&labels.some(l=>new RegExp(`\\[[^\\]]*\\b${l}\\b`).test(p)));
  const raw=sha(text);
  return {id:r.id,depth:r.depth,supplier_edges:r.supplier_edges,path:r.path,
    actual_raw_sha256:raw,historical_raw_sha256:r.current_raw_sha256,
    unchanged_since_historical_binding:raw===r.current_raw_sha256,
    consumed_literal_paragraphs:[...new Set([...supplierParas,...useParas])],
    historical_use_trace:r.use_trace,
    historical_trace_attribution:old.reviewer,
    current_use_review_attribution:'/root/repair_step3_mixedhodge_current_recovery',
    current_verdict:'sufficient-preserved-consumed-interface',
    scope_limit:own.some(x=>x.path===r.path)?'Whole own argument plus actual consumer use, relative to typed suppliers':'Focused actual supplier use only; no independent acceptance of other arguments',
    independent_mathematical_owner_retained:true};
});

const graph=[];
for(const [id,{item}] of s.items){
  const path=`items/${id}.md`,text=fs.existsSync(path)?fs.readFileSync(path,'utf8'):'';
  const fm=text?yaml().parse(text.match(/^---\n([\s\S]*?)\n---/)?.[1]??''):{};
  graph.push({id,deps:[...new Set([...(item.deps??[]),...(fm.deps??[])])],
    citations:[...new Set([...text.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)].map(m=>m[1]))]});
}
const roots=['def-rational-mixed-hodge-structure','lem-deligne-splitting-of-a-mixed-hodge-structure'];
const reached=new Set(roots);
for(let changed=true;changed;){changed=false;for(const r of graph)if(!reached.has(r.id)&&r.deps.some(x=>reached.has(x))){reached.add(r.id);changed=true;}}
const expected=new Set(consumers.map(r=>r.id));
const newConsumers=[...reached].filter(id=>!roots.includes(id)&&!expected.has(id));
const removedConsumers=[...expected].filter(id=>!reached.has(id));
const citationOnly=graph.filter(r=>!reached.has(r.id)&&r.citations.some(id=>roots.includes(id))).map(r=>r.id);
if(newConsumers.length||removedConsumers.length||citationOnly.length)throw Error('Consumer scope changed');
const guards=[...new Set(own.flatMap(r=>itemInputPaths(s,r.path.slice(6,-3))))].sort().map(ref);
const direct=old.direct_prerequisite_current_guards.map(r=>({...ref(r.path),id:r.id,
  historical_raw_sha256:r.current_raw_sha256,matches_historical_final_binding:sha(fs.readFileSync(r.path))===r.current_raw_sha256,context_only:true}));
const historical=['final-actual-binding.json','handoff.json','source-reading.json','actual-source-passages.txt',
  'root-integration-round1/integration.json','proper-local-contractibility-round2/root-final-round2-integration/integration.json',
  'after-binding-consumer-chunk.json','after-binding-incoming-chunk.json'].map(n=>ref(`${base}/${n}`));
const sourceReading=json(`${base}/source-reading.json`);
const sources=sourceReading.sources.map(r=>({...r,original_reading_attribution:sourceReading.reviewer,
  successor_claim:'Historical retrieval/reading binding only; no new full-text fetch or complete-article reading claimed',
  cached_full_carrier_present:fs.existsSync(r.cached_full_carrier),
  actual_cached_full_carrier_sha256:fs.existsSync(r.cached_full_carrier)?sha(fs.readFileSync(r.cached_full_carrier)):null}));
const ledgerPath=`research/${run}-owner-codex-repair-round-limit.json`;
const ledger=json(ledgerPath);
const strictnessId='lem-morphisms-of-mixed-hodge-structures-are-strict';
const findRow=x=>{if(x&&typeof x==='object'){if(x[strictnessId]?.agent)return x[strictnessId];for(const v of Object.values(x)){const r=findRow(v);if(r)return r;}}return null;};
write('current-consumer-uses.json',{version:1,run,at:new Date().toISOString(),review_evidence:review,
  consumer_count:consumers.length,current_graph_new_consumers:newConsumers,current_graph_removed_consumers:removedConsumers,
  direct_citation_only:citationOnly,rows:consumers});
write('current-guards.json',{version:1,run,at:new Date().toISOString(),
  owned12_and_manifest4:old.current12_items_and4_manifests.map(r=>({...ref(r.path),historical_raw_sha256:r.current_raw_sha256,
    matches_historical_final_binding:sha(fs.readFileSync(r.path))===r.current_raw_sha256})),
  native_transitive_input_path_raw_guards:guards,direct_context_guards:direct,
  original36_consumer_raw_guards:consumers.map(r=>({id:r.id,path:r.path,raw_sha256:r.actual_raw_sha256})),
  ordinary_registration_requires_root_final_current_rehash:true});
write('current-recovery.json',{version:1,run,at:new Date().toISOString(),
  reviewer:'/root/repair_step3_mixedhodge_current_recovery',original_repair_and_reading_author:old.reviewer,
  status:'current-owned-proofs-and-original36-consumer-uses-sufficient-for-ordinary-bookkeeping',
  review_evidence:review,ready_for_ordinary_current_decision:owned,holds:[],
  history:historical,historical_source_reading:sources,
  original_round_history:old.repair_history,counter_reset:false,new_mathematical_repair_cycle:false,
  proper46_remaining_rounds:0,
  strictness_native_history:{ledger:ref(ledgerPath),original_ledger_row:findRow(ledger),
    canonical_native_receipt:owned.find(r=>r.id===strictnessId).canonical_native_review,
    fact:'Original ledger owner defect is retained; ledger omitted native_finding; actual current native receipt is accept; no historical escalation is fabricated'},
  all36_current_use_evidence:ref(`${out}/current-consumer-uses.json`),current_guards:ref(`${out}/current-guards.json`),
  whole_owned_items_reviewed:12,focused_consumers_reviewed:36,
  new_defects:[],canonical_writes:false,native_receipt_writes:false,gates_attempted:false,
  independent_audit:false,ordinary_rebinding_is_not_native_authorship_or_later_independent_acceptance:true});
console.log(JSON.stringify({ready:owned.length,stale:owned.filter(r=>r.ordinary_rebind_required).map(r=>r.id),consumers:consumers.length,
  changed_consumers:consumers.filter(r=>!r.unchanged_since_historical_binding).map(r=>r.id),direct_context_changes:direct.filter(r=>!r.matches_historical_final_binding).map(r=>r.id),
  report:`${out}/current-recovery.json`}));

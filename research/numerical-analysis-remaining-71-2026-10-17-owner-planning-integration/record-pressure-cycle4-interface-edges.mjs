import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {collect} from '../../tools/frontier-dependency-ledger.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`;
const receipt=`${base}/pressure-cycle4-interface-edges.json`,source=`research/${run}-ROOT-mini-pressure-supplier-cycle4/completed-consumer-edge-evidence.json`,ledger=`research/${run}-batch-41.cross-batch-dependencies.json`,archive=`${base}/pressure-cycle4-interface-edges-before.json`;
if(existsSync(receipt)||existsSync(archive))throw Error('already recorded');
const evidenceRaw=readFileSync(source,'utf8'),evidence=JSON.parse(evidenceRaw),old=readFileSync(ledger,'utf8'),rows=JSON.parse(old),key=e=>[e.kind,e.consumer,e.supplier].join('|');
const pending=collect(process.cwd(),run).edges.filter(e=>e.consumer_batch==='41'&&!e.reviews.length);
if(pending.length!==13||evidence.reviews.length!==13)throw Error('unexpected interface inventory');
const selected=new Map(evidence.reviews.map(e=>[key(e),e]));
const bindings=new Map(),hash=s=>createHash('sha256').update(s).digest('hex');
for(const edge of pending){const e=selected.get(key(edge));if(!e||!e.current_interface_applicable||e.status!=='verified'||e.reviewer!=='/root/mini_pressure_supplier')throw Error('unreviewed interface');for(const id of [edge.consumer,edge.supplier]){const p=`items/${id}.md`;bindings.set(p,readFileSync(p,'utf8'));}rows.push({kind:e.kind,consumer:e.consumer,supplier:e.supplier,status:'verified',evidence:`${e.supplier_interface} Actual use (${e.consumer_locator}): ${e.actual_proof_use} Completed original-owner review: ${e.evidence} Root read the full mapping and retained original proof/interface review; this records only the exact current authoring interface, with no independent native mathematical acceptance.`,owner_interface_record:{at:new Date().toISOString(),reviewer:e.reviewer,evidence:source,independent_native_acceptance:false}});}
for(const [p,raw] of bindings)if(readFileSync(p,'utf8')!==raw)throw Error('source changed '+p);
if(readFileSync(ledger,'utf8')!==old||readFileSync(source,'utf8')!==evidenceRaw)throw Error('ledger/evidence changed');
writeFileSync(archive,old,{flag:'wx'});writeFileSync(ledger,JSON.stringify(rows,null,2)+'\n');
const current=collect(process.cwd(),run);if(current.edges.some(e=>e.consumer_batch==='41'&&!e.reviews.length))throw Error('remaining unreviewed pressure edge');
writeFileSync(receipt,JSON.stringify({run,at:new Date().toISOString(),source,evidence_sha256:hash(evidenceRaw),archive,prior_ledger_sha256:hash(old),current_ledger_sha256:hash(readFileSync(ledger,'utf8')),added:pending.map(e=>({kind:e.kind,consumer:e.consumer,supplier:e.supplier})),observed_inputs:[...bindings].map(([file,raw])=>({file,raw_sha256:hash(raw)})),source_changes:false,readiness_changes:false,derived_refresh_deferred_until_native_writer_drain:true,smooth_pressure_claim:'unresolved; no gate or proof acceptance',native_coverage_granted:false},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({added:pending.length,current_total_edges:current.edges.length,unreviewed_edges:current.edges.filter(e=>!e.reviews.length).length,open_edges:current.edges.filter(e=>e.reviews.some(r=>r.status==='open')).length}));

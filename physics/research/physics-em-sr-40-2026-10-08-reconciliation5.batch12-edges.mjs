import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import {collect} from '../../tools/physics-support/frontier-dependency-ledger.mjs';
const root=new URL('../',import.meta.url),run='physics-em-sr-40-2026-10-08',read=p=>readFileSync(new URL(p,root),'utf8'),write=(p,x)=>writeFileSync(new URL(p,root),JSON.stringify(x,null,2)+'\n');
const receipt=JSON.parse(read(`research/${run}-reconciliation5.batch12-integration.json`));
const changed=new Set(receipt.existing_metadata_repairs.filter(x=>x.before.statement!==x.after.statement).map(x=>x.id));
const manifests=readdirSync(new URL('research/',root)).filter(x=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(x));
const items=new Map(),pages=new Map();for(const file of manifests){const batch=file.match(/-batch-(\d+)/)[1];for(const page of JSON.parse(read(`research/${file}`))){pages.set(page.id,{page,batch});for(const item of page.items)items.set(item.id,{item,page:page.id,batch});}}
const changes=[];
// Remove/migrate old review rows whose consumer moved before native collect enforces ownership.
for(const file of [run+'-batch-12.cross-batch-dependencies.json']){const path='research/'+file,batch=file.match(/-batch-(\d+)/)[1],rows=JSON.parse(read(path)),next=rows.filter(row=>{const owner=(row.kind==='item'?items:pages).get(row.consumer)?.batch; if(owner===batch)return true; changes.push({path,action:'remove-old-home-review',row,reason:'Current actual consumer ownership is reconciled on the stable native manifests.'});return false;});if(next.length!==rows.length)write(path,next);}
const current=collect(new URL(root).pathname,run);const actual=new Map(current.edges.map(x=>[JSON.stringify([x.kind,x.consumer,x.supplier]),x]));
for(const batch of ['12']){const path=`research/${run}-batch-${batch}.cross-batch-dependencies.json`;const rows=JSON.parse(read(path)),original=JSON.stringify(rows),next=[];const present=new Set();
 for(const row of rows){const key=JSON.stringify([row.kind,row.consumer,row.supplier]),edge=actual.get(key);if(!edge||edge.consumer_batch!==batch){changes.push({path,action:'remove-input-review-only',row,reason:'Edge no longer cross-batch in this consumer file after focused supplier/dependency repair; actual logical deps remain in manifests.'});continue;}
  const supplier=items.get(row.supplier);if(row.kind==='item'&&changed.has(row.supplier)){
   const consumer=items.get(row.consumer);row.evidence=`Current required supplier statement (batch${supplier.batch}, home${supplier.page}, computed level${supplier.item.dependency_level}): ${supplier.item.statement} Current consumer use and hypotheses: ${consumer.item.strategy} Focused reconciliation concerns the corrected experimental vocabulary/comparison/Doppler record interface actually used; preceding source reading is preserved rather than newly claimed. Carrier arguments are stable scaffolds, not authored proofs or an independent production audit.`;row.status='open';changes.push({path,action:'refresh-changed-interface',consumer:row.consumer,supplier:row.supplier});
  }next.push(row);present.add(key);
 }
 for(const edge of current.edges.filter(e=>e.consumer_batch===batch)){const key=JSON.stringify([edge.kind,edge.consumer,edge.supplier]);if(present.has(key))continue;let evidence;
  if(edge.kind==='item'){const s=items.get(edge.supplier),c=items.get(edge.consumer);evidence=`Required supplier statement (home${s.page}, batch${s.batch}, computed level${s.item.dependency_level}): ${s.item.statement} Actual consumer strategy/use: ${c.item.strategy} This newly declared cross-batch edge supplies an actual reviewed mathematical/model formulation used by the current repaired consumer. Exact mathematical formulation/regularity hypotheses have been checked at scaffold level. Primary reading is only the actual documented full Botermann report; other prior source reading is preserved, with no independent audit claim. Supplier scaffolded, not authored.`;}
  else evidence=`Current declared page prerequisite ${edge.consumer} requires ${edge.supplier}; original page order and selected pair identity preserved. Actual item uses are recorded separately. Published P context does not add an authored batch.`;
  next.push({kind:edge.kind,consumer:edge.consumer,supplier:edge.supplier,status:'open',evidence});changes.push({path,action:'add-actual-edge',kind:edge.kind,consumer:edge.consumer,supplier:edge.supplier});
 }
 if(original!==JSON.stringify(next))write(path,next);
}
write(`research/${run}-reconciliation5.batch12-edge-reconciliation.json`,{run,at:new Date().toISOString(),changed_statement_subjects:[...changed].sort(),changes,preserved_actual_item_dependencies:true,no_independent_audit_claim:true});console.log(JSON.stringify({actual_edges:current.edges.length,input_changes:changes.length},null,2));

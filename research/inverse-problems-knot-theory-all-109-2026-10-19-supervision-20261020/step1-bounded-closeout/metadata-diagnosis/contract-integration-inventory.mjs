#!/usr/bin/env node
// Metadata extraction only. No gate, hashes, acceptance inference or writes to contracts/items.
import fs from 'node:fs';
import path from 'node:path';
import { factParagraphs, numberedProofSteps, splitFrontmatter, sectionText } from '../../../../tools/facts-block.mjs';
import { yaml } from '../../../../tools/pathway-lib.mjs';
const RUN='inverse-problems-knot-theory-all-109-2026-10-19';
const BASE=`research/${RUN}-supervision-20261020/step1-bounded-closeout`;
const OUT=`${BASE}/metadata-diagnosis/contract-integration-inventory.json`;
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const bindings=new Map();
for(const owner of fs.readdirSync(`${BASE}/root-source-binding-inputs`)){
 const file=`${BASE}/root-source-binding-inputs/${owner}/root-input-binding.json`;
 if(!fs.existsSync(file))continue;
 for(const r of json(file).inputs??[])bindings.set(r.id,{...r,metadata_record:file});
}
// Only bounded report JSON metadata, not input markdown/proofs or archived snapshots.
const reports=[];
function scan(dir,depth=0){for(const e of fs.readdirSync(dir,{withFileTypes:true})){
 const p=path.join(dir,e.name);
 if(e.isDirectory()) {if(depth<2&&!/before|archive|review-input|root-source-binding-inputs|metadata-diagnosis/.test(e.name))scan(p,depth+1);continue;}
 if(!e.name.endsWith('.json')||!/review|verdict|report|check|accept|binding/.test(e.name))continue;
 try{reports.push({path:p,doc:json(p)});}catch{}
}}
scan(BASE);
const resolutionPath=`research/${RUN}-math-resolution-map.json`;
const resolution=json(resolutionPath);
const acceptedReuse=resolution.review_reuse_index?.items??{};
const reportRefs=new Map();
function walk(value,pointer,record){
 if(!value||typeof value!=='object')return;
 const ids=[];
 if(typeof value.id==='string')ids.push(value.id);
 if(typeof value.item==='string')ids.push(value.item);
 if(typeof value.source==='string'&&value.source.startsWith('items/'))ids.push(path.basename(value.source,'.md'));
 for(const id of ids){const list=reportRefs.get(id)??[];list.push({path:record,pointer,verdict:value.verdict??value.status??value.retained_verdict??null,scope:value.scope??value.exact_scope??value.review_needed??null});reportRefs.set(id,list);}
 for(const [k,v]of Object.entries(value))if(!/hash|sha256|proof|argument/i.test(k))walk(v,`${pointer}/${k}`,record);
}
for(const r of reports)walk(r.doc,'',r.path);
const rows=[],batches=[],counts={};
for(let b=1;b<=109;b++){
 const mf=`research/${RUN}-batch-${b}.pages.json`,cf=`research/${RUN}-batch-${b}.proof-contracts.json`;
 const pages=json(mf),ids=pages.flatMap(p=>p.items.map(i=>i.id));
 const doc=fs.existsSync(cf)?json(cf):null;let missing=0,held=0;
 for(const id of ids){
  const text=read(`items/${id}.md`),{fm,body}=splitFrontmatter(text),meta=yaml().parse(fm);
  const facts=[...factParagraphs(body).values()].map(f=>({label:f.label,links:[...new Set(f.links)],text:f.text,external_urls:[...f.text.matchAll(/https?:\/\/[^\s<>\])]+/g)].map(m=>m[0])}));
  const steps=numberedProofSteps(body);const entry=doc?.contracts?.[id];
  const mapped=[...(entry?.derivations??[]),...(entry?.routine_steps??[])].map(s=>s.step);
  const oldKeys=(entry?.citations??[]).map(c=>`${c.fact}→${c.source}`);
  const keys=facts.flatMap(f=>f.links.map(s=>`${f.label}→${s}`));
  const heldFields=Object.entries(entry??{}).filter(([k,v])=>(/^(?:authoring_status|proof_status|status|hold|blocked)$/.test(k)&&typeof v==='string'&&/hold|block|incomplete|pending|escalat|unresolved/.test(v)) || (k==='risk_review'&&v&&typeof v==='object'&&/hold|block|incomplete|pending|escalat|unresolved/.test(v.status??''))).map(([key,value])=>({key,value}));
  const state=!entry?'missing-entry':heldFields.length?'historical-held-metadata':'present-entry';
  if(!entry)missing++;if(heldFields.length)held++;
  counts[state]=(counts[state]??0)+1;
  rows.push({id,batch:b,contract_file:cf,state,scope_contains:doc?.scope?.includes(id)??false,held_fields:heldFields,
   numbered_sections:steps.map(s=>({step:s.id,declared_inputs:s.inputs})),facts,
   mechanical_delta:{new_steps:steps.map(s=>s.id).filter(s=>!mapped.includes(s)),removed_step_mappings:mapped.filter(s=>!steps.some(t=>t.id===s)),new_fact_source_pairs:keys.filter(k=>!oldKeys.includes(k)),removed_fact_source_pairs:oldKeys.filter(k=>!keys.includes(k))},
   external_boundary:{sources:meta.sources??null,provenance:meta.provenance??null,axiom_use:meta.axiom_use??null,import_fields:Object.fromEntries(Object.entries(meta).filter(([k])=>/external_|imported_|reading_limits|source_reading/.test(k))),declared_source_remarks:sectionText(body,'Remark')||null},
   recorded_reuse_evidence:acceptedReuse[id]?{path:resolutionPath,pointer:`review_reuse_index/items/${id}`,record:acceptedReuse[id],currency_not_checked:true}:null,
   owner_input_binding:bindings.get(id)??null,report_metadata:reportRefs.get(id)??[],
   proposed_disposition:'root-explicit-decision-required; historical records are evidence, not automatically current acceptance'});
 }
 batches.push({batch:b,manifest_items:ids.length,contract_file_present:!!doc,scope_size:doc?.scope?.length??0,entry_count:Object.keys(doc?.contracts??{}).length,missing,held});
}
if(rows.length!==1471)throw Error(`Bounded frontier changed: ${rows.length}`);
const out={version:1,run:RUN,scope:'109 batches /1471 frontier items only;560 helpers remain context; no proof audits or mathematical acceptance inference',counts,batches,rows,limits:['Numbered sections and Facts are mechanically extracted, not reviewed.','Root-source binding inputs are snapshots, not acceptance receipts. Reports retain exact scope; author-only reports do not become independent acceptance.','No hashes, gates, readiness, contract or canonical writes.','Historical held status can only be superseded by explicit root accepted scope.']};
fs.writeFileSync(OUT,JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify({output:OUT,counts,batches:batches.length,items:rows.length}));

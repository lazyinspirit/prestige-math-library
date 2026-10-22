// Metadata-only dry run. Writes proposals HERE; never changes source/native ledgers.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { split, yaml } from '../../../../tools/pathway-lib.mjs';

const root = process.cwd();
const run = 'inverse-problems-knot-theory-all-109-2026-10-19';
const out = path.dirname(fileURLToPath(import.meta.url));
const research = path.join(root, 'research');
const closeout = `research/${run}-supervision-20261020/step1-bounded-closeout`;
const read = p => JSON.parse(fs.readFileSync(path.resolve(root, p), 'utf8'));
const fm = p => yaml().parse(split(fs.readFileSync(path.resolve(root,p),'utf8')).fm) ?? {};
const key = x => JSON.stringify([x.kind,x.consumer,x.supplier]);
const homes = new Map(), records = [], batches = [], duplicates = [], historicalInputs = [];
const contractRecords = new Map();
const contractSection = body => {
  const headings = [...body.matchAll(/^## +(.+)$/gm)];
  for (let i=0; i<headings.length; i++) if (/^(Statement|Definition|Open problem|Statement refuted|Example|Description)$/.test(headings[i][1].trim())) {
    const text=body.slice(headings[i].index+headings[i][0].length,headings[i+1]?.index??body.length).trim();
    if(text)return {heading:headings[i][1].trim(),text};
  }
  return null;
};
const factsSection = body => { const m=body.match(/^## +Facts & Assumptions[^\n]*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m);return m?.[1]?.trim()??''; };
function readContract(id) {
  if(contractRecords.has(id))return contractRecords.get(id);
  const file=`items/${id}.md`,exists=fs.existsSync(path.resolve(root,file));
  if(!exists){const r={id,file,exists:false};contractRecords.set(id,r);return r;}
  const parsed=split(fs.readFileSync(path.resolve(root,file),'utf8')),meta=yaml().parse(parsed.fm)??{};
  const r={id,file,exists:true,declared_id:meta.id,kind:meta.kind,contract:contractSection(parsed.body),facts:factsSection(parsed.body),scope:'Literal contract/Facts extraction only; accepted proof body not inspected.'};
  contractRecords.set(id,r);return r;
}
for (const name of fs.readdirSync(research).filter(n => n.startsWith(`${run}-batch-`) && /-batch-\d+\.pages\.json$/.test(n)).sort()) {
  const batch = name.match(/-batch-(\d+)\.pages/)[1]; batches.push(batch);
  for (const p of read(`research/${name}`)) {
    records.push({kind:'page', id:p.id, batch, data:p, manifest:`research/${name}`, source:`library/${p.category}/${p.id}.md`});
    for (const it of p.items ?? []) {
      const i = typeof it === 'string' ? {id:it} : it;
      records.push({kind:'item',id:i.id,batch,data:i,manifest:`research/${name}`,source:`items/${i.id}.md`});
    }
  }
}
for (const r of records) {
  const k = `${r.kind}:${r.id}`;
  if (homes.has(k) && homes.get(k)!==r.batch) duplicates.push({id:k,batches:[homes.get(k),r.batch]});
  homes.set(k,r.batch);
}
const edges = new Map(), context = new Map();
for (const r of records) {
  const carriers = [[r.data,r.manifest]];
  if(fs.existsSync(path.resolve(root,r.source)))carriers.push([fm(r.source),r.source]);
  for(const [d,file] of carriers) for(const field of r.kind==='page'?['requires']:['deps','justified_by','forward_refs']) {
    for(const supplier of d[field]??[]) {
      const sb=homes.get(`${r.kind}:${supplier}`);
      if(!sb) { const k=JSON.stringify([r.kind,r.id,supplier]); if(!context.has(k))context.set(k,{kind:r.kind,consumer:r.id,supplier,consumer_batch:r.batch,declarations:[]}); const c=context.get(k);const ref=`${file}#${field}`;if(!c.declarations.includes(ref))c.declarations.push(ref);continue; }
      if(sb===r.batch)continue;
      const row={kind:r.kind,consumer:r.id,supplier,consumer_batch:r.batch,supplier_batch:sb};
      const k=key(row);if(!edges.has(k))edges.set(k,{...row,declarations:[],historical_reviews:[]});
      const e=edges.get(k),ref=`${file}#${field}`;if(!e.declarations.includes(ref))e.declarations.push(ref);
    }
  }
}
const missing=[],legacy=[],invalid=[],orphans=[],conflicts=[];
for(const batch of batches) {
  const file=`research/${run}-batch-${batch}.cross-batch-dependencies.json`;
  if(!fs.existsSync(path.resolve(root,file))){missing.push(batch);continue;}
  const raw=read(file);historicalInputs.push({file,batch,original:raw});let rows=[];
  if(Array.isArray(raw))rows=raw.map((r,i)=>({r,pointer:`/${i}`}));
  else {
    legacy.push({batch,file,keys:Object.keys(raw)});
    for(const field of ['edges','item_dependencies','page_dependencies'])for(const [i,r]of(raw[field]??[]).entries())rows.push({r:{...r,kind:r.kind??(field==='page_dependencies'?'page':'item')},pointer:`/${field}/${i}`});
  }
  const seen=new Set();
  for(const {r,pointer}of rows){
    // Some authentic old records name finite semicolon-separated groups. Match
    // only literal current IDs, preserving the entire original grouped record.
    const consumers=typeof r.consumer==='string'?r.consumer.split(';').map(x=>x.trim()):[];
    const suppliers=typeof r.supplier==='string'?r.supplier.split(';').map(x=>x.trim()):[];
    let matched=false;
    for(const consumer of consumers)for(const supplier of suppliers){
      const normalized={kind:r.kind,consumer,supplier},k=key(normalized),entry={file,pointer,original:r};
      if(!['item','page'].includes(r.kind)||!homes.has(`${r.kind}:${consumer}`))continue;
      if(consumers.length>1||suppliers.length>1)entry.grouped_record_mapping={consumer,supplier,rule:'Literal semicolon-separated ID membership plus actual current declared edge; original record preserved unaltered.'};
      if(seen.has(k))conflicts.push({batch,key:k,reason:'duplicate historical review key; both authentic records preserved'});seen.add(k);
      if(homes.get(`${r.kind}:${consumer}`)!==batch)entry.rehome_note={historical_recording_batch:batch,current_consumer_batch:homes.get(`${r.kind}:${consumer}`),action:'Preserve old record, regroup by actual current home; no new mathematical review implied.'};
      if(edges.has(k)){edges.get(k).historical_reviews.push(entry);matched=true;}else orphans.push(entry);
    }
    if(!matched&&!consumers.some(consumer=>homes.has(`${r.kind}:${consumer}`)))invalid.push({file,pointer,original:r,reason:'Not a direct literal current original edge record (possibly grouped, proposed, transitive or retired/context-only); full history preserved, not a mathematical finding.'});
  }
}
const mapPath=`research/${run}-math-resolution-map.json`, math=read(mapPath), accepted=new Map();
function evidence(id,e){if(!accepted.has(id))accepted.set(id,[]);accepted.get(id).push(e);}
for(const[id,x]of Object.entries(math.review_reuse_index?.items??{}))for(const [i,r]of(x.records??[]).entries())if(r.whole_source_accepted===true)evidence(id,{kind:'recorded-whole-source-acceptance',path:mapPath,pointer:`/review_reuse_index/items/${id}/records/${i}`,scope:r.scope,reviewer:r.reviewer,evidence:r.evidence,currency_checked:false});
// Match literal IDs in actual accepted records: target-side cached record numbers
// predate array edits and are not a safe pointer reconstruction.
for(const[i,c]of(math.mathematical_closures??[]).entries())for(const id of c.originals??[])evidence(id,{kind:'recorded-original-closure',path:mapPath,pointer:`/mathematical_closures/${i}`,scope:c.verdict,report:c.report??c.index??null,currency_checked:false});
for(const[i,c]of(math.source_status_dispositions??[]).entries())for(const id of c.ids??[])evidence(id,{kind:'recorded-source-status-disposition-not-proof',path:mapPath,pointer:`/source_status_dispositions/${i}`,scope:c.verdict,report:c.report??null,currency_checked:false});
const drain=read(`${closeout}/root-mathematical-drain.json`),current=new Map();
const registryPath=`${closeout}/root-source-qualified-66-scope-adoption-registry.json`,registry=read(registryPath);
if(registry.adopted_by_root===true)for(const[i,e]of(registry.entries??[]).entries()){
  const record={kind:'root-adopted-current-source-qualified-scope',path:registryPath,pointer:`/entries/${i}`,closure_basis:e.closure_basis,scope:e.root_scope_adoption,independent_review:e.independent_review,snapshot_binding:e.snapshot_binding,all66_focused_source_checks_complete:drain.all66_focused_source_checks_complete===true,currency_checked:false};
  current.set(e.id,record);evidence(e.id,record);
}
const authorRecords=new Map();
for(const k of homes.keys())if(k.startsWith('item:')){
  const id=k.slice(5),p=`research/${run}-step1-${id}.json`;
  if(fs.existsSync(path.resolve(root,p))){const r=read(p);authorRecords.set(id,{path:p,recorded_decision:r.decision,owner:r.owner,reason:r.reason,declared_dependencies:r.dependencies??[],limit:'Historical declared-input/interface evidence only; no native exit, current hash, or new proof acceptance inferred.'});}
}
const helperDecisions=read(`${closeout}/root-reconciliation-decisions.json`),helperIds=new Set((helperDecisions.helpers??[]).map(x=>x.id));
const classified=[];
for(const e of edges.values()){
  const valid=e.historical_reviews.filter(x=>x.original.status==='verified'&&String(x.original.evidence??'').trim());
  const cs=current.get(e.consumer),ss=current.get(e.supplier),ca=accepted.get(e.consumer)??[],sa=accepted.get(e.supplier)??[];
  const ar=authorRecords.get(e.consumer),authorInterface=ar&&ar.declared_dependencies.includes(e.supplier)&&/supplier.{0,80}(inspect|check|read)|direct.{0,40}(input|interface).{0,40}(inspect|check|read)|dependenc.{0,40}(inspect|check|read)/i.test(ar.reason??'');
  let classification;
  if(valid.length)classification='historical-edge-review-present-preserve-with-limits';
  else if(cs?.all66_focused_source_checks_complete&&(ss?.all66_focused_source_checks_complete||sa.length))classification='current-consumer-and-supplier-evidence-root-scope-decision';
  else if(ca.length&&(ss?.all66_focused_source_checks_complete||sa.length))classification='historical-item-acceptances-root-edge-scope-decision';
  else if(authorInterface)classification='explicit-author-interface-inspection-root-scope-decision';
  else if(e.kind==='page')classification='page-context-metadata-root-decision-not-a-proof-edge';
  else classification='no-sufficient-named-edge-evidence-in-selected-registry';
  const supplierContract=e.kind==='item'?readContract(e.supplier):null,consumerContract=e.kind==='item'?readContract(e.consumer):null;
  const structural=e.kind==='page'?{pass:true,scope:'Actual current requires declaration between original page homes; no proof edge.'}:{pass:supplierContract.exists&&supplierContract.declared_id===e.supplier&&Boolean(supplierContract.contract?.text),supplier_file:supplierContract.file,supplier_contract_heading:supplierContract.contract?.heading??null,supplier_contract_nonempty:Boolean(supplierContract.contract?.text),supplier_identity_matches:supplierContract.declared_id===e.supplier,consumer_facts_names_supplier:consumerContract.facts?.includes(`[[${e.supplier}`)??false,scope:'Current declared-interface mapping only; no new proof acceptance/source-body review. Nonempty supplier contract and declared edge binding checked; missing named Fact is not a mathematical defect.'};
  classified.push({...e,classification,structural_interface:structural,current_author_declared_scope:ar??null,consumer_acceptance:ca,supplier_acceptance:sa,current_consumer:cs??null,current_supplier:ss??null,author_declared_interface_evidence:authorInterface?ar:null,proposed_status:structural.pass?'verified-current-declared-interface-mapping-only':'open-structural-exception-root-decision'});
}
classified.sort((a,b)=>key(a).localeCompare(key(b)));
const counts={};for(const e of classified)counts[e.classification]=(counts[e.classification]??0)+1;
const summary={run,mode:'metadata-only proposal; no source/hash/validator/native/readiness operations',batches:batches.length,manifest_original_items:[...homes.keys()].filter(k=>k.startsWith('item:')).length,manifest_pages:[...homes.keys()].filter(k=>k.startsWith('page:')).length,missing_batch_review_arrays:missing.sort((a,b)=>+a-+b),legacy_dictionary_inputs:legacy,declared_cross_batch_edges:classified.length,structural_interface_scope:'Root-authorized current declared-interface mapping only; no new proof acceptance/source-body review',structural_interface_passes:classified.filter(e=>e.structural_interface.pass).length,structural_interface_exceptions:classified.filter(e=>!e.structural_interface.pass).length,classification_counts:counts,context_declarations:context.size,context_helper_ids_referenced:[...new Set([...context.values()].filter(x=>helperIds.has(x.supplier)).map(x=>x.supplier))].length,helpers_in_decisions:helperIds.size,helper_home_policy:'No context item acquires a batch home or page. Declaration of context is not acceptance.',original_acceptance_ids_in_registry:accepted.size,current_source_qualified_ids:current.size,root_current_scope_attestation:drain,duplicate_homes:duplicates,invalid_existing_reviews:invalid,historical_duplicate_reviews:conflicts,orphaned_historical_reviews:orphans.length,limits:['Existing verified edge notes preserved literally, including any not-acceptance qualifications.','Named whole-item acceptance is evidence for root reconciliation, NOT automatic proof that a new edge was reviewed.','Current66 check-complete attestation is used at its declared external-binding scope only.','No source hash recomputation, proof audit, gate, canonical/manifest write, readiness update, or state transition.','No unsupported edge is labeled verified; root must make the final evidence decision.']};
const save=(name,value)=>fs.writeFileSync(path.join(out,name),JSON.stringify(value,null,2)+'\n');
save('summary.json',summary);save('edge-decisions.json',classified);save('context-only-declarations.json',[...context.values()]);save('orphaned-historical-reviews.json',orphans);
save('supplier-and-consumer-literal-contracts.json',[...contractRecords.values()]);
save('historical-review-inputs.json',historicalInputs);
const arrayDir=path.join(out,'proposed-consumer-batch-arrays');fs.mkdirSync(arrayDir,{recursive:true});
const arrays=new Map(batches.map(b=>[b,[]]));
for(const e of classified){
  const evidenceRefs=[...e.consumer_acceptance,...e.supplier_acceptance].map(x=>`${x.path}#${x.pointer}`);
  const status=e.structural_interface.pass?'verified':'open';
  arrays.get(e.consumer_batch).push({kind:e.kind,consumer:e.consumer,supplier:e.supplier,consumer_batch:e.consumer_batch,supplier_batch:e.supplier_batch,status,review_scope:'Step1 current declared-interface mapping only; no new proof acceptance/source-body review',evidence:`Root-authorized bounded metadata reconciliation: ${e.declarations.join('; ')}. ${e.structural_interface.pass?'Actual supplier identity and nonempty literal contract (or page requires interface) confirmed.':'Structural exception: missing or empty/misidentified supplier contract; root decision required.'} Historical reviews and their qualifications preserved in historical_review_records. ${evidenceRefs.length?'Named recorded acceptance/source-qualified scope evidence: '+[...new Set(evidenceRefs)].join('; ')+'.':'No new whole-item acceptance is inferred; absent acceptance indexing is not a mathematical defect.'} No proof-body audit, hash/currency check, native exit, readiness, gate or publication coverage is claimed.`,declarations:e.declarations,structural_interface:e.structural_interface,historical_review_records:e.historical_reviews,recorded_consumer_acceptance:e.consumer_acceptance,recorded_supplier_acceptance:e.supplier_acceptance,current_author_declared_scope:e.current_author_declared_scope,proposal_classification:e.classification});
}
for(const[batch,rows]of arrays)fs.writeFileSync(path.join(arrayDir,`${run}-batch-${batch}.cross-batch-dependencies.json`),JSON.stringify(rows,null,2)+'\n');
save('root-apply-plan.json',{run,mode:'Root-apply-ready proposal only; no canonical/native writes performed',authority:'Root adopted current declared-interface reconciliation boundary, not whole-proof certification.',current_homes_recomputed_from_actual_manifests:true,must_regenerate_after_pending_rehomes:true,proposed_array_directory:path.relative(root,arrayDir),consumer_batches:batches.length,structural_exceptions:classified.filter(e=>!e.structural_interface.pass).map(e=>({kind:e.kind,consumer:e.consumer,supplier:e.supplier,detail:e.structural_interface})),preserve_before_application:'Archive every original cross-batch input in historical-review-inputs.json and preserve complete original legacy dictionary/array objects. Per-edge history travels with its actual current consumer home.',status_meaning:'verified means declared-interface mapping reviewed at this explicit metadata scope only; historic proof/open qualifications retained, never silently promoted to whole-item acceptance.',root_actions:['After final manifest rehomes, rerun propose.mjs to recompute actual current homes.','Read structural_exceptions; resolve only actual missing/misidentified supplier contract, not absent acceptance-index entries.','Adopt the scope and copy proposed consumer-batch arrays, retaining full historical inputs.','Root owns any canonical ledger refresh, readiness/state changes, validators and gates separately.'],helpers:'560 helpers remain context; no new homes/page placement supplied.',limits:'No new mathematical audit, accepted-provider recheck, proof acceptance, hash/currency operation, readiness/gate claim or canonical mutation.'});
save('root-decision-template.json',{run,authority:'Root adopted bounded Step1 declared-interface reconciliation; final canonical application is root-owned',preserve_history:true,missing_batches:summary.missing_batch_review_arrays,normalize_legacy_batches:legacy.map(x=>x.batch),policies:Object.keys(counts).map(classification=>({classification,decision:'Root-authorized current declared-interface mapping only if actual supplier identity/nonempty contract and edge binding pass; preserve all historical qualifications and named acceptance evidence without new proof/source-body review.'})),application:'No apply mode. Regenerate after final home changes and BEFORE copying normalized arrays. Archive original full legacy objects/old arrays; current status verified is at explicit declared-interface metadata scope only, not whole-proof certification.'});
console.log(JSON.stringify({summary:path.relative(root,path.join(out,'summary.json')),edges:classified.length,counts,missing:summary.missing_batch_review_arrays,legacy:legacy.map(x=>x.batch)},null,2));

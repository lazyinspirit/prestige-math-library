// Fresh read-only projections; unique v2 diagnostics only, no authority/gates.
import { readFileSync, writeFileSync, existsSync, realpathSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { isDeepStrictEqual } from 'node:util';
import { injectReviewLiteral } from './projection-literal.mjs';
const { recordedPublishedRepair }=await import(pathToFileURL(resolve('tools/published-repair-policy.mjs')).href);
const { originalPresentationChanges }=await import(pathToFileURL(resolve('tools/physics-support/original-presentation-maintenance.mjs')).href);
const run='advanced-qft-supersymmetry-build-2026-10-23';
const base=`research/${run}-owner-resolution/native-import-complete84-v1`,out=base+'/diagnostic-literal-v2';
const sha=b=>createHash('sha256').update(b).digest('hex'),read=p=>readFileSync(p),json=p=>JSON.parse(read(p));
const assert=(b,m)=>{if(!b)throw Error(m)};
const destination=out+'/six-entry-projections-v2.json';assert(!existsSync(destination),'do not overwrite v2 results');
const graph=json(base+'/shared-local-graph.json'),receipt=json('research/math-imports.json');
const baselinePath=`research/${run}-original-rendering-maintenance.json`,baselineHash=sha(read(baselinePath));
const checker=resolve('tools/physics-support/original-rendering-maintenance.mjs'),checkerBytes=read(checker),checkerSource=checkerBytes.toString(),results=[];
const selections=[[4,'def-spherical-averages-and-local-ball-means-in-rn'],[4,'thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms'],[4,'thm-line-bundle-sections-define-projective-map'],[5,'def-compactly-supported-differential-form'],[6,'thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage'],[7,'thm-tensor-product-basis-from-bases']];
for(const[group,id]of selections){
 let entry,review;
 if(group===5){review=json(`${base}/group5/projection-${id}.json`);entry=review.entries[0];}
 else{
  const d=json(`${base}/group${group}/entries.json`);entry=structuredClone((Array.isArray(d)?d:d.entries).find(e=>e.path===`items/${id}.md`));assert(entry,'missing entry '+id);
  review={version:1,kind:'root-reviewed-original-rendering-successors',run,reviewer:'/root',native_review:false,reason:'Read-only exact pending-proposal diagnostic projection; no canonical Root adoption, native coverage or scientific acceptance is asserted.',import_receipt_sha256:sha(read('research/math-imports.json')),scope:{kind:'authored-frontier',frontier:graph.frontier},entries:[entry],inputs:{}};
  const n=json(entry.repair_receipt.path);
  const required=['research/math-imports.json',...Object.keys(graph.frontier),entry.path,entry.original_path,entry.repair_receipt.path,resolve(receipt.source_root,n.before_file),resolve(receipt.source_root,n.adjudication_file),entry.ownership_evidence.path,entry.ledger_evidence.path,...entry.evidence.map(r=>r.path),...entry.consumers.map(c=>'items/'+c.id+'.md'),...entry.presentation_reviews.flatMap(r=>[...r.evidence.map(e=>e.path),...(r.pinned_target?[r.pinned_target.path]:[])]),...Object.keys(entry.changes.proof_support_parser_runtime?.inputs??{})];
  review.inputs=Object.fromEntries([...new Set(required)].map(p=>[p,sha(read(p))]));
 }
 for(const c of review.entries[0].consumers)c.decision='unaffected';
 for(const[p,h]of Object.entries(review.inputs))assert(sha(read(p))===h,'stale diagnostic input '+p);
 const before=read(entry.path),after=read(entry.original_path),native=json(entry.repair_receipt.path),locator=after.toString().match(/  repair: ([^\n]+)/)[1];
 const authentication=recordedPublishedRepair(receipt.source_root,id,after.toString(),locator);
 const changes=originalPresentationChanges(before,after,entry.proof_support_consolidation,entry.proof_reference_relocation,entry.definition_display_layout,entry.terminal_remarks_heading,entry.proof_support_relocation_layout,entry.proof_paragraph_join_layout,entry.counterexample_math_spelling);
 const literal=injectReviewLiteral(checkerSource,review),needle="const review = JSON.parse(readFileSync(path, 'utf8'));";
 const broken=checkerSource.replace(needle,'const review = '+JSON.stringify(review)+';');
 const source=literal.replace(/from '(\.[^']+)'/g,(_,p)=>'from '+JSON.stringify(pathToFileURL(resolve(dirname(realpathSync(checker)),p)).href));
 const row={group,id,path:entry.path,stored_proposal:group===5?`${base}/group5/projection-${id}.json`:`${base}/group${group}/entries.json`,source_hashes:{pin:sha(before),current:sha(after)},native_authentication:authentication,changes_deep_exact:isDeepStrictEqual(entry.changes,changes),verification:changes.verification,repair_receipt:entry.repair_receipt,recorded_proof_layout:native.proof_layout,broken_string_replacement_alters_payload:broken!==literal,dollar_pair_count:JSON.stringify(review).split('$$').length-1,checker_sha256:sha(checkerBytes),inputs:review.inputs};
 try{
  const mod=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64')+'#'+id);
  const accepted=mod.originalRenderingMaintenance(process.cwd(),run,{receipt,scope:{paths:new Set(receipt.files.map(f=>f.path)),importedItems:new Set(receipt.files.filter(f=>f.path.startsWith('items/')).map(f=>f.path.slice(6,-3))),consumers:new Map(Object.entries(graph.consumers).map(([id,c])=>[id,new Set(c)])),owned:new Set(graph.owned)}});
  row.pass=accepted.size===1&&accepted.get(entry.path)===entry.original_sha256;row.accepted=[...accepted];
 }catch(error){row.pass=false;row.error=error.message;}
 for(const[p,h]of Object.entries(review.inputs))assert(sha(read(p))===h,'input changed during diagnostic '+p);
 results.push(row);
}
assert(sha(read(baselinePath))===baselineHash,'production authority changed');assert(sha(read(checker))===sha(checkerBytes),'production checker changed');
const result={kind:'fresh-v2-six-entry-literal-preserving-diagnostic-projections',at:new Date().toISOString(),run,production_checker_unchanged:true,only_authority_read_expression_injected:true,old_reports_unchanged:true,saved_decisions_pending:true,transient_consumer_decisions:'unaffected',authority_written:false,native_gate:false,complete_mathematical_audit:false,baseline:{path:baselinePath,sha256:baselineHash},results};
writeFileSync(destination,JSON.stringify(result,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({file:destination,pass:results.filter(r=>r.pass).length,results:results.map(({id,pass,error})=>({id,pass,error}))}));

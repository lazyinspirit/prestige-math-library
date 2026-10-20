import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {fileURLToPath} from 'node:url';
const base=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(base,'../../../..');
const {numberedProofSteps,splitFrontmatter}=await import(path.join(root,'tools/facts-block.mjs'));
const load=f=>JSON.parse(fs.readFileSync(f,'utf8')),sha=raw=>crypto.createHash('sha256').update(raw).digest('hex');
const ops=load(path.join(base,'boundary-object-CAS-all-v2.json')),v1=load(path.join(base,'../boundary-object-CAS-all.json')),guards=load(path.join(base,'source-guards-all-v2.json')),problems=[],rows=[],changed=[];
if(JSON.stringify(guards)!==JSON.stringify(load(path.join(base,'../source-guards-all.json'))))problems.push('Source guards changed');
for(const g of guards)if(sha(fs.readFileSync(path.join(root,g.path)))!==g.sha256)problems.push(`Current source drift ${g.path}`);
for(let i=0;i<ops.length;i++){
 const current=ops[i],prior=v1[i];if(JSON.stringify(current.expected)!==JSON.stringify(prior.expected))problems.push(`V2 CAS expected object changed at ${i}`);
 const a=structuredClone(current.replacement),b=prior.replacement;if(JSON.stringify(a)!==JSON.stringify(b)){changed.push(i);delete a.evidence;const withoutEvidence=structuredClone(b);delete withoutEvidence.evidence;if(JSON.stringify(a)!==JSON.stringify(withoutEvidence))problems.push(`Field other than added evidence changed at ${i}`);}
}
if(changed.length!==242)problems.push(`Expected242 augmented rows, got${changed.length}`);
for(const batch of [51,52,56]){
 const local=ops.filter(o=>o.file.includes(`-batch-${batch}.`)),ids=[...new Set(local.map(o=>o.consumer))],doc=load(path.join(base,`batch-${batch}.proof-contracts-v2.json`)),actual=load(path.join(root,local[0].file));
 for(const op of local){const before=actual.contracts[op.consumer].boundaries.find(b=>b.case===op.boundary_case);if(JSON.stringify(before)!==JSON.stringify(op.expected))problems.push(`Actual CAS drift ${op.consumer}:${op.boundary_case}`);}
 for(const id of ids){
  const body=splitFrontmatter(fs.readFileSync(path.join(root,'items',`${id}.md`),'utf8')).body,steps=new Set(numberedProofSteps(body).map(s=>s.id));
  if(JSON.stringify(actual.contracts[id].finite_smoke)!==JSON.stringify(doc.contracts[id].finite_smoke))problems.push(`finite_smoke changed ${id}`);
  for(const boundary of doc.contracts[id].boundaries){
   if(boundary.status!=='checked')continue;
   const evidence=boundary.evidence;
   if(typeof evidence!=='string'||!evidence.trim()){problems.push(`boundary-evidence ${id}:${boundary.case}`);continue;}
   // Exact checked-evidence mechanics from tools/proof-contract.mjs275–287.
   const references=[...evidence.matchAll(/\b(?:steps?\s+)?(\d+\.\d+)\b/gi)].filter(m=>/^steps?\s/i.test(m[0])||steps.has(m[1])).map(m=>m[1]);
   if(!references.length&&!/statement|definition|example|counterexample/i.test(evidence))problems.push(`boundary-evidence-unanchored ${id}:${boundary.case}`);
   for(const step of references)if(!steps.has(step))problems.push(`boundary-evidence-step-missing ${id}:${boundary.case}:${step}`);
   rows.push({id,case:boundary.case,references,source_text_anchor:references.length?'proof phases':'named actual interface section'});
  }
 }
}
const result={ok:problems.length===0,revision:2,augmented_rows:changed.length,all456_CAS_preimages_current:problems.every(x=>!x.includes('CAS')),all69_source_guards_current:problems.every(x=>!x.includes('source drift')),checked_rows_schema_checked:rows.length,problems,source_reference_results:rows,native_gate_run:false,new_mathematical_review_credit:false};fs.writeFileSync(path.join(base,'focused-evidence-schema-results-v2.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({...result,source_reference_results:undefined},null,2));process.exitCode=problems.length?1:0;

import {readFileSync as rf,writeFileSync as wf,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {isDeepStrictEqual as same} from 'node:util';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {factParagraphs,numberedProofSteps,sourceSectionText} from '../../tools/physics-support/facts-block.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step2-escalations`,path=`${base}/root-contract-integration-plan.json`,out=`${base}/root-contract-adoption.json`,plan=JSON.parse(rf(path));
if(existsSync(out))throw Error('Already adopted');
const sha=b=>createHash('sha256').update(b).digest('hex'),norm=s=>String(s??'').replace(/\s+/g,' ').trim(),cache=new Map(),errors=[],adoptions=[];
function item(id){if(!cache.has(id))cache.set(id,readItem(`items/${id}.md`));return cache.get(id);}
for(const p of plan.newly_reviewed_guard_proposals??[]){
 if(plan.preimage_guards[p.path]!==p.original_draft_sha256||sha(rf(p.path))!==p.proposed_current_raw_sha256)throw Error('Changed reviewed input '+p.path);
 for(const e of p.scientific_report_authority)if(sha(rf(e.path))!==e.sha256)throw Error('Changed scientist evidence');
 adoptions.push(p);
}
const docs=new Map(plan.contract_files.map(p=>[p,JSON.parse(rf(p))]));
for(const op of plan.operations){
 const doc=docs.get(op.file);if(!doc)throw Error('Outside contract selection');
 if(op.kind==='replace-existing-field'){
  if(!same(doc.contracts[op.item][op.field],op.before))throw Error('Changed contract field '+op.id);
  doc.contracts[op.item][op.field]=structuredClone(op.after);
 }else if(op.kind==='add-new-corollary-contract'){doc.contracts[op.item]=structuredClone(op.after);doc.scope.push(op.item);}else throw Error('Unexpected operation');
}
let citations=0,excerpts=0,stepsChecked=0;
for(const [file,doc] of docs)for(const[id,c]of Object.entries(doc.contracts)){
 const source=item(id);if(['postulate','experiment'].includes(source.kind))continue;const facts=factParagraphs(source.body),steps=numberedProofSteps(source.body),deps=new Set([...(source.deps??[]),...(source.justified_by??[]),...(source.forward_refs??[])]),seen=new Set();
 for(const cite of c.citations??[]){
  citations++;const key=cite.fact+'\0'+cite.source,fact=facts.get(cite.fact),supplier=item(cite.source),actual=steps.filter(s=>new RegExp('\\b'+cite.fact+'\\b').test(s.text)).map(s=>s.id);
  if(seen.has(key)||!fact?.links.includes(cite.source)||!deps.has(cite.source)||supplier.provenance?.statement==='ai-generated'||!norm(sourceSectionText(supplier.body,cite.source_section)).includes(norm(cite.quote))||!cite.uses?.length||!same([...cite.uses].sort(),actual.sort()))errors.push({id,kind:'citation',fact:cite.fact,supplier:cite.source,declared:deps.has(cite.source),claimed_uses:cite.uses,actual});
  seen.add(key);
 }
 for(const fact of facts.values())for(const supplier of fact.links)if(!seen.has(fact.label+'\0'+supplier))errors.push({id,kind:'uncontracted-fact',fact:fact.label,supplier});
 const classified=new Map();for(const row of [...c.derivations??[],...c.routine_steps??[]]){if(!row.step)continue;classified.set(row.step,(classified.get(row.step)??0)+1);}
 for(const step of steps){stepsChecked++;if(classified.get(step.id)!==1)errors.push({id,kind:'step-coverage',step:step.id,count:classified.get(step.id)});}
 for(const row of c.supplier_excerpts??[]){if(!row.supplier||!row.exact_statement)continue;excerpts++;const supplier=item(row.supplier);if(!norm(sourceSectionText(supplier.body,row.source_section)).includes(norm(row.exact_statement)))errors.push({id,kind:'supplier-excerpt',supplier:row.supplier});}
}
for(const op of plan.operations.filter(o=>o.field==='derivations')){
 const current=new Map(numberedProofSteps(item(op.item).body).map(s=>[s.id,s]));
 for(const row of op.after){const prior=op.before?.find(x=>x.step===row.step);if(!same(prior?.claim,row.claim)&&!norm(current.get(row.step)?.claim).includes(norm(row.claim)))errors.push({id:op.item,kind:'changed-derivation-not-current-excerpt',step:row.step});}
}
const result={run,owner:'/root',at:new Date().toISOString(),draft_plan_sha256:sha(rf(path)),operations:plan.operations.length,citations_checked:citations,supplier_excerpts_checked:excerpts,numbered_steps_checked:stepsChecked,explicit_reviewed_guard_adoptions:adoptions,errors,scope:'Exact current proof-obligation transcription and source quotations, adopting actual native scope dispositions and same-owner resolution/attribution/consumer reports. This does not create new independent proof approval, source retrieval, publication or gate coverage.',scientific_basis:[`${base}/batch-2-resolution.json`,`${base}/batch-22-resolution.json`,`${base}/batch-25-resolution.json`,`${base}/batch-33-resolution.json`,`${base}/batch-33-guarantee-classification-supplement.json`,`${base}/current-fact-attribution-13.json`,`${base}/current-fact-attribution-26.json`,`${base}/current-fact-attribution-gauge-reynolds.json`,`${base}/conformation-phase-attribution.json`],new_supplier_use_review:{'def-fd-random-velocity-sensor-law':'Specified separable real Banach space and norm-simple approximation match the strong-measurability Definition exactly; no Borel-only substitute is made.','lem-fd-sensor-pairing-is-well-defined':'Statement supplies strongly measurable U in a separable Banach space, second moment under probability implies integrable norm, and bounded real linear sensors. Proof3.1 uses the integrability criterion, continuous simple approximants, and bounded-map interchange under exactly these hypotheses. Finite sensor covariance products follow Holder; measurable null-set versions are explicit.','prop-fd-sensor-long-run-clt':'AC, centered square-integrable strict stationary real process, exact event-supremum alpha and each of the three moment/rate alternatives are explicit. Proof1.2 applies the exact strong-mixing theorem; stationarity justifies the index shift. Zero covariance-sum variance remains included. No Markov or physical mixing hypothesis is silently inferred.','def-fd-solenoidal-surrogate-residual':'Current direct periodic-space and Leray map Definitions supply the required Fourier conventions. The old Fourier-basis row is transitive context and is removed only from the direct excerpt inventory; the actual direct suppliers remain.'},complete:errors.length===0,gates_attempted:0};
wf(out,JSON.stringify(result,null,2)+'\n',{flag:'wx'});
if(errors.length){console.log(JSON.stringify({errors}));throw Error('Resolve candidate contract inconsistencies before adoption');}
wf(`${base}/root-contract-draft-v2-reviewed-preimage.json`,rf(path),{flag:'wx'});
for(const p of adoptions)plan.preimage_guards[p.path]=p.proposed_current_raw_sha256;
plan.approved_operation_ids=plan.operations.map(o=>o.id);plan.root_adoption={path:out,sha256:sha(rf(out)),reason:result.scope};
wf(path,JSON.stringify(plan,null,2)+'\n');
console.log(JSON.stringify({adopted_operations:plan.operations.length,reviewed_guard_changes:adoptions.length,citations,excerpts,stepsChecked}));

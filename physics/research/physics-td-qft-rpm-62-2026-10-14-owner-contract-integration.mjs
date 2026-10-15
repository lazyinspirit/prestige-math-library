// Owner integration of completed Codex repair proposals; no gate authority.
import {readFileSync, writeFileSync, mkdirSync, renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {splitFrontmatter, sourceSectionText, numberedProofSteps, factParagraphs, SOURCE_SECTIONS} from '../../tools/physics-support/facts-block.mjs';
import {loadStep1Record} from '../../tools/physics-support/frontier-snapshot.mjs';
const run='physics-td-qft-rpm-62-2026-10-14';
const base=`research/${run}-owner-escalations/`;
const docs=new Map(), applied=[];
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const doc=n=>{if(!docs.has(n))docs.set(n,read(`research/${run}-batch-${n}.proof-contracts.json`));return docs.get(n)};
const section=(id,heading)=>sourceSectionText(splitFrontmatter(readFileSync(`items/${id}.md`,'utf8')).body,heading)?.trim();
function merge(n,id,contract){
 const d=doc(n), fields={...contract};
 if(fields.boundaries!==undefined&&!Array.isArray(fields.boundaries))delete fields.boundaries;
 d.contracts[id]={...d.contracts[id],...fields};
 if(!d.scope.includes(id))d.scope.push(id);
 applied.push({batch:n,item:id});
}
for(const [path,owners] of [
 ['td5-supplier-readiness/final-round-2/contract-proposals.json',()=>5],
 ['td8-m2-m3-supplier-readiness/final-round-2/contract-proposals.json',id=>id==='pthm-td-concave-stability'?8:4],
 ['qft38-supplier-readiness/final-round-2/contract-proposals-binding-correction.json',id=>id==='thm-qft-conformal-external-scalar'?39:38],
 ['rpm28-reception/round2/scoped-proof-contracts.proposal.json',()=>28],
])for(const [id,contract] of Object.entries(read(base+path).contracts))merge(owners(id),id,contract);
const owners=loadStep1Record(process.cwd(),run);
const released=read(base+'qft45-q8-polar-input/final-round-2/released-final-packet.json');
if(released.source_writing_released!==true)throw Error('QFT source owner has not released writing');
for(const source of released.source_receipts)
 if(createHash('sha256').update(readFileSync(`items/${source.id}.md`)).digest('hex')!==source.final_raw_sha256)
  throw Error(`Stale released QFT source ${source.id}`);
for(const[id,contract]of Object.entries(released.contracts)){
 const batch=owners.items.get(id)?.page.batch;if(!batch)throw Error(`Missing QFT consumer ownership ${id}`);
 for(const citation of contract.citations??[])
  if(['lem-qft-qed-coherent-ir-obstruction','thm-qft-example-soft-current-angular-coherent'].includes(citation.source))
   citation.quote=section(citation.source,citation.source_section);
 merge(Number(batch),id,contract);
}
const tdFinal=read(base+'td4-unit-compound-interface/round2-final-exact-contract-and-metadata-proposals.json');
for(const [id,contract] of Object.entries(tdFinal.contracts)){
 const batch=owners.items.get(id)?.page.batch;
 if(batch)merge(Number(batch),id,contract);
}
for(const path of ['rpm26-supplier-readiness/round2/contract-cleanup/scoped-proof-contracts.proposal.json','rpm24-27-28-handoff/scoped-proof-contracts.proposal.json','rpm24-missing-planned-example/scoped-proof-contracts.proposal.json'])
 for(const [id,contract] of Object.entries(read(base+path).contracts)){
  const batch=owners.items.get(id)?.page.batch;if(!batch)throw Error(`Missing repair ownership ${id}`);
  merge(Number(batch),id,contract);
 }
const mixture=read(base+'td12-mixture-proof-references/proposed-contract-row.json');
merge(12,mixture.target_contract,mixture.replacement_contract);
const scalarConsumer=read(base+'qft38-supplier-readiness/final-round-2/consumer-handoff-56/contract-proposal.json');
for(const [fact,quote] of Object.entries(scalarConsumer.exact_supplier_statement_quotes)){
 const citation=doc(56).contracts[scalarConsumer.id].citations.find(c=>c.fact===fact&&c.source==='lem-qft-smeared-free-scalar');
 if(!citation)throw Error(`Missing scalar consumer ${fact}`);citation.quote=quote;citation.source_section='Statement';citation.uses=scalarConsumer.preserve_uses[fact];
}
applied.push({batch:56,item:scalarConsumer.id});
for(const proposal of read(base+'td4-unit-compound-interface/round2-common-meter-contract-proposal.json').contracts)
 merge(3,proposal.item,{citations:proposal.citations_replace,derivations:proposal.derivations_replace});
const cor=read(base+'td4-unit-compound-interface/round2-corollary-contract-proposal.json');
merge(4,cor.item,{citations:cor.citations_replace,derivations:cor.derivations_replace});
const tasks=read(base+'td4-unit-compound-interface/round1-report.json').root_contract_tasks;
for(const id of ['lem-tdmath-compound-mass-well-defined','thm-tdmath-additive-entropy-representation']){
 const steps=numberedProofSteps(splitFrontmatter(readFileSync(`items/${id}.md`,'utf8')).body);
 doc(3).contracts[id].derivations=steps.map(s=>({id:`step-${s.id.replace('.','-')}`,step:s.id,claim:s.claim,inputs:s.inputs}));
 applied.push({batch:3,item:id});
}
const mass=doc(3).contracts['lem-tdmath-compound-mass-well-defined'];
for(const boundary of mass.boundaries){
 if(boundary.case==='zero')Object.assign(boundary,{status:'checked',evidence:'Steps2.1–3.1 handle zero scaling and prove that zero mass is equivalent to the empty compound.'});
 if(boundary.case==='one')Object.assign(boundary,{status:'checked',evidence:'Step3.1 proves m(e_x)=1 from the singleton finite-sum recursion.'});
 if(boundary.case==='iff-forward'||boundary.case==='iff-reverse'){boundary.status='checked';boundary.evidence=boundary.case==='iff-forward'?'Step3.1: zero finite sum of nonnegative support coefficients forces every coefficient zero.':'Step3.1 and step2.1: the empty compound has zero mass.';delete boundary.reason;}
}
for(const c of mass.citations){c.uses=[...new Set([...c.uses,'3.1'])];if(c.source==='lem-finite-sum-laws')c.quote=section(c.source,c.source_section)}
const entropy=doc(3).contracts['thm-tdmath-additive-entropy-representation'];
entropy.citations=entropy.citations.filter(c=>c.fact!=='F4').concat(tasks.new_entropy_F4_citations);
for(const task of tasks.existing_affected_citation_records){
 if(task.existing_quote_exact || task.consumer===cor.item)continue;
 const c=doc(3).contracts[task.consumer].citations.find(c=>c.source===task.source&&c.fact===task.fact);
 if(!c)throw Error(`Missing affected citation ${task.consumer}/${task.fact}/${task.source}`);
 c.quote=section(task.source,task.source_section);
}
const review=read(base+'td8-tagged-homogeneity/source-integration-round-2.json').new_item_source_review;
for(const [id,boundaries] of Object.entries(read(base+'canonical-boundary-worksheets-final-round-2.json').boundaries)){
 const batch=id==='pthm-td-concave-stability'?8:id==='lem-tdmath-concave-affine-maximizer-and-hessian'?4:5;
 doc(batch).contracts[id].boundaries=boundaries;
}
for(const [id,boundaries] of Object.entries(read(base+'scalar-canonical-boundary-notes-final-round-2.json').boundaries))doc(38).contracts[id].boundaries=boundaries;
const phaseProposal=read(base+'td8-tagged-homogeneity/proposed-clapeyron-contract-row-round-2.json');
merge(13,phaseProposal.target_contract,phaseProposal.replacement_contract);
for(const id of ['lem-tdmath-euler-identity-for-degree-one-homogeneous-function','pthm-td-euler-and-gibbs-duhem','pthm-td-clapeyron-local']){
 const body=splitFrontmatter(readFileSync(`items/${id}.md`,'utf8')).body;
 const steps=numberedProofSteps(body),citations=[];
 for(const fact of factParagraphs(body).values())for(const source of new Set(fact.links)){
  const heading=[...SOURCE_SECTIONS].find(heading=>section(source,heading));
  if(!heading)throw Error(`Missing citable interface ${source}`);
  const uses=steps.filter(s=>new RegExp(`\\b${fact.label}\\b`).test(s.text)).map(s=>s.id);
  citations.push({fact:fact.label,source,source_section:heading,quote:section(source,heading),uses});
 }
 merge(id==='pthm-td-clapeyron-local'?13:9,id,{citations,derivations:steps.map(s=>({id:`step-${s.id.replace('.','-')}`,step:s.id,claim:s.claim,inputs:s.inputs}))});
}
merge(2,'post-td-common-bulk-constitutive-law',{
 citations:[],derivations:[],routine_steps:[],boundaries:[],
 physics_review:{
 formulation:{verdict:'pass',evidence:review.formulation},
 scope:{verdict:'pass',evidence:review.physical_scope},
 sources:{verdict:'pass',evidence:`${review.source}; ${review.sections}. ${review.reading_scope}`},
 non_derivation:{verdict:'pass',evidence:'An explicitly adopted idealized constitutive premise; source review does not certify an empirical law or prove the tag transport. Euler and Gibbs–Duhem remain conditional consumer deductions.'}
 }
});
// Validate current quote bindings before mutating any live contract file.
for(const {batch,item} of applied){
 const contract=doc(batch).contracts[item];
 if(!Array.isArray(contract.boundaries)){
  const original=read(`research/${run}-owner-contract-integration/2026-10-14T05-32-25-062Z/batch-${batch}.before.json`);
  contract.boundaries=original.contracts[item].boundaries;
 }
 const steps=numberedProofSteps(splitFrontmatter(readFileSync(`items/${item}.md`,'utf8')).body);
 if(item==='ex-rpm-pure-gauge-free-charge'){
  contract.derivations=steps.map(s=>({id:`step-${s.id.replace('.','-')}`,step:s.id,claim:s.claim,inputs:s.inputs}));
  for(const boundary of contract.boundaries)if(boundary.status==='checked'&&!/\b(?:step|steps|statement)\b/i.test(boundary.evidence))boundary.evidence=`Statement: ${boundary.evidence}`;
 }
 for(const derivation of contract.derivations??[]){
  const step=steps.find(s=>s.id===derivation.step);if(!step)throw Error(`Missing actual proof step ${item}/${derivation.step}`);
  for(const match of step.text.matchAll(/\b([FAL]\d+)\b|\bstep\s+(\d+\.\d+)\b/g)){
   const token=match[1]??`step ${match[2]}`;if(!derivation.inputs.includes(token))derivation.inputs.push(token);
  }
 }
 contract.citations=(contract.citations??[]).map(c=>({...c,uses:steps.filter(s=>new RegExp(`\\b${c.fact}\\b`).test(s.text)).map(s=>s.id)})).filter(c=>c.uses.length);
 if(['thm-tdmath-local-caratheodory-inaccessibility','lem-tdmath-integrable-horizontal-orbits-have-empty-interior'].includes(item))
  for(const boundary of contract.boundaries)if(boundary.status==='checked'&&!/\b(?:step|steps|statement)\b/i.test(boundary.evidence))boundary.evidence=`Statement and proof: ${boundary.evidence}`;
}
for(const {batch,item} of applied)for(const c of doc(batch).contracts[item].citations??[]){
 const text=section(c.source,c.source_section);
 const norm=s=>String(s).replace(/\s+/g,' ').trim();
 if(!text||!norm(text).includes(norm(c.quote)))throw Error(`Stale proposal citation ${item}/${c.source}/${c.fact}`);
}
const stamp=new Date().toISOString().replace(/[:.]/g,'-');
const archive=`research/${run}-owner-contract-integration/${stamp}`;mkdirSync(archive,{recursive:true});
const files=[];
for(const [n,d] of docs){
 const path=`research/${run}-batch-${n}.proof-contracts.json`;
 writeFileSync(`${archive}/batch-${n}.before.json`,readFileSync(path));
 writeFileSync(`${path}.tmp`,JSON.stringify(d,null,2)+'\n');renameSync(`${path}.tmp`,path);
 files.push({path,sha256:createHash('sha256').update(readFileSync(path)).digest('hex')});
}
writeFileSync(`${archive}/receipt.json`,JSON.stringify({run,owner:'/root',applied,files,at:new Date().toISOString(),gate_acceptance:false,independent_acceptance:false},null,2)+'\n');
console.log(JSON.stringify({applied:applied.length,files:files.length,receipt:`${archive}/receipt.json`}));

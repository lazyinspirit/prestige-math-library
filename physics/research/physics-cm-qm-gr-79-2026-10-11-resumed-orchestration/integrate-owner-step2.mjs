// Owner-only mechanical integration after every source author has drained.
import fs from 'node:fs';
import { yaml } from '../../../tools/physics-support/pathway-lib.mjs';
import { splitFrontmatter, factParagraphs, wikilinks, sourceSectionText, SOURCE_SECTIONS } from '../../../tools/physics-support/facts-block.mjs';
import { dependencyLevels } from '../../../tools/physics-support/item-dependency-levels.mjs';
import { spawnSync } from 'node:child_process';

const run='physics-cm-qm-gr-79-2026-10-11';
const read=p=>fs.readFileSync(p,'utf8'), json=p=>JSON.parse(read(p));
const write=(p,v)=>{ const s=typeof v==='string'?v:JSON.stringify(v,null,2)+'\n'; if(!fs.existsSync(p)||read(p)!==s) fs.writeFileSync(p,s); };
const files=Array.from({length:79},(_,i)=>`research/${run}-batch-${i+1}.pages.json`);
for(let i=1;i<=79;i++) if(json(`research/${run}-scope-review/batch-${i}/state.json`).phase!=='accepted') throw Error(`Unresolved batch ${i}`);
const manifests=files.map(json), sources=new Map();
function source(id){
  if(!sources.has(id)){
    const p=`items/${id}.md`,raw=read(p),{fm,body}=splitFrontmatter(raw),doc=yaml().parseDocument(fm);
    if(doc.errors.length)throw Error(`${id}: ${doc.errors.join('; ')}`);
    sources.set(id,{p,raw,body,doc,fm:doc.toJS()});
  }
  return sources.get(id);
}
function field(s,key,value){if(JSON.stringify(s.fm[key])!==JSON.stringify(value)){s.doc.set(key,value);s.fm[key]=value;s.changed=true;}}
const newId='def-cm-finite-regularity-canonical-calculus';
const canonical=manifests[5][0];
if(!canonical.items.some(i=>i.id===newId)){
  const s=source(newId);
  const item={id:newId,kind:s.fm.kind,domain:s.fm.domain,title:s.fm.title,reference:'local Step-2 finite-regularity prerequisite repair',design_state:'owner-accepted local definition',inventory_expansion_required:false};
  canonical.items.splice(1,0,item);
}
const explicit={
  'pthm-cm16-separatrix-splitting-and-horseshoe':['thm-explicit-perturbed-horseshoe-and-transversality','lem-close-map-first-component-has-uniform-inverse'],
  'thm-cm-euler-equations-and-torque-free-invariants':['cor-zero-derivative-implies-constant'],
  'thm-cm-stability-of-extreme-principal-axes':['cor-zero-derivative-implies-constant'],
  'thm-cm-instability-of-the-intermediate-axis':['cor-zero-derivative-implies-constant'],
  'thm-cm-heavy-top-reduction':['cor-zero-derivative-implies-constant'],
  'pthm-cm11-torque-free-invariants':['thm-heine-borel-rn'],
  'thm-cm-verlet-finite-time-error-is-quadratic':['lem-cm-local-flow-composition-law'],
  'rem-cm18-numerical-error':['def-cm18-sampling-model'],
  'cex-cm18-finite-sample-may-miss-the-signal':['pthm-cm02-ivp'],
  'lem-perturbed-scalar-recurrence-root-bounds':['thm-heine-borel-rn'],
  'lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators':['thm-spectral-theorem-for-compact-self-adjoint-operators','cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator','lem-compositions-with-a-compact-operator-are-compact','thm-self-adjoint-resolvent-estimate','cor-finite-dimensional-subspaces-are-closed'],
  'ex-nrqm-potentials-box-spectrum-and-nodes':['thm-sine-cosine-zero-sets-and-fundamental-period'],
  'thm-nrqm-coulomb-two-body-reduced-mass':['lem-nrqm-central-positive-scaling-spectral-measure','thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions'],
  'thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum':['thm-natural-logarithm-laws'],
  'def-nrqm-scattering-framework-short-range-model':['thm-lebesgue-measure-under-dilations-and-reflections'],
  'ex-nrqm-magnetic-and-detection-finite-dark-bin-probability':['cor-pi-is-the-first-positive-sine-zero'],
  'thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian':['def-adjoint-of-a-densely-defined-unbounded-operator'],
  'pthm-nrqm-kinematics-spin-s-outcome-laws':['cor-second-countable-lch-locally-finite-borel-measures-are-regular','thm-heine-borel-rn'],
  'cex-nrqm-observables-plane-wave-is-not-a-preparation':['ex-nrqm-observables-position-bin-probabilities'],
  'ex-gr-killing-energy-charge-of-a-static-dust':['lem-gr-killing-congruence-kinematics-and-energy-current'],
  'lem-gr-kruskal-causal-escape-and-trapping':['thm-picard-lindelof-local-existence-and-uniqueness'],
  'pthm-gr-schwarzschild-circular-orbit-predictions':['pthm-gr-free-fall-worldline-is-determined-by-initial-data','thm-gr-local-geodesics-and-exponential-map'],
  'ex-gr-sinusoidal-tt-plane-wave':['def-gr-si-unit-and-coordinate-conventions'],
  'thm-gr-dust-subsidiary-and-residual-vanishing':['thm-gr-auxiliary-complete-riemannian-metric','lem-gr-basic-limit-curve'],
  'def-gr-common-subdevelopment-and-corresponding-boundary':['lem-gr-cauchy-set-topology-and-graph'],
};
for(const id of ['def-cm-material-region-and-density','def-cm17-density-and-mass','post-cm17-mass-balance','post-cm17-momentum-balance','def-cm-scalar-conservation-law-weak-and-entropy-solution','thm-cm-burgers-riemann-shock-and-rarefaction','ex-cm-burgers-riemann-checks','ex-cm17-riemann-shock-and-rarefaction-check','ex-cm17-uniform-expansion-transport-check','ex-cm17-periodic-shear-exact-solution-check','post-cm17-fluid-constitutive']) explicit[id]=['def-countable-choice'];
explicit['def-cm-material-region-and-density'].push('thm-lebesgue-measure-is-a-complete-measure');
const removed={
  'post-nrqm-photons-radiation-extension-and-transverse-mode-assignment':['cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit'],
  'thm-gr-weak-field-einstein-stress-hierarchy':['thm-gr-dust-local-evolution'],
  'lem-gr-boundary-null-geodesic-segment':['thm-gr-length-upper-semicontinuity'],
  'ex-gr-killing-energy-charge-of-a-static-dust':['pthm-gr-local-energy-balance'],
};
function role(s,dep){
  const t=source(dep).fm;
  if(t.domain!=='physics')return 'mathematical-premise';
  if(t.kind==='definition')return 'formulation-prerequisite';
  if(['postulate','experiment'].includes(s.fm.kind))return dep.startsWith('def-')?'formulation-prerequisite':'operational-prerequisite';
  return t.kind==='postulate'?'physical-assumption':t.kind==='experiment'?'empirical-premise':'physical-result';
}
const changes=[], missing=[];
for(const pages of manifests)for(const page of pages)for(const item of page.items){
  const s=source(item.id), facts=[...factParagraphs(s.body).values()].flatMap(f=>f.links);
  if(item.id==='pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness')field(s,'physical_scope',s.fm.physical_scope.replace('C(1+|x|)^(-1-delta), delta>0','C(1+|x|/L*)^(-1-delta), delta>0, with reference length L*>0 and C in joules'));
  // Definition discharge links are evidence, never reverse logical edges.
  const finite=wikilinks(sourceSectionText(s.body,'Definition')).includes(newId)?[newId]:[];
  const added=[...facts,...finite,...(explicit[item.id]??[])].filter(d=>d!==item.id&&!(s.fm.justified_by??[]).includes(d));
  const deps=[...new Set([...(s.fm.deps??[]),...added])].filter(d=>!(removed[item.id]??[]).includes(d));
  for(const d of deps)if(!fs.existsSync(`items/${d}.md`))missing.push(`${item.id}: missing supplier ${d}`);
  const roles={};for(const d of deps)roles[d]=s.fm.dependency_roles?.[d]??(fs.existsSync(`items/${d}.md`)?role(s,d):'mathematical-premise');
  if(item.id==='ex-gr-sinusoidal-tt-plane-wave')roles['def-gr-si-unit-and-coordinate-conventions']='formulation-prerequisite';
  field(s,'deps',deps);field(s,'dependency_roles',roles);
  for(const key of ['kind','domain','title','deps','dependency_roles','justified_by','forward_refs','provenance','sources','physical_scope','framework','empirical_qualifications','empirical_premises']) if(key in s.fm) item[key]=s.fm[key];
  if(typeof item.statement==='string') item.statement=[...SOURCE_SECTIONS].map(h=>sourceSectionText(s.body,h)?.trim()).find(Boolean)??item.statement;
}
if(missing.length)throw Error(missing.join('\n'));
manifests[78][1].requires=manifests[78][1].requires.filter(p=>p!=='gr-flat-and-newtonian-bridges');
const graph=dependencyLevels(manifests.flat(),{validateLabels:false});if(graph.errors.length)throw Error(graph.errors.join('\n'));
for(const pages of manifests)for(const page of pages)for(const item of page.items){const level=graph.levels.get(item.id);item.dependency_level=level;field(source(item.id),'dependency_level',level);}
for(const [id,s] of sources)if(s.changed){write(s.p,`---\n${s.doc.toString().trimEnd()}\n---\n${s.body}`);changes.push(id);}
files.forEach((p,i)=>write(p,manifests[i]));
const plan=json('research/plan-spec.json');
for(const pages of manifests)for(const page of pages){
  const target=plan.pages.find(p=>p.id===page.id);if(!target)throw Error(`Missing approved page ${page.id}`);
  target.items=page.items;target.requires=page.requires;
  const pageFile=`library/${page.category}/${page.id}.md`;
  if(fs.existsSync(pageFile)){
    const raw=read(pageFile),{fm,body}=splitFrontmatter(raw),doc=yaml().parseDocument(fm);
    doc.set('requires',page.requires);
    // Preserve the page's item/examples placement, adding only the approved local definition.
    if(page.id===canonical.id)doc.set('items',page.items.map(i=>i.id));
    write(pageFile,`---\n${doc.toString().trimEnd()}\n---\n${body}`);
  }
}
write('research/plan-spec.json',plan);
for(let i=1;i<=79;i++){
  const p=`research/${run}-batch-${i}.proof-contracts.json`,doc=json(p);
  const formattingOnly=process.argv.includes('--after-formatting');
  const affected=formattingOnly?new Set([...json(`research/${run}-resumed-orchestration/owner-step2-format-metadata.json`).failures.map(r=>r.id),'thm-gr-flat-linearized-curvature-and-gauge','thm-nrqm-fock-and-equilibrium-number-operator-domain','pthm-nrqm-photons-one-photon-number-energy-and-momentum-laws']):null;
  const ids=Object.keys(doc.contracts??{}).filter(id=>!affected||affected.has(id));
  if(!ids.length)continue;
  const result=spawnSync(process.execPath,['tools/physics-support/regen-contract-entries.mjs',p,...ids],{encoding:'utf8'});
  if(result.status!==0)throw Error(result.stderr||result.stdout);
  if(result.stderr)process.stderr.write(result.stderr);
}
write(`research/${run}-resumed-orchestration/owner-step2-integration.json`,{run,at:new Date().toISOString(),accepted_batches:79,metadata_changed_items:changes,new_local_definition:newId,scope:'Metadata, inventory, dependency labels and current proof-contract quotations only; no proof edits or gate claims.'});
console.log(JSON.stringify({accepted_batches:79,frontier_items:graph.items.size,metadata_changed_items:changes.length}));

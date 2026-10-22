// Builds an explicit root proposal only; production application is separate.
import {readFileSync,readdirSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {readItem} from '../tools/physics-support/physics-content.mjs';
import {factParagraphs} from '../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',prefix=`research/${run}-owner-step2-`;
const sha=b=>createHash('sha256').update(b).digest('hex'),guards=new Map();
const read=p=>{const b=readFileSync(p);guards.set(p,sha(b));return JSON.parse(b);};
const importedPaths=new Set(read('research/math-imports.json').files.map(r=>r.path));
const prop=(d,f)=>read(`${prefix}${d}/${f}`),models=new Map(),bases=new Map(),reasons=new Map();
function model(id){if(!models.has(id)){const p=`items/${id}.md`,s=readItem(p);models.set(id,s);bases.set(id,s);guards.set(p,sha(s.raw));}return models.get(id);}
function note(id,reason){if(!reasons.has(id))reasons.set(id,[]);reasons.get(id).push(reason);}
function field(id,k,v,reason){const s=model(id);models.set(id,{...s,[k]:v});note(id,reason);}
function add(id,rows,reason){
 let s=model(id),deps=[...(s.deps??[])],roles={...(s.dependency_roles??{})};
 for(const r of rows){const dep=typeof r==='string'?r:r.id,role=typeof r==='string'?'mathematical-premise':r.role;
  if(!existsSync(`items/${dep}.md`))throw Error('Missing exact declared supplier '+dep);
  if(!deps.includes(dep))deps.push(dep);roles[dep]=role;
 }
 models.set(id,{...s,deps,dependency_roles:roles});note(id,reason);
}
function remove(id,dep,reason){const s=model(id),roles={...(s.dependency_roles??{})};delete roles[dep];models.set(id,{...s,deps:(s.deps??[]).filter(x=>x!==dep),dependency_roles:roles});note(id,reason);}
const ids=new Set(readdirSync('research').filter(n=>n.startsWith(run+'-batch-')&&n.endsWith('.pages.json')).flatMap(n=>read(`research/${n}`).flatMap(p=>p.items.map(i=>i.id))));
const helpers=['def-emg-fx-continuous-compact-top-form-integral','lem-nrqmx-continuous-simplex-integrals','lem-qsmx-separable-positive-generator-spectral-measures','lem-qsmx-gaussian-ground-correlation-filter','thm-qsmx-gapped-ground-state-clustering','cex-qsmx-degenerate-gap-not-clustering','lem-tgrx-locally-finite-relative-chain-model'];
for(const id of [...helpers,'thm-qsm-finite-gibbs-variational','thm-gr-constraint-equations-in-normal-frame'])ids.add(id);
for(const id of ids){
 const s=model(id),declared=new Set([...(s.deps??[]),...(s.justified_by??[]),...(s.forward_refs??[])]);
 for(const f of factParagraphs(s.body).values())for(const dep of f.links)if(!declared.has(dep)){
  if(!existsSync(`items/${dep}.md`))throw Error(`Undeclared non-item link ${id}:${f.label} -> ${dep}`);
  const supplier=readItem(`items/${dep}.md`);guards.set(`items/${dep}.md`,sha(supplier.raw));
  if(!supplier.domain&&!importedPaths.has(`items/${dep}.md`))throw Error('Untyped non-import supplier '+dep);
  const role=supplier.domain==='mathematics'||!supplier.domain&&importedPaths.has(`items/${dep}.md`)?'mathematical-premise':supplier.kind==='postulate'?'physical-assumption':supplier.kind==='experiment'?'empirical-premise':['physics-theorem','thought-experiment'].includes(supplier.kind)?'physical-result':'formulation-prerequisite';
  add(id,[{id:dep,role}],`Declare exact existing ${f.label} supplier; no scientific body change`);declared.add(dep);
 }
}
const em2=prop('em2-escalation','root-dependency-proposal.json');add(em2.subject,em2.addDeps,'Sealed EM2 explicit scalar trigonometric/integral premises');
const em5=prop('em5-consumers','root-mirror-proposal.json');add(em5.id,em5.add_deps,'Sealed full general lossless Poynting restoration');field(em5.id,'physical_scope',em5.physical_scope,'Exact full lossless operational scope, retained material instances');
for(const row of prop('em6-escalation','root-mirror-proposals.json'))if(row.source_frontmatter_proposal)field(row.id,row.source_frontmatter_proposal.field,row.source_frontmatter_proposal.new,'Sealed full isotropic sphere scope restoration');
const em7=prop('em7-escalation','root-metadata-proposal.json');add(em7.source_id,em7.add_direct_deps,'Sealed closed-ball compactness/measure premises');
for(const row of prop('em9-completeness','dependency-proposal.json').add)add(row.id,[{id:row.dep,role:row.role}],'Exact real LUB clause used in current proof');
for(const d of ['emg26-choice','nrqm51-simplex','tgr126-chain-area-successor']){
 const proposal=prop(d,'metadata-proposal.json');
 for(const row of proposal.existing_items){const x=row.source_frontmatter??{};if(x.append_deps?.length)add(row.id,x.append_deps.map(id=>({id,role:x.append_dependency_roles?.[id]??'mathematical-premise'})),`Sealed ${d} exact new helper/geometry premises`);}
}
const gr33=prop('gr33-consumers','root-mirrors.json');add('prop-gr-fx-memory-integral',gr33.memory_added_direct_deps,'Sealed actual smooth-family quantitative memory estimate');field('prop-gr-fx-memory-integral','physical_scope',gr33.memory_proposed_physical_scope,'Preserve both formal and controlled smooth-family branches');
const gr37=prop('gr37-source-boundary','root-metadata-proposal.json');field(gr37.id,'deps',gr37.sourceFrontmatterDepsMustBecome,'Exact actually used source-boundary context');field(gr37.id,'dependency_roles',gr37.dependencyRoles,'Exact owner-reviewed source-boundary dependency roles');
for(const d of ['gr39-leapfrog','nrqm49-spin','nrqm57-factorization'])for(const row of prop(d,'root-mirror-proposal.json').items)add(row.id,row.add_deps_roles??[],'Sealed exact scalar/tensor proof premises');
const nr53=prop('nrqm53-landau','root-mirror-proposal.json');add(nr53.id,nr53.add_deps_roles,'Sealed explicit Landau cutoff DCT proof');
const chiral=prop('qft63-complexification','source-release-report.json');
if(chiral.production_edits.length!==1)throw Error('Unexpected chiral repair scope');
add(chiral.production_edits[0].replace(/^items\//,'').replace(/\.md$/,''),['def-complexification-of-a-real-lie-algebra'],'Sealed QFT63 explicit complexification definition');
for(const d of ['qft71-ball','qft72-nullcone']){const row=prop(d,'root-metadata-proposal.json');add(row.id,row.newDeps,'Sealed exact measure/box premises');}
const q101=prop('qsm101-gibbs-log','metadata-proposal.json');add(q101.supplier,q101.append_deps,'Sealed exact scalar logarithm prerequisites and complete proof review');
const n96=prop('nrqm96-boundary-mle','root-mirror-proposal.json');add(n96.id,n96.add_deps_roles,'Sealed exact log likelihood and MVT proof');
remove('lem-nrqmx-determinant-curvature-is-trace','def-countable-choice','Sealed47 unchanged unconditional Statement and current choice-free proof');
const jt=prop('tgr117','root-mirrors.json').remove_item_dependency;for(const dep of jt.deps_remove)remove(jt.id,dep,'Sealed117 exact context-only item-edge correction; approved page reading edge retained');
function references(id,patches){
 const s=model(id),sources=structuredClone(s.sources??{}),refs=sources.references??=[];
 const key=url=>String(url).replace('/abs/','/pdf/').replace(/v\d+(?:\.pdf)?$/,'').replace(/\.pdf$/,'');
 for(const patch of patches){const i=refs.findIndex(r=>key(r.url)===key(patch.url));if(i<0)refs.push(patch);else refs[i]={...refs[i],...patch};}
 sources.references=refs;field(id,'sources',sources,'Exact actual-source locator and reading-boundary proposal');
}
references(gr37.id,gr37.sourceReferenceUpdateOrAddition);
const locators=prop('jt128-locators','proposed-frontmatter-locators.json').locators;
for(const[id,locator]of Object.entries(locators)){
 const s=model(id),refs=s.sources.references.filter(r=>/1903\.11115/.test(r.url));if(refs.length!==1)throw Error('Ambiguous SSS reference '+id);references(id,[{...refs[0],locator}]);
}
const qnecId='rem-tgrx-qnec-qfc-status',qnec=model(qnecId),qnecRefs=qnec.sources.references.filter(r=>/1509\.02542/.test(r.url));
if(qnecRefs.length!==1)throw Error('Ambiguous QNEC source');
const qnecReport=`${prefix}tgr124-qnec-status/source-release-report.json`;read(qnecReport);
references(qnecId,[{...qnecRefs[0],locator:'arXiv:1509.02542v2: abstract/outline; §2 equation (2.2) general conjecture; §3.1 D>2 stationary-null proof scope; §4.5 equation (4.63) completion; §5 equation (5.5) D=2 free-scalar form and qualified extensions. Actual reading: PDF pp. 1, 5, 7–9, 24–27; no replica-proof audit or local QNEC proof is claimed.'}]);
for(const a of [
 {id:'thm-gr-constraint-equations-in-normal-frame',file:`${prefix}gr32-supplier/report.json`,raw:'2f3e030100cf58db0abe8c9ace9782b15e8bd1c8ddc2c2248e7cfee0a0ebff2e'},
 {id:'thm-qsm-finite-gibbs-variational',file:`${prefix}qsm101-gibbs-log/complete-proof-review.json`,raw:'be44e10768e87798c7a8576809027a56134c1f31fba94b1725554f7ca9ce34bf'}]){
 const report=read(a.file),source=bases.get(a.id);if(sha(source.raw)!==a.raw||!JSON.stringify(report).includes(a.raw))throw Error('Unbound complete-proof audit '+a.id);
 field(a.id,'verification',{...(model(a.id).verification??{}),verified:{model:'gpt-6.1-sol',verdict:'pass',date:'2026-10-21',scope:`Complete current Statement, Facts and proof reviewed by delegated same-owner reviewer; exact reading limits and source bindings in ${a.file}.`,delegated_by:'/root'}},'Truthful documented delegated full-proof review, not an invented owner audit');
}
const fields=['deps','dependency_roles','physical_scope','sources','verification'];
const operations=[];
for(const[id,s]of models){const old=bases.get(id),changed=Object.fromEntries(fields.filter(k=>JSON.stringify(old[k])!==JSON.stringify(s[k])).map(k=>[k,s[k]]));if(Object.keys(changed).length)operations.push({id,before_sha256:sha(old.raw),fields:changed,reason:[...new Set(reasons.get(id)??[])],evidence:'Actual native full-batch pass and sealed same-owner source/consumer proposals; current bodies unchanged by this operation'});}
const out={run,at:new Date().toISOString(),status:'Explicit metadata proposal; not applied',operations,guards:[...guards].map(([path,sha256])=>({path,sha256}))};
const n=process.argv.indexOf('--out');if(n>=0){const p=process.argv[n+1];if(!p||existsSync(p))throw Error('Require unused output path');writeFileSync(p,JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify({operations:operations.length,guards:guards.size,out:p}));}else console.log(JSON.stringify(out,null,2));

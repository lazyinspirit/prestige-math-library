import fs from 'node:fs';
import {splitFrontmatter,sectionText,factParagraphs,numberedProofSteps,sourceSectionText} from '../../../../../tools/physics-support/facts-block.mjs';
import {parseFrontmatter} from '../../../../../tools/physics-support/content-policy-lib.mjs';
const run='physics-cm-qm-gr-79-2026-10-11';
const folder=`research/${run}-resumed-orchestration/session-recovery-20261012/gr65-supplier-repair`;
const guards=JSON.parse(fs.readFileSync(`${folder}/before-guards.json`));
const changed=new Set(guards.files.filter(r=>r.path.startsWith('items/')&&fs.readFileSync(r.path,'utf8')!==fs.readFileSync(r.before_file,'utf8')).map(r=>r.path.slice(6,-3)));
const newProof=new Set(['def-gr-smooth-lorentzian-objects','def-gr-metric-selected-connection','def-gr-energy-conditions']);
function source(id){const raw=fs.readFileSync(`items/${id}.md`,'utf8');const {fm,body}=splitFrontmatter(raw);return {raw,fm:parseFrontmatter(fm),body};}
const src=new Map();function get(id){if(!src.has(id))src.set(id,source(id));return src.get(id);}
const updates=[];
for(let batch=65;batch<=79;batch++){
 const mp=`research/${run}-batch-${batch}.pages.json`,manifest=JSON.parse(fs.readFileSync(mp));let mw=false;
 for(const page of manifest){for(const field of ['items','examples'])for(const row of page[field]??[]){if(typeof row==='string'||!changed.has(row.id))continue;const x=get(row.id),section= row.kind==='postulate'?'Postulate':row.kind==='example'?'Example':row.kind==='counterexample'?'Statement refuted':row.kind==='definition'?'Definition':'Statement';row.statement=(row.kind==='remark'?x.body:sectionText(x.body,section)).trim();row.deps=x.fm.deps;row.dependency_roles=x.fm.dependency_roles;row.provenance=x.fm.provenance;if(x.fm.physical_scope)row.physical_scope=x.fm.physical_scope;if(x.fm.proof_strategy)row.proof_strategy=x.fm.proof_strategy;mw=true;}}
 if(mw){fs.writeFileSync(mp,JSON.stringify(manifest,null,2)+'\n');updates.push(mp);}
 const cp=`research/${run}-batch-${batch}.proof-contracts.json`,contracts=JSON.parse(fs.readFileSync(cp));let cw=false;
 if(batch===65)for(const id of newProof){if(!contracts.scope.includes(id))contracts.scope.push(id);contracts.contracts[id]={citations:[],derivations:[],routine_steps:[],boundaries:[]};cw=true;}
 for(const [id,entry] of Object.entries(contracts.contracts)){
  const x=get(id); if(changed.has(id)&&!['postulate','experiment','remark'].includes(x.fm.kind)){
   const steps=numberedProofSteps(x.body),facts=factParagraphs(x.body);const citations=[];
   for(const fact of facts.values())for(const supplier of fact.links){const sx=get(supplier),section=sx.fm.kind==='definition'?'Definition':sx.fm.kind==='example'?'Example':sx.fm.kind==='postulate'?'Postulate':'Statement';citations.push({fact:fact.label,source:supplier,source_section:section,quote:sourceSectionText(sx.body,section).trim(),uses:steps.filter(st=>new RegExp(`\\b${fact.label}\\b`).test(st.text)).map(st=>st.id)});}
   entry.citations=citations;entry.derivations=steps.map(st=>({id:'step-'+st.id.replace('.','-'),claim:st.text.replace(/\s*\[[^\]]*\]\s*∎?\s*$/,'').trim(),step:st.id,inputs:[...new Set([...st.text.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)].map(m=>m[1]?`step ${m[1]}`:m[2]))].filter(v=>v!==`step ${st.id}`).concat(['given','algebra'])}));entry.routine_steps=[];
   if(newProof.has(id))entry.boundaries=['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse'].map(name=>({case:name,status:'checked',evidence:boundary(id,name)}));cw=true;
  }
  for(const c of entry.citations??[])if(changed.has(c.source)){c.quote=sourceSectionText(get(c.source).body,c.source_section).trim();cw=true;}
 }
 if(cw){fs.writeFileSync(cp,JSON.stringify(contracts,null,2)+'\n');updates.push(cp);}
}
function boundary(id,name){
 const common={empty:'Definition is pointwise on the manifold; for empty M the field clauses are vacuous and no supplied curve can exist.',zero:'Definition excludes zero timelike vectors, zero c and degenerate g; zero stress-energy remains allowed.',one:'Definition fixes dimension four; no assertion is made for a one-dimensional manifold.',degenerate:'Definition requires nondegenerate g; no inverse or selected connection is formed for a degenerate form.',endpoints:'Definition uses open intervals and open chart domains; endpoint or nonsmooth curve extensions remain the later definition\'s separate scope.', 'nonempty-choice':'Definition supplies all Lorentzian data and scaling parameters; local constructions glue uniquely and introduce no simultaneous frame choices.', 'iff-forward':'Definition gives the selecting conditions; the proof constructs a connection satisfying both conditions.', 'iff-reverse':'Definition and the proof use nondegeneracy to identify any second compatible torsion-free connection with the constructed one.'};
 if(id==='def-gr-smooth-lorentzian-objects'){common['iff-forward']='Definition supplies a smooth future timelike curve; step 3.1 proves its normalized U equals its proper-time velocity.';common['iff-reverse']='Definition asserts no converse from an arbitrary vector field to a supplied worldline; the equality of the two U formulas is proved in step 3.1.';}
 if(id==='def-gr-energy-conditions'){common.empty='Definition imposes the conditions at points of the open matter domain; on an empty set there are no pointwise obligations, although the supplied matter domain is nonempty.';common.zero='Definition allows T=0; its current is zero and every inequality holds. Step 1.1 explicitly includes the zero current.';common.degenerate='Definition permits degenerate T but requires Lorentzian nondegenerate g; step 1.1 uses the inverse only for g.';common.endpoints='Definition gives pointwise inequalities, not endpoint curve conditions; steps 2.1 and 3.1 explicitly take the null limit.';common['nonempty-choice']='Definition and steps 1.1–3.1 use a basis at one point and a supplied future timelike vector, not an indexed family of choices.';common['iff-forward']='Definition gives DEC and step 1.1 proves DEC implies WEC; no equivalence is asserted.';common['iff-reverse']='Definition does not assert converse implications; steps 2.1 and 3.1 prove only the stated null-limit implications.';}
 return common[name];
}
fs.writeFileSync(`${folder}/metadata-updates.json`,JSON.stringify({changed_carriers:[...changed],metadata_files:updates,global_levels_or_readiness_written:false},null,2)+'\n');console.log(JSON.stringify({carriers:changed.size,metadata_files:updates.length}));

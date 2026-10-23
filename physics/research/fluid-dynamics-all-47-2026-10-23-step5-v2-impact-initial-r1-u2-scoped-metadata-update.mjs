import {readFileSync,writeFileSync} from 'node:fs';
import {splitFrontmatter,sourceSectionText,SOURCE_SECTIONS,factParagraphs,numberedProofSteps} from '../tools/physics-support/facts-block.mjs';
import {parseFrontmatter} from '../tools/physics-support/content-policy-lib.mjs';
const run='fluid-dynamics-all-47-2026-10-23';
const groups={11:['pthm-fd-newtonian-kinetic-decay'],23:['prop-fd-viscous-entropy-passage'],25:['prop-fd-bgk-entropy-rate'],26:['pthm-fd-bgk-equilibration','pthm-fd-boltzmann-entropy','pthm-fd-ideal-gas-euler-interface']};
const all=new Set(Object.values(groups).flat());
const state=id=>{const raw=readFileSync(`items/${id}.md`,'utf8');const {fm,body}=splitFrontmatter(raw);return {raw,body,meta:parseFrontmatter(fm)};};
const statement=id=>{const s=state(id);for(const heading of SOURCE_SECTIONS){const text=sourceSectionText(s.body,heading)?.trim();if(text)return {heading,text};}throw Error(`Missing claim ${id}`);};
const changed=[];
for(const [batch,ids] of (process.argv.includes('--quotes-only')?[]:Object.entries(groups))){
 const path=`research/${run}-batch-${batch}.proof-contracts.json`;
 const doc=JSON.parse(readFileSync(path,'utf8')); // reread under the shared lock
 for(const id of ids){
  const c=doc.contracts[id];if(!c)throw Error(`Missing contract ${id}`);
  const {body}=state(id), steps=numberedProofSteps(body), facts=[...factParagraphs(body).values()];
  const citations=[];
  for(const f of facts){for(const source of new Set(f.links)){
   const {heading,text}=statement(source);
   const uses=steps.filter(s=>new RegExp(`\\b${f.label}\\b`).test(s.text)).map(s=>s.id);
   const old=(c.citations??[]).find(x=>x.fact===f.label&&x.source===source);
   citations.push({...old,fact:f.label,source,source_section:heading,quote:text,uses});
  }}
  c.citations=citations;
  c.derivations=steps.map(s=>{const old=(c.derivations??[]).find(x=>x.step===s.id);return {...old,id:id==='pthm-fd-newtonian-kinetic-decay'?`step-${s.id.replace('.','-')}`:old?.id??`step-${s.id.replace('.','-')}`,step:s.id,claim:s.claim,inputs:s.inputs};});
  const st=statement(id).text;
  for(const row of c.boundaries??[]){if(row.case_scope?.source_section==='Statement')row.case_scope.source_excerpt=st;}
  if(id==='pthm-fd-newtonian-kinetic-decay'){
   for(const b of c.boundaries??[])if(b.evidence)b.evidence=b.evidence.replaceAll('3.1','4.1');
   for(const f of c.finite_checks??[])if(f.inputs)f.inputs=f.inputs.map(x=>x.replace('3.1','4.1'));
   const row=c.boundaries.find(x=>x.case==='nonempty-choice');
   row.status='not_applicable';row.reason='Proof 2.1 uses finite meshes and the content-zero C1 boundary, and 3.1 uses uniform derivative control on a compact fixed domain. No additional choice assumption or Lebesgue divergence theorem is invoked.';delete row.evidence;
   c.finite_checks_disposition='The stress contraction is algebraic. Proof 2.1 supplies the zero-flux integral by finite Jordan meshes and 3.1 justifies time differentiation, without a new choice axiom; no empirical check or proof acceptance is asserted.';
  }
  if(['prop-fd-bgk-entropy-rate','pthm-fd-bgk-equilibration','pthm-fd-boltzmann-entropy','pthm-fd-ideal-gas-euler-interface'].includes(id)){
   const row=c.boundaries.find(x=>x.case==='nonempty-choice');
   row.status='checked';row.evidence='The Statement explicitly assumes Countable Choice, inherited from the kinetic measure convention and (where used) the Maxwellian Gaussian moment comparison. No full AC or dependent-choice selection is added.';delete row.reason;
  }
  for(const key of ['supplier_excerpts','planned_supplier_excerpts'])for(const row of (Array.isArray(c[key])?c[key]:Object.values(c[key]??{}))){const source=row.supplier??row.id;if(source&&all.has(source)){const st=statement(source);if('exact_statement' in row)row.exact_statement=st.text;if('source_section' in row)row.source_section=st.heading;}}
 }
 writeFileSync(path,JSON.stringify(doc,null,2)+'\n');changed.push(path);
 const manifestPath=`research/${run}-batch-${batch}.pages.json`;
 const pages=JSON.parse(readFileSync(manifestPath,'utf8')); // current sibling edits preserved
 for(const page of pages){for(const row of [...(page.items??[]),...(page.examples??[])]){if(row&&typeof row==='object'&&ids.includes(row.id)){
  const {meta}=state(row.id);row.statement=statement(row.id).text;
  for(const key of ['deps','dependency_roles','dependency_level'])if(meta[key]!==undefined)row[key]=meta[key];
 }}}
 // The new integration suppliers are already reached through fd-f01, and the
 // kinetic measure/Countable Choice suppliers through fd-k01. Existing page
 // prerequisite disclosures therefore retain those same ancestor pages.
 writeFileSync(manifestPath,JSON.stringify(pages,null,2)+'\n');changed.push(manifestPath);
}
console.log(JSON.stringify({owner:'step5-v2-impact-initial-r1-u2',changed,scope:[...all]}));
const ledgerPath='research/published-consumer-supplier-ledger.md';
const ledger=readFileSync(ledgerPath,'utf8');
const marker='<!-- fluid-dynamics-all-47-2026-10-23-impact-u2-riemann-fubini-use -->';
if(!ledger.includes(marker)){
 const anchor='Exact scoped ledger ID: `fluid-dynamics-all-47-2026-10-23-3a-batch-37-published-1`.';
 if(!ledger.includes(anchor))throw Error('Missing existing canonical Fubini maintenance record');
 const note=`\n\n${marker}\nFocused Step-5 impact owner use supplement, unit 2: the same imported Statement was read for \`pthm-fd-newtonian-kinetic-decay\` F2 and Proof 2.1. On each finite mesh cube the divergence components and all coordinate sections are continuous, so the supplier's ordinary iterated-integral clause applies; periodic opposite-face cancellation uses the same clause. Proof 3.1 separately establishes time differentiation by a uniform mean-value estimate. The inline \`def-sections-and-iterated-riemann-integrals\` link remains an editorial defect only. Retain the existing mathematics-owner maintenance OPEN; no new defect, imported repair, whole-supplier audit or acceptance is claimed. Repair strategy remains moving that retained link after the complete Statement without changing hypotheses. Current scoped report: \`research/${run}-step5-v2/step5-v2-impact-initial-r1-u2.json\`.\n`;
 writeFileSync(ledgerPath,ledger.replace(anchor,anchor+note));console.log('Supplemented existing canonical published Fubini-use evidence.');
}

// Only exact stale supplier quotations identified by this lane's focused strict checks.
const quoteRepairs={
 6:{'thm-fd-x05':['def-fd-x00'],'thm-fd-x08':['def-fd-x00'],'thm-fd-x09':['def-fd-x00']},
 13:{'pthm-fd-px05-prediction':['def-fd-x00'],'pthm-fd-px08-prediction':['def-fd-incompressible-newtonian-model','def-fd-x00'],'pthm-fd-px09-prediction':['def-fd-x00'],'ex-fd-x05-application':['def-fd-x00'],'ex-fd-x09-application':['def-fd-x00']},
 18:{'ex-fd-periodic-poiseuille-body-force':['def-fd-flat-channel-domains']},
 20:{'pthm-fd-local-periodic-incompressible-model-evolution':['def-fd-incompressible-newtonian-model']},
 22:{'prop-fd-bounded-evolving-pressure':['thm-fd-bounded-global-weak-existence']},
 24:{'pthm-fd-bounded-weak-continuation':['thm-fd-bounded-global-weak-existence']},
 40:{'pthm-fd-geophysical-conditional-energy':['thm-fd-stratified-linear-energy']}
};
for(const [batch,subjects] of Object.entries(quoteRepairs)){
 const path=`research/${run}-batch-${batch}.proof-contracts.json`;
 const doc=JSON.parse(readFileSync(path,'utf8'));
 for(const [id,sources] of Object.entries(subjects)){
  const contract=doc.contracts[id];if(!contract)throw Error(`Missing exact quote owner ${id}`);
  for(const source of sources){let count=0;const {heading,text}=statement(source);
   for(const row of contract.citations??[])if(row.source===source){row.source_section=heading;row.quote=text;count++;}
   if(!count)throw Error(`Missing stale citation ${id} -> ${source}`);
  }
 }
 writeFileSync(path,JSON.stringify(doc,null,2)+'\n');
 console.log(JSON.stringify({contract:path,quote_only_subjects:Object.keys(subjects)}));
}

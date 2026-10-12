import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import {splitFrontmatter,sourceSectionText,factParagraphs,numberedProofSteps} from '../../../tools/physics-support/facts-block.mjs';
import {itemHashGuard} from '../../../tools/physics-support/item-hash.mjs';
const run='physics-cm-qm-gr-79-2026-10-11';
const changed=new Set(['def-holomorphic-kam-domain-and-diophantine-labels','lem-cm-lattice-shell-count-and-weight-sums','lem-cm-integral-and-ftc-for-continuous-normed-space-curves','lem-fourier-lattice-sobolev-embedding','lem-discrete-young-and-sobolev-product','lem-tame-transport-commutator','lem-fluid-galerkin-coefficient-ivp','lem-fluid-energy-common-lifespan','lem-fourier-tail-diagonal-compact-convergence','lem-cm-strong-solution-smoothness-bootstrap','thm-local-smooth-periodic-euler-viscous-solution','lem-periodic-pressure-reconstruction','ex-cm06-bead-on-a-rotating-wire','ex-cm06-pendulum-tension-and-reaction-power','ex-cm06-rotating-chart-inertial-terms']);
const suppliers=new Set([...changed,'post-cm02-interactions','def-cm03-potential-and-mechanical-energy','def-dependent-choice','def-integer-power','thm-countable-union-of-countable']);
changed.add('lem-high-sobolev-norms-share-base-lifespan');suppliers.add('lem-high-sobolev-norms-share-base-lifespan');
for(const file of readdirSync(`research/${run}-gate-cm-middle-repair/before/items`)){const id=file.slice(0,-3);if(readFileSync(`items/${file}`,'utf8')!==readFileSync(`research/${run}-gate-cm-middle-repair/before/items/${file}`,'utf8')){changed.add(id);suppliers.add(id);}}
for(let b=11;b<=22;b++){
 const file=`research/${run}-batch-${b}.proof-contracts.json`,d=JSON.parse(readFileSync(file,'utf8'));
 for(const [id,e]of Object.entries(d.contracts)){
  const source=readFileSync(`items/${id}.md`,'utf8'),body=splitFrontmatter(source).body,steps=numberedProofSteps(body),facts=factParagraphs(body);
  if(changed.has(id)||id==='lem-rescaled-pulse-map-is-c-one-close-to-kick'){
   if(changed.has(id)){e.derivations=steps.map(s=>({id:`step-${s.id.replace('.','-')}`,claim:s.claim,step:s.id,inputs:s.inputs}));e.routine_steps=[];}
   for(const field of ['derivations','routine_steps'])for(const st of e[field]??[]){const s=steps.find(x=>x.id===st.step);if(s){st.claim=s.claim;st.inputs=[...new Set([...s.inputs,...[...s.claim.matchAll(/\b(?:step|steps)\s+(\d+\.\d+)(?:-(\d+\.\d+))?/g)].flatMap(m=>[m[1],m[2]].filter(Boolean).map(x=>`step ${x}`)),...[...s.claim.matchAll(/\[([FLA]\d+)\]/g)].map(m=>m[1])])];}}
  }
  if(id==='lem-periodic-pressure-reconstruction')e.citations=e.citations.filter(c=>c.fact!=='F5');
  for(const c of e.citations??[]){
   if(suppliers.has(c.source)){
    const sb=splitFrontmatter(readFileSync(`items/${c.source}.md`,'utf8')).body;
    const exact=sourceSectionText(sb,c.source_section);if(exact?.trim())c.quote=exact.trim();
    if(id==='lem-fourier-tail-diagonal-compact-convergence'&&c.fact==='F3'&&c.source==='lem-cm-lattice-shell-count-and-weight-sums')c.quote=exact.slice(exact.indexOf('5. **Truncation tails.**')).trim();
   }
   if(changed.has(id)||id==='lem-rescaled-pulse-map-is-c-one-close-to-kick')c.uses=steps.filter(s=>new RegExp(`\\b${c.fact}\\b`).test(s.text)).map(s=>s.id);
  }
  if(id==='lem-discrete-young-and-sobolev-product'&&!e.citations.some(c=>c.fact==='F4'))e.citations.push({fact:'F4',source:'cor-bounded-convergence-on-a-finite-measure-space',source_section:'Statement',quote:sourceSectionText(splitFrontmatter(readFileSync('items/cor-bounded-convergence-on-a-finite-measure-space.md','utf8')).body,'Statement').trim(),uses:['1.2']});
  if(id==='lem-fourier-tail-diagonal-compact-convergence'&&!e.citations.some(c=>c.fact==='F2'&&c.source==='cor-mean-value-theorem'))e.citations.push({fact:'F2',source:'cor-mean-value-theorem',source_section:'Statement',quote:sourceSectionText(splitFrontmatter(readFileSync('items/cor-mean-value-theorem.md','utf8')).body,'Statement').trim(),uses:['2.1']});
  if(id.startsWith('lem-kam-')||id==='thm-positive-measure-analytic-kam-family'||id==='thm-parameter-kam-torus-invariance-and-lagrangianity'||id==='lem-truncated-homological-equation-with-conservative-loss'||id==='lem-nondegenerate-frequency-reduction-and-alpha-square-smallness'){
   // Mechanical fact/input projection after the substantive source review. The exact local suppliers remain explicit.
   for(const c of e.citations??[]){const fact=facts.get(c.fact);if(!fact||!fact.links.includes(c.source))c._remove=true;}
   e.citations=(e.citations??[]).filter(c=>!c._remove);
   for(const [fact,record]of facts)for(const supplier of record.links){if(e.citations.some(c=>c.fact===fact&&c.source===supplier))continue;const sb=splitFrontmatter(readFileSync(`items/${supplier}.md`,'utf8')).body;const section=['Statement','Definition','Postulate','Example','Remark'].find(k=>sourceSectionText(sb,k)?.trim());e.citations.push({fact,source:supplier,source_section:section,quote:sourceSectionText(sb,section).trim(),uses:steps.filter(s=>new RegExp(`\\b${fact}\\b`).test(s.text)).map(s=>s.id)});}
  }
  if(id==='def-holomorphic-kam-domain-and-diophantine-labels'){
   const r=e.boundaries.find(x=>x.case==='empty');Object.keys(r).forEach(k=>delete r[k]);Object.assign(r,{case:'empty',status:'checked',evidence:'The Definition fixes n>=1, so coordinate and Fourier lattice indices are nonempty. It explicitly defines distance to an empty frequency label set as positive infinity, its finite-width parameter neighborhood as empty, and empty-domain supremum norms as zero. Labelwise families over that set are vacuous; positive-measure conclusions need their separate theorem hypotheses.'});
  }
 }
 writeFileSync(file,JSON.stringify(d,null,2)+'\n');
}

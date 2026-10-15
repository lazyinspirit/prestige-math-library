import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import {splitFrontmatter,sourceSectionText,numberedProofSteps} from '../tools/physics-support/facts-block.mjs';
import {parseFrontmatter} from '../tools/physics-support/content-policy-lib.mjs';
// Run only through step5-shared-write-lock. Reread every owning file inside this command.
const run='physics-td-qft-rpm-62-2026-10-14';
const reportPath='research/'+run+'-step5-v2/step5-v2-impact-initial-r1-u1.json';
const pack=JSON.parse(readFileSync('research/'+run+'-step5-v2/impact-initial-1.json','utf8'));
const owned=new Set(pack.assignments['1']);
const changed=['lem-qft-fock-ccr-car','lem-qft-scalar-causal-commutator','def-qft-compact-lattice-gauge-data','cex-td-degenerate-thermometer-comparison','post-td-macroscopic-second-law','post-td-entropy-maximum','def-td-reservoir-cycle'];
const inspected=new Set(['def-qft-fock-and-test-spaces','lem-qft-fock-ccr-car','def-tdmath-forward-sector-hypotheses','def-tdmath-decorated-chain-costs','def-tdmath-cost-offset-difference-space','thm-rpm-h-canonical-poisson-and-flow','def-rpm-spacetime-observer-and-worldline','def-rpm-h-regular-constraint-system','def-td-scaled-products-and-comparison','post-td-thermal-join-axioms','lem-qft-finite-gaussian-wick-moments','lem-qft-dirac-fermionic-translation-spectrum','post-td-macroscopic-second-law','post-td-entropy-maximum','def-td-reservoir-cycle']);
const norm=s=>s.replace(/\s+/g,' ').trim();
const item=id=>{const {fm,body}=splitFrontmatter(readFileSync('items/'+id+'.md','utf8'));return {meta:parseFrontmatter(fm),body};};
const updates=[];
for(const name of readdirSync('research').filter(n=>n.startsWith(run+'-batch-')&&n.endsWith('.proof-contracts.json'))){
 const path='research/'+name,doc=JSON.parse(readFileSync(path,'utf8'));let dirty=false;
 for(const [id,entry] of Object.entries(doc.contracts??{})){
  if(!owned.has(id))continue;
  for(const citation of entry.citations??[]){
   const section=sourceSectionText(item(citation.source).body,citation.source_section);
   if(section&&norm(section).includes(norm(citation.quote)))continue;
   if(!inspected.has(citation.source)||!section)throw new Error('Unexamined source drift '+id+'/'+citation.fact+'/'+citation.source);
   // Preserve exact current hypotheses and scope in each invalidated excerpt.
   citation.quote=section.trim();dirty=true;updates.push({path,id,kind:'current-exact-citation',fact:citation.fact,source:citation.source});
  }
  if(['lem-qft-fock-ccr-car','cex-td-degenerate-thermometer-comparison'].includes(id)){
   const steps=new Map(numberedProofSteps(item(id).body).map(s=>[s.id,s]));
   for(const derivation of [...(entry.derivations??[]),...(entry.routine_steps??[])]){
    const step=steps.get(derivation.step);if(!step)throw new Error('missing step '+id+'/'+derivation.step);
    if(norm(derivation.claim)!==norm(step.claim)){derivation.claim=step.claim;derivation.inputs=step.inputs;dirty=true;updates.push({path,id,kind:'changed-proof-derivation',step:step.id});}
    if(id==='cex-td-degenerate-thermometer-comparison'&&step.id==='3.1'&&!derivation.inputs.some(x=>x==='1.2'||x==='step 1.2')){
     derivation.inputs.push('1.2');dirty=true;updates.push({path,id,kind:'explicit-step-input',step:'3.1',input:'1.2'});
    }
   }
  }
  if(id==='cex-td-degenerate-thermometer-comparison'){
   entry.owner_repair_review={reviewer:'alpha-repair/step5-v2-impact-initial-r1-u1',evidence:'Source convex-hull rule retained on explicit permutation classes. Proof 1.1 establishes representative independence and the sum obstruction from [(1,4)] to [(2,2)]; Proof 2.1 gives the reverse coordinate obstruction. Proof 3.1 uses equal entropy log 4. No whole-family contact axioms or empirical model are claimed.'};dirty=true;
  }
  if(['post-td-macroscopic-second-law','post-td-entropy-maximum'].includes(id)){
   entry.physics_review.formulation.evidence=id==='post-td-macroscopic-second-law'
    ?'Endpoint entropy nondecrease for an admitted isolated core record with rho into one complete feasible product, including all auxiliary states and energy constraints; total entropy sums explicitly adopted separated contributions. Zero auxiliary entropy change permits cancellation, never omission of its energy data.'
    :'A stable endpoint attains a global maximum of explicitly adopted additive total entropy on the complete feasible endpoint set, including variable auxiliary entropy. Constant contributions may be dropped; k=0 recovers the thermodynamic-only sum.';
   entry.physics_review.scope.evidence='The complete endpoint space and auxiliary energy/entropy maps are supplied by def-td-isolated-compound-feasible-set. Additivity is an explicit model premise with unchanged isolation and endpoint qualifications; no relaxation, existence or uniqueness follows.';
   entry.owner_repair_review={reviewer:'alpha-repair/step5-v2-impact-initial-r1-u1',evidence:'Checked current complete-product and core-record suppliers; auxiliary entropy contributions are adopted model data, not consequences of zero entropy change or deductions about nature.'};
   dirty=true;updates.push({path,id,kind:'complete-endpoint-physics-review'});
  }
 }
 if(dirty)writeFileSync(path,JSON.stringify(doc,null,2)+'\n');
}
// Mirror only changed authored public claims/declarations in owning manifest rows.
for(const name of readdirSync('research').filter(n=>n.startsWith(run+'-batch-')&&n.endsWith('.pages.json'))){
 const path='research/'+name,pages=JSON.parse(readFileSync(path,'utf8'));let dirty=false;
 for(const page of pages)for(const row of page.items??[]){
  if(!changed.includes(row.id))continue;
  const {meta,body}=item(row.id);
  const heading=meta.kind==='postulate'?'Postulate':meta.kind==='definition'?'Definition':meta.kind==='counterexample'?'Statement refuted':'Statement';
  const statement=sourceSectionText(body,heading)?.trim();
  if(statement&&row.statement!==statement){row.statement=statement;dirty=true;updates.push({path,id:row.id,kind:'public-claim-mirror'});}
  for(const key of ['deps','dependency_roles'])if(JSON.stringify(row[key])!==JSON.stringify(meta[key])){row[key]=meta[key];dirty=true;updates.push({path,id:row.id,kind:key});}
 }
 if(dirty)writeFileSync(path,JSON.stringify(pages,null,2)+'\n');
}
// Append repair evidence, preserving historical rows, judge tuples and open outside obligations.
const ledgerPath='research/defect-ledger.jsonl',oldLedger=readFileSync(ledgerPath,'utf8');
const existing=oldLedger.split('\n').filter(Boolean).map(x=>JSON.parse(x));
for(const row of existing)if(row.defect_id?.startsWith(run+'-impact-initial-r1-u1-')&&row.caught_at_stage==='5.2')row.caught_at_stage='owner';
const stageFix=existing.some(row=>row.defect_id?.startsWith(run+'-impact-initial-r1-u1-'));
if(stageFix)writeFileSync(ledgerPath,oldLedger.split('\n').map(line=>{if(!line)return line;const row=JSON.parse(line);if(row.defect_id?.startsWith(run+'-impact-initial-r1-u1-')&&row.caught_at_stage==='5.2'){row.caught_at_stage='owner';return JSON.stringify(row);}return line;}).join('\n'));
const rows=[
 ['lem-qft-fock-ccr-car','37','nonfatal','proof-step','Fixed adjoint sector indexing and supplied the reverse-adjoint test. Exact tensor suppliers and the complete proof support arbitrary H under Countable Choice, so removed unused separability. The separate unassigned Fock Definition promise remains OPEN pending its owner restoration.'],
 ['cex-td-degenerate-thermometer-comparison','7','fatal','proof-step','The old witnesses are one permutation class. Defined comparison on permutation classes, proved representative independence and used distinct [(1,4)],[(2,2)] with equal logarithmic entropy and incompatible sum/minimum bounds.'],
 ['post-td-macroscopic-second-law','2','fatal','statement','Zero auxiliary entropy change does not fix auxiliary energy. Complete endpoint products, auxiliary maps and same-F association now retain all devices; entropy additivity is adopted explicitly for the complete split, preserving k=0 and zero-change specializations.'],
 ['post-td-entropy-maximum','2','nonfatal','statement','The complete feasible set may include auxiliary coordinates; total entropy now includes their adopted maps. Variable entropy remains in the maximum comparison while constants can cancel; attainment and the one-way stable-equilibrium criterion are preserved.'],
 ['def-td-reservoir-cycle','10','nonfatal','definition','Declared total-compound membership in P_cl(s_tot), including fixed positive mass and defined endpoint COM velocities, to meet the exact process/second-law core interface. Complete bath/work-store endpoints and entropy are retained.']
].map(([subject,batch,severity,location,correction])=>({defect_id:run+'-impact-initial-r1-u1-'+subject,run,at:new Date().toISOString(),class:'accuracy',subclass:'other',subclass_note:'Current native frontier owner repair; self-checked correction, not a judge verdict.',severity,location,subject,batch,group:'batch-'+batch,caught_at_stage:'owner',caught_by_role:'group-alpha',disposition:'fixed',correction,evidence:[{path:reportPath,note:'Current native affected-use review and guarded self-checked repair; no independent certification.'}]}));
const additions=rows.filter(x=>!existing.some(y=>y.defect_id===x.defect_id));
if(additions.length)writeFileSync(ledgerPath,oldLedger+(oldLedger.endsWith('\n')?'':'\n')+additions.map(x=>JSON.stringify(x)).join('\n')+'\n');
console.log(JSON.stringify({updates,ledger_rows_added:additions.map(x=>x.defect_id)},null,2));

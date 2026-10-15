import fs from 'node:fs';import crypto from 'node:crypto';
import {createRequire} from 'node:module';
import {splitFrontmatter,sourceSectionText,numberedProofSteps} from '../../tools/physics-support/facts-block.mjs';
const Y=createRequire('/Users/ianx/Projects/prestige-intelligence/web/package.json')('yaml');
const R='physics-td-qft-rpm-62-2026-10-14',B=`research/${R}-owner-stage3-qft43-44-final-repair-round1`,targets=['lem-qft-free-domain-observables','lem-qft-photon-covariance-spectrum'];
const norm=s=>s.replace(/\s+/g,' ').trim(),read=id=>fs.readFileSync(`items/${id}.md`,'utf8'),section=(id,k='Statement')=>sourceSectionText(splitFrontmatter(read(id)).body,k),guards=JSON.parse(fs.readFileSync(B+'/source-guards.json'));
// Source44 F9 wording was made exact for the newly used matrix estimate; bind final bytes once.
for(const g of guards){const raw=fs.readFileSync(g.path);g.final_raw_sha256=crypto.createHash('sha256').update(raw).digest('hex');fs.writeFileSync(`${B}/${g.id}.final.md`,raw);}fs.writeFileSync(B+'/source-guards.json',JSON.stringify(guards,null,2)+'\n');
const by_path={},archive={},quotes=[];
const fact38=JSON.parse(fs.readFileSync(`research/${R}-owner-stage3-fock37-separability-round1/contract.partial.proposal.json`)).by_path[`research/${R}-batch-43.proof-contracts.json`].contracts[targets[0]];
const approvedCCR=fact38.citations.filter(c=>c.source==='lem-qft-fock-ccr-car');
for(let n=1;n<=64;n++){
 const p=`research/${R}-batch-${n}.proof-contracts.json`,raw=fs.readFileSync(p),d=JSON.parse(raw);let part={};
 for(const [id,c]of Object.entries(d.contracts)){
  let patch={};const citations=structuredClone(c.citations??[]);
  for(const q of citations)if(targets.includes(q.source)&&q.source_section==='Statement'&&!norm(section(q.source)).includes(norm(q.quote))){const before=q.quote;q.quote=section(q.source).trim();quotes.push({id,source:q.source,fact:q.fact,before,after:q.quote});}
  if(targets.includes(id)){
   if(id===targets[0]){
    for(const q of citations){if(q.source==='lem-qft-fock-ccr-car'){const approved=approvedCCR.find(a=>a.fact===q.fact&&a.source===q.source&&a.source_section===q.source_section);if(approved)q.quote=approved.quote;}if(q.fact==='F13'&&q.source==='lem-qft-mass-shell-test-range-dense')q.quote=section(q.source).trim();if(q.fact==='A1'&&!q.uses.includes('2.3'))q.uses.push('2.3');}
   }else{
    for(const q of citations){if(['F5','F9'].includes(q.fact)&&!q.uses.includes('3.1'))q.uses.push('3.1');if(q.fact==='F9'&&q.source==='thm-cauchy-schwarz-and-the-euclidean-norm')q.quote=section(q.source).trim();}
    for(const source of ['thm-heine-borel-rn','thm-heine-cantor-metric'])citations.push({fact:'F11',source,source_section:'Statement',quote:section(source).trim(),uses:['3.1']});
   }
   const body=splitFrontmatter(read(id)).body,steps=numberedProofSteps(body),changed=id===targets[0]?['2.3','4.1']:['3.1'];const derivations=structuredClone(c.derivations??[]);
   for(const d of derivations)if(changed.includes(String(d.step))){const text=steps.find(s=>s.id===String(d.step)).text??'';d.claim=text.replace(/^\d+\.\d+\s*/,'').replace(/\s*\[[^\]]+\]\s*∎?\s*$/,'').trim();const m=/\[([^\]]+)\]\s*∎?\s*$/.exec(text);if(m)d.inputs=m[1].split(',').map(x=>x.trim());}
   patch.derivations=derivations;
   const own=structuredClone(c.boundaries),statement=section(id).trim(),g=guards.find(g=>g.id===id);
   const notes=id===targets[0]?{
    endpoints:'Statement scalar families have explicit on-shell phase convergence (or the stated sufficient absolute-concentration condition);2.3 proves arbitrary-sequence Fatou divergence. Statement Dirac families converge against every spinor Schwartz test to a nonzero point-spinor;4.1 uses shrinking bumps/Cauchy–Schwarz and CAR to prove norm divergence.',
    'nonempty-choice':'Countable Choice is explicit in the Statement andFock suppliers.2.3 uses it only if selecting a bounded contrary width sequence;3.1 constructs the positive-measure annulus witness;4.1 uses the existing countable norm-dense energy ranges and supplied nonzero point-spinor.'
   }:{
    empty:'Statement includes n=0 vacuum PVM value1_B(0);1.2 constructs it and3.1 fixes the vacuum under the Lorentz Fock lift. Empty particle aggregate remains the vacuum.',
    zero:'Statement allows vacuum (0,0) but excludes k=0 from one-particle fibers;1.2 gives vacuum PVM, and3.1 controls the omitted apex through nu(B_delta)=pi delta² without assigning it a fiber value.',
    one:'Statement n-particle multiplier includes n=1.2.2 supplies nonzero one-particle spectral-box vectors;3.1 proves continuity first on this one-particle quotient Hilbert space before tensor lifting.',
    degenerate:'Statement positive quotient removes the null radical and omits the one-particle apex.3.1 handles a zero section trivially and the small-ball limit by a uniform measure bound; vacuum remains included separately.',
    endpoints:'2.1 uses only finite boost rapidity, hence |beta|<1; beta=±1 is not a Lorentz matrix parameter.3.1 takes Lambda->Lambda0 in the explicit finite-matrix Euclidean subspace topology and treats the momentum apex by small-ball measure, not a fiber endpoint.',
    'nonempty-choice':'Statement retains Countable Choice.2.2 and4.1 construct nonzero spectral-box witnesses;3.1 uses the exact existing smooth-test density and Hilbert tensor constructions, with no stronger choice or global polarization selection.',
    'iff-forward':'Statement asserts the displayed representation, continuity, exact maximal domains and spectrum equality; it makes no separately quantified iff claim requiring a forward implication worksheet.',
    'iff-reverse':'Statement makes no separately quantified iff claim.2.2/4.1 prove the two support inclusions for spectrum equality; no converse continuity premise is introduced.'
   };
   for(const b of own){if(notes[b.case]){if(b.status==='checked')b.evidence=notes[b.case];else b.reason=notes[b.case];}if(id===targets[1]&&b.case==='one'){b.status='checked';b.evidence=notes.one;delete b.reason;}b.case_scope={...(b.case_scope??{}),source_section:'Statement',source_excerpt:statement,current_raw_sha256:g.final_raw_sha256,scope_only_not_proof_acceptance:true};}
   patch.boundaries=own;
  }
  if(JSON.stringify(citations)!==JSON.stringify(c.citations??[]))patch.citations=citations;
  if(Object.keys(patch).length)part[id]=patch;
 }
 if(Object.keys(part).length){by_path[p]={contracts:part};const a=B+'/shared-before/'+p.split('/').at(-1);fs.mkdirSync(B+'/shared-before',{recursive:true});fs.writeFileSync(a,raw);archive[p]=a;}
}
fs.writeFileSync(B+'/contract-partials.proposal.json',JSON.stringify({run:R,by_path,before_byte_archives:archive,source_guards:guards,affected_quote_deltas:quotes,preserve_all_unproposed_manual_fields:true},null,2)+'\n');
const mirrors=targets.map(id=>{const {fm,body}=splitFrontmatter(read(id));const f=Y.parse(fm);return{id,fields:{statement:sourceSectionText(body,'Statement').trim(),proof:sourceSectionText(body,'Proof')?.trim()??body.split('## Proof')[1].split('## Remarks')[0].trim(),deps:f.deps,dependency_roles:f.dependency_roles}};});
// Proof is not a legal public source section; mirror its actual argument text using an ordinary heading extraction.
for(const m of mirrors)m.fields.proof=read(m.id).split('## Proof\n')[1].split('\n## ')[0].trim();
fs.writeFileSync(B+'/source-mirrors.proposal.json',JSON.stringify({run:R,mirrors},null,2)+'\n');
console.log(JSON.stringify({documents:Object.keys(by_path).length,subjects:Object.values(by_path).reduce((n,v)=>n+Object.keys(v.contracts).length,0),quotes:quotes.length}));

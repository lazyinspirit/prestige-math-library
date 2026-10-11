import fs from 'node:fs';
import crypto from 'node:crypto';
import {itemContentHash,itemSurfaceHash} from '../../../../../tools/item-hash.mjs';
import {frontmatterList} from '../../../../../tools/frontmatter-list.mjs';
const run='frontier-44-special-representation-examples-28-six-step';
const dest='research/'+run+'-owner-escalation-repairs/resume-20261011/klr-labels/gate1';
const gate='research/'+run+'-owner-escalation-repairs/resume-20261011/gate1';
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x;
const h=x=>sha(JSON.stringify(canon(x))??'undefined');
const write=(n,x)=>fs.writeFileSync(dest+'/'+n,JSON.stringify(x,null,2)+'\n');
const notes=json(dest+'/current-review-notes.json');
notes['lem-cyclotomic-schur-weight-gram-valuations-equal-signed-rim-hook-kostka-sums']=notes['lem-cyclotomic-schur-weight-gram-valuations-equal-signed-rim-hook-kostka-sums'].replace('current14-step','current15-step');
const def='def-degenerate-cyclotomic-hecke-tower-and-residue-functors';
notes[def]='Current Definition/Given now explicitly sets H0(m)=C, the singleton empty-word basis and dimension1, with no x1and no cyclotomic relation at degree0. Only d>=1uses the first-variable quotient. Proof1.1adds the direct vacuum projector1, primitive ground-field block and ordinary vector duality branch before the unchanged positive-rank spectrum argument. The ten-step content/center/stable-cut/duality proof is otherwise unchanged, including level0and supported degree2vanishing. All10union descendants were checked at actual vacuum uses: the two Grothendieck maps send ground cover/simple to the ground line, the decomposition chart has its singleton diagonal1, sign and reflected-charge operations fix the ground, and examples use H0=C. This repairs the authentic Alpha24omission without narrowing tower claims or moving finite-cut/category-O assumptions.';
const manual={
 'lem-cyclotomic-klr-block-satisfies-the-hecke-relations':{
  'iff-forward':'The Statement constructs a homomorphism from explicit generators satisfying the Hecke relations, then factors it through a central sector. Proof2.1-4.1verify those relations; it does not assert that every Hecke tuple comes from a KLR tuple or require a forward classification implication.',
  'iff-reverse':'The inverse-generator formulas in Proof2.1and the five braid patterns3.1are direct relation checks before the presentation map4.1. The later mutual-inverse theorem is a separate supplier, so this lemma makes no reverse biconditional assertion about all homomorphisms.',
  'endpoints':'Proof4.1imposes the actual first-variable cyclotomic relation and5.1uses finite nilpotent dot spectra. Neither the map Statement nor these formal coefficient calculations contain an interval endpoint or analytic parameter limit; discrete rank0is a separate empty generator case.',
  'degenerate':'Proof2.1uses Hx_(r+1)-x_rH=1and H^2=1in DG, and HX_rH=qX_(r+1), H^2=(q-1)H+qin NG.3.1checks all five color patterns in both native conventions; no characteristic-zero or nonzero unequal-dot assumption is inserted after quotient.'},
 'thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras':{
  'nonempty-choice':'Proof1.1and1.2substitute the explicit ordered normalizing expressions and cancel unit series on each of finitely many word projectors.3.1sums finitely many height-dcontents. The inverse maps are determined on generators; no family of arbitrary representative or basis choices is made.',
  'endpoints':'The actual central-sector theorem concerns discrete finite rank and nilpotent polynomial variables. Proof2.1handles zero sectors by the unit-image identity rather than a limiting parameter, and3.1uses a finite direct sum, so no interval or analytic endpoint hypothesis is asserted.',
  'zero':'Proof2.1uses sigma(e_alpha)=1_R: if the Hecke sector is0its projector is0and forces1_R=0; the reverse ordered composite forces the other implication. Rank0also has empty generators and the ground-field identity. Thus both zero sectors are included before any primitive-block requirement.',
  'degenerate':'Proof1.2computes x_r=(x_r-i_r)+i_rin DGand X_r=q^(i_r)(1-(1-q^(-i_r)X_r))in NG. These actual opposite normalizations fix every polynomial generator and its inverse where applicable, and1.1cancels the correctly ordered p/qor P/Qcrossing coefficients.'},
 'thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module':{
  'iff-forward':'The current Statement(i)-(v)asserts full costandard identification, rational cyclicity and a separate categorical reachability conclusion. Proof6.1constructs an index2counterexample to integral costandard ground generation; the item does not formulate a forward iffbetween these assertions.',
  'iff-reverse':'The explicit rank-one lattice ZD00+2ZD01+ZD11in Proof6.1is stable under divided powers and omits D01. It establishes failure of the purported converse from rational cyclicity or crystal reachability to integral ground cyclicity; the Statement does not assert that converse as a biconditional.'},
 'rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges':{
  'iff-reverse':'The Statement distinguishes the characteristic-zero infinite-order integer-line tower comparison from the finite-order cyclic root-of-unity result. The Generic comparison is a constructed equivalence under fixed hypotheses, not a necessary-and-sufficient criterion on numerical parameters or a reverse universal-specialization assertion.'},
 'ex-projective-simple-dual-bases-in-a-degenerate-cyclotomic-block':{
  'iff-reverse':'Verification3.1computes the projected dual vector D01=(M01+M10)/2and4.1the actual residue matrices.6.1shows integral generation has index2while rational generation succeeds. These are explicit formulas and a sharp boundary example, not a converse characterizing every tower from its three dual vectors.'},
 'cex-the-degenerate-ariki-theorem-does-not-imply-the-nondegenerate-one':{
  'iff-reverse':'Counterexample1.1constructs C plus Cand2.1the xi=-1dual-numbers algebra with a nonzero nilpotent.2.2shows its generic comparison inverse loses the denominator(xi+1)/2. This refutes universal specialization, while the Statement explicitly preserves valid generic comparisons and does not assert the reverse implication about Ariki theorem truth.'}
};
const full=json(gate+'/boundary-full.json');
const selected=json(gate+'/boundary-ids-by-batch.json');
const selectedIds=new Set([...selected['48'],...selected['49']]);
const flagged=new Map();
for(const t of full.templates)for(const row of t.rows)if(selectedIds.has(row.id)){if(!flagged.has(row.id))flagged.set(row.id,new Set());flagged.get(row.id).add(row.case);}
const inputs={},deltas=[],histories=[],reviewEvidence=[],batchStats=[];
const guardSource=id=>{const p='items/'+id+'.md',t=read(p);inputs[p]=sha(t);return {path:p,raw_sha256:sha(t),content_sha256:itemContentHash(t),surface_sha256:itemSurfaceHash(t)};};
const sourceSnapshot=id=>{const t=read('items/'+id+'.md');return {id,...guardSource(id),claim:(/^## (?:Statement|Statement refuted|Definition|Example)\n([\s\S]*?)(?=^## |$(?![\s\S]))/m.exec(t)||[])[2]??'',proof_steps:[...t.matchAll(/^(\d+\.\d+)\s+(.+)$/gm)].map(x=>({step:x[1],text:x[2]})),given:[...t.matchAll(/^\*\*Given:\*\*([\s\S]*?)(?=\n\n|$(?![\s\S]))/gm)].map(x=>x[1])};};
for(const batch of [48,49]){
 const path='research/'+run+'-batch-'+batch+'.proof-contracts.json',manifestPath='research/'+run+'-batch-'+batch+'.pages.json';
 const before=json(path),after=structuredClone(before);inputs[path]=sha(read(path));inputs[manifestPath]=sha(read(manifestPath));
 fs.writeFileSync(dest+'/batch-'+batch+'.before.json',read(path));
 let riskCount=0,boundaryCount=0,entryCount=0;
 for(const [id,contract]of Object.entries(after.contracts)){
  const original=before.contracts[id];let changed=false;
  if(contract.risk_review?.status==='open'||id===def){
   if(!notes[id])throw Error('No actually reviewed risk grounds '+id);
   histories.push({batch,id,original_risk_review:structuredClone(original.risk_review??null),guarded_before_contract_sha256:h(original)});
   contract.risk_review={status:'complete',reviewer:'owner-gate1/resume_klr_labels',notes:'Focused owner review after failed gate; original Alpha record preserved verbatim in risk-review-history.json and batch-'+batch+'.before.json. '+notes[id]+' Local current carrier/supplier review only; no new literature download, original-worker reading claim, independent execution or source/review budget reset.'};
   riskCount++;changed=true;
  }
  const cases=flagged.get(id)??new Set();
  for(const row of contract.boundaries??[]){
   if(!cases.has(row.case))continue;
   const oldRow=structuredClone(row),foundation=notes[id];if(!foundation)throw Error('No actual source review '+id);
   let reason=manual[id]?.[row.case]??row.template_review?.reason;
   if(typeof reason!=='string'||reason.trim().length<40)throw Error('Missing concrete axis assessment '+id+':'+row.case);
   if(id==='lem-cyclotomic-schur-weight-gram-valuations-equal-signed-rim-hook-kostka-sums')reason=reason.replace(/Proof 7\.1/g,'Proof 12.1');
   // The existing detailed axis reasoning has been checked against the current
   // claim/proof. The additional anchors identify the changed constructive route.
   const anchored=reason+' Current checked carrier anchors: '+foundation;
   if(row.status==='checked'){row.evidence=reason;delete row.reason;}else{row.reason=reason;delete row.evidence;}
   const text=row.evidence??row.reason;
   row.template_review={upheld:true,by:'owner-gate1/resume_klr_labels',reason:anchored,item_sha256:guardSource(id).content_sha256,row_sha256:sha(JSON.stringify({case:row.case,status:row.status,text}))};
   histories.push({batch,id,case:row.case,original_boundary:oldRow,owner_current_axis_reason:reason});
   boundaryCount++;changed=true;
  }
  if(id===def){
   const t=read('items/'+id+'.md');const match=/^1\.1 (.+)\n/m.exec(t);if(!match)throw Error('Missing actual new step1.1');
   const claim=match[1].replace(/\s*\[[^\]]+\]\s*$/,'');contract.derivations.find(x=>x.step==='1.1').claim=claim;
   for(const row of contract.boundaries){
    if(['empty','zero'].includes(row.case)){
     histories.push({batch,id,case:row.case,original_boundary:structuredClone(row),reason:'Authentic source repair makes rank0definition and Given explicit.'});
     row.status='checked';row.evidence=row.case==='empty'?'Definition sets H0(m)=Cwith singleton empty word and no polynomial generators; Given sets the empty-word projector1. Proof1.1directly gives the unique content0projector and ground-field block before any positive-rank spectral step.':'Proof1.1treats the rank0ground-field block with ordinary vector duality. Proof4.2separately allows zero supported components, and5.1gives zero algebras at positive rank level0; none imposes an x1relation at degree0.';delete row.reason;
     row.template_review={upheld:true,by:'owner-gate1/resume_klr_labels',reason:row.evidence,item_sha256:itemContentHash(t),row_sha256:sha(JSON.stringify({case:row.case,status:row.status,text:row.evidence}))};
    }
   }
   changed=true;
  }
  if(changed){
   entryCount++;const source=sourceSnapshot(id);
   for(const dep of frontmatterList(read(source.path),'deps'))guardSource(dep);
   reviewEvidence.push({...source,current_review_basis:notes[id]??null,boundary_cases:[...cases]});
   deltas.push({batch,id,path,before_file_sha256:inputs[path],before_entry_sha256:h(original),before_entry:original,replacement_entry:contract,current_source:guardSource(id),scope:'Owner current risk/boundary review and explicit degree-zero mirror; original worker/history preserved, no gate result asserted.'});
  }
 }
 write('batch-'+batch+'.proposed.json',after);batchStats.push({batch,entries:entryCount,risk_reviews:riskCount,boundary_rows:boundaryCount});
}
const affectedDef=['thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module','thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module','thm-degenerate-ariki-categorification','rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges','thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one','prop-sign-duality-and-ringel-duality-match-fock-space-involutions','ex-projective-simple-dual-bases-in-a-degenerate-cyclotomic-block','ex-degenerate-ariki-decomposition-numbers-in-small-rank','ex-charge-reversal-and-fock-involution-in-a-small-example','cex-the-degenerate-ariki-theorem-does-not-imply-the-nondegenerate-one'];
const uses={
 [affectedDef[0]]:'Statement/full costandard ground,3.2level0,6.1supported rank-one matrix witness: zero content is the same Cground line, no dot is evaluated there.',
 [affectedDef[1]]:'1.3ground divided-power generation and2.1perfect cover pairing: the degree0cover and simple are C; no quotient formula is used at zero rank.',
 [affectedDef[2]]:'1.1normalizes the two ground maps and1.4explicitly sets H0=C, positive degrees0at level0; all unchanged.',
 [affectedDef[3]]:'Generic word-preserving tower/standard comparison preserves the rank0empty word and ground class; its first-dot calculations concern positive ranks only.',
 [affectedDef[4]]:'1.1inverse unitriangular charts and3.1composition multiplicities: at ground weight the matrix is(1), and unique Specht/simple are C. No x1generator appears in this comparison.',
 [affectedDef[5]]:'1.2reflected transpose fixes the empty ground differences; finite tensor/exterior realization at d0uses the empty tensor product and regular Ccorner. Sign/duality preserve1.',
 [affectedDef[6]]:'Explicit supported three-degree window starts H0=C;3.1ground form1and4.1induction from Cremain correct. All xrelations are in degrees1/2.',
 [affectedDef[7]]:'Example includes the singleton ground label00, content0, supported ground block C, and decomposition coefficient1. Dot spectral words have length equal to degree; ground word is empty.',
 [affectedDef[8]]:'Example expressly states H0=Cand the empty bipartition;1.1ground content0and3.1transpose fixes ground. Full degree2dot models are unaffected.',
 [affectedDef[9]]:'Witness only compares entire degree2algebras.1.1/1.2impose first-dot quotients there, while its fulltower scope includes the same rank0Cidentity. No zero-rank quotient is asserted.'};
const consumerEvidence=affectedDef.map(id=>({...sourceSnapshot(id),actual_use:uses[id],focused_zero_extracts:read('items/'+id+'.md').split(/\n\n/).filter(p=>/degree.?0|rank.zero|level.?0|level.zero|empty|vacuum|ground|H_0/i.test(p)),source_edit_needed:false}));
for(const id of affectedDef)guardSource(id);
const audit={version:1,run,batches:batchStats,contract_deltas:deltas,source_guards:inputs,evidence_only_metadata:true,source_writes:['items/'+def+'.md'],no_gate_calls:true,history_preserved:true};
write('contract-deltas.json',audit);write('risk-review-history.json',histories);write('current-source-review-evidence.json',reviewEvidence);
write('degree-zero/consumer-checks.json',{version:1,run,supplier:def,old_current_alias_union_consumers:10,items:consumerEvidence,source_edits:[],formal_interface:'Only the previously implicit zero-degree ground-field convention is made explicit; all positive-degree and full tower claims remain.'});
const errors=[];for(const delta of deltas){if(delta.replacement_entry.risk_review?.status==='open')errors.push('Still open '+delta.id);for(const row of delta.replacement_entry.boundaries??[]){if(row.template_review?.by!=='owner-gate1/resume_klr_labels')continue;const text=row.evidence??row.reason??'';if(row.template_review.item_sha256!==delta.current_source.content_sha256||row.template_review.row_sha256!==sha(JSON.stringify({case:row.case,status:row.status,text})))errors.push('Stale owner row '+delta.id+':'+row.case);}}
write('local-metadata-integrity.json',{version:1,run,errors,checked_entries:deltas.length,history_records:histories.length,gate_attempt:false,checks:'Exact before-file/entry guards, current source guards, complete scoped risk shape, current owner boundary item+row hashes; official full gates remain ROOT.'});
if(errors.length)throw Error(errors.join('\n'));
console.log(JSON.stringify({batchStats,entry_deltas:deltas.length,metadata_errors:errors.length,consumer_checks:consumerEvidence.length}));

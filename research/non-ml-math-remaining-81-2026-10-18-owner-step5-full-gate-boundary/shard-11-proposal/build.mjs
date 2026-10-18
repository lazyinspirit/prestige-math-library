import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base='research/non-ml-math-remaining-81-2026-10-18-owner-step5-full-gate-boundary';
const shard=JSON.parse(fs.readFileSync(base+'/shard-11.json'));
const reasons={
'ex-pointed-z2-semion-metric-group':{
zero:'The zero grade is the tensor unit: normalization kills every exponent involving it, and its evaluation, coevaluation and pivotal scalars are all one. This is checked directly before extending to finite direct sums.',
one:'At the nontrivial bit the two twist and double-braiding factors each contribute a minus sign, so balancing returns the zero-grade twist. The constructed pivotal and coevaluation signs cancel in the simple trace.',
degenerate:'The sole nonidentity grade fails the radical test because its self double braiding is negative one. The resulting two-by-two Hopf-link matrix has nonzero determinant, so no singular metric-group case is left implicit.',
'iff-forward':'The assertion constructs one ribbon category from specified bit cocycle data and concludes modularity. It does not state a criterion characterizing arbitrary cocycles, so there is no forward classification implication.',
'iff-reverse':'The modularity criterion is cited as a supplier only after the bit example has trivial radical. The example makes no converse claim that every modular pointed category has these semion scalars.',
'nonempty-choice':'Both grades, all scalar functions, and both duality maps are explicitly supplied. Their pivotal extension uses finite direct sums and no selection of representatives from an unspecified collection.',
empty:'The underlying group has exactly the zero and nontrivial bit, so it cannot be empty. The zero object obtained by an empty direct sum does not replace this two-element grading group or change its radical test.',
endpoints:'The bit arguments form a fixed finite group rather than a continuously varying parameter. Reduction modulo two handles every sum, and no interval endpoint or limiting cocycle value is asserted.'},
'lem-relative-three-bordism-surgery-presentation':{
'iff-forward':'The claim first gives surgery existence and then realizes a prescribed comparison by marked moves. Neither assertion is a biconditional criterion for being a bordism or for admitting decorations.',
'iff-reverse':'The comparison sequence is required to retain the specified outgoing identification and coupons. There is no reverse characterization recovering arbitrary bordisms from an unmarked move equivalence.',
zero:'The no-handle endpoint in the based-movie construction uses regular product data. For the empty bordism the final component argument explicitly takes the empty link and empty move sequence, retaining identity comparisons.',
one:'The construction starts with one connected component and its fixed connected base, before the final finite disjoint union. Each band or graph slide uses its actual local map, including the full band framing.',
degenerate:'The endpoint height perturbations keep the same descending field and no same-index trajectory. The finite movie includes the supplied corank-one cubic births and transverse value passages without introducing a stronger Morse-Smale hypothesis.',
endpoints:'The common trace uses the prescribed outgoing comparison on its marked face and the identity on the incoming face. All later movie maps fix the external collar, and the final union retains cap ribbons and boundary parametrizations.',
'nonempty-choice':'Full Choice is an explicit opening hypothesis and the actual surgery and function-path suppliers also declare it. The remaining local bands, bumps and component partitions are finite constructions within this assumption.'},
'lem-pa36-p1-line-bundle-cohomology':{
'iff-forward':'The conclusion calculates dimensions and concrete Laurent bases for each integer degree. It does not assert an equivalence characterizing invertible sheaves or projective curves.',
'iff-reverse':'The displayed polynomial and Laurent spans are direct outputs of the two-chart differential. No converse from those dimensions to a line-bundle classification is part of the claim.',
empty:'The space is the fixed nonempty projective line with two standard affine charts and their nonempty multiplicative overlap. Vanishing cohomology groups at negative degrees are zero vector spaces, rather than empty inputs.',
'nonempty-choice':'The Laurent arithmetic makes no new selection, but its passage from Cech to derived sheaf cohomology invokes a supplier explicitly assuming full Choice. The current carrier omits that inherited hypothesis and dependency; root resolution is required.',
endpoints:'The degree ranges over all integers, with the transition at minus one handled by the exponent ranges covering every integer. These are discrete degree cases; the projective chart overlap is not an interval endpoint.',
degenerate:'Every object remains an invertible sheaf on the smooth projective line. The zero groups at degree minus one come from the kernel and quotient calculation, and do not require a singular-fiber or regularity hypothesis.'},
'lem-it-finite-wiretap-product-kernel-is-stochastic':{
'iff-forward':'Starting from a stochastic joint output row, finite distributivity proves that its coordinate product is stochastic. The statement does not claim a criterion recovering a one-letter kernel from an arbitrary block law.',
'iff-reverse':'The proof uses nonnegative factors and unit row sums as hypotheses. It supplies no converse asserting that every stochastic block channel factors into memoryless coordinate rows.',
'nonempty-choice':'The output sum is over fixed finite Cartesian powers, and distributivity factors it directly into unit row sums. No representatives, maximizing laws, or infinite family of selections are introduced.',
empty:'Positive blocklength and finite nonempty alphabets make every block alphabet nonempty. Zero-probability letters remain in the sums as zero contributions, consistent with the probability-vector definition; no empty row can sum to one.'},
 'thm-qc-tqc-braid-action-unitary-and-artin':{
'iff-forward':'Unitary associators and braidings produce unitary generator matrices and categorical coherence supplies the Artin relations. This is a construction from fusion data rather than a characterization of all unitary braid representations.',
'iff-reverse':'The argument does not recover a unitary braided fusion category from arbitrary matrices satisfying Artin relations. Inverse precomposition merely transports the already supplied object braidings to the fixed-charge multiplicity space.',
'nonempty-choice':'The simple representatives, orthonormal fusion trees and F/R matrices are fixed inputs with finitely many labels. The homomorphism follows by the Artin presentation rather than a choice among representations.',
degenerate:'The fixed-total space is explicitly required to be nonzero. On that space all reassociations are unitary inverses, so forbidden charge blocks are not treated as invertible singular F matrices.'},
'def-finite-dmc-feedback-code':{
'iff-forward':'The defining paragraph specifies causal encoders, the induced channel law, cost, error and the operational supremum. It does not assert the later theorem equating feedback and ordinary capacity.',
'iff-reverse':'The no-feedback maps form a specified subclass by independence of output history. No converse classification of channels or capacity-achieving codes is claimed by this definition.',
empty:'The message set and DMC alphabets are nonempty, with positive blocklength. At the first encoding time the length-zero history space contains the unique empty word, so its causal-map domain is still nonempty.'},
'lem-it-gallager-input-maxima-attained':{
'iff-forward':'For every allowed exponent parameter the claim proves finiteness, continuity and attainment on the probability simplex. It gives no necessary-and-sufficient criterion for a channel to possess an optimizing law.',
'iff-reverse':'The maximum is obtained from compactness after positive finite logarithm arguments have been established. There is no reverse assertion deriving those channel hypotheses from attainment.',
empty:'A point mass explicitly witnesses that the simplex is nonempty. Row normalization supplies a positive channel output for some positive input mass, while the expurgated diagonal bound is positive on every probability law.'},
'lem-root-of-unity-integral-weyl-specialization':{
'iff-forward':'The result establishes specialization, a highest-vector universal map, and simple heads from an integral basis. None of these assertions is a biconditional criterion characterizing all root-specialized modules.',
'iff-reverse':'A simple module is shown to arise from a dominant highest label, but the theorem does not assert that every Weyl module is simple. Its explicit exclusion of root-specialized semisimplicity prevents that mistaken converse.',
'nonempty-choice':'Choice is explicitly inherited from the global-basis projection supplier. Specialization uses that supplied homogeneous basis; choosing a maximal label uses finite support, and the sum of all proper submodules requires no choice of one submodule.'},
'lem-framed-circles-in-four-dimensional-two-handle-traces-move-to-the-base':{
'iff-forward':'The statement constructs a supported ambient isotopy to a pushed-in base and represents the transported framing by an integral twist. It states no equivalence criterion for arbitrary handle traces.',
'iff-reverse':'Free homotopy is used as a sufficient input for an isotopy in dimension at least four. The item does not assert a reverse classification of four-manifolds from framed circles or impose nullhomotopy of their classes.',
'nonempty-choice':'The opening full Choice hypothesis covers Whitney smoothing and parametric transversality, whose actual supplier assumes Countable Choice. The finite jet family and normal-frame correction retain that inherited hypothesis and select only finitely many local data.'},
'def-qc-tqc-projective-gate-and-metric':{
empty:'The phase domain contains the identity phase and is compact; the carrier is explicitly a nonzero finite-dimensional inner-product space. Consequently both the unit-vector norm maximum and the phase minimum have nonempty domains.',
endpoints:'Minimization occurs on the unit circle itself, without choosing an angle interval. The Lipschitz estimate in the phase variable proves continuity intrinsically, so no missing endpoint convention arises from an angular parametrization.'},
'lem-general-linear-quotient-stacks-are-algebraic':{
'iff-forward':'The argument constructs a smooth atlas by pulling back to the actual torsor and an affine diagonal by descending an equalizer. These suffice for algebraicity of this quotient; no characterization of arbitrary stacks is asserted.',
'iff-reverse':'Algebraicity is not claimed to imply a product-of-general-linear-groups presentation. The result only proves that the given affine action quotient satisfies the stack, atlas and diagonal conditions.'},
'lem-null-little-group-unitary-duals-for-all-dimensions':{
empty:'A stabilizer always contains the identity and the chosen future null momentum is nonzero. In dimension two the trivial stabilizer has a one-dimensional trivial representation; the zero translation orbit in higher dimensions is a singleton, not an empty branch.'},
' thm-positive-energy-wigner-mackey-classification-for-connected-covers':{},
 'thm-positive-energy-wigner-mackey-classification-for-connected-covers':{
empty:'The zero momentum orbit is a singleton with the whole cover as stabilizer. The converse positivity argument uses the nonzero irreducible carrier to rule out disjoint full-mass spectral sets; no empty inducing orbit or zero representation is classified.'}
};
const notes={
'ex-pointed-z2-semion-metric-group':'Read Statement and proof 1.1–3.1 with pointed cocycle supplier Definition/Proof. Independently checked bit normalization, balancing at the nontrivial pair, snake/pivotal sign cancellation, and radical test.',
'lem-relative-three-bordism-surgery-presentation':'Read Statement, F1–F6, and proof 1.1–6.1. Checked marked-boundary comparison, zero-handle endpoint, component/empty conventions, finite event and birth interface against relative surgery, one-parameter Morse-path, and mixed-movie supplier Statements/Facts.',
'lem-pa36-p1-line-bundle-cohomology':'Read full carrier and Cech-comparison supplier Statement/Facts. Independently intersected nonnegative exponents with exponents at most d and computed missing Laurent exponents. Discovered inherited AC omission in the comparison call.',
'lem-it-finite-wiretap-product-kernel-is-stochastic':'Read full carrier and stochastic-kernel/probability-vector definitions. Checked row-sum finite distributivity and retained-zero-coordinate convention.',
 'thm-qc-tqc-braid-action-unitary-and-artin':'Read full carrier and fusion-tree supplier Definition/diagram convention. Checked inverse-precomposition composition order, finite supplied orthonormal data, and nonzero fixed-charge hypothesis.',
'def-finite-dmc-feedback-code':'Read full Definition and DMC supplier Definition. Checked message/domain nonemptiness, first-time empty-history singleton and distinction between feedback model definition and a capacity equality theorem.',
'lem-it-gallager-input-maxima-attained':'Read full carrier, finite DMC and probability-vector definitions. Checked point-mass witness, positive diagonal bound, finite output positivity, zero-power continuity and rho-zero treatment.',
'lem-root-of-unity-integral-weyl-specialization':'Read full carrier and global-basis projection supplier Statement/Facts/Proof. Checked inherited AC declaration, free base change, right-exact quotient map, finite maximal label and sum of proper submodules missing the highest line.',
'lem-framed-circles-in-four-dimensional-two-handle-traces-move-to-the-base':'Read full carrier plus parametric-transversality and framing-loop suppliers. Checked finite jet interpolation, negative-dimension avoidance, arbitrary free homotopy class, protected collars and full frame parity; supplier Countable Choice is covered by stated AC.',
'def-qc-tqc-projective-gate-and-metric':'Read Definition and proof 1.1–4.1. Checked phase-circle nonemptiness, intrinsic continuity, representative invariance and minimizing-phase metric argument.',
'lem-general-linear-quotient-stacks-are-algebraic':'Read full carrier. Checked that the top-level assertion only constructs this quotient, with torsor atlas, equalizer diagonal and effective descent; no converse characterization occurs.',
'lem-null-little-group-unitary-duals-for-all-dimensions':'Read full carrier and connected-Poincare/positive-energy Definition. Checked identity in stabilizers, explicit dimension-two trivial representation, singleton zero orbit and nonzero inducing carrier.',
 'thm-positive-energy-wigner-mackey-classification-for-connected-covers':'Read full carrier, null little-group carrier and connected-Poincare/positive-energy Definition. Checked zero-orbit full little group and disjoint full-mass PVM contradiction on nonzero carrier.'
};
const ops=[]; const findings=[];
for(const r of shard.rows){
 const doc=JSON.parse(fs.readFileSync(r.contract_path));
 const before=(doc.contracts??doc)[r.id].boundaries.find(b=>b.case===r.case);
 const after=structuredClone(before); const current=itemHashGuard(fs.readFileSync('items/'+r.id+'.md','utf8'));
 if(current!==r.item_sha256)throw new Error('item changed '+r.id);
 const oldHash=createHash('sha256').update(JSON.stringify({case:before.case,status:before.status,text:before.reason??before.evidence??''})).digest('hex');
 if(oldHash!==r.row_sha256)throw new Error('row changed '+r.id+' '+r.case);
 let upheld=true;
 if(r.id==='ex-pointed-z2-semion-metric-group'&&r.case==='degenerate'){
  after.evidence='Proof step 3.1 computes the nontrivial self double braiding, trivial radical, and nonzero Hopf-link determinant.';
  findings.push({id:r.id,case:r.case,type:'boundary-evidence-correction',finding:'Original evidence only names pivotal construction step 2.1; radical and determinant are established in step 3.1.'});
 }
 if(r.id==='lem-it-finite-wiretap-product-kernel-is-stochastic'&&r.case==='empty'){
  after.reason='The Statement assumes finite nonempty alphabets and positive blocklength. All Cartesian block alphabets are nonempty; zero-probability letters remain present with zero contribution to the finite sums.';
  findings.push({id:r.id,case:r.case,type:'boundary-reason-correction',finding:'Original row incorrectly says zero-probability letters are omitted, contrary to the finite probability-vector supplier and actual summation.'});
 }
 if(r.id==='lem-pa36-p1-line-bundle-cohomology'&&r.case==='nonempty-choice'){
  upheld=false;
  after.status='checked'; delete after.reason;
  after.evidence='Statement and proof steps 1.1–2.1 invoke the Cech-to-sheaf-cohomology comparison, whose stated inherited AC hypothesis is absent from this carrier. This inherited assumption requires owner resolution; the explicit Laurent arithmetic itself makes no new choices.';
  findings.push({id:r.id,case:r.case,type:'source-supplier-assumption-gap',blocking:true,finding:'The Cech comparison supplier Statement assumes the Axiom of Choice inherited from sheaf cohomology. Consumer Statement/Given/deps omit AC. Cannot uphold choice non-applicability. No source edits made.',supplier:'thm-cech-computes-qc-cohomology-separated-scheme-affine-cover',smallest_required_repair:'Carry inherited AC explicitly in Statement/Given and def-axiom-of-choice deps, or supply an authorized choice-free replacement argument. Root owns affected-consumer checks if the defining clause changes.'});
 }
 const rowHash=createHash('sha256').update(JSON.stringify({case:after.case,status:after.status,text:after.reason??after.evidence??''})).digest('hex');
 const reason=reasons[r.id]?.[r.case]; if(!reason||reason.length<40)throw new Error('reason missing '+r.id+' '+r.case);
 after.template_review={upheld,by:'/root/math81_boundary_gate_11',reason,item_sha256:current,row_sha256:rowHash};
 ops.push({id:r.id,case:r.case,contract_path:r.contract_path,before,after,item_sha256:current,review_evidence:notes[r.id]+' Boundary assessment: '+reason,...(!upheld?{blocked:true}: {})});
}
fs.writeFileSync(base+'/shard-11-proposal/operations.json',JSON.stringify(ops,null,2)+'\n');
fs.writeFileSync(base+'/shard-11-proposal/findings.json',JSON.stringify({run:shard.run,reviewer:'/root/math81_boundary_gate_11',operations:ops.length,upheld:ops.filter(x=>x.after.template_review.upheld).length,findings},null,2)+'\n');
console.log(JSON.stringify({operations:ops.length,upheld:ops.filter(x=>x.after.template_review.upheld).length,findings}));

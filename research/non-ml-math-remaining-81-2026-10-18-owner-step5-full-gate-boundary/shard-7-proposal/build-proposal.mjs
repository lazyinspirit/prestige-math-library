import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base='research/non-ml-math-remaining-81-2026-10-18-owner-step5-full-gate-boundary';
const shard=JSON.parse(fs.readFileSync(`${base}/shard-7.json`));
const ids=[...new Set(shard.rows.map(r=>r.id))];
const notes=[
'Read Statement and steps 1.1–6.1. Checked weak-field supplier Statement, fixed-height normalization Statement and disjoint-trajectory interchange Statement. Orbit-constant cutoff gives strict descent; finite transverse critical-height perturbations avoid protected folds, trajectory events and endpoint collars; convex parameter patching preserves descent and affine birth models.',
'Read Statement and steps 1.1–5.1. Checked grouping proof and weak-field, elementary-band and isolated-slide supplier Statements. Attaching spheres stop at the common lower index cut, not the original incoming boundary. Positive-drop tangencies therefore need no Morse–Smale exclusion. Index-three slides reverse index-one bands; birth normalization slides and outgoing maps are explicitly retained.',
'Read entire Definition and projective metric and logical-error/leakage supplier definitions and proofs. Ambient Hilbert space is nonzero; approximate universality quantifies positive tolerance separately for every logical target, with one scalar phase and separate leakage inequality.',
'Read Example and both Verification steps, plus compiler Definition. Identity determinant correction gives identity blocks; empty Artin word multiplies no generators, fixes code and its complement, and has exponent zero. No density or choice of a successful search word is used.',
'Read Statement and steps 1.1–3.1 plus law-entropy, mutual-information and KL Definitions. Countability follows from finite threshold atom sets; diagonal density on full atomic support integrates by monotone convergence. Positive non-atomic mass sits on a product-null diagonal subset, forcing infinite KL.',
'Read Statement and all three proof steps and finite conditional-mutual-information Definition. Conditioning on the pair makes the joint and conditional-product laws identical; constant conditioning leaves two joint masses one half against four reference masses one quarter.',
'Read Statement and steps 1.1–3.1; checked F-symbol Definition and fusion-tree-basis theorem Statement. Inverse associator precomposition preserves the pairing because the associator is unitary. Both bases are already supplied, and the zero Hom space uses the empty identity matrix.',
'Read entire compiler Definition and certified-matrix-input Definition. Algebraic root interval bisection and rational interval arithmetic determine approximants; ordered length/precision dovetailing determines the next pair and first passing word. Termination of the overall search is explicitly a separate theorem.',
'Read Statement and all three proof steps and finite mutual-information Definition. Endpoint Bernoulli laws are point masses. In the interior the only joint atoms are diagonal and the product masses are their squares, giving binary entropy from the finite KL sum.',
'Read entire mutual-information Definition and KL supplier Definition. Marginal product is the reference probability; nonabsolute continuity has value infinity and the absolutely continuous branch carries AC. This defines a functional of the joint law without subtraction of entropy or a characterization theorem.',
'Read Example including one-vertex loop diagram and Verification steps 1.1–2.1. Upper-triangular adapted matrices encode invariant lines. Splitting acts by adding eigenvalue difference times splitting coordinate; scalar, distinct-eigenvalue and Jordan fibers are respectively projective line, two lines and one line.',
'Read entire Definition and Remarks plus logarithmic-meridian supplier Statement. Positive fractional meridian lift ends at inverse conormal-generator translate and is identified back by that generator. The quotient polynomial fixes these root conventions; factorization and freeness remain separate theorems.'
];
const reasons=[
{
'iff-forward':'The output changes critical heights while keeping the descending field and its trajectories. No equivalence between ordered heights and existence of a weak field is asserted, so no forward half of a biconditional is owed.',
'iff-reverse':'The weak-field family is supplied before index grouping begins. Ordered heights are constructed from that input; the lemma does not reconstruct the input from its resulting critical-value order.',
zero:'With no adjacent incomparable pairs to exchange, the finite exchange sequence is the identity. The parameter partition still combines local descending functions and introduces no critical point; no crossing is forced.',
one:'A single adjacent no-connection pair is handled by the orbit-constant bump construction before finite iteration. The increasing value change preserves strict descent and multiplies the affected Hessian by a positive scalar.',
degenerate:'Fold blocks retain one common positive-affine cubic under parameter patching. The finite height perturbations avoid these blocks and protect actual trajectory-event inequalities, while positive-index-drop tangencies remain allowed.',
endpoints:'The field never changes; stationary endpoint parameter collars are protected from the height perturbations. Spatial collar heights coincide in every patched summand, and regular-section changes retain their actual flow identifications.',
'nonempty-choice':'Full AC is an explicit premise inherited from the weak-field construction. Remaining height charts, bump supports and parameter cover are selected from compact finite data; this proof does not infer connectedness of a stage.',
empty:'If the critical/event list is empty, prescribed-height and exchange lists impose no operations. The original fixed-height descending family is available as every local realization, and patching it keeps the original boundary maps.'
},
{
'iff-forward':'The supplied grouped field yields based attaching embeddings and outgoing comparisons. The assertion is this construction, without any characterization equating existence of an arbitrary mixed movie to a grouped field.',
'iff-reverse':'The proof assembles local flow comparisons into a movie; it never claims to recover a weak descending family from a given movie. Thus no converse reconstruction is hidden in the endpoint-presentation claim.',
zero:'Zero trajectory passages and zero births leave regular intervals with framed isotopies and product complements. Composing these actual comparisons retains the terminal marking without inserting a slide or cancelling pair.',
one:'One isolated equal-index connection is analyzed using its transverse entry patch and the two exit hemispheres. Transporting the full parallel and band to the common lower cut gives the one framed slide before assembly.',
degenerate:'At a fold the proof uses the two outer cuts rather than a regular cut through the singularity. Older attachments are carried through the cancellation map, including explicit finite normalization slides when they traverse a born one-handle.',
endpoints:'Prescribed endpoint fields come from the actual all-two-handle presentations. Keeping those fields identifies the endpoint attaching curves and full framings with the given ones; outgoing maps are composed throughout the finite assembly.',
'nonempty-choice':'AC is declared and inherited from the weak-field and elementary-band suppliers. Positive framing radii follow from compact disjoint core images, and the finite index cuts come from strict gaps, rather than an unstated nonempty connected-stage premise.',
empty:'An empty event list leaves a finite collection of regular parameter intervals, whose flow transports supply the movie. Empty additional normalization-slide lists contribute identity comparisons while the prescribed endpoint presentations still remain input data.'
},
{
'iff-forward':'Exact universality, projective equality and projective density are introduced as meanings of terms. The logical version specifies a target-by-target norm-and-leakage approximation property; no equivalence theorem between these notions is asserted.',
'iff-reverse':'The Definition keeps projective density and encoded logical-and-leakage universality separate. In particular it does not infer leakage control from density on a single fusion block, so no reverse implication between notions requires proof.',
endpoints:'Tolerance is quantified only over positive real numbers, with no claim at zero tolerance or at an interval endpoint. Exact equality of groups is defined separately from the positive-tolerance logical approximation property.',
'nonempty-choice':'For each logical target and positive tolerance, a word action and phase are existentially quantified. No simultaneous selection of witnesses across all targets is formed, and the finite-dimensional encoding and projector are supplied.',
zero:'The ambient space is expressly nonzero and the approximation tolerance expressly positive. Zero leakage is an allowed value of its finite operator norm, not an added assertion of exact universality at zero tolerance.'
},
{
'iff-forward':'The identity target has identity determinant-corrected extensions and is achieved by the empty braid. This verifies one concrete target; it asserts no characterization of which targets can be approximated.',
'iff-reverse':'The calculation proves the empty braid fixes the encoded identity with unit physical phase. No converse claim says that all exact identity implementations must be empty or have exponent sum zero.',
'nonempty-choice':'Both block targets are explicitly identity matrices and the chosen braid is explicitly the empty word. Its exponent is the empty sum, so no unspecified successful word or phase witness is selected.',
empty:'The empty word is the actual input in Verification step two: its two block products are identities and its exponent sum is zero. Compression to the code is identity and projection into the leakage complement vanishes.',
endpoints:'This example fixes the logical identity rather than varying a tolerance or path parameter. Exact block error, logical error and leakage are computed as zero directly, with no limiting endpoint argument.'
},
{
'iff-forward':'The atomic and partly non-atomic cases are conditional formulas, not an iff assertion of finite entropy. A countably supported law can still have a divergent nonnegative entropy sum, which the Statement expressly permits.',
'iff-reverse':'Infinite law entropy is allowed even on full countable atomic support; it therefore does not imply positive non-atomic mass. The proof gives the two conditional computations without asserting that false converse.',
endpoints:'There is no interval-valued input parameter. Full atomic mass and strictly smaller atomic mass are both handled: a unit atom contributes zero, divergent atomic sums remain infinite, and positive non-atomic remainder forces singular KL.'
},
{
'iff-forward':'This fixed fair-bit law gives point-mass conditional products when conditioning on the full pair and yields positive mutual information under constant conditioning. It establishes an example of increase, without an equivalence claim.',
'iff-reverse':'The computed increase for constant coarsening does not claim that coarsenings increasing conditional information must be constant or arise from deterministic copies. There is no converse classification in the Statement.',
endpoints:'The bit distribution is fixed as fair and the coarsening fixed as constant. The two conditional KL sums are exact finite calculations, so no varying probability or tolerance endpoint is left to examine.'
},
{
'iff-forward':'Unitarity follows from the unitary associator and orthonormal tree coordinates. This is a consequence of a given unitary fusion category, not an equivalence recognizing such a category from matrix data.',
'iff-reverse':'A unitary change of tree coordinates alone is not asserted to reconstruct the dagger, fusion data or unitary associator of a category. Only the already supplied unitary categorical structure is used.',
'nonempty-choice':'The left and right orthonormal tree bases are supplied by the fusion-tree theorem. Inverse-associator precomposition and its inverse are typed maps between those fixed spaces; the proof selects no new arbitrary-family bases.'
},
{
'iff-forward':'The Definition prescribes deterministic interval evaluation and a strict rational acceptance test in both fixed blocks. It does not state a biconditional between passing that certificate and operator-norm closeness.',
'iff-reverse':'Coordinate absolute sums and the positive approximation allowance can overestimate a block error. Thus norm closeness need not pass a particular precision test, and the Definition makes no necessity claim for that test.',
'nonempty-choice':'Certified target names are supplied deterministic procedures. Root bisection, rational comparisons and fixed lexicographic word/precision dovetailing specify each next action, including the first passing word, without arbitrary selection.'
},
{
'iff-forward':'The equality between mutual information and binary entropy is computed under the explicit deterministic-copy hypothesis. It does not assert a biconditional characterizing all joint laws by that numerical equality.',
'iff-reverse':'The argument does not recover deterministic equality of random variables from equality of entropy and mutual information. It computes the two diagonal masses and treats constant Bernoulli endpoints under the supplied copy assumption.'
},
{
'iff-forward':'The product of the two marginal laws is used to define the reference measure for a KL functional. This is a definition of mutual information, without a biconditional about independence or its zero set.',
'iff-reverse':'No reverse independence criterion is asserted here. The Definition merely assigns the joint-versus-marginal-product divergence, including infinity in the nonabsolute-continuity branch and AC on the density branch.'
},
{
'iff-forward':'The invariant-line atlas and upper-triangular matrix display are concrete descriptions of this one-loop example. Its verification computes stack-relative dimension and proper fibers, without an iff theorem about general quivers.',
'iff-reverse':'Neither zero stack-relative dimension nor properness is claimed to characterize this extension atlas. The scalar matrix fiber is an entire projective line, and the distinct-eigenvalue and Jordan examples only compute their respective invariant lines.'
},
{
'iff-forward':'The fiber of the localized equivariant flat bundle defines the braid representation, and the meridian polynomial defines a quotient algebra. These constructions assert no equivalence between category O and Hecke modules.',
'iff-reverse':'Hecke factorization and quotient equivalence are explicitly reserved for separate theorems. The fixed positive meridian lift and conormal-generator endpoint action determine roots here without claiming a reverse reconstruction of category O.'
}
];
const ops=shard.rows.map(r=>{
 const contract=JSON.parse(fs.readFileSync(r.contract_path));
 const before=contract.contracts[r.id].boundaries.find(x=>x.case===r.case);
 const hash=itemHashGuard(fs.readFileSync(`items/${r.id}.md`,'utf8'));
 const rowHash=createHash('sha256').update(JSON.stringify({case:before.case,status:before.status,text:before.reason??before.evidence??''})).digest('hex');
 if(hash!==r.item_sha256||rowHash!==r.row_sha256) throw Error(`stale ${r.id}:${r.case}`);
 const i=ids.indexOf(r.id),reason=reasons[i][r.case]; if(!reason||reason.length<40)throw Error('reason missing');
 return {id:r.id,case:r.case,contract_path:r.contract_path,before,after:{...before,template_review:{upheld:true,by:'/root/math81_boundary_gate_07',reason,item_sha256:hash,row_sha256:rowHash}},item_sha256:hash,review_evidence:notes[i]};
});
fs.writeFileSync(`${base}/shard-7-proposal/operations.json`,JSON.stringify(ops,null,2)+'\n');
console.log(JSON.stringify({operations:ops.length,items:ids.length,all_upheld:true}));

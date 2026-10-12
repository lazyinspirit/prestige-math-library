import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const dir='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011';
const packetPath=dir+'/boundary-template-inventory/partition-10.json';
const p=JSON.parse(fs.readFileSync(packetPath));
const sha=x=>createHash('sha256').update(x).digest('hex');
const reasons=[
{
'iff-forward':'The refuted implication concerns commuting natural Hecke actions and double centralizer equalities; the counterexample disproves sufficiency by comparing the scalar Hecke image with the full matrix centralizer, rather than proving an equivalence.',
'iff-reverse':'The centralizer dimension comparison refutes sufficiency of a commuting Hecke action. It makes no assertion that double centralizer equalities force the naturality hypothesis.',
'degenerate':['checked','The trivial multiplicity module makes the Casimir vanish. Counterexample steps 1.1 through 4.1 explicitly compute the scalar Hecke action and both larger matrix centralizers, so this vanishing action is the mechanism of failure.'],
'nonempty-choice':'The multiplicity module, natural module and their tensor basis are explicitly given. Both centralizers are computed as matrix algebras, without choosing from an arbitrary indexed family.',
'endpoints':'The refutation uses a fixed single tensor factor and a trivial multiplicity module; its comparison of matrix centralizers involves no interval, continuity claim or limiting value.'
},
{'iff-reverse':'The definition distinguishes a highest vertex, its lowering-generated subcrystal and its connected component. It explicitly warns that having a highest vertex does not imply generation of the entire crystal or identification with the canonical simple-module crystal.'},
{
'iff-forward':'The finite W-algebra is specified by a commutator membership condition and the Whittaker category by local nilpotence. These are defining conditions, not a theorem asserting an equivalence between the two categories.',
'iff-reverse':'The Whittaker vanishing implication is recorded as a categorical interface supplied later. The definition does not claim a converse equivalence between arbitrary modules and the finite W-algebra commutator condition.',
'one':'The definition takes supplied pyramid data and defines its algebra and Whittaker vectors by universal commutator conditions; it makes no separate assertion about a singleton module or a level-one tensor representation.',
'degenerate':['checked','The commutator and character formulas contain no inverse of the nilpotent or a column difference. When the negative grading subalgebra is trivial the universal conditions are vacuous, its character ideal is zero, and the Whittaker-vector formula returns the whole module.'],
'nonempty-choice':'The pyramid, character and shifted automorphism are given data. Defining a kernel, a quotient and the simultaneous character eigenspace requires no selection of an arbitrary family of representatives.',
'endpoints':'Column heights enter a finite scalar shift of diagonal matrix units. The algebra and locally nilpotent module category are defined without a parameter interval or a convergence assertion.',
'zero':['checked','Zero row lengths are explicitly allowed in the pyramid notation. The character ideal and simultaneous eigenspace use universal equations, and the zero module has zero Whittaker vectors; no inversion of a row length or module dimension enters these definitions.']
},
{
'iff-forward':'The example fixes a two-column pyramid and computes the tensor operator minimal polynomial and quotient dimension. The calculation does not formulate a biconditional criterion for arbitrary pyramids.',
'iff-reverse':'The two eigenspaces and their scalar image are conclusions for the specified matrix. No claim reconstructs the chosen row lengths or origin from an arbitrary cyclotomic polynomial.',
'degenerate':'The cyclotomic roots in this example are distinct despite the repeated origin coordinates. The matrix calculation treats this fixed origin; it does not claim a repeated-root degeneration of the cyclotomic polynomial.',
'nonempty-choice':'Boxes are numbered down the supplied columns and the eigenspaces have displayed spanning vectors. The matrix and bounded monomial count use specified finite data rather than an arbitrary-family choice.',
'zero':['checked','The origin coordinates are zero and the first eigenvalue is zero. Proof step 1.1 computes the kernel as the span of the first two basis vectors and checks that the operator and its shifted operator are both nonzero, establishing the exact quadratic minimal polynomial.'],
'one':'Proof step 1.1 computes the operator on the single tensor factor explicitly; step 2.1 identifies its quotient image as the algebra of scalars on the two displayed eigenspaces.',
'endpoints':'The tensor degrees begin with the single-factor matrix calculation. Step 2.1 applies the supplied minimal-polynomial clause to every positive tensor degree, so the lower allowed degree is accounted for without a limiting argument.'
},
{
'one':'The braid computation requires a colour triple and two adjacent crossing positions. It does not assert a braid relation on a singleton strand or a level-one module.',
'nonempty-choice':'The colour triple is fixed before the computation. Tracking its successive permutations and substituting Cartan entries exhausts a finite case list, and the concluding verification explicitly records that no choice is used.',
'iff-forward':'The verification establishes homogeneity of both braid words and their correction by tracking the same crossed colour pairs; it states no equivalence between homogeneity and a condition on the colours.',
'iff-reverse':'The Cartan substitution proves the correction has the required degree in each colour configuration. It does not assert that an arbitrary homogeneous expression must be a corrected braid relation.',
'endpoints':'The fixed triple is tested against discrete Cartan adjacency cases. No interval of deformation values, endpoint passage or asymptotic braid statement occurs.',
'degenerate':['checked','Verification step 1.2 explicitly treats the double edge of the two-residue Cartan graph, where the repeated outer colours give the quadratic-degree correction rather than the constant single-edge correction.'],
'empty':'A braid word here has a specified colour triple and three crossings. An empty strand diagram has no such triple and hence does not instantiate the assertion.',
'zero':['checked','The otherwise branch of step 1.2 has vanishing correction. Step 2.1 explains that this vanishing term leaves the relation homogeneous at the common braid-word degree, without assigning the zero term a unique degree.']
},
{'iff-reverse':'The adapted face and tangent-cone conditions imply orthant preservation for sufficiently small strong approximations. The lemma does not infer those derivative conditions from an approximation that happens to preserve the orthant.'},
{
'one':'The asserted basis is indexed by pairs of semistandard tableaux in the supplied multipartition summands. It does not specialize its contract to a singleton tableau, module rank or cyclotomic level.',
'nonempty-choice':'The proof extends a functional along an existing split summand and then derives rectangular sums from disjoint coefficient-one Murphy pivots. The bases and coset sums are finite, and the concluding remark explicitly excludes a choice principle.',
'iff-forward':'The Hom-intersection isomorphism is constructed by evaluation on the cyclic generator and its inverse. It is an asserted identification of modules, not an if-and-only-if characterization with a separate forward hypothesis.',
'iff-reverse':'Proof step 2.1 supplies the inverse map from an intersection element to a cyclic-module homomorphism. This inverse construction does not make the overall cellular-basis statement a biconditional.',
'endpoints':'Specialization is a commutative unit-parameter ring map preserving the coefficient identities. There is no parameter interval, analytical limit or endpoint continuity assertion.',
'empty':['checked','In step 3.1 an absent admissible left or right semistandard fibre forces all corresponding Murphy coordinates to vanish. The rectangular-sum basis of that intersection is then empty and the associated Hom block is zero.'],
'degenerate':'Proof step 6.1 carries the trace, split annihilator argument, rectangular basis and multiplication constants through every commutative base change with unit parameters, explicitly including the deformation DVR and fields without a generic-semisimplicity requirement.',
'zero':['checked','The zero Hom blocks are covered by the Murphy-coordinate intersection description: when no simultaneous admissible fibre exists there are no rectangular pivots and only the zero map remains. The specialization clause also uses coefficient identities rather than dividing by a dimension.']
},
{
'one':['checked','With a single polynomial generator there are no symmetric-group crossing generators. The operator model is multiplication on the one-variable polynomial ring, so its powers give the ordered monomial basis directly.'],
'nonempty-choice':'The independence argument compares only finitely many permutation automorphisms in a proposed relation and separates them by a field element. No arbitrary indexed selection is required, as the final remark records.',
'iff-forward':'The statement asserts an ordered monomial basis for the presented degenerate affine Hecke algebra. Spanning by straightening and independence in the rational-operator model are proof obligations, not directions of a biconditional.',
'iff-reverse':'The rational-operator construction proves independence of the ordered family. It does not infer the defining Hecke relations merely from the existence of a basis in some other algebra.',
'endpoints':'The polynomial exponents are nonnegative integers in finite monomials and the degree parameter is discrete. The proof claims no analytic endpoint or convergence as exponents grow.',
'zero':'The statement and conclusion explicitly identify the algebra at zero strands with the singleton empty monomial. There are no polynomial or crossing generators in this case.',
'degenerate':'Proof step 2.1 verifies rational operator identities in every characteristic, explicitly including characteristic two; the denominators are nonzero indeterminate differences in the fraction field rather than specialized numeric differences.',
'empty':'At zero strands the ordered family contains exactly the empty product, which is the unit; thus the basis is a singleton rather than an empty family, as the statement and step 4.1 explicitly say.'
},
{'nonempty-choice':'The bead-gap correspondence is given by subtracting the hook length from the row bead position. Its inverse recovers the row from the bead and the unique column from strictly decreasing row hook lengths, so no representatives need to be chosen.'},
{'iff-reverse':'The lemma descends the complex socle using the rational kernel of the regular trace form and then proves its nonvanishing for a nonzero module. It does not characterize rational descent by a converse condition on the radical.'},
{
'iff-forward':'The word of wall crossings yields a projective decomposition with a uniquely occurring top standard label. The statement is a decomposition and generation assertion, not an equivalence characterizing all functors.',
'iff-reverse':'The triangular BGG matrix determines lower summand multiplicities from the product class. No converse says that any object with that class arises from the prescribed wall-crossing word.',
'nonempty-choice':'The Statement explicitly inherits Choice for the category-O suppliers. Proof step 1.1 uses their projectivity and finite indecomposable decomposition before the triangular BGG argument identifies the top summand; this review retains that stated assumption.'
},
{
'iff-forward':'The claim applies onto-wall and out-of-wall translation to a standard module, producing two Verma factors, and extends the count by exactness. It does not offer a biconditional criterion for a two-factor object.',
'iff-reverse':'Exactness pushes a given Verma flag forward and concatenates the two-factor flags. The proof does not reconstruct the input module from the resulting multiplicities, and explicitly avoids a splitting claim.'
},
{
'iff-forward':'The equality compares Verma multiplicities with polynomial graph-support ranks after evaluating the character. It is a numerical identification using inverse labels, not an equivalence between arbitrary finite modules and polynomial lifts.',
'iff-reverse':'The statement explicitly avoids an intrinsic separated support filtration on the reduced finite-dimensional module, because supports coalesce at the origin. The multiplicity equality therefore claims no converse reconstruction of a polynomial lift from a reduced support filtration.',
'nonempty-choice':'Choice is stated for the projective and polynomial Soergel dictionaries used to select the lift. The proof uses these supplied identifications and the deformed Hom base-change theorem, so the declared assumption remains part of the comparison.',
'one':'Proof step 1.1 identifies the deformed Hom image of each standard as finite free of rank one from its one-dimensional closed fibre. Step 1.2 identifies its inverse-labelled graph branch, which is the unit contribution counted in the final multiplicity formula.'
},
{
'empty':null,
'degenerate':'The statement explicitly excludes two-sided-unbounded evaluation, semi-infinite limits and arbitrary-based integral action outside the admissible supplier classes. The proof uses vectorwise finite field action and finite transfer intervals, so those unsupported limiting regimes are outside this boundary disposition.'
}
];
const operations=[], inspections=[], gaps=[];
for(let i=0;i<p.items.length;i++){
 const item=p.items[i],raw=fs.readFileSync(item.current_item_path,'utf8');
 if(sha(raw)!==item.current_item_raw_sha256||itemHashGuard(raw)!==item.current_item_guard_sha256)throw Error('source changed '+item.id);
 for(const row of item.rows){
  const v=reasons[i][row.case];if(v===undefined)throw Error('missing '+item.id+' '+row.case);
  if(v===null){gaps.push({id:item.id,case:row.case,pointer:row.merged_pointer,before_row:row.batch_locations[0].before_row,item_raw_sha256:sha(raw),item_sha256:itemHashGuard(raw),gap:'The Statement says any finite sequence, which admits the empty sequence, but proof step 1.1 starts from a binary bar and iteration; neither Statement nor relevant proof specifies the empty tensor-unit bar or its integral balanced triple.',minimal_prerequisite:'Supply genuine already accepted empty tensor-unit bar and balanced-triple context, or hold this exact boundary pending owner-authorized content recovery.',new_mathematical_audit:false});continue;}
  const status=Array.isArray(v)?v[0]:row.status, reason=Array.isArray(v)?v[1]:v;
  for(const loc of row.batch_locations){
   if(sha(fs.readFileSync(loc.path))!==loc.contract_raw_sha256)throw Error('contract changed '+loc.path);
   const before=loc.before_row,after=structuredClone(before);
   if(status!==before.status||['degenerate','zero','empty'].includes(row.case)&& /exclude|no zero|no degenerate|no empty/i.test(row.text)){
    after.status=status;after[before.reason!==undefined?'reason':'evidence']=reason;
   }
   const rowHash=sha(JSON.stringify({case:after.case,status:after.status,text:after.reason??after.evidence??''}));
   after.template_review={upheld:true,by:'/root/template_case_10',reason,item_sha256:itemHashGuard(raw),row_sha256:rowHash};
   operations.push({id:item.id,case:row.case,path:loc.path,pointer:loc.pointer,field_path:loc.field_path,contract_raw_sha256:loc.contract_raw_sha256,item_path:item.current_item_path,item_raw_sha256:sha(raw),item_sha256:itemHashGuard(raw),before_row:before,before_raw_row_sha256:loc.raw_row_sha256,before_row_sha256:loc.row_sha256,after_row:after,after_raw_row_sha256:sha(JSON.stringify(after)),after_row_sha256:rowHash,scope:'Only this flagged boundary row; unchanged claim/proof and existing attribution retained.'});
  }
  inspections.push({id:item.id,case:row.case,actual_current_case_inspection:reason,current_item_raw_sha256:sha(raw),current_item_guard_sha256:itemHashGuard(raw),disposition:status,whole_item_audit:false});
 }
}
const out=dir+'/boundary-template-partition-10';
const proposal={version:1,run:p.run,partition:'10',by:'/root/template_case_10',recorded_at:new Date().toISOString(),packet:{path:packetPath,sha256:sha(fs.readFileSync(packetPath))},source_guards:{merged_contract:p.merged_contract,native_tool:p.native_tool},scope:'Exact sealed flagged boundary cases only; no source edits, no new whole mathematics audit, no canonical or native writes',operations,inspections,gaps,counts:{assigned_items:p.items.length,assigned_rows:p.items.reduce((n,x)=>n+x.rows.length,0),proposed_rows:inspections.length,operations:operations.length,held_rows:gaps.length},awaiting_actual_after_binding:true};
for(const [file,obj] of [['proposal.json',proposal],['gap-list.json',{version:1,run:p.run,partition:'10',by:'/root/template_case_10',gaps}]])fs.writeFileSync(out+'/'+file,JSON.stringify(obj,null,2)+'\n',{flag:'wx'});
const files=['proposal.json','gap-list.json','build-proposal.mjs'].map(name=>({path:out+'/'+name,sha256:sha(fs.readFileSync(out+'/'+name))}));
fs.writeFileSync(out+'/SEALED-PROPOSAL.json',JSON.stringify({version:1,run:p.run,partition:'10',by:'/root/template_case_10',files,counts:proposal.counts,awaiting_actual_after_binding:true},null,2)+'\n',{flag:'wx'});
console.log(proposal.counts);

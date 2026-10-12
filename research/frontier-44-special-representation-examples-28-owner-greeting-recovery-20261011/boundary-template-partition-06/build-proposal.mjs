import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011';
const packetPath=base+'/boundary-template-inventory/partition-06.json';
const packet=JSON.parse(fs.readFileSync(packetPath));
const hash=s=>createHash('sha256').update(s).digest('hex');
const reviews=[
{
'nonempty-choice':'The block comparison partitions finitely many primitive central idempotents into nonempty supports and compares their finite counts in Proof 1.2 and 2.1; it does not select elements from an arbitrary family.'
},
{
'iff-forward':'The pyramid Definition specifies left-shift matrix units, column degrees, the parabolic and the trace character; Proof 1.1 through 2.2 verifies these prescribed data rather than proving a criterion between two predicates.',
'iff-reverse':'The asserted centralizer basis and trace-character vanishing are properties of the supplied box diagram; no converse reconstructing a pyramid from an arbitrary grading or character is asserted.',
'one':'There is no separate singleton criterion: a row is already a left-shift Jordan string in Proof 1.1, and the centralizer index count in Proof 1.3 is written for the given row lengths.',
'nonempty-choice':'Box numbering, neighbours, column degrees and the trace character are explicit from the finite diagram; the centralizer verification counts finite matrix-unit sums and does not choose an infinite family.',
'endpoints':'The row and column numbers index a finite diagram rather than an interval of analytic parameters; missing left or right neighbours are handled by omission of matrix-unit terms in Proof 1.3.',
'zero':null,'degenerate':null
},
{
'one':'The Murphy datum permits arbitrary positive level and uses the same component-ordered products at level one; there is no singleton-only assertion beyond those defining conventions.',
'iff-forward':'The cyclotomic presentation and the Murphy and Schur modules are definitions; their cell and map laws are explicitly assigned to the three justified_by suppliers, not to an equivalence test.',
'iff-reverse':'The definition constructs the multipartition-indexed endomorphism algebra and its cell modules; it does not classify all possible modules by a converse of the construction.',
'degenerate':['checked','Repeated cyclotomic units are permitted: the presentation imposes their polynomial product without requiring distinct roots, and the Definition defers cellular module laws to local suppliers rather than assuming a semisimple specialization.'],
'zero':'The Definition expressly sets the rank-zero cyclotomic algebra equal to the coefficient ring; the empty tuple of component diagrams and its regular summand therefore have a stated convention.',
'nonempty-choice':'The Definition names only finite multipartition diagrams, finite row subgroups and sums of their Murphy basis entries; it explicitly states that finite bases and explicit polynomial identities use no choice principle.',
'endpoints':['checked','The row products use initial component intervals and the flag rule permits an entry only in an earlier physical component; at the last component the remaining product is empty and the regular weight has Murphy generator equal to the unit.'],
'empty':'Types explicitly include multipartitions with empty components, and the regular weight is the tuple of empty components followed by the column partition; this is part of the supplied Schur summand convention.'
},
{
'iff-forward':'The affine Hecke Definition specifies a quotient of a free associative algebra and asserts its ordered-monomial basis and evaluation map; those constructive assertions are not a biconditional criterion.',
'iff-reverse':'The evaluation isomorphism sends polynomial generators to shifted Jucys–Murphy sums, with its inverse proved in Proof 5.1; it does not assert a converse characterization of arbitrary presented algebras.',
'degenerate':['checked','The small ranks are admitted explicitly: Proof 1.1 and 7.1 give the scalar algebra in rank zero and the polynomial algebra in rank one, while higher ranks have an inhomogeneous cross relation.'],
'nonempty-choice':'The rational-function model uses a common denominator for finitely many coefficients and a maximal permutation in a finite symmetric group; the Remarks expressly describe these as finite selections without a choice principle.'
},
{
'iff-reverse':['not_applicable','A specialization is determined by its power-sum values and, conversely, every such sequence extends uniquely because the rational symmetric-function ring is a polynomial algebra; these are defining well-definedness clauses, not a separate reverse implication between theorem hypotheses.']
},
{
'iff-forward':'The Whittaker Definition constructs the covariant finite dual of the character Hom space and states exactness and tensor compatibility; it is not an equivalence criterion between source objects and output properties.',
'iff-reverse':'The definition gives the functor and its normalized tensor comparisons, including which source simples vanish; it does not reconstruct a source object from an arbitrary finite W module by a claimed converse.',
'one':'The finite-dimensional dual formula and the ground normalization are stated for the selected parabolic summand without a singleton-only hypothesis; tensor compatibility iterates the same natural comparison.',
'degenerate':['checked','Equal admissible origins are allowed: the Definition requires integral differences to imply equality, and Proof 1.16 and 3.3 treat each separated coset and the repeated ground entries within its columns.'],
'endpoints':'The relevant boundaries are finite tensor degrees and finite column prefixes, not interval endpoints or analytic limits; Proof 7.1 starts at the normalized ground map and iterates tensor compatibility.',
'zero':['checked','Tensor degree zero is the ground projective: Proof 3.3 identifies its unique ground label and Proof 7.1 starts with the fixed map from its Whittaker image to the one-dimensional ground module.'],
'nonempty-choice':'AC is explicitly assumed in the Definition and Given; Proof 1.3 extends a scalar functional from an ideal quotient to the enveloping-algebra quotient for the Baer injectivity argument, matching the declared vector-space splitting use.'
},
{
'iff-forward':'The Example exhibits a two-dimensional rational extension whose Hodge line has imaginary slope; Verification 1.1 and 2.1 check the mixed structure and exact sequence, without claiming an equivalence criterion.',
'iff-reverse':'Verification 3.1 rules out a rational splitting because a section would have slope equal to the imaginary unit; no converse that all nonsplit mixed Hodge extensions have this displayed form is asserted.'
},
{
'iff-forward':'This tensor Example supplies explicit flips on the cube of a two-dimensional natural module and checks four affine Hecke identities; it asserts no criterion equivalent to having such flips.',
'iff-reverse':'Proof 4.1 uses a displayed tensor word to distinguish the ordinary commutator from the affine cross relation; it does not classify every action satisfying those relations.',
'one':['not_applicable','The tensor degree is fixed at two and the natural module has dimension two; the eight-word computation has no variable rank or level whose singleton specialization must be supplied.'],
'degenerate':['not_applicable','The flips act on one fixed natural tensor cube, and Proof 2.1 cancels permutation terms without spectral denominators or deforming charges; no singular-parameter branch belongs to this example.'],
'nonempty-choice':'Every operator is a specified place permutation or sum of two such permutations; Proof 1.1 through 4.1 works on the displayed finite tensor basis and needs no family of choices.',
'endpoints':'The place labels identify the three tensor slots, while all four relations are fixed finite permutation identities; the Example contains no limiting interval or endpoint assertion.',
'zero':['not_applicable','The place label zero denotes the original module slot, not a zero-rank specialization; the module, tensor degree and eight-word basis are fixed positive data in the Example.']
},
{
'nonempty-choice':'The abacus verification lists all six bead positions, top-packs their three runners, and prescribes four upward bead moves; this finite explicit calculation uses no selection from an arbitrary family.'
},
{
'one':'The monic Schur determinant formula is stated for generic arbitrary-level Murphy data, not a singleton-only situation; the products over type rows and semistandard tableaux retain their ordinary empty-product convention.',
'nonempty-choice':'Proof 3.1 permits bases of finitely many eigenspaces and shows their change-of-basis determinants cancel; the later chain basis is supplied by finite triangular spectral projectors, so no arbitrary family choice is used.',
'iff-forward':'The Statement equates a weight Gram determinant with products of monic norms and explicit node-pair factors; Proof 4.1 and 5.1 derive these equalities rather than an equivalence between conditions.',
'iff-reverse':'The second determinant product is an equivalent algebraic expression obtained by norm recurrence and pair counting; no converse characterizing a module from its determinant is asserted.',
'endpoints':'The determinant formula concerns finite node and row products in generic fields; it makes no analytic limit or interval endpoint claim at specialization.',
'degenerate':'Genericity is essential here: Proof 1.1 makes the row Poincare polynomial nonzero and Proof 4.2 proves the residue factors nonzero in both stated rational-function regimes before inversion.',
'empty':'The Statement expressly assigns the empty weight Gram matrix determinant the value of the multiplicative unit; Proof 5.1 carries this convention through the empty semistandard product.'
},
{
'one':'The rim-hook valuation formula applies at every positive cyclotomic level through flagged alphabets and component factors; no separate single-level classification is stated.',
'nonempty-choice':'The proof uses padded finite beta determinants, finite current sums on the fixed-rank sector and a fixed-order first-intersection involution on lattice paths; all combinatorial selections are finite.',
'iff-forward':'The valuation Statement gives an equality between a determinant valuation and a signed rim-hook Kostka sum; Proof 7.1 obtains it by coefficient comparison, without a biconditional hypothesis.',
'iff-reverse':'The signed hook expression is a computed value, and the auxiliary composition coefficients are explicitly combinatorial; no converse producing Schur modules from those coefficients is claimed.',
'endpoints':'The valuation is algebraic at the prime generated by the deformation variable minus the unit; it is not an analytic endpoint limit, and all auxiliary ranks keep the same final-rank parameters.',
'degenerate':['checked','Coincident constant foot residues are allowed in the charged finite-order regime: Proof 3.2 bounds the Laurent exponent away from zero and gives finite characteristic-dependent valuations when the constants agree.'],
'zero':'Proof 7.1 expressly gives valuation zero in the empty rank; there the Gram determinant is the multiplicative unit and the signed current sum has no terms.',
'empty':['checked','The rank hypothesis allows the empty multipartition and Proof 7.1 explicitly records its zero valuation; this matches the empty determinant convention imported from the monic Gram supplier.']
},
{
'iff-forward':'Part (i) constructs shifted weight and image Hodge filtrations on mixed Hodge complex cohomology; Proof 4.1 and 5.1 identify their graded pieces, without a biconditional criterion.',
'iff-reverse':'Part (ii) derives degeneration and the upper weight bound from a nonnegative cosimplicial system; no converse reconstructing such a system from a mixed Hodge structure is asserted.'
},
{
'iff-reverse':'The secant Statement promises compatible thick subdivisions, relative approximations and controlled extensions; Proof 4.1 assembles those constructions, without asserting that approximation convergence implies the original smoothness hypotheses.'
},
{
'iff-forward':'The harmonic Statement constructs a graded Weyl-stable complement and its multiplication and quotient isomorphisms; Proof 2.2 and 5.1 establish those maps rather than an equivalence of predicates.',
'iff-reverse':'The allowed complements provide models of the coinvariant representation; the Statement does not claim a converse recovering the Weyl action or invariant ring from an arbitrary complement.',
'one':'In rank one the Fischer pairing and the ideal generated by one basic invariant still give the degreewise orthogonal complement of Proof 1.1; the quotient and equal-Hilbert-series argument uses the same finite graded pieces.'
},
{
'iff-forward':'The KLR Statement constructs dot, crossing and divided-difference operators and proves their graded representation faithful; relation verification and injectivity are constructive assertions rather than a biconditional criterion.',
'iff-reverse':'The localized skew-algebra isomorphism follows by solving for permutations from crossings in Proof 8.1; it does not assert a converse characterization of all graded polynomial actions.',
'endpoints':'The crossing positions index a finite word, and absent adjacent positions give no crossing generator; the Statement makes no interval endpoint or analytic limiting claim.',
'nonempty-choice':'The Cartan datum has a finite index set, so fixed-rank colour words and permutations are finite; the orbit base sequences of Proof 1.1 and the separating polynomial of Proof 7.1 are finite selections, not an arbitrary indexed family.',
'empty':['checked','The supplied KLR algebra definition admits rank zero: its unique empty colour word gives the polynomial summand over the ground field, with no dots or crossings, so the action and localized algebra reduce to scalars.']
}
];
const out=base+'/boundary-template-partition-06';
const ops=[],notes=[],gaps=[];
for(let j=0;j<packet.items.length;j++){
 const item=packet.items[j],actual=fs.readFileSync(item.current_item_path,'utf8');
 if(hash(actual)!==item.current_item_raw_sha256||itemHashGuard(actual)!==item.current_item_guard_sha256)throw Error('stale item '+item.id);
 const sections=[...actual.matchAll(/^## ([^\n]+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)].map(m=>({heading:m[1],text:m[2],sha256:hash(m[2])}));
 const cases=[];
 for(const row of item.rows){
  const spec=reviews[j][row.case];if(spec===undefined)throw Error('missing '+item.id+row.case);
  if(spec===null){
   gaps.push({id:item.id,case:row.case,row_sha256:row.row_sha256,item_raw_sha256:hash(actual),location:'Definition final grading sentence and Proof 4.1',gap:'The Definition permits a one-column or empty pyramid, whose left-neighbour sum is zero and whose column grading has no degree-one matrix units; Proof 4.1 invokes nonzero left-neighbour units to distinguish Dynkin grading. The original boundary reason falsely excludes zero row lengths and degenerate Jordan types.',minimal_prerequisite:'A sound explicit zero-nilpotent/one-column grading convention or a scoped qualification of the Dynkin-distinction sentence by its original mathematical owner; no content repair is authorized in this explanation-only partition.',owner_hold:true});cases.push({case:row.case,disposition:'held',inspected:['Definition','Proof 1.1','Proof 1.3','Proof 4.1']});continue;
  }
  const correction=Array.isArray(spec),reason=correction?spec[1]:spec,status=correction?spec[0]:row.status;
  const caseNote={case:row.case,disposition:correction?'explanation_corrected':'existing_disposition_upheld',specific_inspection:reason,original_status:row.status,result_status:status};cases.push(caseNote);
  for(const loc of row.batch_locations){
   const raw=fs.readFileSync(loc.path,'utf8');if(hash(raw)!==loc.contract_raw_sha256)throw Error('stale batch '+loc.path);
   let current=JSON.parse(raw);for(const key of loc.field_path)current=current[key];
   if(JSON.stringify(current)!==JSON.stringify(loc.before_row))throw Error('row mismatch');
   const after=structuredClone(current);
   if(correction){after.status=status;if('reason' in after)after.reason=reason;else after.evidence=reason;}
   const rowHash=hash(JSON.stringify({case:after.case,status:after.status,text:after.reason??after.evidence??''}));
   after.template_review={upheld:true,by:'/root/template_case_06',reason,item_sha256:itemHashGuard(actual),row_sha256:rowHash};
   ops.push({path:loc.path,pointer:loc.pointer,field_path:loc.field_path,contract_raw_sha256:loc.contract_raw_sha256,item_path:item.current_item_path,item_raw_sha256:hash(actual),item_guard_sha256:itemHashGuard(actual),before_row_sha256:loc.raw_row_sha256,before:current,after,change:correction?'replace false generic explanation with inspected case disposition and append template_review':'append exact template_review only',preserve_other_fields:true});
  }
 }
 notes.push({id:item.id,path:item.current_item_path,raw_sha256:hash(actual),item_guard_sha256:itemHashGuard(actual),inspection_scope:'Current complete Definition/Statement/Example and relevant local proof clauses for assigned boundary rows only; no new whole-proof audit',sections,cases,counters_and_history:'Existing native histories, reviewed attributions and mathematical repair counters unchanged'});
}
const proposal={version:1,run:packet.run,partition:'06',by:'/root/template_case_06',recorded_at:new Date().toISOString(),inventory:{path:packetPath,raw_sha256:hash(fs.readFileSync(packetPath))},authority:{path:base+'/boundary-template-inventory/SEALED-INVENTORY.json',raw_sha256:hash(fs.readFileSync(base+'/boundary-template-inventory/SEALED-INVENTORY.json'))},source_guards:{merged_contract:packet.merged_contract,native_tool:packet.native_tool,policy:{path:packet.policy.path,raw_sha256:packet.policy.raw_sha256}},operations:ops,held_rows:gaps,counts:{assigned_items:packet.items.length,assigned_rows:packet.items.reduce((n,i)=>n+i.rows.length,0),proposed_rows:ops.length,held_rows:gaps.length},no_new_mathematical_review_or_repair_round:true,no_canonical_or_native_writes:true};
fs.writeFileSync(out+'/proposal.json',JSON.stringify(proposal,null,2)+'\n');
fs.writeFileSync(out+'/actual-case-inspection-notes.json',JSON.stringify({version:1,run:packet.run,by:'/root/template_case_06',items:notes},null,2)+'\n');
fs.writeFileSync(out+'/gap-list.json',JSON.stringify({version:1,run:packet.run,partition:'06',gaps},null,2)+'\n');
console.log(proposal.counts);

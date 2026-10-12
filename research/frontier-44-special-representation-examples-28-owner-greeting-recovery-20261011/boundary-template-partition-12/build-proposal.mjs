import fs from 'node:fs';
import crypto from 'node:crypto';
import { itemHashGuard } from '../../../tools/item-hash.mjs';
const base='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011';
const packetPath=base+'/boundary-template-inventory/partition-12.json';
const packet=JSON.parse(fs.readFileSync(packetPath,'utf8'));
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const by='/root/template_case_12';
// Each entry records only the named current boundary; the source was read in this session.
const reviews=[
{
'iff-forward':['The refuted claim drops nonvanishing hypotheses from the faithful polynomial representation route; the counterexample gives a crossing killed by that representation, rather than an implication between two equivalent properties.','Statement refuted; Counterexample (b); step 2.1'],
'iff-reverse':['The nonhermitian parameter pair produces a vanishing spanning monomial by associativity; this is an obstruction to the proposed route and does not assert a reverse characterization of faithfulness.','Counterexample (c); step 3.1'],
'endpoints':['The two explicit colour pairs and the characteristic restriction are fixed data. The crossing-square and dot-slide calculations have no interval endpoint or extremal parameter limit to evaluate.','Given; steps 1.1 and 3.1'],
'nonempty-choice':['The polynomial skew-quiver model is specified by its basis and multiplication, and the crossing factors are explicitly zero and unity. These constructions select no representatives from arbitrary families.','steps 1.1 and 2.1'],
'one':['The witness has two distinct colours and total root height two; its failure is detected on a crossing between the two idempotent corners, so no separate rank-one algebra is claimed.','Given; step 2.1'],
'empty':['Both witnesses are at the sum of two simple roots. The counterexample concerns crossings between the nonempty residue words and makes no assertion about the height-zero KLR algebra.','Given; Counterexample (a)-(c)']
},
{
'iff-forward':['The refuted assertion is full faithfulness for all objects in the regular block. Killing the identity of the dominant simple disproves faithfulness directly, with no biconditional to split.','Statement refuted; step 2.1'],
'iff-reverse':['The zero Verma-to-antidominant-simple Hom space maps into a nonzero scalar Hom space after the functor. This disproves fullness and states no converse to the projective-target Struktursatz.','steps 2.2 and 3.1'],
'empty':['The category is the regular integral rank-one block and the witnesses are nonzero simples and Vermas. The zero functor value on the dominant simple is already the faithfulness witness, rather than an empty category.','Statement refuted; steps 1.1 and 2.1']
},
{
'iff-forward':['The Definition specifies a closed positive fundamental form and conventions for the polarization pairing. These are defining conditions on geometric and Hodge data, rather than the forward half of a theorem characterizing them.','Definition parts (1) and (3)'],
'iff-reverse':['The orientation is fixed by a complex frame and the Hodge pairing by the Weil operator. The Definition supplies these conventions without claiming a converse that recovers Kähler geometry from a polarized Hodge structure.','Definition Orientation and part (3)']
},
{
'iff-forward':['The residue functors are constructed from polynomial eigenspace projectors and a Frobenius tower extension. Exactness and biadjunction are asserted properties, not a biconditional characterizing the modules.','Definition; steps 2.2 and 4.1'],
'iff-reverse':['The duality comparison is obtained from the relative trace and tensor-Hom formulas. It makes no converse assertion that an arbitrary pair of biadjoint functors comes from this Hecke tower.','Definition; step 5.1'],
'one':['For a single root the basis exponent range contains only the constant exponent, while the coset representatives still give the tower rank. The finite-free and relative-trace arguments remain valid at this level.','step 1.1; steps 2.1 and 4.1','checked','At level one the exponent range in step 1.1 is the single value zero and the tower rank is d+1; the same finite-free Frobenius argument proves the residue functor assertions.'],
'endpoints':['The tower begins at degree zero, and the separate level-zero paragraph replaces the purported inclusion into positive degree by the zero map. The last proof step explicitly treats the resulting zero functors.','Definition final paragraph; step 7.1','checked','The level-zero endpoint has H_0 equal to the scalars and positive-degree algebras zero; step 7.1 explicitly proves the zero-functor exactness and adjunction conventions.'],
'nonempty-choice':['Inherited Choice is declared specifically for the bounded cyclotomic PBW supplier. The eigenspace projectors themselves are obtained by finite Chinese remainder interpolation, and the trace construction uses finite coordinate formulas.','Definition first paragraph; F1-F2; steps 2.1-2.2'],
'zero':['The current Definition explicitly says the level-zero tower map from the scalars to the zero algebra is not an embedding. Its positive-degree residue functors are zero and the final proof step checks their adjunctions.','Definition final paragraph; step 7.1','checked','For level zero the empty cyclotomic polynomial is unity, every positive-degree algebra is zero, and step 7.1 verifies the explicitly zero induction and restriction functors.']
},
{
'nonempty-choice':['Choice is inherited through the cited block, Verma and projective-cover theory. The finite Weyl orbit fixes the labels and its longest element fixes the antidominant weight; the Definition declares no additional selection.','Definition first and final paragraphs; Its labelled objects; The antidominant weight']
},
{
'one':['Level one is explicitly the fundamental cyclotomic weight, and the verification identifies the resulting rank-two algebra with the finite Hecke algebra on two letters. Thus the old denial of a level-one hypothesis is false.','Example opening; step 2.1','checked','The Example fixes level one explicitly; step 2.1 identifies its rank-two algebra with the two-dimensional finite Hecke algebra and proves its two scalar blocks.'],
'nonempty-choice':['The residue words are enumerated over the three colours, and the two Hecke characters explicitly determine the surviving labels. The verification requires no arbitrary representative or infinite family selection.','steps 1.1 and 2.1'],
'iff-forward':['The Example lists the cyclotomic relations, quadratic relations and two surviving blocks for a fixed cube-root parameter. These are explicit computations rather than the forward direction of an equivalence.','Example (i)-(iii); steps 1.1-2.1'],
'iff-reverse':['The surviving blocks are found from the trivial and sign characters and their dot eigenvalues. No reverse classification outside this fixed rank-two cube-root example is asserted.','Example (iii); step 2.1'],
'endpoints':['The field characteristic is restricted away from three and the parameter has exactly cubic order. The verification enumerates this fixed presentation and does not take a limiting parameter or vary the rank to an endpoint.','Example opening; steps 1.1-2.1'],
'degenerate':['A primitive cube root in the allowed characteristic differs from both unity and minus unity, so the two linear factors of the quadratic Hecke relation remain distinct and split the algebra into scalar factors.','step 2.1'],
'empty':['Every residue word has length two and the cyclotomic weight is the fixed fundamental weight. Vanishing idempotents are part of this nonempty presentation; the Example makes no claim about an empty tensor degree.','Example opening; step 1.1'],
'zero':['The cyclotomic exponent vanishes for first colours different from the distinguished colour, forcing their idempotents themselves to vanish. The verification also proves that the remaining four content blocks are zero.','Example (i) and (iii); steps 1.1 and 2.1','checked','Step 1.1 explicitly uses exponent zero to force six residue idempotents to vanish, and step 2.1 proves that the other four height-two content blocks are zero.']
},
{
'iff-reverse':['The sigma-series statement gives product, Cauchy, adjoint and reproducing formulas. The proof evaluates the Hall pairing on the Schur basis and claims no reverse characterization of specializations from the kernel identity.','Statement (1)-(5); step 5.1']
},
{
'one':['At affine rank one there are no braid generators and the ordered family is simply the Laurent monomials in the single commuting unit. The spanning and independence statements specialize without a distinct rank-one theorem.','Statement (1); steps 1.1 and 1.3'],
'nonempty-choice':['Straightening and the maximal-length contradiction use finite words and finite relations. Reduced expressions in the symmetric group are finite data, and the Remarks explicitly declare this proof choice-free.','steps 1.1 and 1.3; Remarks'],
'iff-forward':['The three affine claims are ordered bases, multiplication injectivity over the universal domain, and localized intertwining. They are consequences of the presentation and triangular representation, not an equivalence requiring a forward branch.','Statement (1)-(3); steps 1.3 and 2.2'],
'iff-reverse':['Embedding into the rational crossed product establishes independence of the ordered words; no converse recovers the Hecke relations from an arbitrary ordered basis or intertwining family.','steps 1.2-1.3 and 2.1'],
'endpoints':['The affine basis construction has discrete permutation and exponent indices. The theorem does not assert an interval limit for the invertible Laurent parameter; the variable differences are formally localized polynomials.','Statement; step 2.1'],
'degenerate':['The ordered free basis is explicitly preserved by arbitrary commutative base change with an invertible Hecke parameter. The domain-only multiplication injectivity is kept separate from possible zero divisors after specialization.','Statement (1)-(2); steps 1.3 and 2.2','checked','Step 1.3 tensors the free ordered basis through arbitrary commutative base change with unit z, while step 2.2 explicitly excludes any claim that nonzero zero divisors after base change act injectively.'],
'empty':['The conclusion expressly takes affine rank zero: there are no dot or Hecke generators, the symmetric group is trivial, and the sole ordered monomial is the unit of the coefficient ring.','step 4.1','checked','Step 4.1 treats rank zero explicitly: the affine algebra is the coefficient ring with sole ordered basis element unity and all intertwining clauses vacuous.']
},
{
'one':['The cellular theorem is uniform in multipartition rank and level; its component straightening and independent rank count do not assume several components or several nodes. No separately stated singleton classification is owed.','Statement; steps 1.1 and 3.1'],
'nonempty-choice':['A linear extension of the finite multipartition dominance poset organizes straightening, and the multinomial count is finite. These operations and tensoring the proved free basis require no arbitrary family selection.','steps 1.1 and 3.1'],
'iff-forward':['The Murphy family is asserted to satisfy the involution and coefficient-independence laws of a cellular datum. The proof establishes those laws and basis independence, with no biconditional to split into a forward direction.','Statement; steps 2.1 and 3.1'],
'iff-reverse':['The independent ordered PBW rank and standard-tableau count show that the spanning Murphy family is a basis. The theorem does not claim that every cellular basis must be this Murphy family.','step 3.1'],
'endpoints':['The basis proof explicitly includes the smallest rank: the final sentence of the rank-count step states that rank zero has a singleton empty basis. This supplies the discrete endpoint directly.','step 3.1','checked','Step 3.1 explicitly records rank zero as the singleton empty basis after the spanning and independent-rank argument.'],
'degenerate':['Repeated charges and the deformation discrete valuation ring retain the cellular basis by tensoring the universal free basis and its cell law. This is the explicit specialization argument at the end of the rank-count step.','Statement; step 3.1'],
'zero':['Rank zero is expressly included as a singleton empty basis, so the old assertion that no zero value occurs contradicts the actual proof. The universal basis then has the scalar algebra as its rank-zero carrier.','step 3.1','checked','The last sentence of step 3.1 treats rank zero as the singleton empty basis, covering the scalar algebra rather than excluding zero rank.']
},
{
'one':['The connectivity theorem allows every positive level, including a single component. Its fixed-component-core supplier supplies the level-one moves; the multi-component switches are needed only when more components occur.','Statement; F3; step 3.1'],
'nonempty-choice':['Rank lifts are built by moving a specified lowest runner bead, and strict descent reduces the finite core size. The Remarks expressly say that these finite constructions use no choice principle.','step 2.1; step 3.1; Remarks'],
'endpoints':['The final connectivity step explicitly separates empty rank, where only one multipartition exists. This resolves the lowest allowed discrete rank without invoking a core-switch sequence.','Statement n>=0; step 3.1','checked','Step 3.1 explicitly handles the lowest rank: the empty rank has only one multipartition and its Jantzen connectivity is immediate.'],
'degenerate':['The theorem permits arbitrary charged components and all field characteristics, but its deformation foot differences remain nonzero generic expressions. The proof uses their positive integer valuations, so no separate singular rational coefficient is introduced.','Statement; F1; step 3.1'],
'empty':['At empty rank there is exactly one empty multipartition and thus one content class. The conclusion explicitly declares its connectivity immediate, so the prior explanation denying an empty clause is false.','step 3.1','checked','Step 3.1 explicitly states that the empty rank has only one multipartition and is immediate, which proves the empty content class is Jantzen-connected.'],
'zero':['Zero rank is permitted in the Statement and explicitly discharged by the unique empty multipartition in the final proof step. No valuation edge is needed for the reflexive connectivity of that sole label.','Statement; step 3.1','checked','The Statement permits rank zero and step 3.1 discharges it by the unique empty multipartition, whose connectivity to itself needs no Jantzen edge.'],
'iff-forward':['Read with content equality on the left of the displayed equivalence, the forward direction is sufficiency. Core-switch lifts and fixed-core paths join every equal-content pair in the conclusion, rather than the necessity step cited in the old text.','Statement; steps 1.2-3.1','checked','Equal content implies Jantzen connectivity by the lifted core switches of step 2.1 and the terminating fixed-core path construction in step 3.1.'],
'iff-reverse':['Read with connectivity on the right of the Statement, the reverse direction is necessity. A nonzero integer hook coefficient equates the foot residues, and equal hook lengths transfer identical residue counts along each edge.','Statement; step 1.1','checked','Step 1.1 proves that every nonzero Jantzen edge preserves residue content, and transitivity gives equal content for every connected pair.']
},
{
'nonempty-choice':['The hook map extracts the common runner residue of its bead-gap pair and divides both positions by the runner modulus. Its inverse multiplies those coordinates back, so the bijection is canonical and requires no selected matching.','steps 1.1-2.1']
},
{
'nonempty-choice':['The deformation ring is explicitly the localization of a polynomial ring at the chosen parameter, and bridge partitions are formed by specified vertical and horizontal strips. Primitive idempotents are lifted by finite iteration in complementary corners.','steps 1.1, 4.1 and 4.2']
},
{
'degenerate':['The theorem works over generic Laurent and local chart rings, not at a specialized singular quantum parameter. Components that disappear under a highest-weight projection are explicitly killed using balanced string intersections, so their vanishing is not a missing degeneracy branch.','Statement; Given; steps 6.1-8.1','not_applicable','There is no singular quantum-parameter specialization: the theorem uses generic Laurent and chart rings; killed highest-weight crystal images are separately handled in steps 6.1-8.1.']
},
{
'iff-forward':['The graded character formula is asserted together with the regular-representation isomorphism. Equality of ordinary characters then proves that isomorphism; this is a chain of conclusions rather than an iff with a forward hypothesis.','Statement (1)-(3); steps 3.1-4.1'],
'iff-reverse':['The word equivalently relates the graded-lift description to the proved trace formula. The proof expands that trace in the irreducible-character basis and does not claim a converse reconstruction of the coinvariant presentation.','Statement (3); step 5.1'],
'nonempty-choice':['Choice is inherited through the harmonic complement and basic invariant suppliers. The proof explicitly uses the graded harmonic tensor decomposition and its invariant polynomial degrees when factoring the trace.','Statement; F1-F2; steps 1.1 and 1.3'],
'one':['For a rank-one Weyl group the unique basic degree is two and the reflection eigenvalue is minus unity. The displayed trace formula gives the scalar trivial piece and a degree-two sign piece, hence the regular character.','Statement (2); steps 2.1-4.1']
},
{
'iff-forward':['The two identities assert mutual centralizers for the diagonal enveloping action and truncated polynomial-place action. The first is proved by symmetric tensors and the second by equivariant covariants, without a biconditional hypothesis.','Statement; steps 1.1-1.2'],
'iff-reverse':['The Remarks call the second centralizer identity the converse half because it commutes the other action. This is still an asserted algebra equality, proved by covariant extension, and not a reverse direction of an iff.','Statement; step 1.2; Remarks'],
'one':['When the largest Jordan string has length one the nilpotent is zero and the truncated polynomial generators vanish. The covariant proof leaves exactly the place-permutation image and still proves both centralizer equalities.','Statement l>=1; step 1.2','checked','At largest Jordan length one, all individual nilpotent operators vanish and step 1.2 evaluates the covariants into the place-permutation image, so both centralizer identities still hold.'],
'degenerate':['The zero nilpotent on a nonzero space is permitted because its largest Jordan length is one. Evaluating covariants then kills every positive nilpotent power while retaining place permutations, so the old claim excluding zero Jordan type is false.','Statement; step 1.2','checked','The zero nilpotent is allowed with largest Jordan length one; step 1.2 evaluates its covariants using only the constant powers and place permutations, covering this degenerate Jordan type.'],
'endpoints':['Tensor degree zero is expressly treated in the stable-injectivity step: the tensor space and truncated-place algebra are both the scalars, and the centralizer identities and injectivity become scalar identities.','Statement final sentence; step 2.1'],
'nonempty-choice':['Choice is an explicit standing hypothesis, and the proof consumes the normal orbit-closure and covariant-extension suppliers for the second centralizer. Stable injectivity separately chooses only finitely many Jordan strings.','Statement; F3; steps 1.2 and 2.1'],
'empty':['The empty tensor power at degree zero is the scalar space, with no polynomial variables and only the identity permutation. The stable-injectivity step explicitly proves the scalar identities and automatic injectivity.','Statement final sentence; step 2.1','checked','For the empty tensor degree, step 2.1 explicitly sets the tensor space and right algebra equal to the scalars and proves both identities and injectivity.'],
'zero':['The Statement permits tensor degree zero and the final proof step explicitly sets both carriers equal to the scalars. Thus zero degree is checked by an actual calculation, not merely by its appearance in the parameter range.','Statement; step 2.1']
}
];
const operations=[], inspections=[];
for(let k=0;k<packet.items.length;k++){
 const item=packet.items[k], raw=fs.readFileSync(item.current_item_path,'utf8');
 if(hash(raw)!==item.current_item_raw_sha256 || itemHashGuard(raw)!==item.current_item_guard_sha256)throw Error('Changed item '+item.id);
 for(const row of item.rows){
  const [reason,anchor,status,newText]=reviews[k][row.case]??[];
  if(!reason || reason.length<40)throw Error('Missing reason '+item.id+' '+row.case);
  for(const loc of row.batch_locations){
   const contractRaw=fs.readFileSync(loc.path,'utf8');
   if(hash(contractRaw)!==loc.contract_raw_sha256)throw Error('Changed contract '+loc.path);
   let live=JSON.parse(contractRaw);for(const key of loc.field_path)live=live[key];
   if(JSON.stringify(live)!==JSON.stringify(loc.before_row))throw Error('Changed row '+loc.pointer);
   const after=structuredClone(live);
   if(status)after.status=status;
   if(newText){delete after.reason;delete after.evidence;after[after.status==='checked'?'evidence':'reason']=newText;}
   const text=after.reason??after.evidence??'';
   after.template_review={upheld:true,by,reason,item_sha256:itemHashGuard(raw),row_sha256:hash(JSON.stringify({case:after.case,status:after.status,text}))};
   const changedFields=[...new Set([...Object.keys(live),...Object.keys(after)])].filter(x=>JSON.stringify(live[x])!==JSON.stringify(after[x]));
   const field_operations=changedFields.map(field=>({op:after[field]===undefined?'remove':live[field]===undefined?'add':'replace',pointer:loc.pointer+'/'+field,...(live[field]===undefined?{}:{before:live[field]}),...(after[field]===undefined?{}:{after:after[field]})}));
   operations.push({id:item.id,case:row.case,path:loc.path,pointer:loc.pointer,field_path:loc.field_path,contract_raw_sha256:loc.contract_raw_sha256,item_path:item.current_item_path,item_raw_sha256:item.current_item_raw_sha256,item_guard_sha256:item.current_item_guard_sha256,before_row:live,before_raw_row_sha256:hash(JSON.stringify(live)),before_row_sha256:row.row_sha256,after_row:after,after_raw_row_sha256:hash(JSON.stringify(after)),after_row_sha256:after.template_review.row_sha256,field_operations,inspection_anchor:anchor,mathematical_review_scope:'Exact assigned boundary only; no whole-item audit or new proof acceptance'});
  }
  inspections.push({id:item.id,case:row.case,source_path:item.current_item_path,source_raw_sha256:item.current_item_raw_sha256,anchor,reason,disposition:status&&status!==row.status?'corrected-status-and-explanation':newText?'corrected-explanation':'retained-status-and-text',actual_before_status:row.status,proposed_after_status:status??row.status});
 }
}
const out=base+'/boundary-template-partition-12';
const proposal={version:1,run:packet.run,partition:'12',by,recorded_at:new Date().toISOString(),authority:{path:base+'/boundary-template-inventory/SEALED-INVENTORY.json',raw_sha256:hash(fs.readFileSync(base+'/boundary-template-inventory/SEALED-INVENTORY.json'))},assignment:{path:packetPath,raw_sha256:hash(fs.readFileSync(packetPath))},source_guards:{merged_contract:packet.merged_contract,native_tool:packet.native_tool,policy:packet.policy.path,policy_raw_sha256:packet.policy.raw_sha256},counts:{items:packet.items.length,assigned_rows:inspections.length,batch_operations:operations.length},history_and_counters_preserved:true,canonical_writes:false,no_new_mathematical_audit:true,actual_afterbinding_required:true,operations};
for(const [name,obj] of [['proposal.json',proposal],['inspection-notes.json',{version:1,run:packet.run,by,inspections}],['gap-list.json',{version:1,run:packet.run,partition:'12',by,gaps:[],scope:'No unresolved gap in exact assigned boundary explanations; no whole-item or supplier acceptance asserted'}]])fs.writeFileSync(out+'/'+name,JSON.stringify(obj,null,2)+'\n',{flag:'wx'});
const files=['proposal.json','inspection-notes.json','gap-list.json'].map(name=>({path:out+'/'+name,raw_sha256:hash(fs.readFileSync(out+'/'+name))}));
fs.writeFileSync(out+'/SEALED-PROPOSAL.json',JSON.stringify({version:1,run:packet.run,partition:'12',by,recorded_at:new Date().toISOString(),files,counts:proposal.counts,status:'SEALED_PROPOSAL_AWAITING_ROOT_INTEGRATION_AND_ACTUAL_AFTERBINDING',no_canonical_or_native_writes:true},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({counts:proposal.counts,corrected:inspections.filter(x=>x.disposition!=='retained-status-and-text').map(x=>({id:x.id,case:x.case,status:x.proposed_after_status})),seal:out+'/SEALED-PROPOSAL.json'}));

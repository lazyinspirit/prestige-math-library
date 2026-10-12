import fs from 'node:fs';
import crypto from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base='research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011';
const out=base+'/boundary-template-partition-13';
const packetPath=base+'/boundary-template-inventory/partition-13.json';
const p=JSON.parse(fs.readFileSync(packetPath));
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const hrow=r=>sha(JSON.stringify({case:r.case,status:r.status,text:r.reason??r.evidence??''}));
// Each reason below follows the actual current claim and the indicated local case clause.
// A second tuple member replaces an inaccurate explanation; a third replaces status.
const reviews=[
{'nonempty-choice':['The hook counterexample computes the horizontal removals and the runner positions of two explicitly given Young diagrams; top-packing the listed beads needs no selection from an indexed family.']},
{
'iff-forward':['The shifted Yangian is introduced by generators and relations, then the finite quotient and its coefficient convention are defined; this is a presentation with well-definedness suppliers, rather than a predicate with a forward implication.'],
'iff-reverse':['Neither the Gauss coefficient convention nor the distinction between canonical and loop filtrations claims a converse classification of algebras satisfying these properties.'],
'one':['For a single row the adjacent positive and negative root families are empty, while the diagonal modes and their truncation remain; the range arithmetic and triangular inversion in the first proof step do not require an adjacent pair.','The single-row case retains the diagonal generators and truncation; adjacent-root families are empty and the same range and Gauss formulas apply.','checked'],
'degenerate':['Equal row lengths are permitted: their upper shift is zero by the telescoping formula, and both root directions then start at the first positive mode; the finite coefficient ranges in the quotient argument do not exclude this rectangular case.','Repeated row lengths are allowed; zero shifts and the corresponding first-positive-mode ranges are handled by the telescoping and finite coefficient formulas.','checked'],
'nonempty-choice':['The shift matrix and ordered pyramid are supplied data, the higher roots are recursive commutators, and Gauss coefficients are determined by triangular inversion with unit diagonal constant term; these are specified algebraic operations.'],
'endpoints':['The finite range is open at the shift threshold and closed at the truncation bound; the finite quotient step explicitly proves vanishing below the former and above the latter, so these integer cutoff cases are accounted for.','The finite quotient proof gives vanishing at or below the shift threshold and above the upper truncation bound.','checked'],
'zero':['Zero shifts, zero row lengths and the constant matrix coefficient are allowed by the Definition: the constant coefficient is the identity, and a zero-length surviving-mode interval contributes no generators in the finite quotient step.','Zero shifts and row lengths are allowed; the constant matrix coefficient is the identity and zero-length mode ranges contribute no surviving generators.','checked']
},
{
'one':['With a single strand there are no crossings or braid words; the monic first-strand cyclotomic relation remains, while level-one exponents use exactly the same quotient relation without requiring an extra coefficient convention.','Single-strand and level-one data use the displayed first-strand monic relation; crossing relations are vacuous when no crossing exists.','checked'],
'iff-forward':['The specialization dictionary does state that native KLR relations imply the source relations; dot sliding, squares and the ordered braid difference are computed explicitly after negating the crossing generator.','The native-to-source direction is the displayed dot-sliding, quadratic and ordered braid computation under the sign change of crossings.','checked'],
'iff-reverse':['Conversely, negating the source crossing generator recovers the native generator because the sign change is involutive; the displayed relation-by-relation dictionary thus recovers the identical cyclotomic presentation.','The inverse sign change recovers the native generators and the same monic cyclotomic relation, establishing the converse presentation dictionary.','checked'],
'endpoints':['The quantum-characteristic split is discrete: the double edge is given a separate symmetric quadratic polynomial, and the remaining finite cyclic cases use the two oriented linear polynomials, with no interval limit being taken.'],
'empty':['The referenced cyclotomic quotient Definition explicitly sets its root-degree-zero sector equal to the field; that empty-strand convention carries to this specialization, and no first-strand relation or crossing sign is imposed there.','The standard cyclotomic quotient supplier sets the empty-strand sector equal to the field; the specialization introduces no relation on that sector.','checked'],
'zero':['The diagonal Cartan polynomial is zero, equal-color crossing squares vanish, and first-strand exponents may vanish in the dominant-weight quotient; all are specified algebraic relations, rather than excluded values.'],
'nonempty-choice':['The type-A polynomial family is given by orientation and the double-edge formula, and the dot and crossing dictionary is explicit; the final Definition paragraph expressly records that this specialization uses no choice principle.'],
'degenerate':['The double-edge braid quotient is computed as the sum of the outside dots minus twice the middle dot, with the reversed word order recorded; the Definition explicitly retains this calculation in characteristic two.']
},
{
'iff-forward':['The example asserts an idempotent calculation, a graded projective decomposition and a divided-power pairing value for the fixed nil-Hecke algebra; none is presented as a criterion with a separate implication.'],
'iff-reverse':['The verification does not claim that an arbitrary projective with the same pairing or endomorphism ring must recover the displayed nil-Hecke generators; it computes the named projective from those generators.'],
'endpoints':['The regular-module decomposition explicitly evaluates its graded multiplicity at the unit value of the grading variable, obtaining the ungraded number of polynomial columns; this is the specialization actually used in the example.','The graded multiplicity is evaluated at the unit value of the grading variable in the regular-module decomposition, giving the ungraded column count.','checked'],
'nonempty-choice':['The nil-Hecke idempotent is the specified dot-crossing product, and the polynomial columns come from the displayed Artin monomials; their finite construction introduces no arbitrary family of representatives.'],
'degenerate':['The repeated-color nil-Hecke relation makes the crossing square zero, and the idempotent calculation uses precisely that nilpotence together with dot sliding; the repeated-root configuration is the example itself.','The repeated-color nil-Hecke configuration is handled explicitly: crossing-square nilpotence and dot sliding prove the displayed idempotents.','checked'],
'empty':['The example fixes two equal-color strands and their nonzero dot-crossing idempotent, so the empty-root algebra is outside this projective computation rather than a missing rank case.']
},
{'nonempty-choice':['The decomposition matrix is derived from three explicit partitions, their signed beta-sequence moves, and the displayed tabloid and Murphy generator matrices; the scalar-extension argument uses the supplied absolute simple heads and makes no indexed choice.']},
{
'iff-forward':['The coinvariant example computes the quotients and graded characters of the two specified symmetric groups; agreement with the regular character is an asserted calculation, not the forward side of a classification criterion.'],
'iff-reverse':['The character check does not claim that any algebra with the listed graded dimensions or character must be the coinvariant quotient; it verifies the quotient already supplied in the example.'],
'nonempty-choice':['The opening paragraph explicitly assumes choice because the harmonic-complement and graded-regular-representation suppliers carry it; the finite transposition and three-cycle character computations retain that inherited premise.']
},
{'iff-reverse':['The smooth fitting statement constructs close approximations from supplied whole-star embeddings, product charts and separated protected regions; it does not infer those original hypotheses from the existence of a fitted union.']},
{'iff-reverse':['The Gauss-Manin statement constructs a local system, integral lattice and polarization from a smooth projective family; it does not claim that every polarizable rational Hodge variation arises from such a family.']},
{
'iff-forward':['The nilpotent-orbit lemma concludes normality and a boundary codimension estimate from a nilpotent endomorphism and chain construction; it states no predicate whose forward implication must be split from this conclusion.'],
'iff-reverse':['Normality of an affine domain is not claimed to characterize nilpotent orbit closures or to reconstruct a chain scheme; the orbit closure is the given subject of this lemma.'],
'one':null,
'degenerate':null,
'endpoints':null,
'nonempty-choice':['Choice is an explicit premise of the nilpotent-chain lemma and appears among its dependencies; Jordan-string bases, homogeneous complements and the invariant-theory suppliers are used under that premise rather than a claimed choice-free construction.']
},
{
'one':['The blockwise theorem places no restriction on dominant level or strand height; the explicit central-sector inverse maps in its first proof step apply to every content, so single-strand and level-one sectors use those same maps.','Single-strand and level-one sectors are included in the all-content inverse-map assertion used in the first proof step.','checked'],
'nonempty-choice':['Both Hecke-to-KLR and KLR-to-Hecke maps are fixed by their generator formulas; the first proof step expressly avoids algebraic closure and root extraction, and the closing remark records that the block identification uses no choice.'],
'iff-forward':['The theorem gives mutually inverse algebra maps and an equivalent generators-and-relations description, rather than an if-and-only-if test on unknown data; composing the maps is part of proving the isomorphism.'],
'iff-reverse':['The inverse Hecke map is an explicitly constructed inverse homomorphism, not the reverse implication of a characterization; no converse statement about arbitrary graded blocks is claimed.'],
'endpoints':['Finite quantum characteristic has a discrete lower allowed value, and the theorem expressly includes the degenerate and nondegenerate branches through their separately proved central-sector suppliers; there is no continuous parameter endpoint assertion.'],
'empty':['Height zero is not excluded by the nonzero-sector premise; the all-content inverse-map assertion in the first proof step includes this sector, where there are no dot or crossing generators to normalize.','The all-content central-sector inverse maps include height zero, where the dot and crossing normalization is vacuous.','checked'],
'degenerate':['The blockwise dot normalization has separate additive and multiplicative formulas: the degenerate branch subtracts the residue from the additive Hecke generator, while the other branch uses the normalized multiplicative generator.'],
'zero':['The Statement excludes zero central sectors by its nonzero idempotent premise, but the first proof step separately retains the supplier assertion that a vanishing Hecke sector corresponds exactly to a vanishing cyclotomic KLR sector.','Zero central sectors are excluded from the block conclusion and explicitly matched by the all-content supplier assertion in the first proof step.','checked']
},
{
'iff-forward':['The Verma endomorphism theorem asserts an action-induced isomorphism and equality of annihilator and central-character ideal; its injectivity and isotypic surjectivity arguments are parts of that assertion, not a separate forward criterion.'],
'iff-reverse':['The theorem does not classify modules whose locally finite endomorphism algebra has the same central quotient; the supplied Verma highest weight remains a premise throughout the action and multiplicity arguments.'],
'nonempty-choice':['The Verma statement explicitly assumes choice, and its final proof step identifies the category-O and invariant-theory suppliers as the inherited source of that premise; the locally finite isotypic comparison does not remove it.']
},
{
'empty':['The positive canonical recursion starts at the multiplicative unit, the empty divided-power word; the induction explicitly treats positive crystal height after that base element, so the empty-word case is included.','The positive canonical recursion has the unit as its base element, before the positive-height string induction.','checked'],
'degenerate':['A dominant label with all simple-coroot coordinates zero is still among the highest-module labels; the based-quotient step omits precisely killed crystal classes and retains the highest vector, so it does not require a regular nonzero dominant label.','The highest-module quotient applies to every dominant label, including zero, by its killed-or-surviving crystal-class rule.','checked'],
'endpoints':['The parameter is formal, and the norm transport and signed-set argument use residue modulo the parameter at zero; the root-color factor is a unit with constant term the unit, so the formal zero residue is explicitly controlled.','The formal parameter-zero residue is used in the norm transport: the root-color factor has unit constant term and preserves the signed norm condition.','checked']
},
{'iff-reverse':['Murnaghan stability concludes eventual constancy from the finitely generated padded FI families and their tensor product; it does not infer finite generation of an arbitrary sequence merely from eventual Kronecker multiplicities.']},
{
'iff-forward':['The loop-filtration theorem identifies the image of highest homogeneous components with the embedded centralizer enveloping algebra; this constructs a graded algebra isomorphism rather than a forward predicate implication.'],
'iff-reverse':['The theorem does not characterize all filtered deformations of the centralizer enveloping algebra as finite W-algebras; the pyramid reduction and intersection filtration are supplied before the associated graded is identified.'],
'one':['For a single surviving centralizer direction the ambient homogeneous-basis PBW argument still gives independent powers, and the strictness argument uses finite linear combinations without requiring multiple generator directions.','A single centralizer generator is covered by the ambient PBW independence and finite-linear-combination strictness arguments.','checked'],
'degenerate':['A zero nilpotent has good degree zero on its matrix centralizer; the strictness proof explicitly allows degree-zero generators, so the loop-symbol argument does not exclude this Jordan configuration.','Degree-zero centralizer generators, including the zero-nilpotent configuration, are explicitly allowed in the strictness argument.','checked'],
'nonempty-choice':['The only basis extension in the loop proof is a homogeneous extension inside the finite-dimensional parabolic Lie algebra; the symbol calculation uses the supplied finite pyramid and actual ambient PBW monomials rather than arbitrary indexed selections.'],
'endpoints':['The filtration proof states that the negative first filtration level is zero, and the strictness step treats the largest homogeneous degree even when zero-degree generators occur; the bottom filtration boundary is explicitly established.','The bottom filtration level is zero below degree zero, and strictness is proved also in the presence of zero-degree generators.','checked'],
'zero':['The constant-loop-degree modes have leading centralizer symbols in degree zero; the strictness paragraph explicitly proves independence even when these modes occur, contradicting the old explanation that no zero degree is allowed.','Zero loop degree is allowed, and the strictness proof explicitly keeps the corresponding generators in its highest-component independence argument.','checked'],
'empty':['Ordered PBW monomials include the empty monomial, which is the algebra unit in degree zero; the homogeneous-component embedding and the bounded-below filtration preserve this unit along with the nonempty monomials.','The empty PBW monomial is the algebra unit in degree zero and is included in the ordered-monomial symbol basis.','checked']
}
];
const gaps=[]; const operations=[]; const inspections=[];
for(let n=0;n<p.items.length;n++){
 const item=p.items[n]; const text=fs.readFileSync(item.current_item_path,'utf8');
 if(sha(text)!==item.current_item_raw_sha256||itemHashGuard(text)!==item.current_item_guard_sha256)throw Error('item drift '+item.id);
 for(const row of item.rows){
  const spec=reviews[n][row.case]; if(spec===undefined)throw Error('missing case '+item.id+row.case);
  const note={id:item.id,case:row.case,item_path:item.current_item_path,item_raw_sha256:sha(text),item_guard_sha256:itemHashGuard(text),inspection_scope:'Current claim and relevant local case clauses only; no new whole-item mathematical acceptance',finding:spec?.[0]??'The allowed zero nilpotent has a single-column Jordan partition; its chain has no maps, but the Statement and first and last proof steps refer to the nonexistent end-product maps. The same problem occurs in dimension one and at the terminal empty-chain endpoint.'};
  inspections.push(note);
  if(spec===null){gaps.push({...note,before_status:row.status,before_text:row.text,merged_pointer:row.merged_pointer,batch_locations:row.batch_locations,disposition:'HOLD_EXACT_CASE_NO_UPHOLD',minimal_missing_prerequisite:'A supplied empty-chain convention and argument defining the end map as the zero endomorphism when the Jordan partition has a single column, including the one-dimensional zero nilpotent; establish the corresponding point chain quotient and empty boundary convention without referring to nonexistent maps.',no_source_change:true,no_new_math_round:true});continue;}
  for(const loc of row.batch_locations){
   const raw=fs.readFileSync(loc.path); if(sha(raw)!==loc.contract_raw_sha256)throw Error('contract drift');
   const c=JSON.parse(raw); let actual=c;for(const k of loc.field_path)actual=actual[k];
   if(JSON.stringify(actual)!==JSON.stringify(loc.before_row))throw Error('row drift');
   const after=structuredClone(actual);
   if(spec[1]){const field=Object.hasOwn(after,'reason')?'reason':'evidence';after[field]=spec[1];}
   if(spec[2])after.status=spec[2];
   if(after.template_review)throw Error('existing review must retain history');
   after.template_review={upheld:true,by:'/root/template_case_13',reason:spec[0],item_sha256:itemHashGuard(text),row_sha256:hrow(after)};
   operations.push({path:loc.path,contract_raw_sha256:loc.contract_raw_sha256,pointer:loc.pointer,field_path:loc.field_path,id:item.id,case:row.case,item_path:item.current_item_path,item_raw_sha256:sha(text),item_guard_sha256:itemHashGuard(text),before_row:actual,before_raw_row_sha256:sha(JSON.stringify(actual)),before_row_sha256:hrow(actual),after_row:after,after_raw_row_sha256:sha(JSON.stringify(after)),after_row_sha256:hrow(after),operation:'guarded_replace_exact_boundary_row',changed_fields:Object.keys(after).filter(k=>JSON.stringify(after[k])!==JSON.stringify(actual[k])),preserve_all_other_row_and_contract_fields:true});
  }
 }
}
const proposal={version:1,run:p.run,partition:'13',agent:'/root/template_case_13',recorded_at:new Date().toISOString(),policy:'exact-template-boundary-explanations-research-only',status:'SEALED_PROPOSAL_AWAITING_ROOT_INTEGRATION_AND_ACTUAL_AFTER_BINDING',packet:{path:packetPath,raw_sha256:sha(fs.readFileSync(packetPath))},sealed_inventory:{path:base+'/boundary-template-inventory/SEALED-INVENTORY.json',raw_sha256:sha(fs.readFileSync(base+'/boundary-template-inventory/SEALED-INVENTORY.json'))},source_guards:{merged_contract:p.merged_contract,native_tool:p.native_tool,extra_context:[{path:'items/def-cyclotomic-klr-quotient-at-a-dominant-weight.md',raw_sha256:sha(fs.readFileSync('items/def-cyclotomic-klr-quotient-at-a-dominant-weight.md')),scope:'Only explicit root-degree-zero field convention and standard monic relation'}]},counts:{items:p.items.length,assigned_rows:inspections.length,proposed_rows:operations.length,held_rows:gaps.length},operations,case_inspections:inspections,history_and_counters:'Existing reviewed/repair attribution, all unrelated fields and mathematical round counters remain untouched; no source, native state, gate or publication writes.',gap_list_path:out+'/gaps.json'};
fs.writeFileSync(out+'/proposal.json',JSON.stringify(proposal,null,2)+'\n',{flag:'wx'});
fs.writeFileSync(out+'/gaps.json',JSON.stringify({version:1,run:p.run,partition:'13',agent:'/root/template_case_13',gaps},null,2)+'\n',{flag:'wx'});
fs.writeFileSync(out+'/SEALED-PROPOSAL.json',JSON.stringify({version:1,run:p.run,partition:'13',agent:'/root/template_case_13',recorded_at:new Date().toISOString(),proposal:{path:out+'/proposal.json',raw_sha256:sha(fs.readFileSync(out+'/proposal.json'))},gaps:{path:out+'/gaps.json',raw_sha256:sha(fs.readFileSync(out+'/gaps.json'))},counts:proposal.counts,awaiting_actual_after_binding:true},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify(proposal.counts));

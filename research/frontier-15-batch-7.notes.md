# frontier-15 batch 7 — Beta-7 scaffold notes

## Scope and controlling decisions

This batch owns the A/B pair `monads-comonads-and-their-algebras` / `monads-comonads-and-their-algebras-examples` at orders 365.005 and 365.006. The A page has 59 items and remains below the hard 60-item ceiling, so I do not recommend a split. Alpha pre-adjudicated the contingency: if a later repair would push the A page above 60, retain current items 1–36 through `thm-monads-on-a-preorder-are-exactly-closure-operators` on the present page and move current item 37 onward to `standard-monads-ultrafilters-and-comonad-algebras`, with companion `standard-monads-ultrafilters-and-comonad-algebras-examples`. Do not prune an item to avoid that split.

No forward reference is retained. Every external dependency in the manifest was opened from `items/<id>.md` and confirmed `status: published`; every dependency with an owning page in `plan-spec.json` has order below 365.005. The legacy published items `thm-int-comm-ring` and `def-free-abelian-group` have no owning page object in the current spec, so they are the only order metadata exceptions; both have literature-derived Statements and are used solely in the free-abelian-group example. Every other dependency is earlier in this A/B pair. No dependency is an `ai-generated` Statement/Construction. No proposed item uses an external `proved_here: false` fallback.

## Proposed A-page summary (exactly two paragraphs)

An adjunction supplies a unit, counit, and triangle identities, while the published limit and colimit vocabulary distinguishes preservation from ordinary and strict creation. The reflective-subcategory results identify objects by invertibility of a reflection unit. For a small category, its endofunctors and natural transformations form the functor category from that category to itself.

The page defines monads and comonads, constructs the monad and comonad induced by an adjunction, and develops the Eilenberg–Moore and Kleisli resolutions with their comparison functors and extremal universal properties. It also treats restriction along a monad morphism, then proves the limit, conservativity, idempotence, distributive-law, preorder, algebraic, power-set, and ultrafilter results before giving the dual coalgebra, co-Eilenberg–Moore, and co-Kleisli constructions. The examples page computes the principal constructions and records failures of freeness, monadicity, and colimit preservation.

## Per-page item lists

### `monads-comonads-and-their-algebras` — 59 items

1. `def-monad` — definition — Monad on a category
2. `rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists` — remark — The monoid description of a monad requires an endofunctor category
3. `def-comonad` — definition — Comonad on a category
4. `thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint` — theorem — Every adjunction induces a monad on the domain of its left adjoint
5. `cor-every-adjunction-induces-a-comonad-on-the-other-side` — corollary — Every adjunction induces a comonad on the codomain of its left adjoint
6. `def-t-algebra-and-algebra-homomorphism` — definition — Algebra and algebra homomorphism for a monad
7. `thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition` — theorem — Algebra homomorphisms are closed under identities and composition
8. `def-eilenberg-moore-category` — definition — Eilenberg–Moore category of a monad
9. `def-free-t-algebra` — definition — Free algebra for a monad
10. `thm-the-eilenberg-moore-adjunction-induces-the-given-monad` — theorem — The free–forgetful Eilenberg–Moore adjunction induces the given monad
11. `thm-kleisli-composition-is-associative-and-unital` — theorem — Kleisli composition is associative and unital
12. `def-kleisli-category` — definition — Kleisli category of a monad
13. `thm-the-kleisli-adjunction-induces-the-given-monad` — theorem — The Kleisli adjunction induces the given monad
14. `rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic` — remark — The Kleisli and Eilenberg–Moore universal properties are schematic
15. `thm-the-kleisli-factorisation-functor-exists-and-is-unique` — theorem — The Kleisli factorisation functor for an adjunction inducing a monad exists and is unique
16. `thm-the-comparison-functor-exists-and-is-unique` — theorem — The comparison functor to the Eilenberg–Moore category exists and is unique
17. `cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties` — corollary — Kleisli and Eilenberg–Moore adjunctions have the extremal universal properties
18. `cor-composition-with-an-identity-monad-adjunction-preserves-the-induced-monad` — corollary — Composing with an adjunction that induces the identity monad on the nose does not change the induced monad
19. `thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras` — theorem — The comparison from the Kleisli category is fully faithful with image the free algebras
20. `def-monadic-and-strictly-monadic-functor` — definition — Monadic and strictly monadic functors
21. `def-conservative-functor` — definition — Conservative functor
22. `thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits` — theorem — The Eilenberg–Moore forgetful functor strictly creates every limit that exists in the base
23. `cor-every-category-monadic-over-set-is-complete` — corollary — Every category monadic over Set is complete
24. `thm-eilenberg-moore-creates-base-colimits-preserved-by-the-monad-and-its-square` — theorem — The Eilenberg–Moore forgetful functor creates every colimit in the base that the monad and its square preserve
25. `thm-a-monadic-functor-is-conservative` — theorem — Every monadic functor is conservative
26. `def-idempotent-monad` — definition — Idempotent monad
27. `thm-equivalent-characterisations-of-an-idempotent-monad` — theorem — For a monad, invertibility of multiplication, monicity of every multiplication component, and equality of the two whiskered units are equivalent
28. `thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory` — theorem — Algebras for an idempotent monad form a reflective subcategory
29. `cor-kleisli-and-eilenberg-moore-categories-are-equivalent-for-an-idempotent-monad` — corollary — The Kleisli and Eilenberg–Moore categories of an idempotent monad are equivalent
30. `thm-the-inclusion-of-a-reflective-subcategory-is-monadic` — theorem — The inclusion of a reflective full subcategory is monadic
31. `def-monad-morphism` — definition — Morphisms between monads on one category
32. `thm-monad-morphisms-on-a-fixed-category-form-a-category` — theorem — Whenever the endofunctor category exists, monads on a fixed category and their morphisms form a category
33. `thm-a-monad-morphism-induces-restriction-of-algebras-and-a-comparison-of-free-algebras` — theorem — A monad morphism induces restriction of algebras and a natural comparison of free algebras
34. `def-distributive-law-between-two-monads` — definition — Distributive law between two monads
35. `thm-a-distributive-law-makes-the-composite-a-monad` — theorem — A distributive law makes the composite endofunctor a monad
36. `thm-monads-on-a-preorder-are-exactly-closure-operators` — theorem — On a preorder the monads are exactly the monotone extensive maps with T(Tp) below Tp; on a poset they are exactly the closure operators
37. `cor-algebras-for-a-closure-operator-monad-are-its-fixed-points` — corollary — Algebras for a preorder monad are exactly its fixed objects up to preorder equivalence; on a poset they are its fixed points
38. `cor-comonads-on-a-preorder-are-interior-operators` — corollary — On a preorder the comonads are exactly the monotone contractive maps with Gp below G(Gp); on a poset they are exactly the interior operators
39. `thm-the-free-monoid-monad-and-its-algebras-are-monoids` — theorem — The free-monoid monad has monoids as its Eilenberg–Moore algebras
40. `thm-the-free-group-monad-and-its-algebras-are-groups` — theorem — The free-group monad has groups as its Eilenberg–Moore algebras
41. `thm-the-free-module-monad-and-its-algebras-are-modules` — theorem — For a unital ring R, the free-R-module monad on sets has left R-modules as its Eilenberg–Moore algebras
42. `thm-the-covariant-power-set-monad` — theorem — Singleton and union define the covariant power-set monad
43. `thm-algebras-for-the-covariant-power-set-monad-are-posets-with-all-small-suprema` — theorem — Algebras for the covariant power-set monad are posets with all small suprema and their morphisms preserve every small supremum
44. `lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial` — lemma — Pushforward sends ultrafilters to ultrafilters and is functorial
45. `lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural` — lemma — The principal-ultrafilter and ultrafilter-flattening formulas are well-defined and natural
46. `def-the-ultrafilter-endofunctor-unit-and-multiplication` — definition — The ultrafilter endofunctor with principal unit and flattening multiplication
47. `thm-the-ultrafilter-monad-is-a-monad` — theorem — The ultrafilter endofunctor with principal unit and flattening multiplication is a monad
48. `def-coalgebra-for-a-comonad-and-coalgebra-homomorphism` — definition — Coalgebra and coalgebra homomorphism for a comonad
49. `thm-coalgebra-homomorphisms-are-closed-under-identities-and-composition` — theorem — Coalgebra homomorphisms are closed under identities and composition
50. `def-coeilenberg-moore-category` — definition — Co-Eilenberg–Moore category of a comonad
51. `thm-the-coeilenberg-moore-adjunction-induces-the-given-comonad` — theorem — The cofree–forgetful co-Eilenberg–Moore adjunction induces the given comonad
52. `thm-cokleisli-composition-is-associative-and-unital` — theorem — Co-Kleisli composition is associative and unital
53. `def-cokleisli-category` — definition — Co-Kleisli category of a comonad
54. `thm-the-cokleisli-adjunction-induces-the-given-comonad` — theorem — The co-Kleisli adjunction induces the given comonad
55. `cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties` — corollary — Co-Kleisli and co-Eilenberg–Moore adjunctions have the dual extremal universal properties
56. `fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent-for-every-monad` — false statement — FALSE: The Kleisli and Eilenberg–Moore categories are equivalent for every monad
57. `fs-every-functor-with-a-left-adjoint-is-monadic` — false statement — FALSE: Every functor with a left adjoint is monadic
58. `fs-a-monad-is-a-monoid-object-in-the-endofunctor-category-for-every-category` — false statement — FALSE: A monad is a monoid object in the endofunctor category for every category
59. `fs-every-algebra-for-a-monad-is-free` — false statement — FALSE: Every algebra for a monad is free

### `monads-comonads-and-their-algebras-examples` — 13 items

1. `ex-a-kleisli-composite-computed` — example — A Kleisli composite for the list monad computed by substitution and concatenation
2. `ex-the-maybe-monad-and-partial-functions` — example — The Kleisli category of the maybe monad is the category of sets and partial functions
3. `ex-the-list-monad-on-a-two-element-set` — example — The list monad on a two-element set
4. `ex-the-writer-monad-from-a-monoid` — example — A monoid defines the writer monad by adjoining an accumulated output
5. `ex-the-state-monad` — example — The state monad threads a fixed state set through a computation
6. `ex-the-closure-operator-monad-on-a-topological-space` — example — Topological closure is a monad on the preorder of subsets
7. `ex-the-interior-comonad-on-a-topological-space` — example — Topological interior is a comonad on the preorder of subsets, with the open subsets as its coalgebras
8. `ex-a-distributive-law-between-two-finite-closure-operator-monads` — example — Adjoining one of two fixed points defines commuting closure-operator monads whose distributive law yields their composite
9. `ex-the-free-abelian-group-monad` — example — The free-abelian-group monad sends a set to its finite formal integer combinations
10. `ex-the-ultrafilter-monad-on-a-finite-set` — example — On finite sets the ultrafilter monad is naturally isomorphic to the identity; assuming the ultrafilter lemma, its unit is not invertible on the natural numbers
11. `cex-an-algebra-that-is-not-free` — counterexample — A two-element idempotent monoid is an algebra for the free-monoid monad but is not free
12. `cex-a-coequalizer-not-preserved-by-a-forgetful-functor` — counterexample — The group coequalizer of doubling and zero on the integers is not its underlying-set coequalizer
13. `ex-the-double-contravariant-power-set-monad` — example — The self-adjunction of the contravariant power-set functor induces the double-power-set monad

## Richness and proof-decomposition report

Both the long-proof decomposition pass and the corollary pass were performed independently for this pair.

- Eilenberg–Moore well-definedness was separated into `thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition` before `def-eilenberg-moore-category`; the old theorem title incorrectly treated the category as already defined.
- Riehl Proposition 5.2.13 / Richter Theorem 6.3.10 was decomposed into the Kleisli factorisation functor, the comparison functor, and the extremal universal-property corollary. This removes the original duplication between the generic extremal theorem and the separately listed comparison theorem.
- The power-set entry was decomposed into the monad construction and the substantive characterisation of its algebras and algebra morphisms.
- The idempotent-monad bullet was decomposed into the definition and `thm-equivalent-characterisations-of-an-idempotent-monad`; the source's three-way equivalence now has its own cancellation proof rather than being hidden in a definition.
- The ultrafilter construction was decomposed into pushforward well-definedness/functoriality, naturality of unit and multiplication, packaging of the data, and the monad laws. This is the largest proof decomposition and preserves the requirement that no structure map is used before it is shown well-defined.
- The original definition-plus-corollary comonad entry was expanded into the coalgebra definition, coalgebra-homomorphism closure theorem, co-Eilenberg–Moore category, co-Eilenberg–Moore adjunction, co-Kleisli well-definedness, co-Kleisli category, co-Kleisli adjunction, and the formal-dual extremal corollary. Neither category definition now hides its closure proof.
- Mac Lane's category-of-monads task was decomposed into `def-monad-morphism` followed by `thm-monad-morphisms-on-a-fixed-category-form-a-category`; the latter verifies identities and composition under the existing endofunctor-category size hypothesis.
- The distributive-law theorem remains unsplit. Its source theorem is compact, and splitting the diagram calculations into source-unnamed lemmas would create locally formulated theorem/lemma Statements contrary to generated-claim minimisation. Its contract instead gives separate internal proof steps for the unit and associativity calculations.
- The corollary pass added `cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties`, `cor-composition-with-an-identity-monad-adjunction-preserves-the-induced-monad`, `cor-every-category-monadic-over-set-is-complete`, `cor-kleisli-and-eilenberg-moore-categories-are-equivalent-for-an-idempotent-monad`, `cor-algebras-for-a-closure-operator-monad-are-its-fixed-points`, `cor-comonads-on-a-preorder-are-interior-operators`, and the dual co-Kleisli/co-Eilenberg–Moore extremal corollary. The adjunction-to-comonad corollary was retained from the design.
- The source harvest added the writer, state, and topological-interior examples and Mac Lane's theorem that a monad morphism restricts algebras and compares free algebras. The finite distributive-law and finite-ultrafilter boundary computations answer Step-3 findings with explicit witnesses. Nothing was added merely to approach the ceiling.
- The A page is at 59 items. Both richness passes were rerun after the fixes; neither found another source-backed A-page result that should be inserted before Step 4. Alpha's exact contingency split is recorded under Scope and controlling decisions, and no result was pruned.

## Findings for Step-3 Alpha, ordered by severity

1. **Approve moving `def-monadic-and-strictly-monadic-functor` and `def-conservative-functor` from MA-4 into MA-3.** The old MA-3 invokes both terms in `thm-a-monadic-functor-is-conservative` before either is defined. Declining leaves two undeclared concepts in a landmark theorem and forces forward dependencies to order 365.007.
2. **Approve the preorder/poset convention repair in items 35–36.** On a preorder, the monad laws give mutual comparability of `T(Tp)` and `Tp`, not literal equality; equality follows after antisymmetry for a poset. Declining makes the closure-operator title false under the library's published `def-preorder` convention.
3. **Approve the bibliographic correction from Cheng, _Iterated distributive laws_, to Cheng, _Distributive laws for Lawvere theories_.** The recorded Episciences URL resolves to the latter paper, and its Definition 2.1 / Theorem 2.2 are the exact cited results. Declining leaves a verifiably false source title even though the mathematics and URL are usable.
4. **Approve the strict-creation wording for the Eilenberg–Moore limit theorem.** The published dependency distinguishes ordinary creation from strict on-the-nose creation, and the lifted structure on the supplied base limit is unique with the same apex and legs. Declining either understates the planned theorem or risks importing a nonexistent preservation hypothesis on `T`.
5. **Approve the Eilenberg–Moore and Kleisli well-definedness order.** Algebra homomorphism closure precedes the Eilenberg–Moore definition, and Kleisli associativity/unitality precedes the Kleisli definition. Declining restores circular category definitions.
6. **Approve decomposing the extremal universal property into the two functors plus a corollary.** The old inventory separately asserted both a generic extremal theorem and the comparison theorem, duplicating the terminal half. Declining makes ownership of the comparison proof ambiguous and encourages repeated proof text.
7. **Approve splitting the power-set monad construction from the characterisation of its algebras.** The latter must recover a partial order, all set-indexed suprema including the empty one, and the exact morphisms. Declining creates one overfull theorem with two independent proof cores.
8. **Approve the ultrafilter four-item decomposition.** Pushforward must be proved an ultrafilter and functorial; unit and flattening must be natural; only then can the monad equations be checked. Declining recreates the design's proof-bearing definition and conceals the empty-set and nested-ultrafilter boundaries.
9. **Approve the explicit co-Kleisli/co-Eilenberg–Moore development.** The old last definition promised the dual of the extremal theorem as an embedded corollary without defining the co-Kleisli side. Declining leaves “the dual” without named objects or a proof-bearing item.
10. **Approve adding the writer and state monad examples.** Both are named examples in the harvested primary sources and have available prerequisites. Declining would require an omission disposition based only on brevity, which is not an allowed reason under the coverage rule.
11. **Approve separating the three equivalent idempotence criteria from `def-idempotent-monad`.** Riehl Exercise 5.1.iii states a genuine three-way theorem; the scaffold renders monicity componentwise to avoid forming an endofunctor category, and the cancellation/naturality argument is proof-bearing rather than definitional. Declining hides a harvested result and leaves the later algebra proof to use `eta T = T eta` without establishing it.
12. **Approve the idempotent Kleisli–Eilenberg–Moore equivalence corollary.** Riehl Exercise 5.3.i supplies the exact positive counterpart to the page's false statement: every algebra is explicitly isomorphic to a free one when the monad is idempotent. Declining omits the source's named positive boundary and weakens the false-statement refutation.
13. **Approve the completeness corollary for categories monadic over Set.** Riehl Corollary 5.6.7 follows immediately from the page's strict limit-creation theorem and the published completeness of Set. Declining omits a cheap, useful source-named consequence that MA-4 and standard algebraic examples can reuse.
14. **Approve the monad-morphism restriction theorem.** Mac Lane Exercise VI.2.3 constructs the restriction functor from `S`-algebras to `T`-algebras along a monad morphism `T -> S` and the natural comparison from free `T`-algebras to restricted free `S`-algebras. Declining leaves the page's monad-morphism definition inert and omits a named result from the independent textbook harvest.
15. **Approve the identity-monad composition corollary.** Mac Lane Exercise VI.5.5 shows directly that composing an adjunction with one inducing the identity monad leaves the first induced monad unchanged. Declining omits a source-named consequence that tests the composite-adjunction unit and multiplication formulas.

No published dependency examined for this scaffold contained an unambiguous false load-bearing claim, so no Step-5 published repair is proposed.

## Applyable edits to `research/plan-category-theory-track.md`

### MA-3 dependency line

- File/section: `research/plan-category-theory-track.md`, `## MA-3`, line beginning `**requires**`.
- Exact old text: `**\`requires\`** \`adjunctions-units-and-counits\`, \`limits-and-colimits\``
- Exact new text: `**\`requires\`** \`reflective-subcategories-and-the-adjoint-functor-theorems-examples\` (whose closure contains \`adjunctions-units-and-counits\` and \`limits-and-colimits\`)`

### MA-3 entries 7–8

- Exact old text: ``7. `thm-the-eilenberg-moore-category-is-a-category` — thm. §7 #14.``
- Exact new text: ``7. `thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition` — thm. Identity maps satisfy the algebra-homomorphism square, and composites do by functoriality of `T`; this discharges the category well-definedness obligation before the definition.``
- Keep item 8 `def-eilenberg-moore-category`, but change its final phrase from `justified by item 7` to `using item 7`.

### MA-3 entries 15–18

- Exact old text beginning at item 15: ``15. `thm-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties` — thm.`` through the end of item 17.
- Exact new sequence:
  - ``15. `thm-the-kleisli-factorisation-functor-exists-and-is-unique` — thm. For every supplied adjunction inducing `T`, construct the unique functor from the Kleisli category commuting with its left and right adjoints.``
  - ``16. `thm-the-comparison-functor-exists-and-is-unique` — thm. For every supplied adjunction inducing `T`, the counit gives the unique functor to the Eilenberg–Moore category commuting with its left and right adjoints. LANDMARK.``
  - ``17. `cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties` — cor. Combine items 15–16 to state schematic initiality and terminality without forming a forbidden category of all large adjunctions.``
  - ``18. `cor-composition-with-an-identity-monad-adjunction-preserves-the-induced-monad` — cor. If a second adjunction induces the identity monad strictly, composing it with an adjunction inducing `T` again induces `T` (Mac Lane Ex. VI.5.5).``
  - ``19. `thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras` — thm. Riehl Lemma 5.2.14.``

### Insert before the limit theorem

- Anchor old text: ``18. `thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits` ``
- Insert immediately before it:
  - ``20. `def-monadic-and-strictly-monadic-functor` — def. Monadic means the comparison is an equivalence; strictly monadic means it is an isomorphism.``
  - ``21. `def-conservative-functor` — def. A functor is conservative when it reflects isomorphisms.``
- Renumber subsequent design entries mechanically; do not change manifest ids.

### Insert after the limit theorem

- Anchor old text: ``19. `thm-colimits-in-an-eilenberg-moore-category-are-not-created-in-general` ``
- Insert immediately before it: ``23. `cor-every-category-monadic-over-set-is-complete` — cor. Every small Set-valued diagram has a limit; strict Eilenberg–Moore limit creation and transport across the comparison equivalence therefore make every category monadic over Set complete (Riehl Cor. 5.6.7).``
- Renumber the old colimit theorem and subsequent entries mechanically.

### Colimit-theorem id rename (B7-7)

- The design still names the withdrawn id. `splice-plan.mjs` reads only the
  manifest, so nothing mechanical will catch this drift; it has to be applied by
  hand at step 4.
- Exact old text (`research/plan-category-theory-track.md` line 1318):
  ``19. `thm-colimits-in-an-eilenberg-moore-category-are-not-created-in-general` — thm, with the positive statement Riehl Thm 5.6.5(ii): those colimits $\mathcal C$ has that $T$ and $T^2$ preserve are created.``
- Exact new text:
  ``24. `thm-eilenberg-moore-creates-base-colimits-preserved-by-the-monad-and-its-square` — thm, Riehl Thm 5.6.5(ii): the Eilenberg–Moore forgetful functor creates every colimit in the base that $T$ and $T^2$ preserve. The failure of creation in general is the B-page counterexample, so the A item asserts only the positive statement and carries no forward citation.``
- **Application order (Alpha-c recheck, R-4).** `### Insert after the limit
  theorem` above anchors on the *same* line 1318, by its old id, and tells you to
  insert `cor-every-category-monadic-over-set-is-complete` immediately before it.
  Apply that insertion FIRST and this rename SECOND. Applying the rename first
  destroys the other subsection's anchor text, and since `splice-plan.mjs` reads
  no prose file, a silently unmatched anchor loses the corollary entry with no
  gate output.

### Idempotent-monad sequence

- Exact old text: ``21. `def-idempotent-monad` — def. $\mu$ an isomorphism; three equivalent characterisations (Riehl Ex 5.1.iii).``
- Exact new sequence:
  - ``26. `def-idempotent-monad` — def. A monad whose multiplication is a natural isomorphism.``
  - ``27. `thm-equivalent-characterisations-of-an-idempotent-monad` — thm. For a monad, multiplication invertible, every multiplication component monic, and `eta T = T eta` are equivalent (Riehl Ex. 5.1.iii, rendered componentwise for the library's size convention).``
- Keep the old idempotent-algebra theorem as item 28, then insert: ``29. `cor-kleisli-and-eilenberg-moore-categories-are-equivalent-for-an-idempotent-monad` — cor. The comparison is fully faithful, and every algebra is explicitly isomorphic to the free algebra on its underlying object (Riehl Ex. 5.3.i).``
- Renumber the reflective-inclusion theorem as item 30 and subsequent entries mechanically.

### Monad-morphism action on algebras

- Exact old text: ``24. `def-monad-morphism` — def. For monads $T,S$ on the same category, a natural transformation $\alpha:T\Rightarrow S$ with $\alpha\eta^T=\eta^S$ and $\alpha\mu^T=\mu^S\circ S\alpha\circ\alpha_T$. This strict-same-base convention is typed explicitly; more general lax morphisms in a 2-category are not smuggled into the name.``
- After that definition, insert: ``32. `thm-a-monad-morphism-induces-restriction-of-algebras-and-a-comparison-of-free-algebras` — thm. A monad morphism `alpha:T -> S` restricts each `S`-algebra along `alpha`, functorially over the base, and its components form a natural map from the free `T`-algebra functor to the restricted free `S`-algebra functor (Mac Lane Ex. VI.2.3).``

### Preorder convention

- Exact old text: ``27. `thm-monads-on-a-preorder-are-exactly-closure-operators` — thm. Riehl Ex 5.1.7.``
- Exact new text: ``35. `thm-monads-on-a-preorder-are-exactly-closure-operators` — thm. A monad on a preorder is a monotone extensive operator with `T(Tp)` and `Tp` mutually comparable; for a poset antisymmetry makes `T^2=T`, the ordinary closure-operator condition (Riehl Ex. 5.1.7).``
- Insert after it: ``36. `cor-algebras-for-a-closure-operator-monad-are-its-fixed-points` — cor. Algebra objects are those for which `p` and `Tp` are equivalent in the preorder; on a poset these are exactly the fixed points.``

### Power-set and ultrafilter replacements

- Exact old text: ``31. `thm-the-covariant-power-set-monad` — thm. ... its Eilenberg–Moore algebras are posets with all small suprema ...``
- Exact new sequence:
  - ``40. `thm-the-covariant-power-set-monad` — thm. Singleton and union define the unit and multiplication and satisfy the monad laws.``
  - ``41. `thm-algebras-for-the-covariant-power-set-monad-are-posets-with-all-small-suprema` — thm. Recover the order and every set-indexed supremum, including the empty supremum; prove that algebra morphisms are exactly the maps preserving all such suprema.``
- Exact old text: items 32–33, `def-the-ultrafilter-monad-on-set` and `thm-the-ultrafilter-monad-is-a-monad`.
- Exact new sequence:
  - ``42. `lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial` — lem.``
  - ``43. `lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural` — lem.``
  - ``44. `def-the-ultrafilter-endofunctor-unit-and-multiplication` — def. Package only maps whose codomains and naturality were established in items 42–43.``
  - ``45. `thm-the-ultrafilter-monad-is-a-monad` — thm. Prove both units and associativity by membership extensionality, including `X=∅`. LANDMARK.``

### Comonad ending

- Exact old text: ``34. `def-coalgebra-for-a-comonad-and-the-coeilenberg-moore-category` — def. For a comonad `G` (not `T`, already used for monads), with the dual of item 15 as a corollary rather than a second proof.``
- Exact new sequence: items 46–53 from the manifest: the coalgebra-and-homomorphism definition; coalgebra-homomorphism closure theorem; co-Eilenberg–Moore definition; co-Eilenberg–Moore adjunction theorem; co-Kleisli well-definedness theorem; co-Kleisli definition; co-Kleisli adjunction theorem; and the dual extremal corollary.

### MA-4 opening

- Exact old text: ``1. `def-monadic-and-strictly-monadic-functor` — def. $U$ is **monadic** when the comparison functor is an **equivalence**, **strictly monadic** when it is an **isomorphism** (Riehl Def 5.3.1). §3.3. LANDMARK — the two notions are kept apart from the first line of the page.``
- Exact old text: ``2. `def-conservative-functor` — def. Reflects isomorphisms. *(Id free: the published `conservative` items are all about vector fields.)*``
- Exact new text: remove these two bullets and start MA-4 with `def-split-coequalizer`; add one prose sentence before the list: `The definitions of monadic, strictly monadic, and conservative functors are established on MA-3 and are prerequisites here.`

### B-page inventory

- Exact old text: the one-line B inventory beginning `` `ex-a-kleisli-composite-computed` · `ex-the-maybe-monad-and-partial-functions` ``.
- Exact new text: use these thirteen B ids in this order: `ex-a-kleisli-composite-computed`, `ex-the-maybe-monad-and-partial-functions`, `ex-the-list-monad-on-a-two-element-set`, `ex-the-writer-monad-from-a-monoid`, `ex-the-state-monad`, `ex-the-closure-operator-monad-on-a-topological-space`, `ex-the-interior-comonad-on-a-topological-space`, `ex-a-distributive-law-between-two-finite-closure-operator-monads`, `ex-the-free-abelian-group-monad`, `ex-the-ultrafilter-monad-on-a-finite-set`, `cex-an-algebra-that-is-not-free`, `cex-a-coequalizer-not-preserved-by-a-forgetful-functor`, and `ex-the-double-contravariant-power-set-monad`.
- Add `filters-and-ultrafilters-examples` to the B page's declared prerequisites; the finite-ultrafilter example uses published results on that page.

### Step-3 additions to the A page

- Insert immediately after `def-monad-morphism`: ``32. `thm-monad-morphisms-on-a-fixed-category-form-a-category` — thm. Whenever the endofunctor category exists, monads on a fixed category and their morphisms form a category.`` This discharges Mac Lane's explicit reader task without expanding `def-monad-morphism` into a definition-plus-proof bundle.
- Insert immediately after `cor-algebras-for-a-closure-operator-monad-are-its-fixed-points`: ``38. `cor-comonads-on-a-preorder-are-interior-operators` — cor. On a preorder the comonads are exactly the monotone contractive maps with `Gp <= G(Gp)`; on a poset they are exactly the interior operators.``

### Step-3 additions to the B page

- Insert `ex-the-interior-comonad-on-a-topological-space` immediately after the closure-operator example.
- Insert `ex-a-distributive-law-between-two-finite-closure-operator-monads` immediately after the interior-comonad example. Its finite construction is the explicit fallback for Cheng Examples 2.3–2.4, whose free-ring and 2-globular prerequisites belong to separate developments.
- Insert `ex-the-ultrafilter-monad-on-a-finite-set` immediately after the free-abelian-group example. It proves the finite identity comparison, treats the empty set separately, and contrasts the conditional non-surjectivity of the unit on the natural numbers.

### Cheng source correction

- Exact old text: ``**Cheng, *Iterated distributive laws*, §2**, `https://compositionality.episciences.org/13507/pdf` — Def. 2.1 and Thm 2.2 are the direct independent source for items 26–27``
- Exact new text: ``**Cheng, *Distributive laws for Lawvere theories*, §2**, `https://compositionality.episciences.org/13507/pdf` — Def. 2.1 and Thm 2.2 are the direct source for `def-distributive-law-between-two-monads` and `thm-a-distributive-law-makes-the-composite-a-monad`.``
- Source-availability table exact old text: ``| Cheng, *Iterated distributive laws* | full CC-BY journal PDF: `https://compositionality.episciences.org/13507/pdf` |``
- Source-availability table exact new text: ``| Cheng, *Distributive laws for Lawvere theories* | full CC-BY journal PDF: `https://compositionality.episciences.org/13507/pdf` |``
- Canonical-coverage heading exact old text: ``### Cheng, *Iterated distributive laws* — §2``
- Canonical-coverage heading exact new text: ``### Cheng, *Distributive laws for Lawvere theories* — §2``
- Canonical-coverage table exact old text: ``| §2, Exs 2.3–2.4 | `inline`/B examples |``
- Canonical-coverage table exact new text: replace it with separate rows for Example 2.3 (rings: the free-monoid and free-abelian-group monads combine to the free-ring monad) and Example 2.4 (2-categories: vertical and horizontal composition monads combine through interchange). Mark Example 2.3 `deferred` because a faithful local version needs a separate free-ring-monad development, and Example 2.4 `out-of-scope` because it needs 2-globular sets and strict 2-category composition. Record `ex-a-distributive-law-between-two-finite-closure-operator-monads` as the included finite fallback rather than misidentifying it as either Cheng example.
- Extend the exact read range through Examples 2.3–2.4, stopping before Theorem 2.5.

## Component provenance plan and final ledger

Source codes below: **R** = Riehl, <https://emilyriehl.github.io/files/context.pdf>; **Ri** = Richter, <https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf>; **M** = Mac Lane, <https://math.mit.edu/~hrm/palestine/maclane-categories.pdf>; **C** = Cheng, <https://compositionality.episciences.org/13507/pdf>. `not-applicable` is used only for definitions and remarks without a local proof. Each source-backed item must carry the corresponding URL in `sources.references` at Step 5.

| item | final statement | final proof | source/edit history and rationale |
|---|---|---|---|
| `def-monad` | literature-derived | not-applicable | R Def. 5.1.1; Ri Def. 6.1.1; M VI.1. |
| `rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists` | ai-altered | not-applicable | R Rem. 5.1.2 materially repaired by the published size proposition. |
| `def-comonad` | literature-derived | not-applicable | R Def. 5.1.6 and formal duality. |
| `thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint` | literature-derived | literature-derived | R Lem. 5.1.3; Ri Thm. 6.1.3. |
| `cor-every-adjunction-induces-a-comonad-on-the-other-side` | literature-derived | ai-altered | R explicitly states the dual; local proof applies the published opposite-category dictionary. |
| `def-t-algebra-and-algebra-homomorphism` | literature-derived | not-applicable | R Def. 5.2.4; Ri Def. 6.2.1; M VI.2. |
| `thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition` | ai-altered | ai-generated | The closure clause is in R Def. 5.2.4 but is separated locally to discharge well-definedness. |
| `def-eilenberg-moore-category` | literature-derived | not-applicable | R Def. 5.2.4; Ri §6.2. |
| `def-free-t-algebra` | literature-derived | not-applicable | R Def. 5.2.8; Ri Ex. 6.2.3. |
| `thm-the-eilenberg-moore-adjunction-induces-the-given-monad` | literature-derived | literature-derived | R Lem. 5.2.9; Ri Thm. 6.2.5. |
| `thm-kleisli-composition-is-associative-and-unital` | ai-altered | literature-derived | Statement is extracted from R Ex. 5.2.iv and Ri Ex. 6.3.2; calculation follows those definitions. |
| `def-kleisli-category` | literature-derived | not-applicable | R Def. 5.2.10; Ri Def. 6.3.1. |
| `thm-the-kleisli-adjunction-induces-the-given-monad` | literature-derived | literature-derived | R Lem. 5.2.12; Ri Cor. 6.3.6 and Rem. 6.3.7. |
| `rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic` | ai-altered | not-applicable | R Prop. 5.2.13 / Ri Def. 6.3.8 adapted to the library's CAT-size convention. |
| `thm-the-kleisli-factorisation-functor-exists-and-is-unique` | ai-altered | literature-derived | Initial half of R Prop. 5.2.13 and Ri Thm. 6.3.10, separated without changing quantifiers. |
| `thm-the-comparison-functor-exists-and-is-unique` | ai-altered | literature-derived | Terminal half of R Prop. 5.2.13 and M VI.3. |
| `cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties` | ai-altered | literature-derived | Recombines the two source-backed halves of R Prop. 5.2.13. |
| `cor-composition-with-an-identity-monad-adjunction-preserves-the-induced-monad` | literature-derived | ai-altered | M Ex. VI.5.5 supplies the statement; the local proof expands the published composite-adjunction unit and counit formulas. |
| `thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras` | literature-derived | literature-derived | R Lem. 5.2.14; Ri Prop. 6.3.5. |
| `def-monadic-and-strictly-monadic-functor` | literature-derived | not-applicable | R Def. 5.3.1 plus Mac Lane's strict comparison convention; distinction stated explicitly. |
| `def-conservative-functor` | literature-derived | not-applicable | R immediately after Lem. 5.6.1. |
| `thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits` | ai-altered | literature-derived | R Thm. 5.6.5(i) / Ri Thm. 6.5.1, sharpened only to the on-the-nose lift their proof constructs. |
| `cor-every-category-monadic-over-set-is-complete` | literature-derived | ai-altered | R Cor. 5.6.7; local proof combines the published completeness of Set, strict Eilenberg–Moore limit creation, and transport across the comparison equivalence. |
| `thm-eilenberg-moore-creates-base-colimits-preserved-by-the-monad-and-its-square` | ai-altered | ai-altered | R Thm. 5.6.5(ii); Ri Lem. 6.5.2 and its preceding counterexample; reader-7 repaired the typed algebra-homomorphism calculation. |
| `thm-a-monadic-functor-is-conservative` | literature-derived | literature-derived | R Lem. 5.6.1. |
| `def-idempotent-monad` | literature-derived | not-applicable | R Ex. 5.1.iii. |
| `thm-equivalent-characterisations-of-an-idempotent-monad` | ai-altered | literature-derived | R Ex. 5.1.iii; “multiplication is monic” is rendered componentwise to respect the library's large-category convention, and cancellation with the two monad unit laws proves the equivalent size-safe statement. |
| `thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory` | literature-derived | literature-derived | R Prop. 5.3.3(i). |
| `cor-kleisli-and-eilenberg-moore-categories-are-equivalent-for-an-idempotent-monad` | literature-derived | literature-derived | R Ex. 5.3.i; the comparison image theorem and the invertible-unit characterisation give explicit split essential-surjectivity witnesses. |
| `thm-the-inclusion-of-a-reflective-subcategory-is-monadic` | literature-derived | literature-derived | R Prop. 5.3.3(ii). |
| `def-monad-morphism` | literature-derived | not-applicable | Ri Def. 6.1.2, same-base strict convention. |
| `thm-monad-morphisms-on-a-fixed-category-form-a-category` | literature-derived | ai-generated | M §VI.1 explicitly asks for the category of all monads on a fixed category; the local proof checks identity and composite compatibility under the existing size caveat. |
| `thm-a-monad-morphism-induces-restriction-of-algebras-and-a-comparison-of-free-algebras` | literature-derived | ai-altered | M Ex. VI.2.3 supplies both constructions; the local proof writes the algebra-law and naturality calculations in the library's notation. |
| `def-distributive-law-between-two-monads` | literature-derived | not-applicable | C Def. 2.1. |
| `thm-a-distributive-law-makes-the-composite-a-monad` | literature-derived | ai-altered | C Thm. 2.2; reader-7 replaced the local associativity handwave by the lifted-monad and composite-adjunction proof. |
| `thm-monads-on-a-preorder-are-exactly-closure-operators` | ai-altered | literature-derived | R Ex. 5.1.7 / Ri Ex. 6.1.5, with the preorder-equivalence versus poset-equality distinction made explicit. |
| `cor-algebras-for-a-closure-operator-monad-are-its-fixed-points` | ai-altered | ai-generated | R Ex. 5.2.6(iv) gives the closure fixed-point case and R Prop. 5.3.3(i) gives the general unit-isomorphism criterion; the preorder/poset formulation materially combines them. |
| `cor-comonads-on-a-preorder-are-interior-operators` | literature-derived | ai-altered | R Ex. 5.1.7 states the kernel/interior-operator dual; the local proof transports the preorder-monad theorem through the published opposite-category construction. |
| `thm-the-free-monoid-monad-and-its-algebras-are-monoids` | literature-derived | literature-derived | R Ex. 5.2.6(iii) and Ex. 5.2.i; M VI.4. |
| `thm-the-free-group-monad-and-its-algebras-are-groups` | ai-altered | literature-derived | R general free–forgetful exercise and Ri Ex. 6.2.3; adapted to the already-published free-group adjunction. |
| `thm-the-free-module-monad-and-its-algebras-are-modules` | ai-altered | literature-derived | R Ex. 5.2.i and the published Set-to-module free adjunction; kept distinct from R's tensor monad on Ab. |
| `thm-the-covariant-power-set-monad` | literature-derived | ai-altered | R Ex. 5.1.5 / Ri Ex. 6.1.6; local elementwise verification. |
| `thm-algebras-for-the-covariant-power-set-monad-are-posets-with-all-small-suprema` | literature-derived | ai-altered | R Ex. 5.2.i and standard complete-join-semilattice characterisation; reader-7 repaired the algebra-law citation and direct dependency. |
| `lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial` | ai-altered | ai-generated | Proof-decomposition clause extracted from R Ex. 5.1.ii; direct preimage/filter proof. |
| `lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural` | ai-altered | ai-generated | Proof-decomposition clause extracted from R Ex. 5.1.ii; filter laws, ultrafilter primeness, and direct naturality calculations establish well-defined maps. |
| `def-the-ultrafilter-endofunctor-unit-and-multiplication` | ai-altered | not-applicable | Packages the exact construction in R Ex. 5.1.ii after well-definedness. |
| `thm-the-ultrafilter-monad-is-a-monad` | literature-derived | ai-generated | R Ex. 5.1.ii supplies the statement; local proof is by extensional membership calculations. |
| `def-coalgebra-for-a-comonad-and-coalgebra-homomorphism` | literature-derived | not-applicable | R Ex. 5.2.iii and formal dual of Def. 5.2.4. |
| `thm-coalgebra-homomorphisms-are-closed-under-identities-and-composition` | ai-altered | ai-altered | Formal dual of the source-backed algebra-homomorphism closure theorem; separated to discharge category well-definedness. |
| `def-coeilenberg-moore-category` | literature-derived | not-applicable | R Ex. 5.2.iii, introduced only after coalgebra-homomorphism closure. |
| `thm-the-coeilenberg-moore-adjunction-induces-the-given-comonad` | literature-derived | ai-altered | R Ex. 5.2.iii; proof is the fully written formal dual of Lem. 5.2.9. |
| `thm-cokleisli-composition-is-associative-and-unital` | ai-altered | ai-altered | Standard formal dual of the source-backed Kleisli well-definedness theorem. |
| `def-cokleisli-category` | ai-altered | not-applicable | Standard formal dual of R Def. 5.2.10, materially rewritten for variance. |
| `thm-the-cokleisli-adjunction-induces-the-given-comonad` | ai-altered | ai-altered | Standard formal dual of R Lem. 5.2.12. |
| `cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties` | ai-altered | ai-altered | Formal dual of R Prop. 5.2.13, using the named dual constructions. |
| `fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent-for-every-monad` | ai-altered | ai-generated | R Lem. 5.2.14 supplies the canonical comparison boundary; the local refutation separates the categories by the possible cardinalities of object endomorphism sets. |
| `fs-every-functor-with-a-left-adjoint-is-monadic` | ai-altered | ai-generated | R Lem. 5.6.1 and its Top discussion; local two-point discrete-to-indiscrete witness. |
| `fs-a-monad-is-a-monoid-object-in-the-endofunctor-category-for-every-category` | ai-altered | ai-generated | Negation of the overbroad reading of R Rem. 5.1.2; the published functor-category convention and size proposition supply the obstruction. |
| `fs-every-algebra-for-a-monad-is-free` | ai-altered | ai-generated | R Lem. 5.2.14 identifies the exact failure; local finite monoid witness. |
| `ex-a-kleisli-composite-computed` | ai-generated | ai-generated | Checkable list-valued witness generated from R Ex. 5.2.11(ii); author with `generation.role: example`; never a dependency. |
| `ex-the-maybe-monad-and-partial-functions` | literature-derived | literature-derived | R Ex. 5.2.11(i); Ri Ex. 6.3.3. |
| `ex-the-list-monad-on-a-two-element-set` | ai-generated | ai-generated | Checkable finite-prefix computation generated from the source's list-monad example; author with `generation.role: example`; never a dependency. |
| `ex-the-writer-monad-from-a-monoid` | literature-derived | literature-derived | R Ex. 5.1.5(iii). |
| `ex-the-state-monad` | literature-derived | literature-derived | R Ex. 5.2.11(iii). |
| `ex-the-closure-operator-monad-on-a-topological-space` | literature-derived | literature-derived | R Ex. 5.1.7 and Ex. 5.2.6(iv). |
| `ex-the-interior-comonad-on-a-topological-space` | literature-derived | ai-altered | R Ex. 5.1.7 and Ex. 5.2.6(iv); reader-7 derived monotonicity and idempotence from the exact cited largest-open-subset clause. |
| `ex-a-distributive-law-between-two-finite-closure-operator-monads` | ai-generated | ai-generated | Explicit three-element power-set witness suggested by the source-backed preorder characterisation; author with `generation.role: example`; never a dependency. |
| `ex-the-free-abelian-group-monad` | literature-derived | literature-derived | R §5.3 immediately before Def. 5.3.1. |
| `ex-the-ultrafilter-monad-on-a-finite-set` | ai-generated | ai-generated | Locally composed boundary example: the finite identification is proved from singleton primeness and filter axioms, while the infinite contrast cites the published A-page refutation under the ultrafilter lemma; authored with `generation.role: example` and never used as a dependency. |
| `cex-an-algebra-that-is-not-free` | ai-generated | ai-generated | Explicit two-element idempotent-monoid witness; author with `generation.role: counterexample`; never a dependency. |
| `cex-a-coequalizer-not-preserved-by-a-forgetful-functor` | ai-generated | ai-generated | Explicit doubling/zero witness in groups; author with `generation.role: counterexample`; never a dependency. |
| `ex-the-double-contravariant-power-set-monad` | literature-derived | literature-derived | R Ex. 5.1.4 / Ex. 5.1.ii hint; relation-transposition self-adjunction. |

### AI-generated Statement/Construction truth-risk obligations

- `ex-a-kleisli-composite-computed`: compute both bracketings of the selected list substitution and compare the same concatenated word; include empty-list and singleton-list inputs.
- `ex-the-list-monad-on-a-two-element-set`: enumerate words by length only for the displayed bounded sample and state explicitly that the full carrier contains every finite word; do not imply the set is finite.
- `ex-a-distributive-law-between-two-finite-closure-operator-monads`: enumerate all subsets of the chosen three-element set, verify both adjoining-point maps are closure operators, compute `ST=TS` pointwise, and check that thinness really makes each of the four distributive-law diagrams commute.
- `ex-the-ultrafilter-monad-on-a-finite-set`: check the empty finite set separately, derive principality from the singleton partition for every nonempty finite set, prove the unit bijections are natural rather than claiming literal equality, and state the ultrafilter-lemma assumption only for the free-ultrafilter contrast on the natural numbers.
- `cex-an-algebra-that-is-not-free`: verify the two-element operation table is associative and unital, then prove a free word monoid is either the singleton on no generators or infinite once it has a generator.
- `cex-a-coequalizer-not-preserved-by-a-forgetful-functor`: verify the group coequalizer is `Z/2`, while the Set coequalizer has one class of even integers and one singleton class for each odd integer. This supplies a concrete cardinality and universal-property mismatch.

## Proof-obligation and boundary map

- **Adjunction to monad/comonad:** expand associativity using naturality of the counit and use each triangle identity separately for the two unit laws. Check the empty category, where all relevant transformations are uniquely supplied if the adjunction exists.
- **Algebra category:** identity closure is immediate; composition must use functoriality `T(gf)=Tg Tf`. Do not call the collection a category until this theorem has closed.
- **Eilenberg–Moore adjunction:** prove `Tf` is an algebra morphism by naturality of `mu`; prove the counit component is the structure map; verify both triangle identities and identify `U^T F^T`, the unit, and multiplication on the nose.
- **Kleisli well-definedness:** for three arrows write both composites fully, use naturality of `mu` once and monad associativity once; use the two distinct unit laws for left and right identities. Empty base category and empty hom-sets need no extra witness.
- **Extremal functors:** define the Kleisli factorisation on an arrow by adjoint transpose and the comparison algebra on `Ud` by `U epsilon_d`; check functoriality, algebra laws, the four commuting equalities, and uniqueness objectwise and arrowwise. The schematic remark must prevent quantification over an object of a nonexistent large `CAT`.
- **Composition with an identity-monad adjunction:** use the published composite-adjunction formulas. Under `G'F'=1`, identity unit, and `G' epsilon' F'=1`, reduce the composite endofunctor and unit to `GF` and `eta`, then expand `GG' bar-epsilon F'F` and reduce it to `G epsilon F`; all three components must agree on the nose.
- **Kleisli-to-Eilenberg–Moore comparison:** identify each hom-map with `C(c,Td)` in both directions; full and faithful are separate claims; “image” means precisely the full subcategory of free algebras, not all algebras.
- **Limit creation and completeness over Set:** start with a supplied limit cone of the underlying diagram. Its legs jointly determine a unique algebra structure on the same apex. Verify the unit and multiplication equations after every leg, then prove the universal mediating arrow is an algebra morphism. No hypothesis that `T` preserves the limit is permitted. Empty diagrams give terminal objects and must be included. For the completeness corollary, form every underlying Set-limit, lift it, and then transport the result across the comparison equivalence; do not confuse this ordinary transport with strict creation by an arbitrary monadic functor.
- **Colimit clause:** construct the algebra map on the supplied base colimit using the preserved colimits for `T` and `T^2`; verify the algebra laws via colimit-leg joint epicness. The A-page theorem states only this conditional creation result. The B-page group counterexample independently establishes that unconditional preservation fails, without a forward citation from A to B.
- **Conservativity:** if an underlying algebra map has inverse `g`, derive the algebra-homomorphism square for `g` by composing the square for `f` with the inverse equations. Then transfer through the comparison equivalence. Do not assume an arbitrary faithful functor reflects isomorphisms.
- **Idempotent monads:** first prove the cycle “multiplication invertible implies monic; monic permits cancellation between the two unit laws; equality `eta T = T eta` makes that map a two-sided inverse to multiplication,” using naturality for the left-inverse calculation. Then prove every algebra structure is inverse to the unit and is unique; conversely prove the inverse unit is an algebra structure. Establish both directions of the object characterisation and then full reflectivity. To compare Kleisli and Eilenberg–Moore, show each algebra is explicitly isomorphic to the free algebra on its underlying object, so the already fully faithful comparison is split essentially surjective without Choice. For a reflective inclusion, use the published theorem that its counit is invertible to show the induced multiplication `I epsilon R` is invertible before invoking the idempotent-algebra theorem. Handle a preorder by isomorphism/mutual comparability, not equality.
- **Monad morphisms and algebras:** for `alpha:T -> S`, restrict an `S`-algebra `(A,a)` to the `T`-structure `a alpha_A`; verify its unit and multiplication laws using the two monad-morphism equations. Naturality of `alpha` makes every `S`-algebra map a restricted `T`-algebra map. Finally show `alpha_A` maps the free `T`-algebra to the restricted free `S`-algebra and is natural in `A`. The identity monad morphism must reduce both constructions to identities.
- **Category of monads on a fixed category:** verify the identity transformation preserves unit and multiplication; for `T -> S -> R`, expand the composite multiplication equation and use naturality at the middle transformation before substituting both compatibility equations. Inherit associativity and units only when the endofunctor category exists; otherwise retain metatheoretic shorthand rather than asserting a category.
- **Distributive law:** type-check all four equations and the order `ST -> TS`; verify both unit laws of the composite separately and reduce associativity to the two multiplication compatibility diagrams. Identity monads provide the one/degenerate test.
- **Finite distributive-law example:** on the inclusion poset of subsets of `{a,b,c}`, set `S(A)=A union {a}` and `T(A)=A union {b}`. Verify closure-operator laws, compute both composites as `A union {a,b}`, use thinness for the four diagrams, and enumerate all subsets including the empty set and all singletons.
- **Preorders:** translate natural transformations into pointwise inequalities. Derive `p <= Tp`, `T^2p <= Tp`, and by monotonicity `Tp <= T^2p`; invoke antisymmetry only in the poset clause. Algebra existence is `Tp <= p`, hence mutual comparability with the unit inequality.
- **Comonads on preorders and topological interior:** pass to the opposite preorder to obtain `Gp <= p` and `Gp <= G^2p`, derive the reverse comparison by monotonicity, and use antisymmetry only for the poset clause. For topological interior, prove monotonicity, contractivity, and idempotence directly; a coalgebra arrow `A -> int(A)` exists exactly when `A` is open, including the empty space and empty subset.
- **Free algebraic monads:** in each case construct the evaluation algebra, recover nullary/unary/binary or inverse/scalar operations, prove every algebra law in both directions, and identify algebra morphisms exactly. Include the empty generating set and zero ring/module degeneracies allowed by the published adjunctions. For the free-abelian-group example, explicitly prove that every abelian group has the unique integer-scalar action by repeated addition and negatives, that its homomorphisms are precisely the integer-linear maps, and that `Z^(X)` satisfies the published `def-free-abelian-group` universal property; do not leave `Z-Mod = Ab` or the agreement of the two free-object notions implicit.
- **Power set:** functoriality uses direct images; naturality of singleton and union is elementwise. For algebras define `x <= y` through the binary join, prove reflexivity, antisymmetry, and transitivity, recover every set-indexed join as `a(A)`, and prove the empty join exists. Conversely, use arbitrary suprema. Prove both directions for morphisms.
- **Ultrafilter pushforward:** show properness, finite intersections, upward closure, and the complement-deciding property by inverse images. For `X=empty`, prove `beta X=empty`; all structure maps then have the required empty domains. Naturality of flattening is a two-level membership equivalence. Each monad law is equality of ultrafilters proved by membership in an arbitrary subset; associativity requires expanding membership through three ultrafilter levels. No compactness or ultrafilter-extension principle is used.
- **Finite ultrafilter boundary:** for nonempty finite `X`, iterate the published finite-union primeness lemma over the singleton partition, use upward closure to identify the selected principal ultrafilter, and prove the principal-unit bijections are natural. Treat `X=empty` separately. The non-principal ultrafilter on the natural numbers is imported only from the published A-page false statement and remains conditional on the ultrafilter lemma; no B-page item is cited.
- **Comonad duals:** reverse every arrow and swap unit/multiplication with counit/comultiplication. Check that co-Kleisli arrows have the selected variance before composing; do not cite “duality” without displaying the translated types at least once.
- **Kleisli versus Eilenberg–Moore false statement:** for the free-monoid monad, prove every Kleisli object has either one endomorphism (`X=empty`) or infinitely many (powers of one chosen letter when `X` is nonempty). Compute exactly two endomorphisms of the two-element idempotent monoid. Any categorical equivalence is fully faithful and would preserve these endomorphism-set cardinalities, giving the contradiction; nonfreeness of the witness alone is insufficient.
- **Top nonmonadic witness:** on a two-element set use the identity from the discrete topology to the indiscrete topology. It is continuous and bijective but its inverse is not continuous, so the underlying-set functor does not reflect this isomorphism. The empty and singleton cases do not witness failure and must not be substituted.
- **Group coequalizer witness:** for homomorphisms `f(n)=2n` and `g(n)=0`, prove the group coequalizer is reduction mod 2. In Set, the generated equivalence identifies every even integer with zero and leaves every odd integer in its own class. Verify the Set universal property, not merely the unequal cardinalities.
- **Double contravariant power set:** type the contravariant functor as `Set^op -> Set`; relation transposition gives its self-adjunction. The induced covariant endofunctor is the double power set. State the unit by membership and do not assert a natural counit `P(P(X)) -> X` in Set.

Selected finite-smoke coverage is empty because the registered smoke types do not model monads or ultrafilters. The contracts instead require explicit bounded hand checks for the two-element monoid, finite word samples, the two-point topology, and the integer coequalizer; these are durable derivations, not claims that the `finite-smoke` tool checked them.

## Web research and source ledger

- Riehl, <https://emilyriehl.github.io/files/context.pdf>, Chapter 5 in full, §§5.1–5.6, printed pages 183–219. Supports the monad/comonad definitions, both resolutions, comparison functors, monadicity, idempotent monads, limits/colimits, standard examples, the ultrafilter exercise, and both sides of the preorder closure/interior duality; every numbered definition, result, example, and exercise heading in that range has a disposition in the coverage file. Convention disagreement: Riehl writes the endofunctor-monoid slogan without the library's global size guard; the scaffold retains the slogan only with the published size caveat. Riehl also distinguishes preorder equivalence from equality on a poset, which forced the preorder theorem's biconditional title and the separate comonad/interior corollary.
- Richter, <https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf>, Chapter 6 ranges recorded in the coverage file. Independently supports monads, monad morphisms, algebras, Kleisli construction, extremal adjunctions, and algebra limits/conditional colimits. Convention disagreement: Richter uses `T-alg_C` and a literal category of adjunctions; this library uses `C^T` and states the universal property schematically to avoid a forbidden large `CAT` object.
- Mac Lane, <https://math.mit.edu/~hrm/palestine/maclane-categories.pdf>, Chapter VI §§1–5, printed pages 137–149. This university-hosted scan independently supports monads, algebras, the power-set and limit-creation exercises, restriction along monad morphisms, comparison, word constructions, the Kleisli construction, the extremal comparison, composition with an identity-monad adjunction, and the explicit reader task to form the category of monads on a fixed category. Every named theorem and exercise in the read range has a disposition in the coverage file. Mac Lane's “monadic” means the stricter isomorphism convention, while this scaffold records both the modern equivalence convention and “strictly monadic.” The fixed-group action example is assigned to the published group-actions development; the `R tensor -` monad on Ab and the tensor-algebra monad are assigned to the tensor track; and the arbitrary-variable commutative-ring monad is assigned to the polynomial/commutative-ring track. The range stops before §VI.6; the split-coequalizer and Beck material therefore remains MA-4's harvest.
- Cheng, <https://compositionality.episciences.org/13507/pdf>, §2 from Definition 2.1 through Examples 2.3–2.4, stopping before Theorem 2.5. Definition 2.1 and Theorem 2.2 support the distributive-law definition and composite-monad theorem. Example 2.3 constructs the free-ring monad from the free-monoid and free-abelian-group monads and is deferred to the free-ring track; Example 2.4 constructs the strict 2-category monad from vertical and horizontal composition and is out of scope because the required 2-globular machinery is absent. The included finite closure-operator example supplies a dependency-closed distributive-law calculation but is not represented as Cheng-authored content. The design's title was wrong: this URL is _Distributive laws for Lawvere theories_, not _Iterated distributive laws_.

The structural harvest is in `research/frontier-15-batch-7.coverage.json`; after expansion to the whole Riehl chapter, `node tools/coverage-checklist.mjs research/frontier-15-batch-7.coverage.json` passed without errors or warnings.

## Published dependency audit and closure

All manifest dependencies outside the pair were opened from disk. Their exact Statements/Definitions were checked for domain, quantifiers, direction, and conclusion. The following potentially delicate targets received extra attention:

- `def-functor-category` states that an arbitrary large source yields only metatheoretic shorthand, not a category under the library convention. `prop-size-of-functor-categories` is `ai-altered`, and its exact small/local-small statement was source-checked against Riehl Chapter 1. Together they support the size caveat; the proposition's sufficient hypotheses are never misread as a converse.
- `def-preservation-reflection-creation-continuity-and-cocontinuity` explicitly has ordinary and strict creation. The limit theorem uses the strict clause with the same apex and legs.
- `thm-the-counit-of-a-reflection-is-an-isomorphism` is literature-derived and published on the declared prerequisite A page. Its exact statement supplies the missing step from the reflection adjunction to an idempotent induced monad.
- `thm-adjunctions-compose` is literature-derived and its displayed formulas give the exact composite unit and counit used by `cor-composition-with-an-identity-monad-adjunction-preserves-the-induced-monad`; the corollary adds only the identity-monad simplification.
- `thm-set-has-all-small-limits` is literature-derived and includes the empty diagram explicitly. `prop-equivalences-preserve-reflect-and-create-limits-and-colimits` is literature-derived and states ordinary isomorphism-invariant transport, not strict creation. Together with the local strict-creation theorem they close `cor-every-category-monadic-over-set-is-complete` without changing either convention.
- `def-monomorphism-and-epimorphism` gives componentwise left cancellation, exactly what the idempotence-characterisation proof uses to cancel multiplication. `thm-fully-faithful-split-essentially-surjective-characterises-equivalence` is literature-derived and requires specified essential-surjectivity witnesses; those witnesses are the unit components constructed locally, so no Choice principle is imported.
- `prop-completeness-and-cocompleteness-in-poset-categories` is literature-derived and includes empty families. The power-set algebra theorem therefore must include a bottom element/empty supremum.
- `def-opposite-category`, `def-preorder`, `def-partial-order`, and `def-power-set` are literature-derived and were checked directly. Their variance and inclusion-order conventions close the preorder-comonad corollary and the finite distributive-law example without an implicit order reversal.
- `def-interior-closure-boundary-top` is `ai-altered`; confidence route: `established-from-knowledge` after checking its exact interior definition against the published topology convention. It supplies the concrete interior operator and open-set fixed-point criterion.
- `lem-ultrafilter-prime` is `ai-altered`; confidence route: `established-from-knowledge` after checking its exact binary and finite-list Statements and proof, including the empty-list case. Its binary clause is used to prove that the flattening formula is an ultrafilter before that map is packaged into the monad data.
- `ex-ultrafilter-selects-a-cell-of-a-finite-partition` and `ex-free-ultrafilter-on-naturals` are `ai-altered`; confidence route: `established-from-knowledge` after exact-text inspection. The first proves the singleton-cell step for finite ultrafilters, and the second explicitly makes the nonprincipal-ultrafilter conclusion conditional on the ultrafilter lemma. `ex-principal-ultrafilter` is literature-derived and supplies the exact principal construction. `rem-feferman-no-free-ultrafilter-in-zf` is published and may be named through `external_refs` for the set-theoretic boundary, but it is not a logical dependency.
- `def-standard-topologies`, `def-continuous-map-top`, `def-homeomorphism-and-open-maps`, `thm-kuratowski-closure-axioms`, `def-semigroup-and-monoid`, and `def-group-homomorphism` are `ai-altered`; confidence route: `established-from-knowledge` after exact-text inspection. Their conventions match the proposed witnesses.
- `prop-integers-modulo-n-as-a-quotient-group` is `ai-altered`; confidence route: `source-checked` at the item URL <https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/06%3A_Products_and_Quotients_of_Groups/6.02%3A_Quotients_of_Groups> and by its direct elementary proof. Only the `n=2` clause is used.

There are no legacy-unclassified dependencies in the manifest. Every proposed load-bearing dependency is either earlier in this pair or published on disk. The only cross-batch interface is that MA-4 must reuse the moved `def-monadic-and-strictly-monadic-functor` and `def-conservative-functor` from this page and remove its duplicate planned bullets. I found no dependency this batch needs from another frontier-15 batch.

## Id-reuse and new-id report

I ran:

```sh
rg -n -F -f <(node -e 'const p=require("./research/frontier-15-batch-7.pages.json"); console.log(p.flatMap(x=>x.items.map(y=>y.id)).join("\\n"))') items research/plan-spec.json
```

It returned no matches: none of the scoped ids already exists in `items/` or as an item in `research/plan-spec.json`. I also searched the whole published pool and the category-track design by statement phrases before selecting ids. Existing design ids were retained where their mathematical statement remained intact, including the two ids moved from MA-4.

Ids introduced beyond the prose design are:

- `thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition` — replaces the circular `thm-the-eilenberg-moore-category-is-a-category` title.
- `cor-every-category-monadic-over-set-is-complete` — the immediate source-named completeness consequence of strict limit creation over Set.
- `thm-equivalent-characterisations-of-an-idempotent-monad` — extracts Riehl's proof-bearing three-way equivalence from the definition.
- `cor-kleisli-and-eilenberg-moore-categories-are-equivalent-for-an-idempotent-monad` — records Riehl's positive idempotent boundary with explicit split essential-surjectivity.
- `thm-the-kleisli-factorisation-functor-exists-and-is-unique` and `cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties` — decompose Riehl Proposition 5.2.13.
- `cor-composition-with-an-identity-monad-adjunction-preserves-the-induced-monad` — records Mac Lane Exercise VI.5.5 and checks the induced-monad formulas under composition.
- `thm-a-monad-morphism-induces-restriction-of-algebras-and-a-comparison-of-free-algebras` — records Mac Lane Exercise VI.2.3 and gives `def-monad-morphism` a substantive action on algebra categories.
- `cor-algebras-for-a-closure-operator-monad-are-its-fixed-points` — immediate fixed-object consequence.
- `thm-algebras-for-the-covariant-power-set-monad-are-posets-with-all-small-suprema` — separates the algebra characterisation.
- `lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial`, `lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural`, and `def-the-ultrafilter-endofunctor-unit-and-multiplication` — decompose the ultrafilter construction.
- `thm-the-coeilenberg-moore-adjunction-induces-the-given-comonad`, `thm-cokleisli-composition-is-associative-and-unital`, `def-cokleisli-category`, `thm-the-cokleisli-adjunction-induces-the-given-comonad`, and `cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties` — make the formal dual development explicit.
- `def-coalgebra-for-a-comonad-and-coalgebra-homomorphism`, `thm-coalgebra-homomorphisms-are-closed-under-identities-and-composition`, and `def-coeilenberg-moore-category` — replace the design's combined definition so category well-definedness is discharged first.
- `ex-the-writer-monad-from-a-monoid` and `ex-the-state-monad` — harvested primary-source examples.
- `thm-monad-morphisms-on-a-fixed-category-form-a-category` — discharges Mac Lane's explicit category-of-monads reader task under the established endofunctor-category size guard.
- `cor-comonads-on-a-preorder-are-interior-operators` — records the source-backed formal dual of the preorder closure-operator theorem.
- `ex-the-interior-comonad-on-a-topological-space` — realizes that duality on the published topological interior operator.
- `ex-a-distributive-law-between-two-finite-closure-operator-monads` — supplies a finite, fully checkable distributive-law example without importing a free-ring or 2-category development.
- `ex-the-ultrafilter-monad-on-a-finite-set` — records the finite principal-ultrafilter identification and its infinite-set boundary.

## Confidence and checks not performed

Confidence is high on the dependency order, source coverage, categorical variance, strict limit-creation clause, monad-morphism restriction construction, identity-monad composition calculation, preorder convention repair, and the explicit counterexamples. The source bodies and exact ranges were read during web research, including Cheng Examples 2.3–2.4 and Mac Lane's §VI.1 category-of-monads task. Riehl and Richter remain the most detailed proof sources; Mac Lane independently corroborates the definitions, comparison, power-set algebra exercise, monad-morphism action, and Kleisli/extremal construction. I did not use an external fallback and did not verify any theorem beyond the harvested ranges of the named sources.

The required mechanical stamp command did not pass in this sandbox: `node tools/source-fetch-check.mjs --coverage research/frontier-15-batch-7.coverage.json --stamp` returned `ENOTFOUND` for all four source hosts and stamped zero sources. No verification metadata was invented. This environment-level DNS failure must be resolved by rerunning that exact command in a network-capable step before the source-stamp stage gate. `validate-plan.mjs` and `depsource.mjs` were run against the current unspliced `research/plan-spec.json` and passed; those results do not validate this batch's new items, so the authoritative batch result remains the Step-4 post-splice run.

## Continuity checkpoint

Current substage: Step-3 fix pass complete, pending Alpha's disk re-check and the network-capable source-stamp rerun. Owned paths: `research/frontier-15-batch-7.pages.json`, `research/frontier-15-batch-7.coverage.json`, `research/frontier-15-batch-7.notes.md`, and `research/frontier-15-batch-7.proof-contracts.json`. Completed checks: all JSON parsed; coverage checklist and manifest content policy passed without errors or warnings; proof-contract scope and keys match; generated examples have no consumers; boundary audit found no template cluster or contradicted disposition; prosecheck found no error and only the dispatch-required count warnings; and the current unspliced plan passed `validate-plan.mjs` and `depsource.mjs`. The source stamp failed solely with hostname-resolution errors and remains open. Exact next action: rerun `source-fetch-check.mjs --stamp` where DNS is available, then have Alpha verify B7-1 through B7-13 from disk before Step 4 splices the manifest.

## Step-3 fix pass

- **B7-1 — applied.** Added `cor-comonads-on-a-preorder-are-interior-operators` on A and `ex-the-interior-comonad-on-a-topological-space` on B, with full proof contracts. Split both combined Riehl coverage headings so their monad/comonad and algebra/coalgebra halves point to the items that actually contain them.
- **B7-2 — applied.** Extended the Cheng locator through Examples 2.3–2.4 and recorded each example's exact content and result-specific disposition. Added `ex-a-distributive-law-between-two-finite-closure-operator-monads`, with an explicit finite witness and composite monad; it is recorded as a local fallback, not attributed to Cheng.
- **B7-3 — applied.** Added `ex-the-ultrafilter-monad-on-a-finite-set`, including the empty set, naturality of the finite principal-unit bijection, and an explicitly ultrafilter-lemma-dependent infinite boundary. Added `filters-and-ultrafilters-examples` to the B page's `requires`.
- **B7-4 — applied.** Mac Lane §VI.1 does explicitly ask for the category of monads on a fixed category. Added `thm-monad-morphisms-on-a-fixed-category-form-a-category` immediately after the morphism definition, with identity, composition, and size obligations in its proof contract; split the coverage disposition accordingly.
- **B7-5 — already correct.** Preserved Alpha's addition of `categories-functors-and-natural-transformations-examples` to the A page's `requires`; the prerequisite remains earlier in plan order.
- **B7-6 — already correct.** Preserved all eleven dependency additions applied by Alpha. The newly added Step-3 items also declare every load-bearing dependency identified by their proof contracts.
- **B7-7 — applied.** Preserved Alpha's corrected id `thm-eilenberg-moore-creates-base-colimits-preserved-by-the-monad-and-its-square` and synchronized the per-page list and component-provenance row in these notes.
- **B7-8 — already correct.** Preserved Alpha's biconditional preorder theorem title and synchronized the per-page list; the proof contract still checks both directions.
- **B7-9 — already correct.** Preserved Alpha's title fixing a unital ring `R` and left `R`-modules, and synchronized the per-page list.
- **B7-10 — applied.** Preserved Alpha's `endomorphism-monoid-count` strategy and dependency additions, then replaced the stale nonfree-object route in the proof contract and authoring notes. The durable refutation now separates all possible Kleisli endomorphism-set cardinalities from the two-element idempotent monoid's two endomorphisms.
- **B7-11 — already correct.** Left the advisory boundary rows in place. `boundary-audit.mjs` examined 440 rows and found neither a template cluster nor a contradicted disposition; the Step-5 author must still replace any currently inactive row that becomes live in the written proof.
- **B7-12 — already correct.** No split: the repaired A page has 59 items and is below the ceiling. If a later proof obligation would push it above 60, retain current items 1–36 on `monads-comonads-and-their-algebras` and move current item 37 onward to `standard-monads-ultrafilters-and-comonad-algebras` with companion `standard-monads-ultrafilters-and-comonad-algebras-examples`; do not prune.
- **B7-13 — applied.** Replaced the interpretive final summary sentence with the mathematical fact: “For a small category, its endofunctors and natural transformations form the functor category from that category to itself.”

Post-fix gate record: `coverage-checklist.mjs` passed with 177 harvested results and no errors or warnings; `content-policy.mjs --manifest-only` passed with 72 scoped items and no errors or warnings; `validate-plan.mjs research/plan-spec.json` passed for the current unspliced plan; `depsource.mjs` reported no unresolved dependency in that current plan. The source-stamp command failed with `ENOTFOUND` for Riehl, Richter, Mac Lane, and Cheng and remains the only mechanical blocker recorded here.

## Scaffold-fix round

- **B7-1 — pushed back: stale closure finding.** Both requested repairs already exist on disk. The A page contains `cor-comonads-on-a-preorder-are-interior-operators`, and the B page contains `ex-the-interior-comonad-on-a-topological-space`. Riehl Example 5.1.7 is split into distinct monad, comonad, closure, and interior coverage rows, while Example 5.2.6(iv) has distinct algebra and coalgebra rows; each row names the item that carries its stated content. `research/frontier-15-alpha-c-recheck.md` independently confirms both repairs from disk and declares the pair ready for splice. No manifest or coverage change is owed in this round.
- **B7-2 — pushed back: stale closure finding.** The B page already contains `ex-a-distributive-law-between-two-finite-closure-operator-monads`, whose strategy computes commuting closure operators on a finite power-set poset and the composite monad adjoining both fixed points. The Cheng locator already extends through Examples 2.3–2.4, with separate result-specific dispositions for the free-ring and strict-2-category examples; the local finite example is recorded separately and is not attributed to Cheng. The Alpha-c recheck verifies this witness and its composite from disk. No manifest or coverage change is owed in this round.
- **B7-3 — pushed back: stale closure finding.** The B page already contains `ex-the-ultrafilter-monad-on-a-finite-set`, and its `requires` already includes `filters-and-ultrafilters-examples`. Its dependencies are the published finite-partition, principal-ultrafilter, and free-ultrafilter examples; its title and strategy separate the choice-free finite identification from the ultrafilter-lemma-dependent natural-number contrast. The Alpha-c recheck confirms the empty-set and naturality obligations from the proof contract. No manifest or coverage change is owed in this round.
- **B7-4 — pushed back: stale closure finding.** The A page already places `thm-monad-morphisms-on-a-fixed-category-form-a-category` immediately after `def-monad-morphism`. The theorem's strategy covers identity and composite compatibility and retains the endofunctor-category size condition. Mac Lane §VI.1 has separate `included` coverage rows for monad morphisms and for their category, and the Alpha-c recheck confirms that the theorem discharges the latter row. No manifest or coverage change is owed in this round.

The closure receipt was written after the repaired artifacts but repeats the obsolete `insufficient` entries from `research/frontier-15-alpha-c-step3-verdicts.json`; the later disk-based recheck in `research/frontier-15-alpha-c-recheck.md` records every finding above as confirmed and concludes `ready for splice`. This round therefore records pushbacks rather than false `applied` claims. The fetch-verification stamp command now revalidates every recorded source without adding or inventing metadata. The required coverage, manifest policy, and current unspliced-plan validation commands all pass; the plan command still does not validate these batch items until Step 4 mechanically splices them.
## Continuity checkpoint

- Current substage: Step 5 authoring, after the source/dependency audit and proof-obligation pass; item prose is in progress.
- Owned artifacts: `items/` ids listed by batch 7 in `research/plan-spec.json`, `library/category-theory/monads-and-algebras.md`, `library/category-theory/monads-and-algebras-examples.md`, and `research/frontier-15-batch-7.{notes.md,coverage.json,proof-contracts.json}`.
- Completed checks: all governing instructions and exemplars were read; the final page manifests were compared with `research/plan-spec.json`; every external dependency's exact mathematical component was opened; the legacy-unclassified check found none; proof obligations and boundary cases were mapped for every proof-bearing item.
- Authored so far: the first thirty A-page items, from `def-monad` through `thm-a-reflective-inclusion-is-monadic`. They remain draft/session artifacts and have not yet passed the mechanical gates.
- Frozen-text state: no item is frozen at Step 5 and no published dependency was edited.
- Open constraints: `thm-the-covariant-power-set-monad` must prove singleton naturality inline because the final manifest removed its former B-page dependency; `ex-the-ultrafilter-monad-on-a-finite-set` must use A-page results plus a local finite-set argument rather than the three stale B-page citations in the scaffold contract. The finite-ultrafilter example's planned dependency on `fs-every-ultrafilter-is-principal` is expected to be dropped as unused and recorded in the Step-5 ledger.
- Exact next action: author A-page items 31--59, then the thirteen B-page items and both page files; update the proof contract to the exact final fact excerpts and step uses; verify coverage; run all prescribed gates; append the Step-5 audit handoff.

## Step-5 authoring

Authored every scaffolded item: all items of `monads-comonads-and-their-algebras` and all items of `monads-comonads-and-their-algebras-examples`, together with `library/category-theory/monads-comonads-and-their-algebras.md` and its examples companion. The A summary has exactly two nonempty paragraphs, with 60 and 72 words; the B page has no summary body. All items remain `status: draft` and `origin: session`. No published dependency was edited, no item was dropped or renamed, and no title or claim scope was changed from the approved scaffold.

The 72-row table under **Component provenance plan and final ledger** is the final per-item component-provenance ledger: every authored frontmatter value matches it, and every row records the source or local adaptation history supporting the classification. The source-backed items carry the corresponding Riehl, Richter, Mac Lane, or Cheng URL in `sources.references`. Definitions and non-proof-bearing remarks alone use `proof: not-applicable`. No item sets `verification.audited` or `verification.verified`.

The AI-generated Statement/Construction checks were completed as follows:

- `ex-a-kleisli-composite-computed`: computed every displayed composite and both bracketings; the words agree, and the empty output stays empty.
- `ex-the-list-monad-on-a-two-element-set`: enumerated the displayed bounded prefix, including empty outer and inner lists; no finiteness claim is made about the whole word set.
- `ex-a-distributive-law-between-two-finite-closure-operator-monads`: evaluated both operators and their composite on every subset of the carrier; the commuting formula and thin-category diagrams agree.
- `ex-the-ultrafilter-monad-on-a-finite-set`: checked the empty set separately, proved the nonempty finite case from singleton primeness, and reopened the published conditional nonprincipal-ultrafilter refutation; no ZF-only infinite claim is made.
- `cex-an-algebra-that-is-not-free`: checked the full operation table and separated empty from nonempty generating sets.
- `cex-a-coequalizer-not-preserved-by-a-forgetful-functor`: computed both quotients and verified both universal properties; the Set quotient has one even class and singleton odd classes.

### Scaffold-change ledger

- `thm-monad-morphisms-on-a-fixed-category-form-a-category`: dependency list changed from `[def-monad-morphism, rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists, def-functor-category]` to `[def-monad-morphism, def-functor-category]`. The proof uses the functor-category definition's exact existence convention directly; the prose-only remark has no contract-quotable mathematical component and is not load bearing.
- `thm-the-coeilenberg-moore-adjunction-induces-the-given-comonad`: added `def-comonad` to the planned dependencies. The proof explicitly uses the exact formal-dual definition before applying the Eilenberg–Moore theorem, so the direct edge is genuine.
- `fs-a-monad-is-a-monoid-object-in-the-endofunctor-category-for-every-category`: dependency list changed from `[rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists, def-functor-category, prop-size-of-functor-categories]` to `[def-functor-category, prop-size-of-functor-categories]`. The refutation uses the definition's large-source convention and the size proposition; the prose-only remark is explanatory rather than a proof input.
- `thm-the-covariant-power-set-monad`: the stale scaffold contract citation to the singleton example was removed. Naturality of singleton is proved inline from $f[\{x\}]=\{f(x)\}$, preserving the final manifest and leaf rule.
- `ex-the-ultrafilter-monad-on-a-finite-set`: the stale contract citations to the finite-partition, principal-ultrafilter, and free-ultrafilter examples were removed. The finite case is proved locally from A-page lemmas, and the infinite contrast uses the planned A-page dependency `fs-every-ultrafilter-principal`; the authored dependency list therefore matches the scaffold.

### Per-item precheck ledger

- `def-monad` — precheck n/a.
- `rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists` — precheck n/a.
- `def-comonad` — precheck n/a.
- `thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint` — precheck PASS.
- `cor-every-adjunction-induces-a-comonad-on-the-other-side` — precheck PASS.
- `def-t-algebra-and-algebra-homomorphism` — precheck n/a.
- `thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition` — precheck PASS.
- `def-eilenberg-moore-category` — precheck n/a.
- `def-free-t-algebra` — precheck n/a.
- `thm-the-eilenberg-moore-adjunction-induces-the-given-monad` — precheck PASS.
- `thm-kleisli-composition-is-associative-and-unital` — precheck PASS.
- `def-kleisli-category` — precheck n/a.
- `thm-the-kleisli-adjunction-induces-the-given-monad` — precheck PASS.
- `rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic` — precheck n/a.
- `thm-the-kleisli-factorisation-functor-exists-and-is-unique` — precheck PASS.
- `thm-the-comparison-functor-exists-and-is-unique` — precheck PASS.
- `cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties` — precheck PASS.
- `cor-composition-with-an-identity-monad-adjunction-preserves-the-induced-monad` — precheck PASS.
- `thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras` — precheck PASS.
- `def-monadic-and-strictly-monadic-functor` — precheck n/a.
- `def-conservative-functor` — precheck n/a.
- `thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits` — precheck PASS.
- `cor-every-category-monadic-over-set-is-complete` — precheck PASS.
- `thm-eilenberg-moore-creates-base-colimits-preserved-by-the-monad-and-its-square` — precheck PASS.
- `thm-a-monadic-functor-is-conservative` — precheck PASS.
- `def-idempotent-monad` — precheck n/a.
- `thm-equivalent-characterisations-of-an-idempotent-monad` — precheck PASS.
- `thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory` — precheck PASS.
- `cor-kleisli-and-eilenberg-moore-categories-are-equivalent-for-an-idempotent-monad` — precheck PASS.
- `thm-the-inclusion-of-a-reflective-subcategory-is-monadic` — precheck PASS.
- `def-monad-morphism` — precheck n/a.
- `thm-monad-morphisms-on-a-fixed-category-form-a-category` — precheck PASS.
- `thm-a-monad-morphism-induces-restriction-of-algebras-and-a-comparison-of-free-algebras` — precheck PASS.
- `def-distributive-law-between-two-monads` — precheck n/a.
- `thm-a-distributive-law-makes-the-composite-a-monad` — precheck PASS.
- `thm-monads-on-a-preorder-are-exactly-closure-operators` — precheck PASS.
- `cor-algebras-for-a-closure-operator-monad-are-its-fixed-points` — precheck PASS.
- `cor-comonads-on-a-preorder-are-interior-operators` — precheck PASS.
- `thm-the-free-monoid-monad-and-its-algebras-are-monoids` — precheck PASS.
- `thm-the-free-group-monad-and-its-algebras-are-groups` — precheck PASS.
- `thm-the-free-module-monad-and-its-algebras-are-modules` — precheck PASS.
- `thm-the-covariant-power-set-monad` — precheck PASS.
- `thm-algebras-for-the-covariant-power-set-monad-are-posets-with-all-small-suprema` — precheck PASS.
- `lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial` — precheck PASS.
- `lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural` — precheck PASS.
- `def-the-ultrafilter-endofunctor-unit-and-multiplication` — precheck n/a.
- `thm-the-ultrafilter-monad-is-a-monad` — precheck PASS.
- `def-coalgebra-for-a-comonad-and-coalgebra-homomorphism` — precheck n/a.
- `thm-coalgebra-homomorphisms-are-closed-under-identities-and-composition` — precheck PASS.
- `def-coeilenberg-moore-category` — precheck n/a.
- `thm-the-coeilenberg-moore-adjunction-induces-the-given-comonad` — precheck PASS.
- `thm-cokleisli-composition-is-associative-and-unital` — precheck PASS.
- `def-cokleisli-category` — precheck n/a.
- `thm-the-cokleisli-adjunction-induces-the-given-comonad` — precheck PASS.
- `cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties` — precheck PASS.
- `fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent-for-every-monad` — precheck PASS.
- `fs-every-functor-with-a-left-adjoint-is-monadic` — precheck PASS.
- `fs-a-monad-is-a-monoid-object-in-the-endofunctor-category-for-every-category` — precheck PASS.
- `fs-every-algebra-for-a-monad-is-free` — precheck PASS.
- `ex-a-kleisli-composite-computed` — precheck PASS.
- `ex-the-maybe-monad-and-partial-functions` — precheck PASS.
- `ex-the-list-monad-on-a-two-element-set` — precheck PASS.
- `ex-the-writer-monad-from-a-monoid` — precheck PASS.
- `ex-the-state-monad` — precheck PASS.
- `ex-the-closure-operator-monad-on-a-topological-space` — precheck PASS.
- `ex-the-interior-comonad-on-a-topological-space` — precheck PASS.
- `ex-a-distributive-law-between-two-finite-closure-operator-monads` — precheck PASS.
- `ex-the-free-abelian-group-monad` — precheck PASS.
- `ex-the-ultrafilter-monad-on-a-finite-set` — precheck PASS.
- `cex-an-algebra-that-is-not-free` — precheck PASS.
- `cex-a-coequalizer-not-preserved-by-a-forgetful-functor` — precheck PASS.
- `ex-the-double-contravariant-power-set-monad` — precheck PASS.

### Final gate record

- `tools/reflow.mts`: all authored files unchanged.
- `tools/precheck.mts`: 55 proof-bearing items checked, 0 failing; the other 17 definitions or remarks are correctly `n/a`.
- `proof-contract.mjs --strict`: 55/55 items, 0 errors, 0 warnings; 121 exact citation entries match source components.
- `citation-fidelity.mjs --fail-on-missing-quote`: no missing quote. Its seven candidate matches were manually reviewed as notation or operator variants (`\rightleftarrows`, preorder arrows, `\mathcal`/`\subseteq`, `\bigcup`, `\widehat`, `\mathbf`, and `\mathcal P`); none was a semantic widening.
- `coverage-checklist.mjs`: 177 harvested results, 0 errors, 0 warnings.
- `content-policy.mjs`: 72 scoped items, 0 errors, 0 warnings.
- `prosecheck.mjs --warnings`: 72 files, 0 errors, 0 warnings.
- `validate-plan.mjs research/plan-spec.json`: pass.
- `depcheck.mjs`, `fwdcheck.mjs`, `extcheck.mjs`, and `citecheck.mjs`: each exited 0. Their global informational output still contains inherited warnings belonging to published or concurrently authored material outside batch 7; none names a batch-7 defect.
- Page-manifest comparison: the A file contains exactly 55 section-4 items and 4 false statements; the B file contains exactly 13 examples/counterexamples and no section-4 item.

### Escalations and confidence

No boundary escalation remains. No missing item, suspected published-dependency defect, external fallback, or unauthorable scaffold claim was found. The only final scaffold deviations are the three dependency-list corrections recorded above. Coverage dispositions remain true of every authored item and no `included` row names an omitted artifact.

Confidence is high on the categorical variance, monad/comonad laws, strict limit-creation and conditional colimit-creation hypotheses, preorder versus poset distinction, empty-set cases, finite-ultrafilter/choice boundary, and the explicit counterexamples. I personally reread every direct dependency component, ran the mechanical and citation gates above, and checked the generated witnesses by hand. I did not run a judge, publish any item, set owner-only audit fields, or independently re-fetch the four source URLs during Step 5; the earlier source-stamp attempt in this batch was blocked by `ENOTFOUND`. No registered finite-smoke model applies to these monad or ultrafilter claims, so bounded checks are recorded as explicit derivations rather than as a finite-smoke pass.

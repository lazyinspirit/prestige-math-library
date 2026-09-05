# Step 8 adjudication — group **e**, run `frontier-30`

You are the group Alpha for batches **9**, **10**, **11**: 3 A/B pair(s), 6 page(s), 134 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-30-alpha-e-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-30-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 9 | `enriched-categories` | A | category-theory | 365.033 | `duality-and-rigidity-in-monoidal-categories-examples` |
| 9 | `enriched-categories-examples` | B | category-theory | 365.034 | `enriched-categories` |
| 10 | `delta-functors-and-universality` | A | homological-algebra | 365.049 | `derived-functors-examples` |
| 10 | `delta-functors-and-universality-examples` | B | homological-algebra | 365.05 | `delta-functors-and-universality` |
| 11 | `singular-chains-and-singular-homology` | A | algebraic-topology | 366.003 | `simplicial-complexes-and-simplicial-homology-examples`, `the-seifert-van-kampen-theorem`, `applications-of-the-fundamental-group` |
| 11 | `singular-chains-and-singular-homology-examples` | B | algebraic-topology | 366.004 | `singular-chains-and-singular-homology` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `enriched-categories` — Enriched Categories (43 item(s))

- `def-enriched-category` · definition — Enriched category over a monoidal base
- `rem-the-order-of-the-tensor-factors-in-composition` · remark — The order of tensor factors in enriched composition is fixed once and for all on this page
- `def-enriched-functor` · definition — Enriched functor
- `rem-how-much-of-the-theory-needs-symmetry-closedness-and-completeness` · remark — How much of the theory needs symmetry, closedness, and completeness
- `def-enriched-natural-transformation` · definition — Enriched natural transformation
- `thm-the-compact-square-form-of-enriched-naturality` · theorem — The lozenge and compact-square forms of enriched naturality are equivalent
- `rem-enriched-naturality-is-strictly-stronger-than-ordinary-naturality` · remark — Enriched naturality is strictly stronger than ordinary naturality of the underlying components
- `thm-enriched-categories-functors-and-natural-transformations-form-a-two-category` · theorem — Set-object enriched categories, enriched functors, and enriched natural transformations form a strict 2-category
- `def-the-underlying-ordinary-category-of-an-enriched-category` · definition — The underlying ordinary category of an enriched category
- `thm-the-underlying-category-construction-is-a-two-functor` · theorem — The underlying-category construction is a 2-functor
- `rem-the-underlying-category-can-lose-information` · remark — The underlying category can lose genuinely enriched information
- `thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs` · theorem — A Cat-enriched category is exactly a strict 2-category with a set of objects and small hom-categories
- `thm-a-category-enriched-in-a-preorder-is-a-preorder-and-one-enriched-in-sets-is-an-ordinary-category` · theorem — Enrichment in a preorder recovers a preorder, and enrichment in sets recovers an ordinary category
- `thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category` · theorem — Ab-enriched categories are exactly preadditive categories
- `cor-an-additive-category-is-an-ab-enriched-category-with-a-zero-object-and-finite-biproducts` · corollary — An additive category is an Ab-enriched category with a zero object and finite biproducts
- `rem-the-commutative-monoid-case` · remark — The commutative-monoid enrichment of a semiadditive category remains only a sourced remark here
- `thm-a-closed-monoidal-category-is-enriched-in-itself` · theorem — A closed monoidal category is enriched in itself
- `def-representable-enriched-functor` · definition — Representable enriched functor
- `thm-a-category-enriched-in-the-two-element-lattice-is-a-preordered-set` · theorem — A category enriched in the two-element lattice is a preordered set
- `thm-weak-enriched-yoneda-lemma` · theorem — Weak enriched Yoneda lemma
- `thm-strong-enriched-yoneda-lemma-as-a-particular-end` · theorem — Strong enriched Yoneda lemma as a particular end
- `rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims` · remark — The particular Yoneda end and the enriched functor category have different size requirements
- `cor-the-enriched-yoneda-embedding-is-fully-faithful` · corollary — The enriched Yoneda assignment is fully faithful
- `def-cotensor-and-tensor` · definition — Tensor and cotensor in a V-category
- `cex-a-bijection-of-underlying-hom-sets-does-not-establish-a-cotensor` · counterexample — A bijection on underlying hom-sets need not exhibit a cotensor
- `def-enriched-weighted-limit` · definition — Enriched weighted limit
- `thm-the-free-enriched-category-two-adjunction` · theorem — The free enriched category is left 2-adjoint to the underlying-category construction
- `def-conical-limit-in-an-enriched-category` · definition — Conical enriched limit
- `thm-there-is-in-general-no-constant-enriched-functor` · theorem — Constant enriched functors need not exist
- `thm-conical-limits-do-not-suffice-in-the-enriched-setting` · theorem — Conical weights are a proper special case of enriched weights
- `thm-a-conical-limit-is-stronger-than-a-limit-in-the-underlying-category` · theorem — A conical enriched limit is stronger than a limit in the underlying category
- `thm-when-a-category-is-tensored-every-limit-in-it-is-a-conical-enriched-limit` · theorem — When a category is tensored, every limit in it is a conical enriched limit
- `thm-enriched-completeness-is-cotensors-plus-small-conical-limits` · theorem — Enriched completeness is cotensors plus small conical limits
- `rem-this-does-not-reduce-indexed-limits-to-conical-ones` · remark — The completeness test does not reduce indexed limits to conical ones
- `thm-a-lax-monoidal-functor-induces-a-change-of-base-on-enriched-categories` · theorem — A lax monoidal functor induces change of base on enriched categories
- `thm-change-of-base-extends-to-functors-and-natural-transformations-and-is-a-two-functor` · theorem — Change of base extends to enriched functors and natural transformations as a 2-functor
- `cor-the-underlying-ordinary-category-is-an-instance-of-change-of-base` · corollary — The underlying ordinary category is change of base along the underlying-hom functor
- `rem-what-is-not-proved-about-change-of-base` · remark — What this page does not prove about change of base
- `def-enriched-adjunction` · definition — Enriched adjunction
- `thm-a-right-enriched-adjoint-preserves-weighted-limits` · theorem — Right enriched adjoints preserve weighted limits
- `thm-enriched-adjoint-functor-theorem-for-cotensored-categories` · theorem — Enriched adjoint functor theorem for cotensored categories
- `thm-a-category-is-tensored-exactly-when-every-covariant-hom-has-a-left-enriched-adjoint` · theorem — A V-category is tensored exactly when each covariant hom has a left enriched adjoint
- `thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables` · theorem — Every enriched functor into the base is a weighted colimit of representables when the displayed weighted colimit exists

### `enriched-categories-examples` — Enriched Categories — Examples (15 item(s))

- `ex-a-two-category-as-a-cat-enriched-category` · example — A strict 2-category read as a Cat-enriched category
- `ex-a-preordered-set-as-a-category-enriched-in-the-two-element-lattice` · example — A preordered set read as a category enriched in the two-element lattice
- `ex-a-metric-space-as-an-enriched-category` · example — A Lawvere metric space as an enriched category
- `ex-a-ring-as-a-one-object-ab-enriched-category` · example — A ring as a one-object Ab-enriched category
- `ex-the-underlying-category-of-a-cat-enriched-category-forgets-the-two-cells` · example — The underlying category of a Cat-enriched category forgets the 2-cells
- `ex-a-cotensor-computed-in-sets` · example — A cotensor in Set is a power
- `cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor` · counterexample — A bijection of hom-sets that does not exhibit a cotensor
- `ex-change-of-base-along-the-underlying-set-functor` · example — Change of base along the underlying-set functor
- `fs-a-conical-limit-in-an-enriched-category-is-just-a-limit-in-the-underlying-category` · false-statement — FALSE: a conical limit in an enriched category is just a limit in the underlying category
- `fs-every-enriched-category-has-constant-enriched-functors` · false-statement — FALSE: every enriched category has constant enriched functors
- `fs-the-underlying-ordinary-category-determines-the-enriched-category` · false-statement — FALSE: the underlying ordinary category determines the enriched category
- `fs-a-cat-enriched-category-is-the-same-thing-as-a-strict-two-category` · false-statement — FALSE: a Cat-enriched category is the same thing as a strict 2-category without smallness hypotheses
- `fs-an-enriched-natural-transformation-is-a-natural-transformation-of-the-underlying-functors` · false-statement — FALSE: an enriched natural transformation is only a natural transformation of the underlying functors
- `fs-the-strong-enriched-yoneda-lemma-for-a-large-category-constructs-the-whole-enriched-functor-category` · false-statement — FALSE: the strong enriched Yoneda lemma for a large category constructs the whole enriched functor category
- `fs-a-monoidal-category-carries-at-most-one-symmetry` · false-statement — FALSE: a monoidal category carries at most one symmetry

### `delta-functors-and-universality` — Delta Functors and Universality (34 item(s))

- `def-homological-delta-functor` · definition — Homological delta functor
- `def-cohomological-delta-functor` · definition — Cohomological delta functor
- `def-morphism-of-homological-delta-functors` · definition — Morphism of homological delta functors
- `def-morphism-of-cohomological-delta-functors` · definition — Morphism of cohomological delta functors
- `def-universal-delta-functor` · definition — Universal delta functor
- `def-effaceable-homological-delta-functor-in-positive-degrees` · definition — Effaceable homological delta functor in positive degrees
- `def-effaceable-cohomological-delta-functor-in-positive-degrees` · definition — Effaceable cohomological delta functor in positive degrees
- `lem-horseshoe-gives-a-short-exact-sequence-after-applying-a-right-exact-functor` · lemma — The horseshoe construction stays short exact after applying a right exact functor
- `def-connecting-map-for-left-derived-functors` · definition — The connecting map for left derived functors
- `lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts` · lemma — The left derived connecting map is independent of the horseshoe resolution and lifts
- `thm-left-derived-functors-form-a-homological-delta-functor` · theorem — Left derived functors form a homological delta functor
- `thm-right-derived-functors-form-a-cohomological-delta-functor` · theorem — Right derived functors form a cohomological delta functor
- `prop-natural-transformations-of-base-functors-give-morphisms-of-derived-delta-functors` · proposition — Natural transformations of base functors give morphisms of derived delta functors
- `cor-derived-long-exact-sequence` · corollary — The derived long exact sequence
- `prop-positive-left-derived-functors-are-effaceable-by-projectives` · proposition — Positive left derived functors are effaceable by projectives
- `prop-positive-right-derived-functors-are-effaceable-by-injectives` · proposition — Positive right derived functors are effaceable by injectives
- `lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle` · lemma — Dimension shift for a homological delta functor effaced in the middle
- `lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle` · lemma — Dimension shift for a cohomological delta functor effaced in the middle
- `lem-extend-a-degree-zero-transformation-through-one-dimension-shift` · lemma — A partial morphism of delta functors extends through one dimension shift
- `lem-the-effacement-extension-is-independent-of-the-effacing-morphism` · lemma — The effacement extension is independent of the effacing morphism
- `lem-the-effacement-extension-commutes-with-connecting-morphisms` · lemma — The effacement extension commutes with connecting morphisms
- `thm-effaceable-homological-delta-functors-are-universal` · theorem — Effaceable homological delta functors are universal
- `thm-effaceable-cohomological-delta-functors-are-universal` · theorem — Effaceable cohomological delta functors are universal
- `thm-derived-functors-are-universal-delta-functors` · theorem — Derived functors are universal delta functors
- `cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic` · corollary — Universal delta functors extending the same degree-zero functor are uniquely isomorphic
- `cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero` · corollary — A morphism between universal delta functors is determined in degree zero
- `prop-an-exact-base-functor-has-the-trivial-universal-delta-functor` · proposition — An exact base functor has the trivial universal delta functor
- `prop-satellites-give-the-first-derived-functor` · proposition — Satellites give the first derived functor
- `rem-universality-is-the-construction-independence-principle` · remark — Universality is the construction-independence principle
- `fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor` · false-statement — FALSE: any sequence of functors with long exact sequences is a delta functor
- `fs-effaceability-means-every-positive-value-is-zero` · false-statement — FALSE: effaceability means every positive value is zero
- `fs-a-degree-zero-natural-transformation-between-delta-functors-always-extends` · false-statement — FALSE: a degree-zero natural transformation between delta functors always extends
- `fs-the-horseshoe-connecting-map-is-independent-without-a-comparison-proof` · false-statement — FALSE: the horseshoe connecting map is independent without a comparison proof
- `fs-universality-removes-the-need-for-supplied-resolution-data` · false-statement — FALSE: universality removes the need for supplied resolution data

### `delta-functors-and-universality-examples` — Delta Functors and Universality — Examples (7 item(s))

- `ex-homology-as-a-homological-delta-functor` · example — Homology as a homological delta functor
- `ex-the-trivial-delta-functor-of-an-exact-functor` · example — The trivial delta functor of an exact functor
- `ex-one-dimension-shift-along-a-projective-presentation` · example — One dimension shift along a projective presentation
- `ex-one-dimension-shift-along-an-injective-copresentation` · example — One dimension shift along an injective copresentation
- `ex-extending-a-degree-zero-natural-transformation` · example — Extending a degree-zero natural transformation
- `cex-a-nonnatural-choice-of-connecting-maps-does-not-form-a-delta-functor` · counterexample — A nonnatural choice of connecting maps does not form a delta functor
- `ex-two-universal-delta-functors-and-their-unique-isomorphism` · example — Two universal delta functors and their unique isomorphism

### `singular-chains-and-singular-homology` — Singular Chains and Singular Homology (27 item(s))

- `def-standard-topological-simplex-and-its-affine-face-maps` · definition — The standard topological simplex and its affine face maps
- `lem-affine-face-maps-satisfy-the-cosimplicial-identities` · lemma — The affine face maps satisfy the cosimplicial identities
- `def-singular-simplex-and-singular-chain-group-with-coefficients` · definition — Singular simplices and singular chain groups with coefficients
- `def-singular-boundary-operator` · definition — The singular boundary operator
- `thm-the-singular-boundary-squares-to-zero` · theorem — The singular boundary squares to zero
- `def-singular-chain-complex-and-singular-homology` · definition — The singular chain complex and singular homology
- `def-induced-singular-chain-map` · definition — The induced singular chain map of a continuous map
- `lem-induced-singular-chain-maps-commute-with-boundaries` · lemma — Induced singular chain maps commute with boundaries
- `prop-singular-chains-and-homology-are-covariantly-functorial` · proposition — Singular chains and singular homology are covariantly functorial
- `def-zero-simplex-augmentation-and-reduced-singular-homology` · definition — Augmentation at 0-simplices and reduced singular homology
- `lem-singular-augmentation-commutes-with-boundary` · lemma — The singular augmentation commutes with the boundary
- `prop-zero-th-singular-homology-is-free-on-path-components` · proposition — Zero-th singular homology is free on path components
- `cor-path-connected-spaces-have-zero-reduced-zero-th-homology` · corollary — Path-connected spaces have zero reduced zero-th homology
- `prop-singular-homology-of-a-disjoint-union-is-the-direct-sum` · proposition — The singular homology of a disjoint union is the direct sum
- `def-prism-operator-for-a-homotopy` · definition — The prism operator of a homotopy
- `lem-the-prism-triangulation-has-the-stated-oriented-boundary` · lemma — The prism triangulation has the stated oriented boundary
- `thm-singular-chain-homotopy-formula` · theorem — The singular chain homotopy formula
- `cor-homotopic-maps-induce-the-same-map-on-singular-homology` · corollary — Homotopic maps induce the same map on singular homology
- `thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology` · theorem — Homotopy equivalences induce isomorphisms on singular homology
- `cor-contractible-nonempty-spaces-have-the-homology-of-a-point` · corollary — Contractible nonempty spaces have the homology of a point
- `prop-singular-homology-is-invariant-under-deformation-retracts` · proposition — Singular homology is invariant under deformation retracts
- `def-singular-chain-cross-product-on-generators` · definition — The singular chain cross product on generators
- `lem-singular-chain-cross-product-boundary-formula` · lemma — The singular chain cross product satisfies the boundary formula
- `prop-singular-chain-cross-products-are-natural` · proposition — Singular chain cross products are natural
- `def-fundamental-singular-cycle-of-an-oriented-simplex` · definition — The affine characteristic singular simplex of an ordered simplex
- `def-simplicial-to-singular-chain-map` · definition — The simplicial-to-singular chain map
- `lem-simplicial-to-singular-chains-commute-with-boundaries` · lemma — The simplicial-to-singular chain map commutes with boundaries

### `singular-chains-and-singular-homology-examples` — Singular Chains and Singular Homology — Examples (8 item(s))

- `ex-singular-chain-complex-of-a-point` · example — The singular chain complex of a point
- `ex-boundaries-of-the-standard-one-and-two-simplices` · example — Boundaries of the standard one- and two-simplices
- `ex-direct-cancellation-in-the-boundary-squared-of-a-two-simplex` · example — Direct cancellation in the boundary squared of a two-simplex
- `ex-the-prism-operator-for-a-path-homotopy` · example — The prism operator for a path homotopy
- `ex-homology-of-an-interval-from-contractibility` · example — The homology of an interval from contractibility
- `ex-homology-of-punctured-euclidean-space-by-deformation-retraction` · example — The homology of punctured Euclidean space by deformation retraction
- `cex-equal-homology-does-not-imply-homotopy-equivalence` · counterexample — Equal homology does not imply homotopy equivalence
- `cex-a-singular-cochain-is-not-a-finite-singular-chain` · counterexample — A singular cochain need not have finite support on singular simplices

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-30`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.

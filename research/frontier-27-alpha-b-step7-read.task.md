# Step 8 — group **b**, run `frontier-27`

You are the group Alpha for batches **1**, **5**, **6**: 3 A/B pair(s), 6 page(s), 126 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-27-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-27-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `krull-dimension-and-height-theorems` | A | commutative-algebra | 111.019 | `dedekind-domains-and-ideal-classes-examples` |
| 1 | `krull-dimension-and-height-theorems-examples` | B | commutative-algebra | 111.02 | `krull-dimension-and-height-theorems` |
| 5 | `closed-monoidal-categories-and-the-internal-hom` | A | category-theory | 365.027 | `strictification-and-mac-lanes-coherence-theorem-examples` |
| 5 | `closed-monoidal-categories-and-the-internal-hom-examples` | B | category-theory | 365.028 | `closed-monoidal-categories-and-the-internal-hom` |
| 6 | `long-exact-sequences-in-homology` | A | homological-algebra | 365.043 | `mapping-cones-cylinders-and-chain-triangles-examples`, `the-diagram-lemmas-in-an-abelian-category` |
| 6 | `long-exact-sequences-in-homology-examples` | B | homological-algebra | 365.044 | `long-exact-sequences-in-homology` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `krull-dimension-and-height-theorems` — Krull Dimension and Height Theorems (37 item(s))

- `cor-minimal-prime-has-height-zero` · corollary — Minimal primes are exactly the primes of height zero
- `lem-prime-chains-in-a-domain-start-at-zero` · lemma — In a domain, every prime chain below a prime begins at (0)
- `lem-height-in-quotient-is-relative-chain-length` · lemma — Height in a quotient measures chains between two primes
- `lem-principal-ideal-theorem-reduction-to-local-domain` · lemma — Reduce the principal ideal theorem to a Noetherian local domain
- `lem-principal-ideal-theorem-associated-prime-step` · lemma — The associated-prime step inside the principal ideal theorem
- `thm-krull-principal-ideal-theorem` · theorem — Krull's principal ideal theorem
- `cor-noetherian-local-domain-dimension-zero-iff-field` · corollary — A Noetherian local domain has dimension zero exactly when it is a field
- `cor-minimal-prime-over-a-nonzerodivisor-has-height-one` · corollary — A minimal prime over a principal nonzerodivisor has height one
- `lem-height-theorem-first-generator-reduction` · lemma — Choose the first generator's minimal prime inside the target prime
- `lem-height-theorem-quotient-induction` · lemma — Quotienting by the first minimal prime reduces the remaining height count
- `thm-krull-height-theorem` · theorem — Krull's height theorem
- `cor-height-of-a-prime-bounded-by-minimal-number-of-generators` · corollary — Height is bounded by the minimal number of local generators
- `lem-height-converse-parameter-selection` · lemma — Select generators witnessing the converse height theorem
- `thm-krull-height-theorem-converse` · theorem — Converse to Krull's height theorem in localised form
- `def-system-of-parameters-and-parameter-ideal` · definition — Systems of parameters and parameter ideals
- `lem-parameter-ideal-equivalent-m-primary` · lemma — Parameter ideals are exactly the m-primary d-generated ideals
- `lem-parameter-selection-avoids-minimal-components` · lemma — Choose a parameter that misses the top-dimensional minimal components
- `lem-parameter-dimension-drop-is-exact` · lemma — A first parameter lowers local dimension by exactly one
- `thm-existence-of-systems-of-parameters` · theorem — Every finite-dimensional Noetherian local ring has a system of parameters
- `thm-dimension-as-minimal-number-of-radical-generators` · theorem — Local dimension is the minimal number of generators of an ideal with maximal radical
- `cor-dimension-drops-under-a-parameter` · corollary — Quotienting by a first parameter lowers local dimension by one
- `cor-localisation-dimension-does-not-increase` · corollary — Localisation does not increase Krull dimension
- `cor-quotient-dimension-does-not-increase` · corollary — Passing to a quotient does not increase Krull dimension
- `lem-polynomial-ring-dimension-lower-chain` · lemma — A prime chain in R extends to a longer chain in R[x]
- `lem-polynomial-prime-contraction-height-jump-at-most-one` · lemma — Only one saturated step can lie over a fixed contracted prime in R[x]
- `lem-polynomial-ring-dimension-upper-bound` · lemma — A prime chain in R[x] has length at most one more than its contraction chain
- `thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring` · theorem — A Noetherian polynomial ring has dimension one larger
- `cor-dimension-of-a-finite-polynomial-ring-over-a-field` · corollary — A polynomial ring in n variables over a field has dimension n
- `lem-affine-domain-normalisation-dimension-upper-bound` · lemma — A finite affine extension of a polynomial ring has dimension at most the number of variables
- `lem-affine-domain-normalisation-dimension-lower-bound` · lemma — A finite affine extension of a polynomial ring has dimension at least the number of variables
- `thm-affine-domain-dimension-transcendence-degree` · theorem — Affine-domain dimension equals transcendence degree
- `lem-affine-domain-chain-dimension-formula-step` · lemma — Transcendence degrees along affine prime quotients add correctly
- `thm-dimension-formula-for-affine-domains` · theorem — The dimension formula for affine domains
- `cor-height-plus-quotient-dimension-affine-domain` · corollary — Height plus quotient dimension equals ambient dimension in an affine domain
- `cor-affine-domain-maximal-ideal-height-equals-dimension` · corollary — Maximal ideals of an affine domain have full height
- `cor-maximal-chains-in-affine-domains-have-equal-length` · corollary — Maximal chains in an affine domain all have the same length
- `rem-catenarity-boundary` · remark — Why the equal-chain statement stops at affine domains

### `krull-dimension-and-height-theorems-examples` — Krull Dimension and Height Theorems — Examples (7 item(s))

- `ex-relative-height-in-a-quotient` · example — Relative height in a quotient of k[x,y,z]
- `ex-principal-ideal-height-zero-for-a-zerodivisor` · example — A principal ideal generated by a zero divisor can have a minimal prime of height zero
- `ex-height-theorem-bound-sharp` · example — Coordinate ideals show the height bound is sharp
- `ex-system-of-parameters-not-a-minimal-generating-set` · example — A system of parameters need not minimally generate the maximal ideal
- `ex-localisation-strictly-lowers-dimension` · example — Localisation can strictly lower dimension
- `ex-polynomial-dimension-zero-ring-boundary` · example — The polynomial-dimension formula at fields, Artinian rings, and the zero-ring boundary
- `ex-affine-dimension-formula` · example — The affine dimension formula on a plane curve domain

### `closed-monoidal-categories-and-the-internal-hom` — Closed Monoidal Categories and the Internal Hom (33 item(s))

- `def-left-closed-and-right-closed-monoidal-category` · definition — Left-closed, right-closed, and biclosed monoidal categories
- `thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism` · theorem — The internal hom is unique up to unique natural isomorphism
- `def-the-internal-hom-and-its-evaluation-morphism` · definition — The internal hom and its evaluation morphism
- `thm-in-a-symmetric-monoidal-category-the-two-closures-agree` · theorem — A supplied symmetry identifies the left and right internal homs
- `cex-a-monoidal-category-need-not-be-closed` · counterexample — A monoidal category need not be closed
- `thm-a-closed-monoidal-category-has-its-tensor-cocontinuous-in-each-variable` · theorem — In a biclosed monoidal category tensor is cocontinuous in each variable
- `thm-the-internal-hom-is-continuous-in-each-variable` · theorem — The internal hom preserves limits in the covariant variable and sends colimits to limits in the contravariant variable
- `thm-the-internal-hom-composition-morphism` · theorem — The internal-hom composition morphism
- `thm-the-unit-is-an-internal-hom-unit` · theorem — The tensor unit is an internal-hom unit
- `def-exponential-object` · definition — Exponential object
- `def-cartesian-closed-category` · definition — Cartesian closed category
- `thm-set-is-cartesian-closed` · theorem — Set is cartesian closed
- `thm-the-category-of-small-categories-is-cartesian-closed` · theorem — The category of small categories is cartesian closed
- `thm-a-presheaf-category-on-a-small-category-is-cartesian-closed` · theorem — A presheaf category on a small category is cartesian closed
- `thm-currying-and-uncurrying-are-mutually-inverse` · theorem — Currying and uncurrying are mutually inverse
- `cor-a-cartesian-closed-category-with-an-initial-object-has-strict-initial-objects` · corollary — In a cartesian closed category, any initial object is strict
- `thm-cartesian-closed-preorders-have-relative-implications` · theorem — A cartesian closed preorder has relative implications
- `def-slice-category-and-the-pullback-functor` · definition — Slice categories, composition, and pullback along a morphism
- `def-locally-cartesian-closed-category` · definition — Locally cartesian closed category
- `thm-slices-of-a-locally-cartesian-closed-category-are-locally-cartesian-closed` · theorem — Slices of a locally cartesian closed category are locally cartesian closed
- `thm-a-locally-cartesian-closed-category-with-a-terminal-object-is-cartesian-closed` · theorem — A locally cartesian closed category with a terminal object is cartesian closed
- `thm-a-locally-cartesian-closed-category-has-pullbacks-and-with-a-terminal-object-all-finite-limits` · theorem — A locally cartesian closed category has pullbacks, and with a terminal object it has all finite limits
- `thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint` · theorem — Local cartesian closure is equivalent to every pullback functor having a right adjoint
- `thm-set-is-locally-cartesian-closed` · theorem — Set is locally cartesian closed
- `def-subobject-classifier` · definition — Subobject classifier
- `thm-a-subobject-classifier-represents-the-subobject-functor` · theorem — With a supplied well-powering, a subobject classifier represents the subobject functor
- `thm-the-two-element-set-is-a-subobject-classifier-for-sets` · theorem — The two-element set is a subobject classifier for Set
- `rem-what-is-not-developed-here` · remark — Boundary: this page stops before elementary and Grothendieck toposes
- `fs-every-monoidal-category-is-closed` · false-statement — FALSE: every monoidal category is closed
- `fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category` · false-statement — FALSE: the left and right internal homs agree in every monoidal category
- `fs-a-cartesian-closed-category-has-all-finite-limits` · false-statement — FALSE: every cartesian closed category has all finite limits
- `fs-every-cartesian-closed-category-is-locally-cartesian-closed` · false-statement — FALSE: every cartesian closed category is locally cartesian closed
- `fs-a-subobject-classifier-is-any-object-representing-monomorphisms` · false-statement — FALSE: a subobject classifier is any object representing monomorphisms

### `closed-monoidal-categories-and-the-internal-hom-examples` — Closed Monoidal Categories and the Internal Hom - Examples (6 item(s))

- `ex-the-function-set-as-an-exponential-computed` · example — A function set computed as an exponential object
- `ex-currying-for-sets-of-three-variables` · example — Currying for sets of three variables
- `ex-the-internal-hom-of-abelian-groups` · example — The internal hom of abelian groups
- `ex-the-exponential-of-two-small-categories` · example — The exponential of two small categories computed on a walking-arrow source
- `ex-a-locally-cartesian-closed-slice-computed` · example — A slice of Set computed as a locally cartesian closed category
- `ex-the-subobject-classifier-of-a-presheaf-category` · example — The subobject classifier in a presheaf category on the walking arrow

### `long-exact-sequences-in-homology` — Long Exact Sequences in Homology (35 item(s))

- `def-morphism-of-short-exact-sequences-of-complexes` · definition — A morphism of short exact sequences of complexes
- `lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes` · lemma — The cycle-boundary diagram associated to a short exact sequence of complexes
- `def-preconnecting-arrow-on-cycles` · definition — The preconnecting arrow on cycles
- `lem-the-preconnecting-arrow-annihilates-boundaries` · lemma — The preconnecting arrow annihilates boundaries
- `def-connecting-morphism-in-homology` · definition — The connecting morphism in homology
- `prop-elementwise-formula-for-the-connecting-map-in-module-categories` · proposition — Elementwise formula for the connecting map in module categories
- `lem-exactness-at-the-homology-of-the-left-complex` · lemma — Exactness at the homology of the left complex
- `lem-exactness-at-the-homology-of-the-middle-complex` · lemma — Exactness at the homology of the middle complex
- `lem-exactness-at-the-homology-of-the-right-complex` · lemma — Exactness at the homology of the right complex
- `lem-exactness-at-the-target-of-the-connecting-map` · lemma — Exactness at the target of the connecting map
- `thm-long-exact-sequence-in-homology` · theorem — The long exact sequence in homology
- `thm-naturality-of-the-homology-connecting-morphism` · theorem — Naturality of the homology connecting morphism
- `cor-the-long-exact-homology-sequence-is-natural` · corollary — The long exact homology sequence is natural
- `thm-long-exact-sequence-in-cohomology` · theorem — The long exact sequence in cohomology
- `thm-naturality-of-the-cohomology-connecting-morphism` · theorem — Naturality of the cohomology connecting morphism
- `cor-a-short-exact-sequence-with-acyclic-middle-identifies-neighbouring-homology` · corollary — A short exact sequence with acyclic middle complex identifies neighbouring homology
- `cor-two-out-of-three-for-acyclicity-in-a-short-exact-sequence-of-complexes` · corollary — Two-out-of-three for acyclicity in a short exact sequence of complexes
- `cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram` · corollary — Two-out-of-three for quasi-isomorphisms in a short exact sequence diagram
- `prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence` · proposition — The connecting morphism vanishes for a chain-split short exact sequence
- `thm-the-cone-long-exact-sequence` · theorem — The cone long exact sequence
- `prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign` · proposition — The cone connecting map agrees with the shifted identity up to the declared sign
- `cor-the-cone-criterion-from-the-general-long-exact-sequence` · corollary — The cone criterion from the general long exact sequence
- `thm-long-exact-sequence-of-relative-homology-for-a-composable-pair` · theorem — The long exact sequence of relative homology for a composable pair
- `cor-a-chain-map-between-acyclic-complexes-has-acyclic-cone` · corollary — A chain map between acyclic complexes has an acyclic cone
- `prop-an-exact-functor-carries-the-long-exact-homology-sequence-to-the-corresponding-long-exact-sequence` · proposition — An exact functor carries the long exact homology sequence to the corresponding long exact sequence
- `cor-homology-of-a-degreewise-split-direct-sum-sequence` · corollary — Homology of a chain-split direct-sum sequence
- `cor-short-five-lemma-for-quasi-isomorphisms` · corollary — Short five lemma for quasi-isomorphisms
- `prop-a-short-exact-sequence-of-complexes-gives-six-term-exact-sequences-when-homology-is-concentrated-in-two-degrees` · proposition — A short exact sequence of complexes gives six-term exact sequences when homology is concentrated in two degrees
- `def-homological-delta-functor-carried-by-homology-of-complexes` · definition — The homological delta-functor carried by homology of complexes
- `prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws` · proposition — Homology of complexes satisfies the delta-functor naturality and exactness laws
- `fs-the-connecting-morphism-is-defined-by-choosing-one-lift-with-no-independence-proof` · false-statement — FALSE: the connecting morphism is defined by choosing one lift with no independence proof
- `fs-a-degreewise-split-short-exact-sequence-of-complexes-has-zero-connecting-map` · false-statement — FALSE: a degreewise split short exact sequence of complexes has zero connecting map
- `fs-the-homology-functor-is-exact-on-short-exact-sequences-of-complexes` · false-statement — FALSE: the homology functor is exact on short exact sequences of complexes
- `fs-the-cohomology-connecting-morphism-lowers-degree` · false-statement — FALSE: the cohomology connecting morphism lowers degree
- `fs-naturality-of-the-long-exact-sequence-follows-without-checking-the-connecting-square` · false-statement — FALSE: naturality of the long exact sequence follows without checking the connecting square

### `long-exact-sequences-in-homology-examples` — Long Exact Sequences in Homology — Examples (8 item(s))

- `ex-the-connecting-map-for-a-short-exact-sequence-of-two-term-complexes` · example — The connecting map for a short exact sequence of two-term complexes
- `ex-a-degreewise-split-sequence-with-nonzero-connecting-map` · example — A degreewise split sequence with nonzero connecting map
- `ex-the-cone-long-exact-sequence-for-multiplication-by-m` · example — The cone long exact sequence for multiplication by m
- `ex-two-out-of-three-for-a-diagram-of-finite-complexes` · example — Two-out-of-three for a diagram of finite complexes
- `ex-a-six-term-cohomology-sequence` · example — A six-term cohomology sequence
- `cex-homology-is-not-an-exact-functor` · counterexample — Homology is not an exact functor
- `ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences` · example — Naturality of a connecting map under a map of coefficient sequences
- `ex-relative-homology-of-a-composable-pair-of-stalk-complexes` · example — Relative homology of a composable pair of stalk complexes

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
`research/frontier-27-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — group reading digest, `frontier-27`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.

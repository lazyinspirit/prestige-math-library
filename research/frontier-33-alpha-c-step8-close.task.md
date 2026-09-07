# Step 8 adjudication — group **c**, run `frontier-33`

You are the group Alpha for batches **5**, **6**, **7**: 4 A/B pair(s), 8 page(s), 211 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-33-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-33-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 5 | `classical-zero-free-region-and-the-prime-number-theorem` | A | number-theory | 348.015 | `perron-inversion-and-the-explicit-formula-examples` |
| 5 | `classical-zero-free-region-and-the-prime-number-theorem-examples` | B | number-theory | 348.016 | `classical-zero-free-region-and-the-prime-number-theorem` |
| 5 | `decomposition-inertia-and-frobenius` | A | number-theory | 365.915 | `prime-ideal-decomposition-ramification-and-the-different-examples` |
| 5 | `decomposition-inertia-and-frobenius-examples` | B | number-theory | 365.916 | `decomposition-inertia-and-frobenius` |
| 6 | `derived-categories` | A | homological-algebra | 365.063 | `triangulated-categories-examples` |
| 6 | `derived-categories-examples` | B | homological-algebra | 365.064 | `derived-categories` |
| 7 | `regular-local-rings-and-homological-dimension` | A | commutative-algebra | 365.905 | `depth-and-cohen-macaulay-modules-examples`, `tor-flatness-and-global-dimension` |
| 7 | `regular-local-rings-and-homological-dimension-examples` | B | commutative-algebra | 365.906 | `regular-local-rings-and-homological-dimension` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `classical-zero-free-region-and-the-prime-number-theorem` — Classical Zero Free Region and the Prime Number Theorem (20 item(s))

- `lem-zeta-logarithmic-derivative-zero-bound` · lemma
- `lem-zeta-three-four-one-logarithmic-derivative-inequality` · lemma
- `thm-riemann-zeta-classical-zero-free-region` · theorem
- `lem-zeta-horizontal-logarithmic-derivative-comparison` · lemma
- `thm-zeta-bounds-in-classical-zero-free-region` · theorem
- `cor-zeta-zero-count-near-the-one-line` · corollary
- `lem-zeta-reciprocal-zero-sum-bound` · lemma
- `lem-zeta-explicit-formula-zero-free-error-balance` · lemma
- `thm-chebyshev-psi-prime-number-theorem-error` · theorem
- `cor-chebyshev-theta-prime-number-theorem-error` · corollary
- `def-logarithmic-integral` · definition
- `lem-logarithmic-integral-asymptotic-expansion` · lemma
- `thm-prime-number-theorem-logarithmic-integral` · theorem
- `cor-prime-number-theorem` · corollary
- `cor-nth-prime-asymptotic` · corollary
- `lem-newman-damped-contour-estimates` · lemma
- `thm-newman-zagier-tauberian-theorem` · theorem
- `lem-monotone-chebyshev-tauberian-desmoothing` · lemma
- `lem-dirichlet-character-chebyshev-laplace-transform` · lemma
- `thm-prime-number-theorem-arithmetic-progressions` · theorem

### `classical-zero-free-region-and-the-prime-number-theorem-examples` — Classical Zero Free Region and the Prime Number Theorem — Examples (8 item(s))

- `ex-the-three-four-one-trigonometric-inequality` · example
- `ex-zero-free-region-parameter-balance` · example
- `ex-optimizing-the-prime-number-theorem-contour-height` · example
- `ex-from-psi-to-the-logarithmic-integral` · example
- `ex-newman-tauberian-prime-number-theorem` · example
- `ex-prime-number-theorem-in-a-small-progression` · example
- `cex-dirichlet-density-alone-does-not-give-a-counting-asymptotic` · counterexample
- `rem-the-classical-zeta-region-is-not-a-uniform-dirichlet-l-region` · remark

### `decomposition-inertia-and-frobenius` — Decomposition Inertia and Frobenius (29 item(s))

- `thm-completion-of-an-absolutely-valued-field` · theorem
- `def-normed-vector-space-over-an-absolutely-valued-field` · definition
- `thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field` · theorem
- `lem-uniqueness-of-an-extended-complete-field-absolute-value` · lemma
- `lem-hensel-factor-lifting-over-a-complete-valued-field` · lemma
- `lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring` · lemma
- `thm-unique-extension-of-a-nonarchimedean-absolute-value` · theorem
- `thm-number-field-places-classification` · theorem
- `def-completion-of-a-number-field-at-a-prime` · definition
- `lem-number-field-completions-as-local-polynomial-factors` · lemma
- `thm-galois-action-on-primes-above-a-prime-is-transitive` · theorem
- `cor-galois-prime-decomposition-efg` · corollary
- `def-decomposition-group-of-a-prime` · definition
- `thm-decomposition-group-and-completion` · theorem
- `def-inertia-group-of-a-prime` · definition
- `lem-lifting-residue-frobenius-by-galois-conjugates` · lemma
- `thm-decomposition-inertia-exact-sequence` · theorem
- `cor-orders-of-decomposition-and-inertia-groups` · corollary
- `thm-conjugacy-of-decomposition-and-inertia-groups` · theorem
- `thm-decomposition-and-inertia-in-towers` · theorem
- `thm-decomposition-and-inertia-fixed-fields` · theorem
- `def-arithmetic-frobenius-coset` · definition
- `thm-unramified-frobenius-element-exists-uniquely` · theorem
- `thm-frobenius-elements-above-a-prime-are-conjugate` · theorem
- `thm-frobenius-order-is-residue-degree` · theorem
- `cor-complete-splitting-and-trivial-frobenius` · corollary
- `cor-frobenius-compatibility-in-finite-towers` · corollary
- `lem-good-polynomial-reduction-kills-inertia` · lemma
- `thm-frobenius-cycle-type-and-prime-splitting` · theorem

### `decomposition-inertia-and-frobenius-examples` — Decomposition Inertia and Frobenius — Examples (7 item(s))

- `ex-decomposition-inertia-in-a-quadratic-field` · example
- `ex-gaussian-and-eisenstein-frobenius` · example
- `ex-frobenius-in-a-small-cyclotomic-field` · example
- `ex-nonabelian-frobenius-conjugacy-class` · example
- `ex-decomposition-groups-in-a-tower` · example
- `cex-ramified-frobenius-has-no-canonical-lift` · counterexample
- `cex-frobenius-cycle-type-needs-good-reduction` · counterexample

### `derived-categories` — Derived Categories (60 item(s))

- `def-multiplicative-system-in-a-category` · definition — Multiplicative system in a category
- `def-localization-of-a-category-at-a-class-of-morphisms` · definition — Localization of a category at a class of morphisms
- `def-left-roof-representing-a-localized-morphism` · definition — Left roof representing a localized morphism
- `def-common-refinement-equivalence-of-roofs` · definition — Common refinement equivalence of roofs
- `lem-roof-equivalence-is-an-equivalence-relation` · lemma — Roof equivalence is an equivalence relation
- `lem-composition-of-roofs-is-well-defined` · lemma — Composition of roofs is well defined
- `thm-the-calculus-of-fractions-constructs-the-localization` · theorem — The calculus of fractions constructs the localization
- `prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition` · proposition — Quasi isomorphisms contain identities and are closed under composition
- `thm-two-out-of-three-for-quasi-isomorphisms` · theorem — Two out of three for quasi isomorphisms
- `lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category` · lemma — Quasi isomorphisms admit the roof calculus in the homotopy category
- `def-derived-category-of-an-abelian-category` · definition — Derived category of an abelian category
- `prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms` · proposition — The localization functor sends quasi isomorphisms to isomorphisms
- `prop-cohomology-factors-through-the-derived-category` · proposition — Cohomology factors through the derived category
- `prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic` · proposition — A complex is zero in the derived category exactly when it is acyclic
- `lem-addition-of-roofs-makes-an-additive-localization` · lemma — Addition of roofs makes an additive localization
- `lem-finite-roof-squares-and-composable-pairs-can-be-cleared` · lemma — Finite roof squares and composable pairs can be cleared
- `lem-localized-cone-triangles-satisfy-tr-one-through-tr-three` · lemma — Localized cone triangles satisfy tr one through tr three
- `lem-localized-cone-triangles-satisfy-the-octahedral-axiom` · lemma — Localized cone triangles satisfy the octahedral axiom
- `thm-the-derived-category-inherits-a-triangulated-structure` · theorem — The derived category inherits a triangulated structure
- `thm-the-derived-category-is-the-verdier-quotient-by-acyclic-complexes` · theorem — The derived category is the verdier quotient by acyclic complexes
- `def-homotopically-projective-bounded-above-complex` · definition — Homotopically projective bounded above complex
- `def-homotopically-injective-bounded-below-complex` · definition — Homotopically injective bounded below complex
- `thm-a-bounded-above-complex-of-projectives-is-homotopically-projective` · theorem — A bounded above complex of projectives is homotopically projective
- `thm-a-bounded-below-complex-of-injectives-is-homotopically-injective` · theorem — A bounded below complex of injectives is homotopically injective
- `prop-morphisms-from-a-homotopically-projective-complex-need-no-roof` · proposition — Morphisms from a homotopically projective complex need no roof
- `prop-morphisms-into-a-homotopically-injective-complex-need-no-roof` · proposition — Morphisms into a homotopically injective complex need no roof
- `def-brutal-truncation-of-a-complex` · definition — Brutal truncation of a complex
- `def-canonical-truncation-of-a-complex` · definition — Canonical truncation of a complex
- `lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology` · lemma — Canonical truncation is a complex and has the claimed cohomology
- `thm-canonical-truncations-fit-a-distinguished-triangle` · theorem — Canonical truncations fit a distinguished triangle
- `prop-bounded-derived-localizations-embed-fully-faithfully` · proposition — Bounded derived localizations embed fully faithfully
- `lem-bounded-above-complexes-admit-projective-replacements` · lemma — Bounded above complexes admit projective replacements
- `lem-bounded-below-complexes-admit-injective-replacements` · lemma — Bounded below complexes admit injective replacements
- `thm-projective-complexes-model-the-bounded-above-derived-category` · theorem — Projective complexes model the bounded above derived category
- `thm-injective-complexes-model-the-bounded-below-derived-category` · theorem — Injective complexes model the bounded below derived category
- `thm-ext-is-hom-in-the-derived-category` · theorem — Ext is hom in the derived category
- `prop-yoneda-product-is-composition-in-the-derived-category` · proposition — Yoneda product is composition in the derived category
- `def-canonical-t-structure-on-a-derived-category` · definition — Canonical t structure on a derived category
- `thm-the-canonical-pair-is-a-t-structure` · theorem — The canonical pair is a t structure
- `thm-the-heart-of-the-canonical-t-structure-is-equivalent-to-the-original-abelian-category` · theorem — The heart of the canonical t structure is equivalent to the original abelian category
- `def-left-total-derived-functor-on-the-bounded-above-derived-category` · definition — Left total derived functor on the bounded above derived category
- `lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism` · lemma — Left total derived functor is independent of the supplied projective replacement up to unique natural isomorphism
- `thm-existence-of-the-bounded-above-left-total-derived-functor` · theorem — Existence of the bounded above left total derived functor
- `def-right-total-derived-functor-on-the-bounded-below-derived-category` · definition — Right total derived functor on the bounded below derived category
- `thm-existence-of-the-bounded-below-right-total-derived-functor` · theorem — Existence of the bounded below right total derived functor
- `prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles` · proposition — Total derived functors send distinguished triangles to distinguished triangles
- `prop-classical-derived-functors-are-the-cohomology-objects-of-the-total-derived-functor` · proposition — Classical derived functors are the cohomology objects of the total derived functor
- `lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms` · lemma — Bounded above flat tensor complexes preserve quasi isomorphisms
- `def-derived-tensor-product-in-the-bounded-above-setting` · definition — Derived tensor product in the bounded above setting
- `prop-homology-of-the-derived-tensor-product-is-tor` · proposition — Homology of the derived tensor product is tor
- `def-derived-hom-in-the-bounded-setting` · definition — Derived hom in the bounded setting
- `prop-cohomology-of-derived-hom-is-ext` · proposition — Cohomology of derived hom is ext
- `prop-bounded-derived-complexes-split-when-higher-ext-between-cohomologies-vanishes` · proposition — Splitting a bounded complex by vanishing higher Ext
- `fs-localization-identifies-a-quasi-isomorphism-with-an-identity-morphism` · false-statement
- `fs-two-roofs-are-equal-whenever-their-right-hand-arrows-are-equal` · false-statement
- `fs-the-derived-category-is-the-same-category-as-the-homotopy-category` · false-statement
- `fs-every-complex-of-projectives-is-homotopically-projective` · false-statement
- `fs-brutal-and-canonical-truncation-are-the-same` · false-statement
- `fs-an-unbounded-total-derived-functor-exists-from-enough-injectives-alone` · false-statement
- `fs-a-derived-functor-is-canonical-without-supplied-replacement-data` · false-statement

### `derived-categories-examples` — Derived Categories — Examples (9 item(s))

- `ex-a-roof-representing-an-ext-one-class` · example
- `ex-an-acyclic-complex-that-becomes-zero-in-d-but-not-in-k` · example
- `ex-inverting-a-quasi-isomorphism-by-a-reversed-roof` · example
- `ex-ext-one-as-a-derived-category-morphism` · example
- `ex-brutal-versus-canonical-truncation` · example
- `ex-a-canonical-truncation-triangle` · example
- `ex-derived-tensor-of-two-cyclic-abelian-groups` · example
- `ex-derived-hom-of-cyclic-abelian-groups` · example
- `cex-an-unbounded-complex-of-projectives-that-is-not-k-projective` · counterexample

### `regular-local-rings-and-homological-dimension` — Regular Local Rings and Homological Dimension (60 item(s))

- `def-embedding-dimension-and-regular-local-ring` · definition — embedding dimension and regular local ring
- `lem-embedding-dimension-is-minimal-maximal-ideal-generator-number` · lemma — embedding dimension is minimal maximal ideal generator number
- `thm-dimension-at-most-embedding-dimension` · theorem — dimension at most embedding dimension
- `def-regular-system-of-parameters` · definition — regular system of parameters
- `lem-regular-system-of-parameters-equivalent-basis` · lemma — regular system of parameters equivalent basis
- `lem-associated-graded-polynomial-surjection` · lemma — associated graded polynomial surjection
- `lem-regular-local-graded-surjection-has-zero-kernel` · lemma — regular local graded surjection has zero kernel
- `thm-associated-graded-ring-of-a-regular-local-ring` · theorem — associated graded ring of a regular local ring
- `cor-regular-local-hilbert-samuel-multiplicity-one` · corollary — regular local hilbert samuel multiplicity one
- `lem-regular-local-domain-induction` · lemma — regular local domain induction
- `lem-regular-local-parameter-is-nonzerodivisor` · lemma — regular local parameter is nonzerodivisor
- `lem-regular-local-quotient-by-parameter-is-regular` · lemma — regular local quotient by parameter is regular
- `thm-quotient-and-lifting-regularity-across-a-regular-element` · theorem — quotient and lifting regularity across a regular element
- `thm-regular-local-rings-are-domains-and-cohen-macaulay` · theorem — regular local rings are domains and cohen macaulay
- `thm-one-dimensional-regular-local-rings-are-dvrs` · theorem — one dimensional regular local rings are dvrs
- `lem-regular-local-regular-quotient-ideal-is-parameter-generated` · lemma — regular local regular quotient ideal is parameter generated
- `lem-finite-local-modules-admit-minimal-free-resolutions` · lemma — finite local modules admit minimal free resolutions
- `lem-minimal-free-resolution-differentials-land-in-maximal-ideal` · lemma — minimal free resolution differentials land in maximal ideal
- `lem-minimal-free-resolution-reduces-to-zero-differential` · lemma — minimal free resolution reduces to zero differential
- `def-betti-numbers-of-a-finite-local-module` · definition — betti numbers of a finite local module
- `cor-betti-number-is-rank-in-minimal-resolution` · corollary — betti number is rank in minimal resolution
- `lem-minimal-free-resolutions-unique-up-to-chain-isomorphism` · lemma — minimal free resolutions unique up to chain isomorphism
- `lem-projective-dimension-from-last-nonzero-betti-number` · lemma — projective dimension from last nonzero betti number
- `lem-auslander-buchsbaum-syzygy-projective-dimension` · lemma — auslander buchsbaum syzygy projective dimension
- `lem-auslander-buchsbaum-base-case-free-module` · lemma — auslander buchsbaum base case free module
- `lem-minimal-free-matrix-induces-zero-on-residue-ext` · lemma — minimal free matrix induces zero on residue ext
- `lem-auslander-buchsbaum-projective-dimension-one` · lemma — auslander buchsbaum projective dimension one
- `lem-auslander-buchsbaum-first-syzygy-depth` · lemma — auslander buchsbaum first syzygy depth
- `thm-auslander-buchsbaum-formula` · theorem — auslander buchsbaum formula
- `lem-global-dimension-is-detected-on-cyclic-modules` · lemma — global dimension is detected on cyclic modules
- `lem-local-global-dimension-equals-residue-field-projective-dimension` · lemma — local global dimension equals residue field projective dimension
- `lem-positive-depth-ring-has-regular-minimal-generator` · lemma — positive depth ring has regular minimal generator
- `lem-regular-element-reduction-preserves-minimal-resolution` · lemma — regular element reduction preserves minimal resolution
- `lem-residue-field-splits-off-reduced-maximal-ideal` · lemma — residue field splits off reduced maximal ideal
- `lem-finite-residue-field-projective-dimension-forces-depth-equals-dimension` · lemma — finite residue field projective dimension forces depth equals dimension
- `lem-regular-local-residue-field-koszul-resolution` · lemma — regular local residue field koszul resolution
- `cor-regular-local-residue-field-projective-dimension-dimension` · corollary — regular local residue field projective dimension dimension
- `thm-auslander-buchsbaum-serre-regularity-criterion` · theorem — auslander buchsbaum serre regularity criterion
- `cor-localisations-of-regular-local-rings-are-regular` · corollary — localisations of regular local rings are regular
- `def-regular-noetherian-ring` · definition — regular noetherian ring
- `lem-flat-local-ascent-of-regularity` · lemma — flat local ascent of regularity
- `lem-polynomial-local-regularity-fibre-step` · lemma — polynomial local regularity fibre step
- `thm-localisation-and-polynomial-extension-of-regular-rings` · theorem — localisation and polynomial extension of regular rings
- `lem-completion-preserves-embedding-dimension` · lemma — completion preserves embedding dimension
- `thm-completion-preserves-regular-local-rings` · theorem — completion preserves regular local rings
- `def-normal-noetherian-ring` · definition — normal noetherian ring
- `def-serre-r-k-and-s-k-conditions` · definition — serre r k and s k conditions
- `cor-regular-local-ring-satisfies-r-one` · corollary — regular local ring satisfies r one
- `cor-regular-local-ring-satisfies-s-two` · corollary — regular local ring satisfies s two
- `lem-normal-domain-implies-r-one` · lemma — normal domain implies r one
- `lem-normal-domain-implies-s-two` · lemma — normal domain implies s two
- `lem-r-one-s-two-intersection-of-height-one-localisations` · lemma — r one s two intersection of height one localisations
- `lem-r-one-s-two-integral-element-membership` · lemma — r one s two integral element membership
- `cor-serre-normality-criterion-two-directions` · corollary — serre normality criterion two directions
- `lem-serre-r-zero-s-one-characterises-reducedness` · lemma — serre r zero s one characterises reducedness
- `def-total-ring-of-fractions` · definition — total ring of fractions
- `lem-reduced-noetherian-total-fractions-and-normal-components` · lemma — reduced noetherian total fractions and normal components
- `lem-depth-two-excludes-finite-punctured-extension` · lemma — depth two excludes finite punctured extension
- `thm-serre-normality-criterion` · theorem — serre normality criterion
- `thm-regular-local-rings-are-normal` · theorem — regular local rings are normal

### `regular-local-rings-and-homological-dimension-examples` — Regular Local Rings and Homological Dimension — Examples (18 item(s))

- `ex-finite-regular-local-base-cohen-macaulay-freeness` · example — Cohen–Macaulayness over a finite regular local base
- `ex-fields-as-regular-local-rings` · example — fields as regular local rings
- `ex-dvrs-as-regular-local-rings` · example — dvrs as regular local rings
- `ex-localised-polynomial-ring-regular` · example — localised polynomial ring regular
- `ex-formal-power-series-ring-regular` · example — formal power series ring regular
- `ex-dual-numbers-not-regular` · example — dual numbers not regular
- `ex-cusp-local-ring-not-regular` · example — cusp local ring not regular
- `ex-betti-numbers-from-a-koszul-resolution` · example — betti numbers from a koszul resolution
- `ex-residue-field-infinite-projective-dimension-singular` · example — residue field infinite projective dimension singular
- `ex-embedding-dimension-versus-dimension-node` · example — embedding dimension versus dimension node
- `ex-associated-graded-polynomial-map-singular-kernel` · example — associated graded polynomial map singular kernel
- `ex-minimal-resolution-unit-cancellation` · example — minimal resolution unit cancellation
- `ex-betti-numbers-residue-field-regular-ring` · example — betti numbers residue field regular ring
- `ex-auslander-buchsbaum-first-syzygy` · example — auslander buchsbaum first syzygy
- `ex-completion-regularity-invariance` · example — completion regularity invariance
- `ex-hypersurface-regularity-at-a-rational-point` · example — hypersurface regularity at a rational point
- `ex-regular-local-ambient-cover-minimal-dimension` · example — regular local ambient cover minimal dimension
- `ex-regular-flat-local-map-with-singular-closed-fibre` · example — regular flat local map with singular closed fibre

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

None. No Step-7 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-33-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-33`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Resolve all assigned documentary findings in this pass. A serial reviewer must
establish ownership before editing an ambiguous record. Report detector or
authority defects explicitly; unchanged retries stop.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.

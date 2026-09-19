# Step 7 adjudication — group **b**, run `phase-2-remaining-27`

You are the group Alpha for batches **9**, **10**, **4**: 5 A/B pair(s), 10 page(s), 188 item(s), 141 open rejection(s) over 141 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-remaining-27-alpha-b-step7-context.json` is what a group Alpha for this group wrote during step 6,
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

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-remaining-27-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 9 | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | A | algebraic-topology | 366.033 | `cw-complexes-and-cellular-homology`, `bocksteins-steenrod-squares-and-cohomology-operations`, `complex-topological-k-theory-and-bott-periodicity`, `spectral-sequences`, `double-complexes-exact-couples-and-convergence` |
| 9 | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | B | algebraic-topology | 366.034 | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence`, `bocksteins-steenrod-squares-and-cohomology-operations-examples`, `complex-topological-k-theory-and-bott-periodicity-examples`, `cup-cap-cross-products-and-cohomology-rings-examples`, `singular-cohomology-and-coefficient-theorems-examples`, `topological-vector-bundles-and-grassmannian-classification-examples` |
| 9 | `chern-and-pontryagin-classes-by-splitting-and-complexification` | A | algebraic-topology | 366.039 | `topological-vector-bundles-and-grassmannian-classification`, `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence`, `leray-hirsch-thom-isomorphism-and-gysin-sequences`, `stiefel-whitney-and-euler-classes-by-universal-constructions` |
| 9 | `chern-and-pontryagin-classes-by-splitting-and-complexification-examples` | B | algebraic-topology | 366.04 | `chern-and-pontryagin-classes-by-splitting-and-complexification` |
| 10 | `stiefel-whitney-and-euler-classes-by-universal-constructions` | A | algebraic-topology | 366.037 | `bocksteins-steenrod-squares-and-cohomology-operations`, `leray-hirsch-thom-isomorphism-and-gysin-sequences` |
| 10 | `stiefel-whitney-and-euler-classes-by-universal-constructions-examples` | B | algebraic-topology | 366.038 | `stiefel-whitney-and-euler-classes-by-universal-constructions` |
| 4 | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | A | functional-analysis | 288.079 | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `complex-power-series-and-analytic-functions`, `contour-integration`, `goursat-and-cauchys-theorem-in-a-convex-domain`, `analyticity-liouville-and-morera`, `the-winding-number-and-the-global-cauchy-theorem` |
| 4 | `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples` | B | functional-analysis | 288.08 | `banach-algebras-spectrum-and-holomorphic-functional-calculus` |
| 4 | `gelfand-theory-and-commutative-c-star-algebras` | A | functional-analysis | 288.081 | `banach-algebras-spectrum-and-holomorphic-functional-calculus`, `tychonoff-embedding-and-stone-cech` |
| 4 | `gelfand-theory-and-commutative-c-star-algebras-examples` | B | functional-analysis | 288.082 | `gelfand-theory-and-commutative-c-star-algebras` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` — Generalized Cohomology and the Atiyah Hirzebruch Spectral Sequence (21 item(s))

- `def-reduced-generalized-cohomology-theory` · definition — Reduced generalized cohomology theory
- `prop-reduced-and-unreduced-generalized-cohomology-theories-correspond` · proposition — Reduced and unreduced generalized cohomology theories correspond
- `def-coefficient-groups-of-a-generalized-cohomology-theory` · definition — Coefficient groups of a generalized cohomology theory
- `def-reduced-generalized-homology-theory` · definition — Reduced generalized homology theory
- `def-coefficient-groups-of-a-generalized-homology-theory` · definition — Coefficient groups of a generalized homology theory
- `prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory` · proposition — Degree-d sphere maps act by multiplication by d in any generalized theory
- `def-skeletal-filtration-for-generalized-cohomology` · definition — Skeletal filtration for generalized cohomology
- `lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients` · lemma — The AHSS E-one page is cellular cochains with theory coefficients
- `lem-the-ahss-first-differential-is-the-cellular-coboundary` · lemma — The AHSS first differential is the cellular coboundary
- `thm-cohomological-atiyah-hirzebruch-spectral-sequence` · theorem — Cohomological Atiyah–Hirzebruch spectral sequence
- `lem-homological-ahss-exact-couple-from-the-skeletal-filtration` · lemma — Homological AHSS exact couple from the skeletal filtration
- `thm-homological-atiyah-hirzebruch-spectral-sequence` · theorem — Homological Atiyah–Hirzebruch spectral sequence
- `lem-edge-maps-of-a-bounded-skeletal-ahss` · lemma — Edge maps of a bounded skeletal AHSS
- `thm-naturality-and-edge-maps-of-the-ahss` · theorem — Naturality and edge maps of the AHSS
- `lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss` · lemma — Pairings of skeletal exact couples induce multiplicative AHSS
- `thm-multiplicative-ahss-for-a-multiplicative-generalized-theory` · theorem — Multiplicative AHSS for a multiplicative generalized theory
- `prop-ahss-collapse-determines-only-the-associated-graded-object` · proposition — AHSS collapse determines only the associated graded object
- `cor-complex-k-theory-ahss` · corollary — Complex K-theory AHSS
- `lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three` · lemma — The first connective complex K-theory Postnikov invariant is integral Sq-three
- `lem-ku-representability-and-skeletal-postnikov-d-three-comparison` · lemma — KU representability and the skeletal–Postnikov d-three comparison
- `thm-first-possible-complex-k-ahss-differential-is-integral-sq-three` · theorem — The first possible complex K-theory AHSS differential is integral Sq-three

### `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` — Generalized Cohomology and the Atiyah Hirzebruch Spectral Sequence — Examples (9 item(s))

- `ex-complex-k-ahss-for-spheres` · example — Complex K-AHSS for spheres
- `ex-complex-k-ahss-for-complex-projective-space` · example — Complex K-AHSS for complex projective space
- `ex-complex-k-ahss-for-a-closed-oriented-surface` · example — Complex K-AHSS for a closed oriented surface
- `lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions` · lemma — The complexified tautological line resolves real-projective K-theory extensions
- `ex-complex-k-ahss-for-real-projective-space` · example — Complex K-AHSS for real projective space
- `lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square` · lemma — Reduction of the integral Bockstein is the first Steenrod square
- `lem-a-bockstein-class-on-rp-two-times-rp-four-has-nonzero-integral-sq-three` · lemma — A Bockstein class on RP-two times RP-four has nonzero integral Sq-three
- `ex-nonzero-d-three-in-the-k-ahss-for-rp-two-times-rp-four` · example — A nonzero d-three in the K-AHSS for RP-two times RP-four
- `rem-finite-cw-ahss-convergence-does-not-automatically-extend-to-infinite-cw-complexes` · remark — Finite-CW AHSS convergence does not automatically extend to infinite CW complexes

### `chern-and-pontryagin-classes-by-splitting-and-complexification` — Chern and Pontryagin Classes by Splitting and Complexification (33 item(s))

- `lem-complex-orientation-of-underlying-real-bundles` · lemma — The complex orientation of the underlying real bundle
- `def-complex-projective-bundle-and-tautological-complex-line` · definition — Complex projective bundle and tautological complex line
- `lem-integral-cohomology-ring-of-complex-projective-space-by-splitting` · lemma — Integral cohomology ring of complex projective space
- `lem-cohomology-ring-of-infinite-complex-projective-space` · lemma — Cohomology ring of infinite complex projective space
- `lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator` · lemma — The complex tautological Euler class restricts to the projective-fiber generator
- `thm-integral-complex-projective-bundle-theorem` · theorem — Integral complex projective bundle theorem
- `def-chern-classes-from-the-projective-bundle-relation` · definition — Chern classes from the projective-bundle relation
- `def-complex-flag-bundle-and-chern-roots` · definition — Complex flag bundle and Chern roots
- `thm-complex-splitting-principle-with-integral-injective-pullback` · theorem — Complex splitting principle with integral injective pullback
- `thm-naturality-normalization-and-whitney-sum-for-chern-classes` · theorem — Naturality, normalization, and Whitney sum for Chern classes
- `thm-uniqueness-of-chern-classes-from-the-splitting-principle` · theorem — Uniqueness of Chern classes from the splitting principle
- `lem-universal-complex-flag-bundle-is-bt-n` · lemma — The universal complex flag bundle is BT-n
- `thm-integral-cohomology-of-bu-n` · theorem — Integral cohomology of BU(n)
- `thm-first-chern-class-classifies-complex-line-bundles` · theorem — The first Chern class classifies complex line bundles
- `prop-first-chern-class-of-tensor-dual-and-conjugate-lines` · proposition — First Chern class of tensor, dual, and conjugate lines
- `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle` · theorem — Top Chern class equals Euler class of the underlying real bundle
- `thm-mod-two-reduction-of-chern-classes` · theorem — Mod-two reduction of Chern classes
- `prop-complexification-is-conjugation-invariant` · proposition — Complexification is conjugation invariant
- `cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion` · corollary — Odd Chern classes of a complexified real bundle are two-torsion
- `def-pontryagin-classes-by-complexification` · definition — Pontryagin classes by complexification
- `thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes` · theorem — Naturality, stability, and mod-two reduction of Pontryagin classes
- `thm-pontryagin-whitney-product-away-from-two` · theorem — Pontryagin Whitney product away from two
- `thm-top-pontryagin-class-is-the-square-of-the-euler-class` · theorem — Top Pontryagin class is the square of the Euler class
- `lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space` · lemma — The universal oriented sphere bundle has BSO(n-1) as total space
- `lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants` · lemma — Rational transfer identifies a finite regular cover with deck invariants
- `thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes` · theorem — Rational cohomology of BO and BSO by Pontryagin and Euler classes
- `lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension` · lemma — Cohomology of a finite CW complex vanishes above its dimension
- `def-chern-character-of-a-complex-vector-bundle` · definition — Chern character of a complex vector bundle
- `thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero` · theorem — Chern character is a natural ring homomorphism on K-zero
- `def-graded-chern-character-by-suspension-and-bott-periodicity` · definition — Graded Chern character by suspension and Bott periodicity
- `lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations` · lemma — The graded Chern character respects relative maps and skeletal filtrations
- `lem-chern-character-induces-the-rational-isomorphism-on-ahss-e-two` · lemma — Chern character induces the rational isomorphism on AHSS E-two
- `thm-rational-chern-character-isomorphism-for-finite-cw-complexes` · theorem — Rational Chern character isomorphism for finite CW complexes

### `chern-and-pontryagin-classes-by-splitting-and-complexification-examples` — Chern and Pontryagin Classes by Splitting and Complexification — Examples (7 item(s))

- `ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space` · example — Chern class of tautological and hyperplane lines on complex projective space
- `ex-chern-classes-of-a-sum-of-universal-complex-lines` · example — Chern classes of a sum of universal complex lines
- `ex-complex-line-bundles-over-the-two-sphere-by-clutching-degree` · example — Complex line bundles over the two-sphere by clutching degree
- `ex-realification-of-a-complex-line-compares-c-one-w-two-and-euler` · example — Realification of a complex line compares c-one, w-two, and Euler
- `ex-stability-and-rank-cutoff-under-adding-a-trivial-summand` · example — Stability and rank cutoff under adding a trivial summand
- `lem-integral-powers-of-the-complexified-universal-real-line` · lemma — Integral powers of the complexified universal real line
- `cex-integral-total-pontryagin-multiplicativity-cannot-ignore-two-torsion` · counterexample — Integral total Pontryagin multiplicativity cannot ignore two-torsion

### `stiefel-whitney-and-euler-classes-by-universal-constructions` — Stiefel Whitney and Euler Classes by Universal Constructions (21 item(s))

- `def-characteristic-class-as-a-universal-natural-bundle-class` · definition — Characteristic class as a universal natural bundle class
- `lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type` · lemma — Totals of numerable bundles with compact fibre are paracompact Hausdorff of CW type
- `def-real-projective-bundle-and-tautological-line` · definition — Real projective bundle and tautological line
- `def-tautological-degree-one-class-on-a-real-projective-bundle` · definition — Tautological degree-one class on a real projective bundle
- `lem-tautological-degree-one-class-is-well-defined-and-fiber-generating` · lemma — The tautological degree-one class is well defined and fiber generating
- `thm-mod-two-real-projective-bundle-theorem` · theorem — Mod-two real projective bundle theorem
- `def-stiefel-whitney-classes-from-the-projective-bundle-relation` · definition — Stiefel–Whitney classes from the projective-bundle relation
- `thm-naturality-of-stiefel-whitney-classes` · theorem — Naturality of Stiefel–Whitney classes
- `def-real-flag-bundle-and-stiefel-whitney-roots` · definition — Real flag bundle and Stiefel–Whitney roots
- `thm-real-splitting-principle-with-mod-two-injective-pullback` · theorem — Real splitting principle with mod-two injective pullback
- `thm-whitney-sum-formula-for-stiefel-whitney-classes` · theorem — Whitney sum formula for Stiefel–Whitney classes
- `thm-uniqueness-of-stiefel-whitney-classes-from-normalization-naturality-and-sum` · theorem — Uniqueness of Stiefel–Whitney classes from normalization, naturality, and sum
- `thm-mod-two-cohomology-of-bo-n` · theorem — Mod-two cohomology of BO(n)
- `prop-first-stiefel-whitney-class-classifies-orientability` · proposition — The first Stiefel–Whitney class classifies orientability
- `def-euler-class-by-zero-section-pullback-of-the-thom-class` · definition — Euler class by zero-section pullback of the Thom class
- `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes` · theorem — Naturality, orientation sign, and Whitney product for Euler classes
- `thm-mod-two-euler-class-is-the-top-stiefel-whitney-class` · theorem — The mod-two Euler class is the top Stiefel–Whitney class
- `prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish` · proposition — A nowhere-zero section forces the Euler class to vanish
- `prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion` · proposition — The Euler class of an oriented odd-rank bundle is two-torsion
- `thm-thom-identity-for-stiefel-whitney-classes` · theorem — Thom identity for Stiefel–Whitney classes
- `lem-pi-three-so-three-generated-by-the-quaternion-double-cover` · lemma — The quaternion double cover generates the third homotopy group of SO(3)

### `stiefel-whitney-and-euler-classes-by-universal-constructions-examples` — Stiefel Whitney and Euler Classes by Universal Constructions — Examples (6 item(s))

- `ex-stiefel-whitney-class-of-the-universal-real-line` · example — Stiefel–Whitney class of the universal real line
- `ex-total-stiefel-whitney-class-of-a-sum-of-universal-lines` · example — Total Stiefel–Whitney class of a sum of universal lines
- `ex-euler-class-of-the-universal-oriented-two-plane` · example — Euler class of the universal oriented two-plane
- `ex-euler-class-of-zero-and-trivial-positive-rank-bundles` · example — Euler class of zero and trivial positive-rank bundles
- `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section` · counterexample — Zero Euler class does not in general imply a nowhere-zero section
- `cex-odd-rank-euler-class-need-not-vanish-with-two-torsion-coefficients` · counterexample — An odd-rank Euler class need not vanish in the presence of two-torsion

### `banach-algebras-spectrum-and-holomorphic-functional-calculus` — Banach Algebras Spectrum and Holomorphic Functional Calculus (31 item(s))

- `def-unital-banach-algebra` · definition — Unital banach algebra
- `def-invertible-element-and-general-linear-group-of-a-banach-algebra` · definition — Invertible element and general linear group of a banach algebra
- `lem-neumann-series` · lemma — Neumann series
- `thm-invertible-group-is-open-and-inversion-is-continuous` · theorem — Invertible group is open and inversion is continuous
- `def-spectrum-and-resolvent-set-in-a-banach-algebra` · definition — Spectrum and resolvent set in a banach algebra
- `lem-resolvent-identity` · lemma — Resolvent identity
- `thm-resolvent-is-banach-valued-holomorphic` · theorem — Resolvent is banach valued holomorphic
- `thm-spectrum-is-nonempty-compact-and-norm-bounded` · theorem — Spectrum is nonempty compact and norm bounded
- `def-spectral-radius` · definition — Spectral radius
- `thm-polynomial-spectral-mapping` · theorem — Polynomial spectral mapping
- `lem-submultiplicative-root-limit` · lemma — Submultiplicative root limit
- `thm-spectral-radius-formula` · theorem — Spectral radius formula
- `lem-canonical-banach-complexification-of-a-real-banach-space` · lemma — Canonical Banach complexification of a real Banach space
- `def-complexification-and-spectrum-of-a-real-operator` · definition — Complexification and spectrum of a real operator
- `thm-gelfand-mazur` · theorem — Gelfand mazur
- `def-banach-algebra-valued-contour-integral` · definition — Banach algebra valued contour integral
- `lem-contour-integral-commutes-with-bounded-linear-maps` · lemma — Contour integral commutes with bounded linear maps
- `lem-banach-valued-cauchy-integral-vanishes` · lemma — Banach valued cauchy integral vanishes
- `lem-admissible-cycle-around-a-compact-plane-set` · lemma — Admissible cycle around a compact plane set
- `def-holomorphic-functional-calculus` · definition — Holomorphic functional calculus
- `lem-holomorphic-functional-calculus-is-contour-independent` · lemma — Holomorphic functional calculus is contour independent
- `thm-holomorphic-functional-calculus-homomorphism` · theorem — Holomorphic functional calculus homomorphism
- `thm-holomorphic-spectral-mapping` · theorem — Holomorphic spectral mapping
- `def-riesz-spectral-projection` · definition — Riesz spectral projection
- `thm-riesz-spectral-projection-properties` · theorem — Riesz spectral projection properties
- `def-calkin-algebra` · definition — Calkin algebra
- `cor-atkinson-in-calkin-algebra-language` · corollary — Atkinson in calkin algebra language
- `def-point-continuous-and-residual-spectrum` · definition — Point continuous and residual spectrum
- `def-approximate-point-and-compression-spectrum` · definition — Approximate point and compression spectrum
- `lem-relations-among-the-five-spectral-parts` · lemma — Relations among the five spectral parts
- `thm-boundary-of-spectrum-lies-in-approximate-point-spectrum` · theorem — Boundary of spectrum lies in approximate point spectrum

### `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples` — Banach Algebras Spectrum and Holomorphic Functional Calculus — Examples (9 item(s))

- `ex-continuous-functions-form-a-commutative-banach-algebra` · example — Continuous functions form a commutative banach algebra
- `ex-bounded-operators-form-a-noncommutative-banach-algebra` · example — Bounded operators form a noncommutative banach algebra
- `ex-spectrum-in-a-finite-dimensional-matrix-algebra` · example — Spectrum in a finite dimensional matrix algebra
- `ex-spectrum-of-a-multiplication-operator` · example — Spectrum of a multiplication operator
- `ex-spectrum-of-the-unilateral-shift` · example — Spectrum of the unilateral shift
- `cex-norm-need-not-equal-spectral-radius` · counterexample — Norm need not equal spectral radius
- `cex-spectrum-can-shrink-in-a-larger-banach-algebra` · counterexample — Spectrum can shrink in a larger banach algebra
- `ex-unitization-of-a-nonunital-banach-algebra` · example — Unitization of a nonunital banach algebra
- `ex-riesz-projection-for-a-matrix-with-separated-spectrum` · example — Riesz projection for a matrix with separated spectrum

### `gelfand-theory-and-commutative-c-star-algebras` — Gelfand Theory and Commutative C Star Algebras (37 item(s))

- `def-character-and-maximal-ideal-space` · definition — Character and maximal ideal space
- `thm-characters-on-a-unital-banach-algebra-are-continuous` · theorem — Characters on a unital banach algebra are continuous
- `lem-closed-ideal-quotient-is-a-banach-algebra` · lemma — Closed ideal quotient is a banach algebra
- `thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra` · theorem — Maximal ideals and characters of a commutative banach algebra
- `thm-spectrum-as-character-values` · theorem — Spectrum as character values
- `thm-maximal-ideal-space-is-compact-hausdorff` · theorem — Maximal ideal space is compact hausdorff
- `def-gelfand-transform` · definition — Gelfand transform
- `thm-gelfand-transform-is-a-contractive-unital-homomorphism` · theorem — Gelfand transform is a contractive unital homomorphism
- `def-jacobson-radical-and-semisimple-commutative-banach-algebra` · definition — Jacobson radical and semisimple commutative banach algebra
- `thm-kernel-of-the-gelfand-transform-is-the-radical` · theorem — Kernel of the gelfand transform is the radical
- `def-c-star-algebra` · definition — C star algebra
- `def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra` · definition — Self adjoint positive unitary and normal elements of a c star algebra
- `lem-c-star-spectral-radius-equals-norm-for-normal-elements` · lemma — C star spectral radius equals norm for normal elements
- `lem-characters-on-a-commutative-c-star-algebra-preserve-star` · lemma — Characters on a commutative c star algebra preserve star
- `thm-commutative-gelfand-naimark` · theorem — Commutative gelfand naimark
- `lem-characters-of-continuous-functions-are-evaluations` · lemma — Characters of continuous functions are evaluations
- `thm-commutative-gelfand-duality` · theorem — Commutative gelfand duality
- `lem-zero-free-entire-function-of-exponential-type-is-an-exponential` · lemma — Zero free entire function of exponential type is an exponential
- `thm-gleason-kahane-zelazko` · theorem — Gleason kahane zelazko
- `lem-extreme-points-of-the-dual-ball-of-c-of-k` · lemma — Extreme points of the dual ball of c of k
- `thm-banach-stone` · theorem — Banach stone
- `def-zero-set-filter-and-zero-set-ultrafilter` · definition — Zero set filter and zero set ultrafilter
- `lem-maximal-ideals-of-c-of-x-and-zero-set-ultrafilters` · lemma — Maximal ideals of c of x and zero set ultrafilters
- `lem-zero-set-ultrafilters-and-stone-cech-points` · lemma — Zero set ultrafilters and stone cech points
- `thm-gelfand-kolmogorov-for-rings-of-continuous-functions` · theorem — Gelfand kolmogorov for rings of continuous functions
- `def-boolean-algebra-and-boolean-ultrafilter-for-stone-duality` · definition — Boolean algebra and boolean ultrafilter for stone duality
- `def-stone-space-and-clopen-algebra` · definition — Stone space and clopen algebra
- `lem-boolean-ultrafilter-extension-from-compact-products` · lemma — Boolean ultrafilter extension from compact products
- `thm-stone-representation-for-boolean-algebras` · theorem — Stone representation for boolean algebras
- `thm-stone-duality` · theorem — Stone duality
- `def-algebraic-unitization-of-a-star-algebra` · definition — Algebraic unitization of a star algebra
- `thm-minimal-c-star-unitization` · theorem — Minimal c star unitization
- `thm-character-space-of-the-unitization-is-one-point-compactification` · theorem — Character space of the unitization is one point compactification
- `thm-nonunital-commutative-gelfand-naimark` · theorem — Nonunital commutative gelfand naimark
- `def-approximate-unit-and-proper-c-star-morphism` · definition — Approximate unit and proper c star morphism
- `thm-every-commutative-c-star-algebra-has-an-approximate-unit` · theorem — Every commutative c star algebra has an approximate unit
- `thm-locally-compact-gelfand-duality` · theorem — Locally compact gelfand duality

### `gelfand-theory-and-commutative-c-star-algebras-examples` — Gelfand Theory and Commutative C Star Algebras — Examples (14 item(s))

- `ex-maximal-ideal-space-of-c-of-k` · example — Maximal ideal space of c of k
- `ex-maximal-ideal-space-of-the-disc-algebra` · example — Maximal ideal space of the disc algebra
- `ex-gelfand-transform-of-ell-one-of-z` · example — Gelfand transform of ell one of z
- `cex-gelfand-transform-of-a-banach-algebra-need-not-be-isometric` · counterexample — Gelfand transform of a banach algebra need not be isometric
- `ex-banach-stone-weighted-composition-isometries` · example — Banach stone weighted composition isometries
- `ex-gelfand-kolmogorov-recovers-beta-x-not-x` · example — Gelfand kolmogorov recovers beta x not x
- `ex-stone-duality-for-a-power-set-algebra` · example — Stone duality for a power set algebra
- `ex-stone-duality-for-a-finite-boolean-algebra` · example — Stone duality for a finite boolean algebra
- `rem-nagata-cp-theorem-remains-topological` · remark — Nagata cp theorem remains topological
- `rem-gerlits-nagy-remains-selection-principle-theory` · remark — Gerlits nagy remains selection principle theory
- `rem-linear-dugundji-extension-remains-topological` · remark — Linear dugundji extension remains topological
- `ex-c-zero-of-a-locally-compact-space` · example — C zero of a locally compact space
- `ex-unitization-corresponds-to-one-point-compactification` · example — Unitization corresponds to one point compactification
- `rem-wiener-lemma-is-developed-on-the-fourier-analysis-track` · remark — Wiener lemma is developed on the fourier analysis track

## Your seams

Your pages depend on another group's:

- `banach-algebras-spectrum-and-holomorphic-functional-calculus` requires `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` (group e, batch 3)

Another group's pages depend on yours:

- `continuous-functional-calculus-for-self-adjoint-and-normal-operators` (group c) requires your `gelfand-theory-and-commutative-c-star-algebras`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

4 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-6a84568dfbc24ea4cad866ef · `thm-cohomological-atiyah-hirzebruch-spectral-sequence`** (from group b, presentation) — The statement includes naturality in X for cellular maps and in the theory for morphisms, but the proof only asserts this in step 5.1 ("naturality is inherited from the naturality of the pair long exact sequences and of the exact-couple construction"); the map-of-exact-couples proposition is not in the deps list, and the page proves the naturality statement only in the separate item thm-naturality-and-edge-maps-of-the-ahss. A reader must supply that cross-reference to close the naturality clause as stated.
- **s8a-f2a78c8bc633c71a1059882e · `lem-the-ahss-first-differential-is-the-cellular-coboundary`** (from group b, gap-a-reader-closes) — The (τ,σ)-component of d_1 is asserted to be multiplication by the degree of the composite "attaching map of e^{p+1} followed by collapse onto the σ-sphere" (steps 1.2-2.1), matching the incidence number [e^{p+1}:e^p] exactly; this normalization depends on the library's suspension convention (sphere coordinate first, def-reduced-generalized-cohomology-theory) and on the connecting maps of the pair long exact sequences, and the identification is made by appeal to the cited source diagram rather than recomputed from the local definitions. The claim d_1 = δ (rather than −δ) is the point to check against those conventions.
- **s8a-df925d6241e808bc3f990a7a · `lem-ku-representability-and-skeletal-postnikov-d-three-comparison`** (from group b, gap-a-reader-closes) — Step 2.1 concludes that the E_3 source, target and d_3 of the ku- and KU-skeletal AHSSs agree, from an E_1-level coefficient isomorphism plus "naturality for theory morphisms". This presupposes that ku's representing spectrum gives a reduced generalized cohomology theory in the sense of def-reduced-generalized-cohomology-theory (so that the AHSS theorem applies and E_2 computes H^p(X;coefficient ring) in the translated rows); no dependency listed supplies that the spectrum ku (rather than the bundle model of K-theory) satisfies those axioms, and the proof only displays the E_1 coefficient comparison.
- **s8a-69eea3986b04808345861d89 · `lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three`** (from group b, gap-a-reader-closes) — The load-bearing inputs are recorded source computations rather than local proofs: H^3(H)≅Z/2 generated by δ_2Sq^2, the nonvanishing δ_2Sq^2≠0 in H^6(H,3), H^6(SU)=0, and the Bott-cofiber boundary k_*f^3=β_2Sq^2f^0 (F5/F6, explicitly "not assertions reproved in this library"). The local proof adds only the Z/2 dichotomy. Since lem-ku-representability... and thm-first-possible-complex-k-ahss-differential... consume this exact normalization, the source-read status is load-bearing for the K-AHSS d_3 formula.

Append one owning-group disposition per warning to `research/phase-2-remaining-27-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-gelfand-transform-of-a-banach-algebra-need-not-be-isometric` | `gelfand-theory-and-commutative-c-star-algebras-examples` | gpt-5.6-terra | `82fc6467304aabb67151e38fa0508fdb6f252d20aa79d318cfabf589ed5a4d84` |
| `cex-integral-total-pontryagin-multiplicativity-cannot-ignore-two-torsion` | `chern-and-pontryagin-classes-by-splitting-and-complexification-examples` | gpt-5.6-terra | `b7ed65f0b1ccae322c842d8acaa055b97830a1cf5acb2082bbc571e3b27125d5` |
| `cex-norm-need-not-equal-spectral-radius` | `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples` | gpt-5.6-terra | `efec6cfa7cbeaabf361d3e794f6b525183df6f107095cdcb42175728075de9b6` |
| `cex-spectrum-can-shrink-in-a-larger-banach-algebra` | `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples` | gpt-5.6-terra | `4a1d1200c562eaffe70d8430c840a4ffbc3ff788e1fa5c39e9aa75bf8a58ae8a` |
| `cor-complex-k-theory-ahss` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `645955af38dc5f21a1289a2351b36404ad146008d347c1270116eda357a304e0` |
| `def-algebraic-unitization-of-a-star-algebra` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `19cfd18ad1aa3f998bda7f628ebf04870d8e772132fcc183a866f05afe9ba191` |
| `def-approximate-point-and-compression-spectrum` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `38f8e167940dd5d344f831be9c3fbf17ecce36acf8db1230bedfebf60a2828a2` |
| `def-approximate-unit-and-proper-c-star-morphism` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `95f24b49c991171755c9d59a295b5223535faa8312d19e552dca86b3cdad3143` |
| `def-banach-algebra-valued-contour-integral` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `4d9b860c23448c209694611d99c9eccd150ad7aa73a350645b878678cbec23c2` |
| `def-c-star-algebra` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `3074c53559bf321b8d284e372f1f1e3ff00c5f41c49e1e129fa4f80159b4cd2d` |
| `def-calkin-algebra` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `5ef802744353e7b1be77f00854f70812b402023ce6440c1f1c9f1fd5616ce533` |
| `def-character-and-maximal-ideal-space` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `9020316635de233c884daceee23cb7ccb7374c993df81162683bda2ddc378fb3` |
| `def-characteristic-class-as-a-universal-natural-bundle-class` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `f63aeb22677c8ffad4a86bb5a04e0e459998e4b5e94c9d0a7b4e1142cd20620d` |
| `def-chern-character-of-a-complex-vector-bundle` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `cd51c2a81ef22442c8c0b9326144adf89da75240246089eb542ba732736fdcfd` |
| `def-coefficient-groups-of-a-generalized-cohomology-theory` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `ba45aa845b82455d18601e92c9129e45d2a97429b9bc2bc08a14f33a7375d68b` |
| `def-complex-flag-bundle-and-chern-roots` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `036cdb49de07dcc2fd0bea616e22f43e197313ad5a160809b370c9b7199c383d` |
| `def-complex-projective-bundle-and-tautological-complex-line` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `1212dc50b1c6870a8b905182dd9eaeec8c71fe6d399b830639150f30d54a65bc` |
| `def-complexification-and-spectrum-of-a-real-operator` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `3255ba3639dec5602653f52d7b773d32adfc21a7b21cf871c04ad880c516cf29` |
| `def-gelfand-transform` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `f47ff6157932cdc4ef3445028fa6ffdf5030973bcc59d1ad30944ab3f3af901c` |
| `def-graded-chern-character-by-suspension-and-bott-periodicity` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `729bd674c4e669a0ffad24f0934da355c20ca5a1a07ef5dda481cbd16de925c4` |
| `def-invertible-element-and-general-linear-group-of-a-banach-algebra` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `d307be495a64a59ae026d1f1f8999521da6e22ec33f0b60d93ee552dc000009e` |
| `def-jacobson-radical-and-semisimple-commutative-banach-algebra` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `c75c06fcb530e2f31c861d7c40e707991cf8100ca3c506e2d1f6b6220c655862` |
| `def-point-continuous-and-residual-spectrum` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `ca34f76409c5bf29e92edc0fe7f432bbdc6113cdfd9059905a29f702b2265e91` |
| `def-real-flag-bundle-and-stiefel-whitney-roots` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `16b4534186308d5692840a1928808b702a439edfc6fc25fa2b8f25043794bfc7` |
| `def-real-projective-bundle-and-tautological-line` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `ce936f3949842df8147af5a07e339b05109f109913dcc8c784abf826b19505fb` |
| `def-reduced-generalized-cohomology-theory` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `728cfaf44179fa8ed004f25b81cf89d96f7fa8a1c72f2929e88a81355cd901d3` |
| `def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `7d9fb6c6995384dd230f0afe063841d9e0ecd0059a4da748b8102036f1f0b6c5` |
| `def-spectral-radius` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `905ab3a8d4cdc017c6d2d9bb79603882f907f36ac67bb4b3042eeaef8d6ea4b6` |
| `def-spectrum-and-resolvent-set-in-a-banach-algebra` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `54eb294d3c3877902c1a901e7bbecbab23e7dee7119a41fb3e815608f882b6d3` |
| `def-stone-space-and-clopen-algebra` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `2d51daa2551ef52270ede921aae53a860d75a6f59758b16be73b311664d723c7` |
| `def-tautological-degree-one-class-on-a-real-projective-bundle` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `4fd3f9dd93646ee50259ba0efd72fb0ad242e6319492e141144e7c665b27f4da` |
| `def-unital-banach-algebra` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `eaaece3149053a0674e40059bc6fdcc35b802b86e49dd28cdcc5e7e70d298280` |
| `def-zero-set-filter-and-zero-set-ultrafilter` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `a9255875c0a81f08774b595540496e852114865b5b80d366dfd0b1ac9317aec5` |
| `ex-banach-stone-weighted-composition-isometries` | `gelfand-theory-and-commutative-c-star-algebras-examples` | gpt-5.6-terra | `4b148335d381399680ecd5ccd37a6222e21a4792f68579e8a8cbc9a3a76f2053` |
| `ex-bounded-operators-form-a-noncommutative-banach-algebra` | `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples` | gpt-5.6-terra | `fadcc08a43deaba78a78f6ea9ad22f8fbee9cea8e058ec927797338d3783682b` |
| `ex-c-zero-of-a-locally-compact-space` | `gelfand-theory-and-commutative-c-star-algebras-examples` | gpt-5.6-terra | `58be1be676bb56ce223e6e88cb5869a85c8e3bfe943797101029d53e370fbac0` |
| `ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space` | `chern-and-pontryagin-classes-by-splitting-and-complexification-examples` | gpt-5.6-terra | `4b5ef0e5ef4d34e4f36c73d08015fa219fdc5da1735770c4e0cf01aa30435d64` |
| `ex-chern-classes-of-a-sum-of-universal-complex-lines` | `chern-and-pontryagin-classes-by-splitting-and-complexification-examples` | gpt-5.6-terra | `d296915dbf97268fa2a74c9cfc0c09717fbeb8242f01e7de06c2157958125e7d` |
| `ex-complex-k-ahss-for-complex-projective-space` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | gpt-5.6-terra | `8edddd6f4d403723d95dc6ea4d990fcc1051519d46179b78fcd5bdc4664aeb3c` |
| `ex-complex-k-ahss-for-real-projective-space` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | gpt-5.6-terra | `2447932e015f69d38053ff1b34de44d79b0571e7b98da0bb515cf69f9859bac3` |
| `ex-complex-line-bundles-over-the-two-sphere-by-clutching-degree` | `chern-and-pontryagin-classes-by-splitting-and-complexification-examples` | gpt-5.6-terra | `76aa4dc3b28e68e3415573560627a99c5b4a41e74669c93e5174b392f22303a0` |
| `ex-continuous-functions-form-a-commutative-banach-algebra` | `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples` | gpt-5.6-terra | `a284af15247005e6ac5f76561fa0c09613d6f0d074cfc6549f91dc8877d9845c` |
| `ex-euler-class-of-the-universal-oriented-two-plane` | `stiefel-whitney-and-euler-classes-by-universal-constructions-examples` | gpt-5.6-terra | `6749a18720c0531f2b59b2da0e2b911cfc7780d2fa8676d6bb9ee073d1d3ea72` |
| `ex-euler-class-of-zero-and-trivial-positive-rank-bundles` | `stiefel-whitney-and-euler-classes-by-universal-constructions-examples` | gpt-5.6-terra | `25d83089afcb558b13fe47375049d1d062f5bbd48185aea0d1fc59939f268db6` |
| `ex-gelfand-transform-of-ell-one-of-z` | `gelfand-theory-and-commutative-c-star-algebras-examples` | gpt-5.6-terra | `d30b34c3071ec36f9d3b66f1e5cf89e99a07f17e8ebaf1b5617b28d91de43dce` |
| `ex-maximal-ideal-space-of-the-disc-algebra` | `gelfand-theory-and-commutative-c-star-algebras-examples` | gpt-5.6-terra | `77246fb2640921c520a146658f748886793c7a8277c9bba57f56fcbb81b07b78` |
| `ex-riesz-projection-for-a-matrix-with-separated-spectrum` | `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples` | gpt-5.6-terra | `cdce435a96b09e956d7fb98fecb06e8d42e2075acd5ee761e80c464969f8e9f8` |
| `ex-spectrum-of-a-multiplication-operator` | `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples` | gpt-5.6-terra | `ef86278004312074284b8a9a7e73606f70345c9cb847f18ceabaa719290ef046` |
| `ex-spectrum-of-the-unilateral-shift` | `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples` | gpt-5.6-terra | `0be2b66081fda0332d5d092b6a0367b5aa35444f4d5e28369989ec95a3ba6fd5` |
| `ex-stiefel-whitney-class-of-the-universal-real-line` | `stiefel-whitney-and-euler-classes-by-universal-constructions-examples` | gpt-5.6-terra | `79cbabacfe0c5837273a47a957fb3f55a3c07e36f8e84a14685b6d74e02ad743` |
| `ex-stone-duality-for-a-finite-boolean-algebra` | `gelfand-theory-and-commutative-c-star-algebras-examples` | gpt-5.6-terra | `606e1de73b45f830b97253a1e354bffec51459da3fc3f8a862d64ec0b3c764f2` |
| `ex-stone-duality-for-a-power-set-algebra` | `gelfand-theory-and-commutative-c-star-algebras-examples` | gpt-5.6-terra | `595ec662c5c0c6484d47926fe5c4fad8ee45cfd3de1b6a80a8e716c946eb821a` |
| `ex-total-stiefel-whitney-class-of-a-sum-of-universal-lines` | `stiefel-whitney-and-euler-classes-by-universal-constructions-examples` | gpt-5.6-terra | `f9700feff7b90be4427eb2b9d5065c12453f4c04b058544648e9934af47e8eb1` |
| `ex-unitization-corresponds-to-one-point-compactification` | `gelfand-theory-and-commutative-c-star-algebras-examples` | gpt-5.6-terra | `069ec93654682e0e8c58c0e211b1ddf7cc02e3786dddc85be2d17eb4a76e2f35` |
| `ex-unitization-of-a-nonunital-banach-algebra` | `banach-algebras-spectrum-and-holomorphic-functional-calculus-examples` | gpt-5.6-terra | `98639cbecdaf1198ef430a99164db35ee088e5b8077c2ed76c3fcd688e08ab4c` |
| `lem-a-bockstein-class-on-rp-two-times-rp-four-has-nonzero-integral-sq-three` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | gpt-5.6-terra | `0bf5f4e2507f893fd1f410d1bfbf672121abe80ef260724fb0662c8df947bb5a` |
| `lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `41abd5b400c591a998550a9a6d1947bd0c5540a38c565b5d6cde69f10d43ff77` |
| `lem-banach-valued-cauchy-integral-vanishes` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `8af4759a71ab2a0482a639c8a14c10f746c83fbe33a41f19b2a918a490126d5c` |
| `lem-boolean-ultrafilter-extension-from-compact-products` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `e9aee6c3b2e82577d11ba29998d55f388e60b4e27ad374b64fda4b78d257981b` |
| `lem-canonical-banach-complexification-of-a-real-banach-space` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `e47c0edb5e4cb9e3f626ed5e1878b28dbb5c9b0b723a07f80ca38babe56f60bc` |
| `lem-characters-of-continuous-functions-are-evaluations` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `b79792cf7ab5a8973fd52bdad3aac9e5447d747243f8127c83d6a1421d640f86` |
| `lem-characters-on-a-commutative-c-star-algebra-preserve-star` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `7a2e80c37a447b50126111152af6980131144243cfec5ad79f8eed309b81feee` |
| `lem-chern-character-induces-the-rational-isomorphism-on-ahss-e-two` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `0878e9c2b4def6d109b126930491f7eaa8c0f5dd226db7685e240c1bed04b38a` |
| `lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `6082fadf681be40dbd48022a382b845a923abaa48ae9a94a2d3378de38c3336b` |
| `lem-cohomology-ring-of-infinite-complex-projective-space` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `c2ac67a28d109d92943516b071f270fa7f62cd34d87b6336653982d725fc7bf6` |
| `lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `93e266520ce6dcec07ff8fad21aec377286ff17404efd3e668dbd8581fb9f8e7` |
| `lem-complex-orientation-of-underlying-real-bundles` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `512a4f38574e65beb6665ddca7567f07466f1f39a5eb49ca85c50ee3004f0f1a` |
| `lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `14ef673c3e3257798e727bc0c814596a41217b553ebe8f8096c85bf6b553eb12` |
| `lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | gpt-5.6-terra | `19d595a2ff57da1197aa1b051b03c7d23e0394abdb6c657193f35f8f9ab0096c` |
| `lem-contour-integral-commutes-with-bounded-linear-maps` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `2cf3e0f0e9bf5553c3b18968cf30b481aa712afaa5de8bdce0687eda45962384` |
| `lem-edge-maps-of-a-bounded-skeletal-ahss` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `e4b9fe497efbe61a7402cfef1898962365fa325232358291bddad0ddded64355` |
| `lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `32ff9dd1484686433be100e57880f5cfa935035050f392f7ce7bd6ad8a936aa5` |
| `lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `49c9475d2aab8bab255f180900732bfce181bfff0cb45454d4fe5ba7e93c766e` |
| `lem-holomorphic-functional-calculus-is-contour-independent` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `4dcdde06b280ae37190d9aa8267ee6fcf357eb713b81c94993e1c421a3777f78` |
| `lem-homological-ahss-exact-couple-from-the-skeletal-filtration` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `c67eaeca8c5ba03d759f57f187bed7aa7cf417a1862ff61bfa44a248e46b0d6c` |
| `lem-integral-cohomology-ring-of-complex-projective-space-by-splitting` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `3d6abde76965b2d8afa7eff200961639e372632448fa30ae2752319698f60459` |
| `lem-integral-powers-of-the-complexified-universal-real-line` | `chern-and-pontryagin-classes-by-splitting-and-complexification-examples` | gpt-5.6-terra | `5367a26eb0c9fec0a2aa70fec7cf4a93e719329cd819ba7e205f0ecaefc31da4` |
| `lem-ku-representability-and-skeletal-postnikov-d-three-comparison` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `6fbbce031984936d0d13ce49daec76e458f8f02d1785c7f5045bd1cd5624573a` |
| `lem-neumann-series` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `94ad21d4a19bbd7bcf662f33ef6118cf3fb2308c1645fb1f9aeacb3fff59aff1` |
| `lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `9c4e7b0697f46d0d5eaa58f8430066913fc3d8f75a6d0f11cc6477d772682a2a` |
| `lem-pi-three-so-three-generated-by-the-quaternion-double-cover` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `2b75ffee3fb4735ac2d54b2eb42e4b8525e4c851d6b09554f0f4bb2060c455de` |
| `lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `1e7fadd9486ee52e7ad68c6e0f5a3658faa7041e909c47998f35138c29c98b1b` |
| `lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | gpt-5.6-terra | `7a6897a0ef7b09c1210699a6eeef5e42e98695cab0b49162f1475cff87a466e3` |
| `lem-submultiplicative-root-limit` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `8783359d06b059a8919853722048013d83396952f0f4fbf5da6383174e3d69cd` |
| `lem-tautological-degree-one-class-is-well-defined-and-fiber-generating` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `b8e19ca4b796a3c51c18b32e018b4bc97aee922ba26e5f41c002c953398b672e` |
| `lem-the-ahss-first-differential-is-the-cellular-coboundary` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `fbf64e9377c74dad6f5a5ecde5597d8c37cbae1bf5a18b8844d96be2b47302a8` |
| `lem-universal-complex-flag-bundle-is-bt-n` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `fbdf519c4ef3ee48207802ebc417fd6909c0c5501c960ada75a15745244411ac` |
| `lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `45542e75f3a843f2bb131d003355bc22ad988ddcb59868484fa31cdb667552e5` |
| `lem-zero-free-entire-function-of-exponential-type-is-an-exponential` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `8031bd53f13e6016ab86de9eac468a5277748ca3a015cc53693c54cf72204870` |
| `lem-zero-set-ultrafilters-and-stone-cech-points` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `54e0d01e34456cb42a0fa0808b9a5256d5045c540ae0bbd47c6258030835c01b` |
| `prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `55fe6b168552b391a92ded0bfe17152bddea516f9c922b611296e3eea04df7b5` |
| `prop-ahss-collapse-determines-only-the-associated-graded-object` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `5886395074b1084c7770d4bae7178ad4fa66dda38875101586bd99fd957894b1` |
| `prop-complexification-is-conjugation-invariant` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `632ac5c488f1a76daa4a80986df21326dc93e4f8ae926843c23255eeabb7fbc2` |
| `prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `3cf5f0637e45afffc3bf02cf2273e0203a97d8757aa500eade9863441403710d` |
| `prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `44fc161cdafcaf717893d9ef580b813c2435115218e8492b79366aa9edaa8eaf` |
| `prop-first-chern-class-of-tensor-dual-and-conjugate-lines` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `c1e69bec281ccf0c6f80fe7827c000d7812cc6a7b906355bdd864d2b05b7f4b6` |
| `prop-first-stiefel-whitney-class-classifies-orientability` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `26459a11861404e1b959d3da4e98d6c43a42a2dc45f020e66ea6abbd78c3ff21` |
| `prop-reduced-and-unreduced-generalized-cohomology-theories-correspond` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `7811adaf3e177bc9daf14782e3bbf00826c2325ed4308874ac8b65b2ef42f726` |
| `rem-finite-cw-ahss-convergence-does-not-automatically-extend-to-infinite-cw-complexes` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | gpt-5.6-terra | `5974d8d6ba50b6b12878f644e497d82b50a9eebb7d74c44014dc4c17898cfc09` |
| `rem-nagata-cp-theorem-remains-topological` | `gelfand-theory-and-commutative-c-star-algebras-examples` | gpt-5.6-terra | `01cc68210e030e5c0133ebf12493c911a35f639638dddb4c4e96ac2f64b64900` |
| `thm-banach-stone` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `562d836727ef6cbf31b94a5feba94bd05c202c0c7386aef3114128054164994b` |
| `thm-boundary-of-spectrum-lies-in-approximate-point-spectrum` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `096c8289685e8434619ec0e25e599d2f107e8d197db41ec023deb03e3a5bbf6d` |
| `thm-character-space-of-the-unitization-is-one-point-compactification` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `551446f4e13fa56a91d24ae681491151347487787cb41646b3e3abfc1f1a7e73` |
| `thm-characters-on-a-unital-banach-algebra-are-continuous` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `28454e978500d346279d211247ec233db5ef3a8838bfb88b7ec5707c58c0cb75` |
| `thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `8f343e326b729cc747fad317270468d52bddc284e69f51d636298522415f7875` |
| `thm-cohomological-atiyah-hirzebruch-spectral-sequence` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `8529096e09dccc82a6708be96472369034bfa5c33d974594b0be848d4ece37f6` |
| `thm-commutative-gelfand-duality` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `0b46ebf165391f64eb66e83acaaed7b1554bf138ab0ab53ed78cf1e401bbe5ac` |
| `thm-complex-splitting-principle-with-integral-injective-pullback` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `5c131dec7ab968d8a7b6d700d71e4fd6755c90b5ca2686acffb0af6ae5e4902b` |
| `thm-every-commutative-c-star-algebra-has-an-approximate-unit` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `84f9dc6aa5ce99ac97a9b577dba43e50e21325d9c30b9b074c69620c256d661b` |
| `thm-first-chern-class-classifies-complex-line-bundles` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `95799e9bb985d519201932f52d77e15b811c5c6a7056b56ca0386be0709eac57` |
| `thm-gelfand-kolmogorov-for-rings-of-continuous-functions` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `169649fc0bbc1aeb260f843dbad439303902abf9189c3f3e4fc66c79e7e62f27` |
| `thm-gleason-kahane-zelazko` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `129729a795cc81c1f5032f8c882d0c6f2cdd9d1b9ddbf9b396f09c31251d920f` |
| `thm-holomorphic-functional-calculus-homomorphism` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `04aec9549bd8381416e9e88b0165afb9a82af339d1ee9d314c030b48f4af3f7e` |
| `thm-homological-atiyah-hirzebruch-spectral-sequence` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `f64a053aca82894f4c29dd87a996999691a5355acbf29f5278269c69eb1cb729` |
| `thm-integral-cohomology-of-bu-n` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `cfadad76225176e4748a73b1394d5322e895531562dd8712239a3a782879969e` |
| `thm-integral-complex-projective-bundle-theorem` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `64e1a885df5c0e514ca6f981957740aff88b90a4811e5b57fc5c339a86746ec5` |
| `thm-locally-compact-gelfand-duality` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `4897c2d93304e67906f8d20d9c030fc7c5832d401773e6c80b9f55716f6fbfaa` |
| `thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `6132f099e43769786d190d44d5618c2747b8f675315a400a88f9f9aa99fba531` |
| `thm-minimal-c-star-unitization` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `0ab824f0329e1083574f8b10a5fde94154384b90837aec86770637dfc2df7e1b` |
| `thm-mod-two-cohomology-of-bo-n` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `6965072c5421ad5a18d2a23256359bf582b7ce609154606908f3e27d3df6bfa9` |
| `thm-mod-two-euler-class-is-the-top-stiefel-whitney-class` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `7fd7ce5fb1430ddae9f391422877b6761af3c2c69567b36de5d13fcb1a802fc8` |
| `thm-mod-two-real-projective-bundle-theorem` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `51266a2ece6e3c5926fcc6c0a42dc92052c96b4cb7dd3a36ac2a24345e4fcfb4` |
| `thm-mod-two-reduction-of-chern-classes` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `6ddb467482cc87af9617cc6f4706068ecb57a1a8c5ef0ebaa5cc70eb81288632` |
| `thm-naturality-and-edge-maps-of-the-ahss` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | gpt-5.6-terra | `4db77bace9ec46ac334cc2806f40c99c4619ae3aa68962e2be2c5a675503043a` |
| `thm-naturality-normalization-and-whitney-sum-for-chern-classes` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `19eec47419bfcb1ceb5fe33f2920e11da65eedb7650a51a7121c8be8f5b8fbf5` |
| `thm-naturality-of-stiefel-whitney-classes` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `7a55a51511acdb02a6f7621e8e83ccab16e101291cbb6e1499d1782e5f46c1dc` |
| `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `8ccf0fcd0e9a4f1be199e803effdbe8475f8e75e175a8097e6332dfc45e1354e` |
| `thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `f728b21dfe50123b91068f59c76c5f103cf09470f8f42a9cb8b458cb3194abc2` |
| `thm-polynomial-spectral-mapping` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `503b5b79b786f72a6a4c6beeefce1e5c85864eaeafda4a8bd4469bb908205da3` |
| `thm-pontryagin-whitney-product-away-from-two` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `c221a94a16c0d85509c5e95d46a7d1cd6bc6399cc3923728705a8d752e72f859` |
| `thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `8b9787accd8b3d85a615797d35d4d48452764847cc4316b0356fbe58780941ec` |
| `thm-real-splitting-principle-with-mod-two-injective-pullback` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `158af36ac8442a0532366377fe2ba2482e929564fe66ec1403ee2266faa3ab21` |
| `thm-spectral-radius-formula` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `b12923a682bacece3d84ad8128a328fd9c81d4ea32a2851d1a73e79839772132` |
| `thm-spectrum-is-nonempty-compact-and-norm-bounded` | `banach-algebras-spectrum-and-holomorphic-functional-calculus` | gpt-5.6-terra | `44e66b5338464dbafe206111021c010ec2beba3e63311683397057514cfcdabe` |
| `thm-stone-representation-for-boolean-algebras` | `gelfand-theory-and-commutative-c-star-algebras` | gpt-5.6-terra | `fe48ddb32e3ac323cedf39c982f7fb2574cbd7bd481793b4998113ec736048d6` |
| `thm-thom-identity-for-stiefel-whitney-classes` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `d77cd33442dbb175a97a9ee98b9c47d697f3e6c067351903c052b71d180b1597` |
| `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `65c37e805e97fa94dd5e293c96b3792ec7eed8a9a8e542cac1428f37ab75beaf` |
| `thm-top-pontryagin-class-is-the-square-of-the-euler-class` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `f50623b04a5491ba83adff4448f3c4afc20a5db3be45660c063354e7b79178b9` |
| `thm-uniqueness-of-chern-classes-from-the-splitting-principle` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | gpt-5.6-terra | `a3a14b51a7398644a1ba3c317340fdd9fcaaf6ba6153373897348382f4df46ba` |
| `thm-uniqueness-of-stiefel-whitney-classes-from-normalization-naturality-and-sum` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `9ed4206f9529e6a64503f3b39c33c063185125dacf462c269a7d142cf97bead6` |
| `thm-whitney-sum-formula-for-stiefel-whitney-classes` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | gpt-5.6-terra | `ba9489f3fa8e457f81bfb9b80d1767968982a1decac43d1893894a61a9549b4b` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — exact closure recovery, `phase-2-remaining-27`

Read `research/phase-2-remaining-27-judge-closure.json`,
`research/phase-2-remaining-27-judge.jsonl`,
`research/phase-2-remaining-27-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-remaining-27-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-remaining-27-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-remaining-27-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.

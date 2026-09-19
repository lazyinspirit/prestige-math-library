# Step 7 adjudication — group **b**, run `phase-2-remaining-27`

You are the group Alpha for batches **9**, **10**, **4**: 5 A/B pair(s), 10 page(s), 188 item(s), 0 open rejection(s) over 0 item(s).

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-remaining-27-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-remaining-27`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-remaining-27-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-remaining-27-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/phase-2-remaining-27-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-remaining-27-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-remaining-27-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.

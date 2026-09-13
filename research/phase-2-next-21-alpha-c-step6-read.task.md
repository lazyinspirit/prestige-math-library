# Step 6 whole-group reading — group **c**, run `phase-2-next-21`

You are the group Alpha for batches **2**, **3**, **1**: 4 A/B pair(s), 8 page(s), 126 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `banach-alaoglu-goldstine-and-krein-milman` | A | functional-analysis | 288.063 | `convex-and-semicontinuous-functions-on-rn`, `filters-and-ultrafilters`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `weak-and-weak-star-topologies` |
| 2 | `banach-alaoglu-goldstine-and-krein-milman-examples` | B | functional-analysis | 288.064 | `banach-alaoglu-goldstine-and-krein-milman` |
| 2 | `reflexivity-and-eberlein-smulian` | A | functional-analysis | 288.065 | `banach-alaoglu-goldstine-and-krein-milman`, `complex-lp-spaces-and-test-function-conventions`, `hausdorff-via-the-diagonal`, `complete-metrizability-and-baire` |
| 2 | `reflexivity-and-eberlein-smulian-examples` | B | functional-analysis | 288.066 | `reflexivity-and-eberlein-smulian`, `inner-product-spaces-and-orthogonality` |
| 3 | `tempered-distributions-and-the-fourier-transform` | A | functional-analysis | 288.095 | `distributions-test-functions-and-differentiation` |
| 3 | `tempered-distributions-and-the-fourier-transform-examples` | B | functional-analysis | 288.096 | `tempered-distributions-and-the-fourier-transform` |
| 1 | `the-ergodic-theorems-of-von-neumann-and-birkhoff` | A | measure-theory | 288.045 | `measure-preserving-transformations-and-poincare-recurrence`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `modes-of-convergence-egorov-and-lusin`, `the-radon-nikodym-theorem-and-lebesgue-decomposition`, `the-lebesgue-integral-and-the-convergence-theorems`, `sequences-and-limits`, `approximation-and-compactness-in-ck` |
| 1 | `the-ergodic-theorems-of-von-neumann-and-birkhoff-examples` | B | measure-theory | 288.046 | `the-ergodic-theorems-of-von-neumann-and-birkhoff` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `banach-alaoglu-goldstine-and-krein-milman` — Banach Alaoglu Goldstine and Krein Milman (17 item(s))

- `lem-dual-ball-as-a-closed-subset-of-a-product` · lemma — Dual ball as a closed subset of a product
- `thm-banach-alaoglu` · theorem — Banach alaoglu
- `def-absolute-polar-in-a-normed-dual-pair` · definition — Absolute polar in a normed dual pair
- `thm-weak-star-compactness-of-polar-sets` · theorem — Weak star compactness of polar sets
- `thm-dual-ball-weak-star-metrizable-for-separable-predual` · theorem — Dual ball weak star metrizable for separable predual
- `cor-separable-banach-dual-ball-is-weak-star-sequentially-compact` · corollary — Separable banach dual ball is weak star sequentially compact
- `thm-goldstine` · theorem — Goldstine
- `cor-goldstine-finite-data-approximation` · corollary — Goldstine finite data approximation
- `thm-banach-dieudonne-linear-subspace-criterion` · theorem — Banach dieudonne linear subspace criterion
- `def-extreme-point-and-face` · definition — Extreme point and face
- `lem-minimizer-face-of-a-continuous-affine-functional` · lemma — Minimizer face of a continuous affine functional
- `thm-krein-milman-existence-of-extreme-points` · theorem — Krein milman existence of extreme points
- `thm-krein-milman-closed-convex-hull-form` · theorem — Krein milman closed convex hull form
- `def-upper-semicontinuous-real-map-on-a-topological-space` · definition — Upper semicontinuous real map on a topological space
- `cor-bauer-maximum-principle` · corollary — Bauer maximum principle
- `thm-milman-converse-for-compact-generating-sets` · theorem — Milman converse for compact generating sets
- `cor-dual-unit-ball-has-extreme-points` · corollary — Dual unit ball has extreme points

### `banach-alaoglu-goldstine-and-krein-milman-examples` — Banach Alaoglu Goldstine and Krein Milman — Examples (7 item(s))

- `ex-weak-star-compactness-of-probability-measures` · example — Weak star compactness of probability measures
- `ex-extreme-points-of-the-probability-measures-are-dirac-masses` · example — Extreme points of the probability measures are dirac masses
- `ex-extreme-points-of-the-ell-infinity-unit-ball` · example — Extreme points of the ell infinity unit ball
- `cex-the-c0-unit-ball-has-no-extreme-points` · counterexample — The c0 unit ball has no extreme points
- `cor-c0-is-not-isometrically-a-dual-space` · corollary — C0 is not isometrically a dual space
- `cex-weak-star-compact-does-not-imply-weak-star-sequentially-compact` · counterexample — Weak star compact does not imply weak star sequentially compact
- `rem-banach-alaoglu-versus-sequential-alaoglu` · remark — Banach alaoglu versus sequential alaoglu

### `reflexivity-and-eberlein-smulian` — Reflexivity and Eberlein Smulian (28 item(s))

- `thm-reflexive-iff-unit-ball-weakly-compact` · theorem — Reflexive iff unit ball weakly compact
- `thm-a-banach-space-is-reflexive-iff-its-dual-is-reflexive` · theorem — A banach space is reflexive iff its dual is reflexive
- `thm-closed-subspaces-of-reflexive-spaces-are-reflexive` · theorem — Closed subspaces of reflexive spaces are reflexive
- `thm-quotients-of-reflexive-spaces-are-reflexive` · theorem — Quotients of reflexive spaces are reflexive
- `lem-complex-lp-duality-from-real-lp-duality` · lemma — Complex Lp duality from real Lp duality
- `thm-reflexivity-of-lp-for-one-less-p-less-infinity` · theorem — Reflexivity of lp for one less p less infinity
- `def-relative-weak-compactness-and-three-sequential-notions` · definition — Relative weak compactness and three sequential notions
- `lem-eberlein-smulian-separable-reduction` · lemma — Eberlein smulian separable reduction
- `lem-eberlein-smulian-metrization-on-the-relevant-dual-ball` · lemma — Eberlein smulian metrization on the relevant dual ball
- `lem-eberlein-smulian-countable-compactness-closes-in-the-bidual` · lemma — Countable compactness closes in the bidual
- `thm-eberlein-smulian` · theorem — Eberlein smulian
- `cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence` · corollary — Reflexive iff every bounded sequence has a weakly convergent subsequence
- `def-schur-property` · definition — Schur property
- `thm-ell-one-has-the-schur-property` · theorem — Ell one has the schur property
- `cor-ell-one-is-not-reflexive` · corollary — Ell one is not reflexive
- `def-uniformly-convex-banach-space` · definition — Uniformly convex banach space
- `lem-uniform-convexity-gives-unique-asymptotic-centers` · lemma — Uniform convexity gives unique asymptotic centers
- `thm-milman-pettis` · theorem — Milman pettis
- `lem-james-noncompactness-sequence` · lemma — James nonreflexivity sequence separated from an annihilator
- `lem-james-norm-attainment-compactness-criterion` · lemma — James convex-block norm-attainment criterion
- `thm-james-reflexivity-theorem` · theorem — James reflexivity theorem
- `lem-bishop-phelps-support-cone-construction` · lemma — Quantitative Bishop–Phelps support functional construction
- `thm-bishop-phelps` · theorem — Bishop phelps
- `thm-separable-dual-implies-separable-primal` · theorem — Separable dual implies separable primal
- `cor-separable-reflexive-space-has-separable-dual` · corollary — Separable reflexive space has separable dual
- `lem-clarkson-inequalities-for-real-and-complex-lp` · lemma — Clarkson inequalities in both exponent ranges
- `cor-lp-is-uniformly-convex-for-one-less-p-less-infinity` · corollary — Lp is uniformly convex for one less p less infinity
- `lem-real-and-complex-c-zero-are-banach` · lemma — Real and complex c zero are Banach

### `reflexivity-and-eberlein-smulian-examples` — Reflexivity and Eberlein Smulian — Examples (6 item(s))

- `ex-hilbert-spaces-are-uniformly-convex` · example — Hilbert spaces are uniformly convex
- `ex-reflexivity-of-ell-p-and-lp` · example — Reflexivity of ell p and lp
- `cex-c0-is-not-reflexive` · counterexample — C0 is not reflexive
- `cex-weak-and-norm-topologies-differ-on-ell-one-despite-identical-convergent-sequences` · counterexample — Weak and norm topologies differ on ell one despite identical convergent sequences
- `rem-complex-bishop-phelps-for-general-convex-sets` · remark — Complex bishop phelps for general convex sets
- `ex-norm-attaining-functionals-on-a-hilbert-space` · example — Norm attaining functionals on a hilbert space

### `tempered-distributions-and-the-fourier-transform` — Tempered Distributions and the Fourier Transform (24 item(s))

- `def-tempered-distribution` · definition — Tempered distribution
- `thm-finite-seminorm-bound-characterizes-tempered-distributions` · theorem — Finite seminorm bound characterizes tempered distributions
- `def-weak-and-strong-topologies-on-tempered-distributions` · definition — Weak and strong topologies on tempered distributions
- `thm-polynomial-growth-functions-define-tempered-distributions` · theorem — Polynomial growth functions define tempered distributions
- `def-fourier-transform-of-a-tempered-distribution` · definition — Fourier transform of a tempered distribution
- `lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous` · lemma — Fourier transform on tempered distributions is well defined and continuous
- `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions` · theorem — Fourier transform is a topological automorphism of tempered distributions
- `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms` · theorem — Fourier transform agrees with l one and plancherel transforms
- `def-convolution-of-a-tempered-distribution-with-a-schwartz-function` · definition — Convolution of a tempered distribution with a schwartz function
- `def-dirac-comb` · definition — Dirac comb
- `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions` · theorem — Dirac comb is fourier invariant
- `lem-test-function-inclusion-in-schwartz-space-is-continuous` · lemma — Test function inclusion in schwartz space is continuous
- `thm-compactly-supported-distributions-are-tempered` · theorem — Compactly supported distributions are tempered
- `thm-tempered-distributions-embed-continuously-in-distributions` · theorem — Tempered distributions embed continuously in distributions
- `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space` · lemma — Smooth polynomially bounded multipliers on schwartz space
- `thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions` · theorem — Differentiation and polynomial multiplication preserve tempered distributions
- `thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions` · theorem — Fourier differentiation and multiplication identities on tempered distributions
- `thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials` · theorem — Fourier transform of delta constants plane waves and polynomials
- `thm-constant-coefficient-differential-operators-become-polynomial-multipliers` · theorem — Constant coefficient differential operators become polynomial multipliers
- `lem-schwartz-parameter-pairing-and-integral-interchange` · lemma — Schwartz parameter pairing and integral interchange
- `thm-tempered-convolution-is-smooth-with-polynomial-growth` · theorem — Tempered convolution is smooth with polynomial growth
- `thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier` · theorem — Fourier transform of a compactly supported distribution is a smooth polynomially bounded multiplier
- `lem-compact-distribution-convolution-preserves-schwartz-and-tempered-spaces` · lemma — Compact distribution convolution preserves schwartz and tempered spaces
- `thm-fourier-transform-converts-allowed-tempered-convolutions-to-products` · theorem — Fourier transform converts allowed tempered convolutions to products

### `tempered-distributions-and-the-fourier-transform-examples` — Tempered Distributions and the Fourier Transform — Examples (9 item(s))

- `ex-fourier-transform-of-dirac-and-one` · example — Fourier transform of dirac and one
- `ex-fourier-transform-of-a-plane-wave` · example — Fourier transform of a plane wave
- `ex-fourier-transform-of-delta-derivatives-and-monomials` · example — Fourier transform of delta derivatives and monomials
- `ex-principal-value-one-over-x-is-tempered-and-its-fourier-transform` · example — Principal value one over x is tempered and its fourier transform
- `ex-dirac-comb-and-poisson-summation` · example — Dirac comb and poisson summation
- `ex-fundamental-solution-by-division-of-a-fourier-symbol` · example — Fundamental solution by division of a fourier symbol
- `cex-product-of-two-distributions-is-not-canonically-defined` · counterexample — Product of two distributions is not canonically defined
- `cex-convolution-of-two-tempered-distributions-need-not-exist` · counterexample — Convolution of two tempered distributions need not exist
- `rem-paley-wiener-and-microlocal-analysis` · remark — Paley wiener and microlocal analysis

### `the-ergodic-theorems-of-von-neumann-and-birkhoff` — The Ergodic Theorems of Von Neumann and Birkhoff (27 item(s))

- `def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace` · definition — Ergodic partial sums, time averages and the invariant L2 subspace
- `prop-ergodic-averages-are-well-defined-and-l-p-contractive` · proposition — Ergodic averages are measurable, representative independent and Lp contractions
- `thm-maximal-ergodic-theorem` · theorem — Maximal ergodic theorem
- `lem-sigma-finite-ergodic-oscillation-sets-have-finite-measure` · lemma — Sigma-finite oscillation sets have finite measure
- `thm-birkhoff-ergodic-theorem` · theorem — Birkhoff pointwise ergodic theorem
- `thm-birkhoff-limit-identification-on-finite-measure-spaces` · theorem — Finite-measure identification of the Birkhoff limit
- `lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces` · lemma — Ergodic averages also converge in Lp on finite-measure spaces
- `cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems` · corollary — Birkhoff theorem for ergodic finite-measure systems
- `thm-von-neumann-mean-ergodic-theorem-in-l-two` · theorem — Von Neumann mean ergodic theorem in L2
- `def-unique-ergodicity` · definition — Unique ergodicity
- `lem-continuous-functions-determine-borel-probabilities-on-compact-metric-spaces` · lemma — Continuous functions determine Borel probabilities on compact metric spaces
- `thm-unique-ergodicity-is-equivalent-to-uniform-ergodic-averages` · theorem — Unique ergodicity is equivalent to uniform ergodic averages
- `lem-unit-interval-circle-is-a-nonempty-compact-metric-space` · lemma — The unit-interval circle is a nonempty compact metric space
- `thm-irrational-circle-rotations-are-uniquely-ergodic` · theorem — Irrational circle rotations are uniquely ergodic
- `def-equidistribution-mod-one` · definition — Equidistribution modulo one
- `thm-weyl-equidistribution-for-irrational-rotations` · theorem — Weyl equidistribution for irrational rotations
- `def-canonical-base-b-expansion-and-normality` · definition — Canonical base-b expansions and normality
- `lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints` · lemma — Base-b expansion cylinders match integer-map orbits away from terminating endpoints
- `thm-borels-normal-number-theorem` · theorem — Borel normal-number theorem
- `thm-fair-coin-frequency-strong-law` · theorem — Fair-coin frequency strong law from Birkhoff
- `fs-birkhoff-ergodic-averages-converge-at-every-point` · false-statement — FALSE: Birkhoff averages converge at every point
- `fs-every-measure-preserving-system-has-space-mean-ergodic-limits` · false-statement — FALSE: every ergodic limit equals the space mean
- `fs-birkhoff-limit-is-always-constant` · false-statement — FALSE: the Birkhoff limit is always constant
- `fs-von-neumann-mean-convergence-implies-birkhoff-pointwise-convergence` · false-statement — FALSE: Von Neumann mean convergence implies Birkhoff pointwise convergence
- `fs-weyl-equidistribution-holds-for-every-rotation-angle` · false-statement — FALSE: Weyl equidistribution holds for every rotation angle
- `fs-every-real-number-is-normal` · false-statement — FALSE: every real number is normal
- `fs-birkhoff-ergodic-theorem-holds-for-every-measurable-function` · false-statement — FALSE: Birkhoff applies to every measurable function

### `the-ergodic-theorems-of-von-neumann-and-birkhoff-examples` — The Ergodic Theorems of Von Neumann and Birkhoff — Examples (8 item(s))

- `ex-borels-binary-normality-exception-is-uncountable-and-null` · example — Borel normality has an uncountable null exceptional set
- `ex-weyl-equidistribution-for-square-root-two-initial-terms` · example — Initial terms of the square-root-two rotation
- `ex-rational-half-rotation-has-a-nonconstant-ergodic-average` · example — A rational rotation has a nonconstant orbit average
- `ex-kac-reciprocal-return-frequency-from-birkhoff` · example — Kac's reciprocal return frequency recovered from Birkhoff
- `ex-fair-coin-strong-law-from-the-shift` · example — The fair-coin strong law as a shift average
- `ex-zero-point-one-zero-one-is-not-normal-in-base-two` · example — The periodic binary number 0.1010… is not normal
- `cex-nonintegrable-observable-has-divergent-ergodic-averages` · counterexample — A nonintegrable observable can have infinite ergodic averages
- `ex-nonergodic-half-rotation-l-two-projection` · example — The L2 projection for a nonergodic half-rotation

## Your seams

Another group's pages depend on yours:

- `lie-subgroups-actions-and-homogeneous-spaces-examples` (group a) requires your `the-ergodic-theorems-of-von-neumann-and-birkhoff`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 — group reading digest, `phase-2-next-21`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.

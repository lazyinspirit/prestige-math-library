# Step 6 whole-group reading — group **b**, run `phase-2-next-20`

You are the group Alpha for batches **2**, **15**: 3 A/B pair(s), 6 page(s), 70 item(s).

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
| 2 | `locally-convex-spaces-and-continuous-separation` | A | functional-analysis | 288.0603 | `sequential-uniform-boundedness-with-countable-choice`, `subspaces-products-and-quotients`, `norming-and-separation-under-hahn-banach` |
| 2 | `locally-convex-spaces-and-continuous-separation-examples` | B | functional-analysis | 288.0604 | `locally-convex-spaces-and-continuous-separation` |
| 15 | `fourier-transform-convolution-and-approximate-identities` | A | functional-analysis | 288.089 | `countability-and-uncountability`, `properties-of-the-integral-and-the-working-ftc`, `uniform-convergence-of-functions`, `the-exponential-function`, `the-complex-exponential-and-eulers-formula`, `the-total-derivative`, `mixed-partials-taylor-and-extrema`, `stone-weierstrass-general`, `improper-and-parameter-dependent-multiple-integrals`, `lebesgue-measure-on-euclidean-space`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-lebesgue-and-riemann-integrals-compared`, `product-measures-and-the-fubini-tonelli-theorems`, `signed-and-complex-measures-hahn-and-jordan`, `the-radon-nikodym-theorem-and-lebesgue-decomposition`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `density-separability-and-convolution-in-lp`, `complex-lp-spaces-and-test-function-conventions`, `the-maximal-function-and-lebesgue-differentiation`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `bounded-linear-operators-and-quotient-spaces` |
| 15 | `fourier-transform-convolution-and-approximate-identities-examples` | B | functional-analysis | 288.09 | `fourier-transform-convolution-and-approximate-identities` |
| 15 | `schwartz-space-and-the-plancherel-theorem` | A | functional-analysis | 288.091 | `fourier-transform-convolution-and-approximate-identities` |
| 15 | `schwartz-space-and-the-plancherel-theorem-examples` | B | functional-analysis | 288.092 | `schwartz-space-and-the-plancherel-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `locally-convex-spaces-and-continuous-separation` — Locally Convex Spaces and Continuous Separation (10 item(s))

- `def-topological-vector-space-for-local-convexity` · definition — Topological vector spaces over the real and complex fields
- `lem-topological-vector-space-translation-scaling-and-absorption` · lemma — Translations, dilations and absorption in a topological vector space
- `def-locally-convex-topological-vector-space` · definition — Local convexity, convex and balanced sets, and the continuous dual
- `lem-locally-convex-closures-and-finite-compact-convex-hulls` · lemma — Convex closures and hulls of finitely many compact convex sets
- `lem-balanced-convex-zero-neighborhood-refinement` · lemma — Open and closed balanced convex zero-neighborhood refinements
- `def-minkowski-gauge-of-an-open-convex-zero-neighborhood` · definition — Minkowski gauge for an open convex zero-neighborhood
- `lem-continuous-gauge-of-an-open-convex-zero-neighborhood` · lemma — Continuity, sublinearity and strict sublevels of an open convex gauge
- `thm-locally-convex-open-convex-separation` · theorem — Continuous separation when one convex set is open
- `thm-locally-convex-continuous-dual-separates-points` · theorem — The continuous dual separates points in a Hausdorff locally convex space
- `thm-locally-convex-strict-separation` · theorem — Uniform strict separation of compact and closed convex sets

### `locally-convex-spaces-and-continuous-separation-examples` — Locally Convex Spaces and Continuous Separation: Examples (3 item(s))

- `ex-product-scalar-topology-is-locally-convex` · example — Arbitrary products of the scalar field are locally convex
- `ex-locally-convex-separation-by-a-coordinate` · example — Coordinate functionals give an explicit uniform separating gap
- `cex-convex-maximum-set-need-not-be-a-face` · counterexample — A convex function can have a nonconvex maximum set

### `fourier-transform-convolution-and-approximate-identities` — Fourier Transform Convolution and Approximate Identities (20 item(s))

- `def-fourier-transform-on-l-one-of-rn` · definition — Fourier transform on complex L1 classes
- `lem-l-one-fourier-transform-is-well-defined` · lemma — The integral transform is representative independent
- `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions` · theorem — The L1 transform is bounded and uniformly continuous
- `thm-fourier-translation-modulation-dilation-and-reflection-laws` · theorem — Translation, modulation, linear dilation and reflection laws
- `thm-fourier-transform-converts-convolution-to-products` · theorem — Fourier transform turns L1 convolution into multiplication
- `lem-complex-integration-by-parts-on-intervals-and-decaying-lines` · lemma — Complex integration by parts on intervals and decaying lines
- `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization` · lemma — Euclidean Gaussian transform with the 2π normalization
- `thm-riemann-lebesgue` · theorem — Riemann–Lebesgue lemma
- `lem-gaussian-fourier-summability-kernel-is-an-approximate-identity` · lemma — Gaussian summability kernels
- `lem-radial-majorized-kernels-recover-lebesgue-point-values` · lemma — Lebesgue-point convergence for radial-majorized kernels
- `thm-fourier-inversion-at-lebesgue-points-under-summability` · theorem — Gaussian Fourier summability at Lebesgue points
- `thm-l-one-fourier-inversion` · theorem — L1 Fourier inversion with an integrable transform
- `thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis` · theorem — Fourier transform of a product with one integrable transform
- `cor-uniqueness-of-the-l-one-fourier-transform` · corollary — Uniqueness of the L1 Fourier transform
- `cor-convolution-approximate-identities-from-fourier-multipliers` · corollary — Fourier multipliers of approximate identities
- `thm-fourier-transform-of-a-finite-complex-measure` · theorem — Fourier transform of a finite complex Borel measure
- `lem-gaussian-smoothing-of-finite-complex-measures` · lemma — Gaussian smoothing of finite measures
- `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms` · corollary — Uniqueness of finite Borel measures from their Fourier transforms
- `rem-probability-characteristic-function-normalization` · remark — Characteristic-function normalization
- `rem-riesz-thorin-supplied-by-measure-theory` · remark — The interpolation input belongs to measure theory

### `fourier-transform-convolution-and-approximate-identities-examples` — Fourier Transform Convolution and Approximate Identities — Examples (8 item(s))

- `ex-fourier-transform-of-an-interval-indicator` · example — Transform of an interval indicator
- `ex-fourier-transform-of-a-gaussian` · example — Scaled and tensor Gaussian examples
- `ex-fourier-transform-of-the-poisson-kernel` · example — Poisson kernel transform and Abel summability on the line
- `ex-fourier-transform-of-a-compactly-supported-triangle-function` · example — Triangle function and squared sinc
- `cex-fourier-transform-of-an-l-one-function-need-not-be-integrable` · counterexample — An L1 transform need not be integrable
- `cex-fourier-inversion-need-not-hold-at-every-point-of-an-l-one-representative` · counterexample — Null-set modifications defeat everywhere representative recovery
- `cex-riemann-lebesgue-has-no-universal-rate` · counterexample — There is no universal Riemann–Lebesgue decay rate
- `rem-wiener-tauberian-theorem` · remark — Wiener Tauberian orientation

### `schwartz-space-and-the-plancherel-theorem` — Schwartz Space and the Plancherel Theorem (20 item(s))

- `def-schwartz-space-and-its-seminorms` · definition — Schwartz space and its seminorms
- `def-schwartz-topology-and-convergence` · definition — Schwartz topology and convergence
- `thm-schwartz-space-is-frechet` · theorem — Schwartz space is Fréchet
- `lem-schwartz-functions-and-all-derivatives-are-integrable` · lemma — Schwartz derivatives are integrable
- `lem-schwartz-cutoffs-from-the-standard-smooth-step` · lemma — Explicit compactly supported smooth cutoffs
- `lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space` · lemma — Smooth compact supports are dense in Schwartz space
- `thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space` · theorem — Basic operations are continuous on Schwartz space
- `thm-fourier-transform-maps-schwartz-space-continuously-to-itself` · theorem — Fourier transform acts continuously on Schwartz space
- `thm-fourier-inversion-on-schwartz-space` · theorem — Fourier inversion on Schwartz space
- `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space` · corollary — Fourier transform is a topological automorphism of Schwartz space
- `cor-schwartz-convolution-and-product-transform-laws` · corollary — Schwartz convolution and product laws
- `thm-parseval-pairing-on-schwartz-space` · theorem — Parseval pairing on Schwartz space
- `lem-schwartz-space-is-dense-in-l-two` · lemma — Schwartz space is dense in L2
- `thm-plancherel` · theorem — Plancherel theorem
- `lem-real-ltwo-multipliers-and-unitary-transport` · lemma — Real L2 multipliers and unitary transport
- `lem-simultaneous-smooth-approximation-in-l-one-and-l-two` · lemma — Simultaneous L1 and L2 smooth approximation
- `thm-l-one-l-two-agreement-of-fourier-transform` · theorem — Agreement of the integral and L2 transforms
- `thm-l-two-fourier-inversion` · theorem — L2 Fourier inversion
- `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients` · lemma — Fourier uniqueness for continuous functions on the Euclidean torus
- `thm-poisson-summation-for-schwartz-functions` · theorem — Poisson summation for Schwartz functions

### `schwartz-space-and-the-plancherel-theorem-examples` — Schwartz Space and the Plancherel Theorem — Examples (9 item(s))

- `ex-gaussians-and-polynomials-times-gaussians-are-schwartz` · example — Polynomial Gaussians are Schwartz
- `cex-a-smooth-integrable-function-need-not-be-schwartz` · counterexample — Smooth and integrable does not imply Schwartz
- `cex-a-schwartz-function-need-not-have-compact-support` · counterexample — A Schwartz function need not have compact support
- `ex-hermite-functions-as-fourier-eigenfunctions` · example — Normalized Hermite Fourier eigenfunctions
- `ex-plancherel-for-an-interval-indicator` · example — Sinc-square integral from Plancherel
- `ex-poisson-summation-for-the-gaussian-and-theta-functional-equation` · example — Gaussian Poisson summation and theta inversion
- `thm-heisenberg-uncertainty-inequality` · theorem — Heisenberg uncertainty and Gaussian equality
- `rem-hausdorff-young-and-interpolation` · remark — Hausdorff–Young and interpolation orientation
- `ex-momentum-operator-under-the-fourier-transform` · example — Momentum operator under the Fourier transform

## Your seams

Another group's pages depend on yours:

- `carleson-hunt-time-frequency-theorem` (group a) requires your `schwartz-space-and-the-plancherel-theorem`
- `characteristic-functions-inversion-and-continuity` (group c) requires your `fourier-transform-convolution-and-approximate-identities`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 — group reading digest, `phase-2-next-20`

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

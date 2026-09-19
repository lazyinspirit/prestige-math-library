# Step 7 adjudication — group **d**, run `phase-2-remaining-27`

You are the group Alpha for batches **7**, **8**, **6**: 5 A/B pair(s), 10 page(s), 161 item(s), 122 open rejection(s) over 122 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-remaining-27-alpha-d-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
| 7 | `brownian-motion-markov-properties-and-hitting-times` | A | probability | 288.133 | `independence-borel-cantelli-and-zero-one-laws`, `weak-convergence-tightness-and-representation`, `conditional-expectation`, `conditional-distributions-and-regular-conditional-probability`, `stopping-times-and-optional-stopping`, `markov-kernels-and-markov-chains`, `brownian-motion-construction-and-continuity` |
| 7 | `brownian-motion-markov-properties-and-hitting-times-examples` | B | probability | 288.134 | `brownian-motion-markov-properties-and-hitting-times` |
| 7 | `brownian-path-properties` | A | probability | 288.135 | `independence-borel-cantelli-and-zero-one-laws`, `modes-of-convergence-for-random-variables`, `brownian-motion-construction-and-continuity`, `brownian-motion-markov-properties-and-hitting-times`, `the-lebesgue-integral-and-the-convergence-theorems`, `product-measures-and-the-fubini-tonelli-theorems`, `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` |
| 7 | `brownian-path-properties-examples` | B | probability | 288.136 | `brownian-path-properties` |
| 8 | `the-ito-integral-with-respect-to-brownian-motion` | A | probability | 288.137 | `modes-of-convergence-for-random-variables`, `conditional-expectation`, `discrete-time-martingales`, `martingale-inequalities-and-convergence`, `stopping-times-and-optional-stopping`, `brownian-motion-construction-and-continuity`, `brownian-motion-markov-properties-and-hitting-times`, `brownian-path-properties`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| 8 | `the-ito-integral-with-respect-to-brownian-motion-examples` | B | probability | 288.138 | `the-ito-integral-with-respect-to-brownian-motion` |
| 8 | `itos-formula-and-brownian-martingales` | A | probability | 288.139 | `conditional-expectation`, `martingale-inequalities-and-convergence`, `stopping-times-and-optional-stopping`, `brownian-motion-construction-and-continuity`, `brownian-motion-markov-properties-and-hitting-times`, `brownian-path-properties`, `the-ito-integral-with-respect-to-brownian-motion`, `mixed-partials-taylor-and-extrema`, `fubini-and-change-of-variables` |
| 8 | `itos-formula-and-brownian-martingales-examples` | B | probability | 288.14 | `itos-formula-and-brownian-martingales` |
| 6 | `unbounded-self-adjoint-operators-and-stones-theorem` | A | functional-analysis | 288.087 | `spectral-measures-and-borel-functional-calculus` |
| 6 | `unbounded-self-adjoint-operators-and-stones-theorem-examples` | B | functional-analysis | 288.088 | `unbounded-self-adjoint-operators-and-stones-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `brownian-motion-markov-properties-and-hitting-times` — Brownian Motion Markov Properties and Hitting Times (20 item(s))

- `def-natural-and-usual-augmented-brownian-filtrations` · definition — Natural and usual augmented Brownian filtrations
- `def-brownian-transition-semigroup` · definition — The Brownian transition semigroup
- `lem-brownian-transition-semigroup-property` · lemma — The Brownian kernels form a semigroup
- `lem-conditioning-a-known-state-and-independent-noise` · lemma — Conditioning a known state and independent noise
- `thm-brownian-markov-property` · theorem — Markov property of Brownian motion
- `thm-brownian-future-path-markov-property` · theorem — Future-path Markov property
- `def-germ-sigma-algebra-at-zero` · definition — The Brownian germ sigma-algebra at zero
- `thm-blumenthal-zero-one-law` · theorem — Blumenthal's zero-one law
- `def-continuous-time-stopping-time` · definition — Continuous-time stopping times and stopped sigma-algebras
- `lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times` · lemma — Brownian closed-set hitting times are stopping times
- `thm-strong-markov-property-of-brownian-motion` · theorem — Strong Markov property of Brownian motion
- `thm-brownian-reflection-principle` · theorem — Brownian reflection principle
- `cor-law-of-the-brownian-maximum` · corollary — Law of the Brownian maximum
- `cor-distribution-of-a-one-sided-brownian-hitting-time` · corollary — Distribution of a one-sided Brownian hitting time
- `cor-one-dimensional-brownian-motion-hits-every-point-almost-surely` · corollary — One-dimensional Brownian motion hits every point almost surely
- `def-brownian-motion-started-at-x` · definition — Brownian motion started at x
- `thm-two-sided-exit-probability-for-brownian-motion` · theorem — Two-sided Brownian exit probability
- `cor-one-dimensional-brownian-motion-is-recurrent` · corollary — One-dimensional Brownian motion is recurrent
- `lem-planar-brownian-annular-exit-probability` · lemma — Planar Brownian annular exit probability
- `rem-raw-versus-usual-filtration-in-the-strong-markov-theorem` · remark — Raw versus usual filtrations in strong Markov

### `brownian-motion-markov-properties-and-hitting-times-examples` — Brownian Motion Markov Properties and Hitting Times — Examples (9 item(s))

- `ex-brownian-transition-density-and-semigroup-convolution` · example — Brownian density and Gaussian convolution
- `ex-maximum-crossing-probability-before-a-fixed-time` · example — Maximum crossing before a fixed time
- `ex-density-and-infinite-mean-of-a-one-sided-hitting-time` · example — A Brownian hitting time has infinite mean
- `ex-exit-side-probability-from-an-interval` · example — Exit side from an interval
- `ex-successive-brownian-hits-restart-independent-copies` · example — Successive hits restart independent Brownian copies
- `ex-planar-brownian-coordinate-hitting-versus-point-hitting-boundary` · example — Planar coordinate hitting does not imply point hitting
- `cex-the-natural-filtration-need-not-be-right-continuous-before-augmentation` · counterexample — The raw natural Brownian filtration need not be right-continuous
- `cex-strong-markov-fails-at-a-nonstopping-random-time` · counterexample — Strong Markov fails at a nonstopping random time
- `cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable` · counterexample — Almost-sure finiteness does not imply integrability

### `brownian-path-properties` — Brownian Path Properties (20 item(s))

- `thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval` · theorem — Brownian paths are nowhere locally one-half Hölder
- `thm-brownian-paths-are-nowhere-differentiable` · theorem — Brownian paths are nowhere differentiable
- `cor-brownian-paths-have-infinite-total-variation-on-every-interval` · corollary — Brownian paths have infinite total variation
- `def-quadratic-variation-along-a-partition-sequence` · definition — Quadratic variation along a partition sequence
- `thm-brownian-quadratic-variation-along-dyadic-partitions` · theorem — Brownian quadratic variation on dyadic partitions
- `thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes` · theorem — Uniform dyadic Brownian quadratic variation process
- `cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation` · corollary — Brownian one- and quadratic variation
- `lem-brownian-motion-has-a-jointly-measurable-continuous-version` · lemma — Brownian motion has a jointly measurable continuous version
- `def-brownian-zero-set` · definition — The Brownian zero set
- `lem-brownian-zero-set-has-lebesgue-measure-zero` · lemma — The Brownian zero set has Lebesgue measure zero
- `thm-brownian-zero-set-has-no-isolated-points` · theorem — The Brownian zero set has no isolated points
- `cor-brownian-zero-set-is-uncountable` · corollary — The Brownian zero set is uncountable
- `lem-two-sided-mills-bounds-for-standard-normal-tail` · lemma — Two-sided Mills bounds for the standard normal tail
- `thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity` · theorem — Brownian law of the iterated logarithm at infinity
- `cor-brownian-law-of-the-iterated-logarithm-at-zero` · corollary — Brownian law of the iterated logarithm at zero
- `cor-critical-holder-boundary-at-zero-from-the-brownian-lil` · corollary — The critical Hölder boundary at zero
- `rem-quadratic-variation-depends-on-the-approximating-partitions-without-regularity` · remark — Quadratic variation needs a partition convention
- `thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law` · theorem — The last Brownian zero has the arcsine law
- `lem-brownian-step-potential-resolvent-at-zero` · lemma — Brownian step-potential resolvent at zero
- `thm-brownian-positive-occupation-proportion-has-the-arcsine-law` · theorem — Brownian positive occupation time has the arcsine law

### `brownian-path-properties-examples` — Brownian Path Properties — Examples (8 item(s))

- `ex-expected-dyadic-quadratic-variation` · example — Expected dyadic quadratic variation
- `ex-variance-of-dyadic-quadratic-variation` · example — Variance of dyadic quadratic variation
- `ex-zero-set-has-zero-measure-but-is-uncountable` · example — A null uncountable random closed set
- `ex-brownian-path-p-variation-threshold` · example — The Brownian p-variation threshold
- `ex-lil-rules-out-a-global-square-root-time-bound` · example — LIL rules out a square-root-time bound
- `cex-continuity-alone-does-not-imply-finite-quadratic-variation` · counterexample — Continuity does not imply finite quadratic variation
- `cex-finite-quadratic-variation-does-not-imply-finite-total-variation` · counterexample — Finite quadratic variation does not imply finite total variation
- `cex-fixed-time-nondifferentiability-does-not-prove-nowhere-differentiability` · counterexample — Fixed-time assertions do not yield a pathwise nowhere statement

### `the-ito-integral-with-respect-to-brownian-motion` — The Ito Integral with Respect to Brownian Motion (19 item(s))

- `def-continuous-time-adapted-process-and-martingale` · definition — Continuous-time adapted processes and martingales
- `def-progressively-measurable-and-predictable-process` · definition — Progressively measurable and predictable processes
- `lem-adapted-continuous-processes-are-progressively-measurable` · lemma — Adapted continuous processes are progressively measurable
- `def-elementary-predictable-brownian-integrand` · definition — Elementary predictable Brownian integrands
- `def-ito-integral-of-an-elementary-predictable-process` · definition — Ito integral of an elementary predictable process
- `lem-elementary-ito-integral-is-independent-of-the-step-representation` · lemma — Elementary Ito integrals do not depend on step representation
- `thm-ito-isometry-for-elementary-integrands` · theorem — Ito isometry for elementary integrands
- `lem-cross-ito-isometry` · lemma — Cross Ito isometry
- `thm-density-of-elementary-predictable-processes-in-predictable-l2` · theorem — Density of elementary predictable processes in predictable L2
- `def-ito-integral-for-square-integrable-predictable-processes` · definition — Ito integral for square-integrable predictable processes
- `lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative` · lemma — The general Ito integral is well defined
- `thm-ito-isometry-and-linearity-in-predictable-l2` · theorem — Ito isometry and linearity in predictable L2
- `thm-ito-integral-process-has-a-continuous-martingale-version` · theorem — The Ito integral process has a continuous martingale version
- `thm-doob-maximal-bound-for-the-ito-integral` · theorem — Doob maximal bound for the Ito integral
- `def-locally-square-integrable-predictable-brownian-integrand` · definition — Locally square-integrable predictable Brownian integrands
- `thm-localized-ito-integral` · theorem — Localized Ito integral
- `thm-stopping-an-ito-integral` · theorem — Stopping an Ito integral
- `thm-quadratic-variation-of-an-ito-integral` · theorem — Quadratic variation of an Ito integral
- `cor-deterministic-ito-integrals-are-gaussian` · corollary — Deterministic Ito integrals are Gaussian

### `the-ito-integral-with-respect-to-brownian-motion-examples` — The Ito Integral with Respect to Brownian Motion — Examples (8 item(s))

- `ex-integral-of-a-deterministic-step-function-against-brownian-motion` · example — A deterministic step integrand
- `ex-integral-of-the-indicator-of-a-stopping-interval` · example — Indicator of a stopping interval
- `ex-covariance-of-two-deterministic-ito-integrals` · example — Covariance of deterministic Ito integrals
- `ex-integral-of-brownian-motion-against-itself-preview` · example — Integral of Brownian motion against itself
- `ex-time-changed-quadratic-variation-of-an-ito-integral` · example — A deterministic time-changed quadratic variation
- `cex-a-nonadapted-step-integrand-breaks-the-ito-isometry` · counterexample — A nonadapted step integrand breaks the Ito isometry
- `cex-pathwise-riemann-stieltjes-integration-does-not-construct-the-brownian-ito-integral` · counterexample — Bounded-variation Riemann-Stieltjes theory does not construct the Brownian Ito integral
- `cex-product-measure-ae-equality-is-not-pointwise-equality-of-integrands` · counterexample — Product-measure equality is not pointwise equality

### `itos-formula-and-brownian-martingales` — Itos Formula and Brownian Martingales (21 item(s))

- `def-continuous-brownian-ito-process` · definition — Continuous Brownian Ito processes
- `def-quadratic-covariation-of-brownian-ito-processes` · definition — Quadratic covariation of Brownian Ito processes
- `thm-quadratic-covariation-of-brownian-ito-processes` · theorem — Quadratic covariation of Brownian Ito processes
- `thm-integration-by-parts-for-brownian-ito-processes` · theorem — Integration by parts for Brownian Ito processes
- `thm-ito-formula-one-dimensional` · theorem — One-dimensional Ito formula
- `thm-multidimensional-ito-formula-for-brownian-driven-processes` · theorem — Multidimensional Ito formula for Brownian-driven processes
- `cor-brownian-square-martingale` · corollary — The Brownian square martingale
- `cor-exponential-brownian-martingale` · corollary — The exponential Brownian martingale
- `thm-space-time-harmonic-functions-yield-brownian-local-martingales` · theorem — Space-time harmonic functions yield Brownian local martingales
- `cor-heat-semigroup-martingale` · corollary — Heat-semigroup martingales
- `lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t` · lemma — Characteristic exponential for a continuous local martingale with deterministic clock
- `thm-levy-characterization-of-brownian-motion` · theorem — Levy characterization of Brownian motion
- `cor-vector-levy-characterization` · corollary — Vector Levy characterization
- `def-brownian-generator` · definition — The Brownian differential generator
- `thm-dynkin-formula-for-bounded-brownian-stopping` · theorem — Dynkin formula for bounded Brownian stopping
- `rem-ito-versus-stratonovich-boundary` · remark — Ito versus Stratonovich boundary
- `rem-general-semimartingale-calculus-is-outside-this-block` · remark — General semimartingale calculus is outside this block
- `lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two` · lemma — A closed L2 subspace with trivial orthogonal complement fills L2
- `thm-brownian-filtration-martingale-representation` · theorem — Brownian-filtration martingale representation
- `cor-square-integrable-brownian-terminal-variables-have-ito-representations` · corollary — Square-integrable Brownian terminal variables have Ito representations
- `cor-brownian-filtration-local-martingales-have-continuous-versions` · corollary — Brownian-filtration local martingales have continuous versions

### `itos-formula-and-brownian-martingales-examples` — Itos Formula and Brownian Martingales — Examples (8 item(s))

- `ex-ito-formula-for-brownian-powers` · example — Ito formula for Brownian powers
- `ex-logarithm-of-geometric-brownian-motion` · example — Logarithm of geometric Brownian motion
- `ex-exponential-martingale-and-a-brownian-tail-bound` · example — Exponential martingale Brownian tail bound
- `ex-harmonic-functions-of-planar-brownian-motion` · example — Harmonic functions of planar Brownian motion
- `ex-expected-exit-time-from-an-interval-via-ito-formula` · example — Expected exit time from an interval
- `ex-brownian-hitting-probability-from-an-exponential-martingale` · example — Hitting probabilities from an exponential martingale
- `cex-the-ordinary-chain-rule-fails-for-brownian-motion` · counterexample — The ordinary chain rule fails for Brownian motion
- `cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability` · counterexample — An unbounded stopped exponential martingale needs uniform integrability

### `unbounded-self-adjoint-operators-and-stones-theorem` — Unbounded Self Adjoint Operators and Stones Theorem (41 item(s))

- `def-unbounded-linear-operator-domain-and-graph` · definition — Unbounded linear operator: domain, graph and extension
- `def-densely-defined-closed-and-closable-operator` · definition — Densely defined, closed, closable operators and cores
- `thm-closure-of-a-closable-operator` · theorem — Closure of a closable operator
- `def-adjoint-of-a-densely-defined-unbounded-operator` · definition — Adjoint of a densely defined operator
- `lem-unbounded-adjoint-is-well-defined-and-closed` · lemma — The adjoint is well defined, closed, and reverses inclusions
- `thm-closable-iff-adjoint-domain-is-dense` · theorem — Closability is equivalent to density of the adjoint domain
- `def-symmetric-self-adjoint-and-essentially-self-adjoint` · definition — Symmetric, self-adjoint, and essentially self-adjoint operators
- `cex-symmetric-need-not-be-self-adjoint` · counterexample — The minimal derivative is symmetric but not self-adjoint
- `def-resolvent-and-spectrum-of-a-closed-unbounded-operator` · definition — Resolvent and spectrum of a closed operator
- `thm-self-adjoint-resolvent-estimate` · theorem — Resolvent of a self-adjoint operator: nonreal resolvents and the estimate
- `thm-self-adjointness-range-criterion` · theorem — Range criterion for self-adjointness
- `def-cayley-transform-of-a-self-adjoint-operator` · definition — Cayley transform of a self-adjoint operator
- `thm-cayley-correspondence` · theorem — Cayley correspondence between self-adjoint operators and unitaries
- `def-unbounded-integral-against-a-pvm` · definition — Integral of a Borel function against a projection-valued measure
- `lem-unbounded-pvm-integral-is-well-defined-and-closed` · lemma — The unbounded PVM integral is densely defined, closed and normal
- `thm-spectral-theorem-for-unbounded-self-adjoint-operators` · theorem — Spectral theorem for unbounded self-adjoint operators (PVM form)
- `thm-unbounded-borel-functional-calculus` · theorem — Unbounded Borel functional calculus: domains, products, spectral mapping
- `def-strongly-continuous-one-parameter-unitary-group` · definition — Strongly continuous one-parameter unitary group
- `def-infinitesimal-generator-of-a-unitary-group` · definition — Infinitesimal generator of a unitary group
- `lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group` · lemma — A self-adjoint operator generates a strongly continuous unitary group
- `lem-laplace-resolvents-of-a-unitary-group` · lemma — Laplace resolvents of a unitary group
- `lem-generator-of-a-unitary-group-is-skew-adjoint` · lemma — The generator of a unitary group is closed and skew-adjoint
- `thm-stone-one-parameter-unitary-groups` · theorem — Stone's theorem: unitary groups and self-adjoint generators
- `def-deficiency-subspaces-and-deficiency-indices` · definition — Deficiency subspaces and deficiency indices
- `thm-von-neumann-self-adjoint-extension-parameterization` · theorem — Von Neumann parameterization of self-adjoint extensions
- `cor-self-adjoint-extension-exists-iff-deficiency-indices-agree` · corollary — Existence of self-adjoint extensions is equality of deficiency indices
- `def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces` · definition — Pure point, absolutely continuous and singular continuous spectral subspaces
- `thm-canonical-spectral-type-decomposition` · theorem — Canonical decomposition into pure point, absolutely continuous and singular continuous parts
- `def-relative-boundedness-with-respect-to-an-operator` · definition — Relative boundedness with respect to an operator
- `lem-second-resolvent-identity-for-closed-operator-perturbations` · lemma — Second resolvent identity for a closed perturbation
- `thm-kato-rellich` · theorem — Kato–Rellich theorem
- `def-discrete-and-essential-spectrum-of-a-self-adjoint-operator` · definition — Discrete and essential spectrum of a self-adjoint operator
- `thm-weyl-criterion-for-essential-spectrum` · theorem — Weyl criterion for the essential spectrum
- `def-relative-compactness-with-respect-to-an-operator` · definition — Relative compactness with respect to an operator
- `thm-weyl-essential-spectrum-invariance` · theorem — Weyl's theorem: invariance of the essential spectrum
- `def-norm-and-strong-resolvent-convergence` · definition — Norm and strong resolvent convergence
- `lem-resolvent-star-algebra-is-dense-in-c-zero` · lemma — The resolvent star algebra is dense in C_0(R)
- `thm-continuous-functional-calculus-under-resolvent-convergence` · theorem — Continuous functional calculus under resolvent convergence
- `cor-unitary-groups-converge-under-strong-resolvent-convergence` · corollary — Unitary groups converge under strong resolvent convergence
- `lem-spectral-form-domain-and-core-of-a-semibounded-operator` · lemma — Spectral form domain and core of a semibounded operator
- `thm-min-max-principle-below-essential-spectrum` · theorem — Min-max principle below the essential spectrum

### `unbounded-self-adjoint-operators-and-stones-theorem-examples` — Unbounded Self Adjoint Operators and Stones Theorem — Examples (7 item(s))

- `ex-unbounded-multiplication-operator-and-its-domain` · example — Unbounded multiplication operators: domain, spectral measure and spectrum
- `ex-position-operator-on-l-two-of-r` · example — Position operator on $L^2(\mathbb R)$
- `ex-periodic-derivative-and-its-unitary-translation-group` · example — Periodic derivative and its unitary translation group
- `cex-the-minimal-derivative-is-symmetric-not-self-adjoint` · counterexample — The minimal derivative has deficiency indices $(1,1)$ and many self-adjoint extensions
- `cex-an-everywhere-defined-closed-operator-on-a-banach-space-cannot-be-unbounded` · counterexample — An everywhere-defined closed operator on a Banach space is bounded
- `cex-strongly-continuous-unitary-group-need-not-be-norm-continuous` · counterexample — A strongly continuous unitary group need not be norm continuous
- `rem-self-adjoint-extensions-and-deficiency-indices` · remark — Self-adjoint extensions and deficiency indices: agreement pointer

## Your seams

Your pages depend on another group's:

- `unbounded-self-adjoint-operators-and-stones-theorem` requires `spectral-measures-and-borel-functional-calculus` (group c, batch 5)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

5 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-d856c7790dfb31a2858760ee · `cor-self-adjoint-extension-exists-iff-deficiency-indices-agree`** (from group c, gap-a-reader-closes) — Fact [A2] asserts 'two Hilbert spaces are unitarily isomorphic exactly when their orthonormal bases have the same cardinality' with citation ([[thm-existence-of-a-maximal-orthonormal-family]], [[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]). My items supply existence of a Hilbert basis and, for a given basis, the norm- and inner-product-preserving bijection H to l^2(I); neither states that a unitary isomorphism preserves the cardinality of a basis, so the 'exactly when' direction is not supplied as cited.
- **s8a-ab268debdef740fb3fd509b9 · `thm-weyl-criterion-for-essential-spectrum`** (from group c, presentation) — Fact [A4] supports 'by Bessel's inequality only finitely many terms of the sequence can have |<x_n,y>| > epsilon' with ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]). The definition item states orthonormality, finite independence and coefficient uniqueness, not Bessel's inequality; the cited supplier should be lem-finite-bessel-inequality or thm-bessel-inequality-for-an-arbitrary-orthonormal-family.
- **s8a-a8c2cd2e7f540362feb7c29b · `lem-cross-ito-isometry`** (from group d, presentation) — Wrong source title on 15 items of the Ito-integral pair. The Step-5a audit entry refuter:8:8 (confirmed nonfatal, repaired only in the routed carrier) found that the PDF at https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf has the title page 'Martingales, Diffusions and Financial Mathematics', yet the source titles read 'Aad van der Vaart, Stochastic Integration and Differential Equations, ...' in lem-cross-ito-isometry, def-progressively-measurable-and-predictable-process, lem-adapted-continuous-processes-are-progressively-measurable, lem-elementary-ito-integral-is-independent-of-the-step-representation, thm-density-of-elementary-predictable-processes-in-predictable-l2, thm-ito-integral-process-has-a-continuous-martingale-version, def-ito-integral-for-square-integrable-predictable-processes, lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative, thm-stopping-an-ito-integral, def-locally-square-integrable-predictable-brownian-integrand, thm-localized-ito-integral, thm-quadratic-variation-of-an-ito-integral, ex-covariance-of-two-deterministic-ito-integrals, cex-pathwise-riemann-stieltjes-integration-does-not-construct-the-brownian-ito-integral and cex-product-measure-ae-equality-is-not-pointwise-equality-of-integrands. The numbered results cited (Definition 5.20, Lemma 5.22, Theorem 5.26, etc.) are then attributed to the wrong book; the URL points to the correct document.
- **s8a-efce313c0ce17bdfd9ce7d2e · `thm-von-neumann-self-adjoint-extension-parameterization`** (from group d, gap-a-reader-closes) — Fact [A4] states 'If a unitary V satisfies ||Vu|| = ||u|| and V(K_+) = K_-, then U := C_T direct-sum (-V) is unitary on H' and cites thm-partial-isometry-characterizations. The cited item characterizes partial isometries by U*U being the orthogonal projection onto (ker U)^perp (and UU* the projection onto ran U); it says nothing about direct sums or about unitarity of a direct sum, so the citation supports less than the fact asserted (the missing argument is elementary but is not in the cited statement).
- **s8a-17d0b0d4a5f8633c7f9328d3 · `cor-self-adjoint-extension-exists-iff-deficiency-indices-agree`** (from group d, gap-a-reader-closes) — Fact [A2] asserts 'two Hilbert spaces are unitarily isomorphic exactly when their orthonormal bases have the same cardinality' and cites thm-existence-of-a-maximal-orthonormal-family together with thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set. The cited items state existence/completeness of a maximal orthonormal family and the isometric isomorphism H -> ell^2(I) for a given basis respectively; the unitary-isomorphism criterion for equal cardinalities has to be assembled from the two, and is not stated in either cited item.

Append one owning-group disposition per warning to `research/phase-2-remaining-27-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-nonadapted-step-integrand-breaks-the-ito-isometry` | `the-ito-integral-with-respect-to-brownian-motion-examples` | gpt-5.6-terra | `10ddd04f6e1d957c9a0343de698dc16457aed20087e634246ea44d606844e362` |
| `cex-an-everywhere-defined-closed-operator-on-a-banach-space-cannot-be-unbounded` | `unbounded-self-adjoint-operators-and-stones-theorem-examples` | gpt-5.6-terra | `57363fc142f23c60fa024ab23bc2d5ee493fa0b64c93a16cde22b1fbcff40e2d` |
| `cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability` | `itos-formula-and-brownian-martingales-examples` | gpt-5.6-terra | `51edfecd920c65dc7a6eda1e65f42d63960ec768017ddd90b8344c37d294b631` |
| `cex-pathwise-riemann-stieltjes-integration-does-not-construct-the-brownian-ito-integral` | `the-ito-integral-with-respect-to-brownian-motion-examples` | gpt-5.6-terra | `06c689c5f623f65bf2b9736d88f2dd555774509aa305c77691f97a62d40a1906` |
| `cex-product-measure-ae-equality-is-not-pointwise-equality-of-integrands` | `the-ito-integral-with-respect-to-brownian-motion-examples` | gpt-5.6-terra | `b7665b73cd54d347be37432c1aebab4a734d2314f7d07b4718a194ec01ba9014` |
| `cex-strongly-continuous-unitary-group-need-not-be-norm-continuous` | `unbounded-self-adjoint-operators-and-stones-theorem-examples` | gpt-5.6-terra | `bb27ab89662733ebd76ebaf788c56a65fe6360867e5b71156d0f1f702f397628` |
| `cex-symmetric-need-not-be-self-adjoint` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `6c42bfc407d6e917edc2eef1e23ac854bf41f3ab4b569f1f8fbc23830b8cbc9e` |
| `cex-the-minimal-derivative-is-symmetric-not-self-adjoint` | `unbounded-self-adjoint-operators-and-stones-theorem-examples` | gpt-5.6-terra | `75945fbf8fa9decc9146862fc8bf73386a510917d0d5aace593d5bc8d78cbb8d` |
| `cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation` | `brownian-path-properties` | gpt-5.6-terra | `6406c024936688e3606a8de47a970f359a250fe7e6471e84bbee691b94436624` |
| `cor-brownian-paths-have-infinite-total-variation-on-every-interval` | `brownian-path-properties` | gpt-5.6-terra | `04f87ec332617525c83a743a61c0a7cd15cedcb235c79f3cb659440330217e17` |
| `cor-critical-holder-boundary-at-zero-from-the-brownian-lil` | `brownian-path-properties` | gpt-5.6-terra | `5e5ca9afa1ca589bcd9d6e364686d2caefc35b34a02234a7edc655e7fe455bf3` |
| `cor-deterministic-ito-integrals-are-gaussian` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `063d3a9e117194a6930efe087951f068c04990a107118453ac61720c5ed6dd1f` |
| `cor-distribution-of-a-one-sided-brownian-hitting-time` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `fe03f2c31d321c82e427f53c3b89b1b80b93350c9f532d240c9a1293fc0f8cb9` |
| `cor-exponential-brownian-martingale` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `9b728d9f5ee713c02193817477bd72a8a45241906cd0011578e1de2206b39459` |
| `cor-heat-semigroup-martingale` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `b4088f0ec31865c5390f8180079e0bfb956952dc6f3ce1fdf8c7197a181410a1` |
| `cor-law-of-the-brownian-maximum` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `2df9128047cd878914d4edaa33e6a5644290f0f3dea6b68d5008ffa526f4c0c9` |
| `cor-one-dimensional-brownian-motion-hits-every-point-almost-surely` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `c6580b61c16a9c05f7da2f1d9955ebacff5ec46b68bbcca4d466f866dfebad39` |
| `cor-square-integrable-brownian-terminal-variables-have-ito-representations` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `27aa9a5e01d814d8321397467a46e495758eb5e067c9821f58a7b0e54791e94f` |
| `cor-unitary-groups-converge-under-strong-resolvent-convergence` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `375a9fa56fa0d4b9fdfc4a9f53c8474e88caa0afdf3737cfdfc92108744b0a6d` |
| `cor-vector-levy-characterization` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `cc753c291b86ac20e12ef8e320a7f2d1bb2168c6b7c627a1670880e24bdf3437` |
| `def-adjoint-of-a-densely-defined-unbounded-operator` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `50db031d49df00e6b69a43463f010b2011977ac7999b58fbac700f502b056fe1` |
| `def-brownian-generator` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `9dba7c5df41f090c0f08a8c6705dedad8321edf04976c9b37c11213093326b49` |
| `def-brownian-motion-started-at-x` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `80fccf6fe3b96869d81d2a812096fe24a53a38629ffc088ebad470520fb6ee2d` |
| `def-cayley-transform-of-a-self-adjoint-operator` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `256846c5d532c5e4cd924f4823eb55e585ac8a06d5bfcdb9631759e8ae79b5dc` |
| `def-continuous-brownian-ito-process` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `15cc8a6c5d146205b576f7b3d53009728fb1a1730f9698a11ff24bc36ea79159` |
| `def-continuous-time-adapted-process-and-martingale` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `42ba4b122c548422cb9ad19ccd1c80c5e850137c10d917c0f0227e99996a3e1a` |
| `def-continuous-time-stopping-time` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `0a924acfe28f37968a40b1690ad93be74d3bb35090802a155b32ae20b0a7b1e4` |
| `def-deficiency-subspaces-and-deficiency-indices` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `7a617091632fcecbc4bd6ed1f22c5a10802ce2b71f0b6cbfa12269209d4115c6` |
| `def-discrete-and-essential-spectrum-of-a-self-adjoint-operator` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `611fa73c484293b0a9233952b2b0ea523c03f0ad4c7cac51c684cbfb3035723f` |
| `def-elementary-predictable-brownian-integrand` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `21772198e75ab76ba6910a6f5e4712aa0f278f432dcbe6f95c2eec9a571be752` |
| `def-infinitesimal-generator-of-a-unitary-group` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `08fd015d0db16f1a08aa27170f3773f72e56be11f595473967260912068b090e` |
| `def-ito-integral-for-square-integrable-predictable-processes` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `e601a7ed3144e651725609ceb91140a504970fb83ba9106f71c3382603145631` |
| `def-ito-integral-of-an-elementary-predictable-process` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `bd68c83ee801e84876215be76445d3530e033e955b24471ef7a7142543632c85` |
| `def-natural-and-usual-augmented-brownian-filtrations` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `30ee18a7effb4fa02ea66a9b7c61d634eb04034bb98c2976fa333c15755b2521` |
| `def-progressively-measurable-and-predictable-process` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `fd36268406cf37476ca4bd529f73d260518e9efb28354b95ca63a4d85837532b` |
| `def-quadratic-covariation-of-brownian-ito-processes` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `1117cabd4db0d713e5b0d0620a78a3bf12055da73e9d2fc369cc47978d2827de` |
| `def-quadratic-variation-along-a-partition-sequence` | `brownian-path-properties` | gpt-5.6-terra | `26a445b967d46ef1e7f690c0382624d4815a0537698d9d93939edc45cc95f38f` |
| `def-relative-compactness-with-respect-to-an-operator` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `0ed9c265dee9447602185cf09c476ef8fc70b2a4ad09d2eba4a9a24154598dd5` |
| `def-resolvent-and-spectrum-of-a-closed-unbounded-operator` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `8c4d2f2a72b274a23ca324432ff57a4667fa254f98ba933859d12a68cab44756` |
| `def-unbounded-integral-against-a-pvm` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `bb52cfc4b2874cd7de080b02be0ff3056093933c8f5bd8cb5ad5288a78cf53b8` |
| `ex-brownian-hitting-probability-from-an-exponential-martingale` | `itos-formula-and-brownian-martingales-examples` | gpt-5.6-terra | `c99e27a81a2897b9fa3eb4c1d57567f1095e9235833935fd780c574fae16c176` |
| `ex-brownian-path-p-variation-threshold` | `brownian-path-properties-examples` | gpt-5.6-terra | `6ff5cdfc9878fa7e9b8703a87f59f4ac7dc65c55ad6cc7e1f591a4e4c75df181` |
| `ex-brownian-transition-density-and-semigroup-convolution` | `brownian-motion-markov-properties-and-hitting-times-examples` | gpt-5.6-terra | `07ae840168822edb1f8200b8fb4cfcaa87d595bdb3b54e2b1e25614d4c6bc503` |
| `ex-covariance-of-two-deterministic-ito-integrals` | `the-ito-integral-with-respect-to-brownian-motion-examples` | gpt-5.6-terra | `5167aebddc2052969552f3bcc59fa64b10a7de2e6fb0b3c3c8bdc690a67e604d` |
| `ex-density-and-infinite-mean-of-a-one-sided-hitting-time` | `brownian-motion-markov-properties-and-hitting-times-examples` | gpt-5.6-terra | `01de91c4f7e8c0f7257f35509db42df9b1af88c8426cac892621fc0a13323d25` |
| `ex-exit-side-probability-from-an-interval` | `brownian-motion-markov-properties-and-hitting-times-examples` | gpt-5.6-terra | `bd4239ed4ae0c097de76b0cb7c90f5ce6a30f8197baa6e5a64d19310ff5774a3` |
| `ex-expected-dyadic-quadratic-variation` | `brownian-path-properties-examples` | gpt-5.6-terra | `e5784cabaa4af20ecad7171df501e3b8a008428258fb9ba569c4da6398263da9` |
| `ex-expected-exit-time-from-an-interval-via-ito-formula` | `itos-formula-and-brownian-martingales-examples` | gpt-5.6-terra | `03fd59fcb29038e9c3525047514035eb0de1dbeec79fae387e05fd10f5837cf5` |
| `ex-exponential-martingale-and-a-brownian-tail-bound` | `itos-formula-and-brownian-martingales-examples` | gpt-5.6-terra | `c97610e60af5f6d9190965a665c8e9e0d747b895346e91ba19232914947d9a8c` |
| `ex-harmonic-functions-of-planar-brownian-motion` | `itos-formula-and-brownian-martingales-examples` | gpt-5.6-terra | `c781980a58883018e7dc8b45c4cde0f7017ec5aa3280cf29b965f8584b66cbae` |
| `ex-integral-of-a-deterministic-step-function-against-brownian-motion` | `the-ito-integral-with-respect-to-brownian-motion-examples` | gpt-5.6-terra | `27c0784e137229e6ad5c258ae2efe12c3265de5c00ba70726fb516e54b7edb2d` |
| `ex-integral-of-brownian-motion-against-itself-preview` | `the-ito-integral-with-respect-to-brownian-motion-examples` | gpt-5.6-terra | `ed63c8e72af558183392df6a01ca7cd15e556eb386f1e7097428448acd034cf9` |
| `ex-ito-formula-for-brownian-powers` | `itos-formula-and-brownian-martingales-examples` | gpt-5.6-terra | `fe4a179ce0cc4fd1937c536f757005101b8239f9fe13604404f368fd63f0a995` |
| `ex-lil-rules-out-a-global-square-root-time-bound` | `brownian-path-properties-examples` | gpt-5.6-terra | `8682a7e1f7d361d3724c7e2d38fbc1ff6a59a677bb364a2c0f580bd97a7cd81f` |
| `ex-logarithm-of-geometric-brownian-motion` | `itos-formula-and-brownian-martingales-examples` | gpt-5.6-terra | `bba86b2d05ea4a3d46cec94c6e3a3938e309448adb4322bd016cb08ba0ce5399` |
| `ex-maximum-crossing-probability-before-a-fixed-time` | `brownian-motion-markov-properties-and-hitting-times-examples` | gpt-5.6-terra | `9f0092cea1a39cdca2ae61a9560c0a75b6487ccfd05795a07002f590415888df` |
| `ex-periodic-derivative-and-its-unitary-translation-group` | `unbounded-self-adjoint-operators-and-stones-theorem-examples` | gpt-5.6-terra | `f0b6c2a83c8756c6c4e913d344ac29186fb6c1db6e56c7e6308f9b3e2f4fefb3` |
| `ex-planar-brownian-coordinate-hitting-versus-point-hitting-boundary` | `brownian-motion-markov-properties-and-hitting-times-examples` | gpt-5.6-terra | `af0550022602c10ecc270988346ec27724317f87abfaad0ce9db5d5343db9829` |
| `ex-position-operator-on-l-two-of-r` | `unbounded-self-adjoint-operators-and-stones-theorem-examples` | gpt-5.6-terra | `1f57c91db4eb1ddd44bb9f67fcb4403854e08ac77c72d5069d1a25131e13a671` |
| `ex-successive-brownian-hits-restart-independent-copies` | `brownian-motion-markov-properties-and-hitting-times-examples` | gpt-5.6-terra | `2dd37edaacba415354278376d9ef6b1be9db6f673546e95427afabe3548befed` |
| `ex-unbounded-multiplication-operator-and-its-domain` | `unbounded-self-adjoint-operators-and-stones-theorem-examples` | gpt-5.6-terra | `651bda901449607c565d8d46465b48dff66c948bd63c915949c6b66fb49abe62` |
| `ex-zero-set-has-zero-measure-but-is-uncountable` | `brownian-path-properties-examples` | gpt-5.6-terra | `3e17af0fc1399387a9e376cb3d724c109573ea7c79b377db7504cc71fba12c39` |
| `lem-adapted-continuous-processes-are-progressively-measurable` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `76ae38b42a7423ffcc2b8e4166a2ef9222a04bc8695170081e9c125094addb44` |
| `lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `848b1db6a3dc1bed4cad7a87a2289fcc0064b493799d0f800db9493e274d296d` |
| `lem-brownian-step-potential-resolvent-at-zero` | `brownian-path-properties` | gpt-5.6-terra | `602c97dd2ecf2955333f7535e8e8637f49b7944faa9ab5ecede99457197b4361` |
| `lem-brownian-transition-semigroup-property` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `f770853a256faa80b7ca03bd3c83f036d1715941c07a68d1c9ebe398b9aba196` |
| `lem-brownian-zero-set-has-lebesgue-measure-zero` | `brownian-path-properties` | gpt-5.6-terra | `fe8c1727eb5b9737b2a08937d38750c7fb10d3cdaa689178221d2e3a93b7b922` |
| `lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `033a7b595fb8f3b3aaa202e374b83cedfc8ad69a04d0d6a08186d304b6153ff0` |
| `lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `97679b2175fcda2e6fdd2c3f1d8837f5e22240b13bab1abf278845b00f63fd51` |
| `lem-conditioning-a-known-state-and-independent-noise` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `28cc763563fb2d8419e5a2b18da292a686e2252132cdc87c7344e69882bdf030` |
| `lem-elementary-ito-integral-is-independent-of-the-step-representation` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `4a8ecc3b60ad63c6ce74524803399335af162c462e82071b4cba9e64850f1019` |
| `lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `3cbde3c37f3de9d20316283f3115bb7344134b6765b6a5c23d13c0ab96cf9278` |
| `lem-generator-of-a-unitary-group-is-skew-adjoint` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `c83e3ac4a839e8273987ed086e58c1638f894a08fdebce0278fa1e1a80b8745d` |
| `lem-laplace-resolvents-of-a-unitary-group` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `b62470346007eebf6eb82de134fb34cd95ba7631739fa379fd879c43fd4fa52b` |
| `lem-planar-brownian-annular-exit-probability` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `572c54a83498572d1dccc15d42a2ef23cc4f5eb10ae983e9dae8450571dd992c` |
| `lem-resolvent-star-algebra-is-dense-in-c-zero` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `6d0b0cf1d71a918fdc59cacaf87c17c456702bfe27d41da2f0d5aa78d4441a4b` |
| `lem-second-resolvent-identity-for-closed-operator-perturbations` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `f8839e7305f07c80c9dceb5d36e0278d021d99d7acf43b24b53ac62af422a6f5` |
| `lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `9dbcae489b7320f56a6a0737a5c76a35d1d3860b5c46d401f9b2ee16571ea908` |
| `lem-spectral-form-domain-and-core-of-a-semibounded-operator` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `83863f68ca4ff3b756bb919433035084a7a4faaf2b82a59c8e5c266a31756155` |
| `lem-unbounded-pvm-integral-is-well-defined-and-closed` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `bce2f303c5cf639af269d472eeaebb9cc9232e2e05329293908c95841469f967` |
| `rem-general-semimartingale-calculus-is-outside-this-block` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `b5ecc5fa99dc394696f97f5b4c723d013917ef14e2e83ade5e735f9709779142` |
| `rem-ito-versus-stratonovich-boundary` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `d6debdcaca89ee4588a5167a39fcb1a8928a7d8a2a5795ab05d8ea94c7c27b9f` |
| `rem-quadratic-variation-depends-on-the-approximating-partitions-without-regularity` | `brownian-path-properties` | gpt-5.6-terra | `c2a71e43c7b50deb4551e7151e1d6962240908ba90fff42e8da8d9e08ca64a68` |
| `rem-raw-versus-usual-filtration-in-the-strong-markov-theorem` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `863b6e16e8045d7a6c8ca8e3feea1dbe3f07a6764e059b05f4e1691834a7a48e` |
| `thm-brownian-filtration-martingale-representation` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `aba66d75238cf50b299826fb90c00e889780e92e61734bfcef2847d009bd8107` |
| `thm-brownian-future-path-markov-property` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `ce7671883645929726e57aec1cefb004f361af8e07b8c31dfd897cf695d938a7` |
| `thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law` | `brownian-path-properties` | gpt-5.6-terra | `35842aa1b600b78d61f55e18d7277b0ea99a26eee4890015ae81c9f0d7399441` |
| `thm-brownian-markov-property` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `5206fd74e0407239767b5cb4e35196fd6944cf14e654713c3b1affbc4ce286ed` |
| `thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval` | `brownian-path-properties` | gpt-5.6-terra | `ba8b4a0c7c38fe05debc4d08f0d6328c10c177d40b92fea2a0881abef298eb66` |
| `thm-brownian-paths-are-nowhere-differentiable` | `brownian-path-properties` | gpt-5.6-terra | `d5732c5c609f0e4dc7392a2a7a14b87a1f26796cba2a23f5b083d6ae6d33d07c` |
| `thm-brownian-positive-occupation-proportion-has-the-arcsine-law` | `brownian-path-properties` | gpt-5.6-terra | `15470371ff1eaa570179d6f9468919702dc699786a3a2b95e1e412cec14d55d7` |
| `thm-brownian-reflection-principle` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `b7c3a492669e0a4a79c8075d7d7eb69f5d85b4ba788a80632d5d3806c001a6de` |
| `thm-brownian-zero-set-has-no-isolated-points` | `brownian-path-properties` | gpt-5.6-terra | `cee247a83d3c71800d72c6d8f2d89ef9d47f532aa7cefbf6de071e422855bd2d` |
| `thm-canonical-spectral-type-decomposition` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `452288268a61f96bf4cf5f382f2fdfef78f528e26d25e60d29fa7192d05ec447` |
| `thm-cayley-correspondence` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `69bf678e8b33c96a0a4f33889b9c0673b8c7bb1a3a777cd969704566405e858f` |
| `thm-closable-iff-adjoint-domain-is-dense` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `0feeb29ef5a8eda21797ca539b0461534b220f1590870a0ea1fab8528462bafa` |
| `thm-continuous-functional-calculus-under-resolvent-convergence` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `20378b2dca702b9b2e1e01b018b3ea6719a27092ab1cbf8a97074add5cffe3f6` |
| `thm-doob-maximal-bound-for-the-ito-integral` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `862f2635d3a5a7fe3798004d42f9241aa54a8d4ba9f42da698b8ca0e441386c6` |
| `thm-dynkin-formula-for-bounded-brownian-stopping` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `9923bfe4cfad9b838ae3740cd7e1b3760506f0e0b2a16351f07d69862684a1dc` |
| `thm-integration-by-parts-for-brownian-ito-processes` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `f8aa301b9db1353889c7047eb8327d4745f37c5c28508a251c4809203d78bd55` |
| `thm-ito-formula-one-dimensional` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `518c1fd6ce31e2247b904f805b521d08acde6acb392daac7160928643e37ea3a` |
| `thm-ito-integral-process-has-a-continuous-martingale-version` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `e6aa9b74fe213e8ff01e4fba942186ffd1cdc4ada7c032939da1fe7a40f309ab` |
| `thm-ito-isometry-for-elementary-integrands` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `d846f6d05af0d9aff21470bf9ec8549689a616edf0b876b5bb1665ffa2c37a80` |
| `thm-kato-rellich` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `af0b0743887d6984c8e68679f8b4121ecada4f4a835036751de4f978355f8ef6` |
| `thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity` | `brownian-path-properties` | gpt-5.6-terra | `e2905121c8d234cb5661742340072cd7a9df5c559dd9443d3493d3e6c56e0c99` |
| `thm-localized-ito-integral` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `0b7ae0d3fc8fbfcb3e685bf96ed4a308ae3b3dfe3f48800bf1b6235f83882e7e` |
| `thm-min-max-principle-below-essential-spectrum` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `6d63e2b3840c886f42d91dbb2d30ad40bc672bb36daf76e03a8cd773838b4222` |
| `thm-multidimensional-ito-formula-for-brownian-driven-processes` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `dbe770584c81f1a3c2bfaa780d9f016517e570c9702452231ba8b45791e7019e` |
| `thm-quadratic-covariation-of-brownian-ito-processes` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `dc8ddfaa393b7df1734ccaafabb86f9e01be6829b4dc4d50c930e65f3d9aada1` |
| `thm-quadratic-variation-of-an-ito-integral` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `9d67e75176d85484a013acd6b93ad0e3a9d48e61b154045278eb087638b4f23e` |
| `thm-self-adjoint-resolvent-estimate` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `a96ce990fa32ce0f8be78c877cb948bf6b9ade73bb9b03350eaa9b1a001f23ab` |
| `thm-self-adjointness-range-criterion` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `3f3e7c5a75b7b4a81365856b38da06779c12c7c2e60665539bd93916279fe863` |
| `thm-space-time-harmonic-functions-yield-brownian-local-martingales` | `itos-formula-and-brownian-martingales` | gpt-5.6-terra | `08032b5ebe24c5625a00b33b590b093163de90259485e87f216cf8968afafeff` |
| `thm-spectral-theorem-for-unbounded-self-adjoint-operators` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `07ae2aa1c1960ee1208a96b11dc6dd00ed84565d7f4a14db6406bb2a2800bf88` |
| `thm-stone-one-parameter-unitary-groups` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `af02c0b7e8dd2fcd9e99f8ab053f877e901b92679b2986a0907daa60a3b986d9` |
| `thm-stopping-an-ito-integral` | `the-ito-integral-with-respect-to-brownian-motion` | gpt-5.6-terra | `485c34b82c27025e48eed745b883497885551011cf7079bf095bc8a711274213` |
| `thm-strong-markov-property-of-brownian-motion` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `a693dc042f5eec669447d87a416b9c750db296e26be39e4dd23e865a3cc08925` |
| `thm-two-sided-exit-probability-for-brownian-motion` | `brownian-motion-markov-properties-and-hitting-times` | gpt-5.6-terra | `162190bac1919dfc604231ee80defc22693fde2c1836cbbfd444da6c294f8e0c` |
| `thm-unbounded-borel-functional-calculus` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `53e68e53ea991cfd1a21a747cf039799229ee145628f0808c24bf12e99695227` |
| `thm-von-neumann-self-adjoint-extension-parameterization` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `c89d76d0c6f858656318e5cd279539a8d3c142343cd06506689df8c9651a7230` |
| `thm-weyl-criterion-for-essential-spectrum` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `c20fcac53a5d4684f6ab513ff5026bf1ae932db3253a40dac17e4dee63413b9a` |
| `thm-weyl-essential-spectrum-invariance` | `unbounded-self-adjoint-operators-and-stones-theorem` | gpt-5.6-terra | `ee3ddaac34d04fe7ab5e91fb9e0e9d3eaeb6e1414e0da0051f3dd31cb05bac27` |

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

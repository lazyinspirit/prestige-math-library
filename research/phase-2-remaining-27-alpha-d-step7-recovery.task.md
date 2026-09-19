# Step 7 adjudication — group **d**, run `phase-2-remaining-27`

You are the group Alpha for batches **7**, **8**, **6**: 5 A/B pair(s), 10 page(s), 161 item(s), 0 open rejection(s) over 0 item(s).

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-remaining-27-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

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

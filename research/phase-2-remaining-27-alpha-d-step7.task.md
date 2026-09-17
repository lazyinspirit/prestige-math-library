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

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

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

None. No Step-6 reader warning targets an item you own.

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

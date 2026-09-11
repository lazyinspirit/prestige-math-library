# Step 7 adjudication — group **b**, run `phase-2-next-20`

You are the group Alpha for batches **2**, **15**: 3 A/B pair(s), 6 page(s), 70 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-20-alpha-b-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-next-20-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

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

## Step-6 reader warnings

2 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-0ad5195c4d51cc7a69135001 · `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`** (from group b, gap-a-reader-closes) — Step 2.1 asserts that 'continuity of the exponential at zero gives a single δ>0 such that |h|<δ implies |exp(-2πix·h)-1| < ε/(2(1+||f||_1))' for all |x| ≤ R. Continuity of (x,h) -> exp(-2πix·h) at h=0 alone gives only a δ depending on x; uniformity over the compact slice |x| ≤ R is the extra step (Heine-Cantor on the box, or the bound |exp(iθ)-1| ≤ |θ| ≤ 2πR|h|). The cited facts F2/F3/F4 do not supply it and the item does not name it.
- **s8a-e3aa0075b212358a123532bd · `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`** (from group b, presentation) — Step 1.1 derives ∫exp(-πx^2)dx = 1 from the cited ∫exp(-x^2)dx = sqrt(π) without displaying the rescaling substitution, and compresses the majorant bound |x|^m exp(-cx^2) <= C exp(-cx^2/2) into 'F3 bounds ... on the tails' plus continuity on a compact middle. Both are immediate, but they are steps the reader must reconstruct rather than read.

Append one owning-group disposition per warning to `research/phase-2-next-20-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-20-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-next-20`

Read `research/phase-2-next-20-judge-closure.json`,
`research/phase-2-next-20-judge.jsonl`,
`research/phase-2-next-20-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-next-20-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-next-20-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-next-20-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.

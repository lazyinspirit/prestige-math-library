# Step 5 adjudication — group **p**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 47, 48, 49: 3 A/B pair(s), 6 page(s), 45 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **47**: `research/machine-learning-all-101-2026-10-19-batch-47-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **48**: `research/machine-learning-all-101-2026-10-19-batch-48-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **49**: `research/machine-learning-all-101-2026-10-19-batch-49-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/machine-learning-all-101-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 47 | `sample-covariance-resolvent-limits` | A | machine-learning | 2787 | `marchenko-pastur-law-and-edge-bounds`, `finite-basis-projector-energies-and-variational-electronic-structure`, `interpolative-cur-and-nystrom-decompositions` |
| 47 | `sample-covariance-resolvent-limits-examples` | B | machine-learning | 2877 | `sample-covariance-resolvent-limits` |
| 48 | `minimum-norm-interpolation-and-double-descent` | A | machine-learning | 2788 | `ml02-rkhs-svm`, `sample-covariance-resolvent-limits`, `the-moore-penrose-pseudoinverse-and-regularised-least-squares` |
| 48 | `minimum-norm-interpolation-and-double-descent-examples` | B | machine-learning | 2789 | `minimum-norm-interpolation-and-double-descent` |
| 49 | `neural-tangent-kernels-and-lazy-training` | A | machine-learning | 2790 | `automatic-differentiation-and-backpropagation`, `ml02-rkhs-svm`, `plancherel-measure-and-asymptotic-young-diagrams`, `cost-constrained-gaussian-and-feedback-channels` |
| 49 | `neural-tangent-kernels-and-lazy-training-examples` | B | machine-learning | 2791 | `neural-tangent-kernels-and-lazy-training` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sample-covariance-resolvent-limits` — Sample-covariance resolvent deterministic equivalents (15 item(s))

- `def-sample-covariance-directional-spectral-measure` · definition — Directional spectral measure of a Hermitian matrix
- `lem-bounded-complex-iid-matrix-norm-bound` · lemma — Operator-norm bound for bounded complex iid matrices
- `lem-complex-quadratic-form-fourth-moment-bound` · lemma — Fourth-moment bound for a centered complex quadratic form
- `lem-deformed-mp-fixed-point-solution-is-unique` · lemma — Uniqueness of the deformed Marchenko–Pastur fixed point
- `lem-hermitian-rank-one-resolvent-update-and-trace-norm-bound` · lemma — Hermitian rank-one resolvent update and trace-norm bound
- `lem-bounded-complex-resolvent-quadratic-form-concentration` · lemma — Adapted concentration of bounded complex resolvent quadratic forms
- `lem-hermitian-resolvent-trace-concentration` · lemma — Concentration of the normalized complex Hermitian resolvent trace
- `lem-hermitian-spectral-measure-is-probability` · lemma — A Hermitian directional spectral measure is a probability law
- `lem-bounded-complex-resolvent-deterministic-equivalent` · lemma — Deterministic equivalent for the bounded complex sample-covariance resolvent
- `thm-general-population-sample-covariance-esd-limit-for-bounded-entries` · theorem — General-population sample-covariance law for bounded entries
- `thm-directional-sample-covariance-resolvent-limit-for-bounded-entries` · theorem — Directional deterministic equivalent for bounded sample-covariance entries
- `lem-complex-sample-covariance-norm-bound-from-real-edge` · lemma — A coarse complex sample-covariance norm bound from real edge bounds
- `thm-directional-sample-covariance-resolvent-limit` · theorem — Sample-covariance resolvent deterministic equivalents
- `cor-isotropic-minimum-norm-risk-closure-under-edge-gap` · corollary — Isotropic minimum-norm risk limits under a positive spectral gap
- `cor-negative-axis-directional-resolvent-integrals` · corollary — Fixed negative-axis directional resolvent integrals converge

### `sample-covariance-resolvent-limits-examples` — Sample-covariance resolvent deterministic equivalents — Examples (3 item(s))

- `ex-anisotropic-sample-covariance-directional-condition` · example — An anisotropic population with a balanced deterministic direction
- `ex-isotropic-sample-covariance-directional-marchenko-pastur-limit` · example — An isotropic finite-fourth-moment design
- `ex-critical-aspect-one-no-positive-edge-gap` · example — At aspect one the reciprocal-spectrum limit diverges

### `minimum-norm-interpolation-and-double-descent` — Minimum-norm interpolation and double descent (9 item(s))

- `def-ridgeless-minimum-norm-regression` · definition — Ridgeless minimum-norm least-squares regression
- `lem-iid-uniform-fill-distance-rate` · lemma — Uniform samples have logarithmic fill-distance rate on a cube
- `lem-ridgeless-risk-decomposition` · lemma — Exact bias and noise decomposition of isotropic prediction risk
- `lem-dense-cube-polynomial-norming-and-reproduction` · lemma — Dense samples on a cube norm and reproduce polynomials with exponential coefficient bounds
- `lem-gaussian-rbf-power-function-fill-distance-bound` · lemma — Gaussian RKHS power function decays exponentially with inverse fill distance
- `thm-noiseless-rkhs-interpolation-fill-distance-bound` · theorem — Noiseless Gaussian RKHS interpolation error under uniform sampling
- `lem-zero-signal-isotropic-risk-limit` · lemma — Isotropic ridgeless risk limit when the signal is zero
- `thm-isotropic-ridgeless-risk-across-interpolation-threshold` · theorem — Isotropic ridgeless least-squares risk on both sides of interpolation
- `lem-isotropic-minimum-norm-risk-components` · lemma — Separate isotropic ridgeless risk into limiting bias and variance

### `minimum-norm-interpolation-and-double-descent-examples` — Minimum-norm interpolation and double descent — Examples (2 item(s))

- `ex-double-descent-in-neural-and-tree-models` · example — Reported double-descent experiments for neural networks and tree ensembles
- `ex-isotropic-risk-components-and-signal-to-noise-regimes` · example — Bias, variance, and signal-to-noise regimes of the isotropic risk curve

### `neural-tangent-kernels-and-lazy-training` — Neural tangent kernels and lazy training (12 item(s))

- `def-neural-tangent-kernel` · definition — The neural tangent kernel of a differentiable parameterized function
- `def-width-normalized-fully-connected-network` · definition — Jacot–Gabriel–Hongler width-normalized fully connected networks
- `lem-gaussian-ltwo-hermite-completeness` · lemma — Completeness of normalized probabilists’ Hermite polynomials in Gaussian L²
- `lem-bivariate-gaussian-feature-expectations-continuous` · lemma — Continuity of bivariate Gaussian feature expectations, including singular limits
- `lem-gaussian-activation-covariance-strictness-and-ntk-recursion` · lemma — Gaussian activation covariance and tangent recursion preserve strict positivity
- `lem-gaussian-hermite-covariance-expansion` · lemma — Hermite expansion of a correlated Gaussian feature kernel
- `thm-positive-definite-kernel-flow-converges-for-attained-convex-cost` · theorem — A finite positive-definite kernel flow converges for an attained convex cost
- `lem-biased-hermite-kernel-is-strictly-positive-definite` · lemma — Positive bias makes the Hermite feature kernel strictly positive definite on every sphere
- `lem-fixed-time-lazy-training-stability` · lemma — Finite-data fixed-time NTK stability under integrably bounded training directions
- `thm-sequential-infinite-width-ntk-limit` · theorem — Sequential infinite-width NTK limit and finite-time lazy training dynamics
- `prop-ntk-positive-definite-on-the-sphere` · proposition — The limiting neural tangent kernel is strictly positive definite on every unit sphere
- `thm-least-squares-ntk-mode-decay` · theorem — Least-squares NTK flow decays mode by mode and fits distinct sphere data

### `neural-tangent-kernels-and-lazy-training-examples` — Neural tangent kernels and lazy training — Examples (4 item(s))

- `ex-finite-width-quadratic-network-has-changing-features-and-ntk` · example — A finite-width quadratic feature network has a changing NTK
- `ex-wide-tanh-network-lazy-on-a-fixed-time-horizon` · example — A wide tanh network stays lazy on a fixed time horizon
- `ex-ntk-mode-wise-exponential-decay` · example — An NTK eigenmode decays exponentially under least squares
- `ex-duplicate-inputs-make-ntk-gram-singular` · example — Duplicate inputs make the unquotiented NTK Gram matrix singular

## Your seams

Your pages depend on another group's:

- `sample-covariance-resolvent-limits` requires `marchenko-pastur-law-and-edge-bounds` (group o, batch 46)
- `minimum-norm-interpolation-and-double-descent` requires `ml02-rkhs-svm` (group e, batch 15)
- `neural-tangent-kernels-and-lazy-training` requires `automatic-differentiation-and-backpropagation` (group m, batch 38)
- `neural-tangent-kernels-and-lazy-training` requires `ml02-rkhs-svm` (group e, batch 15)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/machine-learning-all-101-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `machine-learning-all-101-2026-10-19`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.

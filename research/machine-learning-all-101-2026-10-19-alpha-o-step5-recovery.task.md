# Step 5 adjudication — group **o**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 44, 45, 46: 3 A/B pair(s), 6 page(s), 60 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **44**: `research/machine-learning-all-101-2026-10-19-batch-44-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **45**: `research/machine-learning-all-101-2026-10-19-batch-45-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **46**: `research/machine-learning-all-101-2026-10-19-batch-46-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 44 | `implicit-bias-of-gradient-training` | A | machine-learning | 2782 | `automatic-differentiation-and-backpropagation`, `constant-rank-submersions-and-regular-level-sets`, `convex-and-semicontinuous-functions-on-rn`, `inner-product-spaces-and-orthogonality`, `the-moore-penrose-pseudoinverse-and-regularised-least-squares`, `numerical-optimization-for-statistical-computation`, `inequality-kkt-duality-and-optimality-certificates` |
| 44 | `implicit-bias-of-gradient-training-examples` | B | machine-learning | 2783 | `implicit-bias-of-gradient-training` |
| 45 | `overparameterized-training-and-interpolation` | A | machine-learning | 2784 | `gaussian-process-support-and-concentration`, `nonconvex-gradient-descent-and-stationarity`, `the-spectral-theorem-and-singular-value-decomposition` |
| 45 | `overparameterized-training-and-interpolation-examples` | B | machine-learning | 2785 | `overparameterized-training-and-interpolation`, `randomized-low-rank-approximation` |
| 46 | `marchenko-pastur-law-and-edge-bounds` | A | machine-learning | 2786 | `the-spectral-theorem-and-singular-value-decomposition`, `weak-convergence-tightness-and-representation`, `robust-influence-and-breakdown` |
| 46 | `marchenko-pastur-law-and-edge-bounds-examples` | B | machine-learning | 2876 | `marchenko-pastur-law-and-edge-bounds` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `implicit-bias-of-gradient-training` — Implicit bias of gradient-based learning (18 item(s))

- `def-clarke-subdifferential-and-gradient-flow` · definition — Clarke subdifferential and gradient-flow trajectory
- `def-linear-separable-margin-and-hard-margin-svm` · definition — Bias-free linear margins and the hard-margin SVM
- `def-tight-exponential-tail` · definition — Tight exponential tail for a positive loss derivative
- `thm-zero-initialized-gd-selects-minimum-norm-least-squares` · theorem — Zero-initialized gradient descent selects minimum-norm least squares
- `lem-hard-margin-svm-has-unique-minimizer` · lemma — A strictly separable finite sample has a unique hard-margin vector
- `lem-logistic-and-exponential-losses-have-tight-exponential-tail` · lemma — Logistic and exponential losses satisfy the tight-tail condition
- `def-homogeneous-classifier-margin-and-exponential-risk` · definition — Homogeneous classifier margins and exponential training risk
- `def-margin-kkt-and-mfcq` · definition — KKT conditions and MFCQ for margin constraints
- `lem-clarke-euler-identity-for-homogeneous-margins` · lemma — Euler identity for Clarke subgradients of homogeneous margins
- `lem-clarke-sum-chain-rule-for-exponential-risk` · lemma — Clarke chain rule for finite exponential empirical risk
- `lem-recursive-hard-margin-comparison-trajectory` · lemma — Recursive hard-margin comparison trajectories have summable descent defects
- `thm-separable-logistic-gd-selects-hard-margin-direction` · theorem — Separable logistic and exponential gradient descent select the hard-margin direction
- `lem-homogeneous-margin-constraints-satisfy-mfcq` · lemma — Homogeneous margin constraints satisfy MFCQ
- `lem-homogeneous-clarke-flow-margin-monotonicity` · lemma — Smoothed margin monotonicity along homogeneous Clarke flow
- `lem-approximate-margin-kkt-limit-under-mfcq` · lemma — Limits of approximate margin-KKT points under MFCQ
- `lem-local-margin-minimum-satisfies-kkt-under-mfcq` · lemma — A constrained local margin minimum satisfies Clarke KKT under MFCQ
- `lem-homogeneous-clarke-flow-produces-approximate-margin-kkt-points` · lemma — Homogeneous Clarke flow produces approximate margin-KKT points
- `thm-homogeneous-gradient-flow-limit-satisfies-margin-kkt` · theorem — Homogeneous gradient-flow limit points satisfy margin KKT conditions

### `implicit-bias-of-gradient-training-examples` — Implicit bias of gradient-based learning — Examples (3 item(s))

- `ex-underdetermined-linear-system-gd-minimum-norm` · example — Zero-initialized descent on an underdetermined system
- `ex-degenerate-hard-margin-support-vector` · example — A redundant active margin with zero KKT multiplier
- `ex-homogeneous-kkt-point-not-global-margin-maximizer` · example — A homogeneous-network KKT point that is not globally optimal

### `overparameterized-training-and-interpolation` — Overparameterized networks and training to interpolation (11 item(s))

- `lem-du-activation-normalizer-finite-positive` · lemma — The Gaussian activation normalizer is finite and positive
- `lem-du-conditional-loss-contraction-under-gram-control` · lemma — Gram control and a Taylor remainder imply one-step loss contraction
- `def-du-overparameterized-network-architectures-and-gram-kernels` · definition — Fully connected and residual networks with the Du Gram kernel
- `lem-du-population-gram-kernels-are-finite-symmetric-psd` · lemma — The recursively defined population Gram matrices are finite, symmetric, and positive semidefinite
- `lem-du-output-gradient-gram-update-identity` · lemma — Gradient descent induces an exact output Gram update with a Taylor remainder
- `lem-du-initial-output-gaussian-concentration` · lemma — Gaussian output initialization concentrates conditionally on the hidden features
- `lem-du-local-pl-descent-and-path-length` · lemma — Local Gram positivity and loss smoothness give confined gradient descent
- `lem-du-neighborhood-gram-and-hessian-control` · lemma — Parameter-ball control of the last-layer Gram and loss Hessian
- `lem-du-simultaneous-initialization-event` · lemma — Simultaneous initialization estimates for the Du architectures
- `thm-wide-network-gradient-descent-reaches-zero-training-loss` · theorem — Wide fully connected networks converge geometrically to zero empirical training loss
- `thm-residual-network-polynomial-width-training-convergence` · theorem — Wide residual networks converge geometrically to zero empirical loss with polynomial depth dependence

### `overparameterized-training-and-interpolation-examples` — Overparameterized networks and training to interpolation — Examples (5 item(s))

- `ex-du-relu-outside-analytic-activation-class` · example — ReLU lies outside the analytic activation assumptions
- `ex-du-residual-skip-at-every-layer` · example — The analyzed residual network skips at every layer after the first
- `ex-du-interpolation-does-not-imply-test-fit` · example — Empirical interpolation does not determine test predictions
- `ex-du-duplicate-inputs-force-singular-gram` · example — Duplicate inputs force the population Gram matrix to be singular
- `ex-du-initial-output-common-mode-variance` · example — A positive activation mean creates a high-variance common initialization mode

### `marchenko-pastur-law-and-edge-bounds` — Marchenko–Pastur law and sample-covariance edge bounds (20 item(s))

- `def-sample-covariance-empirical-spectral-distribution` · definition — Sample covariance matrices and their empirical spectral distributions
- `def-stieltjes-transform-of-a-real-probability-measure` · definition — Stieltjes transform of a probability measure on the real line
- `def-marchenko-pastur-measure` · definition — Marchenko–Pastur measure with aspect ratio gamma
- `lem-fourth-moment-quadratic-form-resolvent-bound` · lemma — Fourth-moment bound for a centered quadratic form of an independent vector
- `lem-rank-one-resolvent-update-and-trace-bound` · lemma — Rank-one resolvent update and trace bound for a positive semidefinite matrix
- `lem-uniform-row-partial-sums-of-nested-finite-variance-array` · lemma — Uniform row partial sums of a nested finite-variance array
- `lem-fixed-degree-covariance-trace-and-edge-witnesses` · lemma — Fixed-degree covariance trace moments and independent edge witnesses
- `lem-sample-covariance-empirical-law-is-a-probability-measure` · lemma — The empirical spectral distribution of a sample covariance matrix is a probability measure
- `lem-adapted-resolvent-trace-concentration` · lemma — Adapted resolvent-trace martingale concentration for independent columns
- `lem-marchenko-pastur-formula-defines-a-finite-measure` · lemma — The Marchenko–Pastur formula defines a probability law with the fixed-point transform
- `lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line` · lemma — Stieltjes inversion and uniqueness for probability measures on the real line
- `lem-nested-iid-fourth-moment-truncation-and-diagonal-control` · lemma — Nested iid fourth-moment truncation and uniform diagonal control
- `thm-marchenko-pastur-law-for-sample-covariance` · theorem — Almost-sure Marchenko–Pastur law for finite-fourth-moment sample covariance matrices
- `lem-nonbacktracking-covariance-high-moment-bound` · lemma — Nonbacktracking covariance high moments and an independent coarse norm bound
- `lem-largest-sample-covariance-eigenvalue-lower-bound` · lemma — Independent lower bound for the largest sample-covariance eigenvalue
- `lem-sample-covariance-spectrum-confinement` · lemma — Finite-fourth-moment covariance spectral confinement
- `lem-largest-sample-covariance-eigenvalue-upper-bound` · lemma — Finite-fourth-moment upper bound for the largest sample-covariance eigenvalue
- `thm-bai-yin-smallest-singular-value-limits` · theorem — Bai–Yin lower singular-value limits and full rank away from aspect one
- `thm-largest-eigenvalue-sample-covariance-edge` · theorem — Almost-sure limit of the largest sample-covariance eigenvalue
- `thm-smallest-positive-eigenvalue-sample-covariance-edge` · theorem — Almost-sure limit and structural-zero count at the lower sample-covariance edge

### `marchenko-pastur-law-and-edge-bounds-examples` — Marchenko–Pastur law and sample-covariance edge bounds — Examples (3 item(s))

- `ex-marchenko-pastur-law-and-edges-at-aspect-one-quarter` · example — Marchenko–Pastur law and edges below aspect one
- `ex-marchenko-pastur-law-and-edges-at-aspect-four` · example — Structural zeros and the positive edge above aspect one
- `ex-marchenko-pastur-law-and-closing-edge-at-aspect-one` · example — The Marchenko–Pastur support and closing lower edge at aspect one

## Your seams

Your pages depend on another group's:

- `implicit-bias-of-gradient-training` requires `automatic-differentiation-and-backpropagation` (group m, batch 38)
- `overparameterized-training-and-interpolation` requires `nonconvex-gradient-descent-and-stationarity` (group m, batch 39)

Another group's pages depend on yours:

- `sample-covariance-resolvent-limits` (group p) requires your `marchenko-pastur-law-and-edge-bounds`

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

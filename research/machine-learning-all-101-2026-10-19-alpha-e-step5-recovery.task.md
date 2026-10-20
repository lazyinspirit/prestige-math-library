# Step 5 adjudication — group **e**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 14, 15, 16: 3 A/B pair(s), 6 page(s), 35 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **14**: `research/machine-learning-all-101-2026-10-19-batch-14-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **15**: `research/machine-learning-all-101-2026-10-19-batch-15-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **16**: `research/machine-learning-all-101-2026-10-19-batch-16-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 14 | `ml02-linear-classification` | A | machine-learning | 2722 | `convex-and-semicontinuous-functions-on-rn`, `inner-product-spaces-and-orthogonality`, `the-spectral-theorem-and-singular-value-decomposition`, `generalized-linear-models-and-fisher-scoring`, `mixed-effects-and-longitudinal-models` |
| 14 | `ml02-linear-classification-examples` | B | machine-learning | 2723 | `ml02-linear-classification` |
| 15 | `ml02-rkhs-svm` | A | machine-learning | 2724 | `inequality-kkt-duality-and-optimality-certificates`, `inner-product-spaces-and-orthogonality`, `the-spectral-theorem-and-singular-value-decomposition` |
| 15 | `ml02-rkhs-svm-examples` | B | machine-learning | 2725 | `ml02-rkhs-svm` |
| 16 | `ml02-gaussian-process-regression` | A | machine-learning | 2726 | `brownian-motion-construction-and-continuity`, `central-limit-theorems`, `gaussian-process-priors-and-posterior-laws`, `infinite-product-measures-and-kolmogorov-extension`, `the-spectral-theorem-and-singular-value-decomposition` |
| 16 | `ml02-gaussian-process-regression-examples` | B | machine-learning | 2727 | `ml02-gaussian-process-regression` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `ml02-linear-classification` — Linear classifiers, discriminants, and logistic models (11 item(s))

- `def-linear-score-classifier` · definition — Finite linear-score classifiers with a deterministic tie rule
- `def-indicator-response-least-squares-classifier` · definition — Indicator-response least-squares classification
- `lem-indicator-response-least-squares-minimum-norm-fit` · lemma — The minimum-norm indicator-response least-squares fit exists uniquely
- `def-generative-lda-and-qda-models` · definition — Gaussian LDA and QDA model contracts
- `thm-lda-and-qda-log-posterior-scores` · theorem — Common-covariance LDA scores are affine and QDA scores are quadratic
- `def-binary-logistic-and-multiclass-softmax-models` · definition — Binary logistic and multiclass softmax conditional models
- `def-binary-logistic-log-likelihood-and-l1-penalty` · definition — Binary logistic log-likelihood and L1-penalized objective
- `thm-binary-logistic-derivatives-and-irls-update` · theorem — Binary logistic derivatives and the exact Newton/IRLS update
- `thm-complete-separation-precludes-finite-logistic-mle` · theorem — Complete separation gives an unattained logistic likelihood supremum
- `alg-cyclic-perceptron` · algorithm — The cyclic perceptron update procedure
- `thm-perceptron-margin-mistake-bound` · theorem — The perceptron makes at most R squared over gamma squared mistakes

### `ml02-linear-classification-examples` — Linear classifiers, discriminants, and logistic models — Examples (3 item(s))

- `ex-generative-lda-and-logistic-share-a-boundary` · example — A Gaussian LDA model and a conditional logistic model can share a decision boundary
- `ex-separated-logistic-sample-has-unattained-supremum` · example — A strictly separated two-point sample has an unattained logistic likelihood supremum
- `ex-nonseparable-perceptron-cycles` · example — Two contradictory labels make the cyclic perceptron repeat a two-pass cycle

### `ml02-rkhs-svm` — RKHS regularization, kernels, and support-vector machines (9 item(s))

- `def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces` · definition — Positive semidefinite kernels and reproducing kernel Hilbert spaces
- `lem-finite-dimensional-projection-in-a-real-inner-product-space` · lemma — Projection onto a finite-dimensional subspace of an arbitrary real inner-product space
- `thm-canonical-rkhs-construction-and-reproducing-property` · theorem — A positive semidefinite kernel has a canonical reproducing kernel Hilbert space under countable choice
- `lem-positive-semidefinite-gram-matrix-has-euclidean-feature-factorization` · lemma — A finite positive semidefinite kernel Gram matrix has a Euclidean feature factorization
- `thm-finite-sample-representer-theorem-in-an-rkhs` · theorem — Finite-sample representer theorem when a minimizer exists
- `def-hard-and-soft-margin-support-vector-machines` · definition — Hard- and soft-margin support-vector machines with an unpenalized bias
- `lem-soft-margin-svm-primal-attainment` · lemma — The soft-margin SVM primal attains its minimum, including the unpenalized-bias boundary
- `thm-soft-margin-svm-dual-and-kkt-conditions` · theorem — Soft-margin SVM duality and KKT conditions
- `ex-gaussian-radial-kernel` · example — The Gaussian radial kernel is positive semidefinite

### `ml02-rkhs-svm-examples` — RKHS regularization, kernels, and support-vector machines — Examples (3 item(s))

- `ex-linear-and-polynomial-kernels` · example — Linear and polynomial kernels as finite feature inner products
- `ex-separable-hard-margin-svm` · example — A one-dimensional separable hard-margin SVM
- `ex-overlapping-soft-margin-svm-score-and-kkt` · example — Conflicting labels, a soft-margin optimum, and the meaning of its score

### `ml02-gaussian-process-regression` — Gaussian-process regression and prediction (7 item(s))

- `def-gaussian-process-regression-observation-model` · definition — Finite Gaussian-process regression observation model
- `lem-finite-span-orthogonal-projection-in-inner-product-space` · lemma — Projection onto a finite-dimensional subspace of an inner-product space
- `lem-gp-regression-observed-covariance-invertibility` · lemma — Positive definiteness is exactly the inverse condition for the observed GP covariance
- `thm-gp-regression-log-marginal-likelihood` · theorem — Log marginal likelihood for a finite Gaussian-process regression model
- `cor-gp-regression-posterior-predictive-law` · corollary — Finite Gaussian-process regression posterior and predictive law
- `rem-gp-regression-computation-and-scope-caveats` · remark — Computational costs and limits of finite Gaussian-process regression
- `thm-gp-regression-kernel-ridge-posterior-mean-equivalence` · theorem — Kernel ridge regression equals the Gaussian-process posterior mean

### `ml02-gaussian-process-regression-examples` — Gaussian-process regression and prediction — Examples (2 item(s))

- `ex-gp-regression-noisy-finite-interpolation` · example — Noisy interpolation on two independent coordinates
- `ex-gp-regression-rank-one-prior-positive-noise-singular-prediction` · example — Positive observation noise with a singular rank-one prediction

## Your seams

Another group's pages depend on yours:

- `minimum-norm-interpolation-and-double-descent` (group p) requires your `ml02-rkhs-svm`
- `neural-tangent-kernels-and-lazy-training` (group p) requires your `ml02-rkhs-svm`
- `rl-function-approximation-and-off-policy-limits` (group ab) requires your `ml02-gaussian-process-regression`
- `sketched-kernel-learning-and-certified-solves` (group ae) requires your `ml02-gaussian-process-regression`
- `sketched-kernel-learning-and-certified-solves` (group ae) requires your `ml02-rkhs-svm`
- `preference-learning-and-direct-preference-optimization` (group af) requires your `ml02-linear-classification`

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

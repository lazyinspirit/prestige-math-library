# Step 5 adjudication — group **ae**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 92, 93, 94: 3 A/B pair(s), 6 page(s), 28 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **92**: `research/machine-learning-all-101-2026-10-19-batch-92-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **93**: `research/machine-learning-all-101-2026-10-19-batch-93-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **94**: `research/machine-learning-all-101-2026-10-19-batch-94-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 92 | `sketched-kernel-learning-and-certified-solves` | A | machine-learning | 2978 | `interpolative-cur-and-nystrom-decompositions`, `ml02-gaussian-process-regression`, `ml02-rkhs-svm`, `randomized-low-rank-approximation` |
| 92 | `sketched-kernel-learning-and-certified-solves-examples` | B | machine-learning | 2979 | `sketched-kernel-learning-and-certified-solves` |
| 93 | `bilevel-learning-hypergradients-and-implicit-layers` | A | machine-learning | 2980 | `automatic-differentiation-and-backpropagation`, `automatic-differentiation-and-computational-graphs`, `inverse-and-implicit-function-theorems` |
| 93 | `bilevel-learning-hypergradients-and-implicit-layers-examples` | B | machine-learning | 2981 | `bilevel-learning-hypergradients-and-implicit-layers` |
| 94 | `exact-tiled-attention-and-memory-aware-differentiation` | A | machine-learning | 2982 | `attention-and-transformer-expressivity`, `automatic-differentiation-and-backpropagation`, `automatic-differentiation-and-computational-graphs` |
| 94 | `exact-tiled-attention-and-memory-aware-differentiation-examples` | B | machine-learning | 2983 | `exact-tiled-attention-and-memory-aware-differentiation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sketched-kernel-learning-and-certified-solves` — Sketched kernel learning and certified approximate solves (7 item(s))

- `def-regularized-kernel-prediction-system` · definition — Regularized kernel prediction system
- `lem-regularized-gram-matrix-inverse-bound` · lemma — Inverse norm bound for a regularized Gram matrix
- `thm-kernel-ridge-system-minimizes-mean-square-rkhs-objective` · theorem — The kernel ridge system uniquely minimizes the mean-square RKHS objective
- `thm-kernel-ridge-gram-perturbation-bound` · theorem — Kernel ridge predictions are stable under Gram-matrix perturbations
- `thm-kernel-ridge-residual-prediction-certificate` · theorem — Kernel ridge residuals certify coefficient and training prediction errors
- `alg-nystrom-kernel-ridge-fit` · algorithm — Finite-budget Nyström kernel ridge fit with residual status
- `rem-statistical-and-numerical-kernel-errors` · remark — Statistical and numerical limits of finite kernel solve guarantees

### `sketched-kernel-learning-and-certified-solves-examples` — Sketched kernel learning and certified approximate solves — Examples (4 item(s))

- `ex-kernel-ridge-singular-and-zero-gram-matrices` · example — Kernel ridge systems with singular and zero Gram matrices
- `ex-kernel-ridge-nystrom-exact-range` · example — Exact Nyström capture gives the exact kernel ridge fit
- `ex-kernel-ridge-small-regularizer-amplifies-coefficient-error` · example — Small regularization can amplify coefficient error
- `ex-training-gram-does-not-control-test-prediction` · example — A training Gram matrix does not determine a test prediction

### `bilevel-learning-hypergradients-and-implicit-layers` — Bilevel learning, hypergradients, and implicit layers (5 item(s))

- `def-smooth-bilevel-learning-problem` · definition — Smooth bilevel stationary problems and their hypergradients
- `alg-adjoint-hypergradient-with-residual` · algorithm — Adjoint hypergradient with a measured linear-solve residual
- `thm-smooth-bilevel-hypergradient-formula` · theorem — Hypergradient of a smooth local stationary branch
- `thm-adjoint-hypergradient-linear-solve-error` · theorem — Residual bounds for exact and approximate-state adjoint hypergradients
- `rem-truncated-training-and-exact-hypergradients` · remark — Exact stationary sensitivities and finite training derivatives are different

### `bilevel-learning-hypergradients-and-implicit-layers-examples` — Bilevel learning, hypergradients, and implicit layers — Examples (3 item(s))

- `ex-ridge-hyperparameter-hypergradient` · example — A scalar ridge penalty and its validation hypergradient
- `ex-singular-hessian-nonisolated-inner-minimum` · example — A singular Hessian leaves the minimizing branch undetermined
- `ex-exact-state-wrong-truncated-hypergradient` · example — An exact primal state can have a wrong finite-unroll derivative

### `exact-tiled-attention-and-memory-aware-differentiation` — Exact tiled attention and memory-aware differentiation (5 item(s))

- `def-attention-block-summary` · definition — Stable summary of an attention key block
- `alg-exact-tiled-softmax-attention` · algorithm — Exact tiled softmax attention with block-recomputed vector-Jacobian products
- `thm-tiled-attention-exactness` · theorem — Tiled attention and its recomputed reverse pass are exact
- `thm-tiled-attention-workspace-and-work` · theorem — Tiled attention uses linear retained memory and quadratic arithmetic
- `rem-attention-io-model-and-roundoff` · remark — The scalar workspace result is not a hardware I/O bound

### `exact-tiled-attention-and-memory-aware-differentiation-examples` — Exact tiled attention and memory-aware differentiation — Examples (4 item(s))

- `ex-tiled-attention-one-key` · example — One-key tiled attention
- `ex-tiled-attention-empty-first-masked-block` · example — An empty first masked key block
- `ex-tiled-attention-two-merge-orders` · example — Two merge orders give the same attention summary
- `ex-tiled-attention-replay-dropout-mask` · example — A different dropout mask changes the reverse result

## Your seams

Your pages depend on another group's:

- `sketched-kernel-learning-and-certified-solves` requires `ml02-gaussian-process-regression` (group e, batch 16)
- `sketched-kernel-learning-and-certified-solves` requires `ml02-rkhs-svm` (group e, batch 15)
- `bilevel-learning-hypergradients-and-implicit-layers` requires `automatic-differentiation-and-backpropagation` (group m, batch 38)
- `exact-tiled-attention-and-memory-aware-differentiation` requires `attention-and-transformer-expressivity` (group l, batch 36)
- `exact-tiled-attention-and-memory-aware-differentiation` requires `automatic-differentiation-and-backpropagation` (group m, batch 38)

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

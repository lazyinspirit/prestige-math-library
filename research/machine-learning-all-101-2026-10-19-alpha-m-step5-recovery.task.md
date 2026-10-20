# Step 5 adjudication — group **m**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 38, 39, 40: 3 A/B pair(s), 6 page(s), 17 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **38**: `research/machine-learning-all-101-2026-10-19-batch-38-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **39**: `research/machine-learning-all-101-2026-10-19-batch-39-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **40**: `research/machine-learning-all-101-2026-10-19-batch-40-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 38 | `automatic-differentiation-and-backpropagation` | A | machine-learning | 2770 | `automatic-differentiation-and-computational-graphs`, `banach-space-differential-calculus-and-banach-manifolds`, `feedforward-networks-and-universal-approximation`, `the-total-derivative` |
| 38 | `automatic-differentiation-and-backpropagation-examples` | B | machine-learning | 2771 | `automatic-differentiation-and-backpropagation` |
| 39 | `nonconvex-gradient-descent-and-stationarity` | A | machine-learning | 2772 | `automatic-differentiation-and-backpropagation`, `numerical-optimization-for-statistical-computation`, `proximal-gradient-and-accelerated-composite-optimization`, `rn-as-a-normed-space`, `the-total-derivative` |
| 39 | `nonconvex-gradient-descent-and-stationarity-examples` | B | machine-learning | 2773 | `nonconvex-gradient-descent-and-stationarity` |
| 40 | `stochastic-gradient-descent-for-learning` | A | machine-learning | 2774 | `conditional-expectation`, `discrete-time-martingales`, `nonconvex-gradient-descent-and-stationarity`, `prediction-problems-risks-and-empirical-minimization`, `probability-spaces-random-variables-and-expectation`, `stochastic-approximation-and-stochastic-gradient-methods` |
| 40 | `stochastic-gradient-descent-for-learning-examples` | B | machine-learning | 2775 | `stochastic-gradient-descent-for-learning` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `automatic-differentiation-and-backpropagation` — Automatic differentiation and backpropagation (2 item(s))

- `alg-backpropagation-through-shared-parameter-recurrence` · algorithm — Backpropagation through a finite shared-parameter recurrence
- `thm-shared-parameter-backpropagation-gradient-formula` · theorem — Reverse accumulation sums gradients over shared parameter uses

### `automatic-differentiation-and-backpropagation-examples` — Automatic differentiation and backpropagation — Examples (3 item(s))

- `ex-checkpointed-reverse-sweep-recomputes-intermediate` · example — Checkpointed reverse sweep recomputes an intermediate
- `ex-relu-kink-does-not-have-classical-ad-gradient` · example — A ReLU kink has no classical backpropagated derivative
- `ex-shared-weight-neural-backpropagation` · example — Backpropagation through a two-layer network with a shared weight

### `nonconvex-gradient-descent-and-stationarity` — Nonconvex gradient descent and stationarity (1 item(s))

- `thm-smooth-bounded-below-gd-stationarity` · theorem — Gradient descent has vanishing gradients when the objective is bounded below along its iterates

### `nonconvex-gradient-descent-and-stationarity-examples` — Nonconvex gradient descent and stationarity — Examples (2 item(s))

- `ex-nonconvex-cosine-gradient-descent-has-distinct-basins` · example — Two initial intervals converge to different minima of a periodic objective
- `ex-nonconvex-gd-path-lower-bound-with-unbounded-objective` · example — A gradient-descent path can be bounded below when the objective is not

### `stochastic-gradient-descent-for-learning` — Stochastic gradient descent and random-iterate guarantees (6 item(s))

- `lem-sgd-trajectory-integrability` · lemma — Finite-horizon SGD trajectories have integrable objectives
- `lem-independent-finite-random-index-extension` · lemma — An independent finite random index has the weighted expectation formula
- `alg-stochastic-gradient-descent` · algorithm — Stochastic gradient descent
- `alg-minibatch-stochastic-gradient-descent` · algorithm — Minibatch stochastic gradient descent
- `thm-stochastic-direction-expected-average-stationarity` · theorem — Expected-average stationarity under aligned stochastic directions
- `thm-nonconvex-sgd-random-iterate-stationarity` · theorem — Nonconvex SGD weighted random-iterate stationarity

### `stochastic-gradient-descent-for-learning-examples` — Stochastic gradient descent and random-iterate guarantees — Examples (3 item(s))

- `ex-constant-step-sgd-noise-floor` · example — Constant-step SGD can have a nonzero noise floor
- `ex-empirical-risk-sgd-oracle-is-unbiased` · example — Uniform empirical-risk sampling gives an unbiased bounded-variance gradient
- `ex-sgd-biased-direction-violates-alignment` · example — A biased SGD direction can fail positive alignment

## Your seams

Your pages depend on another group's:

- `automatic-differentiation-and-backpropagation` requires `feedforward-networks-and-universal-approximation` (group j, batch 31)
- `stochastic-gradient-descent-for-learning` requires `prediction-problems-risks-and-empirical-minimization` (group a, batch 2)

Another group's pages depend on yours:

- `momentum-and-accelerated-training` (group n) requires your `nonconvex-gradient-descent-and-stationarity`
- `adaptive-gradient-optimizers` (group n) requires your `stochastic-gradient-descent-for-learning`
- `implicit-bias-of-gradient-training` (group o) requires your `automatic-differentiation-and-backpropagation`
- `overparameterized-training-and-interpolation` (group o) requires your `nonconvex-gradient-descent-and-stationarity`
- `neural-tangent-kernels-and-lazy-training` (group p) requires your `automatic-differentiation-and-backpropagation`
- `algorithmic-stability-of-stochastic-training` (group r) requires your `stochastic-gradient-descent-for-learning`
- `bilevel-learning-hypergradients-and-implicit-layers` (group ae) requires your `automatic-differentiation-and-backpropagation`
- `exact-tiled-attention-and-memory-aware-differentiation` (group ae) requires your `automatic-differentiation-and-backpropagation`
- `low-rank-adaptation-and-parameter-update-geometry` (group af) requires your `automatic-differentiation-and-backpropagation`
- `preference-learning-and-direct-preference-optimization` (group af) requires your `automatic-differentiation-and-backpropagation`

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

# Step 5 adjudication — group **n**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 41, 42, 43: 3 A/B pair(s), 6 page(s), 30 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **41**: `research/machine-learning-all-101-2026-10-19-batch-41-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **42**: `research/machine-learning-all-101-2026-10-19-batch-42-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **43**: `research/machine-learning-all-101-2026-10-19-batch-43-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 41 | `momentum-and-accelerated-training` | A | machine-learning | 2776 | `matrix-differentiation-and-first-order-spectral-perturbation`, `nonconvex-gradient-descent-and-stationarity`, `the-spectral-theorem-and-singular-value-decomposition` |
| 41 | `momentum-and-accelerated-training-examples` | B | machine-learning | 2777 | `momentum-and-accelerated-training` |
| 42 | `adaptive-gradient-optimizers` | A | machine-learning | 2778 | `stochastic-gradient-descent-for-learning`, `variance-reduced-finite-sum-and-adaptive-gradient-optimization` |
| 42 | `adaptive-gradient-optimizers-examples` | B | machine-learning | 2779 | `adaptive-gradient-optimizers` |
| 43 | `initialization-and-signal-propagation` | A | machine-learning | 2780 | `feedforward-networks-and-universal-approximation`, `independence-borel-cantelli-and-zero-one-laws`, `probability-spaces-random-variables-and-expectation` |
| 43 | `initialization-and-signal-propagation-examples` | B | machine-learning | 2781 | `initialization-and-signal-propagation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `momentum-and-accelerated-training` — Momentum and quadratic acceleration (3 item(s))

- `alg-heavy-ball-momentum` · algorithm — Heavy-ball momentum
- `alg-nesterov-accelerated-gradient` · algorithm — Nesterov accelerated gradient
- `thm-heavy-ball-rate-on-strongly-convex-quadratics` · theorem — Tuned heavy-ball has the minimax root factor on positive-definite quadratics

### `momentum-and-accelerated-training-examples` — Momentum and quadratic acceleration — Examples (3 item(s))

- `ex-unstable-heavy-ball-parameters` · example — An untuned heavy-ball recurrence diverges on a scalar quadratic
- `ex-stochastic-momentum-experiment` · example — A reported stochastic Nesterov experiment is empirical evidence
- `ex-heavy-ball-optimized-quadratic-spectrum` · example — The spectrum 1, 4, 9 gives tuned root factor one half

### `adaptive-gradient-optimizers` — Adaptive gradient algorithms and regret limits (10 item(s))

- `alg-rmsprop` · algorithm — RMSProp with an exponential second-moment estimate
- `alg-adam` · algorithm — Uncorrected Adam for online convex losses
- `alg-amsgrad` · algorithm — Uncorrected AMSGrad with a coordinatewise historical maximum
- `lem-geometric-polynomial-decay` · lemma — Polynomial factors times a geometric rate decay to zero
- `lem-clipped-negative-prefix-positive-suffix` · lemma — Clipping a negative prefix followed by a positive suffix
- `lem-adaptive-moment-updates-well-defined` · lemma — RMSProp, Adam, and AMSGrad moment updates are well-defined
- `lem-amsgrad-one-step-regret-inequality` · lemma — One-step regret inequality for AMSGrad
- `lem-amsgrad-momentum-energy-bound` · lemma — AMSGrad momentum energy is bounded by a coordinatewise weighted gradient sum
- `thm-adam-online-regret-counterexample` · theorem — Adam can have nonzero average regret on a one-dimensional convex sequence
- `thm-amsgrad-online-convex-regret` · theorem — AMSGrad has an online convex regret bound under decaying first-moment weights

### `adaptive-gradient-optimizers-examples` — Adaptive gradient algorithms and regret limits — Examples (3 item(s))

- `ex-adam-fixed-epsilon-online-regret-counterexample` · example — A fixed denominator regularizer does not prevent Adam's periodic regret example
- `ex-amsgrad-historical-maximum` · example — AMSGrad retains an earlier second-moment maximum
- `ex-amsgrad-constant-beta-outside-decaying-schedule` · example — Constant first-moment weight is outside the proved square-root regret schedule

### `initialization-and-signal-propagation` — Initialization and signal propagation (7 item(s))

- `lem-centered-independent-weighted-sum-variance` · lemma — Variance of a centered random weighted sum
- `lem-symmetric-rectifier-moments` · lemma — Second moments of symmetric rectifiers
- `lem-iid-relu-layer-forces-zero-atom-next` · lemma — An IID ReLU layer forces a zero atom in the next preactivation
- `alg-rectifier-variance-preserving-initialization` · algorithm — Rectifier variance-preserving initialization
- `thm-relu-forward-variance-recurrence` · theorem — ReLU forward preactivation-variance recurrence
- `thm-relu-backward-variance-recurrence` · theorem — ReLU backward gradient-variance recurrence
- `cor-prelu-variance-preserving-scale` · corollary — PReLU fan-in and fan-out variance scales

### `initialization-and-signal-propagation-examples` — Initialization and signal propagation — Examples (4 item(s))

- `ex-zero-mean-or-bias-breaks-relu-half-moment` · example — Mean-zero weights or a nonzero bias do not supply the ReLU half-moment
- `ex-finite-width-iid-relu-stack-has-zero-atom` · example — A symmetric atomless IID ReLU layer creates a zero atom next
- `ex-fan-in-versus-fan-out-initialization` · example — Fan-in and fan-out target different signal directions
- `ex-prelu-variance-scale` · example — A PReLU slope changes both initialization scales

## Your seams

Your pages depend on another group's:

- `momentum-and-accelerated-training` requires `nonconvex-gradient-descent-and-stationarity` (group m, batch 39)
- `adaptive-gradient-optimizers` requires `stochastic-gradient-descent-for-learning` (group m, batch 40)
- `initialization-and-signal-propagation` requires `feedforward-networks-and-universal-approximation` (group j, batch 31)

Another group's pages depend on yours:

- `generative-adversarial-networks` (group t) requires your `adaptive-gradient-optimizers`

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

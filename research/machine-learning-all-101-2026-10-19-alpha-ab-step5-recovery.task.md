# Step 5 adjudication — group **ab**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 83, 84, 85: 3 A/B pair(s), 6 page(s), 33 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **83**: `research/machine-learning-all-101-2026-10-19-batch-83-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **84**: `research/machine-learning-all-101-2026-10-19-batch-84-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **85**: `research/machine-learning-all-101-2026-10-19-batch-85-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 83 | `average-reward-regret-and-ucrl2` | A | machine-learning | 2853 | `discrete-time-martingales`, `finite-mdps-and-bellman-operators`, `markov-kernels-and-markov-chains`, `martingale-inequalities-and-convergence`, `identifiability-and-approximation-bias-in-computational-inference` |
| 83 | `average-reward-regret-and-ucrl2-examples` | B | machine-learning | 2854 | `average-reward-regret-and-ucrl2` |
| 84 | `policy-gradients-reinforce-and-actor-critic` | A | machine-learning | 2855 | `conditional-expectation`, `tabular-prediction-and-control`, `the-total-derivative`, `banach-space-differential-calculus-and-banach-manifolds`, `primitive-recursive-and-partial-computable-functions` |
| 84 | `policy-gradients-reinforce-and-actor-critic-examples` | B | machine-learning | 2856 | `policy-gradients-reinforce-and-actor-critic` |
| 85 | `rl-function-approximation-and-off-policy-limits` | A | machine-learning | 2857 | `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, `tabular-prediction-and-control`, `ml02-gaussian-process-regression` |
| 85 | `rl-function-approximation-and-off-policy-limits-examples` | B | machine-learning | 2858 | `rl-function-approximation-and-off-policy-limits` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `average-reward-regret-and-ucrl2` — Average-reward regret and UCRL2 (12 item(s))

- `lem-almost-additive-sequence-has-limit` · lemma — Almost-additive sequences have a normalized limit
- `def-bounded-reward-finite-mdp` · definition — Finite MDP with bounded real rewards
- `alg-extended-value-iteration` · algorithm — Extended value iteration for a confidence set
- `def-communicating-mdp-and-diameter` · definition — Communicating MDP and diameter
- `lem-ucrl2-adaptive-sample-tape-representation` · lemma — Adaptive MDP visits admit fixed sample tapes
- `lem-ucrl2-evi-termination` · lemma — Termination of extended value iteration under communicating assumptions
- `lem-ucrl2-uniform-confidence-bounds` · lemma — Uniform empirical reward and transition confidence bounds
- `thm-communicating-mdp-common-optimal-average-reward` · theorem — Communicating MDPs have a common optimal average reward
- `alg-ucrl2` · algorithm — UCRL2 for finite communicating MDPs
- `def-average-reward-and-regret` · definition — Average reward and pathwise regret
- `thm-ucrl2-high-probability-regret` · theorem — UCRL2 high-probability pathwise regret bound
- `thm-ucrl2-regret-lower-bound` · theorem — Expected regret lower bound for communicating MDPs

### `average-reward-regret-and-ucrl2-examples` — Average-reward regret and UCRL2 — Examples (3 item(s))

- `ex-noncommunicating-mdp-has-state-dependent-gain` · example — A noncommunicating MDP can have state-dependent average reward
- `ex-one-state-diameter-convention` · example — One-state MDP and normalized diameter
- `ex-pathwise-and-expected-regret-are-different` · example — A random reward separates pathwise and expected regret

### `policy-gradients-reinforce-and-actor-critic` — Policy gradients, REINFORCE, and actor–critic (7 item(s))

- `def-differentiable-stochastic-policy` · definition — Differentiable stationary stochastic policies and score vectors
- `lem-policy-score-has-zero-conditional-mean` · lemma — A policy score has zero conditional mean before the action
- `thm-policy-gradient-theorem` · theorem — Discounted episodic policy gradients from trajectory likelihoods
- `alg-one-step-actor-critic` · algorithm — One-step episodic actor–critic with a bootstrapped critic
- `alg-reinforce` · algorithm — Episodic REINFORCE with a frozen episode policy
- `lem-action-independent-baseline-does-not-bias-policy-gradient` · lemma — A state-dependent action-independent baseline preserves the gradient mean
- `alg-reinforce-with-baseline` · algorithm — Episodic REINFORCE with a fixed state baseline

### `policy-gradients-reinforce-and-actor-critic-examples` — Policy gradients, REINFORCE, and actor–critic — Examples (4 item(s))

- `ex-actor-critic-bootstrap-can-bias-policy-update` · example — A bootstrapped critic can bias the first actor update
- `ex-reinforce-one-step-bernoulli-mdp` · example — One-step Bernoulli REINFORCE has the exact expected gradient
- `ex-action-independent-baseline-eliminates-variance` · example — A state baseline can eliminate this estimator's variance
- `cex-policy-gradient-without-start-time-discount` · counterexample — Omitting the start-time discount changes the policy gradient

### `rl-function-approximation-and-off-policy-limits` — Function approximation, off-policy instability, and deep-RL limits (4 item(s))

- `lem-projected-bellman-error-is-well-defined` · lemma — The weighted feature projection is well-defined
- `def-projected-bellman-error` · definition — State-weighted Bellman error and projected Bellman error
- `thm-bairds-counterexample-off-policy-td-diverges` · theorem — Expected off-policy TD(0) diverges in Baird’s seven-state example
- `thm-bellman-error-unlearnability-example` · theorem — Feature-reward data do not determine the Bellman error or, at positive discount, its minimizer

### `rl-function-approximation-and-off-policy-limits-examples` — Function approximation, off-policy instability, and deep-RL limits — Examples (3 item(s))

- `ex-on-policy-one-state-linear-td-is-stable` · example — A one-state on-policy linear TD(0) update contracts to zero
- `ex-bairds-seven-state-star-expected-update` · example — A finite Baird-star update has exact expected weights
- `ex-matched-observation-mrps-have-distinct-bellman-errors` · example — At discount one-half, identical observable laws hide different Bellman-error minima

## Your seams

Your pages depend on another group's:

- `average-reward-regret-and-ucrl2` requires `finite-mdps-and-bellman-operators` (group aa, batch 80)
- `policy-gradients-reinforce-and-actor-critic` requires `tabular-prediction-and-control` (group aa, batch 81)
- `rl-function-approximation-and-off-policy-limits` requires `tabular-prediction-and-control` (group aa, batch 81)
- `rl-function-approximation-and-off-policy-limits` requires `ml02-gaussian-process-regression` (group e, batch 16)

Another group's pages depend on yours:

- `constrained-mdps-and-policy-safety` (group ad) requires your `policy-gradients-reinforce-and-actor-critic`
- `verifiable-generation-and-test-time-sampling` (group ag) requires your `policy-gradients-reinforce-and-actor-critic`

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

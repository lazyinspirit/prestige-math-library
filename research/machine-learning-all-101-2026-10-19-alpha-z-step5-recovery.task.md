# Step 5 adjudication — group **z**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 77, 78, 79: 3 A/B pair(s), 6 page(s), 33 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **77**: `research/machine-learning-all-101-2026-10-19-batch-77-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **78**: `research/machine-learning-all-101-2026-10-19-batch-78-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **79**: `research/machine-learning-all-101-2026-10-19-batch-79-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 77 | `adversarial-bandits-and-importance-weighted-feedback` | A | machine-learning | 2841 | `hedge-and-online-gradient-descent`, `outward-rounded-interval-and-ball-arithmetic` |
| 77 | `adversarial-bandits-and-importance-weighted-feedback-examples` | B | machine-learning | 2842 | `adversarial-bandits-and-importance-weighted-feedback` |
| 78 | `contextual-expert-bandits` | A | machine-learning | 2843 | `adversarial-bandits-and-importance-weighted-feedback` |
| 78 | `contextual-expert-bandits-examples` | B | machine-learning | 2844 | `contextual-expert-bandits` |
| 79 | `linear-contextual-bandits-and-linucb` | A | machine-learning | 2845 | `conditional-expectation`, `determinants-of-matrices-over-a-commutative-ring`, `direct-matrix-factorisations-lu-cholesky-and-qr`, `discrete-time-martingales`, `ml02-linear-sparse-models`, `online-decision-protocols`, `probability-spaces-random-variables-and-expectation`, `stopping-times-and-optional-stopping`, `the-determinant-of-a-linear-operator`, `the-moore-penrose-pseudoinverse-and-regularised-least-squares`, `laplace-approximation-and-marginal-integration` |
| 79 | `linear-contextual-bandits-and-linucb-examples` | B | machine-learning | 2846 | `linear-contextual-bandits-and-linucb` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `adversarial-bandits-and-importance-weighted-feedback` — Adversarial bandits and importance-weighted feedback (5 item(s))

- `lem-exp-negative-argument-second-order-upper-bound` · lemma — Second-order exponential upper bound on the nonpositive axis
- `def-bandit-importance-weighted-estimator` · definition — Bandit importance-weighted estimator
- `lem-bandit-importance-weighted-estimator-has-conditional-moments` · lemma — Conditional moments of the bandit importance-weighted estimator
- `alg-exp3` · algorithm — Exp3 with importance-weighted loss feedback
- `thm-exp3-expected-regret` · theorem — Exp3 expected regret under bandit feedback

### `adversarial-bandits-and-importance-weighted-feedback-examples` — Adversarial bandits and importance-weighted feedback — Examples (3 item(s))

- `ex-rare-arm-importance-weighted-estimator` · example — A rarely sampled arm has a high-variance importance-weighted estimate
- `ex-deterministic-rewards-importance-weighted-feedback` · example — Deterministic rewards can give a negative estimated reward
- `ex-exp3-and-full-information-hedge-differ` · example — Exp3 and full-information Hedge update differently

### `contextual-expert-bandits` — Contextual expert bandits (7 item(s))

- `def-contextual-bandit-protocol` · definition — Contextual bandit protocol with finite expert advice
- `alg-exp4` · algorithm — Exp4 with unbiased estimated rewards
- `lem-exp4-updates-are-well-defined` · lemma — Exp4 updates are well-defined, including zero-probability actions
- `lem-exp4-unbiased-expert-reward-estimates` · lemma — Exp4 expert reward estimates are conditionally unbiased
- `lem-exp4-weighted-estimated-loss-second-moment` · lemma — Exp4 weighted estimated loss has conditional second moment at most k
- `lem-exp4-potential-inequality` · lemma — Exp4 exponential-weights potential inequality
- `thm-exp4-expected-regret` · theorem — Exp4 expected regret against the best fixed expert

### `contextual-expert-bandits-examples` — Contextual expert bandits — Examples (3 item(s))

- `ex-exp4-finite-two-expert-set` · example — A finite two-expert Exp4 instance
- `ex-exp4-duplicated-experts-change-prior-mass` · example — Duplicated experts change Exp4's uniform prior mass
- `ex-exp4-context-specific-expert-class` · example — A context-specific expert class with no shared policy structure

### `linear-contextual-bandits-and-linucb` — Linear contextual bandits and LinUCB (11 item(s))

- `lem-linucb-elliptical-potential` · lemma — The elliptical-potential bound for ridge design matrices
- `lem-linucb-trace-determinant-bound` · lemma — Trace control of the regularized design determinant
- `lem-linucb-predictable-mgf-substitution` · lemma — Conditional sub-Gaussian bounds allow bounded predictable coefficients
- `def-linear-contextual-bandit-model` · definition — Finite-dimensional linear contextual bandit model
- `lem-linucb-ridge-information-matrix` · lemma — The ridge information matrix is positive definite and invertible
- `lem-linucb-ridge-estimates-are-measurable` · lemma — The ridge estimates and self-normalized sums are measurable
- `lem-linucb-gaussian-mixture-supermartingale` · lemma — The conditional Gaussian mixture is a nonnegative supermartingale
- `alg-linucb` · algorithm — LinUCB with a self-normalized confidence radius
- `thm-self-normalized-linear-confidence-ellipsoid` · theorem — The ridge estimate lies in a time-uniform linear confidence ellipsoid
- `thm-linucb-regret` · theorem — LinUCB has a log-determinant high-probability pseudo-regret bound
- `cor-linucb-expected-regret` · corollary — LinUCB has expected pseudo-regret of order $d\sqrt n\log(nL)$

### `linear-contextual-bandits-and-linucb-examples` — Linear contextual bandits and LinUCB — Examples (4 item(s))

- `ex-linucb-feature-norm-violation` · example — A feature outside the assumed norm bound
- `ex-linucb-two-context-two-action-update` · example — A two-context, two-action ridge update
- `ex-linucb-unbounded-parameter-norm` · example — No common confidence radius without a parameter norm bound
- `ex-linucb-mean-range-exceeds-one` · example — An action set whose linear-mean range exceeds one

## Your seams

Your pages depend on another group's:

- `adversarial-bandits-and-importance-weighted-feedback` requires `hedge-and-online-gradient-descent` (group y, batch 74)
- `linear-contextual-bandits-and-linucb` requires `ml02-linear-sparse-models` (group d, batch 13)
- `linear-contextual-bandits-and-linucb` requires `online-decision-protocols` (group x, batch 73)

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

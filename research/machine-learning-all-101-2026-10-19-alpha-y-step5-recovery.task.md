# Step 5 adjudication — group **y**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 74, 75, 76: 3 A/B pair(s), 6 page(s), 40 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **74**: `research/machine-learning-all-101-2026-10-19-batch-74-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **75**: `research/machine-learning-all-101-2026-10-19-batch-75-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **76**: `research/machine-learning-all-101-2026-10-19-batch-76-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 74 | `hedge-and-online-gradient-descent` | A | machine-learning | 2835 | `constrained-variational-problems-and-variational-inequalities`, `convex-and-semicontinuous-functions-on-rn`, `hilbert-space-geometry-and-riesz-representation`, `online-decision-protocols` |
| 74 | `hedge-and-online-gradient-descent-examples` | B | machine-learning | 2836 | `hedge-and-online-gradient-descent` |
| 75 | `mirror-descent-and-adaptive-regularization` | A | machine-learning | 2837 | `convex-and-semicontinuous-functions-on-rn`, `hedge-and-online-gradient-descent`, `trust-region-and-cubic-regularization-methods` |
| 75 | `mirror-descent-and-adaptive-regularization-examples` | B | machine-learning | 2838 | `mirror-descent-and-adaptive-regularization` |
| 76 | `stochastic-finite-armed-bandits` | A | machine-learning | 2839 | `independence-borel-cantelli-and-zero-one-laws`, `online-decision-protocols`, `probability-spaces-random-variables-and-expectation`, `product-measures-and-the-fubini-tonelli-theorems`, `the-exponential-function`, `the-lebesgue-integral-and-the-convergence-theorems`, `improper-and-parameter-dependent-multiple-integrals`, `improper-integrals`, `properties-of-the-integral-and-the-working-ftc`, `the-logarithm-and-general-powers`, `further-trigonometric-identities-and-inverses`, `the-derivative-and-mean-value-theorems`, `foundations-of-the-real-numbers`, `roots-and-rational-powers` |
| 76 | `stochastic-finite-armed-bandits-examples` | B | machine-learning | 2840 | `stochastic-finite-armed-bandits` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `hedge-and-online-gradient-descent` — Hedge and online gradient descent (4 item(s))

- `alg-hedge` · algorithm — Hedge
- `alg-online-gradient-descent` · algorithm — Projected online gradient descent
- `thm-hedge-static-regret` · theorem — Hedge's second-order and static-regret bounds
- `thm-online-gradient-descent-regret` · theorem — Projected online gradient descent has static regret at most three-halves of DG square-root T

### `hedge-and-online-gradient-descent-examples` — Hedge and online gradient descent — Examples (3 item(s))

- `ex-hedge-two-experts` · example — Hedge with two experts over two rounds
- `ex-projected-gradient-on-an-interval` · example — A projected gradient step on an interval
- `cex-ogd-infeasible-comparator` · counterexample — The projected OGD bound does not cover infeasible comparators

### `mirror-descent-and-adaptive-regularization` — Mirror descent and adaptive regularization (13 item(s))

- `def-mirror-map-and-bregman-divergence` · definition — Mirror maps, Bregman divergence, and local Hessian norms
- `lem-psd-matrix-has-unique-psd-square-root` · lemma — A positive-semidefinite matrix has a unique positive-semidefinite square root
- `lem-bregman-three-point-identity` · lemma — The Bregman three-point identity
- `lem-bregman-divergence-nonnegative` · lemma — Positive Hessians make Bregman divergence nonnegative
- `lem-negative-entropy-geometry-of-simplex` · lemma — Negative entropy on the simplex is strongly convex and has range log n
- `alg-adagrad` · algorithm — Gram-matrix AdaGrad with full or singular diagonal metrics
- `lem-adagrad-accumulated-gram-matrix-is-psd` · lemma — AdaGrad accumulated Gram matrices and both scales are positive semidefinite
- `alg-online-mirror-descent` · algorithm — Agile online mirror descent
- `lem-adagrad-projection-exists` · lemma — A singular AdaGrad metric still has a projection minimizer
- `lem-adagrad-diagonal-scale-coordinatewise` · lemma — The diagonal AdaGrad scale is the coordinatewise square root
- `lem-mirror-descent-bregman-projection-exists` · lemma — Compactness makes the Bregman projection well-defined
- `thm-mirror-descent-regret` · theorem — A corrected regret bound for agile mirror descent
- `fs-mirror-descent-halved-regret-constants` · false-statement — Halving both terms in the agile mirror-descent regret bound

### `mirror-descent-and-adaptive-regularization-examples` — Mirror descent and adaptive regularization — Examples (3 item(s))

- `ex-adagrad-singular-adaptive-metric` · example — AdaGrad with a singular diagonal metric
- `ex-negative-entropy-mirror-descent-on-simplex` · example — Negative entropy gives normalized multiplicative weights
- `ex-euclidean-mirror-descent-is-projected-ogd` · example — A quadratic mirror map gives a projected gradient step

### `stochastic-finite-armed-bandits` — Stochastic finite-armed bandits (14 item(s))

- `def-centered-subgaussian-reward` · definition — Centered 1-sub-Gaussian reward
- `lem-zeta-two-and-three-converge` · lemma — The zeta sums at 2 and 3 are finite
- `lem-countably-valued-expectation-is-weighted-series` · lemma — Expectation of a countably valued nonnegative random variable is its weighted series
- `lem-ucb-prefix-envelope-sum-bound` · lemma — A deterministic-prefix envelope sum for the sharper UCB count bound
- `lem-independent-subgaussian-prefix-tail` · lemma — Tail bounds for deterministic prefixes of independent sub-Gaussian rewards
- `def-stochastic-bandit-and-pseudo-regret` · definition — Finite stochastic bandit model, gaps, and regret
- `alg-explore-then-commit` · algorithm — Explore-then-commit for a finite stochastic bandit
- `alg-upper-confidence-bound-bandit` · algorithm — Finite-horizon upper-confidence-bound bandit algorithm
- `lem-bandit-reward-table-has-fixed-conditional-laws` · lemma — The independent reward-stack model has the prescribed conditional arm laws
- `lem-ucb-suboptimal-arm-expected-pulls` · lemma — Expected pull count for a suboptimal UCB arm
- `thm-explore-then-commit-expected-regret` · theorem — Expected regret of explore-then-commit
- `lem-ucb-sharp-suboptimal-arm-expected-pulls` · lemma — A sharper expected suboptimal-arm pull count for the unchanged UCB rule
- `thm-ucb-gap-dependent-regret` · theorem — Gap-dependent expected regret of UCB
- `thm-ucb-gap-free-regret` · theorem — Gap-free expected regret of UCB

### `stochastic-finite-armed-bandits-examples` — Stochastic finite-armed bandits — Examples (3 item(s))

- `ex-two-arm-deterministic-gap` · example — A two-arm deterministic gap and explore-then-commit
- `ex-tied-optimal-bandit-arms` · example — Tied optimal arms have zero regret
- `ex-heavy-tailed-reward-law-outside-subgaussian-model` · example — A finite-mean polynomial-tail reward is not sub-Gaussian

## Your seams

Your pages depend on another group's:

- `hedge-and-online-gradient-descent` requires `online-decision-protocols` (group x, batch 73)
- `stochastic-finite-armed-bandits` requires `online-decision-protocols` (group x, batch 73)

Another group's pages depend on yours:

- `adversarial-bandits-and-importance-weighted-feedback` (group z) requires your `hedge-and-online-gradient-descent`
- `imitation-learning-and-dagger` (group ad) requires your `hedge-and-online-gradient-descent`

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

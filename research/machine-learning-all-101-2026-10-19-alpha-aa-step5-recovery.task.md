# Step 5 adjudication — group **aa**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 80, 81, 82: 3 A/B pair(s), 6 page(s), 53 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **80**: `research/machine-learning-all-101-2026-10-19-batch-80-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **81**: `research/machine-learning-all-101-2026-10-19-batch-81-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **82**: `research/machine-learning-all-101-2026-10-19-batch-82-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 80 | `finite-mdps-and-bellman-operators` | A | machine-learning | 2847 | `completeness-and-uniform-continuity`, `conditional-distributions-and-regular-conditional-probability`, `markov-kernels-and-markov-chains` |
| 80 | `finite-mdps-and-bellman-operators-examples` | B | machine-learning | 2848 | `finite-mdps-and-bellman-operators` |
| 81 | `tabular-prediction-and-control` | A | machine-learning | 2849 | `conditional-expectation`, `discrete-time-martingales`, `finite-mdps-and-bellman-operators` |
| 81 | `tabular-prediction-and-control-examples` | B | machine-learning | 2850 | `tabular-prediction-and-control` |
| 82 | `pac-mdp-exploration` | A | machine-learning | 2851 | `martingale-inequalities-and-convergence`, `tabular-prediction-and-control` |
| 82 | `pac-mdp-exploration-examples` | B | machine-learning | 2852 | `pac-mdp-exploration` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-mdps-and-bellman-operators` — Finite MDPs and Bellman operators (13 item(s))

- `def-finite-markov-decision-process` · definition — Finite Markov decision process with joint reward-transition law
- `lem-bounded-discounted-return-converges` · lemma — Absolute convergence and tail bound for bounded discounted rewards
- `lem-finite-state-sup-norm-space-is-complete` · lemma — Completeness of the sup metric on finite-state value functions
- `thm-finite-mdp-policy-induces-reward-state-chain` · theorem — A finite MDP and stationary policy generate a reward-state Markov chain
- `def-policy-bellman-operator` · definition — Policy Bellman operator
- `def-bellman-optimality-operator` · definition — Bellman optimality operator
- `def-discounted-return-and-value-functions` · definition — Discounted returns and policy values in a finite MDP
- `thm-bellman-contraction-and-unique-fixed-point` · theorem — Finite-MDP Bellman operators are gamma contractions with unique fixed points
- `alg-value-iteration` · algorithm — Exact value iteration for the Bellman optimality operator
- `lem-policy-value-satisfies-bellman-equation` · lemma — Expected discounted policy value is a fixed point of its Bellman operator
- `thm-value-iteration-convergence-error-bound` · theorem — Value iteration converges at the Bellman contraction rate
- `alg-policy-iteration` · algorithm — Exact finite policy iteration with retained greedy actions
- `thm-policy-improvement` · theorem — Greedy policy improvement and finite policy-iteration termination

### `finite-mdps-and-bellman-operators-examples` — Finite MDPs and Bellman operators — Examples (4 item(s))

- `ex-undiscounted-single-state-mdp-diverges` · example — A unit reward on a self-loop has no finite undiscounted return
- `ex-finite-mdp-common-reward-shift` · example — A common reward shift moves every one-state Bellman value equally
- `ex-value-iteration-attains-error-rate` · example — A one-state value-iteration model attains the Bellman error bound
- `ex-policy-iteration-tie-retention` · example — Changing a tied greedy action can cycle, while retention stops

### `tabular-prediction-and-control` — Tabular prediction and control by interaction (12 item(s))

- `lem-bounded-square-summable-martingale-difference-series-converges` · lemma — Predictably weighted bounded martingale differences have a convergent series
- `def-optimal-action-value-bellman-operator` · definition — Optimal action-value Bellman operator
- `lem-finite-mdp-policy-action-state-reward-path-law` · lemma — A finite MDP policy generates action-state-reward trajectories
- `lem-asynchronous-finite-dimensional-contraction-stochastic-approximation` · lemma — Coordinate-wise stochastic approximation converges to a contraction fixed point
- `alg-q-learning` · algorithm — Tabular Q-learning
- `def-episodic-returns-td-errors-and-policy-support` · definition — Episodic returns, temporal-difference errors, and policy support
- `lem-optimal-action-value-is-attained-by-greedy-policy` · lemma — The optimal action value is attained by a greedy stationary policy
- `thm-tabular-q-learning-convergence-under-robbins-monro-conditions` · theorem — Tabular Q-learning converges under per-pair Robbins–Monro steps and full visitation
- `lem-finite-episode-policy-importance-ratio-is-unbiased` · lemma — Finite-episode importance sampling has the target-policy mean under support
- `alg-td-zero-prediction` · algorithm — Tabular TD(0) policy prediction
- `alg-sarsa-on-policy-control` · algorithm — Tabular on-policy Sarsa control
- `alg-monte-carlo-policy-evaluation` · algorithm — First-visit Monte Carlo policy evaluation

### `tabular-prediction-and-control-examples` — Tabular prediction and control by interaction — Examples (5 item(s))

- `ex-tabular-insufficient-exploration-leaves-q-values-unknown` · example — A state-action pair that is never visited keeps its initialization
- `ex-q-learning-constant-stepsize-can-fail-to-converge` · example — A constant Q-learning step size can preserve persistent reward noise
- `ex-importance-sampling-needs-target-support` · example — An unseen target action cannot be importance sampled from behavior data
- `ex-ordinary-importance-sampling-infinite-variance` · example — Ordinary importance sampling can have infinite variance under full support
- `ex-weighted-importance-sampling-finite-sample-bias` · example — A one-sample weighted importance-sampling estimate can be biased

### `pac-mdp-exploration` — Optimistic exploration and PAC-MDP sample complexity (15 item(s))

- `def-pac-mdp-bounded-reward-model` · definition — Finite discounted MDP with bounded real rewards
- `thm-pac-mdp-value-functions` · theorem — Well-defined discounted values and optimal Bellman fixed points
- `lem-pac-mdp-adaptive-sample-concentration` · lemma — Concentration for adaptively sampled MDP observations
- `def-pac-mdp-sample-complexity` · definition — PAC-MDP sample complexity of exploration
- `def-admissible-mdp-heuristic` · definition — Admissible upper heuristic for a discounted MDP
- `lem-pac-mdp-value-simulation` · lemma — Value stability under empirical model error
- `def-pac-mdp-known-state-action-mdp` · definition — Known-state/action MDP with optimistic self-loops
- `alg-r-max` · algorithm — R-MAX with an admissible heuristic
- `alg-delayed-q-learning` · algorithm — Delayed Q-learning with an admissible heuristic
- `thm-pac-mdp-escape-event-reduction` · theorem — Escape-event reduction for optimistic greedy learning
- `lem-r-max-empirical-model-accuracy` · lemma — Adaptive empirical-model accuracy for R-MAX
- `lem-delayed-q-learning-optimism-and-update-counts` · lemma — Delayed Q-learning optimism and update-count bounds
- `thm-zero-tolerance-pac-mdp-boundary` · theorem — The zero-tolerance boundary of PAC-MDP exploration
- `thm-r-max-pac-bound` · theorem — PAC-MDP sample complexity of R-MAX
- `thm-delayed-q-learning-pac-bound` · theorem — PAC-MDP sample complexity of Delayed Q-learning

### `pac-mdp-exploration-examples` — Optimistic exploration and PAC-MDP sample complexity — Examples (4 item(s))

- `ex-pac-mdp-nonpermanent-bad-steps` · example — A finite bad-step count need not be a permanent stopping time
- `ex-pac-mdp-inadmissible-heuristic-fails` · example — An inadmissible heuristic can suppress exploration forever
- `ex-pac-mdp-discount-factor-dependence` · example — The uninformative heuristic exposes the discount-factor powers
- `ex-pac-mdp-delayed-q-zero-slack` · example — Zero heuristic slack can still require one Delayed Q-learning update

## Your seams

Another group's pages depend on yours:

- `average-reward-regret-and-ucrl2` (group ab) requires your `finite-mdps-and-bellman-operators`
- `policy-gradients-reinforce-and-actor-critic` (group ab) requires your `tabular-prediction-and-control`
- `rl-function-approximation-and-off-policy-limits` (group ab) requires your `tabular-prediction-and-control`
- `model-based-planning-dyna-and-model-exploitation` (group ac) requires your `finite-mdps-and-bellman-operators`
- `model-based-planning-dyna-and-model-exploitation` (group ac) requires your `tabular-prediction-and-control`
- `offline-reinforcement-learning-and-off-policy-evaluation` (group ac) requires your `tabular-prediction-and-control`
- `pomdps-and-belief-state-planning` (group ac) requires your `finite-mdps-and-bellman-operators`
- `imitation-learning-and-dagger` (group ad) requires your `finite-mdps-and-bellman-operators`
- `constrained-mdps-and-policy-safety` (group ad) requires your `finite-mdps-and-bellman-operators`

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

# Step 5 adjudication — group **ac**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 86, 87, 88: 3 A/B pair(s), 6 page(s), 40 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **86**: `research/machine-learning-all-101-2026-10-19-batch-86-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **87**: `research/machine-learning-all-101-2026-10-19-batch-87-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **88**: `research/machine-learning-all-101-2026-10-19-batch-88-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 86 | `model-based-planning-dyna-and-model-exploitation` | A | machine-learning | 2859 | `conditional-distributions-and-regular-conditional-probability`, `finite-mdps-and-bellman-operators`, `tabular-prediction-and-control`, `mcmc-ergodicity-and-mixing` |
| 86 | `model-based-planning-dyna-and-model-exploitation-examples` | B | machine-learning | 2860 | `model-based-planning-dyna-and-model-exploitation` |
| 87 | `offline-reinforcement-learning-and-off-policy-evaluation` | A | machine-learning | 2861 | `conditional-expectation`, `tabular-prediction-and-control`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-radon-nikodym-theorem-and-lebesgue-decomposition` |
| 87 | `offline-reinforcement-learning-and-off-policy-evaluation-examples` | B | machine-learning | 2862 | `offline-reinforcement-learning-and-off-policy-evaluation` |
| 88 | `pomdps-and-belief-state-planning` | A | machine-learning | 2863 | `conditional-distributions-and-regular-conditional-probability`, `finite-mdps-and-bellman-operators` |
| 88 | `pomdps-and-belief-state-planning-examples` | B | machine-learning | 2864 | `pomdps-and-belief-state-planning` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `model-based-planning-dyna-and-model-exploitation` — Model-based planning, Dyna, and model exploitation (14 item(s))

- `def-learned-mdp-model` · definition — Finite learned transition and reward models
- `def-finite-stochastic-shortest-path-problem` · definition — Finite stochastic shortest-path problems
- `def-finite-horizon-mdp-return` · definition — Finite-horizon return under a Markov policy
- `alg-real-time-dynamic-programming` · algorithm — Trial-based real-time dynamic programming
- `lem-finite-policy-kernel-tv-propagation` · lemma — One-step total-variation propagation under a fixed policy
- `thm-finite-stochastic-shortest-path-value-exists` · theorem — Finite positive-cost stochastic shortest-path value
- `rem-ensemble-disagreement-is-not-calibrated-uncertainty` · remark — Ensemble disagreement is not calibrated uncertainty by definition
- `alg-dyna-q` · algorithm — Tabular Dyna-Q with a deterministic last-observation model
- `alg-model-predictive-control` · algorithm — Finite-horizon model-predictive control
- `thm-single-policy-finite-horizon-simulation-bound` · theorem — Finite-horizon simulation bound for one fixed policy
- `lem-asynchronous-value-iteration-for-stochastic-shortest-path` · lemma — Asynchronous value iteration for finite positive-cost shortest paths
- `thm-rtdp-recurrently-backed-state-convergence` · theorem — RTDP convergence on recurrently backed states
- `cex-rtdp-optimal-relevant-state-convergence-fails` · counterexample — RTDP need not visit every state reachable under an optimal policy
- `def-model-exploitation` · definition — Model exploitation under support shift

### `model-based-planning-dyna-and-model-exploitation-examples` — Model-based planning, Dyna, and model exploitation — Examples (3 item(s))

- `ex-model-accurate-on-behavior-support` · example — An inaccurate model can give the exact return on behavior support
- `ex-short-versus-long-model-rollouts` · example — A small transition error accumulates over longer rollouts
- `ex-model-exploitation-off-support` · example — A one-step optimizer selects a falsely rewarding unsupported action

### `offline-reinforcement-learning-and-off-policy-evaluation` — Offline reinforcement learning and off-policy evaluation (8 item(s))

- `thm-offline-coverage-impossibility-example` · theorem — Without trajectory coverage, logged data need not identify policy value
- `def-offline-reinforcement-learning-dataset` · definition — Finite-horizon offline reinforcement-learning dataset and coverage
- `lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative` · lemma — Finite-horizon policy ratios are trajectory Radon-Nikodym derivatives
- `alg-trajectory-importance-sampling-ope` · algorithm — Ordinary, per-decision, and weighted trajectory importance sampling
- `alg-doubly-robust-ope` · algorithm — Finite-horizon doubly robust off-policy value evaluation
- `thm-trajectory-importance-sampling-is-unbiased` · theorem — Trajectory and per-decision importance sampling are unbiased under coverage
- `thm-doubly-robust-ope-is-unbiased-under-either-correct-component` · theorem — Doubly robust evaluation is unbiased under either exact component
- `rem-offline-rl-distribution-shift-and-pessimism` · remark — Off-policy estimates do not guarantee offline policy safety

### `offline-reinforcement-learning-and-off-policy-evaluation-examples` — Offline reinforcement learning and off-policy evaluation — Examples (4 item(s))

- `ex-offline-ope-full-support-and-missing-support` · example — Full action support permits reweighting while missing support does not
- `ex-offline-ope-exploding-trajectory-weights` · example — Trajectory importance weights can grow exponentially with horizon
- `ex-offline-ope-weighted-and-clipped-estimators-can-be-biased` · example — Self-normalization and clipping can introduce finite-sample bias
- `ex-offline-ope-doubly-robust-correctness-branches` · example — Correct ratios and a correct value model give separate DR identities

### `pomdps-and-belief-state-planning` — POMDPs and belief-state planning (7 item(s))

- `lem-cardinality-of-finite-natural-initial-segment` · lemma — A finite initial segment of the naturals has its index as cardinality
- `def-finite-pomdp` · definition — Finite partially observable Markov decision process
- `def-belief-state-and-bayes-filter` · definition — Belief states and the finite Bayes filter
- `alg-pomdp-witness-backup` · algorithm — Exhaustive finite-horizon POMDP alpha-vector backup
- `lem-finite-pomdp-belief-update-is-probability-kernel` · lemma — The finite POMDP Bayes filter is a probability kernel
- `thm-belief-mdp-sufficient-statistic` · theorem — The belief state is a sufficient statistic for finite POMDP control
- `thm-finite-horizon-pomdp-piecewise-linear-convex-value` · theorem — Finite-horizon POMDP values are piecewise-linear and convex

### `pomdps-and-belief-state-planning-examples` — POMDPs and belief-state planning — Examples (4 item(s))

- `ex-pomdp-two-state-bayes-update` · example — A two-state POMDP update changes a three-to-one prior to nine-to-one
- `ex-pomdp-observation-aliasing-preserves-belief` · example — An observation with identical state likelihoods leaves the belief unchanged
- `ex-pomdp-zero-likelihood-observation-is-not-updated` · example — A zero-likelihood observation has no posterior update
- `ex-pomdp-policy-tree-enumeration-grows-exponentially` · example — A finite POMDP family has exponentially many witnessed alpha vectors

## Your seams

Your pages depend on another group's:

- `model-based-planning-dyna-and-model-exploitation` requires `finite-mdps-and-bellman-operators` (group aa, batch 80)
- `model-based-planning-dyna-and-model-exploitation` requires `tabular-prediction-and-control` (group aa, batch 81)
- `offline-reinforcement-learning-and-off-policy-evaluation` requires `tabular-prediction-and-control` (group aa, batch 81)
- `pomdps-and-belief-state-planning` requires `finite-mdps-and-bellman-operators` (group aa, batch 80)

Another group's pages depend on yours:

- `verifiable-generation-and-test-time-sampling` (group ag) requires your `offline-reinforcement-learning-and-off-policy-evaluation`

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

# Step 5 batch adjudication, `machine-learning-all-101-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.

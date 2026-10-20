# Step 5 adjudication — group **ad**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 89, 90, 91: 3 A/B pair(s), 6 page(s), 34 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **89**: `research/machine-learning-all-101-2026-10-19-batch-89-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **90**: `research/machine-learning-all-101-2026-10-19-batch-90-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **91**: `research/machine-learning-all-101-2026-10-19-batch-91-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 89 | `imitation-learning-and-dagger` | A | machine-learning | 2865 | `finite-mdps-and-bellman-operators`, `hedge-and-online-gradient-descent`, `martingale-inequalities-and-convergence` |
| 89 | `imitation-learning-and-dagger-examples` | B | machine-learning | 2866 | `imitation-learning-and-dagger` |
| 90 | `constrained-mdps-and-policy-safety` | A | machine-learning | 2867 | `finite-mdps-and-bellman-operators`, `conditional-distributions-and-regular-conditional-probability`, `conditional-expectation`, `minimax-lower-bounds-and-information-theoretic-methods`, `policy-gradients-reinforce-and-actor-critic` |
| 90 | `constrained-mdps-and-policy-safety-examples` | B | machine-learning | 2868 | `constrained-mdps-and-policy-safety` |
| 91 | `anytime-valid-scalar-confidence-sequences` | A | machine-learning | 2869 | `conditional-expectation`, `discrete-time-martingales`, `sequential-testing-and-anytime-valid-inference`, `subgaussian-mixture-confidence-sequences` |
| 91 | `anytime-valid-scalar-confidence-sequences-examples` | B | machine-learning | 2870 | `anytime-valid-scalar-confidence-sequences` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `imitation-learning-and-dagger` — Imitation learning and DAgger (8 item(s))

- `lem-dagger-strongly-convex-follow-the-leader-regret` · lemma — Follow-the-Leader regret for bounded strongly convex losses
- `lem-finite-horizon-mdp-policy-occupancy` · lemma — Finite-horizon MDP policy occupancy is a probability distribution
- `def-imitation-learning-and-expert-surrogate-loss` · definition — Finite-horizon imitation learning and expert-surrogate loss
- `alg-dagger` · algorithm — Dataset Aggregation (DAgger)
- `lem-dagger-mixture-occupancy` · lemma — Expert mixing changes finite-horizon state occupancy by at most the mixing mass
- `lem-dagger-task-cost-from-expert-surrogate` · lemma — Expert-surrogate loss bounds finite-horizon task-cost increase
- `thm-dagger-no-regret-reduction` · theorem — DAgger no-regret reduction under strongly convex surrogate losses
- `thm-dagger-finite-sample-generalization` · theorem — Finite-sample DAgger surrogate-loss guarantee

### `imitation-learning-and-dagger-examples` — Imitation learning and DAgger — Examples (3 item(s))

- `ex-behavior-cloning-covariate-shift` · example — Behavior cloning can incur quadratic cost under state-distribution shift
- `ex-dagger-interactive-expert-labels` · example — DAgger queries expert labels on learner-visited states
- `ex-surrogate-loss-fails-task-cost-control` · example — A candidate loss score that does not control task cost

### `constrained-mdps-and-policy-safety` — Constrained MDPs and policy safety (12 item(s))

- `lem-finite-action-average-tv-controlled-by-kl` · lemma — Finite-action average total variation is bounded by average KL
- `def-constrained-markov-decision-process` · definition — Finite discounted constrained Markov decision process
- `def-normalized-discounted-state-occupancy` · definition — Normalized discounted state occupancy
- `def-discounted-cost-constraint` · definition — Expected discounted-cost feasibility constraint
- `lem-normalized-discounted-state-occupancy-is-probability` · lemma — Normalized discounted occupancy is a probability distribution
- `def-discounted-value-and-advantage-functions` · definition — Discounted value, action-value, and advantage functions
- `lem-discounted-occupancy-change-bounded-by-average-tv` · lemma — Discounted occupancy change is bounded by average policy TV
- `lem-mdp-performance-difference-identity-with-arbitrary-baseline` · lemma — Performance-difference identity for an arbitrary bounded baseline
- `thm-policy-performance-bound-by-average-divergence` · theorem — Policy performance bound by average divergence
- `alg-constrained-policy-optimization` · algorithm — Sample-based constrained policy optimization update
- `lem-cpo-sample-update-well-defined-and-finite-search` · lemma — The sample CPO update has a well-defined proposal and finite backtracking search
- `rem-cpo-implementation-is-approximate` · remark — Practical CPO updates do not inherit exact safety guarantees automatically

### `constrained-mdps-and-policy-safety-examples` — Constrained MDPs and policy safety — Examples (4 item(s))

- `ex-expected-discounted-cost-does-not-imply-pathwise-safety` · example — A small expected cost can coexist with frequent finite-horizon violations
- `ex-empirical-cost-satisfaction-can-miss-population-violation` · example — A finite sample can report cost satisfaction while the policy violates its expected-cost limit
- `ex-exact-trust-region-and-sampled-line-search-disagree` · example — An exact trust-region test can disagree with a sampled line search
- `cex-arbitrary-baseline-bound-without-old-policy-residual` · counterexample — An arbitrary baseline requires the old-policy residual

### `anytime-valid-scalar-confidence-sequences` — Empirical-Bernstein confidence sequences under adaptive sampling (4 item(s))

- `def-subexponential-uniform-boundary` · definition — One-sided sub-exponential uniform boundary
- `def-time-varying-target-confidence-sequence` · definition — Confidence sequence for a time-varying target
- `alg-empirical-bernstein-confidence-sequence` · algorithm — Empirical-Bernstein confidence-sequence interval update
- `thm-empirical-bernstein-confidence-sequence` · theorem — Empirical-Bernstein confidence sequence under adaptive sampling

### `anytime-valid-scalar-confidence-sequences-examples` — Empirical-Bernstein confidence sequences under adaptive sampling — Examples (3 item(s))

- `ex-repeated-fixed-level-tests-not-anytime-valid` · example — Repeated fixed-level tests do not give an all-times bound
- `ex-predictable-linear-forecast-empirical-bernstein` · example — A predictable linear forecast and its empirical residual process
- `ex-diagonal-scalar-bounds-miss-offdiagonal-matrix` · example — Diagonal scalar bounds miss off-diagonal matrix size

## Your seams

Your pages depend on another group's:

- `imitation-learning-and-dagger` requires `finite-mdps-and-bellman-operators` (group aa, batch 80)
- `imitation-learning-and-dagger` requires `hedge-and-online-gradient-descent` (group y, batch 74)
- `constrained-mdps-and-policy-safety` requires `finite-mdps-and-bellman-operators` (group aa, batch 80)
- `constrained-mdps-and-policy-safety` requires `policy-gradients-reinforce-and-actor-critic` (group ab, batch 84)

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

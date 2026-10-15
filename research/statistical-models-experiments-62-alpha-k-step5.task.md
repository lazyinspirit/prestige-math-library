# Step 5 adjudication — group **k**, run `statistical-models-experiments-62`

You are the group Alpha for batches 31, 32, 33: 3 A/B pair(s), 6 page(s), 21 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **31**: `research/statistical-models-experiments-62-batch-31-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **32**: `research/statistical-models-experiments-62-batch-32-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **33**: `research/statistical-models-experiments-62-batch-33-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/statistical-models-experiments-62-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 31 | `independent-subject-terminal-influence-limits` | A | statistical-models-and-experiments | 1978 | `counting-process-compensators-and-integrals`, `asymptotic-convergence-consistency-and-identification`, `central-limit-theorems`, `modes-of-convergence-for-random-variables`, `pathwise-differentiability-influence-functions-and-efficient-scores`, `robust-covariance-and-high-dimensional-stability` |
| 31 | `independent-subject-terminal-influence-limits-examples` | B | statistical-models-and-experiments | 1979 | `independent-subject-terminal-influence-limits` |
| 32 | `nelson-aalen-kaplan-meier-greenwood` | A | statistical-models-and-experiments | 1980 | `event-time-censoring-and-truncation`, `counting-process-compensators-and-integrals`, `independent-subject-terminal-influence-limits`, `estimators-and-randomized-procedures`, `delta-method-and-asymptotic-normality`, `conditional-expectation` |
| 32 | `nelson-aalen-kaplan-meier-greenwood-examples` | B | statistical-models-and-experiments | 1981 | `nelson-aalen-kaplan-meier-greenwood` |
| 33 | `logrank-and-weighted-logrank` | A | statistical-models-and-experiments | 1982 | `randomized-treatment-assignment-and-sharp-null-tests`, `event-time-censoring-and-truncation`, `counting-process-compensators-and-integrals`, `independent-subject-terminal-influence-limits`, `estimators-and-randomized-procedures`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `chaining-uniform-laws-and-empirical-process-limits`, `finite-probability-spaces-and-random-variables` |
| 33 | `logrank-and-weighted-logrank-examples` | B | statistical-models-and-experiments | 1983 | `logrank-and-weighted-logrank`, `nelson-aalen-kaplan-meier-greenwood` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `independent-subject-terminal-influence-limits` — Independent-subject terminal influence limits (2 item(s))

- `thm-iid-terminal-influence-limit` · theorem — IID terminal influence limit from a separately established expansion
- `thm-independent-groups-terminal-influence-limit` · theorem — Independent-group terminal influence limit

### `independent-subject-terminal-influence-limits-examples` — Independent-subject terminal influence limits — Examples (3 item(s))

- `ex-bernoulli-terminal-influence-limit` · example — Bernoulli sample mean as an exact terminal influence expansion
- `ex-independent-groups-weighted-mean-limit` · example — Weighted means from two independent subject groups
- `ex-uncontrolled-risk-set-denominator` · example — An empty risk set prevents root-n tightness

### `nelson-aalen-kaplan-meier-greenwood` — Nelson–Aalen, Kaplan–Meier, Greenwood (5 item(s))

- `def-nelson-aalen-kaplan-meier-greenwood-estimators` · definition — Nelson–Aalen, Kaplan–Meier, and Greenwood estimators
- `lem-finite-support-risk-set-proportion-limits` · lemma — Finite-support risk-set proportion limits
- `thm-finite-support-nelson-aalen-kaplan-meier-consistency` · theorem — Finite-support consistency of Nelson–Aalen and Kaplan–Meier
- `lem-uniform-right-censoring-risk-set-convergence` · lemma — Uniform convergence of the empirical right-censoring risk set
- `thm-pointwise-nelson-aalen-kaplan-meier-greenwood-limit` · theorem — Pointwise influence limit and Greenwood variance consistency

### `nelson-aalen-kaplan-meier-greenwood-examples` — Nelson–Aalen, Kaplan–Meier, Greenwood — Examples (1 item(s))

- `ex-kaplan-meier-hand-risk-set-and-support-loss` · example — A hand Kaplan–Meier calculation and loss of tail support

### `logrank-and-weighted-logrank` — Logrank and weighted logrank (8 item(s))

- `def-logrank-risk-set-score-and-test` · definition — Two-group logrank and weighted logrank scores
- `lem-logrank-risk-set-empirical-fractions-converge` · lemma — Uniform convergence of empirical risk-set fractions
- `thm-logrank-conditional-risk-set-moments` · theorem — Conditional hypergeometric moments for a logrank risk set
- `lem-logrank-risk-fraction-converges` · lemma — Uniform convergence of the risk-set treatment fraction
- `cor-logrank-fisher-randomization-pvalue-valid` · corollary — The logrank ordering gives a valid Fisher randomization p-value
- `lem-logrank-score-martingale-expansion` · lemma — Weighted logrank score expansion under a common-hazard model
- `lem-logrank-variance-estimator-consistency` · lemma — Consistency of the weighted logrank variance estimate
- `thm-weighted-logrank-terminal-normal-limit` · theorem — Terminal normal limit for weighted logrank scores

### `logrank-and-weighted-logrank-examples` — Logrank and weighted logrank — Examples (2 item(s))

- `ex-logrank-crossing-hazards-zero-score` · example — Crossing hazards with a zero observed logrank score
- `ex-logrank-fisher-randomization-with-unequal-weights` · example — An exact logrank randomization p-value with unequal assignment weights

## Your seams

Your pages depend on another group's:

- `independent-subject-terminal-influence-limits` requires `counting-process-compensators-and-integrals` (group j, batch 30)
- `nelson-aalen-kaplan-meier-greenwood` requires `event-time-censoring-and-truncation` (group j, batch 28)
- `nelson-aalen-kaplan-meier-greenwood` requires `counting-process-compensators-and-integrals` (group j, batch 30)
- `logrank-and-weighted-logrank` requires `randomized-treatment-assignment-and-sharp-null-tests` (group d, batch 12)
- `logrank-and-weighted-logrank` requires `event-time-censoring-and-truncation` (group j, batch 28)
- `logrank-and-weighted-logrank` requires `counting-process-compensators-and-integrals` (group j, batch 30)

Another group's pages depend on yours:

- `cox-ph-and-partial-likelihood` (group l) requires your `independent-subject-terminal-influence-limits`
- `competing-risks-and-cumulative-incidence` (group l) requires your `nelson-aalen-kaplan-meier-greenwood`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/statistical-models-experiments-62-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `statistical-models-experiments-62`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.

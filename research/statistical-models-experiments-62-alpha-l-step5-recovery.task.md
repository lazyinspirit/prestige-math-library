# Step 5 adjudication — group **l**, run `statistical-models-experiments-62`

You are the group Alpha for batches 34, 35, 36: 3 A/B pair(s), 6 page(s), 17 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **34**: `research/statistical-models-experiments-62-batch-34-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **35**: `research/statistical-models-experiments-62-batch-35-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **36**: `research/statistical-models-experiments-62-batch-36-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 34 | `cox-ph-and-partial-likelihood` | A | statistical-models-and-experiments | 1984 | `event-time-censoring-and-truncation`, `counting-process-compensators-and-integrals`, `independent-subject-terminal-influence-limits`, `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `chaining-uniform-laws-and-empirical-process-limits`, `dominated-experiments-likelihood-and-sufficiency`, `likelihood-asymptotics-wald-score-and-likelihood-ratio`, `the-ito-integral-with-respect-to-brownian-motion` |
| 34 | `cox-ph-and-partial-likelihood-examples` | B | statistical-models-and-experiments | 1985 | `cox-ph-and-partial-likelihood` |
| 35 | `competing-risks-and-cumulative-incidence` | A | statistical-models-and-experiments | 1986 | `event-time-censoring-and-truncation`, `counting-process-compensators-and-integrals`, `nelson-aalen-kaplan-meier-greenwood`, `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `lebesgue-stieltjes-measures-and-distribution-functions` |
| 35 | `competing-risks-and-cumulative-incidence-examples` | B | statistical-models-and-experiments | 1987 | `competing-risks-and-cumulative-incidence` |
| 36 | `measurement-calibration-and-uncertainty` | A | statistical-models-and-experiments | 1988 | `scientific-statistical-model-contracts`, `delta-method-and-asymptotic-normality`, `probability-spaces-random-variables-and-expectation`, `mixed-partials-taylor-and-extrema` |
| 36 | `measurement-calibration-and-uncertainty-examples` | B | statistical-models-and-experiments | 1989 | `measurement-calibration-and-uncertainty` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cox-ph-and-partial-likelihood` — Cox PH and partial likelihood (7 item(s))

- `def-cox-proportional-hazards-model-and-partial-likelihood` · definition — Cox proportional-hazards model and partial likelihood
- `lem-cox-uniform-risk-set-convergence` · lemma — Integrated and conditional uniform convergence of Cox risk-set sums
- `lem-bounded-predictable-counting-integral-pathwise-identity` · lemma — Pathwise identity for bounded predictable counting-process integrals
- `lem-cox-partial-likelihood-hessian-convergence` · lemma — Uniform Cox partial-likelihood Hessian convergence
- `lem-cox-score-martingale-replacement` · lemma — Cox score martingale representation and random-risk-mean replacement
- `thm-cox-score-limit-and-estimator-linearization` · theorem — Cox partial-likelihood score expansion and estimator linearization
- `cor-cox-partial-likelihood-asymptotic-normality` · corollary — Asymptotic normality of the Cox partial-likelihood estimator

### `cox-ph-and-partial-likelihood-examples` — Cox PH and partial likelihood — Examples (1 item(s))

- `ex-cox-risk-set-likelihood-and-model-checks` · example — Risk-set likelihood and time-varying hazard-ratio check

### `competing-risks-and-cumulative-incidence` — Competing risks and cumulative incidence (4 item(s))

- `def-competing-risk-data-cause-specific-hazards-and-cumulative-incidence` · definition — Competing-risk data, cause-specific hazard measures, and cumulative incidence
- `thm-cause-specific-cumulative-incidence-decomposition` · theorem — Cause-specific cumulative incidence as an integral against its hazard measure
- `alg-aalen-johansen-cumulative-incidence-estimator` · algorithm — Aalen–Johansen cumulative-incidence estimator
- `lem-aalen-johansen-fixed-time-output-is-a-statistic` · lemma — Fixed-time Aalen–Johansen outputs are well-defined statistics

### `competing-risks-and-cumulative-incidence-examples` — Competing risks and cumulative incidence — Examples (2 item(s))

- `cex-observed-first-cause-does-not-identify-latent-failure-times` · counterexample — The observed first time and cause do not identify the latent joint failure-time law
- `ex-competing-event-risk-versus-cause-incidence` · example — Higher competing mortality lowers incidence in a two-time table

### `measurement-calibration-and-uncertainty` — Calibration and measurement uncertainty (2 item(s))

- `def-measurand-calibration-and-measurement-uncertainty` · definition — Measurands, calibration, and measurement uncertainty
- `thm-first-order-measurement-uncertainty-propagation` · theorem — First-order propagation of measurement uncertainty

### `measurement-calibration-and-uncertainty-examples` — Calibration and measurement uncertainty — Examples (1 item(s))

- `ex-calibration-curve-reference-uncertainty-and-batch-drift` · example — Calibration curve with uncertain reference standards and batch drift

## Your seams

Your pages depend on another group's:

- `cox-ph-and-partial-likelihood` requires `event-time-censoring-and-truncation` (group j, batch 28)
- `cox-ph-and-partial-likelihood` requires `counting-process-compensators-and-integrals` (group j, batch 30)
- `cox-ph-and-partial-likelihood` requires `independent-subject-terminal-influence-limits` (group k, batch 31)
- `competing-risks-and-cumulative-incidence` requires `event-time-censoring-and-truncation` (group j, batch 28)
- `competing-risks-and-cumulative-incidence` requires `counting-process-compensators-and-integrals` (group j, batch 30)
- `competing-risks-and-cumulative-incidence` requires `nelson-aalen-kaplan-meier-greenwood` (group k, batch 32)
- `measurement-calibration-and-uncertainty` requires `scientific-statistical-model-contracts` (group a, batch 1)

Another group's pages depend on yours:

- `measurement-batch-and-process-variation` (group m) requires your `measurement-calibration-and-uncertainty`

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

# Historical Step-5 closure recovery, `statistical-models-experiments-62`

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

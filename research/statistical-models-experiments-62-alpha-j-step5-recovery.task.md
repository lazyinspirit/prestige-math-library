# Step 5 adjudication — group **j**, run `statistical-models-experiments-62`

You are the group Alpha for batches 28, 29, 30: 3 A/B pair(s), 6 page(s), 28 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **28**: `research/statistical-models-experiments-62-batch-28-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **29**: `research/statistical-models-experiments-62-batch-29-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **30**: `research/statistical-models-experiments-62-batch-30-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 28 | `event-time-censoring-and-truncation` | A | statistical-models-and-experiments | 1972 | `scientific-statistical-model-contracts`, `statistical-experiments-models-and-identifiability`, `dominated-experiments-likelihood-and-sufficiency`, `lebesgue-stieltjes-measures-and-distribution-functions`, `markov-kernels-and-markov-chains`, `conditional-distributions-and-regular-conditional-probability` |
| 28 | `event-time-censoring-and-truncation-examples` | B | statistical-models-and-experiments | 1973 | `event-time-censoring-and-truncation` |
| 29 | `parametric-survival-and-reliability` | A | statistical-models-and-experiments | 1974 | `event-time-censoring-and-truncation`, `statistical-experiments-models-and-identifiability`, `dominated-experiments-likelihood-and-sufficiency`, `lebesgue-stieltjes-measures-and-distribution-functions` |
| 29 | `parametric-survival-and-reliability-examples` | B | statistical-models-and-experiments | 1975 | `parametric-survival-and-reliability` |
| 30 | `counting-process-compensators-and-integrals` | A | statistical-models-and-experiments | 1976 | `brownian-motion-construction-and-continuity`, `the-ito-integral-with-respect-to-brownian-motion`, `conditional-expectation` |
| 30 | `counting-process-compensators-and-integrals-examples` | B | statistical-models-and-experiments | 1977 | `counting-process-compensators-and-integrals` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `event-time-censoring-and-truncation` — Event observation, censoring, truncation (2 item(s))

- `def-event-time-observation-schemes` · definition — Event-time observation, censoring, and truncation schemes
- `thm-likelihood-contributions-under-censoring-and-delayed-entry` · theorem — Likelihood contributions under censoring, truncation, and delayed entry

### `event-time-censoring-and-truncation-examples` — Event observation, censoring, truncation — Examples (2 item(s))

- `cex-informative-censoring-does-not-identify-event-law` · counterexample — Informative censoring can hide distinct event-time laws
- `ex-event-time-observation-likelihoods-and-delayed-entry` · example — Exponential event-time observations with censoring and delayed entry

### `parametric-survival-and-reliability` — Parametric survival and reliability (5 item(s))

- `def-parametric-survival-and-reliability` · definition — Parametric survival and reliability models
- `thm-exponential-and-weibull-survival-laws` · theorem — Exponential and Weibull survival specifications define probability laws
- `thm-survival-cumulative-hazard-identity` · theorem — The continuous survival and cumulative-hazard identity
- `thm-jump-hazard-survival-product` · theorem — Survival jumps multiply by one minus the atomic hazard
- `thm-censored-exponential-likelihood-and-mle` · theorem — Right-censored exponential likelihood and its boundary maximum

### `parametric-survival-and-reliability-examples` — Parametric survival and reliability — Examples (2 item(s))

- `ex-exponential-weibull-hazards-and-censored-likelihood` · example — Exponential and Weibull hazards with right-censored exposure
- `ex-zero-exposure-censored-mle-boundary` · example — No observed failures with positive versus zero exposure

### `counting-process-compensators-and-integrals` — Counting-process compensators, integrals, brackets (14 item(s))

- `lem-continuous-finite-variation-martingale-is-zero` · lemma — A continuous finite-variation martingale is constant
- `lem-bounded-stopping-preserves-cadlag-square-integrable-martingales` · lemma — Bounded stopping preserves càdlàg square-integrable martingales
- `def-counting-process-intensity-and-compensator-contract` · definition — Simple counting-process intensity and compensator contract
- `def-optional-and-predictable-brackets-for-counting-processes` · definition — Optional and predictable brackets for counting-process martingales
- `def-elementary-predictable-counting-process-integral` · definition — Elementary predictable integral against a counting-process martingale
- `lem-predictable-step-processes-dense-in-compensator-l2` · lemma — Predictable step processes are dense for the compensator L² norm
- `def-l2-counting-process-integral` · definition — L² counting-process integral when the limit exists
- `lem-continuous-predictable-bracket-uniqueness` · lemma — Uniqueness of continuous predictable brackets
- `lem-elementary-counting-integral-preserves-martingales` · lemma — Elementary predictable counting-process integrals are martingales
- `lem-finite-variation-integration-by-parts-for-counting-process-martingales` · lemma — Finite-variation integration by parts for counting-process martingales
- `thm-compensated-counting-process-brackets` · theorem — Brackets of a compensated simple counting process
- `thm-cross-brackets-vanish-under-no-simultaneous-jumps` · theorem — Cross brackets vanish without simultaneous jumps
- `lem-elementary-counting-process-integral-isometry` · lemma — Isometry for elementary predictable counting-process integrals
- `thm-l2-counting-process-integral-isometry` · theorem — L² extension of the predictable counting-process integral

### `counting-process-compensators-and-integrals-examples` — Counting-process compensators, integrals, brackets — Examples (3 item(s))

- `ex-delayed-entry-predictable-risk-process` · example — Delayed entry with a predictable risk process
- `ex-tied-jumps-produce-nonzero-cross-bracket` · example — A tied jump produces a nonzero cross bracket
- `ex-one-event-exponential-compensator-and-isometry` · example — One exponential event: compensator and isometry

## Your seams

Your pages depend on another group's:

- `event-time-censoring-and-truncation` requires `scientific-statistical-model-contracts` (group a, batch 1)

Another group's pages depend on yours:

- `independent-subject-terminal-influence-limits` (group k) requires your `counting-process-compensators-and-integrals`
- `nelson-aalen-kaplan-meier-greenwood` (group k) requires your `event-time-censoring-and-truncation`
- `nelson-aalen-kaplan-meier-greenwood` (group k) requires your `counting-process-compensators-and-integrals`
- `logrank-and-weighted-logrank` (group k) requires your `event-time-censoring-and-truncation`
- `logrank-and-weighted-logrank` (group k) requires your `counting-process-compensators-and-integrals`
- `cox-ph-and-partial-likelihood` (group l) requires your `event-time-censoring-and-truncation`
- `cox-ph-and-partial-likelihood` (group l) requires your `counting-process-compensators-and-integrals`
- `competing-risks-and-cumulative-incidence` (group l) requires your `event-time-censoring-and-truncation`
- `competing-risks-and-cumulative-incidence` (group l) requires your `counting-process-compensators-and-integrals`
- `poisson-and-cox-point-process-models` (group p) requires your `counting-process-compensators-and-integrals`
- `temporal-point-process-intensity-and-likelihood` (group q) requires your `counting-process-compensators-and-integrals`

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

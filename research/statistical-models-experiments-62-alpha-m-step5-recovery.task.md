# Step 5 adjudication — group **m**, run `statistical-models-experiments-62`

You are the group Alpha for batches 37, 38, 39: 3 A/B pair(s), 6 page(s), 14 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **37**: `research/statistical-models-experiments-62-batch-37-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **38**: `research/statistical-models-experiments-62-batch-38-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **39**: `research/statistical-models-experiments-62-batch-39-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 37 | `detection-and-quantification-limits` | A | statistical-models-and-experiments | 1990 | `finite-sample-tests-neyman-pearson-and-valid-p-values`, `confidence-sets-pivots-and-test-inversion`, `weak-convergence-tightness-and-representation`, `probability-spaces-random-variables-and-expectation`, `brownian-motion-construction-and-continuity` |
| 37 | `detection-and-quantification-limits-examples` | B | statistical-models-and-experiments | 1991 | `detection-and-quantification-limits` |
| 38 | `method-agreement-and-limits` | A | statistical-models-and-experiments | 1992 | `scientific-statistical-model-contracts`, `weak-convergence-tightness-and-representation`, `probability-spaces-random-variables-and-expectation` |
| 38 | `method-agreement-and-limits-examples` | B | statistical-models-and-experiments | 1993 | `method-agreement-and-limits` |
| 39 | `measurement-batch-and-process-variation` | A | statistical-models-and-experiments | 1994 | `mixed-effects-and-longitudinal-models`, `measurement-calibration-and-uncertainty`, `probability-spaces-random-variables-and-expectation` |
| 39 | `measurement-batch-and-process-variation-examples` | B | statistical-models-and-experiments | 1995 | `measurement-batch-and-process-variation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `detection-and-quantification-limits` — Detection and quantification limits (4 item(s))

- `def-critical-detection-and-quantification-levels` · definition — Critical, detection, and quantification levels
- `lem-standard-normal-cdf-quantiles-and-symmetry` · lemma — The standard normal CDF has unique symmetric quantiles
- `lem-normal-location-scale-mean-and-variance` · lemma — Location-scale normal laws have their stated mean and variance
- `thm-known-normal-blank-detection-and-quantification-limits` · theorem — Exact limits in the known-blank equal-variance normal model

### `detection-and-quantification-limits-examples` — Detection and quantification limits — Examples (3 item(s))

- `ex-known-blank-normal-detection-and-quantification-limits` · example — Known-blank normal limits at five-percent error and ten-percent CV
- `ex-estimated-blank-variance-inflates-detection-limits` · example — An estimated blank increases the effective normal scale
- `ex-detection-limit-assumptions-and-left-censoring` · example — Detection-limit assumptions and left-censored readings

### `method-agreement-and-limits` — Method agreement (2 item(s))

- `def-method-agreement-and-limits` · definition — Method agreement and limits of agreement
- `thm-normal-difference-agreement-limits` · theorem — Normal differences have limits at their central quantiles

### `method-agreement-and-limits-examples` — Method agreement — Examples (2 item(s))

- `ex-correlation-without-agreement` · example — Perfect correlation can coexist with a method offset
- `ex-repeated-method-differences-have-random-intercept-covariance` · example — Repeated method differences can share a random intercept

### `measurement-batch-and-process-variation` — Batch and measurement-process variation (2 item(s))

- `def-batch-and-measurement-process-variation` · definition — Batch and measurement-process variation
- `thm-nested-batch-repeatability-covariance-and-mean-variance` · theorem — Within-batch covariance and replicate-mean variance

### `measurement-batch-and-process-variation-examples` — Batch and measurement-process variation — Examples (1 item(s))

- `ex-day-specific-calibration-slope-drift-and-check-standards` · example — Day-specific calibration slope drift and check standards

## Your seams

Your pages depend on another group's:

- `method-agreement-and-limits` requires `scientific-statistical-model-contracts` (group a, batch 1)
- `measurement-batch-and-process-variation` requires `mixed-effects-and-longitudinal-models` (group c, batch 7)
- `measurement-batch-and-process-variation` requires `measurement-calibration-and-uncertainty` (group l, batch 36)

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

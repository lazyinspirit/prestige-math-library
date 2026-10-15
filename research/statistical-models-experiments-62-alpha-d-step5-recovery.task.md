# Step 5 adjudication — group **d**, run `statistical-models-experiments-62`

You are the group Alpha for batches 10, 11, 12: 3 A/B pair(s), 6 page(s), 21 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **10**: `research/statistical-models-experiments-62-batch-10-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **11**: `research/statistical-models-experiments-62-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **12**: `research/statistical-models-experiments-62-batch-12-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 10 | `stratified-sampling-and-allocation` | A | statistical-models-and-experiments | 1936 | `finite-populations-and-sampling-designs`, `horvitz-thompson-variance-and-srswor`, `probability-spaces-random-variables-and-expectation` |
| 10 | `stratified-sampling-and-allocation-examples` | B | statistical-models-and-experiments | 1937 | `stratified-sampling-and-allocation` |
| 11 | `cluster-and-two-stage-sampling` | A | statistical-models-and-experiments | 1938 | `finite-populations-and-sampling-designs`, `probability-spaces-random-variables-and-expectation`, `conditional-expectation` |
| 11 | `cluster-and-two-stage-sampling-examples` | B | statistical-models-and-experiments | 1939 | `cluster-and-two-stage-sampling` |
| 12 | `randomized-treatment-assignment-and-sharp-null-tests` | A | statistical-models-and-experiments | 1940 | `scientific-statistical-model-contracts`, `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `finite-probability-spaces-and-random-variables` |
| 12 | `randomized-treatment-assignment-and-sharp-null-tests-examples` | B | statistical-models-and-experiments | 1941 | `randomized-treatment-assignment-and-sharp-null-tests` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `stratified-sampling-and-allocation` — Stratification and allocation (4 item(s))

- `def-stratified-sampling-design-and-estimator` · definition — Stratified sampling designs and the stratified total estimator
- `thm-stratified-total-unbiasedness-and-variance` · theorem — Unbiasedness and variance of the stratified total estimator
- `thm-neyman-allocation-minimizes-stratified-variance` · theorem — Continuous fixed-size Neyman allocation minimizes stratified variance
- `thm-cost-optimal-stratified-allocation` · theorem — Continuous cost-optimal stratified allocation

### `stratified-sampling-and-allocation-examples` — Stratification and allocation — Examples (3 item(s))

- `ex-proportional-and-disproportionate-stratified-allocation` · example — Proportional and disproportionate stratified allocations
- `ex-zero-variance-stratum-allocation-boundary` · example — A zero-variance stratum is outside the positive-variance allocation formula
- `ex-rounding-neyman-allocation-to-integer-sample-sizes` · example — Continuous Neyman allocation may require constrained rounding

### `cluster-and-two-stage-sampling` — Cluster and two-stage sampling (5 item(s))

- `def-cluster-sampling-design-and-cluster-totals` · definition — Cluster sampling units, cluster totals, and one-stage SRSWOR
- `def-two-stage-cluster-sampling-and-expansion-estimator` · definition — Two-stage sampling laws and the expansion estimator
- `thm-srswor-cluster-total-estimator-unbiased-and-variance` · theorem — Unbiasedness and variance of the SRSWOR cluster-total estimator
- `thm-equal-cluster-size-design-effect` · theorem — Equal-size cluster design effect under exchangeable within-cluster covariance
- `thm-two-stage-expansion-total-unbiasedness-and-variance` · theorem — Unbiasedness and variance decomposition for the two-stage expansion total

### `cluster-and-two-stage-sampling-examples` — Cluster and two-stage sampling — Examples (2 item(s))

- `ex-two-stage-village-field-subsampling` · example — A two-stage village-and-field sample
- `cex-average-cluster-size-does-not-determine-unequal-size-design-effect` · counterexample — Average cluster size does not determine the unequal-size design effect

### `randomized-treatment-assignment-and-sharp-null-tests` — Assignment randomization and sharp-null tests (5 item(s))

- `lem-finite-weighted-upper-tail-pvalues-and-randomized-ties` · lemma — Finite weighted upper-tail p-values and randomized ties
- `def-finite-randomized-treatment-assignment-model` · definition — Finite randomized treatment-assignment models
- `def-fisher-sharp-null-and-predeclared-test-orderings` · definition — Fisher sharp null and predeclared test orderings
- `def-finite-population-average-treatment-effect-and-weak-null` · definition — Finite-population average treatment effect and weak null
- `thm-fisher-sharp-null-randomization-pvalues-are-valid` · theorem — Fisher sharp-null randomization p-values are valid

### `randomized-treatment-assignment-and-sharp-null-tests-examples` — Assignment randomization and sharp-null tests — Examples (2 item(s))

- `cex-zero-average-treatment-effect-does-not-imply-fisher-sharp-null` · counterexample — Zero average effect need not be a Fisher sharp null
- `ex-unequal-weighted-two-sided-randomization-test-with-ties` · example — A weighted two-sided randomization test with tied scores

## Your seams

Your pages depend on another group's:

- `stratified-sampling-and-allocation` requires `finite-populations-and-sampling-designs` (group c, batch 8)
- `stratified-sampling-and-allocation` requires `horvitz-thompson-variance-and-srswor` (group c, batch 9)
- `cluster-and-two-stage-sampling` requires `finite-populations-and-sampling-designs` (group c, batch 8)
- `randomized-treatment-assignment-and-sharp-null-tests` requires `scientific-statistical-model-contracts` (group a, batch 1)

Another group's pages depend on yours:

- `blocking-and-paired-designs` (group e) requires your `randomized-treatment-assignment-and-sharp-null-tests`
- `full-factorial-contrasts-and-interactions` (group e) requires your `randomized-treatment-assignment-and-sharp-null-tests`
- `power-and-sample-size-planning` (group f) requires your `randomized-treatment-assignment-and-sharp-null-tests`
- `interference-exposure-mappings-and-design-based-effects` (group h) requires your `randomized-treatment-assignment-and-sharp-null-tests`
- `logrank-and-weighted-logrank` (group k) requires your `randomized-treatment-assignment-and-sharp-null-tests`

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

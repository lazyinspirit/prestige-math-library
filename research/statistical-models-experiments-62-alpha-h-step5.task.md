# Step 5 adjudication — group **h**, run `statistical-models-experiments-62`

You are the group Alpha for batches 22, 23, 24: 3 A/B pair(s), 6 page(s), 39 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **22**: `research/statistical-models-experiments-62-batch-22-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **23**: `research/statistical-models-experiments-62-batch-23-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **24**: `research/statistical-models-experiments-62-batch-24-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 22 | `instrumental-variables-and-late` | A | statistical-models-and-experiments | 1960 | `potential-outcomes-and-causal-identification`, `statistical-experiments-models-and-identifiability`, `probability-spaces-random-variables-and-expectation`, `conditional-expectation`, `independence-borel-cantelli-and-zero-one-laws` |
| 22 | `instrumental-variables-and-late-examples` | B | statistical-models-and-experiments | 1961 | `instrumental-variables-and-late` |
| 23 | `mediation-effects-and-identification` | A | statistical-models-and-experiments | 1962 | `potential-outcomes-and-causal-identification`, `structural-causal-models-dags-and-adjustment`, `statistical-experiments-models-and-identifiability`, `markov-kernels-and-markov-chains`, `conditional-distributions-and-regular-conditional-probability` |
| 23 | `mediation-effects-and-identification-examples` | B | statistical-models-and-experiments | 1963 | `mediation-effects-and-identification` |
| 24 | `interference-exposure-mappings-and-design-based-effects` | A | statistical-models-and-experiments | 1964 | `randomized-treatment-assignment-and-sharp-null-tests`, `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `finite-probability-spaces-and-random-variables`, `conditional-expectation`, `probability-spaces-random-variables-and-expectation` |
| 24 | `interference-exposure-mappings-and-design-based-effects-examples` | B | statistical-models-and-experiments | 1965 | `interference-exposure-mappings-and-design-based-effects` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `instrumental-variables-and-late` — IV and LATE (9 item(s))

- `def-instrumental-variable-potential-outcomes` · definition — Binary instrumental-variable potential-outcome setup
- `def-principal-strata-and-late` · definition — Binary-instrument principal strata and LATE
- `def-wald-ratio` · definition — Binary-instrument Wald ratio
- `lem-iv-observed-contrasts-equal-potential-outcome-contrasts` · lemma — IV observed contrasts as potential-outcome contrasts
- `lem-binary-monotonicity-excludes-defiers` · lemma — Binary monotonicity excludes defiers
- `lem-iv-first-stage-is-complier-proportion` · lemma — The monotone IV first stage is the complier proportion
- `lem-iv-reduced-form-is-complier-effect` · lemma — The monotone IV reduced form is a complier-weighted effect
- `thm-wald-identifies-a-homogeneous-effect` · theorem — A constant additive effect is identified by the Wald ratio
- `thm-wald-identifies-the-complier-average-effect` · theorem — The Wald ratio identifies the complier average treatment effect

### `instrumental-variables-and-late-examples` — IV and LATE — Examples (6 item(s))

- `ex-weak-first-stage-wald-ratio-sensitivity` · example — A small first stage magnifies reduced-form changes
- `ex-exclusion-violation-distorts-wald-ratio` · example — A direct encouragement effect changes the Wald ratio
- `ex-defiers-break-the-late-ratio` · example — Defiers can make the Wald ratio differ from the complier effect
- `cex-valid-iv-does-not-identify-ate-without-further-restrictions` · counterexample — Core IV conditions alone do not identify the population ATE
- `ex-randomized-encouragement-late-calculation` · example — A finite randomized encouragement example
- `ex-heterogeneous-effects-late-differs-from-ate` · example — With heterogeneous effects, LATE can differ from ATE

### `mediation-effects-and-identification` — Mediation and cross-world assumptions (6 item(s))

- `def-controlled-and-natural-mediation-effects` · definition — Controlled and natural mediation effects
- `def-simple-markovian-mediation-scm` · definition — A simple Markovian mediation model
- `def-interventionist-mediation-effect` · definition — Separable interventionist mediation effects
- `lem-npsem-ie-implies-cross-world-independence-for-mediation` · lemma — Independent errors imply mediation cross-world independence
- `def-natural-effect-identification-assumptions` · definition — Assumptions for identifying natural effects
- `thm-natural-effect-identification-under-cross-world-independence` · theorem — The natural-effect mediation formula under independent errors

### `mediation-effects-and-identification-examples` — Mediation and cross-world assumptions — Examples (3 item(s))

- `cex-natural-effect-cross-world-nonidentification` · counterexample — Single-world assumptions do not identify natural effects
- `ex-mediator-confounding-invalidates-natural-effects-formula` · example — Mediator confounding changes the natural-effect functional
- `ex-treatment-induced-mediator-outcome-confounding-invalidates-natural-effects-formula` · example — A treatment-induced mediator–outcome confounder breaks the formula

### `interference-exposure-mappings-and-design-based-effects` — Interference and exposure mappings (10 item(s))

- `lem-finite-simple-random-sampling-identities` · lemma — Finite simple-random-sampling moment identities
- `lem-finite-event-conditional-expectation-formula` · lemma — Conditional expectation on positive-probability events in finite spaces
- `def-potential-outcomes-under-partial-interference` · definition — Finite-population potential outcomes under partial interference
- `def-exposure-mapping-under-interference` · definition — Exposure mappings and exposure consistency
- `def-two-stage-randomized-interference-design-and-effects` · definition — Two-stage randomized design and strategy-specific effects
- `thm-ht-exposure-specific-mean-unbiased` · theorem — Horvitz–Thompson exposure-specific mean is design-unbiased
- `thm-two-stage-randomized-interference-estimators-unbiased` · theorem — Two-stage strategy-specific effect estimators are design-unbiased
- `def-stratified-interference-design-based-variance-estimators` · definition — Stratified interference and source design-based variance estimators
- `lem-two-stage-finite-design-variance-identities` · lemma — Finite two-stage sampling variance identities
- `thm-stratified-interference-variance-estimators-conservative` · theorem — Stratified-interference variance estimators are conservative

### `interference-exposure-mappings-and-design-based-effects-examples` — Interference and exposure mappings — Examples (5 item(s))

- `cex-cross-group-contamination-violates-partial-interference` · counterexample — Cross-group contamination violates partial interference
- `ex-two-stage-village-strategy-contrasts` · example — A finite two-stage village strategy comparison
- `ex-ht-exposure-specific-mean-two-unit-design` · example — Horvitz–Thompson exposure mean in a two-unit design
- `cex-misspecified-own-treatment-exposure-map` · counterexample — An own-treatment-only exposure map can be misspecified
- `ex-nonadditive-spillovers-create-positive-variance-bias` · example — Nonadditive direct effects create positive variance-estimator bias

## Your seams

Your pages depend on another group's:

- `instrumental-variables-and-late` requires `potential-outcomes-and-causal-identification` (group g, batch 19)
- `mediation-effects-and-identification` requires `potential-outcomes-and-causal-identification` (group g, batch 19)
- `mediation-effects-and-identification` requires `structural-causal-models-dags-and-adjustment` (group g, batch 20)
- `interference-exposure-mappings-and-design-based-effects` requires `randomized-treatment-assignment-and-sharp-null-tests` (group d, batch 12)

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

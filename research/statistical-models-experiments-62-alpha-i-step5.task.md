# Step 5 adjudication — group **i**, run `statistical-models-experiments-62`

You are the group Alpha for batches 25, 26, 27: 3 A/B pair(s), 6 page(s), 18 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **25**: `research/statistical-models-experiments-62-batch-25-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **26**: `research/statistical-models-experiments-62-batch-26-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **27**: `research/statistical-models-experiments-62-batch-27-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 25 | `missingness-mechanisms-and-identification` | A | statistical-models-and-experiments | 1966 | `statistical-experiments-models-and-identifiability`, `dominated-experiments-likelihood-and-sufficiency`, `conditional-distributions-and-regular-conditional-probability` |
| 25 | `missingness-mechanisms-and-identification-examples` | B | statistical-models-and-experiments | 1967 | `missingness-mechanisms-and-identification` |
| 26 | `missing-data-weighting-and-sensitivity` | A | statistical-models-and-experiments | 1968 | `missingness-mechanisms-and-identification`, `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `conditional-expectation`, `markov-kernels-and-markov-chains` |
| 26 | `missing-data-weighting-and-sensitivity-examples` | B | statistical-models-and-experiments | 1969 | `missing-data-weighting-and-sensitivity` |
| 27 | `measurement-error-and-misclassification` | A | statistical-models-and-experiments | 1970 | `statistical-experiments-models-and-identifiability`, `dominated-experiments-likelihood-and-sufficiency`, `probability-spaces-random-variables-and-expectation`, `markov-kernels-and-markov-chains` |
| 27 | `measurement-error-and-misclassification-examples` | B | statistical-models-and-experiments | 1971 | `measurement-error-and-misclassification` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `missingness-mechanisms-and-identification` — Missingness and nonidentification (5 item(s))

- `def-full-observed-and-missing-data` · definition — Full and observed data under a missingness pattern
- `def-mcar-mar-and-mnar` · definition — MCAR, MAR, and MNAR relative to an observation pattern
- `lem-observed-data-likelihood-under-response-model` · lemma — Observed-data likelihood under a response model
- `thm-binary-outcome-mnar-nonidentification` · theorem — Exact binary-outcome bounds under unrestricted missingness
- `thm-mar-ignorable-likelihood-factorization` · theorem — MAR factorization and likelihood ignorability for the full-data parameter

### `missingness-mechanisms-and-identification-examples` — Missingness and nonidentification — Examples (2 item(s))

- `ex-death-is-not-missingness` · example — Death is not automatically a missing outcome
- `ex-missingness-mechanisms-and-nonidentification` · example — MCAR, MAR, MNAR, and indistinguishable observed laws

### `missing-data-weighting-and-sensitivity` — Missingness weights and sensitivity (4 item(s))

- `lem-missing-at-random-integrable-factorization` · lemma — Conditional-independence factorization for integrable outcomes
- `alg-response-probability-weighting` · algorithm — Response-probability weighting for a sample mean
- `thm-missing-at-random-weighting-identity` · theorem — Inverse response-probability weighting identifies the mean under MAR
- `def-pattern-mixture-sensitivity-parameter` · definition — Location-shift pattern-mixture sensitivity function

### `missing-data-weighting-and-sensitivity-examples` — Missingness weights and sensitivity — Examples (1 item(s))

- `ex-ipw-instability-and-mnar-sensitivity-curve` · example — Positivity failure, near-positivity weights, and an MNAR sensitivity curve

### `measurement-error-and-misclassification` — Measurement error and misclassification (5 item(s))

- `def-measurement-error-models` · definition — Additive measurement error and categorical misclassification models
- `def-nondifferential-measurement-error-relative-to-named-variables` · definition — Nondifferential measurement error relative to named variables
- `thm-classical-error-attenuation-in-simple-linear-regression` · theorem — Classical error attenuates the simple linear regression slope
- `thm-berkson-error-slope-in-simple-linear-model` · theorem — Berkson error preserves the simple linear regression slope
- `prop-observed-law-does-not-identify-latent-error-variance-split` · proposition — The observed law need not identify the latent-error variance split

### `measurement-error-and-misclassification-examples` — Measurement error and misclassification — Examples (1 item(s))

- `ex-classical-berkson-differential-error-and-validation` · example — Classical and Berkson slopes, misclassification, and validation

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

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

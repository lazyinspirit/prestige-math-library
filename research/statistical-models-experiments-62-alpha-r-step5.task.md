# Step 5 adjudication — group **r**, run `statistical-models-experiments-62`

You are the group Alpha for batches 52, 53, 54: 3 A/B pair(s), 6 page(s), 14 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **52**: `research/statistical-models-experiments-62-batch-52-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **53**: `research/statistical-models-experiments-62-batch-53-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **54**: `research/statistical-models-experiments-62-batch-54-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 52 | `valid-p-values-bonferroni-and-simultaneous-coverage` | A | statistical-models-and-experiments | 2020 | `finite-sample-tests-neyman-pearson-and-valid-p-values`, `confidence-sets-pivots-and-test-inversion`, `probability-spaces-random-variables-and-expectation` |
| 52 | `valid-p-values-bonferroni-and-simultaneous-coverage-examples` | B | statistical-models-and-experiments | 2021 | `valid-p-values-bonferroni-and-simultaneous-coverage` |
| 53 | `holm-step-down-familywise-error-control` | A | statistical-models-and-experiments | 2022 | `valid-p-values-bonferroni-and-simultaneous-coverage`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `probability-spaces-random-variables-and-expectation` |
| 53 | `holm-step-down-familywise-error-control-examples` | B | statistical-models-and-experiments | 2023 | `holm-step-down-familywise-error-control` |
| 54 | `benjamini-hochberg-independent-fdr-control` | A | statistical-models-and-experiments | 2024 | `valid-p-values-bonferroni-and-simultaneous-coverage`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `independence-borel-cantelli-and-zero-one-laws` |
| 54 | `benjamini-hochberg-independent-fdr-control-examples` | B | statistical-models-and-experiments | 2025 | `benjamini-hochberg-independent-fdr-control` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `valid-p-values-bonferroni-and-simultaneous-coverage` — Valid p-values, Bonferroni, simultaneous coverage (3 item(s))

- `def-null-valid-p-value-and-fwer-fdr` · definition — Null-valid p-values and familywise and false-discovery error rates
- `thm-bonferroni-simultaneous-coverage` · theorem — Bonferroni simultaneous coverage
- `thm-bonferroni-familywise-error-control` · theorem — Strong familywise error control by Bonferroni

### `valid-p-values-bonferroni-and-simultaneous-coverage-examples` — Valid p-values, Bonferroni, simultaneous coverage — Examples (2 item(s))

- `ex-bonferroni-simultaneous-coverage-with-dependent-intervals` · example — Simultaneous coverage for dependent interval sets
- `ex-discrete-superuniform-p-value-and-global-null` · example — A discrete p-value family under global and mixed nulls

### `holm-step-down-familywise-error-control` — Holm strong FWER (3 item(s))

- `alg-holm-step-down-procedure` · algorithm — Holm step-down procedure
- `lem-holm-rejection-events-are-measurable` · lemma — Holm rejection events are measurable
- `thm-holm-stepdown-strong-fwer` · theorem — Holm step-down controls strong FWER

### `holm-step-down-familywise-error-control-examples` — Holm strong FWER — Examples (1 item(s))

- `ex-holm-step-down-versus-bonferroni` · example — Holm step-down versus one-step Bonferroni

### `benjamini-hochberg-independent-fdr-control` — BH independent FDR (4 item(s))

- `def-false-discovery-rate-and-familywise-error-rate` · definition — False discovery proportion, FDR, and FWER
- `alg-benjamini-hochberg-step-up-procedure` · algorithm — Benjamini–Hochberg step-up procedure
- `lem-benjamini-hochberg-leave-one-out-identity` · lemma — Leave-one-out identity for the BH step-up rule
- `thm-benjamini-hochberg-independent-fdr` · theorem — Benjamini–Hochberg FDR under independence

### `benjamini-hochberg-independent-fdr-control-examples` — BH independent FDR — Examples (1 item(s))

- `ex-benjamini-hochberg-fdr-versus-fwer` · example — A two-test BH family distinguishes FDR from FWER

## Your seams

Another group's pages depend on yours:

- `fdr-control-under-dependence` (group s) requires your `valid-p-values-bonferroni-and-simultaneous-coverage`
- `fdr-control-under-dependence` (group s) requires your `benjamini-hochberg-independent-fdr-control`

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

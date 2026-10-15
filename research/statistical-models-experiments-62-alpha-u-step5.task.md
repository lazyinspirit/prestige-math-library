# Step 5 adjudication — group **u**, run `statistical-models-experiments-62`

You are the group Alpha for batches 61, 62: 2 A/B pair(s), 4 page(s), 9 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **61**: `research/statistical-models-experiments-62-batch-61-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **62**: `research/statistical-models-experiments-62-batch-62-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 61 | `group-sequential-alpha-spending` | A | statistical-models-and-experiments | 2038 | `finite-sample-tests-neyman-pearson-and-valid-p-values`, `central-limit-theorems`, `weak-convergence-tightness-and-representation` |
| 61 | `group-sequential-alpha-spending-examples` | B | statistical-models-and-experiments | 2039 | `group-sequential-alpha-spending` |
| 62 | `two-stage-conditional-error-adaptation` | A | statistical-models-and-experiments | 2040 | `finite-sample-tests-neyman-pearson-and-valid-p-values`, `conditional-expectation` |
| 62 | `two-stage-conditional-error-adaptation-examples` | B | statistical-models-and-experiments | 2041 | `two-stage-conditional-error-adaptation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `group-sequential-alpha-spending` — Group-sequential alpha spending (3 item(s))

- `def-group-sequential-alpha-spending-design` · definition — Canonical group-sequential alpha-spending design
- `alg-group-sequential-alpha-spending-boundary-calibration` · algorithm — Recursive group-sequential boundary calibration
- `thm-group-sequential-alpha-spending-calibration` · theorem — Group-sequential boundaries exist uniquely and spend alpha exactly

### `group-sequential-alpha-spending-examples` — Group-sequential alpha spending — Examples (2 item(s))

- `ex-pocock-spending-two-look` · example — Two-look Pocock-type symmetric spending
- `ex-obrien-fleming-spending-two-look` · example — Two-look O’Brien–Fleming-type spending

### `two-stage-conditional-error-adaptation` — Two-stage conditional-error adaptation (3 item(s))

- `lem-selected-sample-size-conditionally-superuniform-pvalue` · lemma — Selected-size conditional validity yields a conditionally superuniform p-value
- `thm-conditional-error-budget-two-stage-adaptation` · theorem — Conditional-error budget for two-stage adaptation
- `cor-conditionally-superuniform-stage-two-pvalue` · corollary — A conditionally superuniform stage-2 p-value preserves conditional error

### `two-stage-conditional-error-adaptation-examples` — Two-stage conditional-error adaptation — Examples (1 item(s))

- `ex-two-stage-conditional-error-sample-size-and-weight-adaptation` · example — Calibrated selected sample size and an uncalibrated weight change

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

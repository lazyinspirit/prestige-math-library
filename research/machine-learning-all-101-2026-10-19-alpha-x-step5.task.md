# Step 5 adjudication — group **x**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 71, 72, 73: 3 A/B pair(s), 6 page(s), 16 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **71**: `research/machine-learning-all-101-2026-10-19-batch-71-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **72**: `research/machine-learning-all-101-2026-10-19-batch-72-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **73**: `research/machine-learning-all-101-2026-10-19-batch-73-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 71 | `foundation-models-transfer-and-scaling-evidence` | A | machine-learning | 2829 | `attention-and-transformer-expressivity`, `distribution-shift-and-domain-adaptation` |
| 71 | `foundation-models-transfer-and-scaling-evidence-examples` | B | machine-learning | 2830 | `foundation-models-transfer-and-scaling-evidence` |
| 72 | `predictive-calibration-and-uncertainty-under-shift` | A | machine-learning | 2831 | `calibration-proper-losses-and-surrogate-classification`, `conformal-prediction-and-exchangeable-ranks`, `distribution-shift-and-domain-adaptation` |
| 72 | `predictive-calibration-and-uncertainty-under-shift-examples` | B | machine-learning | 2832 | `predictive-calibration-and-uncertainty-under-shift` |
| 73 | `online-decision-protocols` | A | machine-learning | 2833 | `probability-spaces-random-variables-and-expectation` |
| 73 | `online-decision-protocols-examples` | B | machine-learning | 2834 | `online-decision-protocols` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `foundation-models-transfer-and-scaling-evidence` — Foundation models, transfer, and scaling evidence (1 item(s))

- `def-foundation-model-as-broad-pretraining-and-adaptation` · definition — Foundation models as broad-pretraining and adaptation systems

### `foundation-models-transfer-and-scaling-evidence-examples` — Foundation models, transfer, and scaling evidence — Examples (2 item(s))

- `ex-empirical-language-model-scaling-law` · example — An observed-range language-model scaling fit
- `ex-pretraining-adaptation-interface-limitations` · example — A pretraining–adaptation interface with no shift guarantee

### `predictive-calibration-and-uncertainty-under-shift` — Predictive calibration and uncertainty under shift (5 item(s))

- `alg-split-conformal-set-for-classification` · algorithm — Split conformal prediction set for classification
- `def-top-label-calibration` · definition — Top-label calibration
- `alg-validation-temperature-scaling` · algorithm — Validation temperature scaling
- `def-binned-expected-calibration-error` · definition — Binned expected and maximum calibration error
- `thm-positive-temperature-scaling-preserves-argmax` · theorem — Positive temperature scaling preserves the maximizing class

### `predictive-calibration-and-uncertainty-under-shift-examples` — Predictive calibration and uncertainty under shift — Examples (1 item(s))

- `ex-calibration-degradation-under-shift` · example — Calibration examples under validation and distribution shift

### `online-decision-protocols` — Online protocols and regret benchmarks (4 item(s))

- `def-online-decision-protocol` · definition — Online decision protocol
- `def-adversary-and-feedback-model` · definition — Adversary and feedback models
- `def-static-dynamic-and-strongly-adaptive-regret` · definition — Static, dynamic, interval, and strongly adaptive regret
- `lem-finite-arm-regret-decomposes-into-expected-action-counts` · lemma — Finite-arm regret decomposes into expected action counts

### `online-decision-protocols-examples` — Online protocols and regret benchmarks — Examples (3 item(s))

- `ex-full-information-finite-experts` · example — Full-information finite experts
- `ex-changing-comparator-path-length` · example — A changing comparator separates static and dynamic regret
- `ex-stochastic-two-arm-pseudo-regret` · example — Two stochastic arms: pseudo-regret and reward regret

## Your seams

Your pages depend on another group's:

- `foundation-models-transfer-and-scaling-evidence` requires `attention-and-transformer-expressivity` (group l, batch 36)
- `foundation-models-transfer-and-scaling-evidence` requires `distribution-shift-and-domain-adaptation` (group c, batch 10)
- `predictive-calibration-and-uncertainty-under-shift` requires `calibration-proper-losses-and-surrogate-classification` (group c, batch 8)
- `predictive-calibration-and-uncertainty-under-shift` requires `distribution-shift-and-domain-adaptation` (group c, batch 10)

Another group's pages depend on yours:

- `hedge-and-online-gradient-descent` (group y) requires your `online-decision-protocols`
- `stochastic-finite-armed-bandits` (group y) requires your `online-decision-protocols`
- `linear-contextual-bandits-and-linucb` (group z) requires your `online-decision-protocols`
- `monotone-risk-calibration-and-deployment-guarantees` (group ag) requires your `predictive-calibration-and-uncertainty-under-shift`

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

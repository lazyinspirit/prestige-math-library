# Step 5 adjudication — group **c**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 8, 9, 10: 3 A/B pair(s), 6 page(s), 36 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **8**: `research/machine-learning-all-101-2026-10-19-batch-8-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **9**: `research/machine-learning-all-101-2026-10-19-batch-9-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **10**: `research/machine-learning-all-101-2026-10-19-batch-10-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 8 | `calibration-proper-losses-and-surrogate-classification` | A | machine-learning | 2710 | `conditional-distributions-and-regular-conditional-probability`, `prediction-problems-risks-and-empirical-minimization` |
| 8 | `calibration-proper-losses-and-surrogate-classification-examples` | B | machine-learning | 2711 | `calibration-proper-losses-and-surrogate-classification` |
| 9 | `minimax-learning-lower-bounds-and-optimal-rates` | A | machine-learning | 2712 | `minimax-lower-bounds-and-information-theoretic-methods`, `prediction-problems-risks-and-empirical-minimization`, `linear-algebra-methods-in-combinatorics` |
| 9 | `minimax-learning-lower-bounds-and-optimal-rates-examples` | B | machine-learning | 2713 | `minimax-learning-lower-bounds-and-optimal-rates` |
| 10 | `distribution-shift-and-domain-adaptation` | A | machine-learning | 2714 | `dominated-experiments-likelihood-and-sufficiency`, `rademacher-complexity-and-generalization` |
| 10 | `distribution-shift-and-domain-adaptation-examples` | B | machine-learning | 2715 | `distribution-shift-and-domain-adaptation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `calibration-proper-losses-and-surrogate-classification` — Calibration, proper losses, and surrogate classification (13 item(s))

- `def-proper-scoring-rule` · definition — Strictly proper scoring rules on a finite label set
- `lem-jensen-for-simplex-pairs` · lemma — Jensen's inequality for pairs of simplex-valued forecasts
- `lem-negative-root-power-is-convex` · lemma — The negative reciprocal-power function is convex
- `def-probability-calibration` · definition — Probability calibration and calibration error
- `lem-finite-label-conditional-probability-function` · lemma — A finite label has a conditional probability function
- `thm-log-and-brier-strict-propriety` · theorem — Log and Brier losses are strictly proper
- `cor-any-feature-induces-calibrated-forecast` · corollary — Conditioning on a feature induces a calibrated forecast
- `thm-posterior-forecast-minimizes-scoring-risk` · theorem — The posterior forecast minimizes strictly proper scoring risk
- `def-classification-calibration-of-a-surrogate` · definition — Binary surrogate classification risk
- `thm-binned-calibration-estimator-limits` · theorem — Fixed-bin calibration estimates underestimate for jointly convex discrepancies; refining bins can be consistent
- `lem-binary-zero-one-risk-excess-with-zero-tie` · lemma — Binary zero-one excess risk with a zero-score error convention
- `fs-unadjusted-surrogate-regret-bound` · false-statement — The unadjusted surrogate-regret bound has the wrong scale and tie convention
- `thm-surrogate-regret-controls-classification-regret` · theorem — Surrogate regret controls classification regret with explicit tie and scale terms

### `calibration-proper-losses-and-surrogate-classification-examples` — Calibration, proper losses, and surrogate classification — Examples (4 item(s))

- `ex-multiclass-calibration-notions-differ` · example — Three distinct calibration notions in three classes
- `ex-calibrated-constant-prior-forecast` · example — A calibrated constant prior forecast
- `ex-fixed-bin-ece-underestimates-calibration-error` · example — A fixed confidence bin hides calibration error
- `ex-calibrated-coarsened-risk-score-is-low-information` · example — A calibrated coarsened risk score loses information

### `minimax-learning-lower-bounds-and-optimal-rates` — Minimax learning lower bounds and optimal rates (6 item(s))

- `lem-bernoulli-two-point-testing-for-vc-lower-bound` · lemma — A Bernoulli two-point testing lower bound
- `lem-bounded-variable-lower-tail-from-mean` · lemma — A lower-tail bound from a bounded mean
- `def-minimax-excess-risk` · definition — Binary learning minimax excess risk
- `thm-realizable-vc-minimax-lower-bound` · theorem — A realizable VC minimax lower bound
- `thm-agnostic-vc-minimax-lower-bound` · theorem — An agnostic VC minimax lower bound
- `cor-vc-minimax-rate-match` · corollary — The realizable and agnostic VC lower rates

### `minimax-learning-lower-bounds-and-optimal-rates-examples` — Minimax learning lower bounds and optimal rates — Examples (3 item(s))

- `ex-bernoulli-two-point-testing` · example — One-sample Bernoulli two-point testing
- `ex-finite-shattered-set` · example — A finite class shattering three points
- `ex-fixed-confidence-vc-lower-bounds` · example — Fixed-confidence lower bounds at dimension four

### `distribution-shift-and-domain-adaptation` — Distribution shift and domain adaptation (7 item(s))

- `def-source-target-distributions-and-shift` · definition — Source and target joint laws, risks, and covariate shift
- `def-h-delta-h-divergence` · definition — H-delta-H divergence
- `def-loss-discrepancy-between-domains` · definition — Loss discrepancy between domains
- `lem-covariate-shift-joint-law-density` · lemma — Covariate shift gives a joint-law density
- `thm-covariate-shift-importance-weighting` · theorem — Importance weighting under covariate shift
- `thm-target-risk-bound-by-source-risk-divergence-and-joint-error` · theorem — Target risk bound by source risk, H-delta-H divergence, and joint error
- `thm-discrepancy-domain-adaptation-bound` · theorem — Loss-discrepancy domain-adaptation bound

### `distribution-shift-and-domain-adaptation-examples` — Distribution shift and domain adaptation — Examples (3 item(s))

- `ex-support-mismatch-prevents-covariate-weighting` · example — Support mismatch prevents covariate-shift weighting
- `ex-unbounded-covariate-shift-weights` · example — Covariate-shift weights can be unbounded and integrable
- `ex-label-shift-identical-input-laws-has-large-joint-error` · example — Identical input laws can hide a large joint-labeling error

## Your seams

Your pages depend on another group's:

- `calibration-proper-losses-and-surrogate-classification` requires `prediction-problems-risks-and-empirical-minimization` (group a, batch 2)
- `minimax-learning-lower-bounds-and-optimal-rates` requires `prediction-problems-risks-and-empirical-minimization` (group a, batch 2)
- `distribution-shift-and-domain-adaptation` requires `rademacher-complexity-and-generalization` (group b, batch 5)

Another group's pages depend on yours:

- `fairness-criteria-and-impossibility-boundaries` (group d) requires your `calibration-proper-losses-and-surrogate-classification`
- `multimodal-contrastive-alignment-and-transfer` (group w) requires your `distribution-shift-and-domain-adaptation`
- `foundation-models-transfer-and-scaling-evidence` (group x) requires your `distribution-shift-and-domain-adaptation`
- `predictive-calibration-and-uncertainty-under-shift` (group x) requires your `calibration-proper-losses-and-surrogate-classification`
- `predictive-calibration-and-uncertainty-under-shift` (group x) requires your `distribution-shift-and-domain-adaptation`
- `preference-learning-and-direct-preference-optimization` (group af) requires your `calibration-proper-losses-and-surrogate-classification`

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

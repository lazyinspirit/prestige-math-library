# Step 4 batch reviewer — batch **8**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **8**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["8"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 8 | `calibration-proper-losses-and-surrogate-classification` | A | conditional-distributions-and-regular-conditional-probability, prediction-problems-risks-and-empirical-minimization |
| 8 | `calibration-proper-losses-and-surrogate-classification-examples` | B | calibration-proper-losses-and-surrogate-classification |

## Your content, in full

### `calibration-proper-losses-and-surrogate-classification` — Calibration, proper losses, and surrogate classification

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

### `calibration-proper-losses-and-surrogate-classification-examples` — Calibration, proper losses, and surrogate classification — Examples

- `ex-multiclass-calibration-notions-differ` · example — Three distinct calibration notions in three classes
- `ex-calibrated-constant-prior-forecast` · example — A calibrated constant prior forecast
- `ex-fixed-bin-ece-underestimates-calibration-error` · example — A fixed confidence bin hides calibration error
- `ex-calibrated-coarsened-risk-score-is-low-information` · example — A calibrated coarsened risk score loses information

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `calibration-proper-losses-and-surrogate-classification` requires `prediction-problems-risks-and-empirical-minimization`
- `fairness-criteria-and-impossibility-boundaries` requires `calibration-proper-losses-and-surrogate-classification`
- `predictive-calibration-and-uncertainty-under-shift` requires `calibration-proper-losses-and-surrogate-classification`
- `preference-learning-and-direct-preference-optimization` requires `calibration-proper-losses-and-surrogate-classification`
---

# Step 4 Alpha batch reviewer — read-only digest, `machine-learning-all-101-2026-10-19`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.

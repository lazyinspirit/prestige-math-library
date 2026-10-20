# Step 4 batch reviewer — batch **2**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **2**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["2"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 2 | `prediction-problems-risks-and-empirical-minimization` | A | conditional-distributions-and-regular-conditional-probability, conditional-expectation, losses-risk-and-decision-rules, probability-spaces-random-variables-and-expectation, statistical-experiments-models-and-identifiability |
| 2 | `prediction-problems-risks-and-empirical-minimization-examples` | B | prediction-problems-risks-and-empirical-minimization, interference-exposure-mappings-and-design-based-effects, outward-rounded-interval-and-ball-arithmetic |

## Your content, in full

### `prediction-problems-risks-and-empirical-minimization` — Prediction problems, risks, and empirical minimization

- `def-supervised-learning-problem` · definition — Supervised prediction problems
- `def-population-and-empirical-risk` · definition — Population and empirical risk
- `def-empirical-risk-minimizer` · definition — Empirical risk minimizers
- `lem-population-and-empirical-risk-are-measurable` · lemma — Population and empirical risks are measurable
- `thm-conditional-bayes-rule-minimizes-population-risk` · theorem — A conditional Bayes rule minimizes population risk
- `lem-standard-borel-label-kernel-over-arbitrary-instance-space` · lemma — A standard-Borel label has a conditional kernel over an arbitrary measurable instance space
- `def-bayes-predictor-and-excess-risk` · definition — Bayes predictors and excess risk
- `alg-finite-list-empirical-risk-minimizer` · algorithm — Finite-list empirical risk minimization
- `alg-approximate-erm` · algorithm — Approximate empirical risk minimization with a supplied selector
- `lem-finite-list-empirical-risk-selector-is-measurable` · lemma — The finite-list ERM selector is measurable

### `prediction-problems-risks-and-empirical-minimization-examples` — Prediction problems, risks, and empirical minimization — Examples

- `ex-binary-zero-one-loss` · example — Binary zero-one loss and risk
- `ex-squared-loss-conditional-mean` · example — Squared loss and a conditional mean
- `ex-absolute-loss-conditional-median` · example — Absolute loss and conditional medians
- `ex-nonattained-risk-infimum` · example — A nonattained risk infimum

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `finite-class-pac-learning-and-erm` requires `prediction-problems-risks-and-empirical-minimization`
- `compression-and-pac-bayes-generalization` requires `prediction-problems-risks-and-empirical-minimization`
- `calibration-proper-losses-and-surrogate-classification` requires `prediction-problems-risks-and-empirical-minimization`
- `minimax-learning-lower-bounds-and-optimal-rates` requires `prediction-problems-risks-and-empirical-minimization`
- `stochastic-gradient-descent-for-learning` requires `prediction-problems-risks-and-empirical-minimization`
- `mean-field-training-and-feature-learning` requires `prediction-problems-risks-and-empirical-minimization`
- `discrete-masked-diffusion-and-reverse-generation` requires `prediction-problems-risks-and-empirical-minimization`
- `active-querying-version-spaces-and-abstention` requires `prediction-problems-risks-and-empirical-minimization`
- `semi-supervised-graph-propagation-and-pseudolabeling-limits` requires `prediction-problems-risks-and-empirical-minimization`
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

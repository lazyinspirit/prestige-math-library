# Step 4 batch reviewer — batch **32**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **32**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["32"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 32 | `robust-influence-and-breakdown` | A | contamination-models-and-robust-risk, pathwise-differentiability-influence-functions-and-efficient-scores |
| 32 | `robust-influence-and-breakdown-examples` | B | robust-influence-and-breakdown |

## Your content, in full

### `robust-influence-and-breakdown` — Influence and Breakdown

- `def-finite-sample-replacement-breakdown` · definition — Finite-sample replacement breakdown
- `def-lower-median-functional` · definition — The lower median of a real probability law
- `lem-finite-empirical-measure-is-a-probability-law` · lemma — A finite empirical measure is a probability law
- `lem-lower-median-of-odd-empirical-sample-is-middle-order-statistic` · lemma — The lower median of an odd empirical sample is its middle order statistic
- `thm-mean-and-median-replacement-breakdown` · theorem — Replacement breakdown of the sample mean and odd-sample median
- `def-statistical-functional-and-influence-function` · definition — Statistical functionals and gross-error influence functions
- `def-gross-error-sensitivity` · definition — Gross-error sensitivity of a functional
- `thm-influence-function-for-m-location-estimator` · theorem — Influence function for a regular M-location functional
- `thm-median-influence-function` · theorem — Influence function and sensitivity of the median

### `robust-influence-and-breakdown-examples` — Influence and Breakdown — Examples

- `ex-mean-influence-and-replacement-breakdown` · example — The mean has unbounded influence and 1/n breakdown
- `ex-median-influence-and-replacement-breakdown` · example — A smooth median has bounded influence and about one-half breakdown
- `cex-bounded-influence-does-not-imply-positive-breakdown` · counterexample — Bounded influence can coexist with vanishing replacement breakdown

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `robust-influence-and-breakdown` requires `contamination-models-and-robust-risk`
- `robust-influence-and-breakdown` requires `pathwise-differentiability-influence-functions-and-efficient-scores`
---

# Step 4 Alpha batch reviewer — read-only digest, `mathematical-statistics-foundations-37`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.

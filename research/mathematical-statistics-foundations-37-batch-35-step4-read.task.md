# Step 4 batch reviewer — batch **35**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **35**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["35"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 35 | `sequential-testing-and-anytime-valid-inference` | A | estimators-and-randomized-procedures, finite-sample-tests-neyman-pearson-and-valid-p-values, discrete-time-martingales, stopping-times-and-optional-stopping, martingale-inequalities-and-convergence |
| 35 | `sequential-testing-and-anytime-valid-inference-examples` | B | sequential-testing-and-anytime-valid-inference |

## Your content, in full

### `sequential-testing-and-anytime-valid-inference` — Sequential Validity and Ville's Inequality

- `def-nonnegative-test-supermartingale` · definition — Nonnegative test supermartingales
- `thm-villes-inequality` · theorem — Ville's inequality for nonnegative test supermartingales
- `thm-mixture-of-null-supermartingales` · theorem — Mixtures of null test supermartingales
- `def-anytime-valid-p-value-process` · definition — Anytime-valid p-value processes
- `thm-anytime-validity` · theorem — A test supermartingale gives anytime-valid p-values
- `def-confidence-sequence` · definition — Confidence sequences
- `thm-confidence-sequence-by-test-inversion` · theorem — Confidence sequences by test-supermartingale inversion

### `sequential-testing-and-anytime-valid-inference-examples` — Sequential Validity and Ville's Inequality — Examples

- `ex-likelihood-ratio-test-supermartingale` · example — A finite-horizon likelihood-ratio test supermartingale
- `ex-data-dependent-threshold-crossing` · example — A data-dependent threshold crossing
- `cex-process-valid-under-one-null-but-not-composite-null` · counterexample — Validity under one null law does not give a composite-null test supermartingale

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `sequential-testing-and-anytime-valid-inference` requires `estimators-and-randomized-procedures`
- `sequential-testing-and-anytime-valid-inference` requires `finite-sample-tests-neyman-pearson-and-valid-p-values`
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

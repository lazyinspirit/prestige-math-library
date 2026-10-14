# Step 4 batch reviewer — batch **9**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **9**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["9"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 9 | `uniformly-most-powerful-tests-and-monotone-likelihood-ratio` | A | finite-sample-tests-neyman-pearson-and-valid-p-values, complete-sufficiency-exponential-families-and-basu |
| 9 | `uniformly-most-powerful-tests-and-monotone-likelihood-ratio-examples` | B | uniformly-most-powerful-tests-and-monotone-likelihood-ratio |

## Your content, in full

### `uniformly-most-powerful-tests-and-monotone-likelihood-ratio` — UMP Tests

- `lem-randomized-threshold-has-exact-level` · lemma — A randomized threshold attains every test size
- `def-monotone-likelihood-ratio-family` · definition — Families with a monotone likelihood ratio
- `lem-mlr-orders-randomized-thresholds` · lemma — MLR orders the power of randomized thresholds
- `thm-karlin-rubin-one-sided-ump-test` · theorem — The Karlin–Rubin theorem for one-sided tests
- `thm-ump-nonexistence-witness` · theorem — A two-sided normal alternative need not have a UMP test

### `uniformly-most-powerful-tests-and-monotone-likelihood-ratio-examples` — UMP Tests — Examples

- `ex-binomial-one-sided-ump-test` · example — A randomized UMP test for a binomial model
- `ex-two-sided-normal-alternatives-have-opposed-most-powerful-tests` · example — Opposed most powerful tests for two normal alternatives

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `uniformly-most-powerful-tests-and-monotone-likelihood-ratio` requires `finite-sample-tests-neyman-pearson-and-valid-p-values`
- `uniformly-most-powerful-tests-and-monotone-likelihood-ratio` requires `complete-sufficiency-exponential-families-and-basu`
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

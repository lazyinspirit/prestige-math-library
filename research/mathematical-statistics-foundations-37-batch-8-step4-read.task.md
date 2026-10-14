# Step 4 batch reviewer — batch **8**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **8**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["8"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 8 | `finite-sample-tests-neyman-pearson-and-valid-p-values` | A | estimators-and-randomized-procedures, dominated-experiments-likelihood-and-sufficiency, losses-risk-and-decision-rules |
| 8 | `finite-sample-tests-neyman-pearson-and-valid-p-values-examples` | B | finite-sample-tests-neyman-pearson-and-valid-p-values |

## Your content, in full

### `finite-sample-tests-neyman-pearson-and-valid-p-values` — Tests, Neyman–Pearson and Valid P-values

- `lem-integrable-signed-function-integration-against-density` · lemma — Bounded signed integrals obey the density formula
- `lem-likelihood-ratio-threshold-exists` · lemma — A likelihood-ratio threshold with boundary randomization exists
- `lem-common-support-likelihood-ratio-is-measurable` · lemma — The common-support likelihood ratio is measurable
- `def-p-value` · definition — Valid p-values
- `lem-measurable-rejection-function-defines-randomized-test` · lemma — Every measurable rejection function defines a randomized test
- `lem-test-zero-one-loss-risk-identities` · lemma — Binary zero-one loss risks are the testing error probabilities
- `def-test-size-and-power` · definition — Test size and power
- `def-likelihood-ratio-test-with-boundary-randomization` · definition — Likelihood-ratio tests with boundary randomization
- `thm-p-value-superuniformity` · theorem — Valid p-values yield level tests for nonempty disjoint alternatives
- `lem-likelihood-ratio-test-is-measurable-and-exact-size` · lemma — The likelihood-ratio rule is a measurable test of exact size
- `thm-neyman-pearson-lemma` · theorem — Neyman–Pearson lemma with singular alternative mass

### `finite-sample-tests-neyman-pearson-and-valid-p-values-examples` — Tests, Neyman–Pearson and Valid P-values — Examples

- `cex-uniform-null-p-value-is-anti-conservative` · counterexample — A measurable [0,1]-valued statistic need not be a valid p-value
- `ex-discrete-neyman-pearson-randomized-boundary` · example — Randomize at a discrete likelihood-ratio boundary
- `ex-continuous-neyman-pearson-likelihood-ratio-test` · example — A continuous likelihood-ratio test

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `finite-sample-tests-neyman-pearson-and-valid-p-values` requires `estimators-and-randomized-procedures`
- `finite-sample-tests-neyman-pearson-and-valid-p-values` requires `dominated-experiments-likelihood-and-sufficiency`
- `finite-sample-tests-neyman-pearson-and-valid-p-values` requires `losses-risk-and-decision-rules`
- `uniformly-most-powerful-tests-and-monotone-likelihood-ratio` requires `finite-sample-tests-neyman-pearson-and-valid-p-values`
- `confidence-sets-pivots-and-test-inversion` requires `finite-sample-tests-neyman-pearson-and-valid-p-values`
- `conditional-and-finite-group-exact-inference` requires `finite-sample-tests-neyman-pearson-and-valid-p-values`
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

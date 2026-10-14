# Step 4 batch reviewer — batch **12**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **12**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["12"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 12 | `conditional-and-finite-group-exact-inference` | A | complete-sufficiency-exponential-families-and-basu, finite-sample-tests-neyman-pearson-and-valid-p-values, confidence-sets-pivots-and-test-inversion, conditional-distributions-and-regular-conditional-probability, finite-probability-spaces-and-random-variables |
| 12 | `conditional-and-finite-group-exact-inference-examples` | B | conditional-and-finite-group-exact-inference |

## Your content, in full

### `conditional-and-finite-group-exact-inference` — Conditional and Finite-Group Exact Inference

- `lem-conditional-kernel-tail-and-atom-evaluations-are-measurable` · lemma — Conditional-kernel tail and atom evaluations are measurable
- `lem-randomized-probability-integral-transform` · lemma — Randomizing across CDF jumps gives a uniform variable
- `def-finite-group-randomization-test` · definition — Finite-group randomization setups
- `lem-finite-multiset-randomized-rank-is-uniform` · lemma — Tied upper ranks on a finite multiset
- `def-randomized-conditional-p-value` · definition — Randomized conditional upper-tail p-values
- `def-orbit-rank-p-value` · definition — Orbit upper-tail rank p-values
- `thm-conditional-randomized-p-uniformity` · theorem — Randomized conditional p-values are uniform
- `thm-finite-group-randomization-validity` · theorem — Finite-group orbit-rank validity
- `def-conditional-test-given-statistic` · definition — Conditional tests given a statistic
- `thm-conditioning-on-a-nuisance-sufficient-statistic` · theorem — Sufficiency makes the conditional rejection probability nuisance-free
- `thm-conditional-test-controls-unconditional-level` · theorem — Conditional level implies unconditional level

### `conditional-and-finite-group-exact-inference-examples` — Conditional and Finite-Group Exact Inference — Examples

- `cex-noninvariant-null-invalidates-group-pvalue` · counterexample — Without null invariance a group-rank p-value can be anti-conservative
- `ex-finite-permutation-orbit-with-ties-and-stabilizers` · example — A permutation orbit with tied ranks and nontrivial stabilizers
- `ex-fishers-exact-test-from-two-binomial-samples` · example — Fisher's exact test from two Bernoulli samples

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `conditional-and-finite-group-exact-inference` requires `complete-sufficiency-exponential-families-and-basu`
- `conditional-and-finite-group-exact-inference` requires `finite-sample-tests-neyman-pearson-and-valid-p-values`
- `conditional-and-finite-group-exact-inference` requires `confidence-sets-pivots-and-test-inversion`
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

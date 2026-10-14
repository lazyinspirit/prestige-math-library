# Step 4 batch reviewer — batch **21**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **21**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["21"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 21 | `delta-method-and-asymptotic-normality` | A | asymptotic-convergence-consistency-and-identification, m-and-z-estimation-and-uniform-laws, weak-convergence-tightness-and-representation, matrix-differentiation-and-first-order-spectral-perturbation, inner-product-spaces-and-orthogonality |
| 21 | `delta-method-and-asymptotic-normality-examples` | B | delta-method-and-asymptotic-normality |

## Your content, in full

### `delta-method-and-asymptotic-normality` — Delta Method and Asymptotic Normality

- `thm-first-and-second-order-delta-method-for-random-vectors` · theorem — First- and second-order delta method for random vectors
- `thm-z-estimator-asymptotic-linearity-and-normality` · theorem — Asymptotic linearity and normality of iid Z-estimators

### `delta-method-and-asymptotic-normality-examples` — Delta Method and Asymptotic Normality — Examples

- `ex-log-transformation-delta-method` · example — A logarithmic transformation
- `ex-ratio-delta-method` · example — A ratio transformation
- `ex-second-order-delta-method-quadratic` · example — A zero-gradient quadratic limit
- `ex-sample-variance-delta-method` · example — Sample variance from a multivariate delta method
- `cex-continuity-alone-does-not-give-delta-method` · counterexample — Continuity alone does not give a delta-method limit

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `delta-method-and-asymptotic-normality` requires `asymptotic-convergence-consistency-and-identification`
- `delta-method-and-asymptotic-normality` requires `m-and-z-estimation-and-uniform-laws`
- `likelihood-asymptotics-wald-score-and-likelihood-ratio` requires `delta-method-and-asymptotic-normality`
- `boundary-and-misspecified-asymptotics` requires `delta-method-and-asymptotic-normality`
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

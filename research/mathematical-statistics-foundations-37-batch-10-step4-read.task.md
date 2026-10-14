# Step 4 batch reviewer — batch **10**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **10**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["10"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 10 | `gaussian-orthogonal-decomposition-and-quadratic-forms` | A | estimators-and-randomized-procedures, independence-borel-cantelli-and-zero-one-laws, weak-convergence-tightness-and-representation, central-limit-theorems, fourier-transform-convolution-and-approximate-identities, inner-product-spaces-and-orthogonality, the-spectral-theorem-and-singular-value-decomposition, product-measures-and-the-fubini-tonelli-theorems, reeb-stability-and-global-foliation-constructions |
| 10 | `gaussian-orthogonal-decomposition-and-quadratic-forms-examples` | B | gaussian-orthogonal-decomposition-and-quadratic-forms |

## Your content, in full

### `gaussian-orthogonal-decomposition-and-quadratic-forms` — Gaussian Orthogonal Decomposition and Quadratic Forms

- `thm-orthogonal-transform-preserves-standard-normal-product-law` · theorem — Orthogonal transformations preserve the standard normal product law
- `def-chi-square-law` · definition — Chi-square laws, including zero degrees
- `lem-positive-df-chi-square-has-density-and-regular-cdf` · lemma — Positive-degree chi-square laws have a positive density and regular CDF
- `thm-orthogonal-projection-has-independent-chi-square-sums` · theorem — Orthogonal projections split a standard Gaussian into independent chi-square sums
- `def-student-t-and-f-laws` · definition — Student t and Fisher F laws
- `lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing` · lemma — Student t and Fisher F CDFs are continuous and strictly increasing on their supports
- `thm-normal-mean-residual-independence-and-exact-t-pivot` · theorem — Normal sample mean and residual are independent, giving the exact t pivot
- `thm-gaussian-linear-model-qr-and-exact-t-f-pivots` · theorem — QR decomposition gives exact t and F pivots in the fixed Gaussian linear model

### `gaussian-orthogonal-decomposition-and-quadratic-forms-examples` — Gaussian Orthogonal Decomposition and Quadratic Forms — Examples

- `ex-one-sample-unknown-variance-t-interval` · example — An exact unknown-variance t interval for a four-point sample
- `ex-fixed-design-regression-contrast-and-f-test` · example — A fixed-design slope contrast and nested-model F statistic
- `cex-rademacher-orthogonality-does-not-imply-independence-or-exact-t-f` · counterexample — Rademacher errors show orthogonality alone gives neither independence nor exact t and F laws

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gaussian-orthogonal-decomposition-and-quadratic-forms` requires `estimators-and-randomized-procedures`
- `confidence-sets-pivots-and-test-inversion` requires `gaussian-orthogonal-decomposition-and-quadratic-forms`
- `likelihood-asymptotics-wald-score-and-likelihood-ratio` requires `gaussian-orthogonal-decomposition-and-quadratic-forms`
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

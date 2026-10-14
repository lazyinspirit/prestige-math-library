# Step 4 batch reviewer — batch **18**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **18**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["18"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 18 | `decision-theoretic-upper-bounds-and-oracle-risk` | A | losses-risk-and-decision-rules, finite-sample-point-estimation-and-unbiased-optimality, concentration-inequalities-and-tail-bounds, minimax-lower-bounds-and-information-theoretic-methods, hilbert-space-geometry-and-riesz-representation |
| 18 | `decision-theoretic-upper-bounds-and-oracle-risk-examples` | B | decision-theoretic-upper-bounds-and-oracle-risk |

## Your content, in full

### `decision-theoretic-upper-bounds-and-oracle-risk` — Decision-Theoretic Upper Bounds

- `def-fixed-design-projection-estimator` · definition — Fixed-design least squares as orthogonal projection
- `lem-binomial-support-count-bound` · lemma — A binomial support-count bound
- `lem-finite-dimensional-projection-is-linear-and-contractive` · lemma — Finite-dimensional orthogonal projections are linear and contractive
- `lem-finite-support-projection-selection-is-borel` · lemma — Finite tie-broken projection searches are Borel measurable
- `lem-isotropic-gaussian-noise-is-subgaussian` · lemma — Isotropic Gaussian noise has the matching sub-Gaussian proxy
- `alg-bic-penalized-least-squares` · algorithm — Penalized support-search least squares
- `alg-constrained-l0-least-squares` · algorithm — Constrained support-search least squares
- `thm-gaussian-projection-risk` · theorem — Exact squared-error risk of an isotropic projection fit
- `thm-subgaussian-projection-risk` · theorem — Sub-Gaussian projection risk bounds
- `thm-bic-fitted-risk-bound` · theorem — BIC fitted-value risk bound
- `thm-sparse-subset-risk-upper-bound` · theorem — Sparse constrained least-squares risk bound
- `thm-gaussian-sparse-sequence-minimax-lower-bound` · theorem — Gaussian sparse-sequence minimax lower bound
- `cor-matching-minimax-rate` · corollary — Matching minimax rate in a Gaussian orthogonal sequence model

### `decision-theoretic-upper-bounds-and-oracle-risk-examples` — Decision-Theoretic Upper Bounds — Examples

- `cex-collinear-design-coefficient-risk-unidentifiable` · counterexample — Collinear columns identify a fitted mean, not its coefficients
- `ex-orthogonal-sequence-sparse-regression` · example — Constrained least squares in a two-coordinate orthogonal sequence model
- `ex-training-risk-versus-test-risk` · example — Zero training residual and positive test error

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `decision-theoretic-upper-bounds-and-oracle-risk` requires `losses-risk-and-decision-rules`
- `decision-theoretic-upper-bounds-and-oracle-risk` requires `finite-sample-point-estimation-and-unbiased-optimality`
- `decision-theoretic-upper-bounds-and-oracle-risk` requires `concentration-inequalities-and-tail-bounds`
- `decision-theoretic-upper-bounds-and-oracle-risk` requires `minimax-lower-bounds-and-information-theoretic-methods`
- `splines-series-and-approximation-rates` requires `decision-theoretic-upper-bounds-and-oracle-risk`
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

# Step 4 batch reviewer — batch **13**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **13**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["13"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 13 | `ml02-linear-sparse-models` | A | inner-product-spaces-and-orthogonality, the-moore-penrose-pseudoinverse-and-regularised-least-squares, the-spectral-theorem-and-singular-value-decomposition, sparse-high-dimensional-estimation-and-covariance, gaussian-process-support-and-concentration |
| 13 | `ml02-linear-sparse-models-examples` | B | ml02-linear-sparse-models |

## Your content, in full

### `ml02-linear-sparse-models` — Linear prediction, shrinkage, and sparse regression

- `def-linear-regression-objectives` · definition — Fixed-design least-squares, ridge, lasso, group, and fused objectives
- `lem-gaussian-sample-covariance-operator-concentration` · lemma — Gaussian sample covariance converges in operator norm when dimension is little-o of sample size
- `lem-chi-square-degree-ratio` · lemma — A chi-square variable divided by a comparable dimension converges to one
- `lem-finite-gaussian-max-comparison` · lemma — Finite Sudakov–Fernique comparison for Gaussian maxima
- `lem-standard-gaussian-maximum-expectation-lower-bound` · lemma — The maximum of independent standard normals has expectation of order at least the square root of log dimension
- `cex-wainwright-conditional-covariance-eigenvalue-bound` · counterexample — A unit-diagonal covariance can have conditional covariance below the reciprocal global eigenvalue bound
- `fs-wainwright-lower-signed-support-threshold` · false-statement — The Cmax-only Wainwright lower signed-support threshold can predict failure when Lasso succeeds
- `thm-ols-and-ridge-solutions` · theorem — The full ordinary least-squares solution set and the unique ridge solution
- `lem-orthonormal-lasso-soft-thresholding` · lemma — Lasso on an orthonormal design is coordinatewise soft-thresholding
- `lem-lasso-active-set-stationarity` · lemma — The active coordinates of a signed Lasso optimizer satisfy restricted normal equations
- `fs-wainwright-signed-support-threshold-claim` · false-statement — The unrestricted Wainwright signed-support threshold claim fails without active-dimension control

### `ml02-linear-sparse-models-examples` — Linear prediction, shrinkage, and sparse regression — Examples

- `ex-correlated-predictors-and-shrinkage` · example — Duplicate predictors give a least-squares line, a ridge point, and a lasso segment
- `ex-orthonormal-lasso-soft-thresholding` · example — An orthonormal design makes the Lasso threshold visible coordinate by coordinate
- `ex-beta-min-below-lasso-threshold-loses-support` · example — A coefficient below the orthonormal Lasso threshold is set to zero

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `ml02-federated-optimization` requires `ml02-linear-sparse-models`
- `linear-contextual-bandits-and-linucb` requires `ml02-linear-sparse-models`
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

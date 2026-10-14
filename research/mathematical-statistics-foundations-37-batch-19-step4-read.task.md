# Step 4 batch reviewer — batch **19**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **19**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["19"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 19 | `sparse-high-dimensional-estimation-and-covariance` | A | concentration-inequalities-and-tail-bounds, symmetrization-rademacher-complexity-and-covering-entropy, minimax-lower-bounds-and-information-theoretic-methods, the-spectral-theorem-and-singular-value-decomposition, euclidean-surface-measure-divergence-and-green-identities |
| 19 | `sparse-high-dimensional-estimation-and-covariance-examples` | B | sparse-high-dimensional-estimation-and-covariance |

## Your content, in full

### `sparse-high-dimensional-estimation-and-covariance` — Sparse Estimation and Covariance

- `def-gaussian-sequence-sparse-means-model` · definition — Gaussian sequence model with sparse means
- `def-subgaussian-fixed-design-regression-model` · definition — Fixed-design regression with sub-Gaussian noise
- `def-fixed-design-incoherence-condition` · definition — Fixed-design incoherence condition
- `def-restricted-eigenvalue-condition` · definition — Restricted eigenvalue condition on the Lasso cone
- `def-lasso-estimator` · definition — Lasso estimator for fixed design
- `lem-lasso-objective-has-minimizer` · lemma — The Lasso objective has a nonempty compact convex minimizer set
- `thm-lasso-basic-inequality` · theorem — Lasso basic inequality and cone constraint
- `lem-incoherence-implies-restricted-eigenvalue` · lemma — The stated incoherence bound implies the Lasso restricted eigenvalue condition
- `lem-fixed-design-subgaussian-score-concentration` · lemma — Sub-Gaussian score bound under fixed-design incoherence
- `thm-lasso-prediction-and-l1-error-under-incoherence` · theorem — Lasso prediction and coefficient bounds under incoherence
- `def-sample-covariance-and-operator-norm-loss` · definition — Sample covariance estimators and squared operator loss
- `def-weak-lq-sparse-covariance-class` · definition — Weak-lq covariance class with directional sub-Gaussian tails
- `def-minimax-squared-operator-risk` · definition — Minimax squared operator risk
- `def-soft-thresholding-function` · definition — Soft-thresholding map
- `lem-products-of-subgaussian-coordinates-are-subexponential` · lemma — Products of sub-Gaussian coordinates are sub-exponential
- `lem-epsilon-net-controls-symmetric-operator-norm` · lemma — A sphere net controls the operator norm of a symmetric matrix
- `lem-symmetric-matrix-operator-norm-rayleigh` · lemma — A symmetric matrix operator norm is its largest absolute Rayleigh quotient
- `thm-centered-subgaussian-sample-covariance-bound` · theorem — Dense sample covariance concentration for sub-Gaussian vectors
- `alg-entrywise-thresholded-sample-covariance` · algorithm — Entrywise-thresholded sample covariance
- `lem-weak-lq-thresholded-covariance-row-sum` · lemma — Weak-lq thresholding error from an entrywise deviation event
- `lem-directional-tail-implies-subgaussian-mgf` · lemma — A Gaussian tail bound implies a sub-Gaussian MGF bound
- `lem-directional-tail-products-are-subexponential` · lemma — Products of variables with Gaussian tails are sub-exponential
- `thm-weak-lq-sample-covariance-entrywise-deviation` · theorem — Entrywise deviation for sample-centered covariance under directional Gaussian tails
- `thm-thresholded-sparse-covariance-high-probability-bound` · theorem — High-probability operator error for thresholded weak-lq covariance
- `cex-thresholded-sparse-covariance-rate-unbounded-at-superexponential-dimension` · counterexample — The stated sparse-covariance minimax rate is unbounded for super-exponential dimension
- `lem-gaussian-sparse-covariance-mixture-lower-bound` · lemma — Gaussian mixture lower bound for weakly sparse covariance
- `lem-weak-lq-thresholded-covariance-expected-risk` · lemma — Expected squared operator error of thresholded sparse covariance
- `lem-gaussian-kullback-leibler-covariance-formula` · lemma — Kullback–Leibler divergence between nondegenerate centered Gaussian laws
- `lem-diagonal-covariance-minimax-lower-bound` · lemma — Diagonal covariance lower bound with bounded-risk saturation
- `thm-thresholded-sparse-covariance-minimax-rate` · theorem — Capped thresholded minimax rate for weak-lq sparse covariance

### `sparse-high-dimensional-estimation-and-covariance-examples` — Sparse Estimation and Covariance — Examples

- `ex-orthogonal-design-lasso-is-soft-thresholding` · example — The orthogonal-design Lasso is coordinatewise soft thresholding
- `cex-collinear-design-fails-re-and-incoherence` · counterexample — A collinear design defeats a sparsity-only coefficient guarantee
- `ex-sample-covariance-rank-deficiency-when-p-exceeds-n` · example — Sample covariance is singular when dimension exceeds sample size

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `sparse-high-dimensional-estimation-and-covariance` requires `concentration-inequalities-and-tail-bounds`
- `sparse-high-dimensional-estimation-and-covariance` requires `symmetrization-rademacher-complexity-and-covering-entropy`
- `sparse-high-dimensional-estimation-and-covariance` requires `minimax-lower-bounds-and-information-theoretic-methods`
- `robust-covariance-and-high-dimensional-stability` requires `sparse-high-dimensional-estimation-and-covariance`
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

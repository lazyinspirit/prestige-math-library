# Step 4 batch reviewer — batch **34**, run `mathematical-statistics-foundations-37`

You are the only reviewer for batch **34**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["34"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 34 | `robust-covariance-and-high-dimensional-stability` | A | minimax-lower-bounds-and-information-theoretic-methods, contamination-models-and-robust-risk, robust-mean-estimation-under-heavy-tails, the-spectral-theorem-and-singular-value-decomposition, the-identity-theorem-and-the-open-mapping-theorem, euclidean-surface-measure-divergence-and-green-identities, matrix-norms-condition-numbers-and-numerical-stability, sparse-high-dimensional-estimation-and-covariance |
| 34 | `robust-covariance-and-high-dimensional-stability-examples` | B | robust-covariance-and-high-dimensional-stability |

## Your content, in full

### `robust-covariance-and-high-dimensional-stability` — Robust Covariance and Sparse Robust Estimation

- `def-covariance-matrix-of-a-random-vector` · definition — Covariance matrix of a finite-dimensional random vector
- `lem-finite-dimensional-golden-thompson-trace-inequality` · lemma — Finite-dimensional Golden–Thompson trace inequality
- `lem-matrix-depth-gaussian-scale-constant-exists-uniquely` · lemma — The Gaussian matrix-depth scale constant exists uniquely
- `lem-projection-slab-uniform-deviation` · lemma — Uniform deviation for squared-projection slabs
- `def-bounded-spectrum-covariance-class` · definition — Bounded-spectrum covariance class
- `def-matrix-variance-of-a-random-vector` · definition — Matrix variance for covariance estimation
- `lem-bounded-independent-matrix-bernstein-via-trace-exponential` · lemma — Bounded independent matrix Bernstein bound from the trace exponential
- `lem-finite-second-moment-covariance-matrix-is-well-defined` · lemma — A finite second moment defines a positive semidefinite covariance matrix
- `alg-adaptive-truncated-covariance-estimator` · algorithm — Adaptive truncated covariance estimator
- `def-block-sparse-covariance-class` · definition — Single-block sparse covariance class and restricted directions
- `def-huber-covariance-model` · definition — Gaussian Huber contamination model for covariance estimation
- `lem-covariance-median-pilot-exact-block-budget` · lemma — Exact block budget for the covariance geometric-median pilot
- `lem-matrix-variance-intrinsic-dimension-at-least-one` · lemma — The covariance matrix variance ratio is at least one
- `lem-oracle-truncated-covariance-and-vector-concentration` · lemma — Oracle-truncated covariance and vector concentration under finite matrix variance
- `def-matrix-depth-covariance-estimator` · definition — Matrix depth and covariance estimators
- `lem-adaptive-truncated-covariance-estimator-is-total` · lemma — The adaptive truncated covariance procedure is well-defined on its declared domain
- `lem-fixed-scale-truncated-covariance-deviation` · lemma — Fixed-scale matrix-truncated covariance deviation under finite matrix variance
- `lem-huber-covariance-mixture-is-a-probability-measure` · lemma — The Gaussian Huber covariance mixture is a probability law
- `lem-adaptive-covariance-lepski-scale-reduction` · lemma — Lepski scale selection transfers fixed-scale covariance bounds
- `lem-matrix-depth-maximizer-exists-on-compact-classes` · lemma — A matrix-depth maximizer exists on the bounded covariance classes
- `lem-scaled-gaussian-covariance-has-depth-at-least-half` · lemma — The scaled Gaussian covariance has matrix depth at least one half
- `lem-huber-covariance-ambient-action-tail-lower-bound` · lemma — Huber covariance modulus lower bound for unrestricted matrix-valued actions
- `lem-huber-covariance-contamination-modulus-lower-bound` · lemma — The Huber covariance contamination modulus has a quadratic lower bound
- `lem-huber-matrix-depth-estimator-operator-error` · lemma — Operator error bound for the Gaussian Huber matrix-depth estimator
- `lem-measurable-matrix-depth-maximizer-selection` · lemma — Measurable selection of a matrix-depth maximizer
- `thm-heavy-tailed-covariance-bound` · theorem — Adaptive truncated covariance has a finite matrix-variance operator bound
- `lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound` · lemma — Clean block-sparse Gaussian covariance has squared operator lower rate s log(ep/s) over n
- `lem-clean-dense-gaussian-covariance-minimax-lower-bound` · lemma — Clean Gaussian covariance has a capped squared operator lower rate
- `thm-huber-covariance-upper-and-lower-risk` · theorem — Dense Gaussian Huber covariance: high-probability upper and capped lower bounds
- `thm-huber-sparse-covariance-upper-and-lower-risk` · theorem — Single-block sparse Gaussian Huber covariance: high-probability upper and low-ratio lower bounds

### `robust-covariance-and-high-dimensional-stability-examples` — Robust Covariance and Sparse Robust Estimation — Examples

- `cex-matrix-variance-does-not-dominate-trace-covariance-product` · counterexample — Matrix variance need not dominate trace covariance times operator norm
- `ex-clean-heavy-tailed-finite-matrix-variance` · example — A polynomial-tail law with finite matrix variance
- `cex-bounded-spectrum-covariance-lower-rate-must-be-capped` · counterexample — A bounded covariance class forces a capped lower rate
- `cex-intrinsic-variance-alone-does-not-control-covariance-pilot` · counterexample — Intrinsic matrix variance alone does not control pilot-centered covariance truncation
- `ex-block-sparse-huber-covariance-model` · example — A covariance matrix with one correlated block
- `ex-dense-huber-covariance-model` · example — Dense Gaussian Huber covariance model

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `robust-covariance-and-high-dimensional-stability` requires `minimax-lower-bounds-and-information-theoretic-methods`
- `robust-covariance-and-high-dimensional-stability` requires `contamination-models-and-robust-risk`
- `robust-covariance-and-high-dimensional-stability` requires `robust-mean-estimation-under-heavy-tails`
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

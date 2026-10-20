# Step 4 batch reviewer — batch **22**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **22**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["22"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 22 | `ml02-dimension-reduction` | A | countability-and-uncountability, hilbert-space-geometry-and-riesz-representation, inner-product-spaces-and-orthogonality, matrix-norms-condition-numbers-and-numerical-stability, the-spectral-theorem-and-singular-value-decomposition |
| 22 | `ml02-dimension-reduction-examples` | B | ml02-dimension-reduction |

## Your content, in full

### `ml02-dimension-reduction` — PCA, kernel PCA, MDS, and manifold embeddings

- `def-finite-centering-matrix` · definition — Finite centering matrices and centered data
- `lem-ky-fan-trace-maximization` · lemma — The maximum trace over q-dimensional orthonormal frames is the sum of the top q eigenvalues
- `lem-equal-gram-configurations-are-isometric` · lemma — Finite configurations with equal Gram matrices have isometric linear spans
- `alg-deterministic-neighbor-selection` · algorithm — Deterministic finite nearest-neighbor lists and graph symmetrizations
- `thm-finite-centering-matrix-is-orthogonal-projector` · theorem — The finite centering matrix is the orthogonal projection onto the zero-sum subspace
- `def-rank-q-principal-component-analysis` · definition — Rank-q principal component analysis by Frobenius reconstruction error
- `alg-kernel-principal-component-analysis` · algorithm — Kernel principal component analysis for a finite positive-semidefinite Gram matrix
- `alg-classical-multidimensional-scaling` · algorithm — Classical multidimensional scaling from a finite dissimilarity matrix
- `def-lle-local-reconstruction-weights` · definition — Minimum-norm affine reconstruction weights for a finite LLE neighborhood
- `thm-pca-frobenius-optimality` · theorem — The top right singular subspace minimizes rank-q PCA Frobenius reconstruction error
- `thm-centered-psd-kernel-gram-matrix-is-psd` · theorem — Double-centering a finite positive-semidefinite Gram matrix preserves positive semidefiniteness
- `thm-classical-mds-recovers-euclidean-distances` · theorem — Double-centering Euclidean squared distances recovers their centered Gram matrix
- `thm-minimum-norm-lle-weights-exist-uniquely` · theorem — Finite LLE affine least-squares weights have a unique minimum-norm minimizer
- `alg-isomap` · algorithm — Finite ISOMAP with deterministic neighborhoods and connected-graph shortest paths
- `def-metric-stress-mds` · definition — Metric distance-stress multidimensional scaling
- `alg-locally-linear-embedding` · algorithm — Finite locally linear embedding with minimum-norm weights and a simple constant kernel
- `thm-lle-trace-minimizers` · theorem — Under the simple constant-kernel condition, LLE trace minimizers are bottom positive eigenvectors

### `ml02-dimension-reduction-examples` — PCA, kernel PCA, MDS, and manifold embeddings — Examples

- `ex-rank-q-pca-exact-reconstruction` · example — A rank-one centered data matrix is reconstructed exactly by rank-one PCA
- `ex-non-euclidean-dissimilarity-has-negative-mds-eigenvalue` · example — A non-Euclidean three-point dissimilarity produces a negative MDS eigenvalue
- `ex-disconnected-knn-graph-blocks-isomap-distances` · example — A one-nearest-neighbor graph can disconnect finite ISOMAP
- `ex-singular-local-lle-covariance` · example — A singular local LLE covariance still has a unique minimum-norm weight vector
- `ex-connected-lle-graph-need-not-have-simple-zero` · example — A connected LLE neighbor graph can have more than one fixed vector
- `ex-square-loop-mds-isomap-lle-differ` · example — Classical MDS, ISOMAP, and LLE give different embeddings of a four-point square
- `ex-metric-stress-objective-nonconvex` · example — The metric stress objective is not convex even for two points

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
No dependency edge crosses this batch boundary.
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

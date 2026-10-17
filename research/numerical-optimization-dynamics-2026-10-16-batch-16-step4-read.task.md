# Step 4 batch reviewer — batch **16**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **16**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["16"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 16 | `sparse-direct-elimination-and-ordering` | A | direct-matrix-factorisations-lu-cholesky-and-qr, finite-precision-direct-factorizations, sparse-matrix-models-and-kernel-costs |
| 16 | `sparse-direct-elimination-and-ordering-examples` | B | sparse-direct-elimination-and-ordering |

## Your content, in full

### `sparse-direct-elimination-and-ordering` — Sparse direct elimination and ordering

- `alg-threshold-partial-pivot-sparse-lu` · algorithm — Threshold partial-pivot sparse LU with explicit fill and failure statuses
- `def-hermitian-structural-graph-adapter` · definition — Undirected structural graph of a Hermitian matrix
- `alg-nested-dissection-ordering-on-regular-grids` · algorithm — Recursive coordinate-separator ordering for two- and three-dimensional grids
- `lem-filled-edge-path-characterisation` · lemma — Filled edges are witnessed by paths through earlier eliminated vertices
- `thm-threshold-sparse-lu-residual-with-growth` · theorem — Real threshold sparse LU has a backward residual bound with actual growth
- `def-elimination-tree-and-column-reach` · definition — Elimination-tree column patterns and reach
- `lem-nested-dissection-fronts-are-boundary-limited` · lemma — Nested-dissection grid fronts are bounded by a box separator and its exterior boundary
- `lem-hermitian-schur-support-is-contained-in-structural-fill` · lemma — Hermitian Schur-complement support stays inside the symmetric filled graph
- `alg-symmetric-indefinite-block-ldl-star` · algorithm — Sparse symmetric-indefinite block LDL* with threshold tests and failure status
- `lem-elimination-tree-reach-contains-each-filled-neighbor` · lemma — Every later filled neighbor lies on the elimination-tree parent path
- `alg-sparse-cholesky-with-invalid-pivot-status` · algorithm — Ordered sparse Cholesky with explicit pivot and range statuses
- `thm-block-ldl-star-residual-with-actual-growth` · theorem — Block LDL* residual errors propagate with actual block growth
- `thm-sparse-cholesky-structural-pattern-without-cancellation` · theorem — Ordered sparse Cholesky has the symbolic filled pattern when no cancellation occurs
- `alg-multifrontal-cholesky-and-sparse-triangular-solves` · algorithm — Scalar multifrontal Cholesky and solves on the elimination forest
- `thm-multifrontal-elimination-equivalence-and-sparse-costs` · theorem — Scalar multifrontal elimination is equivalent to sparse Cholesky with column-count costs
- `thm-nested-dissection-grid-work-and-storage-bounds` · theorem — Nested dissection gives the stated work and factor-storage bounds on regular grids
- `alg-certified-hermitian-one-and-two-by-two-ldl-kernel` · algorithm — Certified real-component Hermitian one-by-one and two-by-two LDL* kernels
- `lem-hermitian-block-ldl-kernel-roundoff-and-reconstruction-residual` · lemma — Hermitian block LDL* kernels have explicit roundoff and actual-factor residual bounds

### `sparse-direct-elimination-and-ordering-examples` — Sparse direct elimination and ordering — Examples

- `ex-star-orderings-produce-different-sparse-fill` · example — A star graph has no fill in leaf-first order and a leaf clique in center-first order
- `ex-nonsingular-indefinite-requires-two-by-two-pivot` · example — A nonsingular indefinite matrix with no admissible one-by-one diagonal pivot
- `ex-two-dimensional-poisson-nested-dissection-cost` · example — The two-dimensional five-point Poisson matrix under nested dissection

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `sparse-direct-elimination-and-ordering` requires `finite-precision-direct-factorizations`
- `sparse-direct-elimination-and-ordering` requires `sparse-matrix-models-and-kernel-costs`
- `verified-linear-systems-and-spectral-enclosures` requires `sparse-direct-elimination-and-ordering`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

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

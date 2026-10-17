# Step 4 batch reviewer — batch **2**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **2**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["2"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 2 | `sparse-matrix-models-and-kernel-costs` | A | direct-matrix-factorisations-lu-cholesky-and-qr, matrix-norms-condition-numbers-and-numerical-stability, krylov-subspaces-arnoldi-and-gmres |
| 2 | `sparse-matrix-models-and-kernel-costs-examples` | B | sparse-matrix-models-and-kernel-costs |

## Your content, in full

### `sparse-matrix-models-and-kernel-costs` — Sparse matrix models and kernel costs

- `def-csr-matrix-with-stored-entry-semantics` · definition — Compressed sparse row matrices with stored-entry semantics
- `def-symmetric-structural-elimination-graph-and-ordering` · definition — Structural graphs and ordered symmetric elimination
- `alg-csr-matrix-vector-product-with-validation` · algorithm — Validated compressed sparse row matrix-vector product
- `thm-filled-graph-contains-schur-complement-support` · theorem — The filled graph contains every off-diagonal Schur-complement nonzero
- `thm-csr-matvec-algorithm-terminates-with-status` · theorem — Validated CSR matrix-vector multiplication terminates with a status
- `thm-csr-matvec-returns-the-represented-matrix-product` · theorem — CSR matrix-vector multiplication returns the represented product
- `thm-csr-storage-and-exact-matvec-cost` · theorem — CSR storage and exact matrix-vector operation counts

### `sparse-matrix-models-and-kernel-costs-examples` — Sparse matrix models and kernel costs — Examples

- `ex-csr-tridiagonal-matrix` · example — A four-row tridiagonal matrix in CSR form
- `ex-ordered-elimination-creates-fill` · example — Eliminating the middle vertex creates structural fill
- `ex-numerical-cancellation-within-filled-graph` · example — Numerical cancellation can zero an entry while the filled graph retains its edge
- `ex-csr-matvec-operation-count` · example — An exact CSR product and its stored-entry count
- `ex-csr-duplicates-and-explicit-zero-entry-count` · example — Duplicate columns and explicit zeros count as stored entries

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `finite-generator-master-equations-and-uniformization` requires `sparse-matrix-models-and-kernel-costs`
- `certified-stationary-distribution-and-hitting-statistic-numerics` requires `sparse-matrix-models-and-kernel-costs`
- `sparse-direct-elimination-and-ordering` requires `sparse-matrix-models-and-kernel-costs`
- `stationary-iterations-and-relaxation` requires `sparse-matrix-models-and-kernel-costs`
- `krylov-methods-and-lanczos-convergence` requires `sparse-matrix-models-and-kernel-costs`
- `preconditioner-algorithms-and-residual-metrics` requires `sparse-matrix-models-and-kernel-costs`
- `revised-simplex-linear-programming-and-certificates` requires `sparse-matrix-models-and-kernel-costs`
- `operator-splitting-admm-and-primal-dual-methods` requires `sparse-matrix-models-and-kernel-costs`
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

# Step 4 batch reviewer — batch **10**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **10**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["10"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 10 | `tensor-train-compression-and-truncation-error` | A | computed-singular-values-and-rank-revealing-factorizations |
| 10 | `tensor-train-compression-and-truncation-error-examples` | B | tensor-train-compression-and-truncation-error |

## Your content, in full

### `tensor-train-compression-and-truncation-error` — Tensor train compression and truncation error

- `def-finite-tensor-arrays-and-frobenius-inner-product` · definition — Finite tensor arrays and the Frobenius inner product
- `lem-tensor-unfoldings-are-frobenius-isometries` · lemma — Tensor unfoldings preserve the Frobenius inner product
- `def-tucker-multilinear-rank-and-mode-products` · definition — Tucker format, multilinear rank, and mode products
- `def-tensor-train-cores-bond-ranks-and-canonical-gauges` · definition — Tensor train cores, bond ranks, and canonical gauges
- `def-canonical-polyadic-rank` · definition — Canonical polyadic rank
- `thm-best-rank-k-frobenius-matrix-approximation` · theorem — Best rank-k matrix approximation in Frobenius norm
- `lem-full-column-rank-matrix-least-squares-solution` · lemma — Full-column-rank matrix least squares has a unique minimizer
- `alg-sequential-tensor-train-svd` · algorithm — Sequential tensor-train SVD
- `alg-tensor-train-rounding` · algorithm — Tensor-train rounding
- `thm-tensor-train-storage-and-inner-product-cost` · theorem — Tensor-train storage and inner-product costs
- `alg-hosvd-truncation` · algorithm — Higher-order SVD truncation
- `alg-budgeted-cp-alternating-least-squares` · algorithm — Budgeted CP alternating least squares
- `thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error` · theorem — Exact TT ranks and root-sum-square truncation error
- `thm-hosvd-quasioptimal-multilinear-rank-error` · theorem — HOSVD quasioptimality for multilinear rank
- `thm-exact-cp-als-block-updates-are-monotone` · theorem — Exact CP-ALS block updates do not increase the objective

### `tensor-train-compression-and-truncation-error-examples` — Tensor train compression and truncation error — Examples

- `cex-best-rank-two-cp-approximation-may-not-exist` · counterexample — A best rank-two CP approximation need not exist
- `ex-separable-grid-tensor-has-tt-rank-one` · example — A separable grid tensor has TT rank one
- `ex-two-tt-truncations-realise-root-sum-squares-bound` · example — Two TT truncations realize the root-sum-square bound
- `ex-diagonal-tensor-has-large-minimal-tt-ranks` · example — A diagonal tensor has large minimal TT ranks

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hierarchical-low-rank-matrices-and-error-propagation` requires `tensor-train-compression-and-truncation-error`
- `alternating-tensor-optimization-and-effective-eigenproblems` requires `tensor-train-compression-and-truncation-error`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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

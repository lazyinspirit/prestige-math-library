# Step 4 batch reviewer — batch **16**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **16**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["16"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 16 | `hierarchical-low-rank-matrices-and-error-propagation` | A | randomized-low-rank-approximation, sparse-direct-elimination-and-ordering, tensor-train-compression-and-truncation-error |
| 16 | `hierarchical-low-rank-matrices-and-error-propagation-examples` | B | hierarchical-low-rank-matrices-and-error-propagation |

## Your content, in full

### `hierarchical-low-rank-matrices-and-error-propagation` — Hierarchical low rank matrices and error propagation

- `def-hlr-cluster-trees-and-geometric-admissibility` · definition — Finite cluster trees and geometric admissibility
- `lem-hlr-balanced-cluster-tree-size-and-depth` · lemma — Size and depth of a balanced cluster tree
- `lem-hlr-block-cluster-leaves-partition-index-pairs` · lemma — Block-cluster leaves partition the index-pair set
- `alg-hlr-core-svd-recompression-with-tolerance` · algorithm — Core-SVD recompression with rank and error tolerances
- `def-hlr-and-h2-block-matrix-representations` · definition — H-matrix block representation
- `thm-hlr-core-svd-recompression-is-best-rank-tolerance` · theorem — Core-SVD recompression is best at the declared Frobenius tolerance
- `def-h2-nested-cluster-bases-and-interaction-lists` · definition — Nested H² cluster bases and interaction lists
- `alg-hlr-block-matvec` · algorithm — H-matrix block matrix-vector multiplication
- `alg-hlr-bottom-up-recompression` · algorithm — Bottom-up low-rank recompression of block contributions
- `thm-hlr-separated-cauchy-block-rank-bound` · theorem — A separated Cauchy block has a geometric rank bound
- `alg-hlr-compress-exact-lu-factors` · algorithm — Compress exact block LU factors with local tolerances
- `lem-hlr-bottom-up-recompression-error-bound` · lemma — Bottom-up factor-sum recompression has the reported rank and Frobenius error bound
- `alg-hlr-block-addition` · algorithm — Tolerance-controlled H-matrix block addition
- `alg-hlr-block-product` · algorithm — Tolerance-controlled H-matrix block product
- `thm-hlr-block-matvec-correct` · theorem — H-matrix block multiplication returns the represented matrix action
- `alg-h2-matrix-vector-multiplication` · algorithm — Nested-basis H² matrix-vector multiplication
- `thm-hlr-blockwise-error-propagation` · theorem — Blockwise Frobenius errors propagate by disjoint block sums
- `thm-hlr-storage-and-matvec-complexity` · theorem — Balanced H and H² storage and matvec complexity
- `thm-h2-matrix-vector-multiplication-correct` · theorem — Nested-basis H² multiplication is exact for its represented matrix
- `thm-hlr-approximate-factorization-residual-and-inverse-error` · theorem — Compressed block LU factors have a residual and inverse certificate

### `hierarchical-low-rank-matrices-and-error-propagation-examples` — Hierarchical low rank matrices and error propagation — Examples

- `ex-hlr-nearfield-block-requires-full-rank` · example — A nearfield identity block requires full rank for subunit spectral error
- `ex-hlr-accumulated-truncation-can-destroy-positive-definiteness` · example — Two accepted local truncations can destroy positive definiteness after accumulation
- `ex-hlr-separated-cauchy-block` · example — A rank-one approximation of a separated Cauchy block

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hierarchical-low-rank-matrices-and-error-propagation` requires `randomized-low-rank-approximation`
- `hierarchical-low-rank-matrices-and-error-propagation` requires `tensor-train-compression-and-truncation-error`
- `fast-multipole-expansions-and-error` requires `hierarchical-low-rank-matrices-and-error-propagation`
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

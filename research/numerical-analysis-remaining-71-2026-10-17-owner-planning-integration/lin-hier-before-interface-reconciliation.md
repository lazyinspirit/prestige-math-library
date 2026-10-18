## LIN-HIER — Hierarchical low rank matrices and error propagation

A: `hierarchical-low-rank-matrices-and-error-propagation`. B: `hierarchical-low-rank-matrices-and-error-propagation-examples`.

### Scope

[
  "Define finite cluster/block trees, geometric admissibility, H block ranks and nested H2 bases; specify dense near blocks and compressed far blocks.",
  "Define bottom-up low-rank recompression and block matvec/add/product; prove error bounds by block norm sums and orthogonal projection. Storage/work O(k n log n), matvec O(k n log n) for declared balanced bounded-partition H tree; O(k n) H2 requires nested bases and bounded interaction lists.",
  "Define approximate block factorization with explicit local truncation tolerances; prove global residual and inverse-error certificate when ||A^-1|| ||E||<1. Low numerical rank is an assumption or separately kernel-proved theorem."
]

### Proof construction

Induct tree representation, bound each omitted block/truncation and sum overlap; use Neumann-series perturbation. Derive rank estimates for one separated analytic kernel by convergent Taylor expansion.

### Examples

[
  "1D separated Cauchy blocks",
  "Near-field diagonal blocks left dense",
  "Accumulated truncation can spoil definiteness"
]

### Prerequisite interfaces (namespace-normalized)

Same-frontier pair edges (pair key → A-page; edges follow the pair DAG):
- `NA-08` → `randomized-low-rank-approximation` (numerical-analysis; proposed same-frontier supplier, not a current library item).
- `LIN-SPARSE` → `sparse-direct-elimination-and-ordering` (numerical-analysis; proposed same-frontier supplier, not a current library item).

Existing library page context recorded by `requires` (page placement is not itself a proof premise):
- `the-spectral-theorem-and-singular-value-decomposition` → `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.

Exact item bodies inspected for this pair are listed in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`; those interfaces are not widened by the surrounding page title.
Named items: `thm-eckart-young-best-rank-k-approximation`.

### Local mathematical prerequisite ownership

All missing established intermediates named in the repaired contract, and their local well-definedness/proof route, are enumerated under **LIN-HIER** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner pair is `LIN-HIER` unless that audit names an earlier pair supplier. These are future proof items; the inventory records design ownership, not authored proofs or a closed prerequisite graph.

### Repaired contract pointer

See **LIN-HIER** in `numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md` for the precise procedure inputs/outputs/branches, well-definedness argument, local proof chain, and residual holds.

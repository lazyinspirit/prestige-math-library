---
page: sparse-direct-elimination-and-ordering
title: Sparse direct elimination and ordering
status: published
items:
  - alg-threshold-partial-pivot-sparse-lu
  - def-hermitian-structural-graph-adapter
  - alg-nested-dissection-ordering-on-regular-grids
  - lem-filled-edge-path-characterisation
  - thm-threshold-sparse-lu-residual-with-growth
  - def-elimination-tree-and-column-reach
  - lem-nested-dissection-fronts-are-boundary-limited
  - lem-hermitian-schur-support-is-contained-in-structural-fill
  - alg-symmetric-indefinite-block-ldl-star
  - lem-elimination-tree-reach-contains-each-filled-neighbor
  - alg-sparse-cholesky-with-invalid-pivot-status
  - thm-block-ldl-star-residual-with-actual-growth
  - thm-sparse-cholesky-structural-pattern-without-cancellation
  - alg-multifrontal-cholesky-and-sparse-triangular-solves
  - thm-multifrontal-elimination-equivalence-and-sparse-costs
  - thm-nested-dissection-grid-work-and-storage-bounds
  - alg-certified-hermitian-one-and-two-by-two-ldl-kernel
  - lem-hermitian-block-ldl-kernel-roundoff-and-reconstruction-residual
examples: []
---

This page builds on the structural graph, ordering, filled graph, and elimination-forest interfaces owned by the sparse-matrix-models-and-kernel-costs page. It defines the Cholesky column patterns and elimination-tree reach needed locally, proves the path characterization used to confine nested-dissection fronts, and derives work and factor-storage bounds for the two- and three-dimensional nearest-neighbor grids. The stated grid bounds do not extend to arbitrary graphs.

Threshold LU and symmetric-indefinite block LDL* carry explicit pivot, fill, and failure rules. The real threshold-LU residual bound retains the actual active-matrix growth. The block LDL* result retains its general conditional local-update statement and now instantiates it with a proved complex real-component kernel, actual amplification and block inverse norms. No universal small-growth guarantee is asserted.

The Hermitian block LDL* branch includes a certified one-by-one/two-by-two real-component kernel, explicit normalized-determinant conditioning and pivot-inconclusive status, and proved local unit-roundoff bounds. Actual stored factors use the complete reconstruction residual, including multiplier coupling errors, with their actual transformation growth. The exact-multiplier conditional bound remains available separately.

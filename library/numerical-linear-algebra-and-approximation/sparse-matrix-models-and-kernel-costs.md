---
page: sparse-matrix-models-and-kernel-costs
title: "Sparse matrix models and kernel costs"
status: published
items:
  - def-csr-matrix-with-stored-entry-semantics
  - def-symmetric-structural-elimination-graph-and-ordering
  - alg-csr-matrix-vector-product-with-validation
  - thm-filled-graph-contains-schur-complement-support
  - thm-csr-matvec-algorithm-terminates-with-status
  - thm-csr-matvec-returns-the-represented-matrix-product
  - thm-csr-storage-and-exact-matvec-cost
examples: []
---

This page defines a zero-based compressed sparse row (CSR) record, including
empty rows, repeated column indices, and explicitly stored zeros. The stored
entry count $s$ is kept distinct from the mathematical nonzero count
$\operatorname{nnz}(A)$ until the representation is canonical. It proves the
validated exact-arithmetic matrix-vector routine's termination, correctness,
storage, and operation counts; it makes no finite-precision or convergence
claim.

For sparse direct elimination, the page defines the symmetric structural graph
and its ordered clique updates. The Schur-complement argument proves that the
filled graph contains each numerical Schur complement's off-diagonal support,
while allowing cancellations. The published matrix-free interface
[[def-matrix-free-access-model-for-krylov-methods]]
and triangular-substitution result
[[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]
remain at their canonical Krylov and direct-factorization pages; neither is used
as a CSR cost or general fill bound.

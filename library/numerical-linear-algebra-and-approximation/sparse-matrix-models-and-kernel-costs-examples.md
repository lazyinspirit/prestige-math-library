---
page: sparse-matrix-models-and-kernel-costs-examples
title: "Sparse matrix models and kernel costs — Examples"
status: published
items: []
examples:
  - ex-csr-tridiagonal-matrix
  - ex-csr-matvec-operation-count
  - ex-ordered-elimination-creates-fill
  - ex-numerical-cancellation-within-filled-graph
  - ex-csr-duplicates-and-explicit-zero-entry-count
---

The examples construct a four-row tridiagonal matrix in CSR form, evaluate one
matrix-vector product and count its stored entries, and work through an ordered
elimination that creates a fill edge. Two additional checks show how duplicate
entries and explicit zeros affect $s$, and how numerical cancellation can leave
an edge in the symbolic pattern after the corresponding Schur-complement entry
has become zero.

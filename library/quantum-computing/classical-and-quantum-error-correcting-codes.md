---
page: classical-and-quantum-error-correcting-codes
title: Classical and Quantum Error-Correcting Codes
status: draft
requires:
  - algebraic-extensions-degree-and-finite-fields
  - congruences-and-the-chinese-remainder-theorem
  - hilbert-space-geometry-and-riesz-representation
  - inner-product-spaces-and-orthogonality
  - linear-independence-bases-and-dimension
  - linear-maps-rank-nullity-and-quotient-spaces
  - matrices-and-the-matrix-of-a-linear-map
  - registers-tensor-products-and-partial-trace
  - vector-spaces-and-subspaces
items:
  - thm-qc-full-column-rank-matrix-image-has-dimension
  - lem-qc-linear-isometry-preserves-inner-products
  - def-qc-classical-linear-code-over-finite-field
  - def-qc-hamming-weight-distance-and-linear-code-distance
  - def-qc-dual-of-a-finite-field-linear-code
  - def-qc-quantum-code-isometry-and-code-projector
  - thm-qc-hamming-distance-is-a-metric-and-code-distance
  - thm-qc-dual-code-dimension-and-double-dual
  - thm-qc-isometric-encoding-projector
  - lem-qc-classical-code-distance-disjoint-error-balls
  - def-qc-generator-and-parity-check-matrices
  - def-qc-local-operator-support-and-weight
  - thm-qc-generator-and-parity-check-matrix-existence
  - lem-qc-local-operator-support-is-permutation-invariant
  - def-qc-quantum-code-distance-and-error-detection
  - lem-qc-detectability-is-linear-and-encoding-invariant
  - def-qc-classical-error-syndrome
  - lem-qc-classical-syndrome-is-error-only
  - lem-qc-equal-syndrome-errors-differ-by-a-codeword
  - thm-qc-quantum-distance-detects-low-weight-errors
  - thm-qc-classical-distance-correction-and-erasure-radius
examples:
  - ex-qc-binary-repetition-code-syndrome-table
---

This page develops classical linear codes over an explicitly named finite field and finite-register quantum code subspaces. Classical vectors are columns; a generator has shape $n\times k$, a parity-check matrix has shape $(n-k)\times n$, and the syndrome is $Hr$. The binary repetition code is used as a worked case, while general finite-field statements are proved locally.

Quantum codes are isometric encodings into a fixed ordered register tensor product. The inner product uses the root library's first-argument-linear convention. Operator support is defined relative to the declared register factorization; the exact QC02 tensor and wire-permutation suppliers remain required for the support-invariance proof. Distance here gives error detection only. Recovery-map criteria are deferred to the next page.

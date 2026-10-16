---
page: registers-tensor-products-and-partial-trace
title: "Registers, Tensor Products, and Partial Trace"
status: draft
items:
  - def-qc-register-and-computational-basis
  - lem-qc-trace-pairing-nondegenerate
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
  - thm-qc-computational-basis-orthonormal
  - def-qc-partial-trace
  - def-qc-tensor-map
  - lem-qc-tensor-product-basis-and-dimension
  - thm-qc-bitstring-index-is-bijection
  - thm-qc-partial-trace-characterization-and-basis-independence
  - thm-qc-tensor-map-composition-and-adjoint
  - thm-qc-wire-permutation-is-unitary
  - thm-qc-partial-trace-positive-and-trace-preserving
examples: []
requires:
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - hilbert-space-geometry-and-riesz-representation
  - inner-product-spaces-and-orthogonality
  - linear-independence-bases-and-dimension
  - linear-maps-rank-nullity-and-quotient-spaces
  - matrices-and-the-matrix-of-a-linear-map
  - tensor-products-of-modules
  - the-spectral-theorem-and-singular-value-decomposition
---

This page defines finite-dimensional complex registers, fixes the ordered
computational basis, and proves the big-endian encoding convention. Tensor
products retain the order of their factors and use the lexicographic product
basis. The empty tensor product is $\mathbb C$, while a tensor product with a
zero-dimensional factor is the zero space. The repository inner product is
linear in its first argument. The page defines tensor maps and factor
permutations. It proves the finite-dimensional trace pairing is nondegenerate,
then constructs the partial trace and proves its trace characterization,
basis independence, positivity, and trace preservation.


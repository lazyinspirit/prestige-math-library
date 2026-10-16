---
page: finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
title: Finite-Dimensional Complex Inner-Product Spaces and Matrix Interfaces
status: draft
items:
  - def-qc-dirac-notation-conversion
  - def-qc-trace-norm
  - thm-qc-dirac-adjoint-amplitude-translation
  - thm-qc-dirac-notation-coordinate-identity
  - thm-qc-trace-norm-duality-and-norm-properties
  - thm-qc-trace-norm-rank-one-formula
  - thm-qc-trace-norm-spectral-formula
  - thm-qc-trace-norm-unitary-invariance-and-positive-formula
  - prop-qc-trace-holder-inequality
  - thm-qc-hermitian-trace-norm-positive-negative-parts
examples: []
requires:
  - field-extensions-and-the-complex-numbers
  - hilbert-space-geometry-and-riesz-representation
  - inner-product-spaces-and-orthogonality
  - linear-independence-bases-and-dimension
  - matrices-and-the-matrix-of-a-linear-map
  - the-spectral-theorem-and-singular-value-decomposition
  - vector-spaces-and-subspaces
---

This page fixes the finite-dimensional complex inner-product conventions used by the quantum-computing track. The root pairing is linear in its first argument; Dirac amplitudes reverse the arguments, and bras and outer products are defined through the root pairing. Coordinate identities are stated for ordered orthonormal bases, including zero-dimensional spaces. For rectangular finite maps, the trace norm sums the singular values on the domain. The page proves its dual formula and norm laws, rank-one and spectral formulas, unitary invariance, the positive-semidefinite trace formula, the trace Holder inequality, and the Hermitian positive-negative decomposition. The arguments use finite-dimensional basis and spectral results only and introduce no choice axiom.

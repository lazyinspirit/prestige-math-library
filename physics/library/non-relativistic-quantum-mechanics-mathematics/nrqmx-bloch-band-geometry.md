---
page: nrqmx-bloch-band-geometry
title: Single-particle Bloch bundles and band topology
status: published
library: mathematics
items:
  - def-nrqmx-bloch-fiber-model
  - lem-nrqmx-bloch-fiber-model-properties
  - def-nrqmx-determinant-line-projector
  - lem-nrqmx-determinant-line-projector-well-defined
  - lem-nrqmx-determinant-curvature-is-trace
  - lem-nrqmx-degree-area-formula
  - thm-nrqmx-bloch-projector-chern
  - thm-nrqmx-two-band-degree-formula
  - thm-nrqmx-finite-band-adiabatic-velocity
examples: []
requires:
  - nrqmx-adiabatic-holonomy
  - nrqmx-form-spectral-methods
  - orthonormal-bases-parseval-and-fourier-series
  - orientations-poincare-lefschetz-and-alexander-duality
  - the-de-rham-theorem-and-degree
  - singular-cohomology-and-coefficient-theorems
  - compact-kahler-hodge-foundations
  - singular-chains-and-singular-homology
  - chern-and-pontryagin-classes-by-splitting-and-complexification
---

This page develops finite-range, translation-invariant hopping on a discrete lattice. Fourier series give finite Hermitian Bloch fibers; a uniform gap gives smooth band projectors. The determinant-line construction reduces a multi-band curvature integral to the rank-one Chern theorem, and the two-band Pauli calculation gives the degree formula with the convention $C=(i/2\\pi)\\int\\operatorname{tr}(P(dP\\wedge dP)P)$. The effective velocity equations are conditional Euler–Lagrange consequences of an explicitly adopted single-band Lagrangian.

The page assumes the projector curvature and Chern results on [[nrqmx-adiabatic-holonomy]] and Fourier-series completeness on [[orthonormal-bases-parseval-and-fourier-series]]. [[nrqmx-form-spectral-methods]] is retained as the planned page prerequisite; its unbounded-operator results are not used to claim a continuum periodic Schrödinger Bloch transform here. The proofs concern one-particle finite-range lattice bands. They do not establish many-body Hall conductance, interacting topological order, or bulk-edge correspondence. The variational velocity theorem provides no wave-packet approximation error bound.

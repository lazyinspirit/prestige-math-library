---
page: pure-and-mixed-states-ensembles-and-schmidt-decomposition
title: Pure and Mixed States, Ensembles, and Schmidt Decomposition
status: draft
items:
  - def-qc-density-operator
  - def-qc-finite-positive-effect-family
  - def-qc-pure-state-and-ray
  - lem-qc-complete-effect-family-members-are-effects
  - thm-qc-density-operator-existence
  - thm-qc-ray-projector-well-defined-and-bijective
  - thm-qc-schmidt-decomposition
  - def-qc-ensemble-and-purification
  - thm-qc-density-spectral-ensemble
  - thm-qc-ensemble-barycenter-is-density
  - thm-qc-purification-existence-and-unitary-equivalence
  - thm-qc-rank-one-density-operator
  - thm-qc-ensemble-purification-correspondence
  - thm-qc-density-operator-convexity
  - thm-qc-purification-minimal-environment-dimension
examples: []
requires:
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - hilbert-space-geometry-and-riesz-representation
  - linear-independence-bases-and-dimension
  - matrices-and-the-matrix-of-a-linear-map
  - registers-tensor-products-and-partial-trace
  - the-spectral-theorem-and-singular-value-decomposition
---

A quantum state on a nonzero finite-dimensional complex inner-product space is represented here by a positive semidefinite trace-one operator. A pure state is a ray, represented by a rank-one projector; a mixed state may have several finite ensemble descriptions. In particular, $I_2/2$ is the equal mixture of either the computational-basis projectors or the $\{|+\rangle,|-\rangle\}$ projectors, as shown in [[ex-qc-bell-state-schmidt-reduction]]. The orthogonal spectral ensemble is one such description. The page proves that a finite complete positive family consists of effects, finite-dimensional convexity, purification existence and unitary equivalence after padding, and the least auxiliary dimension as the density rank. The Schmidt decomposition is derived from the coefficient matrix's positive singular-vector families, with the conjugation on the second factor determined by the coefficient-matrix convention. For every finite ensemble of density operators and every purification of its barycenter, the ensemble–purification correspondence constructs a complete effect family whose square-root filters give the subnormalized ensemble components, including zero-weight components. Tensor order and the root linear-first inner-product convention are retained throughout; no physical preparation postulate or measurement outcome law is assumed.

---
page: periods-jacobians-and-abel-jacobi-theory
title: "Periods, Jacobians, and Abel--Jacobi Theory"
status: draft
items:
  - lem-cellular-homology-of-the-one-polygon-surface-model
  - def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface
  - lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism
  - def-intersection-form-on-the-homology-of-a-closed-oriented-surface
  - lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity
  - thm-symplectic-homology-basis-compact-riemann-surface
  - lem-dbar-solvability-criterion-for-a-smooth-zero-one-form
  - lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface
  - def-picard-group-of-divisor-classes-and-pic-zero
  - lem-holomorphic-differentials-form-a-g-dimensional-space
  - lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere
  - def-period-pairing-and-period-lattice
  - lem-holomorphic-differentials-separate-generic-points
  - lem-period-pairing-is-well-defined-and-computed-by-integration
  - lem-cut-surface-and-boundary-jumps-of-primitives
  - thm-symplectic-period-formula-for-wedge-integrals
  - thm-riemann-bilinear-relations
  - def-jacobian-of-a-compact-riemann-surface
  - def-abel-jacobi-map
  - lem-abel-jacobi-map-is-well-defined-and-base-point-independent
  - lem-principal-divisors-have-vanishing-abel-jacobi-class
  - thm-abels-theorem-for-divisors
  - thm-jacobi-inversion
  - cor-picard-zero-is-the-jacobian
  - thm-abel-jacobi-embedding-positive-genus
examples: []
---

Integration of holomorphic differentials over cycles turns the topology of a compact Riemann surface into linear data. The one-polygon normal form exhibits the commutator model whose side loops form a symplectic basis of $H_1\cong\mathbb Z^{2g}$; the intersection form is the Poincaré-dual cup pairing, computed on the model with its standard unimodular matrix. This is the topological input to everything on the page and is supplied by [[cw-complexes-and-cellular-homology]] and [[classification-of-compact-connected-surfaces]].

The period pairing evaluates a holomorphic differential on a homology class. The path integral is defined by local primitives, so the continuous side loops of the polygonal model can be integrated directly; the pairing descends to homology and agrees with the usual contour integral. Cutting the surface along a symplectic basis produces primitives with computable boundary jumps, which yields the wedge-period formula $\int_X\alpha\wedge\beta=\sum_i\bigl(\alpha(a_i)\beta(b_i)-\alpha(b_i)\beta(a_i)\bigr)$. The Riemann bilinear relations then show that the period subgroup is a full lattice and that the matrix of $b$-periods of the normalized basis is symmetric with positive-definite imaginary part.

The Jacobian is the complex torus obtained by dividing the dual of the space of holomorphic differentials by the period lattice. The Abel-Jacobi map integrates a holomorphic differential from a base point; its ambiguity is exactly a period, so the point map is well defined, holomorphic, and additive on degree-zero divisors, where it is also independent of the base point. For a principal divisor the preimage of a curve from infinity to zero is a chain with vanishing holomorphic periods, which proves one direction of Abel's theorem; the converse solves a $\bar\partial$-equation for a weak solution of the divisor. Jacobi inversion shows that every class of the Jacobian is represented by a degree-zero divisor, and the two directions together identify $\operatorname{Pic}^0(X)$ with $\operatorname{Jac}(X)$.

For positive genus, the final results embed the surface in its Jacobian and describe the image. The point map is injective because a vanishing point difference would be a principal divisor with a single simple pole, forcing a degree-one map to the sphere; it is an immersion because some holomorphic differential is nonzero at every point; and compactness makes it a closed embedding. The image generates the Jacobian as a group. Full AC is inherited from the cohomological, Riemann–Roch and duality suppliers, and the choice assumptions are carried in the item statements; the period and divisor constructions use it only where those suppliers do.

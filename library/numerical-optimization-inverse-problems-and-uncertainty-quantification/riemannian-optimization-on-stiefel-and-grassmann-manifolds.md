---
page: riemannian-optimization-on-stiefel-and-grassmann-manifolds
title: Riemannian optimization on stiefel and grassmann manifolds
status: draft
items:
  - def-stiefel-grassmann-optimization-conventions
  - def-complex-stiefel-grassmann-optimization-conventions
  - prop-stiefel-grassmann-are-compact
  - prop-complex-stiefel-grassmann-are-compact
  - thm-stiefel-grassmann-tangent-projections
  - thm-complex-stiefel-grassmann-tangent-projections
  - prop-stiefel-grassmann-riemannian-gradient-formulas
  - def-complex-grassmann-polar-retraction
  - thm-complex-grassmann-polar-retraction-is-first-order
  - prop-complex-grassmann-projector-energy-gradient
  - def-stiefel-qr-polar-retractions
  - thm-stiefel-retractions-are-first-order
  - alg-riemannian-armijo-backtracking
  - alg-riemannian-trust-region
  - def-stiefel-grassmann-projected-vector-transport
  - lem-riemannian-trust-region-ratio-accuracy-for-small-radii
  - prop-stiefel-grassmann-vector-transport-is-tangent
  - thm-retraction-armijo-acceptance-and-step-lower-bound
  - thm-retraction-armijo-best-iterate-complexity
  - thm-riemannian-trust-region-first-order-complexity
examples: []
---

This page develops first-order geometry and optimization for real orthonormal
frames and their Grassmann quotient, plus the complex Grassmann geometry needed
for Hermitian projector models. It fixes the real Frobenius metric on complex
coordinates, proves tangent and projected-gradient formulas, and gives
exact-domain real QR and polar retractions, a complex polar retraction, and
projected real Stiefel/Grassmann vector transport. The algorithm entries define
finite-budget retraction Armijo and an OPT3-matched real or complex Grassmann
trust-region method.
The complexity results prove Armijo and trust-region first-order
$O(\varepsilon^{-2})$ bounds under their stated pullback regularity and
subproblem conditions; the trust-region count includes accepted and rejected
outer trials.

Grassmann objectives must be invariant under changes of orthonormal frame.
Finite search or subproblem budgets can return failure and carry no unconditional
success guarantee. The trust-region result is first-order; no second-order
complexity claim is made here. The complex model treats complex matrix spaces
as real vector spaces with metric $\operatorname{Re}\operatorname{tr}(U^*V)$.

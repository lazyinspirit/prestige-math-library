---
page: deferred-correction-and-collocation-iterations
title: Deferred correction and collocation iterations
status: published
requires:
  - polynomial-interpolation-and-remainder
  - global-ode-and-density-error
  - runge-kutta-methods-and-order
  - implicit-stiff-time-stepping-and-algebraic-error
  - gaussian-quadrature
items:
  - lem-continuous-riemann-lebesgue-agreement
  - lem-unit-interval-lebesgue-gauss-data-valid
  - def-collocation-quadrature-tableau
  - lem-collocation-quadrature-matrix-well-defined
  - alg-explicit-left-euler-sdc-sweep
  - lem-sdc-sweep-work-and-storage-bound
  - lem-sdc-fixed-point-is-collocation-stage
  - lem-one-node-gauss-data-is-midpoint
  - lem-sdc-scalar-linear-iteration-matrix
  - thm-sdc-sweep-contraction-and-error-bound
  - lem-collocation-polynomial-scaled-derivatives
  - thm-collocation-local-defect-order-m
  - thm-collocation-one-step-stability
  - lem-gauss-collocation-weighted-defect-bound
  - prop-one-node-gauss-collocation-order-two
  - thm-collocation-global-order-m
  - thm-sdc-finite-sweeps-raise-order
  - thm-sdc-residual-tolerance-preserves-order
  - thm-gauss-collocation-local-defect-order-2m
  - thm-gauss-collocation-global-order-2m
examples: []
---

## Summary

For distinct nodes, the page defines the collocation tableau from cardinal polynomials and derives an explicit-left-Euler spectral deferred-correction sweep. It proves when the sweep is well defined and contractive, identifies its fixed point with the collocation stages, gives a residual-to-stage error estimate, and counts stage evaluations and storage. The scalar linear example computes the iteration matrix separately and shows why a stable fully solved step does not ensure convergence of the iteration.

The page proves local defect order $M$ and global order $M$ for collocation under smoothness, common-tube, branch, and small-step stability assumptions. For Gauss nodes, a weighted defect argument with the Hermite quadrature remainder proves local and global order $2M$; it does not infer superconvergence from polynomial degree alone. One-node Gauss collocation is proved to be implicit midpoint of order two. From exact initial data and with a constant predictor, $k$ completed sweeps give guaranteed order $\min(M,k+1)$ for fixed $k$, while a residual target of stage error $O(h^{p+1})$ preserves order $p$.

All constants may depend on the fixed node set and its Lebesgue constant. The iteration results are local to their invariant stage set and contraction conditions; no stiff-convergence claim is made when those conditions fail, and no uniform-in-$M$ estimate is asserted.

The generic collocation and SDC results use no choice axiom in their local arguments. The specializations to Gaussian quadrature for Lebesgue measure on $[0,1]$ are conditional on Countable Choice through the library's interval-measure theorem; the A page keeps that axiom branch explicit.

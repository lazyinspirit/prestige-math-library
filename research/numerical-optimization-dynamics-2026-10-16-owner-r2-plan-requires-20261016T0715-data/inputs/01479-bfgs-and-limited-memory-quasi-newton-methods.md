---
page: bfgs-and-limited-memory-quasi-newton-methods
title: "Bfgs and limited memory quasi newton methods"
status: draft
items:
  - def-bfgs-curvature-pair-and-update-formulas
  - lem-bfgs-hessian-bounds-control-gradient-and-taylor-remainder
  - lem-bfgs-updates-preserve-secant-symmetry-and-spd
  - lem-wolfe-steps-give-positive-bfgs-curvature
  - lem-powell-damping-gives-positive-curvature
  - alg-bfgs-hessian-direction-with-rounded-cholesky
  - alg-lbfgs-two-loop-with-curvature-filter
  - lem-bfgs-trace-determinant-potential-identities
  - alg-full-memory-bfgs-with-curvature-safeguards
  - lem-lbfgs-two-loop-equals-stored-updates-and-cost
  - thm-full-memory-bfgs-global-linear-convergence
  - lem-lbfgs-curvature-bounds-imply-uniform-spectrum
  - lem-full-memory-bfgs-dennis-more-condition
  - thm-lbfgs-fixed-memory-linear-convergence
  - thm-full-memory-bfgs-local-superlinear-convergence
examples: []
---

This page defines full-memory BFGS Hessian and inverse updates, their secant and positive-definiteness properties, and the Wolfe curvature condition that makes the update well-defined. A local Hessian-bounds lemma supplies the gradient, monotonicity and Taylor estimates used by the convergence proofs. It specifies a failure-aware Cholesky direction path, an inverse-matrix path, and a limited-memory two-loop recursion with a positive-curvature filter. Powell damping is proved to restore positive curvature, while its damped branch remains distinct from the undamped convergence theorems.

For uniformly strongly convex objectives with a convex initial sublevel set, bounded Hessian, exact undamped updates, and successful Wolfe searches, the full-memory method has a global R-linear bound. A locally Lipschitz Hessian then yields the Dennis–Moré condition and eventual acceptance of unit steps, giving superlinear convergence. Fixed-memory L-BFGS has a separate linear result under explicit pair-curvature and scale bounds that imply a uniform spectrum for its implicit inverse matrices.

Finite line-search budgets may return failure even when a strong Wolfe step exists. The global and local convergence claims concern exact arithmetic and successful steps; the rounded Cholesky path specifies failure-aware direction computation but carries no backward-error guarantee.

---
page: barrier-and-primal-dual-interior-point-methods
title: "Barrier and primal dual interior point methods"
status: draft
requires:
  - finite-precision-direct-factorizations
  - inequality-kkt-duality-and-optimality-certificates
  - numerical-optimization-globalization-and-inexact-certificates
items:
  - def-self-concordant-log-homogeneous-barrier
  - def-conic-optimization-primal-dual-models
  - lem-self-concordant-local-newton-calculus
  - lem-nonnegative-orthant-log-barrier
  - lem-lorentz-cone-log-barrier
  - lem-psd-cone-self-dual-logdet-barrier
  - lem-loghom-barrier-gradient-is-dual
  - def-barrier-central-path-and-newton-residuals
  - thm-phase-i-margin-status-and-weak-infeasibility
  - thm-central-path-barrier-gap-and-dual-certificate
  - alg-short-step-self-concordant-path-following
  - thm-inexact-central-path-distance-and-gap-certificate
  - thm-short-step-complexity-and-primal-gap-bound
  - lem-primal-dual-lp-qp-newton-matrix-nonsingular
  - alg-primal-dual-newton-residual-method-for-lp-qps-and-symmetric-cones
  - thm-fraction-to-boundary-and-primal-dual-gap-certificates
examples: []
---

## Objective

Develop log barriers and central paths for smooth convex inequalities and conic programs; prove the exact central-point gap $m/t$ or $\nu/t$; define finite-budget LP/QP and symmetric-cone primal-dual Newton residual systems with fraction-to-boundary updates; and prove the short-step path-following bound from local self-concordant calculus. The page includes the orthant, Lorentz, and positive-semidefinite barriers with their domains and parameters. Residual tolerances alone remain candidate diagnostics; a stopping certificate requires verified primal and dual feasibility and a gap bound. Phase I gives a strict-feasibility margin and keeps the zero-margin case undecided, including weakly infeasible SDPs.

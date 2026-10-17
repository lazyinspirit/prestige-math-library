---
page: sqp-active-set-and-augmented-lagrangian-methods
title: Sqp active set and augmented lagrangian methods
status: published
items:
  - def-sqp-linearized-quadratic-subproblem
  - def-sqp-augmented-lagrangian-equality-and-inequality
  - lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature
  - def-sqp-l1-exact-penalty-merit
  - alg-sqp-augmented-lagrangian-multiplier-method
  - cor-sqp-augmented-lagrangian-finite-budget-status
  - lem-sqp-convex-quadratic-subproblem-has-unique-kkt-certificate
  - alg-sqp-exhaustive-active-set-qp-solve
  - alg-sqp-feasible-working-set-qp-solve
  - alg-sqp-second-order-correction
  - alg-sqp-exact-hessian-newton-step
  - alg-sqp-reduced-bfgs-kkt-step
  - alg-sqp-merit-globalization-with-finite-budgets
  - thm-sqp-exhaustive-active-set-qp-solve-correct-finite
  - thm-sqp-working-set-qp-terminates-under-nondegeneracy-anticycling
  - thm-sqp-second-order-correction-residual-order
  - thm-sqp-exact-hessian-local-quadratic-convergence
  - thm-sqp-reduced-bfgs-superlinear-under-dm
  - thm-sqp-augmented-lagrangian-local-convergence
  - alg-sqp-finite-precision-kkt-qr-solve-and-residual-check
  - thm-sqp-merit-globalization-finite-budget-status
  - thm-sqp-finite-precision-kkt-residual-certificate-sound
examples: []
---

This pair uses $g_i\le0$, $\lambda_i\ge0$, and
$L=f+\nu^Th+\lambda^Tg$, matching
[[def-inequality-constrained-program-and-kkt-geometry]]. The SQP model is a
positive-definite quadratic with affine linearized constraints. The page
supplies the active KKT matrix criterion, a unique-certificate result for
feasible strictly convex QPs, an exhaustive exact subset solve, and a
feasible working-set method whose finite termination requires positive
blocking steps and an explicit iteration cap.

The globalization section defines an L1 merit and predicted decrease, then
uses finite penalty and backtracking budgets with the retained equality basis
and selected inequality support for the second-order correction. Accepted
records return the trial point and QP multipliers; nonpositive prediction,
domain exit, and line-search exhaustion remain separate statuses. The
minimum-norm second-order correction cancels the linearized active residual
and has a cubic nonlinear residual under bounded second derivatives and
uniform row rank.

Local convergence claims are separated by method. Exact-Hessian SQP is the
full-step Newton method on an identified active KKT system under LICQ,
strict complementarity and the second-order sufficient condition. Reduced
BFGS requires the reduced Dennis–Moré condition and uniform approximate
KKT inverse bounds. The PHR augmented-Lagrangian multiplier theorem uses a
fixed sufficiently large penalty, a locally stable active branch and
summable inner stationarity residuals. The multiplier method has finite inner
and outer caps with explicit residual/failure returns. None of these is a
global convergence claim.

The finite-precision item applies reduced QR to a nonsingular active KKT
matrix and returns a rigorous upper bound for the exact linear-system
residual. It does not infer a small solve error without conditioning
information. Shared upstream interfaces are
[[finite-precision-direct-factorizations]],
[[inequality-kkt-duality-and-optimality-certificates]],
[[nonconvex-line-search-and-inexact-newton-methods]], and
[[bfgs-and-limited-memory-quasi-newton-methods]].

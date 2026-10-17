---
id: alg-ctrl1-finite-budget-transcription-solver-dispatch
kind: algorithm
title: "Finite-budget barrier or SQP solve for a transcription NLP"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps: [def-ctrl1-smooth-transcription-data, alg-ctrl1-runge-kutta-shooting-and-collocation-transcription, lem-ctrl1-lqr-transcription-is-a-convex-quadratic-program, alg-primal-dual-newton-residual-method-for-lp-qps-and-symmetric-cones, thm-fraction-to-boundary-and-primal-dual-gap-certificates, alg-sqp-merit-globalization-with-finite-budgets, alg-sqp-exact-hessian-newton-step, thm-sqp-exact-hessian-local-quadratic-convergence]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §13.4"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 244–248: finite-dimensional NLP solution by SQP and interior-point methods."
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §§11.7.1–11.7.3: primal-dual interior-point methods for convex QPs and symmetric-cone programs."
---

## Definition

Input a finite transcription from [[alg-ctrl1-runge-kutta-shooting-and-collocation-transcription]], an initial iterate, solver tolerances, an integer outer cap $K\ge0$, and integer inner caps $R,J\ge1$ (penalty and backtracking trials). First check dimensions and domains. If the transcription satisfies the linear-quadratic, nonnegative-quadrature, and affine-constraint hypotheses of [[lem-ctrl1-lqr-transcription-is-a-convex-quadratic-program]], convert its affine constraints to the standard equality-plus-nonnegative-variable representation of [[alg-primal-dual-newton-residual-method-for-lp-qps-and-symmetric-cones]]. Supply a strictly positive primal/slack start and a dual start, then call that finite-budget algorithm once. Return its status, translating `certified-gap` only to the exact gap certificate described by [[thm-fraction-to-boundary-and-primal-dual-gap-certificates]]; a `residual-candidate` remains a candidate. If $K=0$, skip the SQP loop and return `budget-exhausted`.

Otherwise, or if the convex-QP route has no admissible strict start, use a supplied smooth SQP model builder and call [[alg-sqp-merit-globalization-with-finite-budgets]] at most $K$ times, with the given finite inner caps. An accepted step updates the iterate; any failure status is returned immediately. If an identified active set and the exact local branch are supplied, a step may instead be computed by [[alg-sqp-exact-hessian-newton-step]]. Return `budget-exhausted` after $K$ updates. The local convergence theorem for that branch is [[thm-sqp-exact-hessian-local-quadratic-convergence]] and requires its stated regularity and starting-point hypotheses.

This dispatch is a finite procedure, not a guarantee that a start exists, an NLP solver succeeds, a nonconvex problem has a global solution, or the RK transcription approximates the continuous problem to a certified tolerance. Its returned numerical residuals are certificates only when the called supplier's exact certificate conditions hold.

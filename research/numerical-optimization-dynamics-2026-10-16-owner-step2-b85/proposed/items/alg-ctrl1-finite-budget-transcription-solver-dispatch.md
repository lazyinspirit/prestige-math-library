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

Input a finite transcription from [[alg-ctrl1-runge-kutta-shooting-and-collocation-transcription]], an initial primal iterate $z_0$, optional full equality- and inequality-multiplier guesses $(\nu_0,\lambda_0)$ for its fixed nonlinear-program constraint ordering (default zero vectors), solver tolerances, an integer outer cap $K\ge0$, and integer inner caps $R,J\ge1$ (penalty and backtracking trials). First check dimensions and domains. If the transcription satisfies the linear-quadratic, nonnegative-quadrature, and affine-constraint hypotheses of [[lem-ctrl1-lqr-transcription-is-a-convex-quadratic-program]], convert its affine constraints to the standard equality-plus-nonnegative-variable representation of [[alg-primal-dual-newton-residual-method-for-lp-qps-and-symmetric-cones]]. Supply a strictly positive primal/slack start and a dual start, then call that finite-budget algorithm once. Return its status, translating `certified-gap` only to the exact gap certificate described by [[thm-fraction-to-boundary-and-primal-dual-gap-certificates]]; a `residual-candidate` remains a candidate. If $K=0$, skip the SQP loop and return `budget-exhausted` with the initial SQP state $(z_0,\nu_0,\lambda_0)$.

Otherwise, or if the convex-QP route has no admissible strict start, initialize the SQP state $(z,\nu,\lambda)=(z_0,\nu_0,\lambda_0)$. A supplied smooth SQP model builder receives this entire current state at every call and returns the objective/constraint values and derivatives for the fixed transcription at $z$, together with a symmetric positive-definite model matrix when the globalization branch is selected; that matrix may depend on $(\nu,\lambda)$. Check the state and output dimensions and domains; an unavailable or invalid model returns `model-build-failure` with the last state. No derivative accuracy or continuous-model accuracy is inferred from the builder's presence.

Perform at most $K$ accepted SQP updates. At each globalized iteration, invoke the builder on the current $(z,\nu,\lambda)$ and call [[alg-sqp-merit-globalization-with-finite-budgets]] on that model, with penalty cap $R$ and backtracking cap $J_{\max}=J$. On `accepted` or `accepted-soc`, use the returned accepted point $z^+$ (including its SOC displacement when present), retain its complete supplier record and full QP multiplier vectors $(\nu^{QP},\lambda^{QP})$, and set
$$(z,\nu,\lambda)\leftarrow(z^+,\nu^{QP},\lambda^{QP}).$$
Pass these updated full vectors to the next model-builder call; do not replace them by the reduced multipliers on the selected support, or assume that support identifies the true nonlinear active set. Any other supplier status is returned immediately with the unchanged current state and that supplier record.

If a correctly identified active set $I$ and the exact local branch are supplied, an iteration may instead use the builder's exact derivatives and call [[alg-sqp-exact-hessian-newton-step]] on the current primal-dual pair with $\mu=(\nu,\lambda_I)$ and inactive multipliers set to zero. On its successful full Newton-pair return $(z^+,\mu^+)$, set $z=z^+$, place the returned equality and active-inequality components of $\mu^+$ into the full $(\nu,\lambda)$ vectors, and set inactive inequality components to zero. Propagate its failure status without changing the state. Each successful branch counts as one update; return `budget-exhausted` after $K$ updates. Every SQP return includes the last primal-dual state and the last supplier record when one exists. The local convergence theorem for the exact branch is [[thm-sqp-exact-hessian-local-quadratic-convergence]] and requires its stated regularity and starting-point hypotheses.

This dispatch is a finite procedure, not a guarantee that a start exists, an NLP solver succeeds, a nonconvex problem has a global solution, or the RK transcription approximates the continuous problem to a certified tolerance. Its returned numerical residuals are certificates only when the called supplier's exact certificate conditions hold.

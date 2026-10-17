---
id: alg-single-shooting-for-nonlinear-bvps
kind: algorithm
title: "Finite-budget single shooting for a nonlinear two-point BVP"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-nonlinear-two-point-bvp-and-boundary-residual
  - def-certified-ivp-approximation-and-sensitivity-interface
  - prop-shooting-residual-derivative
  - alg-finite-budget-newton-for-vector-residuals
  - alg-newton-correction-for-vector-residuals
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "R. Verfürth, Numerical Methods and Stochastics, Part I: Numerical Methods, Lecture Notes"
      url: "https://homepages.rub.de/ruediger.verfuerth/files/lectures/NMS.pdf"
    - title: "T. A. Driscoll and R. J. Braun, Fundamentals of Numerical Computation, Chapter 10"
      url: "https://fncbook.com/shooting/"
verification:
  precheck: pending
---

## Definition

Let $U\subseteq\mathbb R^d$ be the open trial-initial-state set, and assume $B$ is $C^1$ on the required endpoint pairs, meaning it is totally differentiable with continuous derivative entries. Inputs are a certified evaluator from [[def-certified-ivp-approximation-and-sensitivity-interface]] that succeeds on each queried trial, an initial value $s_0\in U$, residual tolerance $\tau\ge0$, and a correction budget $M\in\mathbb N_0$. Form the computed residual $\widetilde R(s)=B(s,\widetilde\Phi(s))$ and its exact derivative for that numerical residual using [[prop-shooting-residual-derivative]]. For $k=0,1,\ldots,M$, in this order:

1. Evaluate $\widetilde R(s_k)$ and $D\widetilde R(s_k)$. If evaluation fails, return the last valid state with status evaluator-failure and no residual certificate.
2. If $\|\widetilde R(s_k)\|_2\le\tau$, return $s_k$, its approximate trajectory, and status root-tolerance-met. This status asserts only the displayed residual tolerance.
3. If $k=M$, return the last state and status iteration-budget-exhausted.
4. Call [[alg-newton-correction-for-vector-residuals]] with $A=D\widetilde R(s_k)$ and $r=\widetilde R(s_k)$. If it reports singular-jacobian, stop with that status.
5. If the proposed state $s_k+u_k$ is outside $U$, return the last state with status invalid-trial; otherwise set $s_{k+1}=s_k+u_k$.

This is the finite-budget Newton procedure guarded by the evaluator's failure status. On a sequence of successful evaluations it has the same residual, singularity, domain and budget checks as [[alg-finite-budget-newton-for-vector-residuals]]. It makes no global-start, exact-root, or discretization-error claim.

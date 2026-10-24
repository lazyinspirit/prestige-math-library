---
id: alg-single-shooting-for-nonlinear-bvps
kind: algorithm
title: "Finite-budget single shooting for a nonlinear two-point BVP"
status: published
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

Let $U\subseteq\mathbb R^d$ be the open trial-initial-state set. Let $D_B\subseteq\mathbb R^d\times\mathbb R^d$ be the open domain of the $C^1$ boundary map $B$, where $C^1$ means total differentiability with continuous derivative entries. Inputs are a certified evaluator from [[def-certified-ivp-approximation-and-sensitivity-interface]], an initial trial $s_0\in U$, residual tolerance $\tau\ge0$, and a correction budget $M\in\mathbb N_0$. The evaluator may return failure on a queried trial. Every successful response must supply the approximate trajectory, the endpoint $\widetilde\Phi(s)$ and the exact derivative $D\widetilde\Phi(s)$ of the declared $C^1$ numerical endpoint map, with the interface's stated uniform trajectory-error bound. Success on every queried trial is not an input assumption.

For $k=0,1,\ldots,M$, in this order:

1. Query the evaluator at $s_k$. If it fails, return the last accepted trial with status evaluator-failure and no residual certificate. Before evaluating $B$, check $(s_k,\widetilde\Phi(s_k))\in D_B$; if this fails or cannot be established, return the last accepted trial with status invalid-endpoint-pair and no residual certificate. On success form $\widetilde R(s_k)=B(s_k,\widetilde\Phi(s_k))$ and $D\widetilde R(s_k)=D_1B(s_k,\widetilde\Phi(s_k))+D_2B(s_k,\widetilde\Phi(s_k))D\widetilde\Phi(s_k)$ using [[prop-shooting-residual-derivative]]. A failure to evaluate these quantities returns evaluator-failure without a residual certificate.
2. If $\|\widetilde R(s_k)\|_2\le\tau$, return $s_k$, its approximate trajectory, and status root-tolerance-met. This status asserts only the displayed residual tolerance.
3. If $k=M$, return the last trial and status iteration-budget-exhausted.
4. Call [[alg-newton-correction-for-vector-residuals]] with $A=D\widetilde R(s_k)$ and $r=\widetilde R(s_k)$. If it reports singular-jacobian, stop with that status. Otherwise let $u_k$ be its returned correction.
5. If the proposed trial $s_k+u_k$ is outside $U$ or its membership cannot be established, return the last accepted trial with status invalid-trial; otherwise accept $s_{k+1}=s_k+u_k$. Initially the last accepted trial is $s_0$; accepting a trial supplies no boundary residual certificate until step 1 succeeds there.

On a sequence of successful evaluations with endpoint pairs in $D_B$, this has the same residual, singularity, trial-domain and budget checks as [[alg-finite-budget-newton-for-vector-residuals]]. It makes no global-start, exact-root, or discretization-error claim. The numerical residual is $C^1$ on the open subset of $U$ where $(s,\widetilde\Phi(s))\in D_B$; no boundary value is evaluated outside that subset.

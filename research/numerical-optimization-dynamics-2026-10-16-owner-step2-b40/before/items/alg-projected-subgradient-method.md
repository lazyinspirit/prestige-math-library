---
id: alg-projected-subgradient-method
kind: algorithm
title: "Projected subgradient method with finite budget"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-finite-sum
  - lem-finite-set-has-max
  - def-max-min
  - def-subgradient-and-subdifferential
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-euclidean-inner-product
  - def-convex-subset-of-euclidean-space
  - def-metric-interior-closure-boundary
  - thm-nearest-point-in-a-nonempty-closed-convex-set
  - thm-finite-jensen-inequality-in-euclidean-space
justified_by:
  - lem-projected-subgradient-finite-budget-returns-status
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, §3.1"
      url: https://arxiv.org/pdf/1405.4980
    - title: "Dimitri Bertsekas, MIT 6.253 Complete Lecture Notes, Lecture 15"
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
verification:
  precheck: n/a
---

## Definition
Let $n\ge1$, let $C\subseteq\mathbb R^n$ be nonempty, closed, and convex, and let $f:C\to\mathbb R$ be convex. The finite-budget projected subgradient procedure takes $x_0\in C$, an integer budget $N\ge1$, and positive stepsizes $\alpha_0,\ldots,\alpha_{N-1}$. At iteration $k$, an oracle returns either failure or a pair $(f(x_k),g_k)$ with $g_k\in\partial f(x_k)$, where subgradient has the meaning in [[def-subgradient-and-subdifferential]]. On a valid response set
$$x_{k+1}=P_C(x_k-\alpha_k g_k),$$
where $P_C(u)$ is the unique nearest point in $C$ to $u$. On an oracle failure at iteration $k$, return status **oracle-failure**, the feasible current iterate, the completed update count, and the least-index best among values observed so far if any (otherwise report none); a full-horizon average is not returned. If all $N$ calls succeed, return status **budget-exhausted**, the final iterate, the weighted average $\bar x_N=(\sum_{k<N}\alpha_kx_k)/(\sum_{k<N}\alpha_k)$, and a least-index minimizer of observed values among $x_0,\ldots,x_{N-1}$. Report status and completed update count. This finite procedure makes no convergence claim.

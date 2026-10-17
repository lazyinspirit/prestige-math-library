---
id: thm-projected-subgradient-best-and-average-bound
kind: theorem
title: "Projected subgradient best-iterate and weighted-average bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-projected-subgradient-method
  - lem-projected-subgradient-finite-budget-returns-status
  - lem-projected-subgradient-one-step-estimate
  - thm-nearest-point-in-a-nonempty-closed-convex-set
  - lem-finite-sum-laws
  - lem-finite-set-has-max
  - def-max-min
  - def-convex-subset-of-euclidean-space
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - thm-finite-jensen-inequality-in-euclidean-space
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, §3.1"
      url: https://arxiv.org/pdf/1405.4980
    - title: "Dimitri Bertsekas, MIT 6.253 Complete Lecture Notes, Lecture 15"
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $C\subseteq\mathbb R^n$ be nonempty, closed, and convex, let $f:C\to\mathbb R$ be convex, and run [[alg-projected-subgradient-method]] for $N\ge1$ steps with positive $\alpha_k$. Assume all $N$ oracle calls return valid pairs. Suppose a global minimizer $x^*\in C$ exists and the oracle vectors obey $\|g_k\|_2\le G$; let $R\ge\|x_0-x^*\|_2$. Set $A_N=\sum_{k<N}\alpha_k>0$ and $\bar x_N=A_N^{-1}\sum_{k<N}\alpha_kx_k$. Then
$$\max\left\{\min_{0\le k<N}\bigl(f(x_k)-f(x^*)\bigr),\ f(\bar x_N)-f(x^*)\right\}\le\frac{R^2+G^2\sum_{k<N}\alpha_k^2}{2A_N}.$$

## Facts & Assumptions

**Given:** The finite algorithm [[alg-projected-subgradient-method]], its one-step estimate [[lem-projected-subgradient-one-step-estimate]], convexity [[def-convex-and-strictly-convex-functions-on-euclidean-sets]], and finite Jensen [[thm-finite-jensen-inequality-in-euclidean-space]].

[F1] For each $k$, $\|x_{k+1}-x^*\|_2^2\le\|x_k-x^*\|_2^2-2\alpha_k(f(x_k)-f(x^*))+\alpha_k^2\|g_k\|_2^2$ ([[lem-projected-subgradient-one-step-estimate]]).

[F2] For a convex function and nonnegative weights summing to one, its value at the weighted average is at most the weighted average of its values ([[thm-finite-jensen-inequality-in-euclidean-space]]).

[F3] Starting from $x_0\in C$, each successful update is the unique projection onto $C$ and remains feasible; the finite-budget result also establishes that the returned average is defined and feasible ([[alg-projected-subgradient-method]], [[thm-nearest-point-in-a-nonempty-closed-convex-set]], [[lem-projected-subgradient-finite-budget-returns-status]]).

[F4] Since the stepsizes are positive, $A_N=\sum_{k<N}\alpha_k>0$, and the weights $\alpha_k/A_N$ are positive and sum to one by the scaling law for finite sums ([[lem-finite-sum-laws]]).

[F5] The nonempty finite list of objective gaps has a minimum attained by one of its indices ([[lem-finite-set-has-max]], [[def-max-min]]).

## Proof

1.1 Rearrange [F1] and sum over $k=0,\ldots,N-1$. The squared-distance terms telescope, giving $2\sum_{k<N}\alpha_k(f(x_k)-f(x^*))\le\|x_0-x^*\|_2^2-\|x_N-x^*\|_2^2+\sum_{k<N}\alpha_k^2\|g_k\|_2^2\le R^2+G^2\sum_{k<N}\alpha_k^2$, since the last squared distance is nonnegative. Divide by $2A_N>0$ using [F4] to bound the weighted average of the objective gaps. [F1, F4, given, algebra]

2.1 By [F3] the iterates lie in $C$, and by [F4] the normalized positive weights sum to one. Apply [F2] to get $f(\bar x_N)-f(x^*)\le A_N^{-1}\sum_{k<N}\alpha_k(f(x_k)-f(x^*))$. By [F5], the minimum gap is attained; since a positive weighted average with weights summing to one is at least the minimum term, both the minimum gap and the gap at $\bar x_N$ are bounded above by the weighted average of the gaps. Step 1.1 therefore bounds their maximum as asserted. [F2, F3, F4, F5, step 1.1, algebra] ∎


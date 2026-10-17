---
id: lem-projected-subgradient-one-step-estimate
kind: lemma
title: "One-step estimate for projected subgradient descent"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-projected-subgradient-method
  - def-subgradient-and-subdifferential
  - def-euclidean-inner-product
  - lem-projection-onto-a-closed-convex-set-has-the-variational-inequality
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
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

Under the projected-subgradient update of [[alg-projected-subgradient-method]], let $x^*\in C$ and suppose the $k$th oracle call returns $g_k\in\partial f(x_k)$. Then
$$\|x_{k+1}-x^*\|_2^2\le\|x_k-x^*\|_2^2-2\alpha_k(f(x_k)-f(x^*))+\alpha_k^2\|g_k\|_2^2.$$

## Facts & Assumptions

**Given:** The projected update [[alg-projected-subgradient-method]], subgradient convention [[def-subgradient-and-subdifferential]], and projection variational inequality [[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]].

[F1] For $p=P_C(u)$ and every $z\in C$, $\langle u-p,z-p\rangle\le0$ ([[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]]).

[F2] $g_k\in\partial f(x_k)$ implies $f(x^*)\ge f(x_k)+\langle g_k,x^*-x_k\rangle$ ([[def-subgradient-and-subdifferential]]).

## Proof

1.1 Put $u=x_k-\alpha_kg_k$ and $p=x_{k+1}=P_C(u)$. Applying [F1] with $z=x^*$ gives $\langle u-p,x^*-p\rangle\le0$, hence $\langle u-p,p-x^*\rangle\ge0$. Expanding $\|u-x^*\|_2^2=\|u-p\|_2^2+\|p-x^*\|_2^2+2\langle u-p,p-x^*\rangle$ yields $\|p-x^*\|_2^2\le\|u-x^*\|_2^2$. [F1, given, algebra]

2.1 Expand the right side as $\|x_k-x^*\|_2^2-2\alpha_k\langle g_k,x_k-x^*\rangle+\alpha_k^2\|g_k\|_2^2$. By [F2], $\langle g_k,x_k-x^*\rangle\ge f(x_k)-f(x^*)$; substituting proves the estimate. [F2, step 1.1, algebra] ∎


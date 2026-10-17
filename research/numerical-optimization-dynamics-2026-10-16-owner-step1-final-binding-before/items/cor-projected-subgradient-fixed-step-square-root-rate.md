---
id: cor-projected-subgradient-fixed-step-square-root-rate
kind: corollary
title: "The fixed-step projected subgradient rate is O(1/√N)"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - thm-projected-subgradient-best-and-average-bound
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
---

## Statement

Under the hypotheses of [[thm-projected-subgradient-best-and-average-bound]], let $R>0$ and $G>0$ and choose the constant stepsize $\alpha_k=R/(G\sqrt N)$ for all $k<N$. Then
$$\min_{k<N}(f(x_k)-f(x^*))\le f(\bar x_N)-f(x^*)\le\frac{RG}{\sqrt N}.$$
Thus both reported gaps are $O(N^{-1/2})$ with constants $R,G$ fixed. The schedule is not used when $R=0$ or $G=0$; in those boundary cases the best-iterate gap is zero under the theorem's hypotheses and bounds below.

## Facts & Assumptions

**Given:** The best-iterate and weighted-average bound [[thm-projected-subgradient-best-and-average-bound]].

[F1] The bound is $[R^2+G^2\sum_{k<N}\alpha_k^2]/(2\sum_{k<N}\alpha_k)$ ([[thm-projected-subgradient-best-and-average-bound]]).

## Proof

1.1 For $R,G>0$, $\sum_{k<N}\alpha_k=R\sqrt N/G$ and $G^2\sum_{k<N}\alpha_k^2=R^2$. Substituting these values into [F1] gives $(2R^2)/(2R\sqrt N/G)=RG/\sqrt N$. [F1, given, algebra]

2.1 If $R=0$, then $x_0=x^*$, so the finite best iterate includes an optimizer. If $G=0$, every selected subgradient has norm zero; in particular $g_0=0\in\partial f(x_0)$, and the subgradient inequality gives $f(y)\ge f(x_0)$ for every feasible $y$, so $x_0$ is a global minimizer. These cover the excluded boundary cases without a zero stepsize. [given, algebra] ∎


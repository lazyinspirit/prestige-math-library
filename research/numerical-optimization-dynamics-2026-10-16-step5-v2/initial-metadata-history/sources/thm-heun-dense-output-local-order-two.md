---
id: thm-heun-dense-output-local-order-two
kind: theorem
title: "Heun's quadratic dense output has local order two"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-heun-euler-embedded-runge-kutta-pair
  - def-heun-quadratic-dense-output
  - thm-heun-euler-pair-local-orders-and-estimator
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, Exercise 10 (Dense output), printed p. 85"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Ernst Hairer, Ordinary Differential Equations, lecture notes, Exercise 10"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
---

## Statement

Under the smoothness and bounded-derivative hypotheses of [[thm-heun-euler-pair-local-orders-and-estimator]], for a fixed initial value and all sufficiently small $h>0$,
$$\sup_{0\le\theta\le1}\|P_n(\theta)-y(t_n+\theta h)\|_2\le C h^3$$
for a constant $C$ independent of $h$ and $\theta$. Thus this continuous extension has local order two uniformly throughout the accepted step, with a defect separate from the endpoint defect.

## Facts & Assumptions

**Given:** The Heun stage and dense-output formulas, the smooth vector field and bounded derivatives from [[thm-heun-euler-pair-local-orders-and-estimator]], and $0\le\theta\le1$.

[F1] [[def-heun-quadratic-dense-output]] and [[def-heun-euler-embedded-runge-kutta-pair]]: $P_n(\theta)=y_n+h(\theta K_1+\frac12\theta^2(K_2-K_1))$, and $Y_H-Y_E=\frac h2(K_2-K_1)$.

[F2] [[thm-heun-euler-pair-local-orders-and-estimator]]: uniformly for $0\le\theta\le1$, $y(t_n+\theta h)=y_n+\theta hK_1+\frac12\theta^2h^2g+O(h^3)$ and $Y_H-Y_E=\frac12h^2g+O(h^3)$. Together with [F1], the latter gives $K_2-K_1=hg+O(h^2)$.

## Proof

1.1 From [F1] and [F2], $\frac h2(K_2-K_1)=\frac12h^2g+O(h^3)$; since $h>0$, division by $h/2$ gives $K_2-K_1=hg+O(h^2)$. Substituting this into the defining formula for $P_n$ in [F1], and using $0\le\theta^2\le1$, gives $P_n(\theta)=y_n+\theta hK_1+\frac12\theta^2h^2g+O(h^3)$ uniformly in $\theta$. [F1, F2, algebra]

2.1 The uniform exact-path expansion in [F2] has the same first two terms as step 1.1, with an $O(h^3)$ remainder independent of $\theta$. Subtracting it from the expansion of $P_n(\theta)$ proves the asserted uniform estimate. [F2, step 1.1, algebra] ∎

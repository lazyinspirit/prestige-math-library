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
  - thm-chain-rule-for-total-derivatives
  - thm-multivariable-taylor-formula-with-lagrange-remainder
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
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter III, Exercise 10 (Dense output), printed p. 85"
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

[F2] [[thm-heun-euler-pair-local-orders-and-estimator]]: $K_2-K_1=hg+O(h^2)$ and the exact path has expansion $y(t_n+\theta h)=y_n+\theta hK_1+\frac12\theta^2h^2g+O(h^3)$ under the same derivative bounds, uniformly for $0\le\theta\le1$.

[F3] [[thm-chain-rule-for-total-derivatives]]: the derivative of a differentiable composition is the composition of total derivatives.

[F4] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: the bounded third derivatives give the uniform cubic remainder along every segment of length at most $h$.

## Proof

1.1 Substitute $K_2-K_1=hg+O(h^2)$ from [F2] and the identity $Y_H-Y_E=\frac h2(K_2-K_1)$ in [F1]. Since $0\le\theta^2\le1$, the stage remainder contributes at most a fixed constant times $h^3$, uniformly in $\theta$; hence $P_n(\theta)=y_n+\theta hK_1+\frac12\theta^2h^2g+O(h^3)$ uniformly. [F1, F2, algebra]

2.1 Put $F(s)=f(s,y(s))$. By [F3], $F$ is differentiable and $F\prime(t_n)=g$; the $C^2$ hypothesis on $f$ and the chain rule show $F\prime\prime$ is bounded on the short segment. Apply [F4] to $y$ with increment $\theta h$: its first two Taylor terms are $y_n+\theta hK_1+\frac12\theta^2h^2g$, and its third-order remainder is bounded by a common constant times $|\theta h|^3\le h^3$. Subtracting this expansion from step 1.1 gives the asserted uniform estimate. [F2, F3, F4, step 1.1, algebra] ∎

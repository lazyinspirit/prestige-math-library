---
id: thm-heun-euler-pair-local-orders-and-estimator
kind: theorem
title: "Local orders and leading estimator term for the Euler–Heun pair"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-heun-euler-embedded-runge-kutta-pair
  - def-one-step-ode-method-local-defect-order-and-stability
  - prop-embedded-pair-estimator-asymptotics
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
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter III, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 6"
      url: "https://fncbook.com/adaptive-rk/"
---

## Statement

Let $d\ge1$ and let $f$ be $C^2$ on an open neighborhood of a compact convex time-state set containing the initial point, the short exact solution segment, and the Euler stage points. Assume the first and second derivatives of $f$ are bounded there. For the exact solution $y'=f(t,y)$ starting from $y(t)=y_0$, put
$$g:=\partial_t f(t,y_0)+D_yf(t,y_0)f(t,y_0).$$
Here $\partial_t f$ is the time derivative and $D_yf$ is the Jacobian in the state variables. The notation $O(h^k)$ means a norm bounded by a constant times $h^k$ for sufficiently small positive $h$, uniformly over the compact starting set when stated. For all sufficiently small $h>0$, the Euler and Heun one-step values in [[def-heun-euler-embedded-runge-kutta-pair]] satisfy
$$Y_E-y(t+h)=-\tfrac12h^2g+O(h^3),\qquad Y_H-y(t+h)=O(h^3),\qquad Y_H-Y_E=\tfrac12h^2g+O(h^3).$$
For a family of starting points, assume one common $h_0>0$ for which all exact segments and stage points stay in the same neighborhood. Under this condition the estimates are uniform over the compact starting set because the derivative bounds are common. Thus Euler has local order one and Heun has local order at least two on that set. If $g\ne0$, the embedded norm estimates Euler's defect asymptotically with ratio one; when $g=0$, that ratio conclusion does not follow from these orders.

## Facts & Assumptions

**Given:** The smooth vector field and starting points in the Statement, and the Euler–Heun formulas in [[def-heun-euler-embedded-runge-kutta-pair]].

[F1] [[def-heun-euler-embedded-runge-kutta-pair]]: $K_1=f(t,y_0)$, $K_2=f(t+h,y_0+hK_1)$, $Y_E=y_0+hK_1$, and $Y_H=y_0+\frac h2(K_1+K_2)$.

[F2] [[def-one-step-ode-method-local-defect-order-and-stability]]: the local defect is one-step value minus the exact next value, and a uniform $O(h^{p+1})$ defect gives local order $p$.

[F3] [[thm-chain-rule-for-total-derivatives]]: the derivative of a differentiable composition is the composition of the total derivatives.

[F4] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: for a $C^{k+1}$ function on an open convex neighborhood, its degree-$k$ Taylor polynomial has a remainder bounded by the $(k+1)$st derivatives on the segment times a constant multiple of the segment length to power $k+1$.

[F5] [[prop-embedded-pair-estimator-asymptotics]]: if the low defect has a nonzero $h^{p+1}$ coefficient and the high defect is $O(h^{p+2})$, the difference norm divided by the low defect norm tends to one.

## Proof

1.1 Define $F(s):=f(s,y(s))$. By [F3], $F'(t)=g$. Since $f$ is $C^2$ and $y'=f(t,y)$, another application of [F3] shows $F'$ is continuously differentiable with bounded derivative on the short segment. Hence $y''=F'$ and $y'''=F''$ are bounded there. Apply the $k=2$ Taylor formula [F4] to each component of $y$; the common derivative bounds and finite dimension give a uniform vector remainder. This gives $y(t+h)=y_0+hK_1+\frac12h^2g+O(h^3)$. [given, F3, F4, algebra]

2.1 Apply the $k=1$ Taylor formula [F4] componentwise to $f$ at $(t,y_0)$ along the increment $(h,hK_1)$. Its linear term is $h\partial_t f+hD_yf K_1=hg$, and its second-derivative remainder is $O(h^2)$ uniformly by the boundedness assumption. Therefore $K_2=K_1+hg+O(h^2)$. Substitution into [F1] gives $Y_E=y_0+hK_1$ and $Y_H=y_0+hK_1+\frac12h^2g+O(h^3)$. [given, F1, F4, step 1.1, algebra]

3.1 Subtract the exact expansion in step 1.1 to obtain the two defect formulas and subtract the Euler output from the Heun output to obtain the estimator expansion. These are uniform $O(h^2)$ and $O(h^3)$ defect bounds, so [F2] gives the stated local orders. For $p=1$, the Euler defect coefficient is $-g/2$ and the Heun defect is $O(h^3)$; if $g\ne0$, [F5] gives the ratio-one conclusion. If $g=0$, both leading coefficients vanish and [F5] supplies no such inference. [F1, F2, F5, step 1.1, step 2.1, algebra] ∎

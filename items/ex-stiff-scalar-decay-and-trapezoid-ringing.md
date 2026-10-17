---
id: ex-stiff-scalar-decay-and-trapezoid-ringing
title: "Trapezoidal ringing on a stiff scalar decay equation"
kind: example
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-backward-euler-step-equation
  - prop-two-stage-sdirk-order-two-and-l-stability
  - prop-two-stage-radau-iia-order-three-and-l-stability
  - def-scalar-rk-a-and-l-stability
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 11: Stiffness"
      url: "https://fncbook.com/stiffness/"
      locator: "§11.4: stiffness and A-stability context for implicit methods; the example independently derives the scalar amplification factors."
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
      locator: "§III.9: implicit Euler, BDF stability, and Radau IIA."
---

## Facts & Assumptions

**Given:** The scalar decay equation $y'=-\lambda y$ with $\lambda>0$ and $h=100/\lambda$, so $\lambda h=100$.

[F1] [[def-scalar-rk-a-and-l-stability]]: for a scalar linear test equation, a Runge–Kutta step multiplies the state by its rational stability function evaluated at $z=h\lambda_{\mathrm{ODE}}$.

[F2] [[prop-two-stage-sdirk-order-two-and-l-stability]]: the SDIRK stability function is $R_S(z)=(1+(1-2\gamma)z)/(1-\gamma z)^2$, $\gamma=1-1/\sqrt2$, and is L-stable.

[F3] [[prop-two-stage-radau-iia-order-three-and-l-stability]]: the Radau IIA stability function is $R_R(z)=(1+z/3)/(1-2z/3+z^2/6)$, and is L-stable.

[F4] [[def-backward-euler-step-equation]]: backward Euler applied to $y'=-\lambda y$ has amplification factor $(1+h\lambda)^{-1}$.

## Proof


1.1 Here the test argument is $z=-\lambda h=-100$. The trapezoidal rule equation $y_{n+1}=y_n+\frac h2\bigl(-\lambda y_n-\lambda y_{n+1}\bigr)$ rearranges to the factor $R_{\mathrm{trap}}(-100)=\frac{1-100/2}{1+100/2}=-\frac{49}{51}.$ Thus, for $y_0\ne0$, successive trapezoidal values alternate sign, while the magnitude after each step is multiplied by $49/51\approx0.961$; for $y_0=0$, every iterate remains zero. [F1, algebra]

2.1 Backward Euler gives $R_{\mathrm{BE}}(-100)=1/101\approx0.00990$. The proved scalar functions give $R_S(-100)=\frac{1-100(1-2\gamma)}{(1+100\gamma)^2}\approx-0.0441,\qquad R_R(-100)=\frac{1-100/3}{1+200/3+10000/6}\approx-0.0186.$ Each L-stable method damps this stiff mode strongly at this step size; the trapezoidal factor instead changes sign and has magnitude near one. These are scalar linear-test calculations only and imply no nonlinear stability comparison. [F2, F3, F4, algebra] ∎

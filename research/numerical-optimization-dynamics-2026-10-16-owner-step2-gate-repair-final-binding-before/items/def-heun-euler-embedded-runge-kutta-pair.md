---
id: def-heun-euler-embedded-runge-kutta-pair
kind: definition
title: "Euler–Heun embedded Runge–Kutta pair"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-embedded-runge-kutta-pair-and-error-estimator]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter III, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 6"
      url: "https://fncbook.com/adaptive-rk/"
---

## Definition

For $y'=f(t,y)$, take the shared explicit stages
$$K_1=f(t_n,y_n),\qquad K_2=f(t_n+h,y_n+hK_1).$$
The Euler member is $Y_E=y_n+hK_1$ and the Heun explicit trapezoidal member is $Y_H=y_n+\frac h2(K_1+K_2)$. Their embedded difference is $Y_H-Y_E=\frac h2(K_2-K_1)$. The local orders are proved separately. In [[def-embedded-runge-kutta-pair-and-error-estimator]] notation, the common tableau has $c=(0,1)$, $A_{21}=1$, high weights $(1/2,1/2)$ and low weights $(1,0)$.

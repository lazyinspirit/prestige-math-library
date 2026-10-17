---
id: def-heun-quadratic-dense-output
kind: definition
title: "Quadratic continuous extension for Heun's method"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-heun-euler-embedded-runge-kutta-pair]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, Exercise 10 (Dense output), printed p. 85"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Ernst Hairer, Ordinary Differential Equations, lecture notes, Exercise 10"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
---

## Definition

For one Heun step from $(t_n,y_n)$ of size $h$ with stages $K_1,K_2$ as in [[def-heun-euler-embedded-runge-kutta-pair]], define its quadratic continuous extension for $0\le\theta\le1$ by
$$P_n(\theta):=y_n+h\left(\theta K_1+\tfrac12\theta^2(K_2-K_1)\right).$$
It has $P_n(0)=y_n$ and $P_n(1)=Y_H$, the accepted Heun endpoint. It is a separate within-step approximation; its order is analyzed independently of the endpoint order.

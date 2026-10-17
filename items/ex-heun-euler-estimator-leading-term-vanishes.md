---
id: ex-heun-euler-estimator-leading-term-vanishes
kind: example
title: "The leading Euler–Heun estimator coefficient can vanish"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-heun-euler-embedded-runge-kutta-pair
  - prop-embedded-pair-estimator-asymptotics
  - thm-heun-euler-pair-local-orders-and-estimator
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 6"
      url: "https://fncbook.com/adaptive-rk/"
---

## Example

Apply the Euler–Heun pair to $y'=t^2$, $y(0)=0$, on one step of size $h>0$. The low-order defect begins at order $h^3$, not $h^2$, so the embedded difference is not asymptotically equal to the low-order defect in ratio.

## Facts & Assumptions

**Given:** The field $f(t,y)=t^2$, initial time and value $t_0=y_0=0$, and $h>0$.

[F1] [[def-heun-euler-embedded-runge-kutta-pair]]: $K_1=f(0,0)$, $K_2=f(h,hK_1)$, $Y_E=hK_1$, and $Y_H=\frac h2(K_1+K_2)$.

[F2] [[thm-heun-euler-pair-local-orders-and-estimator]]: the local error expansions compare each one-step value with the exact endpoint.

[F3] [[prop-embedded-pair-estimator-asymptotics]]: a ratio-one conclusion requires a nonzero leading low-defect coefficient.

## Verification

1.1 Here $K_1=0$ and $K_2=h^2$, so $Y_E=0$ and $Y_H=h^3/2$. Since $y(h)=\int_0^h t^2dt=h^3/3$, the Euler defect is $-h^3/3$, the Heun defect is $h^3/6$, and the embedded estimator is $|Y_H-Y_E|=h^3/2$. [given, F1, F2, algebra]

2.1 The Euler defect has zero coefficient at order $h^2$ and the estimator-to-Euler-defect ratio is $(h^3/2)/(h^3/3)=3/2$ for every $h>0$. This concrete case shows why [F3] requires a nonzero leading coefficient before asserting ratio one. [F1, F3, step 1.1, algebra] ∎

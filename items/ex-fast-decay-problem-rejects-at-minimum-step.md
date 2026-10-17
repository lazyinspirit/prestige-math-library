---
id: ex-fast-decay-problem-rejects-at-minimum-step
kind: example
title: "A fast-decay test problem is rejected at the minimum step"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-bounded-adaptive-runge-kutta-controller
  - def-heun-euler-embedded-runge-kutta-pair
  - thm-bounded-adaptive-runge-kutta-controller-terminates
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

Run the Euler–Heun controller on the scalar fast-decay equation $y'=-1000y$, $y(0)=1$, with $T=0.004$, $h_{\min}=0.002$, $h_{\max}=h_0=0.004$, $\mathrm{atol}=10^{-4}$, $\mathrm{rtol}=0$, and attempt budget $N=2$, $p=1$, safety $\sigma=0.9$, and scale factors $\gamma_{\min}=0.2$, $\gamma_{\max}=5$. The computed pair difference rejects both attempted steps, so the procedure stops at its minimum-step safeguard. This scalar fast-decay equation is used as a stiffness illustration: the calculation verifies repeated rejection of this explicit trial only, and gives no general stiffness diagnosis.

## Facts & Assumptions

**Given:** The scalar field $f(y)=-1000y$, starting value $1$, trial sizes $0.004$ and $0.002$, and controller parameters in the Example.

[F1] [[def-heun-euler-embedded-runge-kutta-pair]]: $K_1=f(y_n)$, $K_2=f(y_n+hK_1)$, $Y_E=y_n+hK_1$, and $Y_H=y_n+\frac h2(K_1+K_2)$.

[F2] [[alg-bounded-adaptive-runge-kutta-controller]]: reject if $Q>1$, scale by $\max(\gamma_{\min},\min(\gamma_{\max},\sigma Q^{-1/(p+1)}))$, clamp the next proposal to the step bounds, and return `minimum-step-rejected` for a rejection at $h_{\min}$.

[F3] [[thm-bounded-adaptive-runge-kutta-controller-terminates]]: this finite-budget controller reaches a terminal status after finitely many attempts.

[F4] [[thm-heun-euler-pair-local-orders-and-estimator]]: the Euler–Heun pair has low order $p=1$.

## Verification

1.1 At $h=0.004$, $K_1=-1000$, the Euler stage value is $-3$, and $K_2=3000$. Thus $Y_E=-3$, $Y_H=5$, the difference magnitude is $8$, and $Q=8/10^{-4}=80000>1$. The proposed scale is clamped to $0.2$, so the next step is $\max(0.002,0.2\cdot0.004)=0.002$. [given, F1, F2, F4, algebra]

2.1 At $h=0.002$, $K_1=-1000$, the Euler stage value is $-1$, and $K_2=1000$. Thus $Y_E=-1$, $Y_H=1$, the difference magnitude is $2$, and $Q=20000>1$. This rejection occurs at $h_{\min}$, so [F2] returns `minimum-step-rejected`; finite termination is also covered by [F3]. [F1, F2, F3, F4, step 1.1, algebra] ∎

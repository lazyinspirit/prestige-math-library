---
id: ex-below-roundoff-tolerance-breaks-embedded-estimate
kind: example
title: "A tolerance below roundoff can pass with a zero embedded difference"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-bounded-adaptive-runge-kutta-controller
  - def-heun-euler-embedded-runge-kutta-pair
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
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter III, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 6"
      url: "https://fncbook.com/adaptive-rk/"
---

## Example

Use the toy binary format whose nonzero representable numbers are $\pm m2^e$ with integer $e$ and $m\in\{4,5,6,7\}$ (three significant bits), rounded to nearest with ties to an even significand. The next larger representable value after $8=4\cdot2$ is $10=5\cdot2$, so their midpoint $9$ rounds to $8$ because $4$ is even and $5$ is odd. Apply a rounded Euler–Heun implementation to $y'=1$, $y(0)=8$ on $[0,1]$, with one step $h=1$, $h_{\min}=h_{\max}=h_{\rm init}=1$, attempt budget $N=1$, $\mathrm{atol}=1/4$, $\mathrm{rtol}=0$, safety $0.9$, and scale bounds $0.2$ and $5$. Both computed endpoints round to $8$; the stored difference is zero and the step is accepted, although the exact endpoint is $9$ and the actual error is $1$.

This example concerns the rounded realization described in [[alg-bounded-adaptive-runge-kutta-controller]]. It does not contradict its exact-arithmetic specification and shows why that acceptance test is not a certificate.

## Facts & Assumptions

**Given:** The toy format and rounding rule in the Example, field $f(y)=1$, initial state $8$, and controller tolerance parameters.

[F1] [[def-heun-euler-embedded-runge-kutta-pair]]: both pair members use $K_1=f(y_n)$ and $K_2=f(y_n+hK_1)$, with Euler and Heun weighted endpoints.

[F2] [[alg-bounded-adaptive-runge-kutta-controller]]: a rounded realization uses stored high and low outputs in the difference and accepts when the scaled difference $Q\le1$.

[F3] [[thm-heun-euler-pair-local-orders-and-estimator]]: for this pair the low member is order $p=1$, which is the controller exponent input.

## Verification

1.1 The two stages evaluate to $K_1=K_2=1$; each exact endpoint formula is $8+1=9$. By the specified tie rule, the Euler endpoint rounds to $8$ and the Heun endpoint also rounds to $8$. Hence the stored difference is $0$ and the scaled error is $Q=0/(1/4)=0\le1$, so the rounded controller accepts. [given, F1, F2, F3, algebra]

2.1 The exact solution is $y(t)=8+t$, so $y(1)=9$. The accepted stored endpoint is $8$, giving absolute error $|9-8|=1>1/4=\mathrm{atol}$. Thus the embedded difference can be zero while the actual error exceeds the requested tolerance. [given, step 1.1, algebra] ∎

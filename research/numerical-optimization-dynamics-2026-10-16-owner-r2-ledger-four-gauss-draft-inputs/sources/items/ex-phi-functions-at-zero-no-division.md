---
id: ex-phi-functions-at-zero-no-division
kind: example
title: Phi functions at zero require no matrix division
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - cor-vector-valued-ftc-and-lipschitz-bound
  - def-first-order-ode-initial-value-problem-and-solution
  - def-phi-functions-by-everywhere-convergent-series
  - lem-phi-series-converges-absolutely
  - def-exponential-euler-and-etd2-step-maps
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jitse Niesen and Will M. Wright, A Krylov Subspace Algorithm for Evaluating the Phi-Functions Appearing in Exponential Integrators, arXiv:0907.4631v2"
      url: "https://arxiv.org/pdf/0907.4631"
      locator: "§2, integral definition and recurrence (1)–(2), PDF p. 3."
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010)"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§1, equations (1.5)–(1.6), and §2.3, second-order two-stage formula, PDF pp. 3–4 and 17–18."
---

## Statement

For $A=0$, $g(t,y)=t$, $y(0)=0$, and a step $h>0$, compute the exponential-Euler and ETD2 steps directly from the series values $\varphi_1(0)=1$ and $\varphi_2(0)=1/2$. The ETD2 step is exact, while exponential Euler returns zero.

## Facts & Assumptions

**Given:** The scalar IVP and exact method maps of [[def-exponential-euler-and-etd2-step-maps]].

[F1] [[def-phi-functions-by-everywhere-convergent-series]] and [[lem-phi-series-converges-absolutely]]: at zero, $\varphi_1(0)=1$, $\varphi_2(0)=1/2$, and $e^0=1$, directly from the convergent series.

[F2] [[def-exponential-euler-and-etd2-step-maps]]: the ETD2 predictor is exponential Euler and its correction uses $\varphi_1-\varphi_2$ and $\varphi_2$.

[F3] [[def-first-order-ode-initial-value-problem-and-solution]] and [[cor-vector-valued-ftc-and-lipschitz-bound]]: a solution of $y'=t$ is differentiable and its endpoint change is the integral of its derivative.

## Verification

1.1 By [F3], the exact solution is $y(t)=\int_0^t s\,ds=t^2/2$, so $y(h)=h^2/2$. [given, F3, algebra]

2.1 Since $A=0$, $e^{hA}=1$ and $g(0,y(0))=0$. The exponential-Euler step is therefore $0+h\varphi_1(0)0=0$, and its predictor for ETD2 is also $a=0$. [F1, F2, step 1.1, algebra]

3.1 At the ETD2 endpoint, $g(h,a)=h$. Its update is $0+h(\varphi_1(0)-\varphi_2(0))0+h\varphi_2(0)h=h^2/2$, which equals the exact value from step 1.1. This calculation evaluates $\varphi_k(0)$ from the series and never divides by $A$ or its eigenvalues. [F1, F2, step 1.1, step 2.1, algebra] ∎

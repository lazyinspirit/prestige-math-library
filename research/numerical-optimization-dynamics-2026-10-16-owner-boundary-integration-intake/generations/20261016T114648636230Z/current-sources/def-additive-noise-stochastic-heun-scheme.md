---
id: def-additive-noise-stochastic-heun-scheme
kind: definition
title: "Explicit stochastic Heun update for additive noise"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-continuous-brownian-ito-process
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "M. Tretyakov, Lecture Notes for a Mini-Course on Numerical Methods for SDEs, Section 7.3, PDF pp. 41-42"
      url: "https://www.math.chalmers.se/~cohend/MT2016/LNminicourseSDEv1.pdf"
    - title: "Kloeden and Platen, Numerical Solution of Stochastic Differential Equations, Chapters 14.5 and 15.1, printed pp. 474-480 and 485-487"
      url: "https://stevencjxie8.com/files/refs/ref7.pdf"
---

## Definition

Assume AC and the Brownian filtered-space conventions in [[def-continuous-brownian-ito-process]]. Consider the scalar additive-noise It\^o SDE
$$dX_t=b(X_t)\,dt+\sigma\,dW_t,$$
where $\sigma\in\mathbb R$ is constant. Given a step size $h>0$, a grid value $Y_n$, and the Brownian increment $\Delta W_n=W_{t_{n+1}}-W_{t_n}$, the explicit stochastic Heun update is the two-stage rule
$$Z_n=Y_n+b(Y_n)h+\sigma\Delta W_n,\qquad Y_{n+1}=Y_n+\frac h2\bigl(b(Y_n)+b(Z_n)\bigr)+\sigma\Delta W_n.$$
The predictor $Z_n$ uses the same increment as the corrector. One step evaluates $b$ at $Y_n$ and $Z_n$ and uses one Gaussian increment. The weak order-two guarantee authored in this pair is only for this constant-diffusion scheme; the displayed update omits terms required for the corresponding multiplicative-noise guarantee.

In this definition and its consumers, $C_b^k(\mathbb R;\mathbb R)$ means that the function and all its derivatives through order $k$ are continuous and bounded.

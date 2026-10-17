---
id: ex-diagonal-stiff-diffusion-with-reaction-etd
kind: example
title: A diagonal stiff diffusion step with linear reaction
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - cor-vector-valued-ftc-and-lipschitz-bound
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
  - def-exponential-euler-and-etd2-step-maps
  - alg-certified-exponential-euler-etd2-step
  - def-phi-functions-by-everywhere-convergent-series
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-derivative-of-exponential
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - def-matrix-product-and-identity-matrix
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
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010)"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§1, equations (1.5)–(1.6), and §2.3, Example 2.18, PDF pp. 3–4 and 17–18."
    - title: "ISEM Team 2011/12, Operator Semigroups for Numerical Analysis, 15th Internet Seminar on Evolution Equations"
      url: "https://fan.uni-wuppertal.de/fileadmin/mathe/reine_mathematik/funktionalanalysis/farkas/15ISEM-NumerSgrp.pdf"
      locator: "Lecture 14, §14.4, Examples 14.9–14.10, PDF pp. 166–167."
---

## Statement

Take $A=\operatorname{diag}(-1,-1000)$, $g(y)=\mathbf 1-y$, $y(0)=0$, and $h=10^{-3}$. Compute the exact first-step state and the exponential-Euler and ETD2 first-step states, showing how the diagonal linear diffusion is exponentiated while the reaction is approximated.

## Facts & Assumptions

**Given:** The finite-dimensional ODE, initial state, step size, and exact step maps from [[def-exponential-euler-and-etd2-step-maps]].

[F1] [[def-exponential-euler-and-etd2-step-maps]]: exponential Euler is $e^{hA}y+h\varphi_1(hA)g(y)$, while ETD2 uses the predictor $a_h$ and the $\varphi_1-\varphi_2,\varphi_2$ correction.

[F2] [[def-phi-functions-by-everywhere-convergent-series]]: $\varphi_k(X)=\sum_{j\ge0}X^j/(j+k)!$, so the matrix functions used at finite arguments are defined by convergent series.

[F3] [[thm-derivative-of-exponential]]: the real exponential is differentiable with $(e^t)'=e^t$.

[F4] [[cor-vector-valued-ftc-and-lipschitz-bound]]: integrating a continuous derivative from $0$ to $h$ gives the endpoint change.

[F5] [[cor-exponential-reciprocal-and-positivity]]: $e^x>0$ and $e^{-x}=1/e^x$ for every real $x$.

[F6] [[thm-algebra-of-derivatives]]: products of differentiable real-valued functions obey the product rule.

[F7] [[thm-chain-rule]]: the derivative of $e^{a t}$ is $a e^{a t}$ for a fixed real $a$.

[F8] [[def-matrix-product-and-identity-matrix]]: powers of a diagonal matrix are diagonal with the corresponding scalar powers on the diagonal.

[A1] The displayed $g$ is componentwise, $g_i(y)=1-y_i$.

## Verification

1.1 For coordinate $i$ with $\lambda_i\in\{1,1000\}$, put $a=\lambda_i+1>0$. The exact equation is $y_i'=-ay_i+1$, $y_i(0)=0$. The product rule [F6] and chain rule [F7] show $(e^{at}y_i(t))'=e^{at}$. Integrating by [F4] gives $e^{ah}y_i(h)=\int_0^h e^{as}\,ds=(e^{ah}-1)/a$, since [F3], [F7] give antiderivative $e^{as}/a$. Dividing by the positive exponential using [F5] yields $y_i(h)=(1-e^{-ah})/a$. [given, A1, F3, F4, F5, F6, F7, algebra]

2.1 By [F8], powers of $A=\operatorname{diag}(-\lambda_i)$ are diagonal with entries $(-\lambda_i)^j$, so the series [F2] evaluates the matrix phi functions coordinatewise. The exact exponential-Euler map has $e^{-\lambda_i h}y_i(0)=0$ and reaction value $g_i(0)=1$, so its coordinate is $h\varphi_1(-\lambda_i h)$. The ETD2 predictor has that same coordinate; hence $g_i(a)=1-h\varphi_1(-\lambda_i h)$ and the ETD2 coordinate is $h[(\varphi_1(-\lambda_i h)-\varphi_2(-\lambda_i h))+\varphi_2(-\lambda_i h)(1-h\varphi_1(-\lambda_i h))]=h(\varphi_1(-\lambda_i h)-h\varphi_1(-\lambda_i h)\varphi_2(-\lambda_i h))$. [F1, F2, F8, step 1.1, algebra]

3.1 In particular the stiff coordinate uses $\lambda_2h=1$: its exact, exponential-Euler, and ETD2 values are respectively $(1-e^{-1.001})/1001$, $10^{-3}\varphi_1(-1)$, and $10^{-3}(\varphi_1(-1)-10^{-3}\varphi_1(-1)\varphi_2(-1))$. All exponential and phi actions are at explicit matrix/scalar arguments; any numerical implementation must return the certificates specified by [[alg-certified-exponential-euler-etd2-step]]. [F1, F2, F8, step 1.1, step 2.1, algebra] ∎

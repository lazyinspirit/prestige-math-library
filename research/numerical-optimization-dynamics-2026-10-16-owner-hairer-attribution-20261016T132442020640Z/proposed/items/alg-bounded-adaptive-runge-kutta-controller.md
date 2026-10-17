---
id: alg-bounded-adaptive-runge-kutta-controller
kind: algorithm
title: "Finite-budget adaptive Runge–Kutta controller"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-abs-value
  - def-embedded-runge-kutta-pair-and-error-estimator
  - def-first-order-ode-initial-value-problem-and-solution
  - def-max-min
  - thm-nth-roots-exist
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, §§III.2–III.4"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 6"
      url: "https://fncbook.com/adaptive-rk/"
---

## Definition

Inputs are an IVP in the sense of [[def-first-order-ode-initial-value-problem-and-solution]], $y'=f(t,y)$ on an open domain $D\subseteq\mathbb R\times\mathbb R^d$ with initial data $(t_0,y_0)\in D$ and requested interval $[t_0,T]$, where $t_0\le T$ and $d\ge1$; an initial proposal $0<h_{\rm init}\le h_{\max}$; an embedded pair with low order $p\ge1$ as in [[def-embedded-runge-kutta-pair-and-error-estimator]]; tolerances $\mathrm{atol}>0$ and $\mathrm{rtol}\ge0$; safety $0<\sigma<1$; scale bounds $0<\gamma_{\min}\le1\le\gamma_{\max}$; step bounds $0<h_{\min}\le h_{\max}$; and a positive integer attempt budget $N$.

**Output.** Return a record consisting of one of `success`, `failure`, `minimum-step-rejected`, or `attempt-budget-exhausted`, together with the accepted mesh $\mathcal A=((t_0,y_0),\ldots,(t_m,y_m))$. The mesh always contains the initial pair and every accepted endpoint; on `success`, $t_m=T$ and $y_m$ is the returned endpoint approximation. On any other status, $\mathcal A$ is the accepted prefix and $y_m$ is the last accepted approximation.

**Procedure.** Initialize $t:=t_0$, $y:=y_0$, $\mathcal A:=((t_0,y_0))$, and proposal $h_{\rm prop}:=h_{\rm init}$. If $t_0=T$, return `success` with $\mathcal A$. For each attempt index $k=1,\ldots,N$, perform exactly the following steps:

1. Set $h:=\min(h_{\rm prop},h_{\max},T-t)$. The last term permits a final clipped step shorter than $h_{\min}$. If $h\le0$ before reaching $T$, return `failure` with $\mathcal A$.
2. Evaluate the shared stages in tableau order, checking before each evaluation that its time-state input lies in $D$. If a stage input is outside $D$, its evaluation is undefined, or its value is nonfinite, return `failure` with $\mathcal A$. Compute both pair outputs; if either output or any arithmetic needed to compute them is undefined, fails, or is nonfinite in the rounded realization, return `failure` with $\mathcal A$.
3. Define $s_i:=\mathrm{atol}+\mathrm{rtol}\max(|(y)_i|,|(Y)_i|)$ and $Q:=\max_i |(\widehat Y-Y)_i|/s_i$, where $Y$ is the high-order value and $\widehat Y$ the low-order value. If any scale or $Q$ operation fails or is nonfinite in the rounded realization, return `failure` with $\mathcal A$. If $Q\le1$, first check $(t+h,Y)\in D$; if not, return `failure` with $\mathcal A$. Otherwise accept: set $t:=t+h$, $y:=Y$, and append $(t,y)$ to $\mathcal A$. If $Q>1$, reject and retain $t,y,\mathcal A$.
4. If the attempt was accepted and $t=T$, return `success` with $\mathcal A$. Otherwise, if it was rejected and $h\le h_{\min}$, return `minimum-step-rejected` with $\mathcal A$. These terminal checks precede the budget check, so a final accepted step that reaches $T$ succeeds and a rejection at the minimum step reports that safeguard.
5. If $k=N$, return `attempt-budget-exhausted` with $\mathcal A$. Otherwise compute
$$g=\begin{cases}\gamma_{\max},&Q=0,\\ \min(\gamma_{\max},\max(\gamma_{\min},\sigma /\sqrt[p+1]{Q})),&Q>0.\end{cases}$$
Set $h_{\rm prop}:=\min(h_{\max},\max(h_{\min},gh))$ and continue to attempt $k+1$. A failed or nonfinite rounded computation of $g$ or $h_{\rm prop}$ returns `failure` with $\mathcal A$.

For $Q>0$, $\sqrt[p+1]{Q}$ is the unique positive $(p+1)$st root supplied by [[thm-nth-roots-exist]]. The exponent $1/(p+1)$ is a leading-error model for step selection; neither acceptance nor this controller is a global error certificate or a stiffness test.

The mathematical specification evaluates each displayed operation, including maximum, minimum, absolute value, and positive-root evaluation, exactly. A rounded implementation instead applies its fixed finite-format rounding rule to every stage, output, scale, and controller-factor arithmetic operation and uses the resulting stored high and low values in the displayed difference and acceptance test; nonfinite or failed operations return `failure`. The finite termination theorem applies to either realization when each attempt has finite work. The rounded realization has no a posteriori guarantee: a tolerance below its resolution can be accepted because both stored values coincide.

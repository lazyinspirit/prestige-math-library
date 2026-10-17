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
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter III, §§III.2–III.4"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 6"
      url: "https://fncbook.com/adaptive-rk/"
---

## Definition

Inputs are an initial value problem on $[t_0,T]$ with $t_0\le T$ and states in $\mathbb R^d$ for an integer $d\ge1$, an initial proposal $0<h_{\rm init}\le h_{\max}$, an embedded pair with low order $p\ge1$ as in [[def-embedded-runge-kutta-pair-and-error-estimator]], initial value $y_0$, tolerances $\mathrm{atol}>0$ and $\mathrm{rtol}\ge0$, safety $0<\sigma<1$, scale bounds $0<\gamma_{\min}\le1\le\gamma_{\max}$, step bounds $0<h_{\min}\le h_{\max}$, and a positive integer attempt budget $N$.

Set the first proposal to $h_0=h_{\rm init}$. At an accepted-step state $(t_n,y_n)$, choose trial size $h=\min(h_n,h_{\max},T-t_n)$. If $T-t_n=0$, return `success`. If $h=0$ before reaching $T$, or any stage evaluation is undefined/nonfinite, return `failure`. Compute both pair outputs. Define the component scale $s_i=\mathrm{atol}+\mathrm{rtol}\max(|(y_n)_i|,|Y_i|)$ and scaled norm $Q=\max_i |(\widehat Y-Y)_i|/s_i$. If $Q\le1$, accept $Y$: set $t_{n+1}=t_n+h$, $y_{n+1}=Y$. Otherwise reject and retain $(t_n,y_n)$. In either case compute the model factor
$$g=\begin{cases}\gamma_{\max},&Q=0,\\ \min(\gamma_{\max},\max(\gamma_{\min},\sigma /\sqrt[p+1]{Q})),&Q>0.\end{cases}$$
Set next proposal to $\min(h_{\max},\max(h_{\min},g h))$. If an attempted step was rejected with $h\le h_{\min}$ (including a final clipped step shorter than $h_{\min}$), return `minimum-step-rejected`; if the $N$th attempt ends without reaching $T$, return `attempt-budget-exhausted`. Before an accepted step, if its remaining distance to $T$ is smaller than $h_{\min}$, the final clipped step is permitted. For $Q>0$, $\sqrt[p+1]{Q}$ is the unique positive $(p+1)$st root supplied by [[thm-nth-roots-exist]]. The exponent $1/(p+1)$ is a leading-error model for step selection; neither acceptance nor this controller is a global error certificate or a stiffness test.

The mathematical specification evaluates each displayed operation, including maximum, minimum, absolute value, and positive-root evaluation, exactly. A rounded implementation instead applies its fixed finite-format rounding rule to every stage, output, scale, and controller-factor arithmetic operation and uses the resulting stored high and low values in the displayed difference and acceptance test; nonfinite or failed operations return `failure`. The finite termination theorem applies to either realization when each attempt has finite work. The rounded realization has no a posteriori guarantee: a tolerance below its resolution can be accepted because both stored values coincide.

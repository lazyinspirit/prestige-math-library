---
id: def-embedded-runge-kutta-pair-and-error-estimator
kind: definition
title: "Embedded Runge–Kutta pair and difference estimator"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-euclidean-inner-product
  - def-explicit-runge-kutta-tableau-and-stage-map
  - def-one-step-ode-method-local-defect-order-and-stability
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

For an ODE $y'=f(t,y)$ on states in $\mathbb R^d$ with $d\ge1$, two explicit Runge–Kutta weight vectors $b=(b_i)_{i=1}^s$ and $\widehat b=(\widehat b_i)_{i=1}^s$ are an **embedded pair** when they use the same explicit stage recursion
$$K_i=f\!\left(t_n+c_i h,\ y_n+h\sum_{j<i}a_{ij}K_j\right),\qquad 1\le i\le s,$$
but produce two one-step values
$$Y=y_n+h\sum_{i=1}^s b_iK_i,\qquad \widehat Y=y_n+h\sum_{i=1}^s\widehat b_iK_i.$$
The two methods are the **high** and **low** members when their local orders are respectively at least $p+1$ and $p$, for an integer $p\ge1$. Their **embedded difference estimator** is the nonnegative scalar
$$E_n(h):=\|\widehat Y-Y\|_2,$$
with the Euclidean norm. This definition asserts only how the estimator is computed; its reliability as a bound for either local defect is a separate claim and is not part of the definition.

The stage recursion and the local defect sign convention are those of [[def-explicit-runge-kutta-tableau-and-stage-map]] and [[def-one-step-ode-method-local-defect-order-and-stability]].

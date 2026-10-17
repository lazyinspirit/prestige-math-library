---
id: alg-rkc2-linear-chebyshev
kind: algorithm
title: "Second-order linear stabilized Runge–Kutta–Chebyshev step"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-chebyshev-polynomials-first-and-second-kind
  - def-explicit-runge-kutta-tableau-and-stage-map
  - def-first-order-ode-initial-value-problem-and-solution
  - def-linear-map
  - def-one-step-ode-method-local-defect-order-and-stability
  - def-vector-space-of-linear-maps
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ibrahim Almuslimani and Gilles Vilmart, Explicit Stabilized Integrators for Stiff Optimal Control Problems, §2.2.2"
      url: "https://www.unige.ch/~vilmart/paper_optimal_control_alm_vil.pdf"
    - title: "B.P. Sommeijer, L.F. Shampine, and J.G. Verwer, RKC: An explicit solver for parabolic PDEs, §2"
      url: "https://ir.cwi.nl/pub/109/0109D.pdf"
---

## Definition

Input a finite-dimensional real vector space $V$, a linear endomorphism $A:V\to V$, an initial vector $y\in V$, a step $h>0$, and an integer stage count $s\ge2$. Each application of $A$ is the exact value of this total linear map, so this mathematical procedure has no application-failure branch. Define
$$w_1=\frac{3}{s^2-1},\qquad b_s=\frac{s^2-1}{3s^2},\qquad a_s=1-b_s.$$
Set $V_0=y$ and $V_1=V_0+w_1hA(V_0)$. For $j=2,\ldots,s$, compute
$$V_j=2V_{j-1}+2w_1hA(V_{j-1})-V_{j-2}.$$
Return $a_sV_0+b_sV_s$. Each stage uses one application of $A$; no implicit system is solved. The output is the one-step update for the autonomous linear equation $y'=Ay$. Here $T_s$ denotes the Chebyshev polynomial defined by [[def-chebyshev-polynomials-first-and-second-kind]]; the equivalent polynomial in $hA$ and its certified real stability interval are proved separately.


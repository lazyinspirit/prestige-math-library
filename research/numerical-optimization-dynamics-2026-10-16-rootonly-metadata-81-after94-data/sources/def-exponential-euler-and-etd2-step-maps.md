---
id: def-exponential-euler-and-etd2-step-maps
kind: definition
title: Exponential Euler and the two-stage ETD2 step maps
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-first-order-ode-initial-value-problem-and-solution
  - def-phi-functions-by-everywhere-convergent-series
  - lem-phi-series-converges-absolutely
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010)"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§1, equations (1.5)–(1.6), PDF pp. 3–4; §2.3, Example 2.18, equations (2.38)–(2.40), PDF pp. 17–18, printed pp. 226–227."
    - title: "ISEM Team 2011/12, Operator Semigroups for Numerical Analysis, 15th Internet Seminar on Evolution Equations"
      url: "https://fan.uni-wuppertal.de/fileadmin/mathe/reine_mathematik/funktionalanalysis/farkas/15ISEM-NumerSgrp.pdf"
      locator: "Lecture 14, §14.4, Examples 14.9–14.10, PDF pp. 166–167, printed pp. 171–172."
verification:
  precheck: n/a
---

## Definition

Let $d\ge1$, $A\in M_d(\mathbb C)$, $g:[0,T]\times U\to\mathbb C^d$, and $t\ge0$, $h>0$ with $t+h\le T$. The inputs $y$ and all displayed stages must lie in $U$. The functions $\varphi_k(hA)$ are the finite-matrix series of [[def-phi-functions-by-everywhere-convergent-series]], whose convergence is supplied by [[lem-phi-series-converges-absolutely]].

The **exponential Euler map** is
$$\Psi^{E}_h(t,y):=e^{hA}y+h\varphi_1(hA)g(t,y).$$

For the two-stage **exponential time-differencing Runge–Kutta map ETD2**, first form the exponential Euler predictor
$$a_h(t,y):=e^{hA}y+h\varphi_1(hA)g(t,y),$$
and then set
$$\Psi^{2}_h(t,y):=e^{hA}y+h\bigl(\varphi_1(hA)-\varphi_2(hA)\bigr)g(t,y)+h\varphi_2(hA)g(t+h,a_h(t,y)).$$
These are exact mathematical step maps; an implementation must separately account for every approximate matrix-function action and arithmetic error.

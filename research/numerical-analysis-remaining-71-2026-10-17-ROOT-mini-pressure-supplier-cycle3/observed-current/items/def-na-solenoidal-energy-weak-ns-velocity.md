---
id: def-na-solenoidal-energy-weak-ns-velocity
kind: definition
title: "Solenoidal energy weak velocity for incompressible Navier–Stokes"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-na-evolutionary-incompressible-ns-weak-solution, def-na-stokes-zero-mean-pressure-and-velocity-spaces, def-na-evolutionary-skew-convective-form, def-countable-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element approximation of unsteady flows of implicitly constituted incompressible fluids, arXiv:1804.02264v1"
      url: https://arxiv.org/pdf/1804.02264
      locator: "§2.1, solenoidal weak formulation and energy class"
    - title: "Xiaoming He, Introduction and Basic Implementation for Finite Element Methods, Chapter 9: Finite elements for 2D unsteady Navier–Stokes equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: "§1, pp. 3–13, divergence-free tests in the weak velocity equation"
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice as inherited from [[def-na-evolutionary-incompressible-ns-weak-solution]]. Let $D$, $V$, $Q$, $V_\sigma$, $H_\sigma$, $a_\nu$, and $c$ be as in [[def-na-evolutionary-incompressible-ns-weak-solution]]; the Stokes velocity and pressure spaces are $V=H^1_0(D)^d$ and $Q=L^2_0(D)$ as specified in [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]]. For $f\in L^2(0,T;L^2(D)^d)$ and $u_0\in H_\sigma$, a **solenoidal energy weak velocity** is a velocity $u\in L^\infty(0,T;H_\sigma)\cap L^2(0,T;V_\sigma)$ that is weakly continuous into $H_\sigma$, satisfies $\operatorname{div}u=0$ almost everywhere, and obeys the scalar-test weak equation
$$-\int_0^T(u(t),v)_{L^2}\eta'(t)\,dt+\int_0^T\big(a_\nu(u(t),v)+c(u(t);u(t),v)\big)\eta(t)\,dt=\int_0^T(f(t),v)_{L^2}\eta(t)\,dt+(u_0,v)_{L^2}\eta(0)$$
for every fixed $v\in V_\sigma$ and $\eta\in C^1([0,T])$ vanishing near $T$. It also satisfies, for almost every $t\in(0,T)$,
$$\frac12\|u(t)\|_{L^2}^2+\nu\int_0^t\|\nabla u(s)\|_{L^2}^2\,ds\le\frac12\|u_0\|_{L^2}^2+\int_0^t(f(s),u(s))_{L^2}\,ds.$$
This solenoidal definition does not itself assert a pressure exists in $L^{4/3}(0,T;L^2_0(D))$; that is a separate regularity conclusion.

---
id: def-na-evolutionary-incompressible-ns-weak-solution
kind: definition
title: "Energy weak solutions of incompressible Navier–Stokes"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-na-stokes-zero-mean-pressure-and-velocity-spaces, def-na-evolutionary-skew-convective-form, def-pe12-gelfand-triple, def-countable-choice]
justified_by: [lem-na-evolutionary-ns-weak-form-is-well-defined]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element approximation of unsteady flows of implicitly constituted incompressible fluids, arXiv:1804.02264v1"
      url: https://arxiv.org/pdf/1804.02264
      locator: "§2.1, weak solution of incompressible flow on a bounded Lipschitz polytopal domain in dimensions two and three."
    - title: "Xiaoming He, Introduction and Basic Implementation for Finite Element Methods, Chapter 9: Finite elements for 2D unsteady Navier–Stokes equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: "§1, pp. 3–13: weak velocity-pressure formulation and homogeneous Dirichlet test space."
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice, as in the Stokes-space conventions of [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]]. Let $D\subset\mathbb R^d$ be a nonempty bounded connected Lipschitz domain, $d\in\{2,3\}$, and fix $0<T<\infty$ and $\nu>0$. Use $V=H^1_0(D;\mathbb R^d)$ and $Q=L^2_0(D)$ from [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], the viscosity form $a_\nu(v,w)=2\nu\int_D\varepsilon(v):\varepsilon(w)$, and the form $c$ from [[def-na-evolutionary-skew-convective-form]]. Set
$$V_\sigma=\{v\in V:\operatorname{div}v=0\text{ in }L^2(D)\},\qquad H_\sigma=\overline{V_\sigma}^{\,L^2(D)}.$$
For $f\in L^2(0,T;L^2(D;\mathbb R^d))$ and $u_0\in H_\sigma$, an **energy weak solution** is a velocity $u\in L^\infty(0,T;H_\sigma)\cap L^2(0,T;V_\sigma)$, weakly continuous into $H_\sigma$, and a pressure $p\in L^{4/3}(0,T;Q)$ with zero spatial mean a.e., such that $\operatorname{div}u=0$ a.e. and, for every $\varphi\in C^1([0,T];V)$ vanishing near $T$,
$$-\int_0^T(u,\partial_t\varphi)_{L^2}\,dt+\int_0^T\big(a_\nu(u,\varphi)+c(u;u,\varphi)+b(\varphi,p)\big)\,dt=\int_0^T(f,\varphi)_{L^2}\,dt+(u_0,\varphi(0))_{L^2}.$$
It also satisfies, for almost every $t\in(0,T)$,
$$\frac12\|u(t)\|_{L^2}^2+\nu\int_0^t\|\nabla u(s)\|_{L^2}^2\,ds\le\frac12\|u_0\|_{L^2}^2+\int_0^t(f(s),u(s))_{L^2}\,ds.$$
No uniqueness is included in this definition. The formulation uses the real duality convention of [[def-pe12-gelfand-triple]].

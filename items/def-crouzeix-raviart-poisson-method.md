---
id: def-crouzeix-raviart-poisson-method
kind: definition
title: The Crouzeix–Raviart method for the homogeneous Poisson problem
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-countable-choice
  - def-crouzeix-raviart-global-space
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - lem-crouzeix-raviart-simplex-traces-and-green-identity
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "§§36.1–36.2.3, equations (36.2)–(36.11), PDF pp. 1–5."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 247–315: second Strang setting, CR space, broken form, and consistency."
---

## Definition

Assume Countable Choice. Let $\Omega$ and $\mathcal T$ be as in
[[def-crouzeix-raviart-global-space]], let $V:=H^1_0(\Omega)$, let
$V_h:=V_h^{CR,0}$, and let $f\in L^2(\Omega)$. The exact Poisson form and
load are
$$a(u,v):=\int_\Omega\nabla u\cdot\nabla v\,dx,\qquad F(v):=\int_\Omega f v\,dx\quad (u,v\in V).$$
An exact solution is a $u\in V$ satisfying $a(u,v)=F(v)$ for every $v\in V$.
For $v_h,w_h\in V_h$, define the broken form and discrete load by
$$a_h(v_h,w_h):=\sum_{K\in\mathcal T}\int_K\nabla v_h\cdot\nabla w_h\,dx, \qquad F_h(w_h):=\int_\Omega f w_h\,dx.$$
The discrete problem is to find $u_h\in V_h$ such that
$a_h(u_h,w_h)=F_h(w_h)$ for every $w_h\in V_h$.

Put $X_h:=V+V_h$. For each cell facet $F\subset\partial K$, let
$\gamma_{F,K}$ denote the trace supplied by
[[lem-crouzeix-raviart-simplex-traces-and-green-identity]].
For $z\in X_h$ and $w_h\in V_h$, define the comparison-space extension
$$\widetilde a_h(z,w_h):=\sum_{K\in\mathcal T}\int_K \nabla(z|_K)\cdot\nabla w_h\,dx.$$
Each restriction $z|_K$ belongs to $H^1(K)$, and this extension agrees with
$a_h$ when $z\in V_h$.

On an interior facet
$F=K^+\cap K^-$ choose either ordering and define
$[z]_F:=\gamma_{F,K^+}z-\gamma_{F,K^-}z$; on a boundary facet of $K$ set
$[z]_F:=\gamma_{F,K}z$. The mesh-dependent comparison expression is
$$\|z\|_{\sharp,h}^2:= \sum_{K\in\mathcal T}\|\nabla(z|_K)\|_{L^2(K)}^2+ \sum_{F\in\mathcal F^\circ\cup\mathcal F^\partial} h_F^{-1}\|[z]_F\|_{L^2(F)}^2,\qquad z\in X_h.$$
The next items prove the required definiteness, stability, and consistency
properties; this definition makes no assertion that $V_h\subset V$.

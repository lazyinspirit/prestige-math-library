---
id: def-sipdg-bilinear-form-and-energy-norm
kind: definition
title: Symmetric interior-penalty DG form and energy seminorm
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  [
    def-matching-affine-simplicial-meshes,
    def-sipdg-jump-average-convention,
    def-broken-and-conforming-polynomial-spaces,
    def-sobolev-space-wkp-and-its-norm,
    lem-sipdg-physical-simplex-trace-green,
    def-countable-choice
  ]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 38:
        Discontinuous Galerkin"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap38.pdf"
      locator: "§38.2.1–38.2.2, printed pp. 192–195: SIP bilinear form, gamma_0/h_F
        penalty, and broken energy norm."
    - title: "Douglas N. Arnold, Franco Brezzi, Bernardo Cockburn, and L. Donatella
        Marini, Unified Analysis of Discontinuous Galerkin Methods for Elliptic
        Problems, SIAM Journal on Numerical Analysis 39(5) (2002)"
      url: "https://www.math.purdue.edu/~santos/research/disc_galerkin_ref/siam_DG_20\
        02.pdf"
      locator: "§§3.2–3.3, printed pp. 1757–1759: primal formulation, consistency, and
        adjoint consistency."
verification: { precheck: n/a }
---

## Definition

Assume Countable Choice for the Sobolev notation below. Each cell $K$ is the closed simplex from [[def-matching-affine-simplicial-meshes]]; in $W^{m,2}(K)$ notation, $K$ means its open interior, and its facets are the boundary faces of that interior. Write $H^m(K):=W^{m,2}(K;\mathbb R)$ for $m=1,2$. Use the mesh and jump convention of [[def-sipdg-jump-average-convention]]. Specialize [[def-broken-and-conforming-polynomial-spaces]] to scalar real polynomials of a fixed degree $k\ge1$, so $V_h^{\rm br}=\prod_{K\in\mathcal T}\mathbb P_k(K;\mathbb R)$. On every cell $K$, let $A_K\in\mathbb R^{d\times d}$ be a constant symmetric matrix. Assume common bounds $0<\lambda\le\Lambda<\infty$ such that
$$\lambda|\xi|^2\le \xi^TA_K\xi\le\Lambda|\xi|^2\qquad(\xi\in\mathbb R^d,\ K\in\mathcal T).$$
Write $A|_K=A_K$, let $h_F:=\operatorname{diam}(F)>0$, and fix a penalty parameter $\gamma>0$. Define $\mathcal D_h$ to consist of broken real-valued functions $v$ with $v|_K\in H^1(K)$, distributional $\operatorname{div}(A_K\nabla v|_K)\in L^2(K)$, and an $L^2(F)$ one-sided normal coefficient-flux trace $r_{K,F}(v)$ on every facet $F$ of each cell $K$. Precisely, $r_{K,F}(v)$ is the unique $L^2(F)$ function satisfying
$$\int_K A_K\nabla v\cdot\nabla\phi+\operatorname{div}(A_K\nabla v)\,\phi\,dx=\sum_{F\subset\partial K}\int_F r_{K,F}(v)\,\gamma_F\phi\,dS\qquad(\phi\in C^\infty(\overline K)).$$
Here $\gamma_F\phi$ is the value trace from [[lem-sipdg-physical-simplex-trace-green]]; uniqueness follows by testing smooth functions supported near the relative interior of each facet, whose restrictions are dense in $L^2(F)$. If $F=K^-\cap K^+$ and $n_F$ points outward from $K^-$, set $q_F(v):=\tfrac12(r_{K^-,F}(v)-r_{K^+,F}(v))$; on a boundary facet set $q_F(v):=r_{K,F}(v)$ with the outward normal. These definitions agree with $\{A\nabla_hv\}_F\cdot n_F$ whenever the classical one-sided vector flux traces exist. Broken polynomials and cellwise $H^2$ functions belong to $\mathcal D_h$ by [[lem-sipdg-physical-simplex-trace-green]]. For $v,w\in\mathcal D_h$, define
$$a_h(v,w):=\sum_{K\in\mathcal T}\int_K A_K\nabla v\cdot\nabla w\,dx-\sum_{F\in\mathcal F_h}\int_F q_F(v)[w]_F\,dS-\sum_{F\in\mathcal F_h}\int_F q_F(w)[v]_F\,dS+\gamma\sum_{F\in\mathcal F_h}h_F^{-1}\int_F[v]_F[w]_F\,dS,$$
All facet integrals and $L^2(F)$ norms use $(d-1)$-dimensional surface measure for the stated mesh dimension $d\ge2$. Counting measure is reserved for the separate one-dimensional interval examples in [[def-sipdg-jump-average-convention]]. The expression is real and symmetric.

Define the energy expression and its augmented version on $\mathcal D_h$ by
$$\|v\|_{DG}^2:=\sum_{K\in\mathcal T}\int_K A_K\nabla v\cdot\nabla v\,dx+\gamma\sum_{F\in\mathcal F_h}h_F^{-1}\|[v]_F\|_{L^2(F)}^2,$$
$$\|v\|_{DG,*}^2:=\|v\|_{DG}^2+\sum_{F\in\mathcal F_h}h_F\|q_F(v)\|_{L^2(F)}^2.$$
The first expression is initially a seminorm on $V_h^{\rm br}$; its definiteness is not part of this definition. The stated Sobolev notation follows [[def-sobolev-space-wkp-and-its-norm]]. Cellwise $H^2$ functions have the required value and normal coefficient-flux traces by [[lem-sipdg-physical-simplex-trace-green]], because $A_K$ is constant. The augmented expression is defined whenever $v\in\mathcal D_h$, so it applies in particular to the exact functions, dual functions and discrete polynomials used below.

For $f\in L^2(\Omega)$ define the discrete load $\ell_h(w):=\sum_{K\in\mathcal T}\int_K f w\,dx$. A symmetric interior-penalty DG solution is a function $u_h\in V_h^{\rm br}$ satisfying $a_h(u_h,w_h)=\ell_h(w_h)$ for every $w_h\in V_h^{\rm br}$.

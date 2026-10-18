---
id: def-nitsche-boundary-penalty-forms
kind: definition
title: Symmetric and nonsymmetric Nitsche boundary forms
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    def-nitsche-restriction-bessel-potential-sobolev-spaces,
    lem-nitsche-fractional-face-trace-on-simplex,
    lem-nitsche-h-one-zero-functions-have-zero-facet-traces,
    def-matching-affine-simplicial-meshes,
    def-broken-and-conforming-polynomial-spaces,
    thm-matching-continuous-piecewise-polynomials-are-wkp,
    def-sobolev-space-wkp-and-its-norm,
    def-wkp-zero-as-a-sobolev-closure,
    def-countable-choice
  ]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary
        penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary
        conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice. Let $d\ge2$, let $\Omega\subset\mathbb R^d$ be a nonempty bounded connected polyhedral open set, and let $\mathcal T_h$ be a finite matching affine simplicial mesh of $\Omega$ as in [[def-matching-affine-simplicial-meshes]]. Fix a polynomial degree $k\ge1$. Let $V_h$ be the real scalar conforming polynomial space of [[def-broken-and-conforming-polynomial-spaces]], viewed as a subspace of $H^1(\Omega)$ by [[thm-matching-continuous-piecewise-polynomials-are-wkp]], and let $Y_h:=V_h\cap H^1_0(\Omega)$, where $H^1_0$ is the closure convention of [[def-wkp-zero-as-a-sobolev-closure]]; [[lem-nitsche-h-one-zero-functions-have-zero-facet-traces]] proves its facet-trace consequence. Boundary facets form $\mathcal F_h^\partial$. If $F\in\mathcal F_h^\partial$, let $K_F$ be its unique incident cell, $n_F$ its outward unit normal, $|F|$ its $(d-1)$-dimensional measure, and set $h_F:=|K_F|/|F|>0$. For functions with a defined boundary normal trace write $\partial_n v:=\nabla v\cdot n_F$ on $F$.

Let $\mathcal X_h$ consist of $v\in H^1(\Omega)$ such that for every cell $K$ there is $s_K>1/2$ with $v|_K\in H^{1+s_K}(K)$. By [[lem-nitsche-fractional-face-trace-on-simplex]], $v$ has an $L^2(F)$ trace on each facet, and each component of $\nabla(v|_K)$ is in $H^{s_K}(K)$, hence has an $L^2(F)$ trace by the same lemma; the derivative mapping follows from $|\xi_j|\langle\xi\rangle^{s_K}\le\langle\xi\rangle^{1+s_K}$ in the Bessel-potential norm. Thus $\partial_n v$ and all displayed integrals are defined. In particular, $V_h\subseteq\mathcal X_h$ and the exact/adjoint functions in the later regularity hypotheses lie in $\mathcal X_h$. For a dimensionless penalty coefficient $\gamma_0\ge0$ and symmetry parameter $\theta\in\{0,1\}$, define the same bilinear formula on $\mathcal X_h\times\mathcal X_h$:
$$a_h^\theta(v,w):=\int_\Omega\nabla v\cdot\nabla w\,dx-\sum_{F\in\mathcal F_h^\partial}\int_F(\partial_n v)w\,dS-\theta\sum_{F\in\mathcal F_h^\partial}\int_Fv(\partial_n w)\,dS+\gamma_0\sum_{F\in\mathcal F_h^\partial}h_F^{-1}\int_Fvw\,dS.$$
For $f\in L^2(\Omega)$ and boundary data $g$ with the displayed integrals finite, define
$$\ell_h^\theta(w_h):=\int_\Omega f w_h\,dx-\theta\sum_{F\in\mathcal F_h^\partial}\int_Fg(\partial_n w_h)\,dS+\gamma_0\sum_{F\in\mathcal F_h^\partial}h_F^{-1}\int_Fg w_h\,dS.$$
The **nonsymmetric Nitsche form** is $a_h^0$; it has the consistency flux in the trial slot only. The **symmetric Nitsche form** is $a_h^1$; it has both transposed consistency fluxes. The discrete weak-boundary problem is the standard Nitsche method when $\gamma_0>0$: it seeks $u_h\in V_h$ such that $a_h^\theta(u_h,w_h)=\ell_h^\theta(w_h)$ for every $w_h\in V_h$. This extension makes expressions such as $a_h^\theta(u,w_h)$ and $a_h^\theta(e,\zeta-z_h)$ well-defined when the exact and adjoint functions have the stated cellwise regularity. The boundary penalty is $\gamma_0/h_F$; $h_F$ is the cell-face height divided by $d$, not the face diameter. The zero value $\gamma_0=0$ is used only for the penalty-free algebraic comparison.

The energy seminorm and the comparison seminorm used below are
$$\|v\|_{E,h}^2:=\|\nabla v\|_{L^2(\Omega)}^2+\sum_{F\in\mathcal F_h^\partial}h_F^{-1}\|v\|_{L^2(F)}^2,\qquad \|v\|_{\#,h}^2:=\|v\|_{E,h}^2+\sum_{F\in\mathcal F_h^\partial}h_F\|\partial_n v\|_{L^2(F)}^2.$$
These expressions are used only on functions for which their volume and facet traces are defined. The parameter $\theta$ fixes the sign convention; no convention based on a reciprocal small stabilization parameter is implicit.

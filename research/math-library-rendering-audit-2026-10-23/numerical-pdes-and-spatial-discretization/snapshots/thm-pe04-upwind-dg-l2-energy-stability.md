---
id: thm-pe04-upwind-dg-l2-energy-stability
kind: theorem
title: Upwind DG transport satisfies the semidiscrete L2 energy identity
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-pe04-upwind-dg-transport-discretization
  - def-pe04-one-dimensional-interval-mesh-and-broken-polynomials
  - def-matching-affine-simplicial-meshes
  - lem-affine-simplex-gauss-green-formula
  - lem-oriented-facet-cancellation-on-matching-meshes
  - def-countable-choice
  - cor-vector-valued-ftc-and-lipschitz-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Bernardo Cockburn, An Introduction to the Discontinuous Galerkin Method for Convection-Dominated Problems, CIME lecture notes"
      url: "https://www-users.cse.umn.edu/~bcockbur/lecture_notes/DG-1.pdf"
      locator: "§§3.2–3.4, printed pp. 161–164: weak DG form, upwind flux, and linear stability analysis."
    - title: "Bernardo Cockburn and Chi-Wang Shu, Runge–Kutta Discontinuous Galerkin Methods for Convection-Dominated Problems, Journal of Scientific Computing 16 (2001)"
      url: "https://helper.ipam.ucla.edu/publications/pcatut2005/pcatut_5473_reprint2.pdf"
      locator: "§2.1, printed pp. 184–187: linear transport upwind DG and L2 stability."
---

## Statement

Let $d\ge1$. If $d=1$, let $\mathcal T_h$ be a finite oriented interval mesh of $\Omega=(a,b)$, $a<b$, from [[def-pe04-one-dimensional-interval-mesh-and-broken-polynomials]]; if $d\ge2$, let $\mathcal T_h$ be a finite matching affine simplicial mesh of $\Omega$. Let $\beta\in\mathbb R^d$ be constant, and let $u_h$ solve [[def-pe04-upwind-dg-transport-discretization]] with inflow data $g$. Assume Countable Choice when $d\ge2$, as required by the affine-simplex Green supplier; no choice assumption is needed for the interval branch. Write $\Gamma_+=\{x\in\partial\Omega:\beta\cdot n>0\}$ and $\Gamma_- =\{x\in\partial\Omega:\beta\cdot n<0\}$. For an interior facet $F=K^-\cap K^+$ choose a unit normal $n_F$ from $K^-$ to $K^+$ and write $[u_h]=u_h^+-u_h^-$. In dimension one, integrals over facets and boundary points mean sums with respect to zero-dimensional surface measure. Then
$$\frac12\frac{d}{dt}\sum_{K\in\mathcal T_h}\|u_h\|_{L^2(K)}^2+\frac12\sum_{F\text{ interior}}\int_F|\beta\cdot n_F|[u_h]^2\,dS+\frac12\int_{\Gamma_+}(\beta\cdot n)u_h^2\,dS+\frac12\int_{\Gamma_-}|\beta\cdot n|(u_h-g)^2\,dS=\frac12\int_{\Gamma_-}|\beta\cdot n|g^2\,dS.$$
The equality is understood in $\mathbb R\cup\{+\infty\}$. It is a finite energy balance whenever $\int_{\Gamma_-}|\beta\cdot n|g^2\,dS<\infty$ at the time in question; otherwise both sides are $+\infty$ and give no finite inflow bound. In particular, zero inflow data give a nonincreasing semidiscrete $L^2$ norm. This result is semidiscrete and makes no claim about a time integrator.

## Facts & Assumptions

**Given:** The upwind DG weak form with constant $\beta$, either the oriented interval mesh or the matching affine simplicial mesh according to $d$, smooth cellwise polynomial states, and the stated inflow trace. Assume Countable Choice only for the affine-simplex branch.

[F1] [[def-pe04-upwind-dg-transport-discretization]]: on each cell, $(\partial_tu_h,v)_K-(\beta u_h,\nabla v)_K+\sum_{F\subset\partial K}\langle (\beta\cdot n_{K,F})\widehat u_{K,F},v\rangle_F=0$.

[F2] When $d\ge2$, [[lem-affine-simplex-gauss-green-formula]] gives $\int_K\operatorname{div}G=\sum_{F\subset\partial K}\int_FG\cdot n_{K,F}$ for $G\in C^1(\overline K;\mathbb R^d)$.

[F3] [[cor-vector-valued-ftc-and-lipschitz-bound]]: for a continuously differentiable function on a closed interval, the integral of its derivative is the difference of its endpoint values.

[F4] For $d\ge2$, [[lem-oriented-facet-cancellation-on-matching-meshes]] says every interior facet of a matching affine mesh occurs twice with opposite induced orientations.

[F5] [[def-pe04-one-dimensional-interval-mesh-and-broken-polynomials]]: adjacent interval cells have opposite outward normals at their common endpoint.

[A1] [[def-countable-choice]]: Countable Choice is used only for [F2] on the $d\ge2$ branch; it is not needed in dimension one.

## Proof

1.1 In the DG equation on each cell take $v=u_h$. The time term is $\frac12\frac{d}{dt}\|u_h\|_{L^2(K)}^2$. When $d\ge2$, since $\beta$ is constant, $-\int_K\beta u_h\cdot\nabla u_h=-\frac12\int_K\operatorname{div}(\beta u_h^2)=-\frac12\sum_{F\subset\partial K}\int_F(\beta\cdot n_{K,F})u_h^2$ by [F2] and [A1]. When $d=1$ and $K=(x_{j-1},x_j)$, [F3] gives the same endpoint identity $-\int_K\beta u_h\,\partial_xu_h=-\frac12\sum_{e\in\partial K}(\beta n_{K,e})u_h(e)^2$. Sum over cells; [F4] pairs opposite normals on each interior facet for $d\ge2$, and [F5] gives opposite normals at every shared interval endpoint. [given, F1, F2, F3, F4, F5, A1, algebra]

2.1 Fix an interior facet oriented from $K^-$ to $K^+$ and put $b=\beta\cdot n_F$. The two face terms from step 1.1 and the two upwind numerical-flux terms combine to $-\frac b2((u^-)^2-(u^+)^2)+b\widehat u(u^--u^+)$. If $b>0$, then $\widehat u=u^-$ and this is $\frac b2(u^+-u^-)^2$; if $b<0$, then $\widehat u=u^+$ and this is $\frac{|b|}{2}(u^+-u^-)^2$. For $b=0$ it vanishes. This scalar calculation also applies to the single endpoint quadrature in dimension one. [F1, step 1.1, algebra]

2.2 On an outflow boundary face, $b=\beta\cdot n>0$ and $\widehat u=u_h$, so the volume and flux terms combine to $\frac b2u_h^2$. On an inflow face, $b<0$ and $\widehat u=g$, so they combine to $\frac{|b|}{2}u_h^2-|b|gu_h=\frac{|b|}{2}(u_h-g)^2-\frac{|b|}{2}g^2$. Faces with $b=0$ contribute zero. [F1, step 1.1, algebra]

3.1 If $\int_{\Gamma_-}|\beta\cdot n|g^2\,dS<\infty$, all boundary terms in step 2.2 are integrable, since the polynomial traces are bounded on the finitely many bounded facets. Substituting steps 2.1 and 2.2 into the tested DG sum gives the finite displayed identity. If that inflow integral is infinite, the inequality $g^2\le2(g-u_h)^2+2u_h^2$ and finiteness of the weighted polynomial-trace integral force $\int_{\Gamma_-}|\beta\cdot n|(u_h-g)^2\,dS=+\infty$; the displayed identity then reads $+\infty=+\infty$, without subtracting infinite integrals. For $g=0$ all dissipation terms are nonnegative and the finite identity proves the stability statement. [given, step 2.1, step 2.2, algebra] ∎

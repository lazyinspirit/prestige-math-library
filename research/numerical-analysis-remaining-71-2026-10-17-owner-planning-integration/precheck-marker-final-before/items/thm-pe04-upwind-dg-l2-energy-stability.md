---
id: thm-pe04-upwind-dg-l2-energy-stability
kind: theorem
title: Upwind DG transport satisfies the semidiscrete L2 energy identity
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-pe04-upwind-dg-transport-discretization
  - def-matching-affine-simplicial-meshes
  - lem-affine-simplex-gauss-green-formula
  - lem-oriented-facet-cancellation-on-matching-meshes
  - def-countable-choice
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
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

Let $d\ge2$, let $\Omega$ have a finite matching affine simplicial mesh, let $\beta\in\mathbb R^d$ be constant, and let $u_h$ solve [[def-pe04-upwind-dg-transport-discretization]] with inflow data $g$. Assume Countable Choice, as required by the affine-simplex Green supplier. Write $\Gamma_+=\{x\in\partial\Omega:\beta\cdot n>0\}$ and $\Gamma_- =\{x\in\partial\Omega:\beta\cdot n<0\}$. For an interior facet $F=K^-\cap K^+$ choose a unit normal $n_F$ from $K^-$ to $K^+$ and write $[u_h]=u_h^+-u_h^-$. Then
$$\frac12\frac{d}{dt}\sum_{K\in\mathcal T_h}\|u_h\|_{L^2(K)}^2+\frac12\sum_{F\text{ interior}}\int_F|\beta\cdot n_F|[u_h]^2\,dS+\frac12\int_{\Gamma_+}(\beta\cdot n)u_h^2\,dS+\frac12\int_{\Gamma_-}|\beta\cdot n|(u_h-g)^2\,dS=\frac12\int_{\Gamma_-}|\beta\cdot n|g^2\,dS.$$
In particular, zero inflow data give a nonincreasing semidiscrete $L^2$ norm. This result is semidiscrete and makes no claim about a time integrator.

## Facts & Assumptions

**Given:** The upwind DG weak form with constant $\beta$, matching affine cells, smooth cellwise polynomial states, and the stated inflow trace. Assume Countable Choice for the imported simplex Green identity.

[F1] [[def-pe04-upwind-dg-transport-discretization]]: on each cell, $(\partial_tu_h,v)_K-(\beta u_h,\nabla v)_K+\sum_{F\subset\partial K}\langle (\beta\cdot n_{K,F})\widehat u_{K,F},v\rangle_F=0$.

[F2] [[lem-affine-simplex-gauss-green-formula]]: for $G\in C^1(\overline K;\mathbb R^d)$, $\int_K\operatorname{div}G=\sum_{F\subset\partial K}\int_FG\cdot n_{K,F}$.

[F3] [[lem-oriented-facet-cancellation-on-matching-meshes]]: every interior facet occurs twice with opposite induced orientations.

[A1] [[def-countable-choice]]: Countable Choice is available for the use of [F2]; no stronger choice principle is used.

## Proof

1.1 In the DG equation on each cell take $v=u_h$. The time term is $\frac12\frac{d}{dt}\|u_h\|_{L^2(K)}^2$. Since $\beta$ is constant, $-\int_K\beta u_h\cdot\nabla u_h=-\frac12\int_K\operatorname{div}(\beta u_h^2)=-\frac12\sum_{F\subset\partial K}\int_F(\beta\cdot n_{K,F})u_h^2$ by [F2] and [A1]. Sum over cells; [F3] pairs the two opposite normals on each interior facet. [given, F1, F2, F3, A1, algebra]

2.1 Fix an interior facet oriented from $K^-$ to $K^+$ and put $b=\beta\cdot n_F$. The two face terms from step 1.1 and the two upwind numerical-flux terms combine to $-\frac b2((u^-)^2-(u^+)^2)+b\widehat u(u^--u^+)$. If $b>0$, then $\widehat u=u^-$ and this is $\frac b2(u^+-u^-)^2$; if $b<0$, then $\widehat u=u^+$ and this is $\frac{|b|}{2}(u^+-u^-)^2$. For $b=0$ it vanishes. [F1, step 1.1, algebra]

2.2 On an outflow boundary face, $b=\beta\cdot n>0$ and $\widehat u=u_h$, so the volume and flux terms combine to $\frac b2u_h^2$. On an inflow face, $b<0$ and $\widehat u=g$, so they combine to $\frac{|b|}{2}u_h^2-|b|gu_h=\frac{|b|}{2}(u_h-g)^2-\frac{|b|}{2}g^2$. Faces with $b=0$ contribute zero. [F1, step 1.1, algebra]

3.1 Substituting the interior contribution from step 2.1 and the boundary contributions from step 2.2 into the sum of the tested DG equations gives the displayed identity. All terms on the left after the time derivative are nonnegative; setting $g=0$ proves the final stability statement. [step 2.1, step 2.2, algebra] ∎

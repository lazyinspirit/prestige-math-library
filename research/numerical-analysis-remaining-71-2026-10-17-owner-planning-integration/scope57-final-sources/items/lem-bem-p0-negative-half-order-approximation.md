---
id: lem-bem-p0-negative-half-order-approximation
kind: lemma
title: P0 averages approximate smooth densities in H negative one half
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-bem-lipschitz-polyhedral-boundary-and-trace-spaces, def-bem-surface-mesh-and-piecewise-constant-density-space, lem-bem-surface-fractional-norm-equivalence, cor-poincare-wirtinger-on-convex-domains, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: The Axiom of Choice is inherited from the convex-domain Poincare–Wirtinger inequality.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.3, PDF pp. 6–8: piecewise constant spaces on surface triangulations and approximation context."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§2, printed pp. 615–616: the H^{-1/2} energy norm and conforming finite-dimensional boundary spaces."
---

## Statement

Let $\{\mathcal T_h\}$ be a shape-regular family of conforming surface triangulations of $\Gamma$ from [[def-bem-surface-mesh-and-piecewise-constant-density-space]], and let $h=\max_{T\in\mathcal T_h}h_T$. For $v\in L^1(\Gamma)$ define the element-average projection
$$\Pi_hv|_T=|T|^{-1}\int_Tv\,ds.$$
There is a family-independent constant $C$ such that
$$\|v-\Pi_hv\|_{L^2(\Gamma)}\le Ch^{1/2}\|v\|_{H^{1/2}(\Gamma)}\qquad(v\in H^{1/2}(\Gamma)).$$
If $\lambda$ is continuously differentiable on each planar face (with facewise derivatives square integrable), then
$$\|\lambda-\Pi_h\lambda\|_{H^{-1/2}(\Gamma)}\le Ch^{3/2}\|\nabla_\Gamma\lambda\|_{L^2(\Gamma)}.$$
Here $\nabla_\Gamma\lambda$ is the ordinary two-dimensional gradient on each planar face; no continuity of these derivatives across edges is assumed.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), the fixed chart norm on $H^{1/2}(\Gamma)$, the conforming shape-regular triangle family, and the real dual norm on $H^{-1/2}(\Gamma)$.

[A1] The Axiom of Choice is required by the Poincare–Wirtinger supplier ([[def-axiom-of-choice]]).

[F1] The chart Bessel norm is equivalent to the surface chordal norm with seminorm $\int_\Gamma\int_\Gamma|v(x)-v(y)|^2|x-y|^{-3}ds_xds_y$ ([[lem-bem-surface-fractional-norm-equivalence]]).

[F2] On a bounded convex domain, subtracting the mean satisfies the Poincare–Wirtinger inequality with a constant proportional to its diameter ([[cor-poincare-wirtinger-on-convex-domains]], [[def-axiom-of-choice]]).

[F3] Each $T$ contains a disk of radius $\rho_T$, and the element average has zero mean error on $T$ ([[def-bem-surface-mesh-and-piecewise-constant-density-space]]).

## Proof


1.1 For a triangle $T$, write $v_T=|T|^{-1}\int_Tv$. Expanding the square and using Fubini gives $\int_T|v-v_T|^2ds=\frac1{2|T|}\int_T\int_T|v(x)-v(y)|^2ds_xds_y.$ For $x,y\in T$, $|x-y|\le h_T$, so the right side is at most $h_T^3(2|T|)^{-1}$ times the local chordal seminorm on $T\times T$. By [F3] and shape regularity, $|T|\ge\pi\rho_T^2\ge c h_T^2$, so $h_T^3/|T|\le Ch_T\le Ch$. Sum over the disjoint triangles and use [F1]; this proves $\|v-\Pi_hv\|_{L^2}^2\le Ch\|v\|_{H^{1/2}}^2$. [F1, F3, given, algebra]

1.2 For facewise $C^1$ $\lambda$, apply [F2] on each planar triangle, which is convex, to obtain $\|\lambda-\Pi_h\lambda\|_{L^2(T)}\le Ch_T\|\nabla_\Gamma\lambda\|_{L^2(T)}$. Squaring and summing yields $\|\lambda-\Pi_h\lambda\|_{L^2(\Gamma)}\le Ch\|\nabla_\Gamma\lambda\|_{L^2(\Gamma)}$. [A1, F2, F3, given, algebra]

2.1 Put $e=\lambda-\Pi_h\lambda$. For any $w\in H^{1/2}(\Gamma)$, [F3] gives $\int_Te\,ds=0$, hence $\int_\Gamma ew\,ds=\sum_T\int_Te(w-w_T)\,ds.$ Cauchy–Schwarz over the finite element sum, step 1.2 for $e$, and step 1.1 for $w$ give $|\langle e,w\rangle|\le \|e\|_{L^2}\|w-\Pi_hw\|_{L^2}\le Ch^{3/2}\|\nabla_\Gamma\lambda\|_{L^2}\|w\|_{H^{1/2}}.$ Taking the supremum over $\|w\|_{H^{1/2}}\le1$ proves the negative-half-order estimate. [F3, step 1.1, step 1.2, given, algebra] ∎


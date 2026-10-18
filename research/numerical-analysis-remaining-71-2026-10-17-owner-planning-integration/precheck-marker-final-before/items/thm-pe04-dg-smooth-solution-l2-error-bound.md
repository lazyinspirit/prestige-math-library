---
id: thm-pe04-dg-smooth-solution-l2-error-bound
kind: theorem
title: Smooth-solution L2 error bound for upwind DG transport
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-pe04-upwind-dg-transport-discretization
  - def-pe04-cellwise-l2-projection
  - lem-pe04-cellwise-l2-projection-exists-best-approximation
  - def-matching-affine-simplicial-meshes
  - lem-affine-simplex-gauss-green-formula
  - lem-oriented-facet-cancellation-on-matching-meshes
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
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
      locator: "§§3.6 and 3.16, printed pp. 165–169 and 189–200: the linear DG projection, consistency, upwind dissipation, and complete error-estimate appendix; the exact trace-residual estimate here is proved locally."
    - title: "Bernardo Cockburn and Chi-Wang Shu, Runge–Kutta Discontinuous Galerkin Methods for Convection-Dominated Problems, Journal of Scientific Computing 16 (2001)"
      url: "https://helper.ipam.ucla.edu/publications/pcatut2005/pcatut_5473_reprint2.pdf"
      locator: "§2.1, printed pp. 184–187: local DG weak form and L2-projection initial data."
---

## Statement

Let $d\ge2$, let $\mathcal T_h$ be a finite matching affine simplicial mesh, let $\beta\in\mathbb R^d$ be constant, and let $u\in C^1([0,T]\times\overline\Omega)$ solve $u_t+\beta\cdot\nabla u=0$ with inflow data equal to its boundary trace. Assume Countable Choice for the imported affine-simplex Green identity and the full-support fact for Lebesgue measure. Let $u_h$ be the semidiscrete upwind DG solution of degree $p\ge0$, and let $\Pi_h$ be the cellwise L2 projection with respect to Lebesgue measure on each cell. Use $\|w\|_{L^2(\Omega)}^2=\sum_K\int_K|w|^2\,dx$ and put $\eta=\Pi_hu-u$. For an interior face with chosen normal $n_F$, let $\eta^{\mathrm{up}}$ be the trace of $\eta$ from the upwind side, and define
$$R_h(t)^2=\sum_{F\text{ interior}}\int_F|\beta\cdot n_F|\,|\eta^{\mathrm{up}}|^2\,dS+\int_{\Gamma_+}(\beta\cdot n)|\eta|^2\,dS.$$
Then
$$\|u_h(T)-u(T)\|_{L^2(\Omega)}\le\left(\|u_h(0)-\Pi_hu(0)\|_{L^2(\Omega)}^2+2\int_0^TR_h(t)^2\,dt\right)^{1/2}+\|\Pi_hu(T)-u(T)\|_{L^2(\Omega)}.$$
This is an exact projection-trace residual bound. It asserts no mesh-order rate unless the displayed projection errors are separately estimated.

## Facts & Assumptions

**Given:** The constant-coefficient transport equation, the upwind DG weak form, matching affine cells, a smooth exact solution whose inflow trace equals the supplied data, and the cellwise L2 projection. Assume Countable Choice only for the affine-simplex Green supplier.

[F1] [[def-pe04-upwind-dg-transport-discretization]]: $u_h$ satisfies the displayed elementwise weak DG equation with the upwind trace and the given inflow data.

[F2] [[def-pe04-cellwise-l2-projection]]: $(u-\Pi_Ku,w)_{L^2(K)}=0$ for every $w\in\mathbb P_p(K)$.

[F3] [[lem-affine-simplex-gauss-green-formula]]: $\int_K\operatorname{div}G\,dx=\sum_{F\subset\partial K}\int_FG\cdot n_{K,F}\,dS$ for a $C^1$ vector field $G$.

[F4] [[lem-oriented-facet-cancellation-on-matching-meshes]]: every interior facet has two incident cells with opposite outward normals.

[F5] [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]: under Countable Choice, every Euclidean ball of positive radius has positive finite Lebesgue measure.

[F6] [[def-matching-affine-simplicial-meshes]]: every cell is a nondegenerate affine simplex with nonempty Euclidean interior.

[F7] [[lem-pe04-cellwise-l2-projection-exists-best-approximation]]: positive measure on every nonempty relatively open subset makes the cellwise L2 projection exist uniquely.

[A1] [[def-countable-choice]]: Countable Choice is used only through [F3] and [F5].

## Proof

1.1 Multiplying the exact PDE by $w\in\mathbb P_p(K)$ and integrating by parts with [F3] gives its weak equation; the exact inflow trace is $g$ and the outflow trace is the exact upwind trace. [given, F3, A1, algebra]

1.2 Because each cell is a nondegenerate simplex, it is the closure of its nonempty Euclidean interior. Every nonempty relatively open subset of a cell therefore intersects that interior in a nonempty Euclidean-open set, which contains a Euclidean ball. By [F5] and [A1] the ball has positive measure, so Lebesgue measure has full support on each cell. [F5, F6, A1]

2.1 The full-support condition in step 1.2 lets us invoke the cellwise projection lemma [F7] on every cell, so $\Pi_hu$ is well defined. [F7, step 1.2]

3.1 Set $\theta=u_h-\Pi_hu$, so $u_h-u=\theta+\eta$. Subtract the exact weak equation in step 1.1 from [F1] and test with $v_h=\theta$. Differentiating projection orthogonality in [F2] on the fixed mesh gives $(\eta_t,\theta)_K=0$. If $p=0$, then $\nabla\theta=0$; if $p\ge1$, then $\nabla\theta\in\mathbb P_{p-1}(K)^d$. Since $\beta$ is constant, in either case $\beta\cdot\nabla\theta\in\mathbb P_p(K)$ and $(\eta,\beta\cdot\nabla\theta)_K=0$. This leaves only the transport error and the upwind face-flux differences. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Integrate the remaining $-(\beta\theta,\nabla\theta)_K$ by parts using [F3] and sum over cells using [F4]. At an interior face the homogeneous upwind terms combine to $\frac12\int_F|\beta\cdot n_F|[\theta]^2$; at inflow the volume term is $\frac12\int_{\Gamma_-}|\beta\cdot n|\theta^2$, and at outflow the homogeneous term is $\frac12\int_{\Gamma_+}(\beta\cdot n)\theta^2$. By the face flux differences from step 3.1, inflow contributes no projection residual because both fluxes use $g$; interior and outflow residuals move to the right with signs $+\int_F(\beta\cdot n_F)\eta^{\mathrm{up}}[\theta]$ and $-\int_{\Gamma_+}(\beta\cdot n)\eta\theta$, respectively. Hence
$$\frac12\frac d{dt}\|\theta\|_2^2+\frac12\sum_{F\in\mathcal F_h^{\mathrm{int}}}\int_F|\beta\cdot n_F|[\theta]^2+\frac12\int_{\Gamma_-}|\beta\cdot n|\theta^2+\frac12\int_{\Gamma_+}(\beta\cdot n)\theta^2=\sum_{F\in\mathcal F_h^{\mathrm{int}}}\int_F(\beta\cdot n_F)\eta^{\mathrm{up}}[\theta]-\int_{\Gamma_+}(\beta\cdot n)\eta\theta.$$
[F3, F4, A1, step 3.1, algebra]

5.1 For each interior face use $|b||\eta^{\mathrm{up}}||[\theta]|\le\frac{|b|}{4}[\theta]^2+|b||\eta^{\mathrm{up}}|^2$, and on outflow use $b|\eta||\theta|\le\frac b4\theta^2+b|\eta|^2$. Absorbing the first terms into the half-dissipation terms of step 4.1 and dropping the remaining nonnegative boundary and jump terms gives $\frac d{dt}\|\theta\|_2^2\le2R_h(t)^2$. [step 4.1, algebra]

6.1 Integrating the differential inequality gives $\|\theta(T)\|_2^2\le\|\theta(0)\|_2^2+2\int_0^TR_h(t)^2dt$. Since $u_h-u=\theta+\eta$, the triangle inequality at $T$ gives the stated estimate. [step 5.1, algebra] ∎

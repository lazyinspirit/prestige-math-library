---
id: thm-pe04-upwind-sbp-sat-l2-energy-stability
kind: theorem
title: Upwind SBP-SAT transport satisfies the semidiscrete L2 energy identity
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-pe04-upwind-sbp-sat-transport-discretization
  - def-pe04-diagonal-norm-sbp-element-data
  - def-pe04-one-dimensional-interval-mesh-and-broken-polynomials
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Travis C. Fisher and Mark H. Carpenter, High-Order Entropy Stable Finite Difference Schemes for Nonlinear Conservation Laws: Finite Domains, NASA/TM-2013-217971"
      url: "https://ntrs.nasa.gov/api/citations/20130011028/downloads/20130011028.pdf"
      locator: "§2.3.2, printed p. 8: the SBP matrix integration-by-parts identity and positive diagonal norm."
    - title: "Bernardo Cockburn, An Introduction to the Discontinuous Galerkin Method for Convection-Dominated Problems, CIME lecture notes"
      url: "https://www-users.cse.umn.edu/~bcockbur/lecture_notes/DG-1.pdf"
      locator: "§§3.2–3.4, printed pp. 161–164: linear transport upwinding and the elementwise energy calculation."
---

## Statement

Let $d\ge1$. If $d=1$, let the cells be a finite oriented interval mesh from [[def-pe04-one-dimensional-interval-mesh-and-broken-polynomials]]; if $d\ge2$, let them form a finite matching affine simplicial mesh. On every cell assume diagonal-norm SBP data of [[def-pe04-diagonal-norm-sbp-element-data]], with paired interior face nodes, equal paired weights, and opposite outward normals. Let $\beta\in\mathbb R^d$ be constant, and let the differentiable nodal state $U_K(t)$ solve the upwind SBP-SAT method of [[def-pe04-upwind-sbp-sat-transport-discretization]] with prescribed inflow values $g_{F,q}$ where $b_{K,F}:=\beta\cdot n_{K,F}<0$. Write $\omega_{F,q}$ for the diagonal entries of the face norm. On an interior face oriented from $K^-$ to $K^+$, set $b_F=\beta\cdot n_F$ and $[U]_{F,q}=U^+_{F,q}-U^-_{F,q}$. Let $\Gamma_+$ and $\Gamma_-$ denote the boundary faces with positive and negative outward speed, respectively. For $d=1$, each face has one endpoint node and its face sum is a one-point sum. The discrete energy $E_h=\frac12\sum_K U_K^TH_KU_K$ satisfies
$$\frac{dE_h}{dt}+\frac12\sum_{F\text{ interior}}\sum_q\omega_{F,q}|b_F|[U]_{F,q}^2+\frac12\sum_{F\subset\Gamma_+}\sum_q\omega_{F,q}b_{K,F}U_{F,q}^2+\frac12\sum_{F\subset\Gamma_-}\sum_q\omega_{F,q}|b_{K,F}|(U_{F,q}-g_{F,q})^2=\frac12\sum_{F\subset\Gamma_-}\sum_q\omega_{F,q}|b_{K,F}|g_{F,q}^2.$$
Consequently, zero inflow data give a nonincreasing SBP norm.

## Facts & Assumptions

**Given:** Positive diagonal SBP norm matrices, derivative and face restriction matrices satisfying the exact SBP identity, the upwind SAT sign convention, constant $\beta$, and matching interior face nodes, weights, and opposite normals.

[F1] [[def-pe04-diagonal-norm-sbp-element-data]]: $Q_{K,\ell}+Q_{K,\ell}^T=\sum_{F\subset\partial K}n_{K,F,\ell}R_{K,F}^TM_{K,F}R_{K,F}$, with positive diagonal volume and face norms and matching face nodes and weights.

[F2] [[def-pe04-upwind-sbp-sat-transport-discretization]]: $H_K\dot U_K+\sum_{\ell=1}^d\beta_\ell Q_{K,\ell}U_K+\sum_FR_{K,F}^TM_{K,F}b_{K,F}(\widehat U_{K,F}-U_{K,F})=0$ with the upwind trace at every face.

## Proof

1.1 Multiply the cell equation in [F2] on the left by $U_K^T$. The derivative term is $\frac12\frac{d}{dt}(U_K^TH_KU_K)$ because $H_K$ is symmetric. For each direction, the scalar identity $U_K^TQ_{K,\ell}U_K=\frac12U_K^T(Q_{K,\ell}+Q_{K,\ell}^T)U_K$ and [F1] give the face contribution $\frac12\sum_F b_{K,F}U_{K,F}^TM_{K,F}U_{K,F}$ after summing with coefficients $\beta_\ell$. Including the SAT term, the cell energy equation is
$$\frac12\frac{d}{dt}(U_K^TH_KU_K)+\sum_{F\subset\partial K}\left(b_{K,F}\widehat U_{K,F}^TM_{K,F}U_{K,F}-\frac{b_{K,F}}2U_{K,F}^TM_{K,F}U_{K,F}\right)=0.$$
[F1, F2, algebra]

2.1 Fix an interior face oriented from $K^-$ to $K^+$ and a paired node $q$. Its paired face weights are equal by [F1]. If $b_F>0$, both upwind traces are $U^-_{F,q}$, so the two contributions in step 1.1 sum to $\frac{\omega_{F,q}b_F}{2}(U^-_{F,q}-U^+_{F,q})^2$. If $b_F<0$, the upwind traces are $U^+_{F,q}$ and the sum is $\frac{\omega_{F,q}|b_F|}{2}(U^+_{F,q}-U^-_{F,q})^2$. If $b_F=0$, both contributions vanish. [F1, F2, step 1.1, algebra]

2.2 At a boundary face with $b_{K,F}>0$, $\widehat U_{K,F}=U_{K,F}$, so each node contributes $\omega_{F,q}b_{K,F}U_{F,q}^2/2$. When $b_{K,F}<0$, $\widehat U_{K,F}=g_{F,q}$, so the contribution is $\omega_{F,q}|b_{K,F}|(U_{F,q}-g_{F,q})^2/2-\omega_{F,q}|b_{K,F}|g_{F,q}^2/2$. Zero-speed faces contribute zero. [F2, step 1.1, algebra]

3.1 Sum the contributions from steps 2.1 and 2.2 over all cells. Each paired interior node appears once in the jump sum, and boundary nodes appear once in the corresponding inflow or outflow sum, yielding the displayed identity. Positivity of the face weights makes every dissipation term nonnegative; hence zero inflow data imply $dE_h/dt\le0$. [given, step 2.1, step 2.2, algebra] ∎

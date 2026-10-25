---
id: alg-phase-field-convex-splitting-backward-euler
kind: algorithm
title: Backward-Euler convex splitting for Allen–Cahn and Cahn–Hilliard
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-phase-field-gradient-flow-and-double-well
  - def-phase-field-discrete-realizations
  - lem-phase-field-neumann-laplacian-kernel-and-gauge
justified_by: [thm-phase-field-convex-splitting-step-existence-and-energy]
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Jie Shen, Jie Xu, and Jiang Yang, The scalar auxiliary variable (SAV) approach for gradient flows, Journal of Computational Physics 353 (2018), 407–416
      url: https://www.math.purdue.edu/~shen7/pub/SXY17.pdf
      locator: "§2.1, equations (2.1)–(2.2), PDF pp. 2–3: the first-order convex-splitting recurrence and its discrete energy inequality."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $X_h$ be either finite-dimensional realization in [[def-phase-field-discrete-realizations]], with real inner product $\langle\cdot,\cdot\rangle_h$, constant vector $\mathbf1$, self-adjoint nonnegative $A_h$ with kernel $\operatorname{span}\{\mathbf1\}$, and $A_h^\dagger$ from [[lem-phase-field-neumann-laplacian-kernel-and-gauge]]. Let $P_{c,h},P_{e,h}:X_h\to\mathbb R$ be the differentiable convex energy components specified there; $\nabla_hP$ denotes the Riesz gradient relative to $\langle\cdot,\cdot\rangle_h$. Put
$$\mathcal E_h(u)=\frac\kappa2\langle A_hu,u\rangle_h+P_{c,h}(u)-P_{e,h}(u),\qquad \mu_h(u,v)=\kappa A_hu+\nabla_hP_{c,h}(u)-\nabla_hP_{e,h}(v).$$
Given $u^n\in X_h$, $\tau>0$, and $M>0$, the backward-Euler convex-splitting step is:

1. **Allen–Cahn branch.** Return the minimizer over $v\in X_h$ of
$$J_{AC}(v)=\frac{1}{2M\tau}\|v-u^n\|_h^2+\frac\kappa2\langle A_hv,v\rangle_h+P_{c,h}(v)-\langle\nabla_hP_{e,h}(u^n),v\rangle_h,$$
and set $\mu^{n+1}=\mu_h(u^{n+1},u^n)$.

2. **Cahn–Hilliard branch.** Restrict to the affine set $\langle v,\mathbf1\rangle_h=\langle u^n,\mathbf1\rangle_h$ and return the minimizer of
$$J_{CH}(v)=\frac{1}{2M\tau}\langle A_h^\dagger(v-u^n),v-u^n\rangle_h+\frac\kappa2\langle A_hv,v\rangle_h+P_{c,h}(v)-\langle\nabla_hP_{e,h}(u^n),v\rangle_h,$$
then set $\mu^{n+1}=\mu_h(u^{n+1},u^n)$.

For the finite-volume realization, $P_{c,h}(u)=\sum_K|K|F_c(u_K)$ and $P_{e,h}(u)=\sum_K|K|F_e(u_K)$. For the conforming interval realization, these are the exact integrals of $F_c$ and $F_e$ over the reconstructed piecewise-affine state. The recurrence, minimizer equivalence, uniqueness, conservation, and energy bounds are proved in [[thm-phase-field-convex-splitting-step-existence-and-energy]]. This is the selected backward-Euler branch; it asserts no ARS(2,2,2), Lie, or Strang property.

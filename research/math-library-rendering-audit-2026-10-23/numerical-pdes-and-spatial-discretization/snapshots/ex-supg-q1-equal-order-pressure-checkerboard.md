---
id: ex-supg-q1-equal-order-pressure-checkerboard
kind: example
title: "A periodic Q1/Q1 checkerboard pressure mode is invisible to divergence"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-supg-pspg-grad-div-stokes-forms]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Felipe Galarce and Douglas R. Q. Pacheco, Fully consistent lowest-order finite element methods for generalised Stokes flows with variable viscosity, arXiv:2411.02100v1"
      url: "https://arxiv.org/pdf/2411.02100"
      locator: "§§2–4, PDF pp. 1–7: equal-order pressure instability, PSPG residual terms, and why low-order residual stabilization does not by itself prove accuracy."
    - title: "Thomas J. R. Hughes, Multiscale and Stabilized Methods"
      url: "https://onlinelibrary.wiley.com/doi/10.1002/9781119176817.ecm2051"
      locator: "§§3.2.2–3.2.3: residual and interelement-jump contributions in finite-element multiscale formulations."
---

## Example

Take the periodic square with a $2\times2$ unit-square Q1 mesh. At the grid node $(i,j)$, for $i,j\in\{0,1,2\}$, set $q_{ij}=(-1)^{i+j}$ and identify opposite boundaries periodically. Assume $\tau_K>0$ on every cell. These nodal values define a nonzero mean-zero Q1 pressure. It is invisible to the ordinary velocity-divergence coupling, although its PSPG pressure-gradient term is strictly positive.

## Facts & Assumptions

**Given:** The periodic $2\times2$ Q1 mesh, equal-order Q1 velocity and pressure, strictly positive cell parameters $\tau_K$, and the PSPG residual term from [[def-supg-pspg-grad-div-stokes-forms]].

[F1] [[def-supg-pspg-grad-div-stokes-forms]]: PSPG adds $\sum_K\tau_K(\nabla q_h,R_{M,K}(u_h,p_h))_K$; for the Stokes specialization and $u_h=0$, $p_h=q_h$, $f=0$, the residual is $\nabla q_h$.

## Verification

1.1 On a cell $K_{ij}$ with local coordinates $(\xi,\eta)\in[0,1]^2$, the corner values are $\sigma_{ij}(1,-1,-1,1)$ with $\sigma_{ij}=(-1)^{i+j}$. Q1 interpolation therefore gives $q_h|_{K_{ij}}=\sigma_{ij}(1-2\xi)(1-2\eta)$. Its integral on every cell is zero, so its global mean is zero, and it is nonzero at every mesh node. [given, construct, algebra]

2.1 For any Q1 velocity component $v_1$, $\partial_xv_1$ on a cell is affine in $\eta$ and independent of $\xi$. Since $\int_0^1(1-2\xi)\,d\xi=0$, $\int_{K_{ij}}q_h\partial_xv_1=0$. Similarly, $\partial_yv_2$ is independent of $\eta$ and $\int_0^1(1-2\eta)\,d\eta=0$, so $\int_{K_{ij}}q_h\partial_yv_2=0$. Summing cells gives $(q_h,\nabla\cdot v_h)=0$ for every Q1 velocity. [step 1.1, algebra]

3.1 On each unit cell, $\int_K|\nabla q_h|^2=4/3+4/3=8/3$. Thus $\sum_K\tau_K\|\nabla q_h\|_{0,K}^2=(8/3)\sum_K\tau_K>0$ by the strict positivity in **Given**. By [F1], the PSPG term detects this mode, while the unstabilized divergence equation does not. This finite mode check proves neither a mesh-uniform inf-sup bound nor general PSPG accuracy. [F1, step 1.1, step 2.1, given, algebra] ∎

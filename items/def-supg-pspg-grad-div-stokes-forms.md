---
id: def-supg-pspg-grad-div-stokes-forms
kind: definition
title: "Residual PSPG and grad-div terms for equal-order flow spaces"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Felipe Galarce and Douglas R. Q. Pacheco, Fully consistent lowest-order finite element methods for generalised Stokes flows with variable viscosity, arXiv:2411.02100v1"
      url: "https://arxiv.org/pdf/2411.02100"
      locator: "§§2–4, PDF pp. 1–7: generalized Stokes formulation, classical residual PSPG term, equal-order issue, and the low-order loss of the cellwise Laplacian residual."
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "§5.3.2, printed pp. 56–60: residual SUPG forms and explicit warnings that coercivity needs a parameter bound and an appropriate stabilized norm."
---

## Definition

Let $d\ge1$ and $\Omega\subset\mathbb R^d$ have a finite cell partition $\mathcal T$. Let $V_h$ be a finite-dimensional vector space of continuous vector-valued functions, each cellwise polynomial, and let $Q_h$ be a finite-dimensional scalar space of continuous cellwise polynomials with zero mean. Require all velocity components, their cellwise first derivatives and cellwise Laplacians, and all pressures and their cellwise first derivatives to belong to $L^2(\Omega)$. Boundary conditions are stated with each application; the Stokes theorem below uses zero velocity boundary values, and the periodic example below uses periodic identification. The pair is **equal order** when velocity components and pressure use the same polynomial degree on each cell. On a cell $K$, derivatives in residuals are classical derivatives restricted to the cell interior. For well-defined cell integrals, take $\sigma\in L^\infty(\Omega)$, $\beta\in L^\infty(\Omega;\mathbb R^d)$, $f\in L^2(\Omega;\mathbb R^d)$, and parameters $\tau_K\ge0$, $\gamma\ge0$.

For viscosity $\nu>0$, reaction coefficient $\sigma\ge0$, advective field $\beta$, force $f$, and trial pair $(u_h,p_h)\in V_h\times Q_h$, define the strong momentum residual
$$R_{M,K}(u_h,p_h):=\sigma u_h+\beta\cdot\nabla u_h-\nu\Delta_Ku_h+\nabla p_h-f.$$
For test pairs $(v_h,q_h)$, the full residual PSPG mixed form is
$$B_h((u_h,p_h),(v_h,q_h)):=\nu(\nabla u_h,\nabla v_h)_\Omega+(\beta\cdot\nabla u_h+\sigma u_h,v_h)_\Omega-(p_h,\nabla\cdot v_h)_\Omega+(q_h,\nabla\cdot u_h)_\Omega+\sum_K\tau_K(\nabla q_h,\sigma u_h+\beta\cdot\nabla u_h-\nu\Delta_Ku_h+\nabla p_h)_K,$$
with load $(f,v_h)_\Omega+\sum_K\tau_K(\nabla q_h,f)_K$. The **grad-div** addend in velocity tests $v_h$ is $\gamma\sum_K(\nabla\cdot u_h,\nabla\cdot v_h)_K$ with $\gamma\ge0$. This definition alone asserts no inf-sup condition, pressure bound, energy estimate, or convergence result.

For piecewise affine velocities, $\Delta_Ku_h=0$ on each cell. Therefore the standard P1 PSPG residual omits the cellwise viscous Laplacian of the exact velocity; this fact does not justify a pressure-accuracy or convergence claim. Such conclusions require separate consistency and stabilization analysis.


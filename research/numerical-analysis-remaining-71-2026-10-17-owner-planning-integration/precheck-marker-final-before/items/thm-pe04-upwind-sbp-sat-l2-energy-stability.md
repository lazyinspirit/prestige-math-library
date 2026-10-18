---
id: thm-pe04-upwind-sbp-sat-l2-energy-stability
kind: theorem
title: Upwind SBP-SAT transport satisfies the semidiscrete L2 energy identity
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-pe04-upwind-sbp-sat-transport-discretization
  - def-pe04-diagonal-norm-sbp-element-data
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
    - title: "Travis C. Fisher and Mark H. Carpenter, High-Order Entropy Stable Finite Difference Schemes for Nonlinear Conservation Laws: Finite Domains, NASA/TM-2013-217971"
      url: "https://ntrs.nasa.gov/api/citations/20130011028/downloads/20130011028.pdf"
      locator: "§2.3.2, printed p. 8: the SBP matrix integration-by-parts identity and positive diagonal norm."
    - title: "Bernardo Cockburn, An Introduction to the Discontinuous Galerkin Method for Convection-Dominated Problems, CIME lecture notes"
      url: "https://www-users.cse.umn.edu/~bcockbur/lecture_notes/DG-1.pdf"
      locator: "§§3.2–3.4, printed pp. 161–164: linear transport upwinding and the elementwise energy calculation."
---

## Statement

Assume the one-dimensional upwind SBP-SAT method of [[def-pe04-upwind-sbp-sat-transport-discretization]] on a finite interval mesh with constant speed $a>0$, diagonal positive norms, one endpoint node per face, unit endpoint face weights, and matching endpoints. Let $U_{K,L}$ and $U_{K,R}$ denote the endpoint values of a cell, and let $[U]_F=U^+_F-U^-_F$ at an interior node. For inflow data $g$, the discrete energy $E_h=\frac12\sum_K U_K^TH_KU_K$ satisfies
$$\frac{dE_h}{dt}+\frac a2\sum_{F\text{ interior}}[U]_F^2+\frac a2U_{\mathrm{out}}^2+\frac a2(U_{\mathrm{in}}-g)^2=\frac a2g^2$$
on a finite interval mesh with its single inflow and single outflow boundary. Hence zero inflow data give a nonincreasing SBP norm.

## Facts & Assumptions

**Given:** Positive diagonal SBP norm matrices, derivative and face restriction matrices satisfying the exact SBP identity, the upwind SAT sign convention, constant speed $a>0$, and matching interface nodes and weights.

[F1] [[def-pe04-diagonal-norm-sbp-element-data]]: $Q+Q^T=R^TBR$ and $D\mathbf1=0$, with positive diagonal volume and face norms.

[F2] [[def-pe04-upwind-sbp-sat-transport-discretization]]: $H\dot U+aQU+\sum_FR_F^TM_Fb_F(\widehat U_F-U_F)=0$ with the upwind trace at every face.

## Proof

1.1 Multiply the cell equation in [F2] on the left by $U^T$. The derivative term is $\frac12\frac{d}{dt}(U^THU)$ because $H$ is symmetric. Also $aU^TQU=\frac a2U^T(Q+Q^T)U=\frac a2\sum_FR_FU^TM_FR_FU$ by [F1], since a scalar equals its transpose. [given, F1, F2, algebra]

2.1 Combining the volume boundary term from step 1.1 with the SAT term on a face of outward speed $b$ gives the scalar quadratic contribution $b\widehat U U_F-\frac b2U_F^2$. At an interior interface with $b>0$, the two cells contribute $\frac b2(U^- -U^+)^2$ after inserting $\widehat U=U^-$ on the downstream face; for $b<0$ the same calculation with the roles reversed gives $\frac{|b|}{2}(U^+-U^-)^2$. [F1, F2, step 1.1, algebra]

2.2 At the inflow boundary $b=-a$ and $\widehat U=g$, so the contribution is $\frac a2(U_{\mathrm{in}}-g)^2-\frac a2g^2$. At the outflow boundary $b=a$ and $\widehat U=U_{\mathrm{out}}$, so it is $\frac a2U_{\mathrm{out}}^2$. [F2, step 1.1, algebra]

3.1 Sum steps 2.1 and 2.2 over all cells. Matching interface quadrature nodes and weights make each interior contribution appear once, giving the stated identity. Each displayed dissipation term is nonnegative, so zero inflow data imply $dE_h/dt\le0$. [given, step 2.1, step 2.2, algebra] ∎

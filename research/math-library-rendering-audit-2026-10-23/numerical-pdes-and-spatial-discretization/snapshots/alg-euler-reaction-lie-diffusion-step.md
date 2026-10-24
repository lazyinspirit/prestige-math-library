---
id: alg-euler-reaction-lie-diffusion-step
kind: algorithm
title: Forward-Euler reaction followed by exact FV or periodic diffusion
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
aliases: []
deps:
  - def-semilinear-reaction-diffusion-system
  - def-reaction-invariant-rectangle
  - def-fv-tpfa-no-flux-diffusion-specialization
  - def-periodic-reaction-diffusion-grid
  - thm-fv-and-periodic-diffusion-flow-preserves-rectangles-and-mass
  - lem-forward-euler-reaction-step-preserves-invariant-rectangle-and-mass
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§6, printed pp. 39–40: forward-Euler reaction positivity under an explicit step restriction."
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: https://arxiv.org/pdf/1407.1567
      locator: "§§1.3 and 2.2, PDF pp. 6–10: monotone finite-volume diffusion and nonnegative transmissibility conditions."
verification:
  precheck: n/a
---

## Definition

**Input:** Either the no-flux TPFA discretization of [[def-fv-tpfa-no-flux-diffusion-specialization]] or the periodic-grid discretization of [[def-periodic-reaction-diffusion-grid]]; a reaction field $F$; a reaction-inward rectangle $R$; coordinate constants $L_i\ge0$ such that $|F_i(z)-F_i(w)|\le L_i|z_i-w_i|$ whenever $z,w\in R$ differ only in coordinate $i$, as required in [[lem-forward-euler-reaction-step-preserves-invariant-rectangle-and-mass]]; $\tau_R=\min_{i:L_i>0}L_i^{-1}$, with $\tau_R=+\infty$ if every $L_i=0$; a state $U^n$ with every cell/node state in $R$; and $0\le\tau\le\tau_R$.

**Procedure:**

1. At every cell/node, compute the forward-Euler reaction value $V_i=U_i^n+\tau F(U_i^n)$.
2. For each species $r$, apply the exact diffusion map $e^{-\tau d_rM^{-1}L_h}$ in the TPFA case or $e^{-\tau d_rA_h^{\rm per}}$ in the periodic-grid case to $(V_{i,r})_i$.
3. Return the resulting state $U^{n+1}$.

This is an approximate reaction substep followed by exact diffusion. The bound $\tau\le\tau_R$ is part of the input contract and is needed for the stated rectangle guarantee; no diffusion CFL restriction is needed because the diffusion map is exact. The procedure makes no claim about finite-precision evaluation of either step.

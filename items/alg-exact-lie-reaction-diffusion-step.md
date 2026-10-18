---
id: alg-exact-lie-reaction-diffusion-step
kind: algorithm
title: Exact reaction-then-diffusion Lie step on FV or periodic grids
status: draft
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
  - thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§9, printed pp. 60–64: first-order operator splitting into separately solved diffusion and reaction subproblems."
verification:
  precheck: n/a
---

## Definition

**Input:** Either the no-flux TPFA discretization of [[def-fv-tpfa-no-flux-diffusion-specialization]] or the periodic-grid discretization of [[def-periodic-reaction-diffusion-grid]]; a reaction field $F$; a reaction-inward rectangle $R$ such that $F$ is $C^1$ on an open neighborhood of $R$ and $DF$ is bounded on some closed neighborhood of $R$; a state $U^n$ with each cell/node state in $R$; and a time step $\tau\ge0$.

**Procedure:**

1. At every cell/node $i$, solve the exact reaction IVP $\dot z=F(z)$ from $z(0)=U_i^n$ to time $\tau$, and set $V_i=\Phi_F^\tau(U_i^n)$.
2. For each species $r$, apply the exact diffusion map $e^{-\tau d_rM^{-1}L_h}$ in the TPFA case or $e^{-\tau d_rA_h^{\rm per}}$ in the periodic-grid case to the vector $(V_{i,r})_i$; call the output $U^{n+1}_{\cdot,r}$.
3. Return $U^{n+1}$.

This order is the **reaction-then-diffusion Lie composition**. The maps in both substeps are exact flows. The algorithm makes no claim about an approximate ODE or matrix-exponential solver; any such solver error requires a separate bound. Under the hypotheses of [[thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass]] and [[thm-fv-and-periodic-diffusion-flow-preserves-rectangles-and-mass]], each substep is well-defined for all finite $\tau$ on $R$.

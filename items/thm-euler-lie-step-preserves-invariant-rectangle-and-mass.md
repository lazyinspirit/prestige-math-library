---
id: thm-euler-lie-step-preserves-invariant-rectangle-and-mass
kind: theorem
title: A bounded Euler-reaction Lie step preserves rectangles and mass balance
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
aliases: []
deps:
  - def-fv-tpfa-no-flux-diffusion-specialization
  - def-periodic-reaction-diffusion-grid
  - alg-euler-reaction-lie-diffusion-step
  - thm-fv-and-periodic-diffusion-flow-preserves-rectangles-and-mass
  - lem-forward-euler-reaction-step-preserves-invariant-rectangle-and-mass
  - def-stoichiometric-mass-invariant
justified_by: []
proof_strategy: direct
axiom_base: No choice axiom is used; the proof follows by finite sums and the exact finite-dimensional diffusion map.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§6, printed pp. 39–40: forward-Euler reaction positivity requires an explicit step bound."
verification:
  precheck: pass
---

## Statement

Choose either the no-flux TPFA system of [[def-fv-tpfa-no-flux-diffusion-specialization]] or the periodic grid system of [[def-periodic-reaction-diffusion-grid]]. Use [[alg-euler-reaction-lie-diffusion-step]] with a reaction-inward rectangle $R$, an initial state in $R$, and $0\le\tau\le\tau_R$ from [[lem-forward-euler-reaction-step-preserves-invariant-rectangle-and-mass]]. Then every component of the output state lies in $R$. The functional $\mathcal M_{c,h}$ is unchanged when $c^TF=0$ throughout $R$, and is nonincreasing when $c^TF\le0$ throughout $R$. The diffusion substep here is exact; no positivity assertion for a forward-Euler diffusion substep is made.

## Facts & Assumptions

**Given:** One of the two finite diffusion discretizations, an inward rectangle, a reaction field satisfying the coordinate Lipschitz hypotheses of the Euler lemma, a state in $R$, and $0\le\tau\le\tau_R$.

[F1] [[alg-euler-reaction-lie-diffusion-step]]: the procedure applies the nodewise forward-Euler reaction map and then exact specieswise diffusion.

[F2] [[lem-forward-euler-reaction-step-preserves-invariant-rectangle-and-mass]]: for $0\le\tau\le\tau_R$, the Euler reaction map sends $R$ into itself and conserves or dissipates $c^Tz$ under the stated condition on $c^TF$.

[F3] [[thm-fv-and-periodic-diffusion-flow-preserves-rectangles-and-mass]]: the exact diffusion map preserves each component interval and each species' weighted sum.

[F4] [[def-stoichiometric-mass-invariant]]: $\mathcal M_{c,h}(U)=\sum_i m_i c^TU_i$ for the positive weights of the discretization.

## Proof

1.1 The reaction substep in [F1] is the map in [F2]. Its output lies in $R$ at every cell/node. Multiplying the nodewise conservation equality or dissipation inequality by each positive weight $m_i$ and summing shows that this substep preserves or decreases $\mathcal M_{c,h}$ as claimed. [F1, F2, F4, given, algebra]

2.1 Apply the exact diffusion substep in [F1]. By [F3] it keeps every species component in its interval and preserves every species' weighted sum. Hence it preserves $R$ and leaves the mass relation from step 1.1 unchanged. These are the claimed properties of the complete split update. [F1, F3, step 1.1, algebra] ∎

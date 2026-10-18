---
id: thm-exact-lie-step-preserves-invariant-rectangle-and-mass
kind: theorem
title: Exact reaction-diffusion Lie steps preserve rectangles and mass balance
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
aliases: []
deps:
  - def-fv-tpfa-no-flux-diffusion-specialization
  - def-periodic-reaction-diffusion-grid
  - alg-exact-lie-reaction-diffusion-step
  - thm-fv-and-periodic-diffusion-flow-preserves-rectangles-and-mass
  - thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass
  - def-stoichiometric-mass-invariant
justified_by: []
proof_strategy: direct
axiom_base: No choice axiom is used; the proof is a composition of finite-dimensional flows and finite sums.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§§4 and 9, printed pp. 26–27 and 60–64: reaction positivity and the reaction-then-diffusion Lie composition."
verification:
  precheck: pass
---

## Statement

Choose either the no-flux TPFA system of [[def-fv-tpfa-no-flux-diffusion-specialization]] or the periodic grid system of [[def-periodic-reaction-diffusion-grid]], and use the exact reaction-then-diffusion step of [[alg-exact-lie-reaction-diffusion-step]]. Let $R=\prod_{r=1}^m[a_r,b_r]$ be reaction-inward, and suppose $F$ is $C^1$ on a neighborhood of $R$ with derivative bounded on a closed neighborhood. If every cell/node state of $U^n$ lies in $R$, then every cell/node state of $U^{n+1}$ lies in $R$ for every finite $\tau\ge0$. If $c^TF=0$ throughout $R$, then $\mathcal M_{c,h}(U^{n+1})=\mathcal M_{c,h}(U^n)$; if $c^TF\le0$ throughout $R$, then $\mathcal M_{c,h}(U^{n+1})\le\mathcal M_{c,h}(U^n)$. Here $\mathcal M_{c,h}(U)=\sum_i m_i c^TU_i$ uses the cell/node weights of the chosen discretization.

## Facts & Assumptions

**Given:** One of the two stated finite diffusion discretizations, a reaction-inward rectangle $R$, a $C^1$ field with bounded derivative near $R$, a conservation or dissipation vector $c$, and an initial grid state in $R$.

[F1] [[alg-exact-lie-reaction-diffusion-step]]: the step applies the exact reaction flow at each cell/node and then the exact specieswise diffusion flow.

[F2] [[thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass]]: the reaction flow exists for every finite nonnegative time, maps $R$ into itself, and preserves or dissipates $c^Tz$ under the corresponding condition on $c^TF$.

[F3] [[thm-fv-and-periodic-diffusion-flow-preserves-rectangles-and-mass]]: each specieswise diffusion flow maps its component interval into itself and preserves that species' weighted sum.

[F4] [[def-stoichiometric-mass-invariant]]: the weighted discrete functional is $\mathcal M_{c,h}(U)=\sum_i m_i c^TU_i$ with positive cell/node weights $m_i$.

## Proof

1.1 After the reaction substep of [F1], [F2] gives $V_i\in R$ at every cell/node. It also gives $c^TV_i=c^TU_i^n$ in the conservation case or $c^TV_i\le c^TU_i^n$ in the dissipation case. Multiplying by $m_i>0$ and summing over the finite index set proves the corresponding mass relation for $V$. [F1, F2, F4, given, algebra]

2.1 Apply the diffusion substep of [F1] to $V$. By [F3], each species remains in its interval, so every resulting cell/node state remains in $R$. Also [F3] preserves each species' weighted sum; taking the finite linear combination with coefficients $c_r$ preserves $\mathcal M_{c,h}$. Thus the mass relation from step 1.1 is unchanged by diffusion, proving both conclusions for $U^{n+1}$. [F1, F3, step 1.1, algebra] ∎

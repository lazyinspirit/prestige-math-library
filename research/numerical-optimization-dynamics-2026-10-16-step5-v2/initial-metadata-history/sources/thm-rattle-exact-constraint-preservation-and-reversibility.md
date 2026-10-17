---
id: thm-rattle-exact-constraint-preservation-and-reversibility
kind: theorem
title: Exact RATTLE preserves both constraints and is symmetric
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-regular-holonomic-phase-space-and-dynamics
  - def-regular-classical-rattle-step-map
  - lem-rattle-scaled-position-and-momentum-branches
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1.4, pp. 245–246"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370, §§4.5 and 5.1.3"
      url: "https://arxiv.org/pdf/1207.3367"
---

## Statement

On the local branch of [[def-regular-classical-rattle-step-map]], an exact solve sends every consistent $(q,p)\in\mathcal M$ to a consistent $(q_1,p_1)\in\mathcal M$. The signed-step maps satisfy $\Psi_{-h}\circ\Psi_h=\mathrm{id}$ and $\Psi_h\circ\Psi_{-h}=\mathrm{id}$ whenever both branch steps remain in the regular chart.

## Facts & Assumptions

**Given:** The regular phase manifold, exact RATTLE equations, and selected local branches in the Statement.

[F1] [[def-regular-holonomic-phase-space-and-dynamics]]: $(q,p)\in\mathcal M$ means $q\in Q_{\mathrm{reg}}$ and $J(q)M^{-1}p=0$ (hence $c(q)=0$).

[F2] [[def-regular-classical-rattle-step-map]]: the exact position and momentum equations are $c(q_1)=0$ and $J(q_1)M^{-1}p_1=0$.

[F3] [[lem-rattle-scaled-position-and-momentum-branches]]: the force multipliers are chosen on the unique local branch for each sufficiently small signed step, and its exact position roots stay in the regular configuration region.

## Proof

1.1 The exact first constraint equation gives $c(q_1)=0$, the exact final projection equation gives $J(q_1)M^{-1}p_1=0$, and [F3] keeps $q_1$ in $Q_{\mathrm{reg}}$. By [F1], this is exactly $(q_1,p_1)\in\mathcal M$. [F1, F2, F3, given]

1.2 Starting from the forward equations, use the reverse step size $-h$ and choose its first multiplier to be the forward $\mu$. Its first half-momentum is then $p_1+\frac h2\nabla V(q_1)+hJ(q_1)^T\mu=p_{1/2}$, so its next position is $q_1-hM^{-1}p_{1/2}=q$. [F2, given, algebra]

2.1 Choose the reverse step's final multiplier to be the forward $\lambda$. Its final momentum is then $p_{1/2}+\frac h2\nabla V(q)+hJ(q)^T\lambda=p$. The reverse constraint equations hold because the endpoints are the forward consistent states. As $h\to0$, the swapped multipliers and the reverse input converge to the same regular-chart branch centers; after shrinking $h_0$, both multipliers lie in the reverse IFT neighborhoods. By uniqueness of the selected branches [F3], this reverse solve is the defined $-h$ step. Thus $\Psi_{-h}\Psi_h=\mathrm{id}$; interchanging the endpoints and the multipliers proves $\Psi_h\Psi_{-h}=\mathrm{id}$. [F1, F2, F3, step 1.2, algebra] ∎

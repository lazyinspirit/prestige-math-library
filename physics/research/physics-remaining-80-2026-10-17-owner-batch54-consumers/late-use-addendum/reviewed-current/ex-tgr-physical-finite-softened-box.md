---
id: ex-tgr-physical-finite-softened-box
kind: example
title: "Prepared finite softened two-body ensemble"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 8
deps:
  - pthm-tgr-regulated-gravity-canonical-equilibrium
dependency_roles:
  pthm-tgr-regulated-gravity-canonical-equilibrium: physical-result
justified_by: []
physical_scope: "One explicit finite box and positive softening instance of the adopted effective Newtonian preparation; establishes a normalized model probability, not observed equilibration or a claim about a real gravitating gas."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
      locator: "Complete manuscript retrieved; §2(ii), PDF pp. 4–5, discusses finite-volume gravity and cutoff dependence. The exact softened finite-box normalization is proved by the linked local suppliers."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
      locator: "Complete notes retrieved; §2.1, from PDF p. 38, for classical phase-space canonical integrals; §1.3.2, PDF pp. 24–26, for the canonical response convention."
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Take $B=(0,L)^3$ with $L>0$, $N=2$, equal mass $m>0$, Newton constant $G>0$, softening length $a>0$, action reference $h_*>0$, and $\beta>0$. Use the finite softened Newtonian preparation and its fixed Hamiltonian and measure.

## Facts & Assumptions

**Given:** The cube has volume $L^3\in(0,\infty)$, $N=2$, $a>0$, and all remaining physical parameters are positive as required by the adopted preparation.

[F1] Under those hypotheses the finite regulated preparation has a positive finite partition function and normalized Gibbs density. ([[pthm-tgr-regulated-gravity-canonical-equilibrium]])

## Verification

1.1 The box $B=(0,L)^3$ is bounded and has positive finite volume, and $N=2\ge2$ with $a>0$; therefore these data satisfy the hypotheses recorded in [F1]. [given, F1]

2.1 Apply [F1] to this instance. It gives $0<Z_2(\beta)<\infty$ and $p_\beta=Z_2^{-1}e^{-\beta H_{2,a}}$ as a normalized probability density relative to the stated phase reference. This is a constructed model ensemble and does not assert that the system dynamically reaches it. [F1, step 1.1] ∎

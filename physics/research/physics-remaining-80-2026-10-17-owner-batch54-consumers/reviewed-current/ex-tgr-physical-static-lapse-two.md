---
id: ex-tgr-physical-static-lapse-two
kind: example
title: "Fixed lapse two gas normalization"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 8
deps:
  - pthm-tgr-static-gas-local-equilibrium
dependency_roles:
  pthm-tgr-static-gas-local-equilibrium: physical-result
justified_by: []
physical_scope: "Classical ideal gas on a prescribed flat finite box with constant dimensionless lapse two and a stated Killing-generator normalization; the local temperature parameter is T_K/2 and is not a reported measurement."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: II. The classical Boltzmann gas"
      url: "https://arxiv.org/pdf/1908.10817"
      locator: "Complete paper retrieved; §III, PDF pp. 8–11, for local temperature/lapse and hydrostatic conventions in the self-gravitating model. This example uses a prescribed flat background only."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
      locator: "Complete notes retrieved; §§1.3–1.4, PDF pp. 23–34, for finite canonical and grand-canonical partition conventions."
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Let $B=(0,L)^3$ with $L>0$, $I_{x^0}\subset\mathbb R$ open, $h_{ij}=\delta_{ij}$, and constant dimensionless lapse $\mathcal N=2$ on the prescribed static metric $g=-4(dx^0)^2+\delta_{ij}dx^idx^j$, with $x^0=ct$. Since the metric coefficients are independent of $x^0$, choose the Killing generator $\xi=\partial_{x^0}$ to define $T_K=(k_B\beta_K)^{-1}$, where $\beta_K>0$. This fixes a normalization convention for the generator; $T_K$ is not identified with the proper temperature at the wall.

## Facts & Assumptions

**Given:** The spatial box is bounded with positive finite volume, the static metric is prescribed, and its lapse is the constant $\mathcal N=2$ with the stated generator convention.

[F1] On a prescribed bounded-lapse static background, the classical canonical gas has finite positive normalization and $T_{\rm loc}=T_K/\mathcal N$. ([[pthm-tgr-static-gas-local-equilibrium]])

## Verification

1.1 The constant lapse satisfies $0<\mathcal N_0\le\mathcal N\le\mathcal N_1<\infty$ with $\mathcal N_0=\mathcal N_1=2$, and the flat spatial box has positive finite volume; thus [F1] applies to the prescribed classical branch. [given, F1]

2.1 Substitute $\mathcal N=2$ into [F1]. The partition function is finite and positive and the local parameter is $T_{\rm loc}=T_K/2$. This is a normalization identity in the selected model and reports no observed temperature. [F1, step 1.1, algebra] ∎

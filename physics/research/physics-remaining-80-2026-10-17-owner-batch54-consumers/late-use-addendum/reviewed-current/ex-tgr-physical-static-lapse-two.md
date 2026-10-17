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
physical_scope: "Grand-canonical classical ideal gas on a prescribed flat finite box with constant dimensionless lapse two and a stated Killing-generator normalization; the local temperature parameter is T_K/2 and is not a reported measurement."
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

Let $B=(0,L)^3$ with $L>0$, $I_{x^0}\subset\mathbb R$ open, $h_{ij}=\delta_{ij}$, and constant dimensionless lapse $\mathcal N=2$ on the prescribed static metric $g=-4(dx^0)^2+\delta_{ij}dx^idx^j$, with $x^0=ct$. Choose positive particle mass $m>0$ in kilograms, $c>0$ in metres per second, action reference $h_*>0$ in joule-seconds, inverse Killing-energy parameter $\beta_K>0$ in inverse joules, and dimensionless fugacity $z>0$. Select the grand-canonical branch, in which particle number is summed rather than fixed. Since the metric coefficients are independent of $x^0$, choose the Killing generator $\xi=\partial_{x^0}$ to define $T_K=(k_B\beta_K)^{-1}$. This fixes a normalization convention for the generator; $T_K$ is not identified with the proper temperature at the wall.

## Facts & Assumptions

**Given:** The spatial box is bounded with positive finite volume, the static metric is prescribed, its lapse is the constant $\mathcal N=2$, the Killing generator has the stated normalization, $m,c,h_*,\beta_K,z>0$, and the grand-canonical branch is selected.

[F1] On a prescribed bounded-lapse static background, the selected grand-canonical classical gas has $0<Z_1<\infty$, $\Xi=e^{zZ_1}\in(0,\infty)$, and $T_{\rm loc}=T_K/\mathcal N$. ([[pthm-tgr-static-gas-local-equilibrium]])

## Verification

1.1 The constant lapse satisfies $0<\mathcal N_0\le\mathcal N\le\mathcal N_1<\infty$ with $\mathcal N_0=\mathcal N_1=2$, the flat spatial box has positive finite volume, the classical parameters are positive, and the grand-canonical branch is selected; thus [F1] applies. [given, F1]

2.1 Apply [F1] to the selected branch: $Z_1$ is finite and positive and $\Xi=e^{zZ_1}$ is finite and positive. Substituting $\mathcal N=2$ gives $T_{\rm loc}=T_K/2$. These are normalization and parameter identities in the selected model and report no observed temperature. [F1, step 1.1, algebra] ∎

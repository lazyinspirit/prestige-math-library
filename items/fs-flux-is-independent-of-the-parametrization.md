---
id: fs-flux-is-independent-of-the-parametrization
kind: false-statement
title: 'FALSE: flux is independent of the parametrization without an orientation condition'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-flux-under-surface-reparametrization, def-cross-product-in-r3, def-admissible-regular-parametrized-surface-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'University of Toronto MAT237 notes, Section 5.3, An Invariance Property'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Statement

Flux through a parametrized surface is independent of the chosen parametrization without any orientation condition.

## Facts & Assumptions

**Given:** The horizontal unit-square parametrizations $\varphi(u,v)=(u,v,0)$ and $\psi(s,t)=(t,s,0)$, and the constant field $F=(0,0,1)$.

[L1] The cross product has the displayed coordinate formula; injectivity and a nonzero interior parameter cross product make a regular patch; and flux is the integral of the field dotted with the induced oriented area vector ([[def-cross-product-in-r3]], [[def-admissible-regular-parametrized-surface-patch]], [[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[L2] Orientation-preserving reparametrizations preserve flux and orientation-reversing ones negate it ([[thm-flux-under-surface-reparametrization]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], $\varphi_u\times\varphi_v=(0,0,1)$ and $\psi_s\times\psi_t=(0,0,-1)$. Both maps are injective, so these nonzero interior cross products make them regular patches. [given, L1, algebra]

2.1 The two flux integrands are therefore $1$ and $-1$ on the unit square, so the fluxes are $1$ and $-1$. [step 1.1, algebra]

3.1 The coordinate swap has determinant $-1$, and [L2] explains the sign change. Since the two values differ, the orientation-free statement is false. [step 1.1, step 2.1, L2] ∎

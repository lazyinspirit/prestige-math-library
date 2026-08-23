---
id: fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas
kind: false-statement
title: 'FALSE: surface area is the supremum of inscribed polyhedral areas'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-schwarz-lantern-polyhedral-areas-diverge, cor-surface-area-of-revolution-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'L. Brewin, Curvature corrected estimates for geodesic arc-length, Section 3.2'
      url: 'https://arxiv.org/pdf/1512.03461'
pipeline_run: null
---

## Statement

The surface area of a smooth surface equals the supremum of the areas of its inscribed triangulated polyhedral surfaces.

## Facts & Assumptions

**Given:** A fixed circular cylinder of radius $r>0$ and height $H>0$.

[L1] The cylinder admits inscribed Schwarz lanterns whose mesh tends to zero while their polyhedral areas diverge to $+\infty$ ([[cex-schwarz-lantern-polyhedral-areas-diverge]]).

[L2] If $a<b$ and $r:[a,b]\to[0,\infty)$ is $C^1$ on a neighbourhood of $[a,b]$ and positive on $(a,b)$, the surface obtained by rotating $r$ about the axis has area $2\pi\int_a^br(s)\sqrt{1+r'(s)^2}\,ds$ ([[cor-surface-area-of-revolution-formula]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the set of areas of inscribed triangulated polyhedral surfaces for this fixed cylinder is unbounded above. [given, L1]

2.1 Its supremum is therefore not a finite real number. The lateral cylinder is the surface of revolution of the constant profile $r$ on $[0,H]$, which is smooth on all of $\mathbb R$ and positive, so [L2] gives it the finite surface-integral area $2\pi\int_0^Hr\sqrt{1+0}\,ds=2\pi rH$. [step 1.1, L2, algebra]

3.1 Consequently the proposed supremum does not equal surface area, even when arbitrarily small mesh is imposed. [step 1.1, step 2.1] ∎

---
id: cex-degenerate-surface-parametrization-collapses-to-a-curve
kind: counterexample
title: 'A degenerate two-parameter map can collapse its image to a curve'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-admissible-regular-parametrized-surface-patch, def-cross-product-in-r3]
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
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, regular surface charts'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
pipeline_run: null
---

## Statement refuted

A continuous map of a two-dimensional parameter region into $\mathbb R^3$ need not describe a regular surface: its image can be only a curve.

## Facts & Assumptions

**Given:** The map $\varphi:[0,1]^2\to\mathbb R^3$, $\varphi(u,v)=(u,0,0)$.

[L1] A regular surface patch must be injective in its interior and have nonzero parameter cross product there ([[def-admissible-regular-parametrized-surface-patch]]).

[L2] The cross product is given by its coordinate formula ([[def-cross-product-in-r3]]).

## Counterexample

**Proof technique:** direct.

1.1 The parameter derivatives are $\varphi_u=(1,0,0)$ and $\varphi_v=(0,0,0)$, so [L2] gives $\varphi_u\times\varphi_v=0$ at every point. [given, L2, algebra]

1.2 Also $\varphi(u,v)$ is independent of $v$, so the map is not injective on the interior, and its image is exactly the line segment $\{(u,0,0):0\le u\le1\}$. [given, algebra]

2.1 Both regularity requirements in [L1] fail throughout the interior, and the image is one-dimensional. This supplies the claimed collapse. [step 1.1, step 1.2, L1] ∎

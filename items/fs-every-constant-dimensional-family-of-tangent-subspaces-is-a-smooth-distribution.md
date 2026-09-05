---
id: fs-every-constant-dimensional-family-of-tangent-subspaces-is-a-smooth-distribution
kind: false-statement
title: "Every constant-dimensional family of tangent subspaces is a smooth distribution"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-distribution-on-a-manifold,
       prop-local-frame-characterization-of-a-smooth-distribution]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Local and global Frobenius theorems"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/frobthm.pdf"
---

## Statement

Every constant-dimensional family of tangent subspaces is a smooth distribution.

## Facts & Assumptions

**Given:** On $\mathbb R^2$, define $$\mathcal D_{(x,y)} := \begin{cases} \operatorname{span}(\partial_x), & y > 0, \\ \operatorname{span}(\partial_x + \partial_y), & y \leq 0. \end{cases}$$

[A1] This is a one-dimensional family of tangent lines.

## Refutation

**Proof technique:** direct.

1.1 The family has constant dimension $1$ at every point. [given]

1.2 If it were a smooth distribution near the origin, it would admit a local [given] nonvanishing smooth spanning field. Above the $x$-axis that field would have to be tangent to $\partial_x$, while below the axis it would have to be tangent to $\partial_x + \partial_y$. Continuity at the origin would then force the two line directions to agree there, which they do not. [given]

2.1 Therefore constant fibre dimension alone does not imply smoothness. [given] ∎

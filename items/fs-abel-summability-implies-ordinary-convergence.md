---
id: fs-abel-summability-implies-ordinary-convergence
kind: false-statement
title: "FALSE: Abel summability alone implies ordinary convergence of a series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-abel-and-cesaro-summability-of-a-series, thm-geometric-series, def-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Abel summability, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Abel_summability_method"
    - title: "S. Semmes, Rice Math 322 notes"
      url: "https://math.rice.edu/~semmes/math322.pdf"
    - title: "Tauberian theorems, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Tauberian_theorems"
pipeline_run: null
---

## Statement

**False claim:** every Abel-summable real series converges ordinarily.

## Facts & Assumptions

**Given:** Grandi's series $\sum_{n\ge0}(-1)^n$.

[L1] For $0\le x<1$, the geometric series gives $\sum_{n\ge0}(-1)^nx^n=1/(1+x)$ ([[thm-geometric-series]]).

[L2] Ordinary convergence means convergence of the partial-sum sequence, whereas Abel summability uses the boundary limit of the power series ([[def-series]], [[def-abel-and-cesaro-summability-of-a-series]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the Abel transform tends to $1/2$ as $x\uparrow1$, so the series is Abel summable to $1/2$. [L1, L2]

2.1 Its inclusive partial sums alternate between $1$ and $0$, so they do not converge. Hence Abel summability alone does not imply ordinary convergence. [given, L2] ∎

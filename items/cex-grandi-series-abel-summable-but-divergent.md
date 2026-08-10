---
id: cex-grandi-series-abel-summable-but-divergent
kind: counterexample
title: "Grandi's series is Abel summable to $1/2$ but its partial sums do not converge"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-abel-summability-implies-ordinary-convergence, thm-geometric-series, def-abel-and-cesaro-summability-of-a-series]
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
pipeline_run: null
---

## Statement

Grandi's series $1-1+1-1+\cdots$ is Abel summable to $1/2$ but diverges ordinarily.

## Facts & Assumptions

**Given:** Coefficients $a_n=(-1)^n$.

[L1] For $0\le x<1$, $\sum_{n\ge0}(-1)^nx^n=1/(1+x)$ ([[thm-geometric-series]]).

[L2] Abel summability and ordinary convergence are defined through the boundary limit and partial sums, respectively ([[def-abel-and-cesaro-summability-of-a-series]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the Abel transform tends to $1/2$ as $x\uparrow1$. [L1, L2]

2.1 The partial sums alternate between $1$ and $0$, so they diverge. This concretely refutes [[fs-abel-summability-implies-ordinary-convergence]]. [given, L2] ∎

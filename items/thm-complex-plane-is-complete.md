---
id: thm-complex-plane-is-complete
kind: theorem
title: "The complex plane is complete, and convergence is equivalent to convergence of real and imaginary parts"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-metric-convergence-and-continuity, thm-componentwise-convergence-and-completeness]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

The metric space $\mathbb C$ is complete. A sequence $z_n=x_n+iy_n$ converges to $x+iy$ exactly when $x_n\to x$ and $y_n\to y$. The conventions and prerequisite facts used below are recorded in [[def-complex-metric-convergence-and-continuity]], [[thm-componentwise-convergence-and-completeness]].

## Facts & Assumptions

**Given:** A complex sequence $z_n=x_n+iy_n$.

## Proof

**Proof technique:** direct.

1.1 The complex metric is the Euclidean metric on $\mathbb R^2$. [given]

2.1 Apply componentwise convergence and completeness in the published Euclidean-space theorem. [given] ∎

---
id: cex-radius-does-not-determine-boundary-convergence-of-a-complex-power-series
kind: counterexample
title: "Equal radii do not determine convergence on the boundary circle"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-cauchy-hadamard-for-complex-power-series, thm-p-series-real-exponents, lem-nth-term-test]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Two complex power series with the same radius of convergence have the same convergence behaviour at every point of their common boundary circle.

## Facts & Assumptions

**Given:** The series $\sum z^n$ and $\sum z^n/n^2$.

[L1] Cauchy–Hadamard gives absolute convergence inside the radius, divergence outside it, and no assertion on the boundary ([[thm-cauchy-hadamard-for-complex-power-series]]).

[L2] For real $p$, the real series $\sum_{n\ge1}1/n^p$ converges exactly when $p>1$ ([[thm-p-series-real-exponents]]).

[L3] If the terms of a real series do not tend to $0$, that real series diverges ([[lem-nth-term-test]]).

## Counterexample

**Proof technique:** direct.

1.1 Both coefficient sequences have root limsup $1$, so [L1] gives radius $1$ to both series. [L1, algebra]

1.2 At $z=1$, the first series has constant term sequence $1$ and diverges by [L3], while the second converges by [L2] with $p=2$. [L2, L3]

2.1 Thus equal radii do not determine even convergence at the boundary point $1$. [step 1.1, step 1.2] ∎

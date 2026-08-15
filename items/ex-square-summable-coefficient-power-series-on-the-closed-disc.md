---
id: ex-square-summable-coefficient-power-series-on-the-closed-disc
kind: example
title: "A power series with reciprocal-square coefficients converges uniformly on the closed unit disc"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-weierstrass-m-test-for-complex-function-series, thm-p-series-real-exponents]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The series $\sum_{n=1}^{\infty}z^n/n^2$ converges absolutely and uniformly on the closed unit disc $|z|\le1$.

## Facts & Assumptions

**Given:** A complex number $z$ with $|z|\le1$.

[L1] The complex M-test gives absolute pointwise and uniform convergence under a convergent nonnegative majorant ([[thm-weierstrass-m-test-for-complex-function-series]]).

[L2] For real $p$, the real series $\sum_{n\ge1}1/n^p$ converges exactly when $p>1$ ([[thm-p-series-real-exponents]]).

## Verification

**Proof technique:** direct.

1.1 For $n\ge1$, $|z^n/n^2|\le1/n^2$. [given, algebra]

2.1 The majorant converges by [L2], so [L1] proves absolute and uniform convergence on the entire closed disc, including its boundary. [step 1.1, L1, L2] ∎

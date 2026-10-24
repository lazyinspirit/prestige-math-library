---
id: ex-complex-geometric-power-series
kind: example
title: "The complex geometric power series has radius $1$ and sums to $1/(1-z)$ for $|z|<1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cauchy-hadamard-for-complex-power-series, thm-complex-numbers-form-a-field, thm-geometric-series, lem-geometric-sequence-null, thm-absolute-convergence-of-complex-series, lem-complex-conjugation-and-modulus-laws, thm-componentwise-limits-and-continuity]
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

## Example

For $|z|<1$, the complex geometric series $\sum_{n\ge0}z^n$ has radius $1$ and sum $1/(1-z)$. The conventions and prerequisite facts used below are recorded in [[thm-cauchy-hadamard-for-complex-power-series]], [[thm-complex-numbers-form-a-field]], [[thm-geometric-series]], [[lem-geometric-sequence-null]], [[thm-absolute-convergence-of-complex-series]], [[lem-complex-conjugation-and-modulus-laws]], [[thm-componentwise-limits-and-continuity]].

## Facts & Assumptions

**Given:** A complex $z$ with $|z|<1$.

[L1] [[thm-geometric-series]] says that the real series $\sum_{n\ge0}r^n$ converges for $|r|<1$.

[L2] [[lem-complex-conjugation-and-modulus-laws]] gives $|z^n|=|z|^n$.

[L3] [[thm-absolute-convergence-of-complex-series]] says that an absolutely convergent complex series converges.

[L4] [[lem-geometric-sequence-null]] gives $|z|^n\to0$ when $|z|<1$.

[L5] [[thm-cauchy-hadamard-for-complex-power-series]] defines the shifted coefficient limsup and its radius cases.

## Verification

1.1 The shifted coefficient roots in [L5] are all $1$, so it gives radius $1$. [L5]

2.1 By [L2], the modulus series is the real geometric series $\sum|z|^n$, which converges by [L1]; therefore the complex series converges by [L3], say to $S$. The finite identity $(1-z)\sum_{k<n}z^k=1-z^n$ holds in the complex field. Since $|z^n|=|z|^n\to0$ by [L2] and [L4], passing to the limit gives $(1-z)S=1$; since $z\ne1$, $S=1/(1-z)$. [L1, L2, L3, L4] ∎

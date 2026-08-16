---
id: ex-harmonic-complex-power-series-on-the-unit-circle
kind: example
title: "The harmonic complex power series diverges at 1 and converges conditionally at every other point of the unit circle"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-abel-summation-for-complex-series, thm-p-series-real-exponents, cor-archimedean-reciprocal, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For $|z|=1$, the series $\sum_{n=1}^{\infty}z^n/n$ diverges at $z=1$ and converges conditionally at every $z\ne1$.

## Facts & Assumptions

**Given:** A complex number $z$ with $|z|=1$.

[L1] Abel summation gives the finite summation-by-parts and tail identities for complex coefficients ([[lem-abel-summation-for-complex-series]]).

[L2] For real $p$, the real series $\sum_{n\ge1}1/n^p$ converges exactly when $p>1$ ([[thm-p-series-real-exponents]]).

[L3] Given a positive real $\varepsilon$, there is a natural number $N\ge1$ with $1/N<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L4] Complex modulus is multiplicative and satisfies the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

## Verification

**Proof technique:** direct.

1.1 If $z\ne1$, the finite identity $(1-z)\sum_{k=1}^Nz^k=z-z^{N+1}$ gives $|\sum_{k=1}^Nz^k|\le2/|1-z|$ by [L4]. [L4, algebra]

2.1 Apply [L1] to the bounded partial sums in step 1.1 and the decreasing weights $1/n$. The tail is bounded by a fixed multiple of $1/p$, which tends to $0$ by [L3], so the series converges. [step 1.1, L1, L3]

3.1 At $z=1$ the series is the divergent $p$-series with $p=1$ by [L2]. At every other point on the circle, $|z^n/n|=1/n$, so the modulus series also diverges by [L2]; the convergence from step 2.1 is therefore conditional. No term $1/0$ is formed. [step 2.1, L2, L4] ∎

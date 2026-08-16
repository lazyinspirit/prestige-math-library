---
id: thm-complex-power-series-converge-locally-uniformly
kind: theorem
title: "A complex power series converges absolutely and uniformly on every closed subdisc strictly inside its disc of convergence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-hadamard-for-complex-power-series, thm-weierstrass-m-test-for-complex-function-series, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $\sum_{n\ge0}c_n(z-a)^n$ have radius $R$. For every real $r$ with $0\le r<R$, the series converges absolutely and uniformly on the closed disc $|z-a|\le r$.

## Facts & Assumptions

**Given:** A complex power series of radius $R$ and $0\le r<R$.

[L1] The Cauchy–Hadamard theorem gives absolute convergence for $|z-a|<R$, divergence for $|z-a|>R$, and no boundary assertion ([[thm-cauchy-hadamard-for-complex-power-series]]).

[L2] The complex M-test gives uniform and pointwise absolute convergence under a convergent real majorant series ([[thm-weierstrass-m-test-for-complex-function-series]]).

[L3] For complex numbers, $|zw|=|z||w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the real series $\sum |c_n|r^n$ converges, since it is the modulus series at any point whose distance from $a$ is $r$; for $r=0$ it has only the constant contribution. [L1]

1.2 If $|z-a|\le r$, then [L3] gives $|c_n(z-a)^n|\le |c_n|r^n$. [L3, algebra]

2.1 Apply [L2] to the majorants of step 1.1 and the bound of step 1.2. This also covers $R=+\infty$ and makes no assertion when $r=R$. [step 1.1, step 1.2, L2] ∎

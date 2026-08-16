---
id: ex-alternating-harmonic-power-series-at-the-boundary
kind: example
title: "The alternating harmonic power series tends to log 2 at the boundary point 1"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-abel-limit-theorem-for-complex-series-in-stolz-regions, thm-log-one-plus-x-power-series]
aliases: []
landmark: false
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
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 2, Abel's theorem"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Example

For $|z|<1$, put $F(z)=\sum_{n=1}^{\infty}(-1)^{n+1}z^n/n$. Then $F(z)\to\log2$ as $z\to1$ within any fixed Stolz region.

## Facts & Assumptions

**Given:** The alternating harmonic coefficients indexed from $n=1$.

[L1] The alternating harmonic series converges to $\log2$ ([[thm-log-one-plus-x-power-series]]).

[L2] A convergent complex series is recovered by its power series along every Stolz approach to $1$ ([[thm-abel-limit-theorem-for-complex-series-in-stolz-regions]]).

## Verification

**Proof technique:** direct.

1.1 Regard the real coefficients $(-1)^{n+1}/n$ as complex coefficients; by [L1] their series has sum $\log2$. [L1]

2.1 Apply [L2] to obtain the asserted angular limit. The claim concerns only the boundary limit and introduces no logarithm branch inside the disc. [step 1.1, L2] ∎

---
id: prop-cauchy-products-of-complex-power-series
kind: proposition
title: "Products of convergent complex power series are represented by their Cauchy-product coefficients on the common disc"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-cauchy-product-of-absolutely-convergent-complex-series, thm-complex-power-series-converge-locally-uniformly, thm-weierstrass-m-test-for-complex-function-series]
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
  references:
    - title: "MIT 18.100C lecture notes on power series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
pipeline_run: null
---

## Statement

If $f(z)=\sum a_n(z-c)^n$ and $g(z)=\sum b_n(z-c)^n$, then on their common open disc
$$f(z)g(z)=\sum_{n\ge0}\left(\sum_{k=0}^n a_kb_{n-k}\right)(z-c)^n,$$
and the product series converges locally uniformly.

## Facts & Assumptions

**Given:** Two complex power series about $c$ and a point inside both radii.

[L1] The Cauchy product of two absolutely convergent complex series converges absolutely and has the product of their sums as its sum ([[lem-cauchy-product-of-absolutely-convergent-complex-series]]).

[L2] Complex power series converge absolutely and uniformly on smaller closed subdiscs ([[thm-complex-power-series-converge-locally-uniformly]]).

[L3] A complex function series dominated termwise by a convergent nonnegative real series converges absolutely pointwise and uniformly ([[thm-weierstrass-m-test-for-complex-function-series]]).

## Proof

**Proof technique:** direct.

1.1 At a fixed point in the common disc, [L2] gives absolute convergence of both numerical series. [L2]

2.1 Apply [L1]; multiplying $(z-c)^k(z-c)^{n-k}$ gives $(z-c)^n$, so the Cauchy coefficient is the displayed finite convolution. For $n=0$ this is the one-term sum with $k=0$, not an empty sum. [step 1.1, L1, algebra]

3.1 Fix a radius $r$ inside both original radii. The absolute Cauchy convolution has total sum $(\sum|a_n|r^n)(\sum|b_n|r^n)<\infty$ by [L1] and [L2], so [L3] gives uniform convergence of the product power series on $|z-c|\le r$. This includes $r=0$ and either input series being identically zero. [step 2.1, L1, L2, L3, algebra] ∎

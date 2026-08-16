---
id: thm-complex-power-series-reexpansion-at-an-interior-point
kind: theorem
title: "A complex power-series sum re-expands about every interior point, at least to the distance from that point to the original boundary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-complex-power-series-reexpansion-double-series, cor-complex-power-series-coefficient-formula, cor-complex-power-series-sums-have-derivatives-of-all-orders]
aliases: []
landmark: true
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
    - title: "Power-series re-expansion notes, Colby College"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

If $f(z)=\sum_{n\ge0}c_n(z-a)^n$ has radius $R$ and $|b-a|<R$, then
$$f(b+h)=\sum_{k\ge0}\frac{f^{(k)}(b)}{k!}h^k\qquad\text{whenever }|h|<R-|b-a|.$$
The displayed bound is a guaranteed radius, not necessarily the exact radius of the new series.

## Facts & Assumptions

**Given:** A complex power-series sum $f$ and an interior point $b$.

[L1] Under $|b-a|+|h|<R$, the binomial double series is absolutely convergent and may be regrouped ([[lem-complex-power-series-reexpansion-double-series]]).

[L2] The coefficient of a representation about $b$ is $f^{(k)}(b)/k!$ ([[cor-complex-power-series-coefficient-formula]]).

[L3] Every derivative of a power-series sum is obtained termwise ([[cor-complex-power-series-sums-have-derivatives-of-all-orders]]).

## Proof

**Proof technique:** direct.

1.1 Put $z=b+h$. The binomial expansion and [L1] give $f(b+h)=\sum_{k\ge0}d_kh^k$, where $d_k=\sum_{n\ge k}\binom nk c_n(b-a)^{n-k}$. [L1, algebra]

2.1 By [L3], evaluating the $k$th derivative at $b$ gives $f^{(k)}(b)=k!d_k$. [step 1.1, L3]

3.1 By [L2], $d_k=f^{(k)}(b)/k!$, proving the stated expansion for $|h|<R-|b-a|$. The bound remains valid when $R=+\infty$. [step 1.1, step 2.1, L2] ∎

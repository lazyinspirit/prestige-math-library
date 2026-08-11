---
id: ex-young-integral-beyond-bounded-variation
kind: example
title: "Young's theorem integrates a Hölder function of unbounded variation against itself"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-young-riemann-stieltjes-existence-rational,
       def-lipschitz-holder-contraction, def-rational-power,
       lem-rational-power-monotone, lem-rational-power-laws,
       thm-p-series-rational, def-series, lem-series-tail-invariance,
       lem-convergent-implies-cauchy, def-sequence,
       def-bounded-variation-and-total-variation,
       def-partition-and-refinement, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: construction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Nourdin, Nualart, and Peccati, The Breuer–Major theorem in total variation: improved rates under minimal regularity, Section 2.2"
      url: "https://alea.math.cnrs.fr/articles/v16/16-23.pdf"
pipeline_run: null
---

## Example

There is a $3/4$-Hölder function $f:[0,1]\to\mathbb R$ of unbounded variation for which the Young integral $\int_0^1 f\,df$ nevertheless exists.

## Facts & Assumptions

**Given:** Let $S=\sum_{n=1}^\infty n^{-4/3}$, put $w_n=S^{-1}n^{-4/3}$, and tile $(0,1]$ by consecutive intervals $I_n$ of lengths $w_n$ accumulating at zero. On $I_n$, let $f$ be the symmetric triangular tent of height $w_n^{3/4}$, and set $f(0)=0$.

[L1] The $p$-series converges for $p>1$ and diverges for $p=1$ ([[thm-p-series-rational]]).

[L2] Rational powers are monotone and obey their exponent laws ([[lem-rational-power-monotone]], [[lem-rational-power-laws]]).

[L3] Young's theorem applies when the two Hölder exponents have sum greater than one ([[thm-young-riemann-stieltjes-existence-rational]]).

## Verification

**Proof technique:** construction.

1.1 By [L1], $0<S<\infty$ and $\sum_nw_n=1$, so the intervals tile $(0,1]$. On one tent, the linear slope estimate and [L2] give $|f(x)-f(y)|\le2|x-y|^{3/4}$. If $x,y$ lie in different tents, let $z_x$ be the endpoint of $x$'s tent toward $y$ and $z_y$ the endpoint of $y$'s tent toward $x$. Both have value zero and $|x-z_x|,|y-z_y|\le|x-y|$, so the two one-tent estimates and the triangle inequality give $|f(x)-f(y)|\le4|x-y|^{3/4}$. Taking the endpoints of successively smaller tents gives the same estimate at zero. Thus $f$ is $3/4$-Hölder. [L1, L2]

1.2 A partition through the endpoints and peaks of the first $N$ tents has variation at least [given]
$$2\sum_{n=1}^N w_n^{3/4}=2S^{-3/4}\sum_{n=1}^N\frac1n.$$
This is unbounded by [L1], so $f$ is not BV.

2.1 Since $3/4+3/4>1$, [L3] nonetheless gives existence of $\int_0^1 f\,df$. This is genuinely outside the BV existence theorem. [L3] ∎

---
id: thm-power-series-sums-are-real-analytic
kind: theorem
title: "The sum of a real power series is real analytic throughout the open interval determined by its radius"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-analytic-function, thm-power-series-reexpansion-at-an-interior-point]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "Analytic function, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Analytic_function"
pipeline_run: null
---

## Statement

If a real power series centred at $c$ has radius $R>0$, then its sum is real analytic on $(c-R,c+R)$, interpreted as all of $\mathbb R$ when $R=+\infty$.

## Facts & Assumptions

**Given:** A power-series sum $f$ on its open radius interval.

[L1] At every point $d$ strictly inside the radius, $f$ has a convergent re-expansion in powers of $x-d$ on a positive neighbourhood ([[thm-power-series-reexpansion-at-an-interior-point]]).

[L2] Real analyticity means precisely the existence of such a local power-series representation at every point ([[def-real-analytic-function]]).

## Proof

**Proof technique:** direct.

1.1 Fix $d$ in the open radius interval. Then $R-|d-c|>0$, and [L1] represents $f$ by a power series about $d$ whenever $|x-d|<R-|d-c|$. [given, L1]

2.1 The neighbourhood in step 1.1 lies inside the open radius interval, so [L2] applies at every $d$ and proves that $f$ is real analytic there. [step 1.1, L2] ∎

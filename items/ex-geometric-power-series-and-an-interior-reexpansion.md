---
id: ex-geometric-power-series-and-an-interior-reexpansion
kind: example
title: "The geometric series represents $1/(1-x)$ for $|x|<1$ and re-expands explicitly about every $c$ with $|c|<1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-geometric-series, thm-power-series-reexpansion-at-an-interior-point, lem-local-reciprocal-of-a-real-power-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

For $|x|<1$,

$$\frac1{1-x}=\sum_{n=0}^{\infty}x^n.$$

More generally, if $|c|<1$, then

$$\frac1{1-x}=\sum_{n=0}^{\infty}\frac{(x-c)^n}{(1-c)^{n+1}}\qquad(|x-c|<1-c).$$

## Facts & Assumptions

**Given:** A real $c$ with $|c|<1$.

[L1] The geometric series sums to $1/(1-t)$ for $|t|<1$ ([[thm-geometric-series]]).

[L2] Power-series sums re-expand about interior points, and a nonzero local denominator has a reciprocal series ([[thm-power-series-reexpansion-at-an-interior-point]], [[lem-local-reciprocal-of-a-real-power-series]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] with $t=x$ to get the first formula. [L1]

2.1 The general results in [L2] show qualitatively that the sum re-expands about $c$ and that the nonzero denominator there has a local reciprocal series. To identify that series and its full convergence interval directly, use $1-x=(1-c)(1-(x-c)/(1-c))$ and $1-c>0$, and apply [L1] with $t=(x-c)/(1-c)$. This gives the second formula precisely when $|x-c|<1-c$. [given, L1, L2, algebra] ∎

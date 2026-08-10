---
id: lem-power-series-reexpansion-double-series
kind: lemma
title: "The binomial double series used to re-expand a power series at an interior point is absolutely convergent and may be regrouped"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-power-series-convergence-dichotomy, thm-binomial-theorem, thm-double-series-fubini, def-absolute-and-conditional-convergence]
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
    - title: "Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

Let $\sum_{n\ge0}a_n(x-c)^n$ have radius $R$, let $d$ satisfy $|d-c|<R$, and let $h$ satisfy $|d-c|+|h|<R$. Then

$$\sum_{n=0}^{\infty}\sum_{k=0}^{n}\iota\!\binom nk |a_n|\,|d-c|^{n-k}|h|^k<\infty.$$

Consequently the binomial double series is absolutely convergent and may be regrouped by powers of $h$:

$$\sum_{n=0}^{\infty}a_n(d+h-c)^n=\sum_{k=0}^{\infty}\left(\sum_{n=k}^{\infty}\iota\!\binom nk a_n(d-c)^{n-k}\right)h^k.$$

## Facts & Assumptions

**Given:** The power series and points $c,d,d+h$ from the statement.

[L1] A power series converges absolutely at every distance smaller than its radius ([[cor-power-series-convergence-dichotomy]]).

[L2] The binomial theorem gives $\sum_{k=0}^{n}\iota\!\binom nk u^{n-k}v^k=(u+v)^n$ for all real $u,v$ ([[thm-binomial-theorem]]).

[L3] An absolutely convergent double series may be summed and regrouped in either order ([[thm-double-series-fubini]], [[def-absolute-and-conditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Put $\rho:=|d-c|+|h|<R$. By [L2], the sum of the absolute values in row $n$ is $|a_n|\rho^n$. [given, L2, algebra]

2.1 The series $\sum_n|a_n|\rho^n$ converges by [L1], so the triangular double series is absolutely convergent. [step 1.1, L1]

3.1 Apply the binomial theorem before summing and [L3] to regroup the absolutely convergent double series by $k$. This yields the displayed identity. [step 2.1, L2, L3] ∎

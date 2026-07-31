---
id: thm-power-series-reexpansion-at-an-interior-point
kind: theorem
title: "A power-series sum may be re-expanded about every interior point, with coefficients given by its derivatives there"
status: published
origin: session
deps: [lem-power-series-reexpansion-double-series, cor-power-series-sums-are-smooth-with-coefficient-formula, thm-binomial-closed-formula]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "MIT 18.100C, Lecture 11: Power Series", url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"}]}
pipeline_run: null
---

## Statement

Suppose $f(x)=\sum_{n\ge0}a_n(x-c)^n$ has radius $R$, and let $d$ satisfy $|d-c|<R$. Then for every real $x$ with

$$|d-c|+|x-d|<R$$

one has

$$f(x)=\sum_{k=0}^{\infty}\frac{f^{(k)}(d)}{\iota(k!)}(x-d)^k.$$

Thus the sum may be re-expanded about every interior point.

## Facts & Assumptions

**Given:** The series for $f$ and the interior point $d$.

[L1] The binomial double series is absolutely convergent when $|d-c|+|x-d|<R$ and may be regrouped by powers of $x-d$ ([[lem-power-series-reexpansion-double-series]]).

[L2] Repeated termwise differentiation gives $f^{(k)}(d)=\sum_{n\ge k}\iota(n^{\underline k})a_n(d-c)^{n-k}$ ([[cor-power-series-sums-are-smooth-with-coefficient-formula]]).

[L3] $\binom nk k!=n^{\underline k}$ for $k\le n$ ([[thm-binomial-closed-formula]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x$ satisfying the stated inequality and set $h:=x-d$. By [L1], $f(x)=\sum_{k\ge0}b_kh^k$, where $b_k:=\sum_{n\ge k}\iota\!\binom nk a_n(d-c)^{n-k}$. [given, L1]

2.1 By [L2] and [L3], $\iota(k!)b_k=f^{(k)}(d)$ for every $k$. [step 1.1, L2, L3, algebra]

3.1 Substituting the coefficient identity from step 2.1 into the series in step 1.1 proves the formula. [step 1.1, step 2.1] ∎

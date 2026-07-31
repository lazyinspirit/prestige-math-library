---
id: lem-derived-and-integrated-power-series-have-the-same-radius
kind: lemma
title: "A power series, its formal derivative, and its zero-constant-term formal antiderivative have the same radius of convergence"
status: published
origin: session
deps: [def-real-power-series-and-radius-of-convergence, thm-geometric-series, lem-power-monotone, lem-of-abs-value, cor-cauchy-product-absolute, thm-direct-comparison-test, lem-nth-term-test, lem-convergent-implies-bounded, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
verification:
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
pipeline_run: null
---

## Statement

For a power series $\sum_{n\ge0}a_n(x-c)^n$, define its formal derivative and its zero-constant-term formal antiderivative by

$$\sum_{n\ge0}\iota(n+1)a_{n+1}(x-c)^n,\qquad \sum_{n\ge0}\frac{a_n}{\iota(n+1)}(x-c)^{n+1},$$

where $\iota(n+1)>0$ is the canonical natural in $\mathbb R$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]). All three power series have the same radius of convergence.

## Facts & Assumptions

**Given:** The three formal power series in the statement, centred at the same real $c$.

[L1] For $0\le q<1$, the geometric series $\sum q^n$ converges. Its terms are nonnegative, so $|q^n|=q^n$ and the convergence is absolute ([[thm-geometric-series]], [[lem-power-monotone]], [[lem-of-abs-value]]).

[L2] The Cauchy product of two absolutely convergent series converges absolutely; applying this to two copies of $\sum q^n$ shows that $\sum_{n\ge0}\iota(n+1)q^n$ converges ([[cor-cauchy-product-absolute]]).

[L3] The terms of a convergent series tend to $0$ ([[lem-nth-term-test]]), a convergent sequence is bounded ([[lem-convergent-implies-bounded]]), and direct comparison preserves convergence of nonnegative series ([[thm-direct-comparison-test]]).

[L4] The canonical naturals $\iota(n+1)$ are positive and at least $1$ ([[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 Fix distances $0\le r<s$ and put $q=r/s$ when $s>0$. By [L2], the series with nonnegative terms $\iota(n+1)q^n$ converges. Its terms tend to $0$ and hence form a bounded sequence by [L3], say with bound $M$. [L1, L2, L3, choose]

1.2 Conversely, if the derivative series converges absolutely at a distance $s>0$, then $|a_{n+1}|s^{n+1}\le s\,\iota(n+1)|a_{n+1}|s^n$ because $\iota(n+1)\ge1$. Comparison gives absolute convergence of the original series there, after adjoining its first term. [L3, L4, algebra]

1.3 If the original series converges absolutely at distance $s>0$, then the antiderivative terms satisfy $|a_n|s^{n+1}/\iota(n+1)\le s|a_n|s^n$, so the antiderivative converges absolutely at $s$. [L3, L4, algebra]

2.1 Suppose the original series converges absolutely at distance $s>0$. Its shifted absolute terms $u_n:=|a_{n+1}|s^{n+1}$ form a convergent series. At distance $r<s$, the derivative's absolute terms satisfy $\iota(n+1)|a_{n+1}|r^n=s^{-1}\iota(n+1)q^n u_n\le (M/s)u_n$, so the derivative series converges absolutely there by [L3]. [step 1.1, L3]

2.2 Conversely, if the antiderivative converges absolutely at distance $s>0$, put $v_n:=|a_n|s^{n+1}/\iota(n+1)$. At every $r<s$, $|a_n|r^n=s^{-1}\iota(n+1)q^n v_n\le(M/s)v_n$, so the original series converges absolutely at $r$ by [L3]. [step 1.1, L3]

3.1 Write $R_0,R_D,R_I$ for the three radii. If $0\le r<R_0$, the supremum definition supplies an admissible distance $s>r$ for the original series; choosing $u$ with $r<u<s$, the original series is absolutely convergent at $u$, and step 2.1 makes the derivative absolutely convergent at every distance below $r$. Thus $r$ is admissible for the derivative and $R_0\le R_D$. Conversely, if $0\le r<R_D$, choose an admissible derivative distance $s>r$ and then $u$ with $r<u<s$. The derivative converges absolutely at $u$, so step 1.2 and direct comparison make the original series absolutely convergent at every distance below $r$; hence $R_D\le R_0$. The same argument with steps 1.3 and 2.2 gives $R_0=R_I$. Therefore all three extended radii are equal, including $0$ and $+\infty$. [given, step 2.1, step 1.2, step 1.3, step 2.2, L3] ∎

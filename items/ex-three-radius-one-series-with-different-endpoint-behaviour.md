---
id: ex-three-radius-one-series-with-different-endpoint-behaviour
kind: example
title: "The radius-one series with coefficients $1/(n+1)^2$, $1/(n+1)$ and $1$ realise absolute, conditional and divergent endpoint behaviour"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cauchy-hadamard-for-real-power-series, thm-p-series-rational, thm-alternating-series-test, def-canonical-natural, lem-nth-root-of-n-tends-to-one, thm-algebra-of-limits]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
pipeline_run: null
---

## Statement

Each of

$$\sum_{n\ge0}\frac{x^n}{\iota(n+1)^2},\qquad \sum_{n\ge0}\frac{x^n}{\iota(n+1)},\qquad \sum_{n\ge0}x^n$$

has radius $1$. At $x=\pm1$ the first converges absolutely; the second converges conditionally at $-1$ and diverges at $1$; the third diverges at both endpoints.

## Facts & Assumptions

**Given:** The three displayed real power series.

[L1] The relevant coefficient roots tend to $1$, because $\iota(n)^{1/n}\to1$ and limits respect products and reciprocals ([[lem-nth-root-of-n-tends-to-one]], [[def-canonical-natural]], [[thm-algebra-of-limits]]).

[L2] Cauchy–Hadamard converts that limit into radius $1$ ([[thm-cauchy-hadamard-for-real-power-series]]).

[L3] The $p$-series converges for rational $p>1$ and diverges for $p\le1$, while the alternating harmonic series converges ([[thm-p-series-rational]], [[thm-alternating-series-test]]).

## Verification

**Proof technique:** cases.

1.1 By [L1], all three Cauchy–Hadamard limit superiors equal $1$, so [L2] gives radius $1$ in each case. [L1, L2]

1.2 For the squared-denominator series, absolute values at either endpoint form the $p$-series with $p=2$, which converges by [L3]. [assume-case squared, L3]

1.3 For the first-power denominator, $x=1$ gives the divergent harmonic series, while $x=-1$ gives a convergent alternating series whose absolute series is harmonic. [assume-case harmonic, L3]

1.4 For the constant coefficients, at either endpoint the terms have absolute value $1$ and do not tend to zero, so both endpoint series diverge. [assume-case constant, given]

2.1 The coefficient families in steps 1.2--1.4 exhaust the displayed series and give the asserted absolute, conditional, and divergent endpoint behaviours. [step 1.1, step 1.2, step 1.3, step 1.4, cases-exhaustive] ∎

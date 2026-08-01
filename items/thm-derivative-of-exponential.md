---
id: thm-derivative-of-exponential
kind: theorem
title: "The exponential function is smooth and $(\\exp)'=\\exp$"
status: published
origin: session
deps: [lem-exponential-series-has-infinite-radius, thm-termwise-differentiation-of-a-real-power-series, cor-power-series-sums-are-smooth-with-coefficient-formula, def-factorial-and-falling-factorial, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

The real exponential function is $C^\infty$, and for every $m\in\mathbb N$,
$$\exp^{(m)}=\exp.$$
In particular $(\exp)'=\exp$.

## Facts & Assumptions

**Given:** The exponential power series.

[L1] A real power series may be differentiated termwise inside its radius ([[thm-termwise-differentiation-of-a-real-power-series]]), and its sum is smooth there ([[cor-power-series-sums-are-smooth-with-coefficient-formula]]).

[L2] The radius is infinite, $(n+1)!=(n+1)n!$, and the canonical embedding preserves products and sends positive naturals to nonzero reals ([[lem-exponential-series-has-infinite-radius]], [[def-factorial-and-falling-factorial]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 Termwise differentiation gives $(\exp)'(x)=\sum_{n\ge1}\iota(n)x^{n-1}/\iota(n!)$.  [L1, L2]

2.1 Reindex $n=j+1$ and cancel $\iota(j+1)$ using the factorial recurrence. The series becomes $\sum_{j\ge0}x^j/\iota(j!)=\exp(x)$.  [step 1.1, L2, algebra]

3.1 Smoothness follows from [L1] and the infinite radius; iterating step 2.1 gives every higher derivative.  [step 2.1, L1, L2] ∎

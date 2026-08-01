---
id: thm-exponential-beats-every-polynomial
kind: theorem
title: "The exponential dominates every fixed nonnegative integer power at $+\\infty$"
status: published
origin: session
deps: [def-real-exponential-function-and-e, cor-exponential-reciprocal-and-positivity, def-limits-at-infinity, def-factorial-and-falling-factorial, def-canonical-natural, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
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

For every $m\in\mathbb N$ and every real $a>0$,
$$\frac{x^m}{\exp(ax)}\longrightarrow0\qquad(x\to+\infty).$$

## Facts & Assumptions

**Given:** $m\in\mathbb N$ and $a>0$.

[L1] Every term of the exponential series is nonnegative at a nonnegative argument ([[def-real-exponential-function-and-e]]).

[L2] The exponential reciprocal identity is [[cor-exponential-reciprocal-and-positivity]], and limits at infinity are [[def-limits-at-infinity]].

## Proof

**Proof technique:** direct.

1.1 For $x>0$, retain term $m+1$ of the series at $ax$: $\exp(ax)\ge (ax)^{m+1}/\iota((m+1)!)$.   [L1, given]

2.1 Hence $0\le x^m/\exp(ax)\le \iota((m+1)!)/(a^{m+1}x)$.  [step 1.1, L2, algebra]

3.1 The upper bound tends to $0$, so the quotient tends to $0$.  [step 2.1, L2] ∎

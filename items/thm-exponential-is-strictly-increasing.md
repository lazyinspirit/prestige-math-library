---
id: thm-exponential-is-strictly-increasing
kind: theorem
title: "The exponential function is strictly increasing"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-exponential-series-has-infinite-radius, thm-derivative-of-exponential, cor-exponential-reciprocal-and-positivity, cor-mean-value-theorem, cor-power-series-sums-are-continuous]
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
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

The exponential function is continuous and strictly increasing on $\mathbb R$.

## Facts & Assumptions

**Given:** The exponential function.

[L1] Its derivative equals itself ([[thm-derivative-of-exponential]]) and it is everywhere positive ([[cor-exponential-reciprocal-and-positivity]]).

[L2] The mean value theorem applies to a continuous function on a closed interval and converts a positive interior derivative into strict increase ([[cor-mean-value-theorem]]). A power-series sum is continuous at every point strictly inside its convergence interval, and the exponential series has infinite radius ([[cor-power-series-sums-are-continuous]], [[lem-exponential-series-has-infinite-radius]]).

## Proof

**Proof technique:** direct.

1.1 If $x<y$, the mean value theorem gives $\exp(y)-\exp(x)=\exp(c)(y-x)$ for some $c\in(x,y)$.  [L1, L2]

2.1 Both factors on the right are positive, so $\exp(y)>\exp(x)$. Continuity is the cited power-series conclusion.  [step 1.1, L1, L2] ∎

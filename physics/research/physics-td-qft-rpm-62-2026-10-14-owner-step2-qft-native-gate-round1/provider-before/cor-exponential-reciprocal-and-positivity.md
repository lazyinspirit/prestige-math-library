---
id: cor-exponential-reciprocal-and-positivity
kind: corollary
title: "The exponential is positive and satisfies $\\exp(-x)=1/\\exp(x)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-exponential-addition-formula, def-real-exponential-function-and-e, lem-of-square-positive]
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Chapter 10"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch10.pdf"
    - title: "S. G. Johnson, Exponential Functions"
      url: "https://math.mit.edu/~stevenj/exponential.pdf"
pipeline_run: null
---

## Statement

For every real $x$, $\exp(x)>0$ and
$$\exp(-x)=\frac1{\exp(x)}.$$

## Facts & Assumptions

**Given:** $x\in\mathbb R$.

[L1] $\exp(x+y)=\exp(x)\exp(y)$ ([[thm-exponential-addition-formula]]), and $\exp(0)=1$ from [[def-real-exponential-function-and-e]].

[L2] Every nonzero square in an ordered field is positive ([[lem-of-square-positive]]).

## Proof

**Proof technique:** direct.

1.1 Setting $y=-x$ in [L1] gives $\exp(x)\exp(-x)=1$, so both factors are nonzero.  [L1, algebra]

2.1 Also $\exp(x)=\exp(x/2)^2$, so it is nonnegative; by step 1.1 and [L2] it is positive.  [L1, L2]

3.1 Dividing the identity in step 1.1 by $\exp(x)$ gives the reciprocal formula.  [step 1.1, algebra] ∎

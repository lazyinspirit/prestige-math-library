---
id: ex-logarithmic-and-exponential-growth-comparisons
kind: example
title: "Concrete logarithmic, polynomial, and exponential growth comparisons"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-logarithm-slower-than-every-positive-power, thm-exponential-beats-every-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Example

As $x\to+\infty$,
$$\frac{\log x}{\sqrt x}\to0,\qquad\frac{x^5}{\exp x}\to0,\qquad\frac{x^2}{\exp(3x)}\to0.$$

## Facts & Assumptions

**Given:** Positive real $x$ tending to $+\infty$.

[L1] $\log x/x^\alpha\to0$ for every $\alpha>0$ ([[thm-logarithm-slower-than-every-positive-power]]).

[L2] $x^m/\exp(ax)\to0$ for every natural $m$ and $a>0$ ([[thm-exponential-beats-every-polynomial]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] with $\alpha=1/2$. [L1]

1.2 Apply [L2] with $(m,a)=(5,1)$ and $(m,a)=(2,3)$. [L2]

2.1 These are the three displayed limits. [step 1.1, step 1.2] ∎

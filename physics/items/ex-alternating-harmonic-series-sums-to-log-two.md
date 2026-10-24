---
id: ex-alternating-harmonic-series-sums-to-log-two
kind: example
title: "The alternating harmonic series sums to log 2"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-log-one-plus-x-power-series]
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

$$\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}n=\log2.$$

## Facts & Assumptions

**Given:** The endpoint formula for $\log(1+x)$.

[L1] At $x=1$, $\log(1+x)=\sum_{n\ge1}(-1)^{n+1}x^n/n$ converges to $\log2$ ([[thm-log-one-plus-x-power-series]]).

## Verification

**Proof technique:** direct.

1.1 Substituting $x=1$ into [L1] gives exactly the displayed alternating harmonic series. [L1]

2.1 Therefore the alternating harmonic series has sum $log2$. [step 1.1] ∎

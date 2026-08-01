---
id: cex-log-one-plus-x-series-at-minus-one
kind: counterexample
title: "The log(1+x) power series diverges at x=-1"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-log-one-plus-x-power-series, thm-p-series-real-exponents]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Statement refuted

The power series for $\log(1+x)$ converges at $x=-1$.

## Facts & Assumptions

**Given:** The endpoint $x=-1$.

[L1] The formula for $\log(1+x)$ is stated only on $(-1,1]$ ([[thm-log-one-plus-x-power-series]]).

[L2] The series $\sum_{n\ge1}1/n$ diverges ([[thm-p-series-real-exponents]]).



## Counterexample

**Proof technique:** direct.

1.1 At $x=-1$, its $n$-th formal term is $(-1)^{n+1}(-1)^n/n=-1/n$. [given, algebra]

2.1 Hence the formal series is $-\sum_{n\ge1}1/n$, which diverges by [L2]. [step 1.1, L2]

3.1 Thus $x=-1$ cannot be added to the convergence interval in [L1]. [step 2.1, L1] ∎

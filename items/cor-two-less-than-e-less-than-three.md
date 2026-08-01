---
id: cor-two-less-than-e-less-than-three
kind: corollary
title: "The elementary numerical bound $2<e<3$"
status: published
origin: session
deps: [lem-exponential-factorial-tail-bound, def-real-exponential-function-and-e, def-finite-sum, lem-finite-sum-laws]
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
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
pipeline_run: null
---

## Statement

$$2<e<3.$$

## Facts & Assumptions

**Given:** $e=\sum_{k\ge0}1/\iota(k!)$ ([[def-real-exponential-function-and-e]]).

[L1] The factorial tail bound is [[lem-exponential-factorial-tail-bound]].

## Proof

**Proof technique:** direct.

1.1 The first three terms give $e>1+1+1/2>2$.   [given]

1.2 The term at index $2$ is $1/2$. Apply [L1] with $x=1,N=2$: the tail from index $3$ onward is at most $2/3!=1/3$. Thus the whole tail after index $1$ is at most $1/2+1/3=5/6<1$, and hence $e<2+1=3$.  [L1, algebra]

2.1 Combining the strict bounds gives the claim.  [step 1.1, step 1.2] ∎

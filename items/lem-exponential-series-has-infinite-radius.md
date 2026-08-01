---
id: lem-exponential-series-has-infinite-radius
kind: lemma
title: "The exponential series converges absolutely for every real argument"
status: published
origin: session
deps: [def-real-exponential-function-and-e, thm-direct-comparison-test, thm-geometric-series, lem-absolute-convergence-implies-convergence, thm-of-archimedean, def-factorial-and-falling-factorial, def-canonical-natural]
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

For every real $x$, the series $\sum_{n\ge0}x^n/\iota(n!)$ converges absolutely. Its power-series radius is therefore $+\infty$.

## Facts & Assumptions

**Given:** A real $x$.

[L1] Archimedes supplies a natural larger than any prescribed real ([[thm-of-archimedean]]).

[L2] A tail bounded termwise by a convergent geometric series converges ([[thm-direct-comparison-test]], [[thm-geometric-series]]), and absolute convergence implies convergence ([[lem-absolute-convergence-implies-convergence]]).

[L3] $(n+1)!=n!(n+1)$, with nonzero embedded factorials ([[def-factorial-and-falling-factorial]], [[def-canonical-natural]]).

## Proof

**Proof technique:** direct.

1.1 If $x=0$, the series is $1+0+0+\cdots$ and converges absolutely. Hence assume $x\ne0$. Choose $N\ge1$ with $\iota(N)>2|x|$. For $n\ge N$, the absolute terms $a_n=|x|^n/\iota(n!)$ are positive and satisfy $a_{n+1}/a_n=|x|/\iota(n+1)<1/2$.  [L1, L3, choose]

2.1 Thus $a_{N+j}\le a_N2^{-j}$ by induction, and the tail is dominated by a convergent geometric series.  [step 1.1, L2]

3.1 The zero case from step 1.1 and, when $x\ne0$, adding the finite initial segment to the convergent tail prove absolute convergence for arbitrary $x$. Hence every nonnegative radius works and the radius is $+\infty$.  [step 1.1, step 2.1, L2] ∎

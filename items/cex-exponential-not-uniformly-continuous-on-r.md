---
id: cex-exponential-not-uniformly-continuous-on-r
kind: counterexample
title: "The exponential is not uniformly continuous on $\\mathbb{R}$"
status: published
origin: session
deps: [thm-derivative-of-exponential, thm-exponential-is-strictly-increasing, cor-mean-value-theorem, thm-exponential-beats-every-polynomial, cor-archimedean-reciprocal, def-uniform-continuity-real, thm-heine-cantor-r]
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

## Statement refuted

The exponential function is uniformly continuous on $\mathbb R$.

## Facts & Assumptions

**Given:** $\exp'=\exp$.

[L1] Uniform continuity is [[def-uniform-continuity-real]].

[L2] The exponential is strictly increasing ([[thm-exponential-is-strictly-increasing]]), the mean value theorem is [[cor-mean-value-theorem]], and exponential dominates polynomials ([[thm-exponential-beats-every-polynomial]]).

[L3] The reciprocal sequence $1/\iota(n)$ tends to $0$ when started at $n\ge1$ ([[cor-archimedean-reciprocal]]).

## Counterexample

**Proof technique:** direct.

1.1 For $n\ge1$, let $x_n=\iota(n)$ and $y_n=\iota(n)+1/\iota(n)$. Then $|y_n-x_n|=1/\iota(n)\to0$.  [L3]

1.2 By the mean value theorem, $\exp(y_n)-\exp(x_n)=\exp(c_n)/\iota(n)$ for some $c_n\in(x_n,y_n)$. Since exponential is increasing, this is at least $\exp(\iota(n))/\iota(n)$, which tends to $+\infty$ by [L2].   [L2, given]

2.1 Thus arbitrarily close pairs have image distances bounded away from $0$, contradicting the uniform-continuity condition [L1].  [step 1.1, step 1.2, L1] ∎

## Remarks

On every compact interval, $\exp$ is uniformly continuous by [[thm-heine-cantor-r]]; the failure is global.

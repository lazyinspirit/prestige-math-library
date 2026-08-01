---
id: thm-normalized-exponential-functional-equation
kind: theorem
title: "Regular normalized multiplicative Cauchy equations characterize the exponential"
status: published
origin: session
deps: [thm-exponential-ivp-uniqueness, thm-exponential-addition-formula, thm-exponential-is-strictly-increasing, cor-exponential-reciprocal-and-positivity, def-derivative, def-rational-power, thm-nth-roots-exist, lem-rat-embeds-dense, def-continuity-real]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
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

The exponential function is the unique continuous $F:\mathbb R\to(0,\infty)$ satisfying $F(x+y)=F(x)F(y)$ and $F(1)=e$. It is also the unique function differentiable at $0$ satisfying the functional equation, $F(0)=1$, and $F'(0)=1$.

## Facts & Assumptions

**Given:** A function $F$ satisfying one of the two normalizations.

[L1] The exponential satisfies the functional equation, is continuous, and satisfies the initial-value characterization ([[thm-exponential-addition-formula]], [[thm-exponential-is-strictly-increasing]], [[thm-exponential-ivp-uniqueness]]).

[L2] Positive $n$-th roots exist uniquely ([[thm-nth-roots-exist]]), rational powers are [[def-rational-power]], and rationals are dense ([[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** cases.

1.1 Under continuity and $F(1)=e$, the equation gives $F(n)=e^n$, $F(-n)=e^{-n}$, and uniqueness of positive roots gives $F(m/n)=e^{m/n}$ for rationals $m/n$. Density and continuity then give $F(x)=\exp(x)$ for every real $x$.   [assume-case continuous, L1, L2, given]

1.2 Under differentiability at $0$, $\frac{F(x+h)-F(x)}h=F(x)\frac{F(h)-1}h$, so $F'(x)=F(x)F'(0)=F(x)$. With $F(0)=1$, [L1] gives $F=\exp$.   [assume-case differentiable, given, L1, algebra]

2.1 The exponential itself satisfies both normalizations, so both uniqueness assertions follow.  [step 1.1, step 1.2, L1, cases-exhaustive] ∎

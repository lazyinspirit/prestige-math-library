---
id: thm-landau-logarithm-limit
kind: theorem
title: "Landau's root limit: log x is the limit of 2^n times (x^(1/2^n) minus 1)"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-real-power-agrees-with-rational-exponent, def-real-power, thm-derivative-of-exponential, def-derivative, lem-geometric-sequence-null, thm-algebra-of-limits]
justified_by: []
aliases: []
landmark: true
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

## Statement

For every $x>0$,
$$\log x=\lim_{n\to\infty}2^n\bigl(x^{1/2^n}-1\bigr).$$

## Facts & Assumptions

**Given:** A positive real $x$.

[L1] $x^r=\exp(r\log x)$ for real $r$, and this agrees with rational powers ([[def-real-power]], [[thm-real-power-agrees-with-rational-exponent]]).

[L2] $\exp'(0)=1$, so $\displaystyle\lim_{h\to0}(\exp h-1)/h=1$ ([[thm-derivative-of-exponential]], [[def-derivative]]).

[L3] $(1/2)^n\to0$, and limits respect sums, products, and scalar multiples ([[lem-geometric-sequence-null]], [[thm-algebra-of-limits]]).



## Proof

**Proof technique:** direct.

1.1 If $x=1$, every displayed summand is $0$, so the limit is $\log1=0$. [L1, algebra]

1.2 Suppose $x\ne1$ and put $h_n=(\log x)/2^n$. Then $h_n\to0$ and $x^{1/2^n}=\exp(h_n)$. [L1, L3]

2.1 We have $2^n(x^{1/2^n}-1)=\log x\,(\exp(h_n)-1)/h_n$. [step 1.2, algebra]

3.1 The derivative limit in [L2] makes the right-hand side tend to $\log x$, proving the claim together with step 1.1. [step 1.1, step 2.1, L2] ∎

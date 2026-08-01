---
id: cor-exponential-is-a-bijection-onto-positive-reals
kind: corollary
title: "The exponential is a continuous bijection from $\\mathbb{R}$ onto $(0,\\infty)$"
status: published
origin: session
deps: [thm-exponential-is-strictly-increasing, thm-exponential-limits-and-range, thm-intermediate-value, cor-power-series-sums-are-continuous]
justified_by: []
aliases: []
landmark: true
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

$$\exp:\mathbb R\longrightarrow(0,\infty)$$
is a bijection.

## Facts & Assumptions

**Given:** The real exponential function.

[L1] It is strictly increasing ([[thm-exponential-is-strictly-increasing]]) and continuous ([[cor-power-series-sums-are-continuous]]).

[L2] Its values are positive, and its limits at the two ends are $0$ and $+\infty$ ([[thm-exponential-limits-and-range]]).

[L3] A continuous function on an interval takes every intermediate value ([[thm-intermediate-value]]).

## Proof

**Proof technique:** direct.

1.1 Strict increase gives injectivity.  [L1]

1.2 Given $y>0$, [L2] provides $a<b$ with $\exp(a)<y<\exp(b)$. Applying [L3] on $[a,b]$ gives $c$ with $\exp(c)=y$.  [L1, L2, L3, choose]

2.1 Positivity gives the stated codomain, and steps 1.1 and 1.2 give bijectivity.  [step 1.1, step 1.2, L2] ∎

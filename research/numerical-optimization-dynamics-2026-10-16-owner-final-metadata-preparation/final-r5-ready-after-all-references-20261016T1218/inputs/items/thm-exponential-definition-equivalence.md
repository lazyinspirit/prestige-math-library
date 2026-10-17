---
id: thm-exponential-definition-equivalence
kind: theorem
title: "The power-series, product-limit, IVP, functional-equation, and Picard definitions agree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-exponential-function-and-e, thm-derivative-of-exponential, thm-exponential-product-limit, thm-exponential-ivp-uniqueness, thm-normalized-exponential-functional-equation, thm-picard-iterates-for-exponential]
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
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "University of Pennsylvania MATH 3600, Section 34"
      url: "https://www2.math.upenn.edu/~ancoop/3600/section-34.html"
    - title: "J. Lebl, Basic Analysis, Picard's Theorem"
      url: "https://www.jirka.org/ra/html/sec_picard.html"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

The following descriptions give the same function $\mathbb R\to(0,\infty)$: the power series $\sum x^n/\iota(n!)$; the product limit $\lim_n(1+x/\iota(n))^n$; the normalized solution of $y'=y,\ y(0)=1$; the normalized continuous multiplicative function; and the compact-uniform limit of the Picard iterates.

## Facts & Assumptions

**Given:** The five displayed constructions.

[L1] The series is [[def-real-exponential-function-and-e]].

[L2] The series-defined exponential satisfies $\exp'=\exp$ and $\exp(0)=1$, and the product, ODE-uniqueness, functional-equation, and Picard characterizations are [[thm-derivative-of-exponential]], [[thm-exponential-product-limit]], [[thm-exponential-ivp-uniqueness]], [[thm-normalized-exponential-functional-equation]], and [[thm-picard-iterates-for-exponential]].

## Proof

**Proof technique:** direct.

1.1 Each theorem in [L2] identifies its construction with the series-defined function in [L1], with exactly the normalization stated here.  [L1, L2]

2.1 Equality with a common function is transitive, so all five descriptions are equivalent.  [step 1.1, algebra] ∎

---
id: thm-minkowski-finite-real-exponents
kind: theorem
title: "Minkowski's inequality for finite sums and real exponent p greater than one"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-holder-finite-real-exponents, def-real-power, thm-real-power-laws, cor-exponential-reciprocal-and-positivity, def-finite-sum, lem-finite-sum-laws, lem-of-abs-value]
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

Let $p>1$. For real families $(a_i)_{i<n}$ and $(b_i)_{i<n}$,
$$\left(\sum_{i<n}|a_i+b_i|^p\right)^{1/p}\le\left(\sum_{i<n}|a_i|^p\right)^{1/p}+\left(\sum_{i<n}|b_i|^p\right)^{1/p}.$$

## Facts & Assumptions

**Given:** A natural $n$, a real $p>1$, and real families $a_i,b_i$ for $i<n$.

[L1] Holder's inequality holds for finite sums and conjugate real exponents ([[thm-holder-finite-real-exponents]]).

[L2] Finite sums distribute over addition, and $|u+v|\le|u|+|v|$ ([[def-finite-sum]], [[lem-finite-sum-laws]], [[lem-of-abs-value]]).

[L3] Positive-base real-power laws hold; the zero-base positive-exponent convention gives $0^r=0$, and positive-base real powers are positive ([[def-real-power]], [[thm-real-power-laws]], [[cor-exponential-reciprocal-and-positivity]]).



## Proof

**Proof technique:** direct.

1.1 Let $q=p/(p-1)$ and put $C=(\sum_{i<n}|a_i+b_i|^p)^{1/p}$. If $C=0$, the claim is immediate. [L2, L3]

1.2 For $C>0$, multiply $|a_i+b_i|^{p-1}$ by $|a_i+b_i|\le|a_i|+|b_i|$ and sum to get $C^p\le\sum|a_i||a_i+b_i|^{p-1}+\sum|b_i||a_i+b_i|^{p-1}$. [L2, L3]

2.1 Apply Holder to both sums in step 1.2. Since $(p-1)q=p$, their common second factor is $C^{p-1}$. [step 1.2, L1, L3]

3.1 Thus $C^p\le(A+B)C^{p-1}$, where $A,B$ are the two right-side norms; dividing by $C^{p-1}>0$ proves the claim. [step 1.1, step 2.1, L3] ∎

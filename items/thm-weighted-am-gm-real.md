---
id: thm-weighted-am-gm-real
kind: theorem
title: "The weighted arithmetic-geometric mean inequality for real weights"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-exponential-two-point-convexity, def-real-power, thm-natural-logarithm-laws, thm-real-power-laws, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
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

## Statement

Let $n\ge1$, let $x_1,\ldots,x_n>0$, and let $w_1,\ldots,w_n\ge0$ satisfy $\sum_{i=1}^nw_i=1$. Then
$$\prod_{i=1}^n x_i^{w_i}\le\sum_{i=1}^nw_ix_i.$$

## Facts & Assumptions

**Given:** Positive reals $x_i$ and nonnegative real weights $w_i$ summing to $1$.

[L1] The two-point exponential inequality holds for every weight in $[0,1]$ ([[thm-exponential-two-point-convexity]]).

[L2] Positive-base real powers and their product laws are $x^r=\exp(r\log x)$ and the laws of [[thm-real-power-laws]] ([[def-real-power]], [[thm-natural-logarithm-laws]]).

[L3] Mathematical induction is valid on natural numbers ([[thm-induction-principle]]).



## Proof

**Proof technique:** induction.

1.1 For $n=1$, $w_1=1$ and both sides are $x_1$. [base, given]

1.2 Assume the result for $n$ positive entries. For weights $w_1,\ldots,w_{n+1}$, if $w_{n+1}=1$ the claim is immediate; otherwise put $W=1-w_{n+1}>0$, $v_i=w_i/W$ for $i\le n$, and $P:=\prod_{i=1}^nx_i^{v_i}$. [ih, given]

1.3 Applying [L1] to $\log P,\log x_{n+1}$ with weights $W,w_{n+1}$ gives $P^Wx_{n+1}^{w_{n+1}}\le WP+w_{n+1}x_{n+1}$. [L1, L2]

2.1 The $v_i$ are nonnegative and sum to one, so the induction hypothesis gives $P\le A:=\sum_{i=1}^nv_ix_i$. [step 1.2, ih]

3.1 The left side in step 1.3 is $\prod_{i=1}^{n+1}x_i^{w_i}$, and step 2.1 makes its right side at most $\sum_{i=1}^{n+1}w_ix_i$. [step 2.1, step 1.3, L2, algebra]

4.1 The base and induction steps prove the inequality for every $n\ge1$. [step 1.1, step 3.1, L3, discharge-induction] ∎

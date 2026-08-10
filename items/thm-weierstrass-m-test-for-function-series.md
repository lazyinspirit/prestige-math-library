---
id: thm-weierstrass-m-test-for-function-series
kind: theorem
title: "The Weierstrass M-test gives absolute pointwise convergence and uniform convergence of a function series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-uniform-cauchy-criterion-function-series, thm-series-cauchy-criterion, thm-direct-comparison-test, def-series-of-real-functions, def-finite-sum, lem-finite-sum-laws, lem-of-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "University of Alberta Math 317, Infinite Series of Functions"
      url: "https://www.math.ualberta.ca/~xinweiyu/317.Q1.14w/LecNote317-02%20Infinite%20Series%20of%20Functions.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $f_k:X\to\mathbb{R}$. Suppose there is a sequence of
nonnegative reals $(M_k)$ such that

$$|f_k(x)|\le M_k\qquad(k\in\mathbb{N},\ x\in X)$$

and the scalar series $\sum M_k$ converges. Then $\sum f_k(x)$ converges
absolutely for every $x\in X$, and the function series $\sum f_k$ converges
uniformly on $X$.

## Facts & Assumptions

**Given:** Functions $f_k:X\to\mathbb{R}$ and nonnegative reals $M_k$ with $|f_k(x)|\le M_k$ for all $k,x$, such that $\sum M_k$ converges.

[L1] If $0\le a_k\le b_k$ eventually and $\sum b_k$ converges, then $\sum a_k$ converges ([[thm-direct-comparison-test]]).

[L2] A convergent real series has uniformly small scalar tails: for every real $\varepsilon>0$ there is $N$ such that $\left|\sum_{k=m+1}^{n}a_k\right|<\varepsilon$ whenever $n>m\ge N$ ([[thm-series-cauchy-criterion]]).

[L3] Repeated triangle inequalities for finite sums give $\left|\sum_{k=p}^{q}u_k\right|\le\sum_{k=p}^{q}|u_k|$, and finite sums preserve termwise inequalities ([[lem-of-triangle-inequality]], [[lem-of-abs-value]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L4] A function series converges uniformly exactly when its tails are uniformly small ([[cor-uniform-cauchy-criterion-function-series]], [[def-series-of-real-functions]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$. Since $0\le |f_k(x)|\le M_k$ for every $k$, [L1] shows that $\sum |f_k(x)|$ converges. [given, L1]

1.2 Let $\varepsilon>0$. By [L2] choose $N$ such that $\sum_{k=m+1}^{n}M_k<\varepsilon$ whenever $n>m\ge N$, the absolute value being unnecessary because the terms are nonnegative. [L2, choose]

2.1 For $n>m\ge N$ and $x\in X$, one has $\left|\sum_{k=m+1}^{n}f_k(x)\right|\le\sum_{k=m+1}^{n}|f_k(x)|\le\sum_{k=m+1}^{n}M_k<\varepsilon$. [step 1.2, L3]

3.1 Step 1.1 gives absolute pointwise convergence, while step 2.1 and [L4] give uniform convergence of $\sum f_k$. [step 1.1, step 2.1, L4] ∎

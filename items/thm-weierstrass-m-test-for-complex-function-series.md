---
id: thm-weierstrass-m-test-for-complex-function-series
kind: theorem
title: "Weierstrass M-test for complex-valued function series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-convergence-of-complex-valued-functions, thm-uniform-cauchy-criterion-complex-functions, thm-weierstrass-m-test-for-function-series, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and $f_n:X\to\mathbb C$. Suppose $M_n\ge0$, $|f_n(x)|\le M_n$ for all $n,x$, and the real series $\sum M_n$ converges. Then $\sum f_n(x)$ converges absolutely for every $x$ and its partial sums converge uniformly on $X$ in the sense of [[def-uniform-convergence-of-complex-valued-functions]].

## Facts & Assumptions

**Given:** Functions $f_n$ and a convergent nonnegative majorant series $\sum M_n$ as in the Statement.

[L1] For complex numbers, $|z+w|\le |z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L2] A complex-valued function sequence converges uniformly if and only if it is uniformly Cauchy ([[thm-uniform-cauchy-criterion-complex-functions]]).

[L3] The real Weierstrass M-test states that the same majorant hypotheses give absolute pointwise and uniform convergence for real-valued functions ([[thm-weierstrass-m-test-for-function-series]]).

## Proof

**Proof technique:** direct.

1.1 For partial sums $S_N(x)=\sum_{n<N}f_n(x)$ and $q>p$, [L1] gives $|S_q(x)-S_p(x)|\le\sum_{p\le n<q}M_n$ for every $x$. [L1, algebra]

2.1 Since the real series $\sum M_n$ is Cauchy, its tails make the bound in step 1.1 uniformly small; thus $(S_N)$ is uniformly Cauchy and converges uniformly by [L2]. [step 1.1, L2]

3.1 For each $x$, the nonnegative series $\sum |f_n(x)|$ is bounded termwise by $\sum M_n$, exactly the comparison used in [L3], and therefore converges. Zero majorants and the empty set require no separate choice. [L3] ∎

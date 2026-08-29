---
id: thm-absolute-convergence-criterion-for-complex-infinite-products
kind: theorem
title: "Absolute convergence criterion for complex infinite products"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [rem-complex-infinite-product-dictionary, thm-infinite-product-criterion, def-infinite-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 Infinite products"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 3 §3.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Statement

Let $(a_n)_{n\ge0}$ be a sequence of complex numbers. The following are
equivalent:

1. the product $\prod_{n\ge0}(1+a_n)$ is absolutely convergent, meaning that
   $\prod_{n\ge0}(1+|a_n|)$ converges;
2. the series $\sum_{n\ge0}|a_n|$ converges.

When these conditions hold, the complex product $\prod_{n\ge0}(1+a_n)$ itself
converges and has nonzero value.

## Facts & Assumptions

**Given:** A complex sequence $(a_n)$.

[F1] Absolute convergence of $\prod(1+a_n)$ means convergence of the real
product $\prod(1+|a_n|)$
([[rem-complex-infinite-product-dictionary]]).

[F2] For nonnegative reals $(p_n)$, the product $\prod(1+p_n)$ converges if and
only if the series $\sum p_n$ converges; also, when $\sum p_n$ converges, every
tail with sufficiently small sum has bounded partial products
([[thm-infinite-product-criterion]]).

[F3] An infinite product converges when some tail has nonzero factors and a
nonzero tail-product limit ([[def-infinite-product]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], absolute convergence of $\prod(1+a_n)$ is exactly convergence of the real product $\prod(1+|a_n|)$, and [F2] makes that equivalent to convergence of $\sum|a_n|$. This proves the equivalence of claims 1 and 2. [F1, F2, given]

1.2 Assume now that $\sum|a_n|$ converges. By [F2], choose $N$ so that $\sum_{n\ge N}|a_n|<1/2$; then $|a_n|<1/2$ for every $n\ge N$, so $1+a_n\ne0$ on that tail. [F2, choose, algebra]

2.1 For $m>n\ge N$ one has $\left|\prod_{k=n}^{m}(1+a_k)-1\right|\le\prod_{k=n}^{m}(1+|a_k|)-1$, and the right-hand side tends to $0$ as $n,m\to\infty$ because the real tail products converge by [F2]. Hence the complex tail partial products form a Cauchy sequence, so they converge to some limit $\ell\in\mathbb C$. [F2, step 1.2, algebra]

3.1 For the same tail, $|1+a_n|\ge1-|a_n|>0$, so $\left|\prod_{k=N}^{m}(1+a_k)\right|\ge\prod_{k=N}^{m}(1-|a_k|)$ for every $m\ge N$; by [F2], the real product $\prod_{k\ge N}(1-|a_k|)$ converges to a positive limit because $\sum_{k\ge N}|a_k|$ converges and each term is in $[0,1/2)$. Therefore the complex tail partial products are bounded away from $0$, so the limit $\ell$ of step 2.1 is nonzero. Now [F3] makes $\prod(1+a_n)$ convergent with nonzero value. [F2, F3, step 1.2, step 2.1, algebra] ∎

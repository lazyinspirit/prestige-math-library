---
id: thm-normal-convergence-of-holomorphic-products
kind: theorem
title: "Normally convergent products define holomorphic functions with the expected zeros"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-absolute-convergence-criterion-for-complex-infinite-products, def-normal-convergence-of-holomorphic-products, thm-weierstrass-convergence-holomorphic-functions, thm-zero-order-factorization-holomorphic-function]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 Infinite products"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 3 §3.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, and let $(f_n)_{n\ge0}$ be holomorphic
functions on $\Omega$ whose product is normally convergent in the sense of
[[def-normal-convergence-of-holomorphic-products]]. Assume moreover that no
factor $f_n$ is identically zero on $\Omega$. Then the partial products

$$P_m(z):=\prod_{n=0}^{m}f_n(z)$$

converge locally uniformly on $\Omega$ to a holomorphic function $F$.

Moreover, on every compact set $K\subseteq\Omega$, all but finitely many factors
$f_n$ are zero-free and the tail limit is zero-free; therefore the zeros of $F$
on $K$, counted with multiplicity, are exactly those contributed by the finitely
many exceptional factors.

## Facts & Assumptions

**Given:** An open set $\Omega$ and a normally convergent holomorphic product $\prod f_n$ on $\Omega$, with no factor $f_n$ identically zero on $\Omega$.

[F1] Normal convergence means that on each compact $K\subseteq\Omega$ there is an index $N$ such that $f_n$ has no zero on $K$ for $n\ge N$ and $\sum_{n\ge N}\sup_K|f_n-1|<\infty$ ([[def-normal-convergence-of-holomorphic-products]]).

[F2] If $\sum|a_n|$ converges, then $\prod(1+a_n)$ converges and has nonzero value ([[thm-absolute-convergence-criterion-for-complex-infinite-products]]).

[F3] Locally uniform limits of holomorphic functions are holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

[F4] Multiplication by a holomorphic factor that is nonzero at a point does not change the order of a zero there ([[thm-zero-order-factorization-holomorphic-function]]).

## Proof

**Proof technique:** direct.

1.1 Fix a compact set $K\subseteq\Omega$. By [F1], choose $N$ so that $f_n$ has no zero on $K$ for $n\ge N$ and $M_n:=\sup_K|f_n-1|$ satisfies $\sum_{n\ge N}M_n<\infty$; enlarging $N$ if needed, assume also $M_n<1/2$ for $n\ge N$. [F1, given, choose]

2.1 For $m\ge\ell\ge N$ and $z\in K$, one has $\left|\prod_{n=\ell}^{m}f_n(z)-1\right|\le\prod_{n=\ell}^{m}(1+M_n)-1$, while $|f_n(z)|\ge1-M_n$ for $n\ge N$. By [F2], the real products $\prod_{n\ge N}(1+M_n)$ and $\prod_{n\ge N}(1-M_n)$ converge, so the tail partial products of $\prod f_n$ are uniformly bounded above and uniformly bounded away from $0$ on $K$. [F2, step 1.1, algebra]

3.1 The estimate of step 2.1 implies that the tail partial products are uniformly Cauchy on $K$, hence converge uniformly there to a continuous zero-free limit $Q_K$; multiplying by the finite holomorphic prefix $\prod_{n< N}f_n$ gives uniform convergence of the full partial products on $K$. Because $K$ was arbitrary, the convergence is locally uniform on $\Omega$, and [F3] makes the limit function $F$ holomorphic. [F2, F3, step 2.1, algebra]

4.1 On the fixed compact set $K$, write $F=\left(\prod_{n< N}f_n\right)Q_K$ with $Q_K$ holomorphic and zero-free by step 3.1. Because no factor $f_n$ is identically zero on $\Omega$, the finitely many prefix factors have only isolated zeros, and [F4] shows that every zero of $F$ on $K$, with its multiplicity, comes from that finite prefix and no tail factor contributes a new zero. [F4, step 1.1, step 3.1, given, algebra] ∎

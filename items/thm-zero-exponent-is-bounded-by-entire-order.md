---
id: thm-zero-exponent-is-bounded-by-entire-order
kind: theorem
title: "The exponent of convergence of the zeros of an entire function does not exceed its order"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-order-of-an-entire-function, cor-jensen-zero-counting-bound, def-exponent-of-convergence-of-a-zero-sequence, thm-zero-order-factorization-holomorphic-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 §2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Let $f$ be a nonzero entire function of finite order $\rho$. For a finite
multiset of nonzero zeros, use the convention that its exponent of convergence
is $0$. If the nonzero zero multiset is infinite, let $(a_n)_{n\ge1}$ list it
with multiplicity and without finite accumulation point. In either case the
exponent of convergence satisfies

$$\lambda\le\rho.$$

Equivalently, for every real $s>\rho$ the reciprocal power sum over all nonzero
zeros, counted with multiplicity, is finite; in the infinite case this is

$$\sum_{n\ge1}|a_n|^{-s}<\infty.$$

## Facts & Assumptions

**Given:** A nonzero entire function $f$ of order $\rho<\infty$ and its
nonzero zero multiset, enumerated as $(a_n)$ when it is infinite.

[F1] The order is the limsup growth rate of $\log\log M_f(r)$ ([[def-order-of-an-entire-function]]).

[F2] Jensen's counting corollary bounds the number $n(r)$ of zeros in $|z|\le r$ in terms of the boundary growth on a larger circle ([[cor-jensen-zero-counting-bound]]).

[F3] The exponent of convergence is the infimum threshold for convergence of the reciprocal power sums ([[def-exponent-of-convergence-of-a-zero-sequence]]).

[F4] A zero of finite order can be factored off locally as a power of $z$ times a holomorphic function nonvanishing at $0$ ([[thm-zero-order-factorization-holomorphic-function]]).

## Proof

**Proof technique:** direct.

1.1 Let $m$ be the order of the zero of $f$ at $0$, with $m=0$ if $f(0)\ne0$. By [F4], there is an entire function $g$ with $g(0)\ne0$ and $$f(z)=z^m g(z),$$ so $g$ has exactly the same nonzero zeros as $f$, with the same multiplicities. [F4, given, construct]

1.2 If that nonzero zero multiset is finite, every reciprocal power sum over
it is finite and its exponent is $0\le\rho$, so the conclusion holds. Hence
assume from now on that it is infinite and enumerate it as $(a_n)_{n\ge1}$.
[step 1.1, given, cases]

2.1 For $r\ge1$ and $|z|=r$, step 1.1 gives $|g(z)|=|f(z)|/r^m\le|f(z)|$, hence $M_g(r)\le M_f(r)$. Therefore $g$ has order at most $\rho$ by [F1]. [F1, step 1.1, step 1.2, algebra]

3.1 Fix real numbers $\sigma,s$ with $\rho<\sigma<s$. By [F1] and step 2.1, for all sufficiently large $r$ one has $\log M_g(2r)\le(2r)^\sigma$. Applying [F2] to $g$, whose value at $0$ is nonzero by step 1.1, yields $$n(r)\log2\le\frac{1}{2\pi}\int_0^{2\pi}\log|g(2re^{it})|\,dt-\log|g(0)|\le(2r)^\sigma-\log|g(0)|,$$ where $n(r)$ counts the nonzero zeros of $f$ in $|z|\le r$. Thus $n(r)\le Cr^\sigma$ for all large $r$. [F1, F2, step 1.1, step 2.1, choose, algebra]

4.1 Split the nonzero zeros into dyadic shells $2^j\le|a_n|<2^{j+1}$. The number of zeros in the $j$th shell is at most $n(2^{j+1})$, so for large $j$ one has $$\sum_{2^j\le|a_n|<2^{j+1}}|a_n|^{-s}\le n(2^{j+1})2^{-js}\le C2^{(j+1)\sigma}2^{-js}=C2^\sigma 2^{-j(s-\sigma)}.$$ Since $s-\sigma>0$, the dyadic majorant is summable. [step 3.1, algebra]

5.1 Therefore $\sum_{n\ge1}|a_n|^{-s}<\infty$ for every $s>\rho$. By [F3], this means the exponent of convergence $\lambda$ of the nonzero zero sequence satisfies $\lambda\le\rho$. [F3, step 4.1, algebra] ∎

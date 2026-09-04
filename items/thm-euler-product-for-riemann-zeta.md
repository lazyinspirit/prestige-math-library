---
id: thm-euler-product-for-riemann-zeta
kind: theorem
title: "The Riemann zeta function has its Euler product on the half-plane $\\operatorname{Re}s>1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-zeta-function, lem-riemann-zeta-dirichlet-series-converges-locally-uniformly, thm-absolute-convergence-criterion-for-complex-infinite-products, thm-fundamental-theorem-of-arithmetic, thm-canonical-prime-factorisation]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

For every $s\in\mathbb C$ with $\operatorname{Re}s>1$,

$$\zeta(s)=\prod_p \frac{1}{1-p^{-s}},$$

where the product ranges over the primes and converges absolutely and locally
uniformly on $\operatorname{Re}s>1$.

## Facts & Assumptions

**Given:** A complex number $s$ with $\operatorname{Re}s>1$.

[L1] On $\operatorname{Re}s>1$, $\zeta(s)=\sum_{n\ge1}n^{-s}$ and this series converges absolutely and locally uniformly ([[def-riemann-zeta-function]], [[lem-riemann-zeta-dirichlet-series-converges-locally-uniformly]]).

[L2] If $\sum|a_n|$ converges, then $\prod(1+a_n)$ converges and has nonzero value ([[thm-absolute-convergence-criterion-for-complex-infinite-products]]).

[L3] Every integer $n\ge1$ has a unique prime factorization up to order ([[thm-fundamental-theorem-of-arithmetic]]).

[L4] Canonical prime factorization rewrites each integer by the exponents of its prime divisors ([[thm-canonical-prime-factorisation]]).

## Proof

**Proof technique:** direct.

1.1 Write $\sigma:=\operatorname{Re}s$. Since the primes are among the integers at least $2$, $$\sum_p |p^{-s}|=\sum_p p^{-\sigma}\le\sum_{n=2}^\infty n^{-\sigma}<\infty$$ by [L1]. Therefore [L2] applies to $a_p:=-p^{-s}$, so the product $\prod_p(1-p^{-s})$ converges and is nonzero. [given, L1, L2, algebra]

1.2 For a finite set $P$ of primes, $$\prod_{p\in P}\frac{1}{1-p^{-s}}=\prod_{p\in P}\sum_{k\ge0}p^{-ks}.$$ Multiplying out this finite product lists exactly the terms $n^{-s}$ for those integers $n\ge1$ whose prime divisors all lie in $P$, and [L3] with [L4] shows that each such integer appears exactly once. Hence $$\prod_{p\in P}\frac{1}{1-p^{-s}}=\sum_{\substack{n\ge1\\ p\mid n\Rightarrow p\in P}} n^{-s}.$$ [L3, L4, algebra]

2.1 Let $P_N$ be the set of primes at most $N$. By step 1.2 the corresponding partial products are the partial sums over integers all of whose prime divisors lie in $P_N$. Every fixed integer eventually has this property, and the omitted terms are bounded in absolute value by the tail of the absolutely convergent series in [L1]. Therefore these partial products converge pointwise to $\sum_{n\ge1}n^{-s}=\zeta(s)$. [step 1.1, step 1.2, L1, algebra]

3.1 Let $K\subseteq\{s:\operatorname{Re}s>1\}$ be compact, and choose $\sigma>1$ with $\operatorname{Re}s\ge\sigma$ on $K$. If an integer $n$ is omitted from the partial product over $P_N$, then $n$ has some prime divisor greater than $N$, hence $n>N$. So for $s\in K$, $$\left|\zeta(s)-\prod_{p\le N}\frac{1}{1-p^{-s}}\right| \le \sum_{n>N} n^{-\sigma}.$$ The tail on the right tends to $0$ independently of $s$, so the partial products converge uniformly on $K$. Thus the Euler product converges locally uniformly on $\operatorname{Re}s>1$. Combining this with steps 1.1 and 2.1 proves the stated formula together with its absolute and locally uniform convergence. [step 2.1, L1, choose, algebra] ∎

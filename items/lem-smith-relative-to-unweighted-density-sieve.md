---
id: lem-smith-relative-to-unweighted-density-sieve
kind: lemma
title: "A density-zero exceptional family of imaginary quadratic fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [def-fundamental-quadratic-discriminant, thm-fundamental-discriminants-have-density]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families II, Example 3.11"
      url: "https://arxiv.org/pdf/2207.05143"
      locator: "Example 3.11, negligible class-group comparison exceptions"
    - title: "K. S. Kedlaya, Notes on Analytic Number Theory, Theorem 10.11"
      url: "https://kskedlaya.org/18.785/errorbounds2.pdf"
      locator: "Chapter 10, prime distribution in arithmetic progressions"
verification: {}
---

## Statement

Let $\mathcal X(H)$ be the imaginary quadratic fields with absolute fundamental discriminant at most $H$. Let $\mathcal B(H)$ consist of those fields whose fundamental discriminant has no prime divisor congruent to $3$ modulo $4$. Then
$$\lim_{H\to\infty}\frac{|\mathcal B(H)|}{|\mathcal X(H)|}=0.$$

## Statement references

[[def-fundamental-quadratic-discriminant]]

[[thm-fundamental-discriminants-have-density]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families II*, Example 3.11](https://arxiv.org/pdf/2207.05143)

## Facts & Assumptions

**Given:** The discriminant-bounded families in the Statement.

[F1] The number of negative fundamental discriminants of absolute value at most $H$ is $(3/\pi^2)H+O(\sqrt H)$. [[thm-fundamental-discriminants-have-density]]

## Proof

1.1 Write $\chi_4$ for the nontrivial Dirichlet character modulo $4$. For $s>1$, absolute convergence and unique factorization give the Euler products for $\zeta(s)$ and $L(s,\chi_4)$. Their logarithms satisfy $$\log\zeta(s)-\log L(s,\chi_4)=2\sum_{p\equiv3\, (4)}p^{-s}+O(1),$$ uniformly as $s\downarrow1$: the prime-power terms with exponent at least two are bounded by a convergent multiple of $\sum_{m\ge2}m^{-2}$. The alternating-series bounds give $2/3\le L(s,\chi_4)\le1$ for $1<s\le2$, while $\zeta(s)\to\infty$. Consequently $\sum_{p\equiv3\, (4)}1/p$ diverges. [given, construct, algebra]

2.1 For a finite set $P$ of primes congruent to $3$ modulo $4$, inclusion–exclusion counts at most $H\prod_{p\in P}(1-1/p)+O(2^{|P|})$ positive integers at most $H$ divisible by none of them. Each exceptional field gives one such positive integer, namely the absolute value of its discriminant. Dividing this estimate by [F1] and taking $H\to\infty$ gives an upper limit at most $(\pi^2/3)\prod_{p\in P}(1-1/p)$. By step 1.1, finite sets $P$ make this product arbitrarily small. The ratio is nonnegative, proving the limit. [F1, step 1.1, algebra] ∎

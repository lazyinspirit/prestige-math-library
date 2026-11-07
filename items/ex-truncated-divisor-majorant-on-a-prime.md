---
id: ex-truncated-divisor-majorant-on-a-prime
kind: example
title: "The truncated divisor sum at a prime above the cutoff"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-goldston-yildirim-truncated-divisor-sum
  - def-prime
  - def-number-theoretic-mobius-function
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§§3, 9–10 and Appendix A; exact passages inspected in the complete local full-text snapshot"
    - title: "Daniel A. Goldston and Cem Y. Yıldırım, Higher correlations of divisor sums related to primes III: k-correlations"
      url: "https://arxiv.org/pdf/math/0209102"
      locator: "Theorem 1.1 and §6; independent untricked correlation calculation inspected in full relevant sections"
---
## Example

Let $q$ be a prime and let $R$ be real with $1<R<q$. Then the truncated divisor sum has the exact value $\Lambda_R(q)=\log R$.

## Example references

[Green and Tao, Annals 2008, §§3, 9–10](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Goldston and Yıldırım, Theorem 1.1 and §6](https://arxiv.org/pdf/math/0209102)

## Facts & Assumptions

**Given:** A prime $q$, a cutoff $1<R<q$, and the truncated divisor sum.

[F1] [[def-goldston-yildirim-truncated-divisor-sum]]: $\Lambda_R(q)=\sum_{\substack{d\mid q\\1\le d\le R}}\mu(d)\log(R/d)$ over positive divisors.

[F2] [[def-prime]]: The positive divisors of a prime $q$ are $1$ and $q$.
## Proof

1.1 By [F2], the only positive divisors of $q$ are $1$ and $q$. The strict inequality $R<q$ excludes $q$ from the truncated sum, and $1<R$ includes the divisor $1$. [F1, F2, given, algebra]

2.1 The remaining summand is $\mu(1)\log R=\log R$, since the empty prime factorization gives $\mu(1)=1$. [F1, step 1.1, algebra] ∎

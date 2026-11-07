---
id: lem-unwrap-w-tricked-progression-to-primes
kind: lemma
title: "Unwrapping a supported W-tricked progression gives a prime progression"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§9, proof of Theorem 1.1, printed pp. 523–524; the final W-trick unwrapping"
    - title: "David Conlon, Jacob Fox, and Yufei Zhao, The Green–Tao theorem: an exposition"
      url: "https://arxiv.org/pdf/1403.2957"
      locator: "§8, proof of Theorem 1.1, printed p. 22"
---
## Statement

Let $k\ge3$, let $W$ be a positive integer, let $b$ be an integer, and let $n_0,d$ be integers with $d>0$. If $q_j=W(n_0+jd)+b$ is greater than $1$ and has no positive divisors other than $1$ and itself for every $j=0,1,\ldots,k-1$, then the $q_j$ form a nonconstant $k$-term arithmetic progression of primes with common difference $Wd$.

## Statement references

[Green and Tao, §9, proof of Theorem 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Conlon, Fox, and Zhao, §8](https://arxiv.org/pdf/1403.2957)

## Facts & Assumptions

**Given:** The integers $k,W,b,n_0,d$ and the assumption that each displayed value is prime.

[A1] The integer parameters satisfy $W>0$ and $d>0$, and each displayed $q_j$ has the prime-divisor property stated in the formulation.

## Proof

1.1 For each $j=0,\ldots,k-1$, set $n_j=n_0+jd$ and $q_j=Wn_j+b$. By [A1], each $q_j$ is a prime integer. [given, A1, construct]

1.2 For every $j<k-1$,
$$q_{j+1}-q_j=W(n_{j+1}-n_j)=W((n_0+(j+1)d)-(n_0+jd))=Wd>0.$$
Thus the $q_j$ are distinct primes in a nonconstant arithmetic progression, with positive common difference $Wd$. [given, step 1.1, algebra] ∎

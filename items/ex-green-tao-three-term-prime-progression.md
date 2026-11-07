---
id: ex-green-tao-three-term-prime-progression
kind: example
title: "A three-term prime progression and its W-tricked parameters"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - thm-primes-contain-arbitrarily-long-arithmetic-progressions
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "Theorem 1.1, printed p. 482; the theorem includes the k=3 case"
    - title: "David Conlon, Jacob Fox, and Yufei Zhao, The Green–Tao theorem: an exposition"
      url: "https://arxiv.org/pdf/1403.2957"
      locator: "Theorem 1.1 and §8, printed pp. 1 and 22"
---
## Example

Here a positive prime is an integer greater than $1$ whose only positive divisors are $1$ and itself. The prime progression theorem gives infinitely many three-term arithmetic progressions in the primes. One explicit progression is $5,11,17$: with $W=2$ and $b=1$, its W-tricked indices are $2,5,8$, which have common difference $3$.

## Example references

[[thm-primes-contain-arbitrarily-long-arithmetic-progressions|The prime progression theorem]]

[Green and Tao, Theorem 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

## Facts & Assumptions

**Given:** The prime progression theorem and the positive integers $5,11,17$.

[F1] [[thm-primes-contain-arbitrarily-long-arithmetic-progressions]]: For every fixed $k\ge3$, there are infinitely many nonconstant $k$-term arithmetic progressions of positive primes.

## Proof

1.1 Applying [F1] with $k=3$ gives infinitely many three-term prime progressions, the general assertion being illustrated. [F1, given]

1.2 A composite integer has a prime divisor at most its square root. The integers $5,11,17$ have no such divisor: $5\equiv1\pmod2$; $11\equiv1\pmod2$ and $2\pmod3$; and $17\equiv1\pmod2$ and $2\pmod3$. Their successive differences are both $6$. Also $2\cdot2+1=5$, $2\cdot5+1=11$, and $2\cdot8+1=17$, with index difference $3$. [given, algebra] ∎

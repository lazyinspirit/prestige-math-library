---
id: thm-chen-goldbach-prime-plus-p2
kind: theorem
title: "Every sufficiently large even integer is a prime plus a P2 number"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - lem-chen-switching-count-lower-bound
  - lem-chen-singular-series-specialization
  - def-prime-factor-count-with-multiplicity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jing-run Chen, On the representation of a large even integer as the sum of a prime and the product of at most two primes, Theorem 1"
      url: "https://raw.githubusercontent.com/lixiang90/chen_theorem/main/pdf/main_en.pdf"
    - title: "Heini Halberstam, A proof of Chen's theorem"
      url: "https://www.numdam.org/item/AST_1975__24-25__281_0.pdf"
---

## Statement

There is $N_0$ such that for every even integer $N\ge N_0$,

$$\#\{p\le N:p\text{ is prime and }N-p\in P_2\} \ge0.67\,C(N)\frac{N}{(\log N)^2},$$

where $P_2$ is the set of integers greater than $1$ with at most two prime
factors counted with multiplicity and

$$C(N)=\prod_{\substack{q\mid N\\q>2}}\frac{q-1}{q-2} \prod_{q>2}\left(1-\frac1{(q-1)^2}\right).$$

In particular, every even $N\ge N_0$ is a sum of a prime and a number in
$P_2$.

## Statement references

[[def-prime-factor-count-with-multiplicity|Almost-primes and P2]]

[[lem-chen-singular-series-specialization|Chen's normalized singular series]]

Chen, *On the representation of a large even integer as the sum of a prime and the product of at most two primes*, Theorem 1

Halberstam, *A proof of Chen's theorem*

## Facts & Assumptions

**Given:** An even integer $N$ in the range of the Statement.

[F1] [[lem-chen-switching-count-lower-bound]]: for all sufficiently large even $N$, at least $0.67C(N)N/(\log N)^2$ primes $p\le N$ satisfy $N-p\in P_2$.

[F2] [[lem-chen-singular-series-specialization]]: $C(N)>0$.

[F3] [[def-prime-factor-count-with-multiplicity]]: $P_2$ means $N-p>1$ and $\Omega(N-p)\le2$, with repeated prime factors counted repeatedly.

## Proof

**Given:** An even integer $N$ in the range of the Statement.

[F1] [[lem-chen-switching-count-lower-bound]]: for all sufficiently large even $N$, at least $0.67C(N)N/(\log N)^2$ primes $p\le N$ satisfy $N-p\in P_2$.

[F2] [[lem-chen-singular-series-specialization]]: $C(N)>0$.

[F3] [[def-prime-factor-count-with-multiplicity]]: $P_2$ means $N-p>1$ and $\Omega(N-p)\le2$, with repeated prime factors counted repeatedly.



**Given:** The even integer $N$ and the supplier statements [F1]–[F3].

1.1 Increase $N_0$ if necessary so that [F1] holds. Then [F1] gives the stated lower bound for the number of prime representations. [F1, given]

2.1 The right side is positive by [F2] and $N>1$. The left side is an integer, so it is at least $1$; each counted prime satisfies $N=p+(N-p)$ with $N-p\in P_2$ by [F3]. [F2, F3, step 1.1, algebra] ∎

---
id: thm-chen-prime-shift-plus-p2
kind: theorem
title: "Infinitely many prime shifts have at most two prime factors"
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
    - title: "Jing-run Chen, On the representation of a large even integer as the sum of a prime and the product of at most two primes, Theorem 2"
      url: "https://raw.githubusercontent.com/lixiang90/chen_theorem/main/pdf/main_en.pdf"
    - title: "Heini Halberstam, A proof of Chen's theorem"
      url: "https://www.numdam.org/item/AST_1975__24-25__281_0.pdf"
---

## Statement

For every fixed nonzero even integer $h$, there is $x_0(h)$ such that for
every $x\ge x_0(h)$,

$$\#\{p\le x:p\text{ is prime},\ 0<p+h\le x,\ p+h\in P_2\} \ge0.67\,C(h)\frac{x}{(\log x)^2},$$

where $P_2$ is the set of integers greater than $1$ with at most two prime
factors counted with multiplicity and

$$C(h)=\prod_{\substack{q\mid h\\q>2}}\frac{q-1}{q-2} \prod_{q>2}\left(1-\frac1{(q-1)^2}\right).$$

Consequently, infinitely many primes $p$ satisfy $p+h\in P_2$.

## Statement references

[[def-prime-factor-count-with-multiplicity|Almost-primes and P2]]

[[lem-chen-singular-series-specialization|Chen's normalized singular series]]

Chen, *On the representation of a large even integer as the sum of a prime and the product of at most two primes*, Theorem 2

Halberstam, *A proof of Chen's theorem*

## Facts & Assumptions

**Given:** A fixed nonzero even integer $h$ and a real $x\ge x_0(h)$.

[F1] [[lem-chen-switching-count-lower-bound]]: for each fixed nonzero even $h$ and all sufficiently large $x$, at least $0.67C(h)x/(\log x)^2$ primes $p\le x$ satisfy $0<p+h\le x$ and $p+h\in P_2$.

[F2] [[lem-chen-singular-series-specialization]]: the fixed product $C(h)$ is positive.

[F3] [[def-prime-factor-count-with-multiplicity]]: $P_2$ means an integer greater than $1$ with at most two prime factors counted with multiplicity.

## Proof

**Given:** A fixed nonzero even integer $h$ and a real $x\ge x_0(h)$.

[F1] [[lem-chen-switching-count-lower-bound]]: for each fixed nonzero even $h$ and all sufficiently large $x$, at least $0.67C(h)x/(\log x)^2$ primes $p\le x$ satisfy $0<p+h\le x$ and $p+h\in P_2$.

[F2] [[lem-chen-singular-series-specialization]]: the fixed product $C(h)$ is positive.

[F3] [[def-prime-factor-count-with-multiplicity]]: $P_2$ means an integer greater than $1$ with at most two prime factors counted with multiplicity.



**Given:** The fixed shift $h$, and [F1]–[F3].

1.1 The estimate in [F1] applies for every sufficiently large $x$. [F1, given]

2.1 Since $C(h)>0$ is fixed and $x/(\log x)^2\to\infty$, the number of primes counted in [F1] is unbounded as $x\to\infty$. For example, with $t=\log x$, the elementary bound $e^t\ge t^3/6$ gives $x/(\log x)^2\ge t/6$. Thus infinitely many distinct primes $p$ have $p+h\in P_2$, with the factor-count convention in [F3]. [F1, F2, F3, step 1.1, algebra] ∎

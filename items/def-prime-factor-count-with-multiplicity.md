---
id: def-prime-factor-count-with-multiplicity
kind: definition
title: "Almost-primes and prime-factor count with multiplicity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-canonical-prime-factorisation
  - def-prime
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jing-run Chen, On the representation of a large even integer as the sum of a prime and the product of at most two primes, introduction"
      url: "https://raw.githubusercontent.com/lixiang90/chen_theorem/main/pdf/main_en.pdf"
    - title: "H.-E. Richert, Lectures on Sieve Methods, Chapters 9 and 12"
      url: "https://www.math.utoledo.edu/~codenth/Spring_13/3200/NT-books/Lectures_on_Sieve_Methods-Richert.pdf"
verification:
  precheck: n/a
---

## Definition

For a positive integer $n>1$, write its unique prime factorisation as
$n=q_1\cdots q_r$, where each $q_i$ is prime and repetitions are retained.
Define

$$\Omega(n):=r,$$

and define $\Omega(1):=0$. Thus repeated prime factors are counted repeatedly.
For an integer $j\ge1$, define

$$P_j:=\{n\in\mathbb Z:n>1\text{ and }\Omega(n)\le j\}.$$

In particular, $P_2$ consists of primes and products of two primes, including
products in which the two prime factors are equal; the integer $1$ is excluded.

## Definition references

[[thm-canonical-prime-factorisation|Unique prime factorisation]]

[[def-prime|Prime integers]]

Chen, *On the representation of a large even integer as the sum of a prime and the product of at most two primes*, introduction

Richert, *Lectures on Sieve Methods*, Chapters 9 and 12

## Facts & Assumptions

**Given:** A positive integer $n$.

[F1] [[thm-canonical-prime-factorisation]]: $n$ has a finite factorisation into positive primes, and the exponent of each prime in that factorisation is uniquely determined.

[F2] [[def-prime]]: a prime integer is an integer greater than $1$ whose positive divisors are $1$ and itself.

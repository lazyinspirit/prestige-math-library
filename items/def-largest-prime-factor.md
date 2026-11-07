---
id: def-largest-prime-factor
kind: definition
title: "Largest prime factor of an integer"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-prime
  - thm-fundamental-theorem-of-arithmetic
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors"
      url: "https://numdam.org/item/JTNB_1993__5_2_411_0.pdf"
    - title: "N. G. de Bruijn, On the number of positive integers <= x and free of prime factors > y"
      url: "https://pure.tue.nl/ws/files/1793853/597499.pdf"
---

## Definition

For a positive integer $n$, define its **largest prime factor** $P^+(n)$ as follows. Set $P^+(1)=1$. If $n>1$, let $P^+(n)$ be the maximum prime divisor of $n$. The fundamental theorem of arithmetic ensures that this is a maximum of a finite nonempty set.

## Definition references

[[def-prime|prime means greater than $1$ with no positive divisors other than $1$ and itself]]

[[thm-fundamental-theorem-of-arithmetic|existence and uniqueness of prime factorization]]

[Hildebrand and Tenenbaum, §1, printed p. 414](https://numdam.org/item/JTNB_1993__5_2_411_0.pdf)

[de Bruijn, §1, printed p. 50](https://pure.tue.nl/ws/files/1793853/597499.pdf)

## Facts & Assumptions

**Given:** A positive integer $n$.

[F1] [[def-prime]]: A prime is an integer $p>1$ whose only positive divisors are $1$ and $p$.

[F2] [[thm-fundamental-theorem-of-arithmetic]]: Every integer $n\ge1$ is a finite product of primes; for $n>1$ this product is nonempty.

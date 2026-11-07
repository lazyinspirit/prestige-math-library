---
id: lem-y-smooth-indicator-is-multiplicative
kind: lemma
title: "The indicator of Y-smooth integers is completely multiplicative"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-y-smooth-integer-and-smooth-counting-function
  - thm-fundamental-theorem-of-arithmetic
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals"
      url: "https://arxiv.org/pdf/1501.04585v4"
    - title: "Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors"
      url: "https://numdam.org/item/JTNB_1993__5_2_411_0.pdf"
---

## Statement

For every real $y\ge2$, define $f_y(n)=1$ when every prime divisor of the positive integer $n$ is at most $y$, and define $f_y(n)=0$ otherwise. Then $f_y(1)=1$, $f_y(mn)=f_y(m)f_y(n)$ for all positive integers $m,n$, and $|f_y(n)|\le1$ for every $n$.

## Statement references

[[def-y-smooth-integer-and-smooth-counting-function|definition of $y$-smoothness, including the integer $1$]]

[[thm-fundamental-theorem-of-arithmetic|prime factors of a product are the factors of its prime factorization]]

[Matomäki and Radziwiłł, Corollary 6 and proof, §11.1, printed p. 35](https://arxiv.org/pdf/1501.04585v4)

## Facts & Assumptions

**Given:** A real $y\ge2$ and positive integers $m,n$.

[F1] [[def-y-smooth-integer-and-smooth-counting-function]]: An integer is $y$-smooth exactly when each prime divisor is at most $y$; $1$ is $y$-smooth.

[F2] [[thm-fundamental-theorem-of-arithmetic]]: Every positive integer is a finite product of primes.

[F3] [[thm-fundamental-theorem-of-arithmetic]]: Prime factorizations are unique up to order.

[F4] [[thm-fundamental-theorem-of-arithmetic]]: The prime factor list of $1$ is empty.

## Proof

**Proof technique:** direct.

1.1 By [F2] and [F3], prime factor lists for $m$ and $n$ concatenate to a prime factor list for $mn$, and uniqueness means that this is its list up to order. By [F4], the empty list handles either factor equal to $1$. Thus every prime factor of $mn$ is at most $y$ exactly when every prime factor of both $m$ and $n$ is at most $y$. By [F1], $f_y(mn)=1$ exactly when $f_y(m)=f_y(n)=1$; since all three values lie in $\{0,1\}$, $f_y(mn)=f_y(m)f_y(n)$. [given, F1, F2, F3, F4, algebra]

2.1 [F1] states directly that $1$ is $y$-smooth, so $f_y(1)=1$. Every value is $0$ or $1$ by the definition of $f_y$, giving $|f_y(n)|\le1$ for all positive integers $n$. [given, F1, algebra] ∎


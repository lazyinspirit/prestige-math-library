---
id: ex-smooth-count-at-the-endpoint-y-equals-x
kind: example
title: "The endpoint y equals x in smooth-number counting"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-y-smooth-integer-and-smooth-counting-function
  - def-dickman-de-brujin-function
  - def-prime
  - thm-fundamental-theorem-of-arithmetic
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors"
      url: "https://numdam.org/item/JTNB_1993__5_2_411_0.pdf"
    - title: "Michal Klazar, Lecture 13: Friable integers. The saddle point method"
      url: "https://kam.mff.cuni.cz/~klazar/ACNT24lec13.pdf"
---

## Example

For every real $x\ge2$, every positive integer $n\le x$ is $x$-smooth, so $\Psi(x,x)=\lfloor x\rfloor$. At $y=x$, the Dickman parameter $u=\log x/\log y$ equals $1$ and $\rho(1)=1$; therefore the uniform theorem's main term at this endpoint is $x$, and the exact count differs from it by less than $1$.

## Example references

[[def-y-smooth-integer-and-smooth-counting-function|smoothness and $\Psi(x,y)$]]

[[def-dickman-de-brujin-function|initial value of $\rho$]]

[Hildebrand and Tenenbaum, Theorem 1.1, printed pp. 415–416](https://numdam.org/item/JTNB_1993__5_2_411_0.pdf)

## Facts & Assumptions

**Given:** A real number $x\ge2$.

[F1] [[def-y-smooth-integer-and-smooth-counting-function]]: $n$ is $y$-smooth exactly when every prime divisor of $n$ is at most $y$; $\Psi(x,y)$ counts the positive integers $n\le x$ with this property.

[F2] [[thm-fundamental-theorem-of-arithmetic]]: Every positive integer is a finite product of primes, uniquely up to order, and $1$ is the empty product.

[F3] [[def-prime]]: Every prime is greater than $1$.

[F4] [[def-dickman-de-brujin-function]]: $\rho(u)=1$ for $0\le u\le1$.


## Verification

1.1 If $n$ is a positive integer with $n\le x$ and $n>1$, write its prime factorization as $n=\prod_{i<r}p_i$ using [F2]. Each $p_i>1$ by [F3], and the product of the other positive factors is at least $1$, so $p_i\le n\le x$. The same smoothness condition holds for $n=1$ by [F1]. Thus the counted integers are exactly $1,\ldots,\lfloor x\rfloor$, and $\Psi(x,x)=\lfloor x\rfloor$. [given, F1, F2, F3, algebra]

2.1 With $y=x$, $u=\log x/\log x=1$, so [F4] gives $x\rho(u)=x$. Since $0\le x-\lfloor x\rfloor<1$, the exact count differs from this main term by less than $1$. [given, F4, step 1.1, algebra] ∎

## Remarks

The endpoint is consistent with the main term of [[thm-dickman-uniform-smooth-number-asymptotic]]. This comparison is contextual; the exact endpoint proof above uses no uniform asymptotic.

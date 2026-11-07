---
id: def-y-smooth-integer-and-smooth-counting-function
kind: definition
title: "Y-smooth integers and their counting function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-largest-prime-factor
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
    - title: "Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals"
      url: "https://arxiv.org/pdf/1501.04585v4"
---

## Definition

Let $y\ge2$ be real. A positive integer $n$ is **$y$-smooth** if every prime divisor $p$ of $n$ satisfies $p\le y$, equivalently if $P^+(n)\le y$. The integer $1$ is $y$-smooth because it has no prime divisors and $P^+(1)=1$. For real $x\ge1$, define the smooth-number counting function

$$\Psi(x,y):=\#\{n\in\mathbb Z_{>0}:n\le x\text{ and }n\text{ is }y\text{-smooth}\}.$$

## Definition references

[[def-largest-prime-factor|convention for the largest prime factor, including $P^+(1)=1$]]

[Hildebrand and Tenenbaum, §1, printed pp. 414–415](https://numdam.org/item/JTNB_1993__5_2_411_0.pdf)

[de Bruijn, notation and equation (1.1), printed pp. 50–51](https://pure.tue.nl/ws/files/1793853/597499.pdf)

[Matomäki and Radziwiłł, Corollary 6 and §11.1, PDF pp. 3 and 35](https://arxiv.org/pdf/1501.04585v4)

## Facts & Assumptions

**Given:** A real number $y\ge2$ and a positive integer $n$.

[F1] [[def-largest-prime-factor]]: $P^+(1)=1$; for $n>1$, $P^+(n)$ is its largest prime divisor.

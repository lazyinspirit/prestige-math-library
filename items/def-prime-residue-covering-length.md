---
id: def-prime-residue-covering-length
kind: definition
title: "Prime residue-covering length"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-prime
  - def-prime-counting-function
  - def-divides-in-z
  - def-monoid-finite-product
  - def-natural-numbers
justified_by:
  - lem-prime-residue-covering-length-is-finite
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Kevin Ford, Ben Green, Sergei Konyagin, James Maynard, and Terence Tao, Large gaps between consecutive prime numbers"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p04-p.pdf"
    - title: "Dimitris Koukoulopoulos, The Distribution of Prime Numbers, Chapter 29"
      url: "https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf"
verification:
  precheck: n/a
---

## Definition

For real $z\ge2$, let $P(z)$ be the finite product of all positive primes $p\le z$. A residue assignment at cutoff $z$ is a choice of an integer $a_p$ with $0\le a_p<p$ for each such prime. It covers the integer interval $[1,H]\cap\mathbb Z$ when, for every integer $n$ with $1\le n\le H$, at least one prime $p\le z$ divides $n-a_p$. Define $Y(z)$ to be the greatest nonnegative integer $H$ for which such a residue assignment covers $[1,H]\cap\mathbb Z$. The empty interval for $H=0$ is covered vacuously.

## Definition references

[[def-prime]]

[[def-prime-counting-function]]

[[def-divides-in-z]]

[[def-monoid-finite-product]]

[[def-natural-numbers]]

[[lem-prime-residue-covering-length-is-finite]]

[Ford, Green, Konyagin, Maynard, and Tao, Large gaps between consecutive prime numbers, Definition 1](https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p04-p.pdf)

[Koukoulopoulos, The Distribution of Prime Numbers, Chapter 29](https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf)

---
id: def-prime-gap-functions
kind: definition
title: "Consecutive prime gaps and fixed-length gap chains"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-prime
  - def-prime-counting-function
justified_by:
  - lem-prime-gap-functions-are-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Kevin Ford, Ben Green, Sergei Konyagin, James Maynard, and Terence Tao, Long gaps between consecutive prime numbers"
      url: "https://www.ams.org/jams/2018-31-01/S0894-0347-2017-00876-2/S0894-0347-2017-00876-2.pdf"
    - title: "Kevin Ford, James Maynard, and Terence Tao, Chains of large gaps between primes"
      url: "https://arxiv.org/pdf/1511.04468"
verification:
  precheck: n/a
---

## Definition

Let $p_1=2$, and for each $n\ge1$ let $p_{n+1}$ be the least prime greater than $p_n$. For real $X\ge2$, let $\pi(X)$ be the number of primes not exceeding $X$ and define the maximal prime gap with its smaller prime bounded by $X$ by
$$G(X):=\max_{1\le n\le\pi(X)}(p_{n+1}-p_n).$$
For each integer $k\ge1$ and each real $X$ with $\pi(X)>k$, define the fixed-length chain gap by
$$G_k(X):=\max_{1\le n\le\pi(X)-k}\min_{1\le j\le k}(p_{n+j}-p_{n+j-1}).$$
Thus the cutoff in $G_k(X)$ bounds the last prime $p_{n+k}$ in the chain, while the cutoff in $G(X)$ bounds the smaller prime of an ordinary gap. The distinct source conventions are retained explicitly.

## Definition references

[[def-prime]]

[[def-prime-counting-function]]

[[lem-prime-gap-functions-are-well-defined]]

[Ford, Green, Konyagin, Maynard, and Tao, Long gaps between consecutive prime numbers](https://www.ams.org/jams/2018-31-01/S0894-0347-2017-00876-2/S0894-0347-2017-00876-2.pdf)

[Ford, Maynard, and Tao, Chains of large gaps between primes](https://arxiv.org/pdf/1511.04468)

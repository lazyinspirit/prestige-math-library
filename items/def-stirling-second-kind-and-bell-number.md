---
id: def-stirling-second-kind-and-bell-number
kind: definition
title: "The Stirling numbers of the second kind and the Bell numbers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-set-partition-and-block, lem-set-partitions-of-a-finite-set-are-finite]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §3.6"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
    - title: "Andrew Lin, 18.212 Algebraic Combinatorics, Lecture 11"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/c65777fbaa1e5af6aaa3e6ab8cbdf255_MIT18_212S19_lec11.pdf"
pipeline_run: null
---

## Definition

For $n,k\in\mathbb{N}$, let $\Pi(n,k)$ be the set of partitions of $[n]$ into
exactly $k$ blocks. By [[lem-set-partitions-of-a-finite-set-are-finite]], this
set is finite.

The **Stirling number of the second kind** is

$$S(n,k):=|\Pi(n,k)|.$$

The **Bell number** is

$$B_n:=\sum_{k=0}^{n}S(n,k),$$

the total number of set partitions of $[n]$.

The definition includes the standard boundary values:

- $S(0,0)=1$ because the empty family is the unique partition of $\varnothing$;
- $S(n,0)=0$ for $n\geq 1$ because a nonempty set cannot be partitioned into
  zero nonempty blocks; and
- $S(n,k)=0$ for $k>n$ because $n$ distinct elements cannot be split into more
  than $n$ nonempty blocks.

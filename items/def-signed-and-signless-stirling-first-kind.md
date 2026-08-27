---
id: def-signed-and-signless-stirling-first-kind
kind: definition
title: "The signed and signless Stirling numbers of the first kind"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-permutation-support-disjoint-cycles-and-cycle-type, cor-symmetric-group-has-factorial-cardinality-again]
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Andrew Lin, 18.212 Algebraic Combinatorics, Lecture 11"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/c65777fbaa1e5af6aaa3e6ab8cbdf255_MIT18_212S19_lec11.pdf"
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §3.5"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Definition

For $n,k\in\mathbb{N}$, let $\mathfrak{S}(n,k)$ be the set of permutations of
$[n]$ with exactly $k$ cycles in the sense of
[[def-permutation-support-disjoint-cycles-and-cycle-type]]. This is a finite
set because $S_n$ is finite by [[cor-symmetric-group-has-factorial-cardinality-again]].

The **signless Stirling number of the first kind** is

$$c(n,k):=|\mathfrak{S}(n,k)|.$$

The **signed Stirling number of the first kind** is

$$s(n,k):=(-1)^{n-k}c(n,k).$$

In particular, $c(0,0)=1$ from the identity permutation of $[0]=\varnothing$, and
$c(n,k)=0$ when $k>n$ or when $n\geq 1$ and $k=0$.

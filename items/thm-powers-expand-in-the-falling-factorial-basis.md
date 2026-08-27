---
id: thm-powers-expand-in-the-falling-factorial-basis
kind: theorem
title: "Ordinary powers expand in the falling-factorial basis by the second-kind Stirling numbers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-factorial-and-falling-factorial, def-stirling-second-kind-and-bell-number, thm-the-number-of-surjections]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Lin, 18.212 Algebraic Combinatorics, Lecture 11, Theorem 2"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/c65777fbaa1e5af6aaa3e6ab8cbdf255_MIT18_212S19_lec11.pdf"
pipeline_run: null
---

## Statement

For all $n,m\in\mathbb{N}$,

$$m^n=\sum_{k=0}^{n}S(n,k)\,m^{\underline{k}}.$$

## Facts & Assumptions

**Given:** Naturals $n$ and $m$.

## Proof

**Proof technique:** direct.

1.1 The left-hand side $m^n$ counts all functions $[n]\to[m]$. Group those functions by the partition of $[n]$ into their nonempty fibres. If the image has size $k$, then the fibres form a partition of $[n]$ into $k$ blocks, counted by $S(n,k)$. [given]

1.2 Once such a $k$-block partition is fixed, assigning distinct values of $[m]$ to its blocks is equivalent to choosing an ordered $k$-tuple of distinct elements of $[m]$, and there are exactly $m^{\underline{k}}$ such choices by [[def-factorial-and-falling-factorial]]. [given]

2.1 Summing over all possible image sizes $k$ counts every function $[n]\to[m]$ exactly once, so $m^n=\sum_{k=0}^{n}S(n,k)m^{\underline{k}}$. [step 1.1, step 1.2] ∎

---
id: thm-stirling-second-kind-recurrence
kind: theorem
title: "The Stirling numbers of the second kind satisfy $S(n,k)=kS(n-1,k)+S(n-1,k-1)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-stirling-second-kind-and-bell-number]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Andrew Lin, 18.212 Algebraic Combinatorics, Lecture 11"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/c65777fbaa1e5af6aaa3e6ab8cbdf255_MIT18_212S19_lec11.pdf"
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §3.6"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Statement

For every $n\geq1$ and every $k\geq1$,

$$S(n,k)=k\,S(n-1,k)+S(n-1,k-1).$$

## Facts & Assumptions

**Given:** A partition of $[n]$ into exactly $k$ nonempty blocks, with
$n\geq1$ and $k\geq1$, counted by
[[def-stirling-second-kind-and-bell-number]].

## Proof

**Proof technique:** direct.

1.1 Look at the block containing the element $n$. If that block is the singleton $\{n\}$, deleting it leaves a partition of $[n-1]$ into exactly $k-1$ blocks. Conversely, adjoining $\{n\}$ to any partition of $[n-1]$ into $k-1$ blocks produces such a partition of $[n]$. So the singleton case contributes $S(n-1,k-1)$. [given]

1.2 If the block of $n$ is not a singleton, delete $n$ from that block. The remaining blocks form a partition of $[n-1]$ into exactly $k$ blocks, and the original partition is recovered by choosing one of those $k$ blocks and reinserting $n$ into it. So the nonsingleton case contributes $k\,S(n-1,k)$. [given, algebra]

2.1 The two cases are disjoint and exhaustive, so their counts add to $S(n,k)$. This gives the displayed recurrence. [step 1.1, step 1.2] ∎

---
id: lem-set-partitions-of-a-finite-set-are-finite
kind: lemma
title: "The set partitions of a finite set form a finite set"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-set-partition-and-block, thm-cardinality-of-a-set-of-functions]
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
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §3.6"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
    - title: "Andrew Lin, 18.212 Algebraic Combinatorics, Lecture 11"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/c65777fbaa1e5af6aaa3e6ab8cbdf255_MIT18_212S19_lec11.pdf"
pipeline_run: null
---

## Statement

For every natural number $n$, the set of partitions of $[n]$ is finite.
Consequently, for every $k$, the set of partitions of $[n]$ into exactly $k$
blocks is finite as well.

## Facts & Assumptions

**Given:** A natural number $n$ and a partition $\mathcal{P}$ of $[n]$ in the
sense of [[def-set-partition-and-block]].

## Proof

**Proof technique:** direct.

1.1 If $n=0$, then $[n]=\varnothing$, whose only partition is the empty family. So the statement holds in the empty-set boundary case. [given]

1.2 Assume $n\geq 1$. For a partition $\mathcal{P}$ of $[n]$, define $f_{\mathcal{P}}:[n]\to[n]$ by sending each $i\in[n]$ to the least element of the block of $\mathcal{P}$ containing $i$. If $i$ and $j$ lie in the same block, then they have the same least block element. Conversely, if $f_{\mathcal{P}}(i)=f_{\mathcal{P}}(j)$, then both $i$ and $j$ lie in the block containing that common least element, so they lie in the same block. Thus $\mathcal{P}$ is recovered from the fibres of $f_{\mathcal{P}}$. [given, algebra]

2.1 Therefore $\mathcal{P}\mapsto f_{\mathcal{P}}$ is injective from the set of partitions of $[n]$ into the function set $[n]^{[n]}$. By [[thm-cardinality-of-a-set-of-functions]], the latter is finite. Hence the set of all partitions of $[n]$ is finite, and every subfamily of it, including the partitions with exactly $k$ blocks, is finite as well. [step 1.1, step 1.2] ∎

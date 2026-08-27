---
id: cor-touchards-congruence-for-bell-numbers
kind: corollary
title: "Touchard's congruence: for prime $p$, $B_{n+p}\\equiv B_n+B_{n+1}\\pmod p$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-bell-number-binomial-recurrence]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Greg Hurst and Andrew Schultz, An elementary (number theory) proof of Touchard's congruence"
      url: "https://arxiv.org/pdf/0906.0696"
pipeline_run: null
---

## Statement

Let $p$ be prime and let $n\in\mathbb{N}$. Then

$$B_{n+p}\equiv B_n+B_{n+1}\pmod p.$$

## Facts & Assumptions

**Given:** A prime number $p$ and the cyclic permutation $\sigma=(n+1\,\,n+2\,\,\dots\,\,n+p)$ of the last $p$ elements of $[n+p]$.

[L1] If a partition is fixed by a permutation, then that permutation permutes the blocks of the partition.

## Proof

**Proof technique:** direct.

1.1 Let $\sigma$ act on the set of partitions of $[n+p]$ by relabelling the elements $n+1,\dots,n+p$. Every orbit has size $1$ or $p$, because $\sigma$ has prime order $p$. Therefore the total number $B_{n+p}$ is congruent modulo $p$ to the number of fixed partitions. [given]

1.2 Let $\mathcal{P}$ be fixed by $\sigma$. By [L1], $\sigma$ permutes the blocks of $\mathcal{P}$. If one block of $\mathcal{P}$ contains one of the last $p$ elements and also some element of $[n]$, then $\sigma$ fixes that element of $[n]$ and cycles the last $p$ elements transitively, so that block must contain all of $n+1,\dots,n+p$. If instead a block containing one of the last $p$ elements is disjoint from $[n]$, then its $\sigma$-orbit consists of pairwise disjoint blocks of the same size. Because there are exactly $p$ moved elements and $p$ is prime, this leaves only two possibilities: either all $p$ moved elements are singleton blocks, or they all lie in one block. In the singleton case the remaining $n$ elements may be partitioned arbitrarily, giving $B_n$ fixed partitions. In the one-block case the last $p$ elements lie in one block together with some subset $S\subseteq[n]$; choosing the complement $T:=[n]\setminus S$ and partitioning $T$ arbitrarily is exactly the construction counted in [[cor-bell-number-binomial-recurrence]], so this case contributes $B_{n+1}$ fixed partitions. [L1]

2.1 Every fixed partition is of one of those two types, and each nonfixed orbit has cardinality divisible by $p$. Hence $B_{n+p}\equiv B_n+B_{n+1}\pmod p$. [step 1.2] ∎

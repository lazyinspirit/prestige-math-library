---
id: cor-bell-number-binomial-recurrence
kind: corollary
title: "The Bell numbers satisfy $B_{n+1}=\\sum_{k=0}^n\\binom{n}{k}B_k$"
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
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §3.6"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
    - title: "Combinatorics Through Guided Discovery, Bell numbers"
      url: "https://www.whitman.edu/mathematics/cgt_online/book/section01.04.html"
pipeline_run: null
---

## Statement

For every $n\in\mathbb{N}$,

$$B_{n+1}=\sum_{k=0}^{n}\binom{n}{k}B_k.$$

## Facts & Assumptions

**Given:** A partition of $[n+1]$, counted by
[[def-stirling-second-kind-and-bell-number]].

## Proof

**Proof technique:** direct.

1.1 Let $S$ be the block containing $n+1$, and let $T:=[n]\setminus(S\setminus\{n+1\})$. Then $T$ is exactly the set of elements not lying in the distinguished block. If $|T|=k$, there are $\binom{n}{k}$ choices for $T$, and after that the elements of $T$ may be partitioned arbitrarily in $B_k$ ways. [given]

1.2 Conversely, every choice of a subset $T\subseteq[n]$ and a partition of $T$ determines a unique partition of $[n+1]$: put all elements of $[n]\setminus T$ together with $n+1$ into one block and keep the chosen partition of $T$ for the other blocks. [given, construct]

2.1 Summing over all possible values $k=|T|$ gives the claimed recurrence for $B_{n+1}$. [step 1.1, step 1.2] ∎

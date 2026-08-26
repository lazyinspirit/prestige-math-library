---
id: thm-descents-and-excedances-are-equidistributed
kind: theorem
title: "Descents and excedances are equidistributed on $S_n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-anti-excedances-become-descents-under-foata-fundamental-transformation, def-descent-set-major-index-excedance-and-fixed-point]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Andrew Lin, MIT 18.212 Algebraic Combinatorics, Lecture 10"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/0b039163b47d51f947e6fdbea5b99844_MIT18_212S19_lec10.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$ and every $k \in \mathbb{N}$, the number of
permutations of $S_n$ with exactly $k$ descents equals the number with exactly
$k$ excedances.

## Facts & Assumptions

**Given:** A natural number $n$, the order-reversing permutation $c(i):=n-1-i$ of $n$, and the fundamental transformation $\mathcal{F}:S_n\to S_n$.

[L1] Under Foata's fundamental transformation, anti-excedances become descents ([[lem-anti-excedances-become-descents-under-foata-fundamental-transformation]]).

## Proof

**Proof technique:** constructive.

1.1 Define $\tau:=c\circ\sigma\circ c$. Then, for every $i \in n$, $\tau(i)<i$ if and only if $c(\sigma(c(i)))<i$, which is equivalent to $\sigma(c(i))>c(i)$. Thus $i$ is an anti-excedance of $\tau$ exactly when $c(i)$ is an excedance of $\sigma$, so $|\operatorname{AExc}(\tau)|=\operatorname{exc}(\sigma)$. [given, algebra]

1.2 The map $\sigma \mapsto \tau=c\circ\sigma\circ c$ is a bijection of $S_n$, because conjugation by a permutation has inverse itself. Also $\mathcal{F}$ is a bijection: from a one-line word, insert a left parenthesis before each left-to-right maximum and a closing parenthesis just before the next such maximum, or at the end, to recover the standard cycle form. [given, construct]

2.1 By [L1], $\operatorname{des}(\mathcal{F}(\tau))=|\operatorname{AExc}(\tau)|$, which equals $\operatorname{exc}(\sigma)$ by step 1.1. Since step 1.2 makes $\sigma \mapsto \mathcal{F}(c\sigma c)$ a bijection of $S_n$, the statistics $\operatorname{des}$ and $\operatorname{exc}$ are equidistributed. [step 1.1, step 1.2, L1, discharge-construct] ∎

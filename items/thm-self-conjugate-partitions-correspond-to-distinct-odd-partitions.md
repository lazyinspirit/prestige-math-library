---
id: thm-self-conjugate-partitions-correspond-to-distinct-odd-partitions
kind: theorem
title: "Self-conjugate partitions correspond to distinct odd-part partitions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-ferrers-young-diagram-conjugate-partition-and-durfee-square,
       def-partition-counting-functions-and-restricted-families]
justified_by: []
aliases: []
landmark: false
proof_strategy: bijection
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 9: Integer Partitions"
      url: "https://enumeration.ca/extensions/partitions/"
pipeline_run: null
---

## Statement

For every integer $n \ge 0$, there is a bijection between self-conjugate
partitions of $n$ and partitions of $n$ into distinct odd parts.

## Facts & Assumptions

**Given:** an integer $n \ge 0$.

[F1] A partition is self-conjugate when its Ferrers diagram is fixed by transpose, and its Durfee length is the number of diagonal cells of that diagram ([[def-ferrers-young-diagram-conjugate-partition-and-durfee-square]]).

## Proof

**Proof technique:** bijection.

1.1 Let $\lambda$ be a self-conjugate partition, and let $d=d(\lambda)$. For each diagonal cell $(i,i)$ with $1 \le i \le d$, let $h_i$ be the length of its hook: the cell itself together with the cells directly to its right in row $i$ and directly below it in column $i$. Self-conjugacy pairs the cells to the right with the cells below, so each $h_i$ is odd. As $i$ increases, each later diagonal hook lies strictly inside the previous one, so $h_1>h_2>\cdots>h_d$. The diagonal hooks are disjoint and cover the whole diagram, hence $h_1+\cdots+h_d=|\lambda|=n$. Thus $\lambda$ determines a partition of $n$ into distinct odd parts. [F1, construct]

1.2 Conversely, let $h_1>h_2>\cdots>h_d>0$ be distinct odd parts summing to $n$, and write $h_i=2a_i+1$. Then $a_1>\cdots>a_d\ge0$, and since these are $d$ distinct nonnegative integers one has $a_i \ge d-i$ for each $i$. Build a diagram by placing diagonal cells $(i,i)$ for $1 \le i \le d$, then adjoining $a_i$ cells to the right of $(i,i)$ and $a_i$ cells below $(i,i)$. The inequalities $a_i \ge d-i$ and $a_1>\cdots>a_d$ make these hooks nest to form a Ferrers diagram, and the construction is visibly symmetric across the main diagonal, so the resulting partition is self-conjugate. [construct]

2.1 The diagonal hooks of the partition from step 1.2 have lengths $h_1,\dots,h_d$ by construction, so step 1.2 inverts step 1.1. Therefore the two constructions are mutually inverse bijections. [step 1.1, step 1.2] ∎

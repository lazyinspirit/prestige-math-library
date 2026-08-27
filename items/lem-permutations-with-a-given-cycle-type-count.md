---
id: lem-permutations-with-a-given-cycle-type-count
kind: lemma
title: "Permutations with a fixed cycle type are counted by the standard factorial denominator"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-permutation-support-disjoint-cycles-and-cycle-type,
       thm-number-of-bijections-of-a-finite-set,
       thm-product-rule]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Eric W. Weisstein, Cycle Index, Wolfram MathWorld"
      url: "https://mathworld.wolfram.com/CycleIndex.html"
pipeline_run: null
---

## Statement

Let $m_1,\dots,m_n$ be nonnegative integers satisfying

$$\sum_{d=1}^{n} d\,m_d=n.$$

Then the number of permutations in $S_n$ with exactly $m_d$ cycles of length
$d$ for each $d$ is

$$\frac{n!}{\prod_{d=1}^{n} d^{m_d} m_d!}.$$

## Facts & Assumptions

**Given:** nonnegative integers $m_1,\dots,m_n$ with $\sum_d d\,m_d=n$.

[A1] A permutation of the set $\{1,\dots,n\}$ has the stated cycle type when it has exactly $m_d$ cycles of length $d$ for each $d$.

## Proof

**Proof technique:** direct.

1.1 Arrange the symbols $1,\dots,n$ in a line. There are $n!$ such linearisations. Break the line into consecutive blocks: first the $m_1$ blocks of length $1$, then the $m_2$ blocks of length $2$, and so on, ending with the $m_n$ blocks of length $n$. Turn each block $(a_1,\dots,a_d)$ into the cycle $(a_1\,a_2\,\dots\,a_d)$. This produces a permutation of the required cycle type. [A1, construct]

2.1 Every permutation of that cycle type is produced many times by step 1.1. For each $d$-cycle, any of its $d$ cyclic rotations gives the same cycle, so each such cycle is counted $d$ times. Also, the $m_d$ cycles of the same length may be listed in any order, so they are counted a further factor of $m_d!$. Therefore each permutation is produced exactly $\prod_d d^{m_d}m_d!$ times. [step 1.1]

3.1 Divide the total number $n!$ of linearisations from step 1.1 by the overcounting factor of step 2.1. This gives exactly $\frac{n!}{\prod_{d=1}^{n} d^{m_d} m_d!}$. [step 1.1, step 2.1] ∎

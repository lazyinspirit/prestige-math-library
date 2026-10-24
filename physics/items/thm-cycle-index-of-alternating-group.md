---
id: thm-cycle-index-of-alternating-group
kind: theorem
title: "The cycle index of A_n is the parity-filtered symmetric-group sum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-cycle-index-of-symmetric-group,
       def-alternating-group,
       cor-sign-from-disjoint-cycle-structure,
       cor-alternating-group-is-normal-and-has-half-the-elements]
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

For every integer $n \ge 2$,

$$Z(A_n) = 2\sum_{\substack{m_1,\dots,m_n \ge 0\\ \sum_{d=1}^{n} d\,m_d=n\\ \sum_{d=1}^{n}(d-1)m_d\ \text{even}}}\frac{1}{\prod_{d=1}^{n} d^{m_d}m_d!}\prod_{d=1}^{n} s_d^{m_d}.$$

Equivalently,

$$Z(A_n) = \sum_{\substack{m_1,\dots,m_n \ge 0\\ \sum_{d=1}^{n} d\,m_d=n}}\frac{1+(-1)^{\sum_d(d-1)m_d}}{\prod_{d=1}^{n} d^{m_d}m_d!}\prod_{d=1}^{n} s_d^{m_d}.$$

## Facts & Assumptions

**Given:** an integer $n \ge 2$.

[L1] A permutation lies in $A_n$ exactly when it is even ([[def-alternating-group]]).

[L2] A permutation with cycle counts $m_d$ has sign $(-1)^{\sum_d (d-1)m_d}$ ([[cor-sign-from-disjoint-cycle-structure]]).

[L3] For $n \ge 2$, the alternating group has half the elements of $S_n$, so $|A_n|=n!/2$ ([[cor-alternating-group-is-normal-and-has-half-the-elements]]).

[L4] The symmetric-group cycle index is the sum over cycle types ([[thm-cycle-index-of-symmetric-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], a permutation of cycle type $(m_1,\dots,m_n)$ belongs to $A_n$ exactly when $\sum_d (d-1)m_d$ is even. [L1, L2]

2.1 For such an even cycle type, the number of permutations in $A_n$ with that type is the same as the number in $S_n$, namely $n!/\prod_d d^{m_d}m_d!$, because an entire cycle type is either even or odd. Therefore the unnormalized cycle-index sum over $A_n$ is $\sum_{\substack{m_1,\dots,m_n \ge 0\\ \sum_d d\,m_d=n\\ \sum_d(d-1)m_d\text{ even}}}\frac{n!}{\prod_d d^{m_d}m_d!}\prod_d s_d^{m_d}$. [step 1.1, L4]

3.1 Divide step 2.1 by $|A_n|=n!/2$ from [L3]. This multiplies the cycle-type coefficients by $2/n!$, leaving exactly $2\sum_{\substack{m_1,\dots,m_n \ge 0\\ \sum_d d\,m_d=n\\ \sum_d(d-1)m_d\text{ even}}}\frac{1}{\prod_d d^{m_d}m_d!}\prod_d s_d^{m_d}$. The equivalent filtered formula follows because $1+(-1)^e$ is $2$ when $e$ is even and $0$ when $e$ is odd. [step 2.1, L3] ∎

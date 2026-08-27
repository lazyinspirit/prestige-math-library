---
id: thm-cycle-index-of-symmetric-group
kind: theorem
title: "The cycle index of S_n is the sum over cycle types"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-cycle-index-of-a-permutation-group,
       lem-permutations-with-a-given-cycle-type-count]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Ben Lynn, Polya Theory: The Cycle Index Polynomial"
      url: "https://theory.stanford.edu/~blynn/polya/cycleindex.html"
    - title: "Eric W. Weisstein, Cycle Index, Wolfram MathWorld"
      url: "https://mathworld.wolfram.com/CycleIndex.html"
pipeline_run: null
---

## Statement

For every integer $n \ge 0$,

$$Z(S_n)=\sum_{\substack{m_1,\dots,m_n \ge 0\\ \sum_{d=1}^{n} d\,m_d=n}}\frac{1}{\prod_{d=1}^{n} d^{m_d}m_d!}\prod_{d=1}^{n} s_d^{m_d}.$$

## Facts & Assumptions

**Given:** an integer $n \ge 0$.

[F1] By definition, the cycle index averages the monomial $\prod_d s_d^{j_d(\sigma)}$ over all permutations $\sigma \in S_n$ ([[def-cycle-index-of-a-permutation-group]]).

[L1] The number of permutations with fixed cycle type $(m_1,\dots,m_n)$ is $n!/\prod_d d^{m_d}m_d!$ ([[lem-permutations-with-a-given-cycle-type-count]]).

## Proof

**Proof technique:** direct.

1.1 In the average from [F1], all permutations with the same cycle type contribute the same monomial $\prod_d s_d^{m_d}$. Thus the sum may be regrouped by cycle type. [F1]

2.1 For a fixed cycle type $(m_1,\dots,m_n)$ with $\sum_d d\,m_d=n$, there are exactly the permutations counted by [L1]. Their total contribution to the unnormalized sum is therefore $\frac{n!}{\prod_d d^{m_d}m_d!}\prod_d s_d^{m_d}$. [step 1.1, L1]

3.1 Divide the regrouped sum of step 2.1 by $n!$, as required by [F1]. The factor $n!$ cancels, leaving exactly the displayed cycle-type expansion for $Z(S_n)$. [step 2.1, F1] ∎

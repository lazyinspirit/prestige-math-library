---
id: cor-symmetric-group-cycle-index-series-is-exponential
kind: corollary
title: "The symmetric-group cycle-index series is coefficientwise exponential"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-cycle-index-series-of-a-graded-symmetric-family,
       lem-permutations-with-a-given-cycle-type-count,
       thm-cycle-index-of-symmetric-group,
       def-formal-exponential-logarithm-and-powers,
       thm-formal-exponential-logarithm-identities]
justified_by: []
aliases: []
landmark: false
proof_strategy: coefficient comparison
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

In the formal power-series ring
$\mathbb{Q}[s_1,s_2,\dots]\llbracket t\rrbracket$,

$$\sum_{n \ge 0} Z(S_n)t^n=\exp\left(\sum_{d \ge 1}\frac{s_d t^d}{d}\right).$$

For each fixed $n$, the coefficient of $t^n$ depends only on $s_1,\dots,s_n$.

## Facts & Assumptions

**Given:** the formal exponential and the symmetric-group cycle indices.

[L1] The coefficient of $t^n$ in the cycle-index series of the family with one fixed structure in each degree is $Z(S_n)$ ([[def-cycle-index-series-of-a-graded-symmetric-family]], [[thm-cycle-index-of-symmetric-group]]).

[L2] Formal exponential turns finite sums into products, so for each finite truncation one may expand $\exp\!\left(\sum_{d=1}^{N} s_d t^d/d\right)$ as $\prod_{d=1}^{N}\exp(s_dt^d/d)$ ([[thm-formal-exponential-logarithm-identities]]).

## Proof

**Proof technique:** coefficient comparison.

1.1 Fix $n \ge 0$. Factors with $d>n$ cannot contribute to the coefficient of $t^n$, so that coefficient is already the coefficient of $t^n$ in the finite truncation $\exp\left(\sum_{d=1}^{n}\frac{s_d t^d}{d}\right)$. By [L2], this truncation equals $\prod_{d=1}^{n}\exp\left(\frac{s_d t^d}{d}\right)=\prod_{d=1}^{n}\sum_{m_d \ge 0}\frac{s_d^{m_d} t^{d m_d}}{d^{m_d}m_d!}$. [L2]

2.1 Expanding the finite product in step 1.1, the coefficient of $t^n$ is $\sum_{\substack{m_1,\dots,m_n \ge 0\\ \sum_{d=1}^{n} d\,m_d=n}}\frac{1}{\prod_{d=1}^{n} d^{m_d}m_d!}\prod_{d=1}^{n} s_d^{m_d}$. This depends only on $s_1,\dots,s_n$. [step 1.1]

3.1 The coefficient in step 2.1 is exactly the cycle-type formula for $Z(S_n)$ from [L1]. Since this holds for every $n$, the whole series satisfies $\sum_{n \ge 0} Z(S_n)t^n=\exp\left(\sum_{d \ge 1}\frac{s_d t^d}{d}\right)$. [step 2.1, L1] ∎

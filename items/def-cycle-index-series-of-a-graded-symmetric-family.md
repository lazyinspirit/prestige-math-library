---
id: def-cycle-index-series-of-a-graded-symmetric-family
kind: definition
title: "The cycle-index series of a graded family of S_n-actions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-symmetric-group-and-permutation-notation,
       def-fixed-point-sets-of-a-group-action,
       def-cycle-index-of-a-permutation-group,
       def-formal-power-series-and-coefficient-extraction]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Ben Lynn, Polya Theory: The Cycle Index Polynomial"
      url: "https://theory.stanford.edu/~blynn/polya/cycleindex.html"
pipeline_run: null
---

## Definition

Let $(A_n)_{n \ge 0}$ be a sequence of finite sets such that each $A_n$ carries
an action of the symmetric group $S_n$. For $\sigma \in S_n$, write
$\operatorname{Fix}_{A_n}(\sigma)$ for the set of structures in $A_n$ fixed by
$\sigma$.

The **cycle-index series** of the family is the formal power series

$$\mathcal{Z}_A(t):=\sum_{n \ge 0} Z_{A_n}(s_1,\dots,s_n)\,t^n,$$

where

$$Z_{A_n}(s_1,\dots,s_n):=\frac{1}{n!}\sum_{\sigma \in S_n}|\operatorname{Fix}_{A_n}(\sigma)|\prod_{d=1}^{n} s_d^{j_d(\sigma)}.$$

For each fixed $n$, the coefficient of $t^n$ lies in
$\mathbb{Q}[s_1,\dots,s_n]$.

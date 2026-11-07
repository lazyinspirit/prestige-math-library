---
id: lem-restoring-a-sparse-factorization-exception-in-shift-averages
kind: lemma
title: "Restoring sparse factorization exceptions in shift averages"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
deps: []
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; only finite sums, finite selection and explicit real-variable estimates occur.
sources:
  references:
    - title: "Local adapted proof from Matom\u00e4ki\u2013Radziwi\u0142\u0142\u2013Tao"
      url: https://arxiv.org/pdf/1503.05121v3
      locator: "Equations (5.3)\u2013(5.4), PDF pp. 16\u201317"
---

## Statement

Let $X,H\ge1$ be integers, $k\ge1$, and let $f_1,\ldots,f_k:\{1,\ldots,X+H\}\to\mathbb C$ be bounded by one. For $S\subseteq\{1,\ldots,X+H\}$ put $g_j=f_j1_S$ and $B=\#(\{1,\ldots,X+H\}\setminus S)$. With $h_1=0$,
$$\left|\sum_{h_2,\ldots,h_k=1}^H\left|\sum_{n=1}^X\prod_{j=1}^kf_j(n+h_j)\right|-\sum_{h_2,\ldots,h_k=1}^H\left|\sum_{n=1}^X\prod_{j=1}^kg_j(n+h_j)\right|\right|\le kBH^{k-1}.$$
For $k=1$ both shift sums have one term.

## Facts & Assumptions

**Given:** All hypotheses and conventions in the Statement.

## Proof

1.1 For a fixed tuple, telescope the difference of the two products by replacing one factor at a time. Its modulus is at most $\sum_j1_{n+h_j\notin S}$, because all other factors are bounded by one. For each $j$, the injection $n\mapsto n+h_j$ shows that the sum over $1\le n\le X$ of this indicator is at most $B$. [given, algebra]

2.1 Apply $||u|-|v||\le|u-v|$ to the inner sums, sum the bound $kB$ over the $H^{k-1}$ tuples, and apply the triangle inequality to the outside difference. The same argument works with the empty tuple. [step 1.1, algebra] ∎

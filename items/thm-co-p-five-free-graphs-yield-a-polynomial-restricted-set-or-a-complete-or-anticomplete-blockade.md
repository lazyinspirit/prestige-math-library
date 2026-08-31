---
id: thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade
kind: theorem
title: "$\\overline{P_5}$-free graphs yield a polynomial restricted set or a complete or anticomplete blockade"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-the-minimal-sparsity-parameter-drops-below-the-target,
       def-c-sparse-and-c-restricted-vertex-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 7.3"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

There exists $a\ge 1$ such that for every $x\in(0,\tfrac12)$ and every
$\overline{P_5}$-free graph $G$, at least one of the following holds:

1. $G$ has an $x$-restricted induced subgraph with at least $x^a|V(G)|$
   vertices; or
2. $G$ has a complete or anticomplete $(k,|V(G)|/k^a)$-blockade for some
   integer $k\in[2,x^{-1}]$.

## Facts & Assumptions

**Given:** A parameter $x\in(0,\tfrac12)$ and a $\overline{P_5}$-free graph $G$.

[L1] Lemma 7.3 of the cited source proves exactly the displayed restricted-set
or complete/anticomplete-blockade alternative, with explicit constants.

## Proof

**Proof technique:** direct from the minimal-threshold alternative.

1.1 The cited source lemma runs the minimal-threshold argument with all size and exponent bounds and proves the first alternative whenever the blockade alternative is absent. [L1, given]

2.1 Consequently either the stated polynomial restricted set exists or the source's complete/anticomplete polynomial blockade exists, exactly as claimed. [step 1.1, L1] ∎

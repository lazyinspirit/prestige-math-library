---
id: lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph
kind: lemma
title: "A sparse $\\overline{P_5}$-free graph yields a complete or anticomplete blockade or a sparser subgraph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set,
       def-complete-anticomplete-pure-and-x-sparse-blockades,
       def-blockade-length-and-width]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 7.2"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

There exist constants $c>0$ and $d\ge 1$ such that every sufficiently large
$c$-sparse $\overline{P_5}$-free graph has at least one of the following:

1. a complete blockade of polynomial width;
2. an anticomplete blockade of polynomial width; or
3. a $c^d$-sparse induced subgraph of linear size.

## Facts & Assumptions

**Given:** A sufficiently large $c$-sparse $\overline{P_5}$-free graph $G$.

[L1] Lemma 7.2 of the cited source proves the displayed complete-or-anticomplete
blockade versus deeper-sparsification alternative with explicit parameters.

## Proof

**Proof technique:** translate the cited source lemma.

1.1 The cited source lemma builds a maximal anticomplete blockade and verifies the size normalization needed before applying the preceding sparse trichotomy inside its last block. [L1, given]

2.1 Its three resulting cases are precisely a complete blockade, an anticomplete blockade, or a linearly large induced subgraph with strictly deeper sparsity. [step 1.1, L1] ∎

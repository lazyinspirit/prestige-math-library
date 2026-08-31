---
id: lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade
kind: lemma
title: "An $x$-sparse blockade iteration yields further sparsification or a pure blockade"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair,
       def-sparse-orientation-of-a-blockade,
       def-directional-and-weak-sparsity-between-vertex-sets,
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
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 5.3"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Let $x\in(0,\tfrac12)$. There exist constants $c>0$ and $d\ge 1$ such that the
following holds. If $G$ is a sparse $\overline{P_5}$-free graph and
$\mathcal B=(B_0,\dots,B_n)$ is a maximal $x$-sparse blockade whose last block
still has linear size, then either:

1. some induced subgraph of $B_n$ is substantially sparser than $G$; or
2. $G$ has a pure blockade of polynomial width.

## Facts & Assumptions

**Given:** A sparse $\overline{P_5}$-free graph $G$ and a maximal $x$-sparse
blockade $\mathcal B=(B_0,\dots,B_n)$ with large last block $B_n$.

[L1] Lemma 5.3 of the cited source proves the stated maximal-blockade
alternative with explicit constants, sizes, and exponents.

## Proof

**Proof technique:** translate the cited source lemma.

1.1 The cited source lemma applies the preceding sparse-pair trichotomy to the final block and uses the correctly oriented sparse relations to extend the blockade whenever the sparse-pair outcome occurs. [L1, given]

2.1 Maximality excludes that extension, leaving exactly a substantially sparser induced subgraph or a polynomial-width pure blockade. [step 1.1, L1] ∎

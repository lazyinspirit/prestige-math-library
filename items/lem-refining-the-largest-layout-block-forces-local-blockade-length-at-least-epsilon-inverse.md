---
id: lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse
kind: lemma
title: "Refining the largest layout block forces local blockade length at least $\\epsilon^{-1}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade,
       lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks,
       def-substitution-of-a-graph-for-a-vertex,
       def-directional-and-weak-sparsity-between-vertex-sets,
       def-complete-anticomplete-pure-and-x-sparse-blockades]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Claim 6.1.2"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

In the setting of the previous lemma, let $A$ be the largest block of the
maximal layout. If $A$ is refined by a pure or $x$-sparse polynomial blockade,
then that local blockade has length at least $\epsilon^{-1}$.

## Facts & Assumptions

**Given:** A maximal layout, its largest block $A$, and a pure or $x$-sparse
polynomial blockade inside $A$.

[L1] The cited source claim proves that substituting a local blockade
of length below $\epsilon^{-1}$ into the largest layout block preserves the
three defining layout bounds while strictly increasing the number of blocks.

## Proof

**Proof technique:** contradiction by substitution.

1.1 Suppose the local blockade inside $A$ had length $k<\epsilon^{-1}$. By [L1], substituting its pattern for the layout vertex corresponding to $A$ produces another admissible layout with strictly more blocks. [L1, assume-contra]

2.1 This contradicts the maximal choice of the original layout. Hence the local blockade has length at least $\epsilon^{-1}$. [step 1.1, discharge-contradiction] ∎

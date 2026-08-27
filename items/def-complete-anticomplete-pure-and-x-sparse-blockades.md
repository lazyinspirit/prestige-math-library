---
id: def-complete-anticomplete-pure-and-x-sparse-blockades
kind: definition
title: "Complete, anticomplete, pure, weakly sparse, and $x$-sparse blockades"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-blockade-length-and-width, def-directional-and-weak-sparsity-between-vertex-sets, def-edges-between-sets-and-pure-mixed-pairs]
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
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path"
      url: "https://arxiv.org/html/2312.15333v2"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Definition

Let $\mathcal{B}=(B_1,\dots,B_t)$ be a blockade in a graph $G$ and let
$x\in[0,1]$.

- $\mathcal{B}$ is **complete** when every pair $(B_i,B_j)$ with $i<j$ is
  complete in the sense of [[def-edges-between-sets-and-pure-mixed-pairs]].
- It is **anticomplete** when every pair $(B_i,B_j)$ with $i<j$ is
  anticomplete.
- It is **pure** when every pair $(B_i,B_j)$ with $i<j$ is pure.
- It is **weakly $x$-sparse** when every pair $(B_i,B_j)$ with $i<j$ is weakly
  $x$-sparse in the sense of
  [[def-directional-and-weak-sparsity-between-vertex-sets]].
- It is **$x$-sparse** when $B_i$ is $x$-sparse to $B_j$ for every $i>j$.

The last condition depends on the order of the blocks, while the first four do
not.

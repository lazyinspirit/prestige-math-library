---
id: cor-planar-graphs-have-no-kuratowski-subdivision
kind: corollary
title: "A planar graph contains no subdivision of $K_5$ or $K_{3,3}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-k-five-and-k-three-three-are-nonplanar, def-graph-deletion-contraction-minor-and-subdivision, def-plane-graph-face-and-boundary]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Corollary 4.2.11"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

A planar graph ([[def-plane-graph-face-and-boundary]]) contains no subgraph that is a subdivision of $K_5$ or $K_{3,3}$ in the sense of [[def-graph-deletion-contraction-minor-and-subdivision]].

## Facts & Assumptions

**Given:** A planar graph $G$.

[L1] $K_5$ and $K_{3,3}$ are nonplanar ([[cor-k-five-and-k-three-three-are-nonplanar]]).

[F1] A subdivision repeats edge subdivision zero or more times ([[def-graph-deletion-contraction-minor-and-subdivision]]).

## Proof

**Proof technique:** contradiction.

1.1 In a plane drawing of a subdivision, suppressing a degree-two subdivision vertex replaces its two incident polygonal edge arcs by their concatenation and preserves a plane drawing. Repeating this suppression shows that planarity of a subdivision implies planarity of the original graph. [F1]

2.1 Suppose $G$ contained a subdivision of $K_5$ or $K_{3,3}$. A subgraph of a planar graph inherits a plane drawing, and step 1.1 would turn that drawing into a plane drawing of the corresponding original graph, contradicting [L1]. [assume-contra, step 1.1, L1, F1, discharge-contradiction] ∎


---
id: cex-k-four-is-planar-but-not-three-colourable
kind: counterexample
title: "$K_4$ is planar but has chromatic number four, so the five-colour bound cannot be lowered to three"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-five-colour-theorem, def-proper-vertex-colouring-and-chromatic-number, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 5"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch5.pdf"
pipeline_run: null
---

## Statement refuted

The conclusion of [[thm-five-colour-theorem]] can be strengthened to say that every planar graph is three-colourable.

## Facts & Assumptions

**Given:** The complete graph $K_4$ of [[def-standard-complete-bipartite-path-and-cycle-graphs]].

[F1] A proper vertex colouring assigns distinct colours to adjacent vertices ([[def-proper-vertex-colouring-and-chromatic-number]]).

[F2] Every two distinct vertices of $K_4$ are adjacent ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Counterexample

**Proof technique:** direct.

1.1 Draw three vertices as a triangle, place the fourth inside it, and join that vertex to the three corners. The six edges meet only at their common endpoints, so this is a plane embedding of $K_4$. [F2, construct]

2.1 By [F1] and [F2], the four vertices must receive pairwise distinct colours in any proper colouring. Assigning a different colour to each vertex is proper, so $\chi(K_4)=4$. Thus a planar graph need not be three-colourable, although [[thm-five-colour-theorem]] supplies five colours for every planar graph. [F1, F2, step 1.1] ∎

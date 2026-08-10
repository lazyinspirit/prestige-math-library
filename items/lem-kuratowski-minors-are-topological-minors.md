---
id: lem-kuratowski-minors-are-topological-minors
kind: lemma
title: "A graph has a $K_5$ or $K_{3,3}$ minor exactly when it has a subdivision of $K_5$ or $K_{3,3}$ as a subgraph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-graph-deletion-contraction-minor-and-subdivision, cor-whitney-k-connected-path-characterisation, thm-menger-finite-directed-and-undirected-path-forms, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Lemma 4.4.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

A finite graph contains $K_5$ or $K_{3,3}$ as a minor if and only if it contains a subdivision of $K_5$ or $K_{3,3}$ as a subgraph. Minors and subdivisions are those of [[def-graph-deletion-contraction-minor-and-subdivision]], the two standard graphs are from [[def-standard-complete-bipartite-path-and-cycle-graphs]], and the disjoint-path interpretation used in reducing branch sets is consistent with [[cor-whitney-k-connected-path-characterisation]] and [[thm-menger-finite-directed-and-undirected-path-forms]].

## Facts & Assumptions

**Given:** A finite graph $G$ containing at least one of the two stated obstructions in one of the two senses.

[F1] A graph $H$ is a minor of $G$ when it can be obtained by vertex deletions, edge deletions and edge contractions ([[def-graph-deletion-contraction-minor-and-subdivision]]).



## Proof

**Proof technique:** direct.

1.1 Choose a minor model with the fewest total vertices in its pairwise disjoint connected branch sets. Each branch set is then a tree spanning exactly its attachment vertices, and there is exactly one model edge between each adjacent pair of branch sets; otherwise a leaf or surplus edge could be removed. [F1]

1.2 Conversely, contract every internally subdivided path of a $K_5$ or $K_{3,3}$ subdivision to one edge. By [F1] this produces the corresponding graph as a minor. [F1]

2.1 For a $K_{3,3}$ model, each branch tree has at most three attachment leaves. Replace it by the unique minimal subtree joining those leaves and suppress degree-two vertices; this leaves one branch vertex and three internally disjoint arms. The six reduced branch trees and the model edges therefore form a subdivision of $K_{3,3}$. [step 1.1]

3.1 For a $K_5$ model, each attachment tree has four leaves. If all five reduced trees are four-arm stars, the model is a subdivision of $K_5$. Otherwise one reduced tree has two degree-three vertices joined by a path; treating those two vertices as opposite branch vertices and the other four branch sets as the remaining branch vertices yields a $K_{3,3}$ minor, which step 2.1 converts to a $K_{3,3}$ subdivision. [step 1.1, step 2.1]

4.1 Steps 2.1 and 3.1 prove the minor-to-subdivision implication for the union of the two obstructions, and step 1.2 proves the converse. [step 2.1, step 3.1, step 1.2] ∎

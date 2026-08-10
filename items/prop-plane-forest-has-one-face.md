---
id: prop-plane-forest-has-one-face
kind: proposition
title: "Every plane forest has exactly one face"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-plane-edge-face-incidence, thm-forest-edge-component-count, def-tree-forest-and-leaf, lem-nonempty-forest-has-low-degree-vertex]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 4.2.4"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

Every polygonally embedded finite forest has exactly one face. Forests and leaves are those of [[def-tree-forest-and-leaf]], and the finite edge-component identity is [[thm-forest-edge-component-count]]; [[lem-nonempty-forest-has-low-degree-vertex]] supplies the deletion step.

## Facts & Assumptions

**Given:** A plane forest $F$.

[L1] For a finite forest, $|V(F)|=|E(F)|+c(F)$ ([[thm-forest-edge-component-count]]).

[L2] A bridge borders one face, counted on both local sides ([[lem-plane-edge-face-incidence]]).



## Proof

**Proof technique:** induction.

1.1 The null forest and a forest of isolated vertices have connected complement and one face. In a nonempty forest with an edge, a low-degree vertex lemma supplies a leaf and its incident edge. [base, L1]

1.2 Delete a leaf and its edge. The remaining drawing is a smaller plane forest. By the induction hypothesis it has one face, and reinserting the pendant edge does not split that face because the edge is a bridge and both its local sides are incident with the same face by [L2]. [ih, L2]

2.1 Repeating the leaf deletion reaches isolated vertices, so every plane forest has one face. [step 1.1, step 1.2, discharge-induction] ∎

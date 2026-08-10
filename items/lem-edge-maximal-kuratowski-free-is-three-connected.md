---
id: lem-edge-maximal-kuratowski-free-is-three-connected
kind: lemma
title: "Every edge-maximal graph of order at least four with no subdivision of $K_5$ or $K_{3,3}$ is three-connected"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-separation-augmentation-for-kuratowski-free-graphs, cor-whitney-k-connected-path-characterisation, def-vertex-and-edge-connectivity, def-finite-cardinality, lem-three-connected-kuratowski-free-is-planar, cor-planar-graphs-have-no-kuratowski-subdivision, lem-kuratowski-minors-are-topological-minors, lem-plane-edge-face-incidence, prop-face-boundaries-in-two-connected-plane-graphs]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Lemma 4.4.5"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

Every finite graph of order at least four that is edge-maximal without a subdivision of $K_5$ or $K_{3,3}$ is three-connected ([[def-vertex-and-edge-connectivity]], [[def-finite-cardinality]]). The proof uses the separation structure of [[lem-separation-augmentation-for-kuratowski-free-graphs]], the path form of connectivity [[cor-whitney-k-connected-path-characterisation]], the three-connected planar case [[lem-three-connected-kuratowski-free-is-planar]], and the obstruction exclusion [[cor-planar-graphs-have-no-kuratowski-subdivision]], with minor equivalence from [[lem-kuratowski-minors-are-topological-minors]].

## Facts & Assumptions

**Given:** An edge-maximal obstruction-free graph $G$ of order at least four.

[L1] A minimum proper separation of order at most two has separator $K_2$, and both induced sides are edge-maximal without either obstruction ([[lem-separation-augmentation-for-kuratowski-free-graphs]]).

[L2] For a finite graph on at least four vertices, three-connectivity is equivalent to the existence of three internally vertex-disjoint paths between every two vertices ([[cor-whitney-k-connected-path-characterisation]]).

[L3] Every three-connected graph without a $K_5$ or $K_{3,3}$ minor is planar ([[lem-three-connected-kuratowski-free-is-planar]]).

[L4] Excluding subdivisions of $K_5,K_{3,3}$ is equivalent to excluding those two minors ([[lem-kuratowski-minors-are-topological-minors]]).

[L5] A planar graph contains no subdivision of $K_5$ or $K_{3,3}$ ([[cor-planar-graphs-have-no-kuratowski-subdivision]]).

[L6] Every plane edge on a cycle is incident with two distinct faces ([[lem-plane-edge-face-incidence]]).

[L7] Every facial boundary in a two-connected plane graph is a cycle ([[prop-face-boundaries-in-two-connected-plane-graphs]]).



## Proof

**Proof technique:** induction.

1.1 At order four, edge maximality forces $K_4$, which is three-connected. Assume the assertion for smaller orders and suppose $G$ is not three-connected. By [L2] it has a minimum proper separation of order at most two. [base, L2]

1.2 By [L1] the separator is an edge $xy$, and the two induced sides $G_1,G_2$ are smaller edge-maximal obstruction-free graphs. By the induction hypothesis, each side is a triangle or three-connected. In the latter case [L4] excludes the forbidden minors and [L3] makes the side planar; a triangle is planar as well. In a plane drawing of each side, [L6] puts $xy$ on a face boundary and [L7] makes that boundary a cycle, so it contains another vertex $z_i$. [ih, L1, L3, L4, L6, L7]

2.1 Make the chosen face of each side the outer face, place the two drawings in opposite closed half-planes, and identify their copies of the boundary edge $xy$. The two outer boundary arcs complementary to $xy$ then lie on one face of the combined drawing and contain $z_1$ and $z_2$. Drawing the missing cross-edge $z_1z_2$ inside that face gives a planar proper supergraph of $G$. By [L5] it still contains neither forbidden subdivision, contradicting edge maximality. [step 1.2, L5, construct]

3.1 This contradiction rules out the small separator in step 1.1, so $G$ is three-connected. The induction is complete. [step 1.1, step 2.1, discharge-induction] ∎

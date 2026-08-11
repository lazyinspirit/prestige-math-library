---
id: lem-plane-graph-faces-are-finite-with-one-unbounded-face
kind: lemma
title: "A plane graph has finitely many faces and exactly one unbounded face"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-graph-face-and-boundary, thm-polygonal-jordan-curve, lem-polygonal-arc-does-not-separate-the-plane, thm-induction-principle, def-bounded-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 4, Section 4.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

Every plane graph ([[def-plane-graph-face-and-boundary]]) has finitely many faces, exactly one of which is unbounded. A subset of the plane is bounded here when both coordinate projections are bounded in the real sense of [[def-bounded-set]]. The proof adds finitely many vertices and edges by [[thm-induction-principle]].

## Facts & Assumptions

**Given:** A finite polygonal plane drawing.

[L1] A polygon has exactly two regions, each with frontier the polygon ([[thm-polygonal-jordan-curve]]).

[L2] A polygonal arc does not separate the plane ([[lem-polygonal-arc-does-not-separate-the-plane]]).



## Proof

**Proof technique:** induction.

1.1 The finite union of bounded line segments lies in a sufficiently large rectangle. The exterior of that rectangle is connected and disjoint from the drawing, so it lies in one face; every unbounded face must meet the exterior and hence equals that face. Thus there is exactly one unbounded face. [base]

1.2 Add the edge arcs one at a time. An arc that does not close a cycle can be exposed inside one existing face and, by [L2], does not split it. An arc that closes a polygon lies in one existing face and, by [L1], splits that face into exactly two. Isolated vertices likewise do not disconnect a plane region. Each addition therefore changes the face count by at most one. [ih, L1, L2]

2.1 Starting from the empty drawing with one face, finitely many additions yield finitely many faces, and step 1.1 identifies exactly one as unbounded. [step 1.1, step 1.2, discharge-induction] ∎

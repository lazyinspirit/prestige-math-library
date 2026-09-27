---
id: lem-plane-graph-faces-are-finite-with-one-unbounded-face
kind: lemma
title: "A plane graph has finitely many faces and exactly one unbounded face"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-graph-face-and-boundary, thm-induction-principle, def-bounded-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

[L1] Each edge is a finite union of straight segments by the polygonal drawing definition ([[def-plane-graph-face-and-boundary]]).

## Proof

**Proof technique:** induction.

1.1 The finite union of bounded line segments lies in a sufficiently large rectangle. The exterior of that rectangle is connected and disjoint from the drawing, so it lies in one face; every unbounded face must meet the exterior and hence equals that face. Thus there is exactly one unbounded face. [base]

1.2 Add the finitely many vertices and edge arcs one at a time. At every stage the partial drawing consists of finitely many points and straight segments by [L1]. Let $L_1,\ldots,L_s$ be the distinct full lines supporting its segments, together with a vertical line through each vertex. The complement of these lines has at most $2^s$ nonempty sign cells: for each choice of sides of the $s$ lines, the cell is an intersection of open half-planes, hence convex and connected. Every face of the drawing is a nonempty open set, so it meets the complement of this finite union of lines, which has empty interior. The sign cell containing such a point is disjoint from the drawing and connected, hence lies wholly in that face. Distinct faces contain distinct sign cells. Thus every partial drawing has at most $2^s$ faces. The empty drawing has one face, and each finite addition preserves the finite-face assertion. [L1, ih, algebra]

2.1 Starting from the empty drawing with one face, finitely many additions yield finitely many faces by step 1.2, and step 1.1 identifies exactly one as unbounded. [step 1.1, step 1.2, discharge-induction] ∎

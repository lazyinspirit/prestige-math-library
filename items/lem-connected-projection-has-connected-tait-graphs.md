---
id: lem-connected-projection-has-connected-tait-graphs
kind: lemma
title: "The Tait graphs of a connected projection are connected"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - lem-connected-regular-link-diagram-has-checkerboard-coloring
  - def-tait-graph-of-a-link-diagram
  - def-regular-oriented-link-diagram
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite medial-graph argument is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Louis H. Kauffman, New Invariants in the Theory of Knots, Astérisque 163–164 (1988), §III, pp. 160–163"
      url: "https://www.numdam.org/item/AST_1988__163-164__137_0.pdf"
    - title: "Danny Calegari, Introduction to Knot Theory, §5.2, printed pp. 44–45"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
---

## Statement

For a connected regular link projection on $S^2$ with at least one crossing and either checkerboard coloring, both Tait graphs are connected.

## Statement references

[Kauffman, *New Invariants in the Theory of Knots*, §III](https://www.numdam.org/item/AST_1988__163-164__137_0.pdf)

[Calegari, *Introduction to Knot Theory*, §5.2](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

## Facts & Assumptions

**Given:** A connected regular link projection and a checkerboard coloring of its complementary regions.

[F1] A connected projection is a connected finite 4-valent graph, with crossingless components represented by embedded circles ([[def-regular-oriented-link-diagram]]).

[F2] Its complementary regions admit a checkerboard coloring ([[lem-connected-regular-link-diagram-has-checkerboard-coloring]]).

[F3] Each Tait graph has one vertex per region of its color and one edge per crossing joining the opposite sectors ([[def-tait-graph-of-a-link-diagram]]).

## Proof
1.1 Associate to each crossing the edge of a chosen Tait graph. Along any projection edge joining crossings, the region of the chosen color on one side is the same at both ends, so the two corresponding Tait edges share that region vertex. Since the projection graph is connected, a path between any two crossings gives a sequence of Tait edges in which consecutive edges share a vertex. Every region vertex is incident to an edge because every face boundary of a connected projection with crossings contains a crossing. Therefore the Tait graph is connected. The same argument applies to the other color. [given, F1, F2, F3, construct]

2.1 The only excluded connected projection is a crossingless circle, which is not covered by this statement; it will be treated directly in the bracket-span proof. This closes the claimed case. [given, step 1.1, construct] ∎

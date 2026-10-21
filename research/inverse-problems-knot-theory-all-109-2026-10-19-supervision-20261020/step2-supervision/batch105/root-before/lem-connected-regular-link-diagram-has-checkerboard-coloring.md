---
id: lem-connected-regular-link-diagram-has-checkerboard-coloring
kind: lemma
title: "Connected four-valent link projections admit checkerboard colorings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-regular-oriented-link-diagram,
       lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite mod-two path-parity construction is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §5.2, printed pp. 44–45"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
    - title: "Louis H. Kauffman, New Invariants in the Theory of Knots, Astérisque 163–164 (1988), §III, pp. 160–163"
      url: "https://www.numdam.org/item/AST_1988__163-164__137_0.pdf"
---

## Statement

Let $P\subset S^2$ be the finite connected 4-valent graph underlying a regular link projection. Its complementary regions have exactly two colorings with two colors such that regions sharing an edge have different colors.

## Statement references

[Calegari, *Introduction to Knot Theory*, §5.2](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Kauffman, *New Invariants in the Theory of Knots*, §III](https://www.numdam.org/item/AST_1988__163-164__137_0.pdf)

## Facts & Assumptions

**Given:** A finite connected 4-valent graph $P$ embedded in $S^2$.

[F1] Every crossing of a regular link projection is a transverse double point and has four local incident half-edges; there are finitely many crossings ([[def-regular-oriented-link-diagram]]).

[F2] A smooth embedded circle in the plane has exactly two complementary regions and bounds a closed disk on its bounded side, without a choice assumption. The corresponding separation fact on the projection sphere follows by choosing a point off the circle and using a stereographic chart ([[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]]).

## Proof
1.1 Fix a complementary region $R_0$. For any other region $R$, choose a path from an interior point of $R_0$ to an interior point of $R$, perturb it to avoid vertices and cross edges transversely, and color $R$ by the parity of the number of crossed edges. The parity is independent of the path: the symmetric difference of two paths is a finite closed edge-set modulo two. Every vertex of $P$ has even degree, so this edge-set decomposes into simple graph cycles: follow unused edges until returning to the start, split any repeated-vertex trail at that vertex, and repeat with the remaining edges. Each such cycle is a simple piecewise-smooth closed curve. Choose disjoint small disks about its vertices, away from the finitely many test-curve intersections, and round the cycle's corners inside those disks; this preserves the number of intersections with the test curve. By [F2], the rounded smooth Jordan curve separates $S^2$ into two sides. A closed test curve switches sides at every transverse intersection and returns to its starting side, so it crosses each rounded cycle evenly and hence crosses the original edge cycle evenly. Summing over the finite decomposition shows that it crosses the symmetric-difference edge-set evenly, proving path independence. [given, F1, F2, construct]

2.1 Crossing one edge changes the parity by one, so adjacent regions receive different colors. The dual adjacency graph of regions is connected because a generic path between any two regions crosses finitely many edges; hence fixing the color of $R_0$ forces every other color. The two choices for the color of $R_0$ give exactly two colorings. [step 1.1, construct] ∎

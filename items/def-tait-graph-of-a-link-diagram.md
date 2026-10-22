---
id: def-tait-graph-of-a-link-diagram
kind: definition
title: "Checkerboard coloring and Tait graphs"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-regular-oriented-link-diagram]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; a checkerboard coloring is supplied as part of the input."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
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

## Definition

For a link projection on $S^2$, a **checkerboard coloring** assigns one of two colors to each complementary region so that regions sharing an edge have different colors. Given such a coloring, the **black Tait graph** has one vertex for each black region and one edge for each crossing joining the two opposite black sectors at that crossing. The **white Tait graph** is defined by interchanging black and white. Loops and parallel edges are allowed.

## Definition references

[Kauffman, *New Invariants in the Theory of Knots*, §III](https://www.numdam.org/item/AST_1988__163-164__137_0.pdf)

[Calegari, *Introduction to Knot Theory*, §5.2](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

## Facts & Assumptions

**Given:** A regular link projection on $S^2$ and a checkerboard coloring of its complementary regions.

[F1] A regular link projection has finitely many transverse double points and no triple points ([[def-regular-oriented-link-diagram]]).

## Proof
1.1 At each crossing the four sectors alternate in color, so there is one unordered pair of opposite black sectors and one unordered pair of opposite white sectors. The crossing therefore determines one edge for each graph, with endpoints the region vertices named in the definition; if both sectors belong to one region, the edge is a loop. [given, F1, construct]

2.1 The crossings form a finite set by [F1], so each construction adds finitely many edges to the finite set of region vertices. The definition allows repeated endpoint pairs and equal endpoints, so it also covers parallel edges and loops without extra choices. [given, F1, step 1.1, construct] ∎

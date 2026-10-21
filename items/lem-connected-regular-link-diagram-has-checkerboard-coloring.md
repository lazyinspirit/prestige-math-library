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
1.1 Fix a point $x_0$ in a complementary region $R_0$. First decompose the edges of $P$ into finitely many edge-disjoint simple cycles. In a nonempty remaining even-degree graph, follow unused edges until a vertex first repeats; the segment between its two occurrences is a simple cycle, including a loop edge as a one-edge cycle. Removing that cycle subtracts two incident half-edges at each of its vertices and leaves every degree even. Repeat until no edge remains. This terminates because each removal deletes an edge; a vertex-free circle is already one cycle. Now choose two piecewise-smooth paths $\alpha,\beta$ from $x_0$ to the same point in a region $R$, avoiding the finitely many vertices and meeting open edges transversely in finitely many points. Their concatenation $\gamma=\alpha*\beta^{-1}$ is a closed test path; it need not be embedded or be an edge-path of $P$. Its intersections are counted with traversal multiplicity, so $I(\gamma,P)=I(\alpha,P)+I(\beta,P)$ modulo two. For each simple graph cycle, choose small vertex disks disjoint from the compact image of $\gamma$ and round that cycle inside them. The rounded cycle remains embedded and has exactly the same test-path intersections as its original edges. By [F2] it separates $S^2$ into two sides. Each transverse encounter switches the side occupied by $\gamma$, and a complete traversal returns to its initial side, even when the test path self-intersects or retraces an arc. Thus $\gamma$ meets each rounded cycle evenly. The graph cycles partition all open edges and $\gamma$ misses their vertices, so summing their intersection counts proves $I(\gamma,P)=0$ modulo two. Therefore $\alpha$ and $\beta$ have the same crossing parity. Coloring $R$ by this parity gives a well-defined function, independent also of the chosen endpoint inside $R$, since two such endpoints are joined within $R$ without crossing $P$. All decompositions, rounding choices and perturbations are finite; no choice axiom is used. [given, F1, F2, construct]

2.1 Crossing one edge changes the parity by one, so adjacent regions receive different colors. The dual adjacency graph of regions is connected because a generic path between any two regions crosses finitely many edges; hence fixing the color of $R_0$ forces every other color. The two choices for the color of $R_0$ give exactly two colorings. [step 1.1, construct] ∎

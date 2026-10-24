---
id: alg-knot-wirtinger-presentation-from-code
kind: algorithm
title: "Wirtinger presentation from a finite diagram code"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps: [def-knot-planar-code, lem-wirtinger-local-meridian-conjugacy, def-group-presentation]
justified_by: []
aliases: []
proof_strategy: direct
provenance: {statement: literature-derived, proof: not-applicable}
sources:
  references:
    - title: "Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram, §§2–3"
      url: "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
    - title: "Danny Calegari, Introduction to Knot Theory, §4.2, printed pp. 34–36"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json.
    delegated_by: owner
---

## Definition

The input is a finite record $D$ and a designated starting under-arc $a_0$ of one oriented knot. First check that the vertex, edge, and segment lists are finite; that every vertex, bend, and point on an edge polyline has rational coordinates; and that each polyline has the prescribed incident endpoints. Before geometric tests, delete consecutive repeated coordinates from each polyline; reject an edge with no positive-length segment or a crossing with a zero-length incident ray. Check that every crossing has four incident half-edges, a recorded cyclic order and a pairing into alternating opposite branches, and one designated over-branch; every other vertex must be a valence-two bend. Check that edge orientations agree at bends and continue coherently through each paired branch, and that following these pairings and bends traces one oriented circle. If $a_0$ is not one of the resulting under-arcs, or any structural check fails, return invalid-input.

For every unordered pair of line segments, compute the determinant of their rational direction vectors. If it is nonzero, solve the two-coordinate intersection equations over $\mathbb{Q}$ and check whether the solution lies on both closed segments. If the determinant is zero, test collinearity and overlap by exact rational determinant and endpoint-order comparisons. Reject every positive-length overlap. Allow a singleton intersection only at the common endpoint of consecutive segments in one edge polyline, or at a shared declared bend or crossing vertex with the recorded endpoint incidences. Reject all other intersections, including all other self-intersections. At each crossing, sort the four nonzero incident rays by half-plane and exact determinant comparisons; reject the input if two rays have the same direction, if this geometric cyclic order disagrees with the recorded order, or if the paired branches do not alternate. These checks are finite.

After validation, traverse the oriented knot once from $a_0$, label the maximal under-arcs $a_1,\ldots,a_m$, and introduce one symbol $x_i$ for the positive meridian of each $a_i$. At each crossing, let the outgoing over-half-edge be the ray in the direction of the oriented over-tangent. In the verified counterclockwise cyclic order, the under-half-edge immediately following it is the target side $a_t$; the other under-half-edge is the source side $a_s$. Read the over-arc $a_o$ and append exactly the relator $x_o^{-1}x_sx_ox_t^{-1}$. This rule uses the positive in-plane normal, which points counterclockwise from the oriented over-tangent, and does not depend on the under-strand direction. The orientation of each positive meridian is fixed by requiring the oriented knot tangent followed by its normal-disk orientation to give the ambient orientation. Use the diagram's common upper-collar access paths to base all meridians at one point in that collar. If the chosen complement basepoint lies elsewhere, prepend the same path from it to the collar basepoint to every access path. Interpret $x_i$ as the resulting based positive meridian. Return the finite group presentation with generators $x_1,\ldots,x_m$ and one relator per crossing.

## Definition references

[[def-knot-planar-code|Finite planar code and under-arc convention]]

[[lem-wirtinger-local-meridian-conjugacy|Oriented local meridian-conjugacy rule]]

[[def-group-presentation|Group presentation as a quotient of a free group by a relator normal closure]]


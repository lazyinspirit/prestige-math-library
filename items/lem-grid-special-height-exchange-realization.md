---
id: lem-grid-special-height-exchange-realization
kind: lemma
title: "A separated special-height exchange is a grid row commutation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-grid-diagram-for-an-oriented-knot
  - lem-bridge-diagram-grid-rectification
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Appendix B.4, Definition B.4.11 and special point commutation case of Proposition B.4.3"
---

## Statement

Assume countable choice. Let a smooth planar isotopy have exactly one exceptional bridge time in a small parameter interval. At that time two spatially distinct special points have equal height and exchange height order transversely. Each is a nondegenerate height maximum, a nondegenerate height minimum, or a transverse crossing with neither branch height-critical. All other special heights are distinct and different from this common height, no other bridge degeneracy occurs, and the diagrams on either side are nonempty bridge diagrams. Then there are bridge-like grid rectifications on the two sides with identical column order and all but two row orders identical. The remaining adjacent rows have disjoint closed marking intervals and exchange by one legal row commutation, meaning the exchange of two adjacent rows whose closed horizontal marking intervals are disjoint or strictly nested. The oriented markings and crossing decorations are transported unchanged. All other choices of rectification on either side are connected to these by commutations.

## Statement references

[[def-countable-choice]]

[[def-grid-diagram-for-an-oriented-knot]]

[[lem-bridge-diagram-grid-rectification]]

## Facts & Assumptions

**Given:** The planar isotopy and isolated special-height exchange specified in the statement.

[F1] [[def-grid-diagram-for-an-oriented-knot]] fixes the grid marking and vertical-over convention.

[F2] [[lem-bridge-diagram-grid-rectification]] constructs bridge-like rectifications from the finite ordered height data and identifies all rectifications of one bridge-isotopy class by commutations.

## Proof

1.1 Denote the exceptional points at the exceptional time by $p,q$ and their common height by $c$. Since they are distinct points of that horizontal line, their abscissae are distinct. Choose disjoint small disks around them with disjoint horizontal projections, avoiding every other crossing or critical point. In a thin horizontal band about $c$, all branches outside these disks are height-monotone. Such a band exists: otherwise critical points outside the disks would converge to height $c$, contrary to the hypotheses and compactness. Shrink the parameter interval so the two designated event neighborhoods remain disjoint with the same horizontal order, and no other special height enters this band. The two designated heights are adjacent in the full special-height order on either side. [given, construct]

2.1 Cut the diagram at all extrema and all undercrossing preimages, keeping an overcrossing branch uncut, as in [F2]. Away from the two designated points the resulting height-monotone pieces continue uniquely across the event. No one such piece can have two distinct preimages at the common height $c$ in the exceptional diagram. On its interior the height derivative is nonzero with constant sign, so its height is strictly monotone; allowing an extremum or undercrossing endpoint does not change strict monotonicity between distinct points. In particular a piece cannot join the two spatially distinct designated points or pass through one while ending at the other. Thus their local endpoint and crossing configurations involve no identification that would force the same vertical piece into both event disks at height $c$. [F2, step 1.1, given, construct]

3.1 Form closed height intervals for all these pieces at the exceptional diagram, allowing the two local joins at the same height $c$. Prescribe left-to-right inequalities whenever two intervals intersect, using the regular height order in the interior and the local cap or crossing order at an endpoint. At height $c$, place the entire local endpoint/crossing group at $p$ before the group at $q$ if $p$ is left of $q$, and conversely if $q$ is left. This order is compatible with every other piece, since its abscissa at height $c$ avoids the two disjoint disks; pieces inside a single disk have precisely the ordinary cap or crossing order. Step 2.1 excludes duplicated pieces within those two groups. Consequently every set of intervals containing one common height has a coherent total order, even at $c$. [step 1.1, step 2.1, construct]

4.1 These inequalities have a solution in distinct abscissae. To give the finite argument, any triangle of intersecting intervals has a common point, since their largest left endpoint does not exceed their smallest right endpoint. It therefore has no directed cycle by step 3.1. In any cycle of length at least four in an interval intersection graph, choose the vertex with largest left endpoint. Both neighbors contain that endpoint and hence have a chord between them. Either orientation of this chord shortens a directed cycle. Thus there is no directed cycle of inequalities. Repeatedly remove a vertex without an incoming edge and assign increasing distinct integers in that order. This solves every inequality. In particular the horizontal join intervals at $p,q$ are disjoint, including their endpoints: all of one join's endpoints precede all of the other's, by their disjoint local groups in step 3.1. Their overpassing vertical segments, if present, lie within their own join intervals, not between the two groups. [step 3.1, construct, algebra]

5.1 Keep these abscissae fixed, and replace the two equal special heights by two nearby distinct heights in either order. The resulting vertical/horizontal picture is valid in both orders. One way to check that no constraint was missed is to enlarge every interval endpoint originally at $c$ slightly before separating the two levels. All new overlaps occur among pieces whose old intervals contained $c$, hence already have the coherent order of step 3.1. Every other overlap is unchanged if the separation is sufficiently small, since there are finitely many endpoint levels separated from $c$. A cap still has no vertical piece between its endpoints at its level, and a crossing join still has exactly its designated overpassing piece there; the only other local join lies in the disjoint abscissa group. Thus each picture is a bridge-like rectangular diagram with the original oriented incidence and vertical-over crossing data. [step 1.1, step 3.1, step 4.1, construct]

6.1 The ordered graph and local special-point data of these two pictures agree with the given isotopy just before and just after the exchange. The fiberwise bridge-isotopy construction of [F2], applied on each side where the special heights are distinct, identifies their smoothings with those diagrams. Both normalized grids have the same column order. Their row orders differ solely by exchanging the two designated adjacent levels, whose horizontal marking intervals are disjoint by step 4.1. This is exactly a legal row commutation by [F1]. The same corner incidence and oriented traversal give the same $O,X$ labels before and after; the exchange does not redecorate any crossing. Finally [F2] connects any other rectifications on either side to the constructed ones by commutations. The proof did not distinguish maximum, minimum and crossing beyond their proved local join orders, so every pair of the stated special-point types, with every orientation and crossing decoration, is included. [F1, F2, step 1.1, step 4.1, step 5.1, construct] ∎

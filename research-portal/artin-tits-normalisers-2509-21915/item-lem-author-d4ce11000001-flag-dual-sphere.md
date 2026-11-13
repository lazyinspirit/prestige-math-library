---
title: Flag triangles construct the dual sphere
status: draft
research_item: lem-author-d4ce11000001-flag-dual-sphere
dependency_level: 18
---

## Prerequisites

- [lem-author-d4ce11000001-spherical-arrangement-cells](item-lem-author-d4ce11000001-spherical-arrangement-cells)
- [ex-d4-labelled-chamber-graph-artin-tits-normalisers](item-ex-d4-labelled-chamber-graph-artin-tits-normalisers)
- [math:def-cw-complex-with-closure-finiteness-and-weak-topology](https://alphabetamath.cc/item/def-cw-complex-with-closure-finiteness-and-weak-topology)


## Statement

The spherical cellulation of the seven-plane arrangement has a dual cell decomposition of the same sphere. Its vertices correspond to the 32 chambers, its edges to the 48 chamber adjacencies, and its two-dimensional disk faces to the vertices of the spherical arrangement. A dual face boundary lists the chambers incident to that arrangement vertex in cyclic order.

## Statement references

[lem-author-d4ce11000001-spherical-arrangement-cells](item-lem-author-d4ce11000001-spherical-arrangement-cells)

[ex-d4-labelled-chamber-graph-artin-tits-normalisers](item-ex-d4-labelled-chamber-graph-artin-tits-normalisers)

[math:def-cw-complex-with-closure-finiteness-and-weak-topology](https://alphabetamath.cc/item/def-cw-complex-with-closure-finiteness-and-weak-topology)

## Facts & Assumptions

[F1] [lem-author-d4ce11000001-spherical-arrangement-cells](item-lem-author-d4ce11000001-spherical-arrangement-cells) gives embedded polygonal disks meeting along entire faces on $S^2$. [ex-d4-labelled-chamber-graph-artin-tits-normalisers](item-ex-d4-labelled-chamber-graph-artin-tits-normalisers) gives the 32 chambers and 48 adjacencies. The CW convention is [math:def-cw-complex-with-closure-finiteness-and-weak-topology](https://alphabetamath.cc/item/def-cw-complex-with-closure-finiteness-and-weak-topology).

## Proof



**Given:** The data in the Statement and the exact supplier facts above.

**Goal:** Establish the Statement.

1.1 Choose a point in every spherical chamber and a point inside each arrangement edge. Inside each closed chamber disk draw nonintersecting arcs from its chosen centre to its edge centres and vertices, producing one triangle for each flag $v\subset e\subset\overline C$. Such arcs exist by a homeomorphism with a convex polygon; use the same edge centres on both sides. These finitely many triangles fit along their common edges and subdivide the original sphere. [F1]

2.1 For each original arrangement vertex $v$, unite all flag triangles beginning at $v$. Their cyclic order around a sufficiently small circle about $v$ shows that their union is a cone from $v$ over a polygonal boundary, hence an embedded closed disk. Its boundary runs successively through chamber centres and intervening edge centres. Two such disks meet along the broken arc joining the two chamber centres across their common arrangement edge; regard that broken arc as one dual edge. The chamber centres are the dual vertices. Every flag triangle belongs to exactly one such disk, so these dual disks cover the same sphere and have disjoint interiors. Their finite embedded disk attachments give a regular cell decomposition. Its adjacency graph and cyclic face boundaries are exactly as asserted. [F1, step 1.1] ∎

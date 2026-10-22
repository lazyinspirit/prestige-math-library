---
id: lem-connected-normal-surface-chi-one-is-disk
kind: lemma
title: A connected triangulated surface with Euler characteristic one and
  boundary is a disk
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-finite-triangulated-compact-surface
  - def-simplicial-euler-characteristic
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational
        Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)
      url: https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf
      locator: §§4–8; complete relevant passages on knot exteriors, normal
        coordinates, finite bounds, triangulations and unknot searches.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §§14.1–14.4, complete six-page notes on normal disks, matching, normal
        surfaces and knots.
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $S=|K|$ be a connected compact surface with nonempty boundary, where $K$ is a finite two-dimensional simplicial complex, each edge lies in one or two triangles, and each vertex link is a circle or interval. If its simplicial Euler characteristic is $\chi(K)=1$, then $S$ is homeomorphic to a closed disk.

## Statement references

[[def-finite-triangulated-compact-surface]] — the link and edge conditions for a finite triangulation of a compact surface.

[[def-simplicial-euler-characteristic]] — $\chi(K)=V-E+F$ for the supplied finite triangulation.

[Hass–Lagarias–Pippenger, Lemma 4.3](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — connected triangulated surface recognition by Euler characteristic.

[Erickson, “Normal Surfaces and Knots,” §14.1](https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf) — disk components and Euler-characteristic tests.

## Facts & Assumptions

**Given:** The finite triangulation $K$ of $S$ and its boundary subcomplex.

[F1] [[def-finite-triangulated-compact-surface]]: each edge has one or two incident triangles, vertex links are circles or intervals, and nonempty boundary contains a boundary edge.

[F2] [[def-simplicial-euler-characteristic]]: $\chi(K)=V-E+F$ for the finite triangulation.

## Proof

1.1 Form the finite dual graph with one vertex for each triangle, an additional outside vertex, an edge between two triangle vertices for each shared interior edge, and an edge from the outside vertex for each boundary edge. This graph is connected: a path in the connected surface between triangle interiors can be moved off the finitely many vertices and then crosses a finite sequence of edges; every triangle can also be joined to the outside vertex through a path to the nonempty boundary. Fix a spanning tree rooted at the outside vertex by choosing the first one in the finite lexicographic ordering of edge subsets. [given, F1, construct]

2.1 Process the triangle vertices in increasing distance from the root. For a triangle whose parent is the outside vertex, use its corresponding boundary edge; otherwise use the edge shared with its parent triangle. The parent has already been removed, so the chosen edge is now incident to this triangle alone. Remove the open triangle and that free edge. This is an elementary collapse: it is a deformation retraction and removes one $2$-cell and one $1$-cell, preserving both connectedness and Euler characteristic. After all triangles are removed, the remaining finite connected complex is a graph $G$ with $\chi(G)=\chi(K)=1$. [step 1.1, F1, F2, construct]

3.1 A connected finite graph with $V$ vertices and $E$ edges has a spanning tree with $V-1$ edges. Since $V-E=\chi(G)=1$ by [F2], it has exactly $V-1$ edges, so every edge belongs to that spanning tree and $G$ itself is a tree. [F2, step 2.1, algebra]

4.1 Use small polygonal neighborhoods in the surface throughout, rather than attaching triangles along exposed edges of the remaining complex. For a free triangle-edge collapse $L\searrow L'$, choose the vertex disks and edge strips sufficiently small. Inside the removed triangle, a neighborhood of $L'$ is a narrow collar of the two retained sides, together with its corner sectors. Its boundary facing the empty triangle is one polygonal arc joining the two ends of the removed free edge. Other retained triangles may meet the retained sides on their opposite sides, but they do not meet this empty triangle interior. Move the facing boundary arc across that interior to a parallel arc just beyond the free edge, using the surface boundary collar if the edge lies on $\partial S$. This expands a disk along one boundary interval; triangulating the intervening polygon gives a PL homeomorphism of the old and enlarged neighborhoods, fixed away from the triangle and its small corner sectors. The enlarged neighborhood is a neighborhood of $L$. Thus reversing each collapse preserves the neighborhood homeomorphism type without requiring any retained edge to be exposed. A neighborhood of the tree $G$ is a disk: absorb a leaf vertex disk and its rectangular edge strip successively into the neighboring vertex disk. Reversing all collapses and expanding the final boundary collar identifies this disk with $S$. [step 2.1, step 3.1, construct] ∎


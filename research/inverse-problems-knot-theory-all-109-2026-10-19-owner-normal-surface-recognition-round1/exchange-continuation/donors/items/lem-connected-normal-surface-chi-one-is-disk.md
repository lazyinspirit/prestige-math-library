---
id: lem-connected-normal-surface-chi-one-is-disk
kind: lemma
title: "A connected triangulated surface with Euler characteristic one and boundary is a disk"
status: draft
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
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)"
      url: "https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf"
      locator: "§§4–8; complete relevant passages on knot exteriors, normal coordinates, finite bounds, triangulations and unknot searches."
    - title: "Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture notes (2009)"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf"
      locator: "§§14.1–14.4, complete six-page notes on normal disks, matching, normal surfaces and knots."
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

1.2 Process the triangle vertices in increasing distance from the root. For a triangle whose parent is the outside vertex, use its corresponding boundary edge; otherwise use the edge shared with its parent triangle. The parent has already been removed, so the chosen edge is now incident to this triangle alone. Remove the open triangle and that free edge. This is an elementary collapse: it is a deformation retraction and removes one $2$-cell and one $1$-cell, preserving both connectedness and Euler characteristic. After all triangles are removed, the remaining finite connected complex is a graph $G$ with $\chi(G)=\chi(K)=1$. [step 1.1, F1, F2, construct]

2.1 A connected finite graph with $V$ vertices and $E$ edges has a spanning tree with $V-1$ edges. Since $V-E=\chi(G)=1$ by [F2], it has exactly $V-1$ edges, so every edge belongs to that spanning tree and $G$ itself is a tree. [F2, step 1.2, algebra]

2.2 Reverse the collapses in reverse order, starting with a regular neighborhood of the tree $G$ from step 2.1. A regular neighborhood of a finite embedded tree is a disk: attach a small disk at each vertex and one rectangular band for each tree edge, adding a leaf edge and its new vertex one at a time. At each reversed collapse the removed triangle is restored along its two retained edges; these form the exposed side of one embedded boundary arc of the current neighborhood, because its third edge was the free edge removed in that collapse and the parent triangle is not yet restored. Attaching a disk along a single boundary arc enlarges a disk without adding a handle. Induction restores all triangles and the boundary collar, so $S$ is a disk. [step 1.2, step 2.1, construct] ∎

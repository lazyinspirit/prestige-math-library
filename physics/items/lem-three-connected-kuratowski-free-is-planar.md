---
id: lem-three-connected-kuratowski-free-is-planar
kind: lemma
title: "Every three-connected graph with no $K_5$ or $K_{3,3}$ minor is planar"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-kuratowski-minors-are-topological-minors, lem-three-connected-graph-has-a-contractible-edge, cor-whitney-k-connected-path-characterisation, def-vertex-and-edge-connectivity, def-graph-deletion-contraction-minor-and-subdivision, thm-menger-finite-directed-and-undirected-path-forms, thm-polygonal-jordan-curve, lem-face-containment-under-plane-subgraphs, prop-face-boundaries-in-two-connected-plane-graphs]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Lemma 4.4.3"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

Every three-connected finite graph with neither a $K_5$ nor a $K_{3,3}$ minor is planar. Minors and simple contraction are from [[def-graph-deletion-contraction-minor-and-subdivision]], connectivity from [[def-vertex-and-edge-connectivity]], and the separation argument uses [[cor-whitney-k-connected-path-characterisation]] and [[thm-menger-finite-directed-and-undirected-path-forms]]. Plane-face control is supplied by [[thm-polygonal-jordan-curve]], [[lem-face-containment-under-plane-subgraphs]] and [[prop-face-boundaries-in-two-connected-plane-graphs]].

## Facts & Assumptions

**Given:** A three-connected finite graph $G$ with neither forbidden minor.

[L1] Every three-connected simple graph with more than four vertices has an edge whose simple contraction remains three-connected ([[lem-three-connected-graph-has-a-contractible-edge]]).

[L2] A graph has a $K_5$ or $K_{3,3}$ minor exactly when it contains a subdivision of one of them ([[lem-kuratowski-minors-are-topological-minors]]).



## Proof

**Proof technique:** induction.

1.1 A three-connected graph of order four is $K_4$, which has the usual plane drawing. Assume the result for smaller three-connected graphs that exclude the two minors. [base, L2]

1.2 If $|G|>4$, choose $xy$ from [L1]. The contraction $H=G/xy$ remains three-connected and excludes the forbidden minors because the minor relation is transitive. It has a plane drawing by the induction hypothesis. [ih, L1]

2.1 Let $v$ be the contracted vertex and delete it from the plane drawing of $H$. Its incident faces merge into one face of $H-v$, and every former neighbour of $v$ lies on that face boundary. Since $H-v$ is two-connected, the boundary is a cycle $C$. Put $X=N_G(x)\setminus\{y\}$ and $Y=N_G(y)\setminus\{x\}$, both viewed on $C$. Enumerate $X$ cyclically and let the intervening $X$-arcs partition $C$. [step 1.2]

3.1 All vertices of $Y$ lie on one intervening $X$-arc. Otherwise two vertices of $Y$ alternate on $C$ with two vertices of $X$; the paths through $x$ and $y$, together with the two arcs of $C$, form a subdivision of $K_{3,3}$. The only remaining alternating degeneracy is three common neighbours of $x,y$, which together with $x,y$ form a subdivision of $K_5$. Both contradict [L2]. [step 2.1, L2]

4.1 Delete from the drawing of $H$ the edges at $v$ corresponding only to $Y\setminus X$, and regard $v$ as $x$. The arc of $C$ containing $Y$ bounds, together with the two adjacent $x$-edges, a face of this drawing by polygonal separation and face containment. Place $y$ in that face, join it polygonally to all vertices of $Y$, and draw $xy$ inside a small neighbourhood of $x$. The arcs have disjoint interiors and recover a plane drawing of $G$. [step 3.1, construct]

5.1 The base and contraction step prove the lemma for all finite orders. [step 1.1, step 4.1, discharge-induction] ∎

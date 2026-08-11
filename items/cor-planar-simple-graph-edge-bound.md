---
id: cor-planar-simple-graph-edge-bound
kind: corollary
title: "Every simple planar graph with $n\\ge3$ vertices has at most $3n-6$ edges, with equality for a triangulation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-euler-formula-for-connected-plane-graphs, lem-plane-face-handshake-by-girth, prop-maximal-plane-triangulation-characterisation, cor-connected-components-partition-the-vertex-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Corollary 4.2.10"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
    - title: "R. Grassl and O. Levin, Exploring Combinatorial Mathematics, Activity 298"
      url: "https://openmathbooks.org/ecm/ecm.html"
pipeline_run: null
---

## Statement

Every simple planar graph with $n\ge3$ vertices and $m$ edges satisfies $m\le3n-6$. A plane triangulation has equality, and by [[prop-maximal-plane-triangulation-characterisation]] every two-connected maximal plane graph of this order is such a triangulation. Connected components are those of [[cor-connected-components-partition-the-vertex-set]].

## Facts & Assumptions

**Given:** A simple planar graph with a fixed plane embedding, $n\ge3$ vertices and $m$ edges.

[L1] For every connected plane graph, $|V|-|E|+|F|=2$ ([[thm-euler-formula-for-connected-plane-graphs]]).

[L2] If every facial boundary walk has length at least $g$, then $g|F|\le2|E|$ ([[lem-plane-face-handshake-by-girth]]).

## Proof

**Proof technique:** direct.

1.1 First suppose the graph is connected. If it is a tree then $m=n-1\le3n-6$. Otherwise simplicity makes every facial boundary walk have length at least three, so [L2] gives $3|F|\le2m$. Combining this with [L1], $|F|=2-n+m$, yields $3(2-n+m)\le2m$, hence $m\le3n-6$. [L1, L2, algebra]

2.1 If the graph is disconnected, first redraw it. Each component drawing is a finite union of segments and so is bounded, so translating and scaling the components into pairwise disjoint discs gives a plane drawing of the same abstract graph in which every component meets the unbounded face; the bound to be proved does not depend on the drawing. Now join the components by noncrossing edges through that face until the drawing is connected. This preserves simplicity and planarity, keeps $n$ fixed, and only increases the number of edges. Step 1.1 applied to the augmented graph therefore bounds the original $m$ by $3n-6$. [step 1.1, construct]

3.1 In a triangulation, every face length is three, so [L2] is an equality; substitution into [L1] gives $m=3n-6$. [step 1.1, L1, L2] ∎


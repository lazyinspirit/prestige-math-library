---
id: cor-triangle-free-planar-edge-bound
kind: corollary
title: "Every triangle-free simple planar graph with $n\\ge3$ vertices has at most $2n-4$ edges"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-euler-formula-for-connected-plane-graphs, lem-plane-face-handshake-by-girth, def-graph-walk-trail-path-and-cycle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 4, Section 4.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
    - title: "R. Grassl and O. Levin, Exploring Combinatorial Mathematics, Activity 296"
      url: "https://openmathbooks.org/ecm/ecm.html"
pipeline_run: null
---

## Statement

Every triangle-free simple planar graph with $n\ge3$ vertices and $m$ edges satisfies $m\le2n-4$. Triangles and cycles have the convention of [[def-graph-walk-trail-path-and-cycle]].

## Facts & Assumptions

**Given:** A triangle-free simple planar graph with a fixed embedding and $n\ge3$.

[L1] For every connected plane graph, $|V|-|E|+|F|=2$ ([[thm-euler-formula-for-connected-plane-graphs]]).

[L2] If every facial boundary walk has length at least $g$, then $g|F|\le2|E|$ ([[lem-plane-face-handshake-by-girth]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first the graph is connected. If it is a tree, $m=n-1\le2n-4$. Otherwise every facial boundary walk has length at least four: lengths one and two are excluded by simplicity except for a lone bridge component, and length three would be a triangle. [given]

2.1 In the non-tree case, [L2] with $g=4$ and [L1] give $4(2-n+m)\le2m$, hence $m\le2n-4$. Together with the tree case this proves the connected bound. [step 1.1, L1, L2, algebra]

3.1 For a disconnected graph, first redraw it: each component drawing is bounded, so translating and scaling the components into pairwise disjoint discs puts every component on the unbounded face without changing the abstract graph, on which the bound depends. Now join the components through that face by noncrossing bridge edges. No cycle, and hence no triangle, is added; the connected augmented graph has the same $n$ and at least as many edges. Step 2.1 gives the required bound for the original graph. [step 2.1, construct] ∎


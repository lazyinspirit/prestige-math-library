---
id: cor-planar-simple-graph-edge-bound
kind: corollary
title: "Every simple planar graph with $n\\ge3$ vertices has at most $3n-6$ edges, with equality for every plane triangulation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-euler-formula-for-connected-plane-graphs, lem-plane-face-handshake-by-girth, lem-plane-triangulation-is-connected, prop-maximal-plane-triangulation-characterisation, cor-connected-components-partition-the-vertex-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
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

Every simple planar graph with $n\ge3$ vertices and $m$ edges satisfies $m\le3n-6$. Every plane triangulation with at least three vertices has equality. Indeed, [[lem-plane-triangulation-is-connected]] supplies the connectedness needed for Euler's formula. By [[prop-maximal-plane-triangulation-characterisation]], this includes every two-connected maximal plane graph of that order. Connected components are those of [[cor-connected-components-partition-the-vertex-set]].

## Facts & Assumptions

**Given:** A simple planar graph with a fixed plane embedding, $n\ge3$ vertices and $m$ edges.

[L1] For every connected plane graph, $|V|-|E|+|F|=2$ ([[thm-euler-formula-for-connected-plane-graphs]]).

[L2] For a **connected** plane graph, writing $\ell(f)$ for the length of the facial boundary walk of $f$, $\sum_{f\in F}\ell(f)=2|E|$; consequently, if every facial boundary walk has length at least a positive natural $g$, then $g|F|\le2|E|$ ([[lem-plane-face-handshake-by-girth]]).

[L3] Every plane triangulation with at least three vertices is connected ([[lem-plane-triangulation-is-connected]]).

## Proof

**Proof technique:** direct.

1.1 First suppose the graph is connected. If it is a tree then $m=n-1\le3n-6$. Otherwise simplicity makes every facial boundary walk have length at least three, so [L2] gives $3|F|\le2m$. Combining this with [L1], $|F|=2-n+m$, yields $3(2-n+m)\le2m$, hence $m\le3n-6$. [L1, L2, algebra]

1.2 [L2] supplies more than its inequality: for a connected plane graph it gives the exact facial total $\sum_{f\in F}\ell(f)=2m$, from which that inequality is only the consequence drawn there. [L2]

2.1 If the graph is disconnected, first redraw it. Each component drawing is a finite union of segments and so is bounded, so translating and scaling the components into pairwise disjoint discs gives a plane drawing of the same abstract graph in which every component meets the unbounded face; the bound to be proved does not depend on the drawing. Now join the components by noncrossing edges through that face until the drawing is connected. This preserves simplicity and planarity, keeps $n$ fixed, and only increases the number of edges. Step 1.1 applied to the augmented graph therefore bounds the original $m$ by $3n-6$. [step 1.1, construct]

3.1 Let the graph be a plane triangulation with $n\ge3$ vertices. By [L3] it is connected, and every face has boundary a triangle, so $\ell(f)=3$ for every face. Then step 1.2 reads $3|F|=2m$, and [L1] gives $|F|=2-n+m$, so $3(2-n+m)=2m$ and $m=3n-6$. [step 1.2, L1, L3, algebra] ∎

---
id: def-simple-polygonal-region-and-triangulation
kind: definition
title: "Simple polygonal regions, diagonals, and triangulations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-euclidean-inner-product, lem-metrics-on-rn, def-finite-cardinality, def-metric-compactness, def-metric-interior-closure-boundary, def-connected-space]
justified_by: []
forward_refs: [def-polygonal-arc-and-polygon, thm-polygonal-jordan-curve]
aliases: []
landmark: true
short: "Simple polygonal region"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Geometry: Combinatorics & Algorithms 2020, Chapter 4"
      url: "https://ti.inf.ethz.ch/ew/courses/Geo20/lecture/gca20-4.pdf"
    - title: "J. Erickson, Simple Polygons, §1.4"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2017/chapters/01-simple-polygons.pdf"
pipeline_run: null
---

## Definition

A simple polygonal region is a compact connected set $P\subseteq\mathbb R^2$ such that $\operatorname{int}P$ is nonempty and connected, $P=\overline{\operatorname{int}P}$, and $\partial P$ is the union of the edges of an irredundant simple closed finite polygonal chain.

Explicitly, the boundary chain has distinct cyclic vertices $v_0,\ldots,v_{n-1}$ with $n\ge3$. With indices read modulo $n$, its closed edges are $[v_i,v_{i+1}]$. Nonconsecutive edges are disjoint, consecutive edges meet only at their common endpoint, and no three consecutive vertices are collinear. Compactness, interior, closure, boundary, and connectedness are taken in the Euclidean metric $d_2(x,y)=\lVert x-y\rVert_2$ of [[def-euclidean-inner-product]] and [[lem-metrics-on-rn]], with the notions of [[def-metric-compactness]], [[def-metric-interior-closure-boundary]], and [[def-connected-space]]; finiteness is that of [[def-finite-cardinality]].

A diagonal $[v_i,v_j]$ joins two nonadjacent boundary vertices and its open segment $\{(1-t)v_i+tv_j:0<t<1\}$ lies in $\operatorname{int}P$.

A **triangulation** is a finite family of nondegenerate closed triangles with union $P$ such that the intersection of any two distinct triangles is empty, a common vertex, or a full common edge. It is **frugal** when the set of all triangle vertices is exactly the boundary-vertex set of $P$; a general triangulation may also use finitely many subdivision vertices on boundary edges or in the interior.

## Remarks

This definition begins with an already given filled set $P$ and imposes conditions on it. It does not assert that every simple closed polygonal chain determines such a set. The boundary-chain convention is called a polygon in [[def-polygonal-arc-and-polygon]], and [[thm-polygonal-jordan-curve]] supplies the corresponding complementary-region theorem.

---
id: lem-polygonal-arc-does-not-separate-the-plane
kind: lemma
title: "The complement of a polygonal arc in $\\mathbb R^2$ is polygonally connected"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polygonal-arc-and-polygon, lem-polygonal-ray-general-position, thm-polygonal-jordan-curve, cor-components-of-open-subsets-of-rn-are-polygonally-connected, def-plane-region-and-frontier, def-polygonal-path-and-polygonal-connectedness]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Lemma 4.1.3"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

If $A$ is a polygonal arc ([[def-polygonal-arc-and-polygon]]), then $\mathbb R^2\setminus A$ is polygonally connected and therefore has one region in the sense of [[def-plane-region-and-frontier]]. The completion step uses the finite general-position argument of [[lem-polygonal-ray-general-position]], followed by [[thm-polygonal-jordan-curve]] and the ambient polygonal connectedness supplied by [[cor-components-of-open-subsets-of-rn-are-polygonally-connected]].

## Facts & Assumptions

**Given:** A polygonal arc $A$ and points $x,y\notin A$.

[F1] A polygonal path is specified by a finite list of vertices and is a path in the ambient subset ([[def-polygonal-path-and-polygonal-connectedness]]).

[L1] A polygon has exactly two complementary regions, each with the polygon as frontier ([[thm-polygonal-jordan-curve]]).

## Proof

**Proof technique:** constructive.

1.1 Complete $A$ to a polygon $P=A\cup B$, where $B$ is a polygonal arc with the same endpoints as $A$, has no other point in common with $A$, and avoids $x,y$. To construct $B$, take a sufficiently thin polygonal regular neighbourhood of the finite arc $A$: disjoint small vertex neighbourhoods joined by narrow strips along the edge interiors form a polygonal disk, and either boundary chain, capped to the two endpoints, supplies $B$. General position permits the finitely many boundary vertices to avoid $x,y$. [F1, construct]

2.1 By [L1], $P$ has regions $U$ and $V$. If $x,y$ lie in the same region, polygonal connectedness of open components joins them there. If they lie in opposite regions, choose a point $z$ in the relative interior of $B$. A sufficiently short segment transverse to $B$ at $z$ has one endpoint $z_U$ in $U$ and the other $z_V$ in $V$. Join $x$ to the endpoint on its side and $y$ to the other by polygonal paths within those regions, then concatenate those paths with $z_U-z-z_V$. [step 1.1, F1, L1]

3.1 The paths in step 2.1 avoid all of $P$ except possibly at $z\in B$, and $B\cap A$ consists only of the two common endpoints, so the concatenated path avoids $A$. Since $x,y$ were arbitrary, $\mathbb R^2\setminus A$ is polygonally connected. [step 2.1, discharge-construct] ∎

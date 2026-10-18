---
id: alg-randomized-history-dag-point-location
kind: algorithm
title: "Randomized planar point location by a history DAG"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 6
deps:
  - def-indexed-geometric-site-set
  - def-planar-delaunay-voronoi-structures
  - alg-incremental-planar-delaunay-edge-flips
  - lem-large-delaunay-supertriangle-exists
justified_by:
  - thm-randomized-history-dag-expected-location-cost
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9, Sections 9.3–9.4"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lecture 13"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
---

## Definition

Assume a finite full-dimensional planar site set in general position: no three input sites are collinear and no four are cocircular. Choose the augmented dyadic supertriangle by calling `CHOOSE-SUPERTRIANGLE(P,1)` from [[alg-incremental-planar-delaunay-edge-flips]], so the full augmented set has no three collinear sites and no four cocircular sites. Fix the common tie ranks before processing.

Draw one permutation uniformly from all $n!$ permutations of the distinct input sites. Initialize the fixed-universe supertriangle and current triangulation as in [[alg-incremental-planar-delaunay-edge-flips]], and maintain a directed acyclic graph (DAG) whose leaves correspond one-to-one with current triangulation triangles. Initially the DAG has one leaf for the supertriangle.

For each next site $p$, start at the root. At each node, order its child triangles lexicographically by their sorted vertex identifiers and test each child by the same three signed-orientation containment tests used by `INSERT` in [[alg-incremental-planar-delaunay-edge-flips]]. Descend to the unique child containing $p$ until reaching a current leaf $T$. Under the augmented general-position condition, $p$ lies in the interior of a unique triangle at every stage; the located leaf therefore supplies the face certificate `face(T)`. Call `INSERT(p,face(T))` from [[alg-incremental-planar-delaunay-edge-flips]]. The update verifies that certificate, uses it without a triangle scan, and returns the ordered replacement events. Process those events in order: for a face split, replace the old leaf by pointers to its three new triangle leaves; for an interior-edge split, replace each of the two old leaves by pointers to the two new triangles whose interiors meet that old triangle; for a flip, point each of the two old leaves to both new triangle leaves. Each event names the triangles and overlap map as specified by the insertion procedure. A leaf replaced later is treated in the same way, so the graph remains acyclic and its current leaves correspond exactly to the current triangulation. The insertion procedure also accepts an interior-edge certificate from callers whose admissible inputs permit edge hits; this randomized variant's general-position condition excludes that case. Each internal node has at most three children. After construction, remove synthetic-vertex triangles for the returned Delaunay triangulation; the history DAG is the insertion-time point-location structure.

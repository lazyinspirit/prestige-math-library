---
id: def-planar-delaunay-voronoi-structures
kind: definition
title: "Planar triangulations, Delaunay structures, and Voronoi cells"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 2
deps:
  - def-indexed-geometric-site-set
  - def-lexicographic-lift-tie-break
  - lem-voronoi-vertex-empty-circle
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lectures 11–13"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
---

## Definition

Use the unweighted deduplicated coordinate set of [[def-indexed-geometric-site-set]]. If its affine dimension is zero, its output is its single site. If its affine dimension is one, sort by the first varying coordinate (use $x$ if it varies, otherwise $y$) and take the chain joining consecutive sites; this is the lower-dimensional output and contains no triangles.

For affine dimension two, a **triangulation of the sites** is a finite family of nondegenerate closed triangles whose vertices are sites, whose union is the convex hull, and whose pairwise intersections are common faces. Its 1-skeleton is the graph with these sites as vertices and all triangle sides as edges; it is connected. The bounded faces of this plane graph are exactly the chosen triangles, and its one unbounded face is the exterior of the convex hull. The boundary edges of the convex hull are subdivided at every site on that boundary. A triangle is **weakly empty-circle** when no site lies strictly inside its circumdisk; other sites may lie on its boundary.

For each site $p$, its closed **Voronoi cell** is
$$V(p)=\{x\in\mathbb R^2:\|x-p\|^2\le\|x-q\|^2\text{ for every site }q\}.$$
A tie belongs to every minimizing cell. The **Delaunay graph** has one vertex for each site and an edge $pq$ exactly when $V(p)\cap V(q)$ contains a nontrivial line segment. A **Voronoi vertex** is a point belonging to at least three distinct cells. It is dual to the convex polygon of the nearest sites; [[lem-voronoi-vertex-empty-circle]] proves that those sites are vertices on one empty circle centered at that point. A **Delaunay triangulation** is a triangulation refining these polygonal Delaunay faces and having weakly empty circumdisks. In a cocircular face the triangulation need not be unique; the chosen algorithmic refinement is the fixed-universe convention of [[def-lexicographic-lift-tie-break]].

The convex-hull boundary is the boundary of the union of the triangles. An unbounded Voronoi cell corresponds to a site on that boundary. No minimum-angle or other mesh-quality condition is part of these definitions.

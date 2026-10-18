---
id: def-lexicographic-lift-tie-break
kind: definition
title: "Stable-id lexicographic lift perturbation for cocircular and power ties"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 1
deps:
  - def-indexed-geometric-site-set
  - def-certified-geometric-predicate-determinants
justified_by:
  - thm-lexicographic-lift-tie-break-consistent
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Don Sheehy, Computational Geometry, Fall 2014, Lecture 22: Weighted Delaunay Triangulations"
      url: "https://donsheehy.net/courses/comp_geom/2014_fall/notes/22_weighted_delaunay.pdf"
    - title: "CGAL 6.3 User Manual, 3D Triangulations, Regular Triangulation"
      url: "https://cgal.github.io/9465/doc/Triangulation_3/index.html"
---

## Definition

Take a fixed finite universe $U$ of indexed sites as in [[def-indexed-geometric-site-set]], dimension $d\in\{2,3\}$, and an ordered tuple of $d+2$ sites from $U$ with distinct identifiers. A computation using auxiliary sites, such as a planar supertriangle, includes those sites in $U$ from the start and assigns them distinct deterministic integer identifiers. Require that the first $d+1$ sites are affinely independent. Put $h_i=\|p_i\|^2-w_i$, with absent weights interpreted as $0$. Rank all identifiers of $U$ in increasing order, starting at rank $0$, and define
$$P(\varepsilon)=\det\bigl((p_i,h_i+\varepsilon^{2^{r_i}},1)\bigr)_{i=0}^{d+1}.$$
Regard $\varepsilon$ as a positive formal infinitesimal in the rational-function field $\mathbb R(\varepsilon)$, ordered so a nonzero polynomial has the sign of its coefficient at its least nonzero exponent. Expand this finite polynomial exactly and return the sign of its coefficient at the least exponent with nonzero coefficient. If the base is degenerate, return status degenerate-base. The same universe $U$ and ranks are used for every predicate tuple. The procedure never chooses or evaluates a numerical $\varepsilon$. Its returned sign is the declared stable-id convention for the displayed weighted lifted determinant. When all weights are zero, its constant term is the raw lifted determinant in [[def-certified-geometric-predicate-determinants]]; for nonzero weights, replace that determinant's squared-norm column by $\|p_i\|^2-w_i$ before applying this convention.

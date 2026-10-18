---
id: alg-delaunay-seeded-curved-uniform-nvb-refinement
kind: algorithm
title: "Delaunay-seeded curved uniform NVB refinement"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  - def-isoparametric-curved-cell-map
  - def-curved-domain-geometry-approximation
  - def-indexed-geometric-site-set
  - def-planar-delaunay-voronoi-structures
  - alg-incremental-planar-delaunay-edge-flips
  - thm-incremental-planar-delaunay-correctness-and-termination
  - def-afem-nvb-labelled-triangulation-family
  - alg-dorfler-marking-and-conforming-nvb-refinement
  - lem-afem-nvb-conforming-closure-and-cumulative-counting
  - lem-afem-nvb-shape-regularity-and-three-generation-properties
  - lem-curved-nvb-closure-preserves-matching-traces
justified_by:
  - thm-curved-uniform-nvb-quality-and-termination
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jonathan R. Shewchuk, Delaunay Refinement Mesh Generation, 1999"
      url: https://people.eecs.berkeley.edu/~jrs/meshpapers/delnotes99.pdf
verification:
  precheck: n/a
---

## Definition

Input the exact dyadic square $[-1,1]^2$, a tolerance $0<\tau\le1/4$, and the exact shear $\Phi(x,y)=(x,y+x^2/4)$. Use the unweighted indexed corner list $S=((1,(-1,-1)),(2,(1,-1)),(3,(1,1)),(4,(-1,1)))$ with all weights absent, and call [[alg-incremental-planar-delaunay-edge-flips]] in its ordinary $g=0$ branch with no prescribed insertion permutation, so sites are inserted in increasing identifier order. If the call does not return a triangulation, return unresolved. Verify that the output consists of two triangles covering the square and sharing one diagonal; otherwise return unresolved. The boundary features are the four closed edges and four vertices; features are incident when their sets intersect, and separation is the minimum Euclidean distance between nonincident feature sets. Record the interior boundary-angle certificate $\alpha=\pi/2$ and the nonincident-feature separation certificate $\sigma=1$. Label the shared diagonal reference on both triangles and label the boundary edges nonreference. Set $k=0$. While $(3/2)2^{-k}(2\sqrt2)>\tau$, set $\eta_K^2=1$, $o_K^2=0$ on every current cell and call [[alg-dorfler-marking-and-conforming-nvb-refinement]] with $\theta_E=1$, $\theta_O=1$. Start the cycle budget at $B=1$; if the call returns `budget-exhausted`, retry from the unchanged mesh with $B$ doubled until it returns `complete`. A complete call requests three generations on every cell and uses recursive conformity closure; then set $k\leftarrow k+1$ and test the diameter bound again. Map every output reference triangle by the common shear $\Phi$ and return the mapped cells, feature certificates, and $k$. If a predicate is unresolved, the Delaunay seed does not have the stated two-triangle form, or closure returns invalid input, return `unresolved`.

## Procedure notes

The exact Delaunay seed uses [[def-planar-delaunay-voronoi-structures]] and [[alg-incremental-planar-delaunay-edge-flips]]. NVB means newest-vertex bisection: split each triangle's uniquely labeled reference edge at its midpoint and use the inherited labels for its children, as defined in [[def-afem-nvb-labelled-triangulation-family]]. Each closure call uses the exact finite-array interface of [[alg-dorfler-marking-and-conforming-nvb-refinement]]. The budget-doubling loop is safe because `budget-exhausted` returns the original mesh, and recursive closure terminates for every finite request by [[lem-afem-nvb-conforming-closure-and-cumulative-counting]].

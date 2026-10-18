---
page: curved-mesh-geometry-and-conservative-mesh-transfer
title: "Curved geometry, mesh generation and conservative transfer"
status: draft
items:
  - def-intersection-volume-conservative-remapping
  - def-isoparametric-curved-cell-map
  - lem-h2-zero-boundary-p1-interpolant-conforming
  - def-curved-domain-geometry-approximation
  - lem-curved-p1-interpolation-scaling
  - lem-isoparametric-pullback-and-surface-metric
  - thm-overlap-remap-l2-projection-conservation-positivity
  - lem-curved-boundary-lift-residual
  - lem-isoparametric-cofactor-normal-perturbation
  - lem-isoparametric-laplace-tensor-defect
  - lem-parabolic-domain-map-approximation
  - thm-overlap-remap-error-from-approximation-and-geometry
  - lem-curved-nvb-closure-preserves-matching-traces
  - thm-curved-isoparametric-strang-error-bound
  - alg-certified-convex-polygon-overlap
  - thm-certified-polygon-overlap-correctness
  - alg-delaunay-seeded-curved-uniform-nvb-refinement
  - thm-curved-uniform-nvb-quality-and-termination
examples: []
---

This page defines admissible isoparametric maps and geometry-approximation errors, proves pullback and interpolation estimates, and bounds the Laplace tensor defect used in a local Strang estimate. It defines exact overlap-volume remapping as an orthogonal projection, proves conservation and positivity, and gives a conditional error bound that separates source approximation, target approximation, and geometry displacement.

For a reference facet chart $\widehat f:\widehat F\to\widehat K$, its physical facet is $F_K(\widehat f(\widehat F))\subset K$, where $K=F_K(\widehat K)$; $\iota_K$ denotes inclusion into $K$. The square below commutes because both paths send $z\in\widehat F$ to $F_K(\widehat f(z))$. It records the restriction of the cell map and the physical-facet inclusion; it is schematic, and the proofs use the explicit map, Jacobian, and matching hypotheses rather than the drawing.

```tikzcd
\begin{tikzcd}[column sep=large,row sep=large]
\widehat F \arrow[r,"\widehat f"] \arrow[d,"F_K\circ\widehat f"'] &
\widehat K \arrow[d,"F_K"] \\
F_K(\widehat f(\widehat F)) \arrow[r,"\iota_K"'] & K
\end{tikzcd}
```

The mesh-generation result is deliberately restricted to a square mapped by an explicit area-preserving shear. It consumes the exact Delaunay and certified-predicate interfaces and a compatible two-dimensional NVB family. Its angle and termination results do not establish a general Delaunay quality theorem or adaptive complexity. Exact polygon clipping is limited to rational convex cells; unsupported or uncertified cases return `unresolved`.

The page uses [[adaptive-finite-element-methods]] and [[delaunay-triangulations-and-voronoi-computation]] as its declared current-plan prerequisites. It also cites the already published affine interpolation, measure, geometry-lift, and Strang items stated in the individual contracts.

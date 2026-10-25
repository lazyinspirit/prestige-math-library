---
page: coxeter-polyhedral-gluings-and-intrinsic-metrics-examples
title: "Coxeter Polyhedral Gluings and Intrinsic Metrics — Examples"
status: published
requires: [coxeter-polyhedral-gluings-and-intrinsic-metrics,
           areas-of-elementary-plane-figures]
items: []
examples: [ex-cg-hexagonal-a2-cell-and-graph-distance,
           ex-cg-interval-realized-tree-versus-vertex-graph-metric,
           cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete]
---

This companion is a dependency leaf: its entries use the theory of
[[coxeter-polyhedral-gluings-and-intrinsic-metrics]], together with the
elementary plane-geometry and inner-product material collected on
[[areas-of-elementary-plane-figures]], and no other page depends on a supplier
homed here.

The hexagonal example [[ex-cg-hexagonal-a2-cell-and-graph-distance]] realizes
the $A_2$ Coxeter cell as the regular hexagon of side $1$, identifies the chain
metric of the single-cell gluing with the Euclidean metric, computes the twelve
barycentric triangles and the exact constants $L=4/\sqrt3$ and
$\delta=\sqrt3/24$ of the star lemma, and compares the intrinsic distances
$1,\sqrt3,2$ between the vertices with the graph distances $1,2,3$ of the
hexagonal $1$-skeleton. The comparison shows that the graph metric is not the
metric induced by the cell.

The tree example [[ex-cg-interval-realized-tree-versus-vertex-graph-metric]]
glues unit intervals along a finite tree and proves by induction that the chain
metric restricts on the vertices to the graph path metric, that every two
points are joined by exactly one geodesic segment, and that the vertex metric
is not geodesic; with prescribed edge lengths $\ell_e>0$ the vertex distances
become the weighted path lengths, which agree with the unweighted graph metric
only when every $\ell_e=1$.

The counterexample [[cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete]]
exhibits the shrinking-edge ray: compact convex cells of lengths $2^{-n}$ glued
end to end give a connected, locally finite gluing isometric to $[0,2)$, whose
far endpoints form a Cauchy sequence without a limit. The dropped hypothesis is
finiteness of the number of isometry classes of cells, and the space is also not
proper.

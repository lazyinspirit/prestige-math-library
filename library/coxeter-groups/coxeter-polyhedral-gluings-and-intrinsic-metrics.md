---
page: coxeter-polyhedral-gluings-and-intrinsic-metrics
title: "Coxeter Polyhedral Gluings and Intrinsic Metrics"
status: draft
requires: [metric-spaces, compactness-in-metric-spaces,
           simplicial-complexes-and-simplicial-homology,
           simplicial-subdivision-and-simplicial-approximation,
           ascoli-arzela, cayley-graphs-word-metrics-and-quasi-isometry,
           relations-functions-and-quotients,
           measures-and-their-basic-properties]
items: [def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric,
        lem-cg-polyhedral-face-coherence-and-uniform-star-radius,
        thm-cg-polyhedral-chain-metric-topology-and-properness,
        lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity,
        thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics]
examples: []
---

This page builds the metric foundation of the Davis-complex tower: from an
abstract gluing of compact convex polyhedral cells it produces a genuine
intrinsic metric, compares that metric with the weak cell topology, and proves
properness, completeness and the existence of minimizing geodesics. The
companion [[coxeter-polyhedral-gluings-and-intrinsic-metrics-examples]] checks
the construction on a hexagonal $A_2$ cell, on an interval-realized tree and on
a shrinking-edge ray.

The definition [[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]]
fixes the data: a shape poset whose principal down-sets are face posets of
compact convex polyhedral cells, cells with affine face isometries satisfying
the cocycle and intersection conditions, the quotient space with its weak
topology, chains that step inside single cells, and the chain metric candidate
$d$ as the infimum of chain lengths. The standing hypotheses are connectedness
(H1), local finiteness (H2) and finitely many isometry classes of cells (H3),
declared before any metric claim. The definition asserts only that $d$ is
symmetric and satisfies the triangle inequality, and it records explicitly that
$d$ need not restrict to the Euclidean metric of a single cell: a chain may
leave a cell and return with smaller total length.

The star lemma
[[lem-cg-polyhedral-face-coherence-and-uniform-star-radius]] triangulates the
finitely many model cells compatibly by barycentric subdivisions, reads the
triangulation as the order complex of the face poset, and produces global hat
coordinates $\lambda_v$ with one uniform Lipschitz constant $L$ computed from
the finitely many model simplices. The barycentric coordinates of a point sum
to $1$ over at most $D+1$ carrier vertices, so some $\lambda_v$ is at least
$1/(D+1)$ there, and every ball of radius $\delta=1/(2L(D+1))$ lies in the open
star of a vertex; closed stars are finite compact cell unions. This is the
uniform star-cover radius the later arguments consume, and it is derived from
coordinates rather than from any point-to-face distance bound.

The theorem [[thm-cg-polyhedral-chain-metric-topology-and-properness]] then
proves that under (H1)-(H3) the chain metric is a metric inducing the weak
topology, that every closed bounded subset is compact, and that the space is
complete; no bound on the number of cells at a vertex is needed beyond local
finiteness. The example
[[cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete]] shows that the
finite-shapes hypothesis cannot be dropped: intervals of lengths $2^{-n}$ glued
end to end form a connected locally finite gluing isometric to the half-open
interval $[0,2)$, which is incomplete. Two further results complete the page:
the arbitrary-metric length lemma
[[lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity]]
(lower semicontinuity under uniform convergence, arc-length reparametrization
and equicontinuity of bounded arc-length families), and, under the Axiom of
Choice, the geodesic theorem
[[thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics]], which applies
the proper-target Ascoli theorem to near-minimizing chain parametrizations and
extracts a minimizing geodesic. The Axiom of Choice supplies the countable selection of near-minimizing
chains and realizing paths, as well as the Ascoli subsequence theorem, and is
declared in the geodesic statement.

The construction here is the metric half of the Davis cellulation: the cells
are the Coxeter cells of the finite parabolics and the gluings are the face
identifications of the Davis complex. Applying these results requires checking
(H1)-(H3) for that cellulation; under those hypotheses they supply its intrinsic
metric, topology and properness, and under the declared Choice assumption they
also supply the geodesics used by the later CAT(0) and Moussong arguments. The companion page records the comparisons
between the intrinsic metric and the discrete metrics on the $1$-skeleton.

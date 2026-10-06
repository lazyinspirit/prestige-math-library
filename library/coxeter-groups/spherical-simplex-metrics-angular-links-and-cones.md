---
page: spherical-simplex-metrics-angular-links-and-cones
title: "Spherical Simplex Metrics, Angular Links, and Cones"
status: draft
items: []
examples: []
---

Combinatorial links already exist in the library. Here they receive angular metrics, and tangent neighborhoods become cones over those links. Their spherical geometry must be proved before a link criterion can be used.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-spherical-gram-simplex-and-angular-link.** Given a positive-definite real symmetric Gram matrix with diagonal1 construct unit vertices by Cholesky and intersect their positive cone with the unit sphere. Define angular link of a Euclidean face from unit normal directions and induced intrinsic spherical metric. Import combinatorial link rather than redefining it.

Definition justification: `lem-cg-spherical-simplex-existence-and-link-gram-formula`.

**lem-cg-spherical-simplex-existence-and-link-gram-formula.** Prove Gram realization exists and is unique up to orthogonal isometry by basis inner products. A functional taking value one on all independent vertices is positive on their positive cone, so its spherical simplex lies in an open hemisphere and radial normalization has unique barycentric ray coordinates. On each compact model simplex, radial normalization and its inverse have bounded derivatives away from zero and the hemisphere boundary; finitely many shapes therefore compare the spherical intrinsic metric with compatible Euclidean cell-chain metrics. This supplies compactness, length topology and minimizing short paths on each connected finite spherical complex by the already proved metric-target argument. Derive c-link_ij=(c_ij-c_i0c_j0)/sqrt((1-c_i0²)(1-c_j0²)) by orthogonal projection; Schur complements give positivity and face compatibility. Disconnected angular components retain the stated infinite convention only in cone formulas.

**def-cg-euclidean-cone-and-spherical-join-metrics.** Use componentwise intrinsic angular path distance d_path only as auxiliary notation, with disconnected pairs assigned infinity. Define the actual finite-valued angular metric d_pi=min{pi,d_path}, cross-component distancepi, and prove its metric axioms from truncation and the component triangle inequality. Angular CAT(1) means D_pi-geodesic: every pair at distance<pi has a minimizing segment, and comparisons concern triangles of perimeter<2pi; such tests agree with componentwise intrinsic tests. Define C(L)={o} union ((0,infinity)×L) with the apex included separately, d_C(o,(r,x))=r and d_C²=r²+s²−2rs cos d_pi(x,y). In particular C(empty)={o}; cross-component or angular-distance≥pi geodesics pass through o. Define spherical joins by their cosine formula/endpoint quotients or unit links in product cones, with join(L,empty)=L and join(empty,empty)=empty. Quotient descent, triangle inequalities, short segments and topology are proved next; no infinity is passed to the published finite-valued metric-space definition.

Definition justification: `thm-cg-cone-join-metric-and-local-product-chart`.

**thm-cg-cone-join-metric-and-local-product-chart.** Prove the real cone metric triangle inequality by two-dimensional comparison sectors with truncated angular metric, including anglepi and disconnected cases. If d_pi(x,y)=pi, the path through the separately included apex has lengthr+s and is minimizing; for angle<pi develop the minimizing angular segment into its planar sector. Empty link gives a point cone and zero-dimensional face charts, not an empty cone. Derive joins as unit links in product cones, proving associativity, endpoint/empty conventions and face metrics. Show sufficiently small neighborhoods of a point in a face split as Euclidean face directions times a truncated cone on its angular link, preserving intrinsic lengths. Auxiliary infinite path separation is never an ordinary metric value.

## Prerequisites and reading

Required earlier pages: [[coxeter-polyhedral-gluings-and-intrinsic-metrics]], [[real-forms-and-reflection-geometry]], [[direct-matrix-factorisations-lu-cholesky-and-qr]], [[simplicial-complexes-and-simplicial-homology]]. The companion [[spherical-simplex-metrics-angular-links-and-cones-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.

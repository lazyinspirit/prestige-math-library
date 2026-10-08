---
page: davis-cat-zero-geometry-and-finite-subgroup-fixed-points
title: "Davis CAT(0) Geometry and Finite Subgroup Fixed Points"
status: draft
items: [lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets,
        lem-cg-davis-angular-vertex-link-is-metric-flag-nerve,
        thm-cg-finite-rank-davis-moussong-cat-zero-theorem,
        thm-cg-finite-subgroups-lie-in-spherical-parabolics]
examples: []
---

For a finite-rank Coxeter system, the Davis complex is built from its spherical-coset cells with their piecewise Euclidean metrics. The authored arguments on this page connect the metric geometry of those cells to finite-subgroup fixed points: first compute the spherical links, then assemble the local CAT(0) and global CAT(0) results, and finally place each finite subgroup inside the parabolic stabilizer of a fixed point's carrier cell.

The bounded-set center lemma is independent of the Coxeter construction: completeness and CAT(0) give a unique center, isometries preserving the set fix it, and common fixed sets are closed and convex, and are contractible when nonempty. Its proper-space branch proves the same conclusions without Choice. The Davis link lemma computes the spherical metric from the Coxeter form and identifies the finite links as large metric flag complexes. The CAT(0) theorem combines that link geometry with the local product charts, complete polyhedral metric and simple connectivity. The finite-subgroup theorem then uses orbit centers and the point-stabilizer formula in the carrier cell.

## Items

[[lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets]] proves existence and uniqueness of centers for nonempty bounded sets in complete CAT(0) spaces, invariance under set-preserving isometries, and the structure of common fixed sets. Proper spaces use a choice-free compactness argument.

[[lem-cg-davis-angular-vertex-link-is-metric-flag-nerve]] computes the vertex-link edge lengths and cosine Gram matrices, identifies higher links with face links, and proves the large metric-flag description. Its general CAT(1) clause depends on the finite metric-flag theorem.

[[thm-cg-finite-rank-davis-moussong-cat-zero-theorem]] assembles the local link and cone criteria, the intrinsic polyhedral metric, and simple connectivity to obtain the CAT(0) geometry and geodesic contraction of the finite-rank Davis complex.

[[thm-cg-finite-subgroups-lie-in-spherical-parabolics]] gives every finite subgroup a fixed point by its orbit center and identifies the point stabilizer in a minimum-representative cell chart. The subgroup is therefore contained in the spherical parabolic that setwise stabilizes the carrier cell.

The CAT(1) link route, globalization inputs, and Davis cell-incidence prerequisites are still being reconciled in the current frontier run. The corresponding item proofs state their exact conditional supplier uses; source reading alone is not treated as a substitute for those proofs.

## Prerequisites and reading

Required earlier pages: [[spherical-parabolic-cosets-and-the-davis-complex]], [[large-spherical-metric-flags-and-the-moussong-girth-theorem]], [[relations-functions-and-quotients]]. The companion [[davis-cat-zero-geometry-and-finite-subgroup-fixed-points-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.

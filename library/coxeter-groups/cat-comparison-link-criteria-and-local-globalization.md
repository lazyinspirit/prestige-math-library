---
page: cat-comparison-link-criteria-and-local-globalization
title: "CAT Comparison, Link Criteria, and Local Globalization"
status: draft
items: []
examples: []
---

Riemannian Hadamard theorems do not cover singular Coxeter polyhedra. This page supplies CAT comparison, angular-link equivalence and the precise complete simply connected local-to-global theorem using local-geodesic path spaces.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-cat-zero-cat-one-and-local-geodesic.** Define comparison triangles in Euclidean plane or unit sphere, and CAT inequality for all pairs of side points. CAT(1) uses only triangles with perimeter<2pi and requires geodesic segments only for pairs at distance< D1=pi. Finite angular d_pi is used for disconnected/truncated links; every strict-perimeter test lies in one intrinsic component and agrees with its untruncated path metric. Empty links satisfy the short-triangle property vacuously; their cone is a point. Define local CAT separately. Define local geodesic using neighborhoods with isometric segment restrictions. This is a property class, with explicit Euclidean/spherical models justified next.

Definition justification: `lem-cg-comparison-convexity-and-model-spaces`.

**lem-cg-comparison-convexity-and-model-spaces.** Prove Euclidean and spherical comparison construction/uniqueness under their length restrictions. Verify the model examples and derive CAT(0) squared midpoint inequality, uniqueness of geodesics and convex distance between proportional points. Give the CAT(1) short-geodesic analog in balls of radius below pi/2, with the required cosine signs.

**lem-cg-alexandrov-comparison-triangle-gluing.** For two Euclidean or spherical comparison triangles sharing a side, prove the Alexandrov gluing inequality from the law of cosines: the comparison angle sum condition permits straightening the common side without increasing the outer diagonal bound. Treat degenerate triangles by limits and spherical perimeter<2pi separately. Induct over finite subdivided strips to obtain the patchwork lemma used in globalization and comparison disks.

**thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion.** Prove C(L) CAT(0) iff L CAT(1) by sector lifting and law of cosines, using D_pi CAT(1) of the finite truncated angular metric, including disconnected components, empty links and local-geodesic paths crossing the separately included apex. Derive local CAT(0) for a finite-shape polyhedron iff angular vertex links CAT(1); local product charts and induction on face dimension cover nonvertex points. The converse uses comparison limits in the cone; vertex testing alone needs this inheritance argument.

**lem-cg-local-geodesic-endpoint-stability.** For a fixed local geodesic cover its compact parameter interval by complete convex small CAT(0) balls. Extend a solvable perturbation interval of length A to3A/2 by alternating its two overlapping thirds; their interior endpoint corrections shrink by factor1/2. Prove geometric-series Cauchy convergence, matching on overlaps, uniqueness and convex pointwise separation. Deduce continuous dependence and length increase bounded by the sum of endpoint displacements. This is BH II.4.3–4.5 written as a complete local supplier; compactness of a sequence alone does not prove convergence.

**lem-cg-local-geodesic-continuation-and-path-space-covering.** Let G_x be constant-speed local geodesics from x with the sup metric. Endpoint stability gives local isometry of evaluation and continuous truncation contraction. Uniform Cauchy limits remain local geodesics: use endpoint stability on one common finite set of complete convex charts and its local length bound. Equip G_x with its induced length metric: truncation and local endpoint charts give finite path lengths, chart equality gives the same local topology, and a length-Cauchy sequence first converges uniformly then converges in a common endpoint chart, proving length completeness. A complete local isometry from a connected length space onto a connected locally uniquely geodesic length space is covering: lift rectifiable paths maximally, use remaining length to obtain Cauchy limits at finite endpoints, extend by completeness, and construct disjoint continuous inverse sheets by radial segment lifts in a small ball. Prove surjectivity, disjointness and sheet continuity before applying the existing topological lifting suppliers.

**thm-cg-complete-simply-connected-local-cat-zero-globalization.** For connected complete locally CAT(0) length spaces, the path-space covering and simple connectivity give a unique global geodesic between endpoints. Prove global triangle comparison by Alexandrov subdivision/patchwork (BH II.4.9–4.11), explicitly preserving comparison angles and limiting subdivisions. Thus CAT(0); derive continuous geodesic contraction by d(H_t x,H_t y)≤t d(x,y). Ascoli subsequences alone are not claimed to prove shortening convergence.

**thm-cg-compact-local-cat-one-short-circle-criterion.** For compact locally CAT(1) geodesic spaces, prove CAT(1) iff no isometrically embedded circle of length<2pi. Use BH II.4.16 minimum digon: compactness and uniform local uniqueness give a shortest pair of distinct short geodesics; endpoint variation shows their union locally geodesic, and shorter arc alternatives contradict minimality, giving an isometric short circle. The converse restricts CAT comparison to the short-circle halves. This supplies the exact criterion needed by Moussong, bypassing the unresolved Bowditch nonshrinkable-loop route.

## Prerequisites and reading

Required earlier pages: [[spherical-simplex-metrics-angular-links-and-cones]], [[homotopy-and-homotopy-equivalence]], [[covering-spaces-and-lifting]]. The companion [[cat-comparison-link-criteria-and-local-globalization-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.

---
page: davis-cat-zero-geometry-and-finite-subgroup-fixed-points
title: "Davis CAT(0) Geometry and Finite Subgroup Fixed Points"
status: draft
items: []
examples: []
---

All geometric ingredients are now local suppliers: coherent Euclidean Coxeter cells, complete geodesic metric, large metric-flag links and simple connectivity. Their assembly proves the general finite-rank Davis CAT(0) theorem, including infinite and noncrystallographic Coxeter systems.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**lem-cg-davis-angular-vertex-link-is-metric-flag-nerve.** Compute link edge length pi-pi/m_st from the orbit-polytope face geometry. Its cosine Gram matrix is the canonical B, so positive-definite finite-type criterion implies exactly the spherical subsets are faces. Higher links match Schur complements and face charts. Hence the finite vertex link is large metric flag, with disconnected conventions intact.

**thm-cg-finite-rank-davis-moussong-cat-zero-theorem.** The metric-flag theorem makes each vertex link CAT(1); supplied charts give local CAT(0). Finite shapes+local finite incidence give complete geodesic metric and the prior presentation argument gives simple connectivity. Apply the locally CAT(0) globalization supplier, carrying its AC dependence from proper-target geodesic construction, to obtain CAT(0) and continuous geodesic contraction.

**lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets.** For a bounded finite orbit define radius function r(x)=max_g d(x,gx0). The squared midpoint inequality makes a minimizing sequence Cauchy; completeness yields a unique minimizing circumcenter. Isometries permuting the orbit fix it. Each fixed-point set is closed and convex by uniqueness of geodesics, hence any nonempty intersection has a continuous geodesic contraction. State finite/bounded and complete hypotheses explicitly.

**thm-cg-finite-subgroups-lie-in-spherical-parabolics.** Every finite subgroup has a fixed point by the circumcenter lemma; its point stabilizer lies in the finite stabilizer of the unique smallest carrier cell, a conjugate W_T. Thus every finite subgroup lies in a spherical parabolic. Give the alternative Tits-cone averaging proof as comparison, not as an unsupported supplier. Do not append automaticity, flat torus or Moussong hyperbolicity without their own prerequisite closure.

## Prerequisites and reading

Required earlier pages: [[spherical-parabolic-cosets-and-the-davis-complex]], [[large-spherical-metric-flags-and-the-moussong-girth-theorem]], [[relations-functions-and-quotients]]. The companion [[davis-cat-zero-geometry-and-finite-subgroup-fixed-points-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.

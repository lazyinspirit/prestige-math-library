---
page: spherical-parabolic-cosets-and-the-davis-complex
title: "Spherical Parabolic Cosets and the Davis Complex"
status: draft
items: [def-cg-spherical-nerve-coset-poset-and-davis-realization, lem-cg-spherical-coset-inclusion-and-intersection, lem-cg-canonical-cell-exposed-faces-and-normal-cones, lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics, thm-cg-davis-complex-cell-incidence-and-stabilizers, lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta, thm-cg-davis-complex-is-simply-connected]
examples: []
---

For a Coxeter system with finitely many generators, the spherical parabolic cosets form the Davis complex. This page constructs its finite-type cells, compatible face metrics, topology and group action, then proves its CW structure and simple connectivity.

The seven items proceed from the spherical-subset and coset definitions through finite orbit geometry to the complete cellulation. The claims apply to finite-rank Coxeter systems, including those whose ambient group is infinite.

## Cells, action and simple connectivity

[[def-cg-spherical-nerve-coset-poset-and-davis-realization]] defines the spherical subsets, nerve, inclusion poset of cosets and chamber. [[lem-cg-spherical-coset-inclusion-and-intersection]] proves the equality, containment and intersection criteria needed to index cells unambiguously. [[lem-cg-canonical-cell-exposed-faces-and-normal-cones]] identifies every face of a finite Coxeter orbit polytope, and [[lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics]] supplies compatible affine face isometries for fixed positive mirror distances.

[[thm-cg-davis-complex-cell-incidence-and-stabilizers]] constructs the isometric polyhedral gluing, identifies its barycentric subdivision with the Davis realization and proves completeness, properness, the cell and point stabilizer formulas, the proper group action and the compact chamber quotient. [[lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta]] gives disk characteristic maps and the CW topology; its one-skeleton is the Cayley graph and its two-cells are the finite rank-two polygons, with involution relations represented by backtracks.

[[thm-cg-davis-complex-is-simply-connected]] reduces loops to finite edge walks, fills the Coxeter relator polygons and uses relative cellular approximation to control the two-skeleton. The resulting Davis complex is simply connected. The companion examples make the cell geometry and the finite Coxeter sphere versus Davis cell distinction explicit.

## Prerequisites and reading

Required earlier pages: [[parabolic-subgroups-and-double-coset-geometry]], [[finite-reflection-arrangements-and-spherical-coxeter-complexes]], [[coxeter-polyhedral-gluings-and-intrinsic-metrics]], [[cw-complexes-and-cellular-homology]], [[simplicial-subdivision-and-simplicial-approximation]], [[simplicial-complexes-and-simplicial-homology]], [[hurewicz-whitehead-freudenthal-and-cw-approximation]]. The companion [[spherical-parabolic-cosets-and-the-davis-complex-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.

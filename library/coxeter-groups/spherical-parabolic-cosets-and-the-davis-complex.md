---
page: spherical-parabolic-cosets-and-the-davis-complex
title: "Spherical Parabolic Cosets and the Davis Complex"
status: draft
items: []
examples: []
---

Spherical parabolic cosets form the Davis complex. Existing order-complex machinery supplies its realization, but its Coxeter cells, incidence, stabilizers and simple connectivity require specific proofs.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-spherical-nerve-coset-poset-and-davis-realization.** Define spherical subsets T⊆S by W_T finite; inclusion of parabolics proves downward closure. Define nerve on nonempty spherical subsets, coset poset P={wW_T:T spherical} ordered by inclusion, and Σ=|P| using the existing order realization. Empty T supplies vertices w. Define left W action and its basic chamber from spherical subset chains.

Definition justification: `thm-cg-davis-complex-cell-incidence-and-stabilizers`.

**lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics.** For each spherical T choose the unique chamber point x_T at fixed positive distances d_s from simple mirrors and take C_T=conv(W_T x_T). Prove every face is the orbit hull of a parabolic coset by supporting functional reduction to the fundamental chamber and its zero-coordinate stabilizer. Show smaller U-face metrics depend on the same distances d_s and therefore agree on common faces. Prove these are all faces, not just exhibited examples.

**thm-cg-davis-complex-cell-incidence-and-stabilizers.** Identify barycentric face chains of C_T with the coset order subcomplex and glue using the proved face isometries. Show Σ has finitely many shapes and locally finite incidence for finite S, stabilizer of a cell a conjugate spherical parabolic, and compact chamber quotient. Construct mutually inverse chain-representative maps Σ↔U(W,chamber), verify topology locally, and derive properness of W action from finite incidence rather than finite stabilizers alone.

**thm-cg-davis-complex-is-simply-connected.** The one-skeleton is the undirected S-Cayley graph; finite rank-two cells are 2m_st polygons. Any edge loop is a word equal1, hence a finite product of conjugated relators in the presentation normal closure. Fill these polygons and cancel ss by immediate backtracks. Use the published finite-source cellular approximation to replace loops by edge loops and show higher cells preserve pi1; verify its CW hypotheses first.

## Prerequisites and reading

Required earlier pages: [[parabolic-subgroups-and-double-coset-geometry]], [[finite-reflection-arrangements-and-spherical-coxeter-complexes]], [[coxeter-polyhedral-gluings-and-intrinsic-metrics]], [[cw-complexes-and-cellular-homology]], [[simplicial-subdivision-and-simplicial-approximation]], [[simplicial-complexes-and-simplicial-homology]], [[hurewicz-whitehead-freudenthal-and-cw-approximation]]. The companion [[spherical-parabolic-cosets-and-the-davis-complex-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.

---
page: finite-reflection-arrangements-and-spherical-coxeter-complexes
title: "Finite Reflection Arrangements and Spherical Coxeter Complexes"
status: draft
items: []
examples: []
---

Finite root hyperplanes divide Euclidean space into simplicial chambers. Their spherical sections give the Coxeter complex, with faces indexed by cosets and stabilizers proved rather than assumed.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-finite-reflection-arrangement-and-spherical-chambers.** Using positive B identify V and V* only now. Define the finite central hyperplane arrangement, chamber components, spherical chamber closures on the unit sphere, and coset face poset {wW_I:I⊊S} with reverse inclusion.

Definition justification: `thm-cg-finite-chamber-tiling-and-coset-face-identification`.

**thm-cg-finite-chamber-tiling-and-coset-face-identification.** Use Tits-cone criterion (all roots finite) to show U=V*. Every vector is reflected into C; orbit uniqueness and face stabilizers identify all intersections and exclude overlapping interiors. Dual basis gives the simplicial chamber vertices. Prove the coset-face realization is a triangulation of S^(|S|-1), using explicit face maps and finite continuous-bijection compactness.

**thm-cg-finite-parabolic-longest-element-and-opposition.** There is unique w0 with N(w0)=Φ_+ because opposite chamber is unique. Prove ℓ(w0)=|Φ_+|, ℓ(w0w)=ℓ(w0)-ℓ(w), w0²=1 and conjugation permutes S. Prove every finite W_I has its own longest element, supplying bounded weak-order and growth arguments without circular dependence.

## Prerequisites and reading

Required earlier pages: [[finite-coxeter-diagrams-and-complete-classification]], [[finite-lattice-projections-and-coxeter-chain-labels]]. The companion [[finite-reflection-arrangements-and-spherical-coxeter-complexes-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.

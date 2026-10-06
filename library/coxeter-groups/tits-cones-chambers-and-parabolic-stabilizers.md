---
page: tits-cones-chambers-and-parabolic-stabilizers
title: "Tits Cones, Chambers, and Parabolic Stabilizers"
status: draft
items: []
examples: []
---

Chambers live naturally in the dual space. Their union is the Tits cone; its topology and face stabilizers must be established before the geometric realization becomes a tool for infinite Coxeter groups.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-tits-cone-and-fundamental-chamber.** Define U=⋃w wC and U° as its ordinary finite-dimensional interior. Define the negative-root set of f∈V*. The union definition asserts neither convexity nor local finiteness; root-sign control supplies those next.

Definition justification: `thm-cg-tits-cone-finite-negativity-and-convexity`.

**thm-cg-tits-cone-finite-negativity-and-convexity.** Prove f∈U iff only finitely many positive roots satisfy f(a)<0. Starting with a negative simple coordinate, reflecting decreases that finite set by one; termination lands in C. A finite union bounds negative roots of (1-t)f+tg, proving convexity. Prove the chamber reduction step and endpoint t=0,1 explicitly.

**thm-cg-dual-chamber-intersections-and-point-stabilizers.** For f,g∈C with wf=g show f=g and w∈W_I where I={s:f(e_s)=0}, by reducing a left descent and applying root inequalities. Hence C meets each U-orbit once and stabilizer of f is exactly W_I. Give the more general intersection rule wC∩C using the same argument, not a faithful-action shortcut.

**thm-cg-tits-cone-interior-and-local-finiteness.** For f∈C with zero-coordinate set I prove f∈U° iff W_I finite. In the finite case glue its finitely many incident chamber sectors to a neighborhood using the rank-two halfspace/face intersection rules. In the infinite case Φ_I,+ is infinite since inversion cardinalities equal unbounded lengths. Perturb f by arbitrarily small negative coordinates on I; every parabolic positive root then evaluates negatively, so the finite-negativity criterion excludes each perturbation from U. Finite spherical-face charts give locally finitely many chambers and walls in U°; a finite subcover handles compact subsets. Do not claim local finiteness on the whole boundary.

## Prerequisites and reading

Required earlier pages: [[canonical-roots-signs-and-faithful-reflections]]. The companion [[tits-cones-chambers-and-parabolic-stabilizers-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.

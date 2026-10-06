---
page: finite-coxeter-diagrams-and-complete-classification
title: "Finite Coxeter Diagrams and Complete Classification"
status: draft
items: []
examples: []
---

Finiteness is equivalent to positive definiteness of the canonical form. Classification then becomes a finite matrix problem that includes noncrystallographic diagrams, rather than the more restrictive Dynkin classification.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-coxeter-diagram-components-and-finite-type.** Join s,t for m_st≥3, mark labels≥4 and infinity, omit label3 by convention. Define irreducible via connected diagram; define finite type by W finite, without circularly declaring a list to be the definition.

Definition justification: `thm-cg-finite-type-positive-definite-criterion`.

**lem-cg-diagram-products-and-invariant-form-comparison.** Prove disconnected diagrams give direct products using commuting generators and injective factor projections. For finite W average an arbitrary Euclidean form, then show each r_s fixes the same hyperplane in the averaged and canonical forms. Normalize diagonal entries; on a connected diagram the scalar ratios agree along edges, forcing a positive scalar multiple of B.

**thm-cg-finite-type-positive-definite-criterion.** Finite W implies B positive definite by the averaging comparison. Conversely, if B positive definite, canonical faithfulness embeds W in compact O(B); chamber interior isolation gives a neighborhood of identity containing no nonidentity element. A convergent subsequence of infinitely many group elements would make distinct quotients approach identity, contradiction. Prove compactness and isolation from coordinate inequalities explicitly, avoiding an unproved spherical developing-map theorem.

**lem-cg-positive-definite-diagram-exclusions.** Use quadratic tests for cycles, infinite edges, branching degree≥4, two high-valency vertices and multiple large labels. Compare Gram forms entrywise on nonnegative vectors, calculate path determinants recursively D_k=D_(k-1)-cos²(pi/m)D_(k-2), and derive the single-branch arm inequality. Display finite label/arm exclusions, including 5-label propagation; mere diagram inspection is not a proof.

**thm-cg-finite-coxeter-classification-including-h-and-dihedral.** Conclude exactly A_n (n≥1), B_n (n≥2), D_n (n≥4), E6,E7,E8,F4,H3,H4 and I2(m) (m≥3), plus direct products; explain duplicated low ranks I2(3)=A2,I2(4)=B2,I2(6)=G2 as Coxeter systems. For every survivor verify all principal minors using determinant recurrences or explicit matrices. No integrality restriction removes H or arbitrary I2(m).

## Prerequisites and reading

Required earlier pages: [[tits-cones-chambers-and-parabolic-stabilizers]]. The companion [[finite-coxeter-diagrams-and-complete-classification-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.

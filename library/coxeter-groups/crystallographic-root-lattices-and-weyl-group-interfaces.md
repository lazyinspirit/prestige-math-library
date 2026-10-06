---
page: crystallographic-root-lattices-and-weyl-group-interfaces
title: "Crystallographic Root Lattices and Weyl Group Interfaces"
status: draft
items: []
examples: []
---

Crystallographic structure is additional arithmetic data. Root lengths and integral coroot pairings identify which finite Coxeter systems arise as Weyl groups while preserving the distinction between a Lie root system and an arbitrary real reflection system.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-crystallographic-scaling-coroot-and-lattice.** For positive-definite finite Coxeter geometry choose scaled simple roots a_s=c_s e_s. Define a_s∨=2a_s/B(a_s,a_s), integrality of B(a_t,a_s∨), root lattice Q and coroot lattice Q∨ as integer spans; weight lattice is the dual lattice under the specified pairing. This property declaration does not promise a scale for H or all I2(m).

Definition justification: `thm-cg-crystallographic-finite-type-and-lattice-stability`.

**lem-cg-integer-pairings-and-allowed-dihedral-labels.** Compute a_st a_ts=4cos²(pi/m_st) and use integer negativity and positive definiteness to obtain products 0,1,2,3, hence labels 2,3,4,6. On a tree choose root-length ratios along edges and verify the resulting integral matrices. Establish stability r_s(Q)=Q and r_s(Q∨)=Q∨ by the explicit reflection formula.

**thm-cg-crystallographic-finite-type-and-lattice-stability.** Combine the complete finite diagram list and allowed labels: precisely A,B,D,E,F4 and I2(6) (G2), with dual B/C length choices and products, admit reduced crystallographic realizations. Reuse the published root-system/base and Weyl-group results only after checking finiteness, spanning, reducedness and integrality; they do not prove arbitrary Coxeter root positivity.

## Prerequisites and reading

Required earlier pages: [[finite-coxeter-diagrams-and-complete-classification]], [[root-systems-dynkin-diagrams-and-cartan-killing-classification]]. The companion [[crystallographic-root-lattices-and-weyl-group-interfaces-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.

---
page: weak-order-inversions-and-lattice-operations
title: "Weak Order, Inversions, and Lattice Operations"
status: draft
items: []
examples: []
---

Weak order extends a reduced expression by simple generators without cancellation. Finite Coxeter weak order is a lattice; infinite weak order generally has meets but need not have joins without an upper bound.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-left-right-weak-order-and-descents.** Define u≤_R v by v=ux and ℓ(v)=ℓ(u)+ℓ(x), left weak order analogously, and descent sets D_L,D_R. Define meet/join by their universal bound properties, not by a formula assumed to work.

Definition justification: `lem-cg-weak-order-is-a-graded-partial-order`.

**lem-cg-weak-order-is-a-graded-partial-order.** Prove reflexivity, antisymmetry and transitivity from lengths, and cover relation v=us with one-length rise. Derive the correctly oriented inclusion criterion N(u^-1)⊆N(v^-1), proving its converse by a descent induction; root-set inclusion is not used unproved as the definition.

**lem-cg-bounded-weak-order-join-construction.** Choose z of maximal length among common right-weak lower bounds of x,y, a finite set. If s is a common initial simple letter but not a left descent of z, write reduced x=z x′ and y=z y′. Left exchange for sx and sy cannot delete a letter of the z prefix (that would make s a descent of z), so deletes a suffix letter in each. Therefore sz is a reduced common lower bound longer than z, contradiction. For any nonidentity common bound w choose an initial s of w; s also descends z,x,y. By induction on length(x), z′=meet(sx,sy) exists. Left-multiplication interval isomorphisms give sw,sz≤z′ and sz′≤x,y. Maximality of z yields length(sz′)≤length(z), whence z′=sz and w≤z. Thus z is the meet. For arbitrary nonempty sets repeatedly meet a failing member; each failure strictly lowers integer length, so only finitely many choices occur. For bounded nonempty sets meet all upper bounds; each original member is below that meet by its universal property, so it is the join.

**thm-cg-weak-order-meet-semilattice-and-finite-lattice.** A finite-rank Coxeter group has finite lower intervals, so the preceding construction proves all finite nonempty meets. In finite W use its proved longest element as a common upper bound, deriving joins. For infinite W assert joins only for bounded sets and prove the obstruction in infinite dihedral type; there is no implicit completeness claim.

## Prerequisites and reading

Required earlier pages: [[parabolic-subgroups-and-double-coset-geometry]], [[finite-reflection-arrangements-and-spherical-coxeter-complexes]], [[chains-antichains-sperner-and-dilworth]], [[incidence-algebras-and-mobius-inversion]]. The companion [[weak-order-inversions-and-lattice-operations-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.

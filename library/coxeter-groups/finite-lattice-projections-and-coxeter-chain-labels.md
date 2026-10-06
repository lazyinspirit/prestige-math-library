---
page: finite-lattice-projections-and-coxeter-chain-labels
title: "Finite Lattice Projections and Coxeter Chain Labels"
status: draft
items: []
examples: []
---

Import the existing partial-order, chain, order-complex and barycentric-realization definitions. The new content supplies lattice congruence projections and chain-label arguments used by Coxeter quotients and interval shellings, rather than rebuilding poset foundations.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-finite-lattice-congruence-and-interval-projections.** On a finite lattice define an equivalence compatible with meet and join, proposed quotient operations and lower/upper class endpoints. For a finite graded bounded poset define descending rooted-chain labels: the label of a cover may depend on the preceding chain above it; restriction keeps that root chain fixed. Define the unique strictly increasing lex-first maximal chain property for each rooted interval and distinct-label/no-tie hypotheses for the falling-chain formula. Ordinary edge labeling is the root-independent special case. These are properties; quotient descent and endpoint existence require the following proofs.

Definition justification: `thm-cg-finite-lattice-interval-congruence-criterion`.

**lem-cg-lattice-quotient-descent-and-class-intervals.** Compatibility implies each class is closed under meets and joins, hence has unique least and greatest members and is an interval. Operations on classes are independent of representatives. Show lower and upper projections monotone and the quotient is a lattice; finiteness is used precisely to take the meet/join of all members.

**thm-cg-finite-lattice-interval-congruence-criterion.** Conversely, an interval partition with monotone lower and upper endpoints is a lattice congruence. For x≤y in one class, sandwich x∨z≤y∨z≤π_up(x∨z) using monotonicity; prove the corresponding lower-endpoint sandwich for meets. Reduce arbitrary equivalent x,y through x∧y in their interval. Prove necessity and quotient operation formulas.

**lem-cg-lexicographic-chain-shelling-and-mobius-cancellation.** For a finite graded poset with descending rooted-chain labels and unique strictly increasing lex-first chain on each rooted interval, prove lexicographic shelling by the first divergence and first reunion of two chains: the later subchain has an adjacent descent, replace that two-step segment by its increasing rooted-interval chain, and preserve every common vertex while deleting one facet vertex. Under the stated distinct-label convention derive the signed falling-chain Möbius formula by first-ascent pairing or by the already supplied finite interval recurrence, keeping the root chain fixed in each restriction. Recall the published Möbius definition rather than redefining it; include rank-zero, rank-one and empty open-interval conventions.

## Prerequisites and reading

Required earlier pages: [[order-zorn-and-the-axiom-of-choice]], [[simplicial-subdivision-and-simplicial-approximation]], [[relations-functions-and-quotients]], [[chains-antichains-sperner-and-dilworth]], [[incidence-algebras-and-mobius-inversion]]. The companion [[finite-lattice-projections-and-coxeter-chain-labels-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.

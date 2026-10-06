---
page: heaps-commutation-classes-and-fully-commutative-elements
title: "Heaps, Commutation Classes, and Fully Commutative Elements"
status: draft
items: []
examples: []
---

Commutation classes admit a finite poset model. Fully commutative elements are exactly those for which no full noncommuting braid can appear; proving a heap word reduced requires both cancellation and braid control.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-labeled-word-heap-and-fully-commutative-element.** For word s1...sk take positions ordered by transitive closure of i<j with equal or noncommuting labels. Define labeled heap isomorphism, linear extension and fully commutative w as all reduced words connected by commuting adjacent commuting generators alone.

Definition justification: `thm-cg-heaps-classify-commutation-classes`.

**thm-cg-heaps-classify-commutation-classes.** Prove adjacent incomparable swaps connect all linear extensions by moving their first differing entry to the front inductively. Such swaps correspond exactly to commuting letters; hence labeled heaps classify word commutation classes, preserving multiplicities and equality-label order. First prove finite precedence relations have a linear extension by removing minimal positions. A convex chain can be made contiguous by contracting it to one vertex, proving acyclicity and expanding a linear extension; same-label covers can likewise be made adjacent.

**thm-cg-fully-commutative-forbidden-chain-criterion.** Matsumoto implies w fully commutative iff no reduced word contains a braid of length m_st≥3. Heap criterion excludes convex alternating s,t chains of length m_st and covering equal labels. Prove that a heap satisfying these restrictions yields a reduced word by the Tits deletion algorithm: any first noncommuting braid or cancellation would produce precisely a forbidden heap pattern, so the criterion does not silently assume reducedness.

**thm-cg-fully-commutative-weak-intervals-are-distributive.** For a fully commutative w prove lower right weak interval corresponds to order ideals of its heap: prefixes give ideals and every ideal extends to a linear extension. Show ideal determines its group element using the single commutation class and prove inverse injectivity; inclusion gives weak order. Meet and join are intersection and union of ideals. Do not identify full Bruhat intervals with this ideal lattice.

## Prerequisites and reading

Required earlier pages: [[weak-order-inversions-and-lattice-operations]], [[coxeter-presentations-exchange-and-reduced-word-theorems]], [[finite-lattice-projections-and-coxeter-chain-labels]], [[chains-antichains-sperner-and-dilworth]]. The companion [[heaps-commutation-classes-and-fully-commutative-elements-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.

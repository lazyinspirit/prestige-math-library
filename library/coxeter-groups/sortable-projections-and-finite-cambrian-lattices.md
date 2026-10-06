---
page: sortable-projections-and-finite-cambrian-lattices
title: "Sortable Projections and Finite Cambrian Lattices"
status: draft
items: []
examples: []
---

Cambrian lattices arise from a proved monotone projection of finite weak order. The uniform cone route closes the prerequisites behind literature formulas, including meet/join closure and interval fibers.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-recursive-sortable-projection-and-cambrian-congruence.** Recall the earlier proved initial-letter recursion π and define equivalence x~_c y iff π(x)=π(y), with sortable quotient order and proposed quotient operations. This definition does not yet assert congruence or interval fibers; the following homomorphism theorem and finite congruence endpoint supplier justify them. Use Cambrian as the name of this sortable-kernel construction; do not silently identify it with the separately definable least oriented rank-two contraction congruence.

Definition justification: `thm-cg-sortable-projection-greatest-element-and-interval-fibers`.

**thm-cg-sortable-meet-join-closure-and-cambrian-quotient.** Use finite inversion recognition and aligned-sortable equivalence to show an intersection of SORTABLE inversion sets is again aligned and an inversion set; hence sortable elements are meet-closed. Greatest-sortable-below and monotonicity imply sortable join-closure. Meet preservation follows the two inequalities: π(meet A)≤meet π(A), while meet π(A) is sortable and ≤meet A, hence ≤π(meet A). Join preservation requires the separate Reading–Speyer7.3 argument: for initial s and y not≥s, the weak cover-join lemma makes s a cover reflection of s∨y; the cone-wall/negative-skip criterion preserves this cover under π, and the supplied sortable cover decomposition plus homomorphic parabolic projection prove π(s∨y)=s∨π(y). Then induct on rank and length through the both-above, both-below and mixed cases. In finite W all joins exist; π is a surjective lattice homomorphism, its equality kernel is a congruence, and its quotient is weak order on the sortable sublattice. The phrase Cambrian quotient denotes this constructed sortable quotient; identifying it with the least congruence contracting oriented rank-two pairs is a separate theorem and is not asserted here.

**thm-cg-sortable-projection-greatest-element-and-interval-fibers.** Recall the earlier greatest-sortable-below theorem. The preceding homomorphism theorem and finite congruence-class supplier give every fiber as an entire closed interval, with lower endpointπ(w) and upper endpoint the finite join of its fiber. Prove the explicit upper formula u_c(w)=π_(c^-1)(ww0)w0: opposition is an order antiautomorphism and the weak parabolic projection satisfies (ww0)_J=w_J(w0)_J. For terminal s descending w, the uniform terminal-cover/decomposition supplier and sortable join closure prove π_c(w)=s∨π_(cs)(w_J). Opposing gives the corresponding initial-letter meet formula for u. Induct on rank/length for x≤y with π(x)=π(y): if initial s descends, left multiply and reduce length; if it does not, neither output descends and parabolic projection plus the dual meet formula reduce rank. Hence u(x)=u(y); take x=π(y), then oppose to derive uπ=u and πu=π. For arbitrary equivalent x,y reduce through their common lower projection. Since w≤u(w) and πu=π, u is exactly the upper endpoint already proved abstractly. All formulas use the newer uniformly proved terminal-cover facts rather than old exceptional computer checks. Both endpoint maps are monotone and no interval gaps remain.

## Prerequisites and reading

Required earlier pages: [[coxeter-euler-forms-and-sortable-chamber-cones]], [[finite-lattice-projections-and-coxeter-chain-labels]]. The companion [[sortable-projections-and-finite-cambrian-lattices-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.

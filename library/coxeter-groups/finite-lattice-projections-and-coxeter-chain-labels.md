---
page: finite-lattice-projections-and-coxeter-chain-labels
title: "Finite Lattice Projections and Coxeter Chain Labels"
status: published
items: [def-cg-finite-lattice-congruence-and-interval-projections, lem-cg-lattice-quotient-descent-and-class-intervals, lem-cg-lexicographic-chain-shelling-and-mobius-cancellation, thm-cg-finite-lattice-interval-congruence-criterion]
examples: []
---

This page supplies the lattice-congruence and chain-label machinery that the
library's Coxeter quotients and interval shellings consume, importing the
existing partial-order, chain, lattice, graded-poset, order-complex and Möbius
definitions rather than rebuilding poset foundations.

[[def-cg-finite-lattice-congruence-and-interval-projections]] fixes the
vocabulary: lattice congruences of a finite lattice, the proposed quotient
operations and class endpoints, and descending rooted-chain labelings whose
labels may depend on the chain above a cover, with the no-tie and
lex-increasing hypotheses and the ordinary edge-labeling special case. No
existence claim is built into the definition. [[lem-cg-lattice-quotient-descent-and-class-intervals]]
then proves that each class is closed under finite meets and joins, that the
endpoints exist and the class is the interval between them, that the quotient
operations are independent of representatives and make the classes a lattice,
and that the endpoint maps are order-preserving; finiteness is used exactly to
form the iterated meet and join of the members of a class, and no choice
principle is used. [[thm-cg-finite-lattice-interval-congruence-criterion]]
converts this into the working test: an equivalence relation whose classes are
intervals is a lattice congruence if and only if its endpoint maps are
order-preserving. [[lem-cg-lexicographic-chain-shelling-and-mobius-cancellation]]
consumes the labeling hypotheses: the lexicographic order of maximal chains
satisfies the pairwise facet replacement criterion for a shelling of the order
complex of an interval and of its open interval, and the Möbius value of a
rooted interval is, up to sign, the number of its strictly falling maximal
chains, with the rank-zero and rank-one conventions stated explicitly.

Required earlier pages: [[order-zorn-and-the-axiom-of-choice]],
[[simplicial-subdivision-and-simplicial-approximation]],
[[relations-functions-and-quotients]],
[[chains-antichains-sperner-and-dilworth]] and
[[incidence-algebras-and-mobius-inversion]]. The companion
[[finite-lattice-projections-and-coxeter-chain-labels-examples]] tests these
constructions on a chain, on a diamond and on the Boolean lattice $B_3$.

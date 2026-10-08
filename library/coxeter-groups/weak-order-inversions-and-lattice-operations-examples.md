---
page: weak-order-inversions-and-lattice-operations-examples
title: "Weak Order, Inversions, and Lattice Operations — Examples"
status: draft
requires: [weak-order-inversions-and-lattice-operations]
items: []
examples: [ex-cg-s3-weak-order-meets-and-joins,
           ex-cg-infinite-dihedral-bounded-interval-and-missing-join,
           cex-cg-inversion-sets-do-not-compute-meets-and-joins]
---

These examples use the weak-order definitions, inversion criterion and lattice results from [[weak-order-inversions-and-lattice-operations]]. They give a complete finite computation and two infinite or false-formula boundary cases.

[[ex-cg-s3-weak-order-meets-and-joins]] computes the six-element right weak order of $A_2$. Its two chains form a hexagon; all meets and joins follow from the down-sets and up-sets, including $\bigwedge\varnothing=w_0$ and $\bigvee\varnothing=1$. Inversion sends the right order to the left order, and the six inversion sets verify the containment criterion on all 36 ordered pairs. The positive roots and their reflection actions are computed from the Coxeter form and reflection formula.

[[ex-cg-infinite-dihedral-bounded-interval-and-missing-join]] shows that every element of the infinite dihedral group has a unique alternating reduced expression, so each lower interval is a finite prefix chain. The two simple generators are incomparable and have no common upper bound; their join therefore does not exist, even though every nonempty subset of a bounded interval has a join.

[[cex-cg-inversion-sets-do-not-compute-meets-and-joins]] refutes the formulas that a meet's inversion set is the intersection and a join's inversion set is the union. In $A_2$, $s\vee t=w_0$ has inversion set strictly larger than $N(s^{-1})\cup N(t^{-1})$, while $st\wedge ts=1$ has inversion set strictly smaller than $N((st)^{-1})\cap N((ts)^{-1})$. The order criterion gives the correct description: meet inversion sets are the greatest ones contained in the intersection, and join inversion sets are the least ones containing the union.

---
page: weak-order-inversions-and-lattice-operations
title: "Weak Order, Inversions, and Lattice Operations"
status: draft
requires: [parabolic-subgroups-and-double-coset-geometry,
           finite-reflection-arrangements-and-spherical-coxeter-complexes,
           chains-antichains-sperner-and-dilworth,
           incidence-algebras-and-mobius-inversion]
items: [def-cg-left-right-weak-order-and-descents,
        lem-cg-weak-order-prefix-property-and-left-translation,
        lem-cg-weak-order-is-a-graded-partial-order,
        lem-cg-bounded-weak-order-join-construction,
        lem-cg-full-descent-element-characterizes-finite-type,
        thm-cg-weak-order-meet-semilattice-and-finite-lattice]
examples: []
---

Let $(W,S)$ be a Coxeter system of finite rank, with length function $\ell$. The right and left weak orders are the length-additive relations $u\le_R v$ when $v=ux$ and $\ell(v)=\ell(u)+\ell(x)$, and $u\le_L v$ when $v=xu$ with the same length equality. The descent sets $D_L(w)$ and $D_R(w)$ record the simple generators that lower length on the left and right.

The prefix and translation properties make these relations computable from reduced words. In right weak order, $u\le_R v$ exactly when some reduced expression of $v$ begins with a reduced expression of $u$. If $s$ is a left descent of both $u$ and $v$, then $u\le_R v$ exactly when $su\le_R sv$; comparable intervals translate to lower intervals by left multiplication.

Both weak orders are partial orders with minimum $1$. A cover is exactly a multiplication by one simple generator that raises length by one; every comparison is a chain of covers, and each interval is finite and graded by length. The inversion sets characterize the orders: $u\le_R v$ if and only if $N(u^{-1})\subseteq N(v^{-1})$, while $u\le_L v$ if and only if $N(u)\subseteq N(v)$. The corresponding simple-root tests identify left and right descents.

Every nonempty subset of either weak order has a meet. A nonempty subset has a join exactly when it is bounded above, and then its join is the meet of its upper bounds. The meet construction uses a finite descent in length, so no Axiom of Choice is needed. No general lattice property is asserted for infinite Coxeter groups.

When $W$ is finite, both weak orders are lattices with minimum $1$ and maximum $w_0$. Their empty-set values are $\bigwedge\varnothing=w_0$ and $\bigvee\varnothing=1$. More generally, for $J\subseteq S$, the parabolic subgroup $W_J$ is finite exactly when $J$ has an upper bound, equivalently when its join exists; in that case $\bigvee J=w_0(J)$ in both orders. For $J=\varnothing$, this gives $w_0(J)=1$.

The root criterion also detects finiteness: if $w\in W_J$ and every $s\in J$ lowers $w$ on the left, then $W_J$ is finite and $w=w_0(J)$. This argument applies without a definiteness assumption on the Coxeter form. The companion page gives the complete $A_2$ lattice table, the infinite-dihedral obstruction, and the counterexample to computing meets and joins by intersecting and uniting inversion sets.

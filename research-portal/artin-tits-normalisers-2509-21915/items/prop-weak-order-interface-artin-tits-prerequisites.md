---
id: prop-weak-order-interface-artin-tits-prerequisites
kind: proposition
title: Bounded weak-order joins and finite parabolic criteria
status: draft
domain: mathematics
origin: pipeline
deps:
  - math:def-hh-coxeter-matrix-word-group-and-length
  - math:def-cg-left-right-weak-order-and-descents
  - math:thm-cg-weak-order-meet-semilattice-and-finite-lattice
dependency_roles:
  math:def-hh-coxeter-matrix-word-group-and-length: mathematical-premise
  math:def-cg-left-right-weak-order-and-descents: mathematical-premise
  math:thm-cg-weak-order-meet-semilattice-and-finite-lattice: mathematical-premise
proof_strategy: apply
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $(S,m)$ be a Coxeter matrix on a finite set, $W$ its presented Coxeter group, and $\ell(w)$ the minimum length of a word in $S$ representing $w$. The prefix order on $W$ is $u\preceq v$ exactly when $v=ux$ for some $x\in W$ with $\ell(v)=\ell(u)+\ell(x)$. An upper bound of $A\subseteq W$ is an element above every member of $A$; a join is an upper bound lying below every upper bound. Dually, a meet is a lower bound lying above every lower bound.

Every nonempty subset of $W$ has a meet, and a subset has a join exactly when it has an upper bound. If $W$ is finite, this order is a lattice, meaning that every pair has a meet and join, with top element $w_S$, the unique element of maximum length in $W$.

For $I\subseteq S$, put $W_I=\langle s:s\in I\rangle$. The set $I$ has a join exactly when $W_I$ is finite; then its join is $w_I$, the unique element of maximum length in $W_I$. This includes $I=\varnothing$, for which $w_I=1$. Thus a join in an infinite system is asserted only when its set is bounded above.

## Statement references

[[math:def-hh-coxeter-matrix-word-group-and-length]]

[[math:def-cg-left-right-weak-order-and-descents]]

[[math:thm-cg-weak-order-meet-semilattice-and-finite-lattice]]

## Facts & Assumptions

[F1] [[math:def-hh-coxeter-matrix-word-group-and-length]] defines $W$, its length, and $W_I=\langle s:s\in I\rangle$.

[F2] [[math:def-cg-left-right-weak-order-and-descents]] defines right weak order by length-additive factorizations $v=ux$, and defines bounds, meets, and joins in that order.

[F3] [[math:thm-cg-weak-order-meet-semilattice-and-finite-lattice]] (1) says that every nonempty subset has a meet and has a join exactly when it is bounded above in right weak order. Its part (2) gives a lattice with maximum $w_S$ when $W$ is finite.

[F4] [[math:thm-cg-weak-order-meet-semilattice-and-finite-lattice]] (3) says that $I$ has an upper bound, equivalently a join, precisely when $W_I$ is finite; the join is its longest element $w_I$. For $I=\varnothing$, the join is $1$.

## Proof
**Given:** A Coxeter matrix $(S,m)$ on a finite set, its presented group $W$ with length $\ell$, a subset $A\subseteq W$, and a subset $I\subseteq S$.

**Goal:** Establish the stated meet, join, finite-group, and parabolic assertions for the prefix order.


1.1 The displayed prefix relation is the right weak order by [F2]. For nonempty $A$, [F3] therefore supplies its meet and the equivalence between existence of its join and existence of an upper bound. If $A=\varnothing$, every element is an upper bound, and [F4] supplies the join $1$ of the empty set. Hence the join equivalence holds for every $A\subseteq W$. [F2, F3, F4, given]

2.1 If $W$ is finite, [F3] gives the lattice and maximum $w_S$. For any $I\subseteq S$, [F1] identifies its standard parabolic subgroup, and [F4] gives the stated finiteness criterion and join value, including the empty case. The final boundedness qualification follows from step 1.1. [F1, F3, F4, step 1.1, given] ∎

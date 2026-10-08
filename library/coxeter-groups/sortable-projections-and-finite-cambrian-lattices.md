---
page: sortable-projections-and-finite-cambrian-lattices
title: "Sortable Projections and Finite Cambrian Lattices"
status: published
requires:
  - coxeter-euler-forms-and-sortable-chamber-cones
  - finite-lattice-projections-and-coxeter-chain-labels
items:
  - def-cg-recursive-sortable-projection-and-cambrian-congruence
  - thm-cg-sortable-meet-join-closure-and-cambrian-quotient
  - thm-cg-sortable-projection-greatest-element-and-interval-fibers
examples: []
---

For a finite Coxeter system $(W,S)$ and Coxeter element $c$, the sortable projection $\pi_c$ maps each element to a $c$-sortable element below it in right weak order. The three items here define the kernel quotient, prove the lattice properties of the sortable set and projection, and describe every projection fiber by its endpoints.

## Kernel and quotient

[[def-cg-recursive-sortable-projection-and-cambrian-congruence]] defines $x\sim_c y$ exactly when $\pi_c(x)=\pi_c(y)$ and orders the classes by their projection images. It also records the proposed meet and join on classes, while leaving their representative independence for the theorem that follows. “Cambrian quotient” on this page means this sortable-kernel construction; it is not identified with the separate least congruence contracting the oriented rank-two cover pairs.

## Lattice structure

[[thm-cg-sortable-meet-join-closure-and-cambrian-quotient]] proves that the $c$-sortable elements form a sublattice of finite weak order and that $\pi_c$ preserves binary meets and joins. It follows that the kernel relation is a lattice congruence and that the quotient is lattice-isomorphic to the sortable sublattice.

## Fiber endpoints

[[thm-cg-sortable-projection-greatest-element-and-interval-fibers]] defines the upper projection $u_c(w)=\pi_{c^{-1}}(ww_0)w_0$. It proves that $u_c$ is order-preserving and idempotent, that its fibers equal the fibers of $\pi_c$, and that each such fiber is the closed interval $[\pi_c(w),u_c(w)]$. Both endpoint maps are monotone, and the two projection composites satisfy $\pi_cu_c=\pi_c$ and $u_c\pi_c=u_c$.

The items use finite type throughout and make no cluster-fan, noncrossing-partition or Catalan-counting claim. The companion page gives explicit rank-two and rank-three computations.

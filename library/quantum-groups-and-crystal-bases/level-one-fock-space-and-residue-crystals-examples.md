---
page: level-one-fock-space-and-residue-crystals-examples
title: "Level-One Fock Space and Residue Crystals — Examples"
status: draft
requires: [level-one-fock-space-and-residue-crystals]
items: []
examples: [ex-fock-e-and-f-actions-on-shape-two-one-at-e-three,
           ex-level-one-charge-zero-crystal-through-rank-four-at-e-three,
           cex-the-full-fock-space-is-not-automatically-the-irreducible-basic-module]
---

**Objective.** This companion works the convention bridge of
[[level-one-fock-space-and-residue-crystals]] on the smallest nontrivial
instances. Every item is a dependency leaf: it consumes the parent page's
conventions and the established prerequisite closure, and nothing outside this
page depends on anything homed here.

[[ex-fock-e-and-f-actions-on-shape-two-one-at-e-three]] computes the quantum-group
generator action on the shape $(2,1)$ at $e = 3$, transports it along
$J M_\lambda = |\lambda'\rangle$ with reflected colors, and separates the tables
of the quantum-group and restricted-module crystals from the ordinary Chevalley
coefficients: the standard vector is a crystal representative even when its
$F$- and $E$-coefficients are $1$ or $q^{-1}$, and a nonzero Chevalley action
need not be a nonzero crystal arrow.

[[ex-level-one-charge-zero-crystal-through-rank-four-at-e-three]] lists the
empty component at $e = 3$ through rank four, verifies that the vertices are the
$3$-restricted partitions, and computes every cogood-addition and good-deletion
arrow with the reduce-the-signature method, including the vanishing of the
residue-$1$ arrows at $(2,1)$ and the boundary at rank four.

[[cex-the-full-fock-space-is-not-automatically-the-irreducible-basic-module]]
refutes the expectation that the full Fock space is its own basic module: at
$e = 3$ the shape $(4)$, its conjugate $(1,1,1,1)$ and their ambient lower
global lifts lie outside the respective field basic modules, while the full
signature still has the edge $\tilde e_0(4) = (3)$ inside another component.

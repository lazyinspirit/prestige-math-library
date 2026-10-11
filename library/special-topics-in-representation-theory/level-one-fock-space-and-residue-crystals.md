---
page: level-one-fock-space-and-residue-crystals
title: "Level-One Fock Space and Residue Crystals"
status: draft
requires: [modular-branching-and-the-good-node-crystal, quantum-affine-type-a-and-level-one-fock-space]
items: [       def-symmetric-group-level-one-residue-and-partition-label-convention,
       lem-level-one-node-order-and-conjugation-dictionary,
       prop-qg-fock-crystal-arrows-agree-with-the-modular-good-node-operators,
       thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention,
       def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention,
       lem-general-hecke-cellular-simple-labels-match-the-basic-crystal]
examples: []
---

**Objective.** This page is the convention bridge between the quantum-group
level-one Fock space of [[quantum-affine-type-a-and-level-one-fock-space]] and
the modular good-node crystal of
[[modular-branching-and-the-good-node-crystal]]. It fixes the residue
convention, compares the two residue readings of a node signature and
transports the Fock module, its crystal and its global basis into the
symmetric-group convention. No quantum affine relation, semi-infinite wedge or
Misra-Miwa crystal is re-derived here: those constructions remain on the
quantum-group page, and this page only compares their output with the modular
branching combinatorics.

**The convention.** [[def-symmetric-group-level-one-residue-and-partition-label-convention]]
fixes a finite quantum characteristic $e \ge 2$ at charge $0$, lists the
addable and removable nodes of a residue top to bottom, defines the modular
reduced signature with good $=$ first surviving $-$ and cogood $=$ last
surviving $+$, records the dictionary between $e$-restricted and $e$-regular
partitions, and introduces the linear transport $J M_\lambda = |\lambda'\rangle$
with its reflected colors and reflected weights. The boundary $e = 0$ is
proved there by the distinct-content corner argument, with the source label
convention recorded separately.

**The comparison.** [[lem-level-one-node-order-and-conjugation-dictionary]]
proves that on the nodes of one residue the top-to-bottom order is the
decreasing-content and decreasing-column order, and that conjugation reverses
the reading order while preserving signs; this is the order dictionary between
the modular top-to-bottom reduction and the Fock-space increasing-content
reduction. [[prop-qg-fock-crystal-arrows-agree-with-the-modular-good-node-operators]]
then shows that conjugation carries the modular good-node and cogood-node
operators exactly onto the normalized Fock-space operators with negated colors,
including zero values, and identifies the survivor counts with the normal and
conormal node counts. Neither convention swaps deletion with addition: good is
removable and cogood is addable on both sides, and ordinary Chevalley
coefficients, in particular negative powers, are not the arrows.

**The restricted component.** [[thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention]]
proves that the empty component of the transported full Fock crystal is exactly
the $e$-restricted partitions, that it is the basic crystal $B(\Lambda_0)$
generated from the empty partition by cogood additions, that the full crystal is
reducible with the transported partition-number decomposition, and that in the
symmetric-group regime of prime characteristic the good-node restriction of a
James-labelled simple has the transposed deleted label as its simple socle.

**Global bases.** [[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]]
transports the lower global basis of the basic representation and defines its
transition polynomials in the symmetric-group labelling, together with the
weightwise ambient Gram matrix and the upper vectors in the basic subspace.
Their standard-frame coordinates are rational in general, while the vectors
form the exact integral upper basis in their own restricted dual lattice; the
normalized form identification and the perfect pairing with the lower span
are proved locally using the global-basis suppliers. Lower and upper integral
lattices and their ambient coordinates are distinguished throughout, and no
specialization to Hecke decomposition numbers is asserted here.

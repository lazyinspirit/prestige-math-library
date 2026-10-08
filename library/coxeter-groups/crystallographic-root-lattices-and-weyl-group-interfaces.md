---
page: crystallographic-root-lattices-and-weyl-group-interfaces
title: "Crystallographic Root Lattices and Weyl Group Interfaces"
status: published
items: [def-cg-crystallographic-scaling-coroot-and-lattice, lem-cg-integer-pairings-and-allowed-dihedral-labels, thm-cg-crystallographic-finite-type-and-lattice-stability]
examples: []
---

Crystallographic structure adds arithmetic data to a finite reflection system. A positive scaling of the simple normals determines coroots and Cartan integers; requiring those integers to be integral constrains the root lengths and the finite rank-two labels. This page develops the root and weight lattices, constructs compatible scalings on trees, and connects the resulting root systems with their Weyl groups.

The three items are ordered so that the scaling conventions precede the integrality lemma, which in turn supplies the finite-type theorem.

## Development

**Scaling and lattices.** `def-cg-crystallographic-scaling-coroot-and-lattice` defines the scaled roots and coroots, Cartan entries, crystallographic condition, and root, coroot and weight lattices. The definition does not assume positive definiteness or promise a scaling for every dihedral label.

**Integer pairings and labels.** `lem-cg-integer-pairings-and-allowed-dihedral-labels` computes the Cartan products, restricts finite positive-definite crystallographic labels to 2, 3, 4 and 6, gives tree scalings, and proves lattice and root-coroot pairing stability.

**Finite type and lattice stability.** `thm-cg-crystallographic-finite-type-and-lattice-stability` relates the finite Coxeter types to crystallographic realizations, proves the root-system and Weyl-group claims, and records how the length choices at a 4- or 6-edge transpose the Cartan matrix.

## Prerequisites

The finite Coxeter classification and the published root-system classification are earlier prerequisites. The companion [[crystallographic-root-lattices-and-weyl-group-interfaces-examples]] gives explicit A2, B2/C2 and G2 realizations and the I2(5) obstruction.

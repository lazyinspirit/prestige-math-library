---
page: noncrossing-partition-lattices-and-kreweras-complements
title: "Noncrossing Partition Lattices and Kreweras Complements"
status: published
requires: [bipartite-coxeter-elements-and-ordered-root-complexes, braided-and-symmetric-monoidal-categories]
items:
  - def-cg-coxeter-noncrossing-poset-and-kreweras-map
  - lem-cg-reversed-reflection-product-and-face-spans
  - lem-cg-convex-root-subcomplex-intersection-and-purity
  - lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves
  - thm-cg-noncrossing-finite-lattice-and-conjugacy-independence
  - thm-cg-kreweras-complement-and-type-a-partition-model
examples: []
---

For a finite-type Coxeter system and a chosen Coxeter element $c$, the noncrossing poset is the absolute-order interval $[1,c]$. The page proves its finite lattice structure from the ordered positive-root complex, then transports that structure between Coxeter elements and identifies the type-A set-partition model.

## Definitions and conventions

[[def-cg-coxeter-noncrossing-poset-and-kreweras-map]] defines the Coxeter-element convention, the interval $\operatorname{NC}(W,c)$, the Kreweras map $K(w)=w^{-1}c$, and the componentwise convention for reducible systems.

## Root geometry and conjugacy

[[lem-cg-reversed-reflection-product-and-face-spans]] proves the moved-space identity for a reversed product of independent reflection normals. [[lem-cg-convex-root-subcomplex-intersection-and-purity]] proves the common-face intersection and purity facts used by the lattice argument. [[lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves]] proves conjugacy of Coxeter elements when the finite diagram components are trees.

## Lattice and complement

[[thm-cg-noncrossing-finite-lattice-and-conjugacy-independence]] proves meets, joins, reducible product structure, and independence of the lattice isomorphism type from the chosen finite-type Coxeter element. [[thm-cg-kreweras-complement-and-type-a-partition-model]] proves the group-theoretic Kreweras identities for every finite type and the cycle and noncrossing-partition model in type A. The type-A criterion is proved in both directions; no general Catalan-count product is asserted.

The earlier [[braided-and-symmetric-monoidal-categories]] supplies the symmetric-group Coxeter presentation used to identify the type-A model.

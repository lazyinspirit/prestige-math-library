---
page: classical-np-completeness-reductions
title: "Classical NP-Completeness Reductions"
status: draft
items: [def-reduction-gadget-and-interface-invariant, def-clique-independent-set-and-vertex-cover-problems, thm-three-sat-reduces-to-clique, cor-clique-is-np-complete, thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible, cor-independent-set-and-vertex-cover-are-np-complete, def-directed-hamiltonian-path-and-cycle-problems, thm-three-sat-reduces-to-directed-hamiltonian-cycle, thm-directed-reduces-to-undirected-hamiltonian-cycle, cor-hamiltonian-path-and-cycle-are-np-complete, def-subset-sum-and-partition, thm-three-sat-reduces-to-subset-sum, thm-subset-sum-reduces-to-partition, def-set-cover, thm-vertex-cover-reduces-to-set-cover, def-three-colourability, thm-three-sat-reduces-to-three-colourability]
examples: [fs-gadget-correctness-needs-only-one-direction, fs-pseudopolynomial-is-polynomial-in-bit-length]
---

This page records the standard web of classical polynomial-time reductions that
propagates NP-completeness outward from $3$-SAT. The reductions are organized
by gadget families and simple graph or arithmetic transforms: clause-cluster
graphs for CLIQUE, complement and set-complement moves for INDEPENDENT SET and
VERTEX COVER, Hamiltonian detour gadgets, digit-column encodings for SUBSET
SUM and PARTITION, the edge-incidence translation to SET COVER, and the
not-all-equal colouring gadget for $3$-COLORABILITY.

The emphasis is on exact reduction obligations. Each theorem checks the
construction cost, the witness translation, and both directions of the iff
condition required by polynomial-time many-one reducibility. The two false
statements isolate the common mistakes of proving only one implication and of
confusing pseudopolynomial dependence on a numeric target with polynomial
dependence on the binary input length.

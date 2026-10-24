---
page: quasitriangular-hopf-algebras-and-braided-module-categories
title: "Quasitriangular Hopf Algebras and Braided Module Categories"
status: published
items:
  - lem-hh-tensor-algebra-regular-detection
  - def-hh-leg-notation-and-quasitriangular-hopf-algebra
  - lem-hh-quasitriangular-counit-and-yang-baxter-identities
  - def-hh-braiding-and-triangular-structure
  - thm-hh-r-matrix-constructs-a-module-braiding
  - lem-hh-local-braiding-operators-obey-braid-relations
examples: []
---

This page works over a field with algebraic tensor products and the category of all left modules. It fixes the leg embeddings and canonical associators before defining a quasitriangular structure. The universal tensor is always a finite element of $H\otimes H$; the Yang–Baxter equation follows from the first hexagon together with the coproduct-intertwining axiom $R\Delta(h)=\Delta^{\mathrm{op}}(h)R$, using the Hopf structure. It cannot replace these quasitriangular axioms. A braiding on all modules determines the algebraic tensor using naturality on the regular module, with no finite-dimensionality assumption.

For generic or formal $q$, the $U_q(\mathfrak{sl}_2)$ universal $R$-matrix is an infinite series in a completed tensor product, not an element of the algebraic $H\otimes H$. Its action is a terminating sum on modules where the positive generator $e$ acts locally nilpotently; the cited source states that this includes all finite-dimensional representations. See [Etingof–Semenyakin, §3.7.3, Remark 3.41](https://arxiv.org/pdf/2106.05252).

The direct inputs are [[tensor-coherence-and-algebraic-descent]], [[bialgebras-convolution-and-antipode-identities]], and [[hopf-module-tensor-products-and-rigid-duality]].

---
page: sketched-least-squares-and-subspace-embeddings-examples
title: Sketched least squares and subspace embeddings — Examples
status: published
requires:
  - sketched-least-squares-and-subspace-embeddings
items: []
examples:
  - cex-embedding-the-column-space-alone-does-not-control-ls-residual
  - ex-leverage-zero-rows-and-high-coherence
  - ex-overdetermined-regression-exact-subspace-sketch
---

The counterexample shows that embedding $\operatorname{Ran}(A)$ alone does not
give the stated residual guarantee. The next example computes the exact
leverage scores of a maximally coherent design and compares leverage sampling
with one uniform row sample. The final example computes a two-row isometric
sketch for an overdetermined regression problem.

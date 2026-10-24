---
page: bipartite-coxeter-elements-and-ordered-root-complexes-examples
title: "Bipartite Coxeter Elements and Ordered Root Complexes — Examples"
status: published
requires: [bipartite-coxeter-elements-and-ordered-root-complexes]
items: []
examples: [ex-cg-ordered-roots-and-mu-matrix-in-i2-5, ex-cg-ordered-roots-and-mu-matrix-in-a3, ex-cg-cone-intersection-versus-moved-space-meet-in-a3]
---

These examples use only the bipartite root and ordered-complex theory on [[bipartite-coxeter-elements-and-ordered-root-complexes]]. They make the root ordering, the $\mu$-root pairing matrix, and the distinction between root-cone intersections and moved-space intersections explicit.

## Rank two and type A3

[[ex-cg-ordered-roots-and-mu-matrix-in-i2-5]] computes the five positive roots and the complete $\mu$-dot-root matrix for $I_2(5)$. [[ex-cg-ordered-roots-and-mu-matrix-in-a3]] computes the six roots and matrix for the bipartite order $c=(1\ 2\ 4\ 3)$ in $A_3=S_4$; the coordinate inner product is scaled by $1/2$ so the library's roots have unit norm.

## Moved spaces and cones

[[ex-cg-cone-intersection-versus-moved-space-meet-in-a3]] takes $\alpha=(1\ 2)(3\ 4)$ and $\beta=(1\ 3)(2\ 4)$ below the same Coxeter element. Their absolute meet is $1$, their positive-root sets are disjoint, their abstract complexes share only the empty face, and their positive cones meet only at zero; the moved spaces meet in a line containing no root. The example also records that the two abstract complexes share the empty simplex, so their spherical realizations are disjoint.

This B page is a dependency leaf: later pages may use the A-page results but may not depend on these examples.

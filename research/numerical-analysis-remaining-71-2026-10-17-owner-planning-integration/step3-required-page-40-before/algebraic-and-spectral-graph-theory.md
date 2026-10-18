---
page: algebraic-and-spectral-graph-theory
title: "Algebraic and Spectral Graph Theory"
status: published
items: [def-adjacency-matrix-of-a-finite-simple-graph,
        def-graph-spectrum-spectral-radius-and-cospectrality,
        thm-adjacency-matrix-powers-count-walks,
        cor-trace-of-adjacency-power-counts-closed-walks,
        prop-spectrum-is-an-isomorphism-invariant,
        thm-bipartite-graph-iff-adjacency-spectrum-is-symmetric,
        thm-spectral-radius-is-bounded-by-average-and-maximum-degree,
        def-oriented-incidence-matrix-of-a-graph,
        def-laplacian-matrix-of-a-finite-simple-graph,
        thm-laplacian-is-the-oriented-incidence-product,
        thm-laplacian-is-positive-semidefinite-and-annihilates-ones,
        thm-laplacian-kernel-dimension-counts-components,
        def-algebraic-connectivity-of-a-graph,
        cor-algebraic-connectivity-characterises-connectedness,
        thm-binet-cauchy-formula,
        thm-spectrum-of-the-complete-graph,
        thm-matrix-tree-theorem,
        cor-kirchhoff-eigenvalue-product-formula,
        cor-cayley-formula-from-the-matrix-tree-theorem,
        def-n-d-lambda-graph-and-expander,
        thm-spectral-gap-implies-connectivity-and-edge-expansion,
        thm-spectrum-of-the-cycle-graph,
        thm-spectrum-of-the-complete-bipartite-graph,
        thm-spectrum-of-the-petersen-graph]
examples: []
---

This draft page builds the standard algebraic dictionaries that turn finite
graphs into matrices: adjacency matrices count walks, Laplacians detect
components, and Kirchhoff's theorem turns spanning-tree counts into
determinants and eigenvalue products. The route stays on the ordinary
adjacency/Laplacian interface chosen in the batch design, rather than opening a
second normalized-Laplacian or extremal-eigenvalue package.

The page then records four canonical spectrum computations, for $K_n$, $C_n$,
$K_{m,n}$, and the Petersen graph, and closes with the basic spectral-gap cut
estimate for $(n,d,\lambda)$-graphs. Together these items are the graph-theory
half of the linear-algebra prerequisites already established earlier in the
library.

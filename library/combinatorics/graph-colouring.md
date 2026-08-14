---
page: graph-colouring
title: "Graph Colouring"
status: published
items: [def-proper-vertex-colouring-and-chromatic-number,
        lem-greedy-colouring-bound,
        def-clique-and-independence-numbers,
        thm-clique-independence-chromatic-bounds,
        def-kempe-chain,
        lem-kempe-component-colour-swap]
examples: []
---

Finite simple graphs, finite cardinality, vertex neighbourhoods and maximum
degree supply the combinatorial setting. The sum rule supplies the finite
counting step used to compare colour classes with independent sets, and
[[def-subgraph-induced-subgraph-and-spanning-subgraph]] together with
[[def-connected-graph-and-connected-component]] supply the induced subgraph and
component notions the two-colour recolouring argument is stated in.

This page defines proper vertex colourings and chromatic number, proves the
greedy bound $\chi(G)\leq\Delta(G)+1$, and defines clique and independence
numbers. It then proves $\omega(G)\leq\chi(G)$ and
$|V(G)|\leq\chi(G)\alpha(G)$, including the null graph boundary. Finally it
defines the Kempe chain of two colours as a connected component of the subgraph
they induce, and proves that swapping the two colours on one such component
leaves the colouring proper.

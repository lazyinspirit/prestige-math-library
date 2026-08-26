---
page: polynomial-rodl-and-viral-equivalence
title: "Polynomial Rödl, Virality and Erdős–Hajnal Equivalence"
status: published
items: [def-polynomial-rodl-property-for-a-finite-family,
        def-viral-property-for-a-finite-family,
        def-t-k-homogeneous-property,
        lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets,
        lem-small-total-copy-expectation-forces-many-homogeneous-k-sets,
        lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets,
        thm-a-finite-family-with-the-erdos-hajnal-property-is-viral,
        cor-viral-implies-polynomial-rodl-for-a-finite-family,
        cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family,
        thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence,
        cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence]
examples: [ex-the-singleton-family-p-three-is-viral,
           ex-a-family-containing-k-one-is-vacuously-viral,
           cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted,
           cex-the-empty-family-is-not-erdos-hajnal]
---

The prerequisite pages provide homogeneous sets and the Erdős–Hajnal property on hereditary classes, together with induced-copy counts, family-free graphs, and restricted sets in the maximum-degree normalization. This page also uses the complement dictionary for cliques versus stable sets, double counting, Markov's inequality, and the real-power notation already fixed earlier. Those ingredients let the page compare three ways of forcing large homogeneous or restricted sets from forbidden induced patterns or from making their induced copies rare.

The page defines the polynomial Rödl and viral properties for finite forbidden families and introduces the $(t,k)$-homogeneous condition used in the sampling argument. It then develops the counting lemmas that turn good sampled subgraphs, or equivalently a small expected forbidden-copy count on sampled subgraphs, into many homogeneous $k$-sets, and it proves the stable-set bound that obstructs the absence of a large sparse induced subgraph. From there it proves Erdős–Hajnal implies viral, proves the easy implication viral implies polynomial Rödl, proves the converse polynomial Rödl implies Erdős–Hajnal, and then closes the equivalence for finite families and for a single graph.

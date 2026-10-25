---
page: trees-forests-and-spanning-trees
title: "Trees, Forests and Spanning Trees"
status: published
items: [def-tree-forest-and-leaf,
        lem-nonempty-forest-has-low-degree-vertex,
        thm-forest-edge-component-count,
        cor-tree-edge-count,
        lem-edge-deletion-in-a-tree,
        lem-edge-addition-to-a-tree,
        thm-tree-characterisations,
        cor-nontrivial-tree-has-two-leaves,
        def-rooted-tree,
        lem-rooted-tree-parent-and-levels,
        def-spanning-tree,
        lem-maximal-acyclic-spanning-subgraph-is-a-spanning-tree,
        thm-connected-iff-has-spanning-tree,
        lem-fundamental-cycle-of-a-spanning-tree,
        lem-fundamental-cut-of-a-spanning-tree,
        lem-spanning-tree-set-is-finite,
        def-number-of-spanning-trees,
        def-prufer-code,
        lem-prufer-decoding-produces-a-tree,
        thm-prufer-code-bijection,
        thm-cayley-formula,
        def-weighted-graph-and-minimum-spanning-tree,
        lem-spanning-tree-exchange,
        thm-cut-and-cycle-properties-for-minimum-spanning-trees,
        cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree,
        thm-kruskals-minimum-spanning-tree-algorithm,
        thm-prims-minimum-spanning-tree-algorithm]
examples: []
---

Published finite-simple-graph conventions, path and cycle definitions, connected components, vertex degrees, graph deletion, and finite-cardinality results supply the structural setting. Forest component counting gives $|V|=|E|+c$, while deleting a tree edge or adding a missing edge relates acyclicity, connectivity, unique paths, and the tree edge count.

Those structural equivalences lead to rooted-tree levels, spanning trees, fundamental cycles and cuts, and the finite spanning-tree number. Prüfer encoding and decoding then biject labelled trees with words and yield Cayley's formula. For real edge weights, spanning-tree exchange proves cut and cycle rules, uniqueness under distinct weights, and correctness of Kruskal's and Prim's finite greedy procedures.

---
page: matchings-covers-menger-and-network-flows
title: "Matchings, Covers, Menger and Network Flows"
status: published
items: [def-matching-maximum-perfect-and-matching-number,
        rem-maximal-versus-maximum-matching,
        def-vertex-and-edge-covers-and-covering-numbers,
        def-alternating-and-augmenting-path,
        lem-augmenting-path-switching,
        lem-symmetric-difference-of-two-matchings,
        thm-berge-augmenting-path-characterisation,
        def-bipartite-neighbourhood-hall-condition-and-sdr,
        lem-hall-induction-reductions,
        thm-hall-marriage-finite-bipartite,
        cor-hall-sdr-finite-families,
        cor-hall-deficiency-formula,
        lem-konig-alternating-reachability-cover,
        thm-konig-bipartite-matching-cover,
        thm-gallai-matching-edge-cover-identity,
        def-integral-network-flow-cut-and-residual-network,
        lem-flow-cut-identity-and-weak-duality,
        lem-residual-augmentation,
        lem-no-augmenting-path-gives-tight-cut,
        thm-ford-fulkerson-integral-max-flow-min-cut,
        lem-integral-unit-flow-decomposition,
        prop-bipartite-matching-flow-model,
        def-local-path-packings-and-separators,
        thm-menger-finite-directed-and-undirected-path-forms,
        cor-whitney-k-connected-path-characterisation,
        lem-three-connected-graph-has-a-contractible-edge]
examples: []
---

Finite graphs provide the common language for matchings, covers, paths, and cuts. The development uses the finite simple-graph, bipartite-graph, path, deletion, connectivity, directed-walk, and finite-cardinality conventions supplied by the declared prerequisites. In particular, finite sets make maximum and minimum cardinalities available, while labelled arc sets permit parallel and antiparallel directed arcs to remain distinguishable.

The page defines matching and cover invariants, develops augmenting paths into Berge's theorem, and proves finite Hall, the SDR criterion, the deficiency formula, König's equality, and Gallai's edge-cover identity. It then builds finite integral flow theory from labelled residual arcs through max-flow min-cut and flow decomposition. Unit-capacity reductions give the directed and undirected edge forms of Menger, vertex splitting gives the nonadjacent-terminal forms, and a corollary characterises finite $k$-connected graphs by internally disjoint paths. That characterisation then yields the contractible-edge lemma: every three-connected simple graph with more than four vertices has an edge whose simple contraction is again three-connected.

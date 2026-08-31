---
page: iterative-sparsification-and-the-five-vertex-path
title: "Iterative Sparsification and the Five-Vertex Path"
status: published
items: [def-nice-graph,
        lem-small-anticonnected-components-yield-a-complete-blockade,
        lem-a-dense-bipartite-side-has-a-small-hitting-set,
        lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade,
        lem-a-sparse-co-p-five-free-graph-has-a-large-nearly-covered-sparse-pair,
        lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade,
        lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair,
        lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade,
        lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs,
        thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade,
        lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks,
        lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse,
        thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade,
        thm-the-five-vertex-path-is-nice,
        lem-a-semisparse-blockade-can-be-sampled-to-anticonnected-blocks-with-nearly-pure-relations,
        lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade,
        lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set,
        lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph,
        lem-the-minimal-sparsity-parameter-drops-below-the-target,
        thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade,
        thm-the-five-vertex-path-has-the-polynomial-rodl-property,
        cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property]
examples: []
---

This draft page follows the source split that the design called out: the first
half proves that $P_5$ is nice by iteratively building pure or sparse blockades,
and the second half turns a nice blockade into either a complete or anticomplete
blockade or a deeper sparse subgraph until the published restricted-set theorem
can close the argument.

The final two items separate the two endpoints. First the page proves the
polynomial Rödl property for $P_5$, then it converts that stronger conclusion to
the Erdős-Hajnal property using the already-published Rödl-to-EH implication.

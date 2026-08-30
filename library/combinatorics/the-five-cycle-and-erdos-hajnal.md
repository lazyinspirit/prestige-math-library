---
page: the-five-cycle-and-erdos-hajnal
title: "The Five-Cycle and the Erdős-Hajnal Property"
status: draft
items: [lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears,
        thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side,
        def-rooted-stable-tooth-comb,
        thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb,
        lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree,
        cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree,
        lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle,
        thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound,
        cor-the-five-cycle-has-the-erdos-hajnal-property]
examples: []
---

This page follows the direct Section 4 route for $C_5$ rather than the later
star-expansion route. It first isolates the bipartite comb estimate and the
tau-critical comb extraction theorem needed to make the source proof
self-contained, then closes the contradiction by showing that any cross-edge
between comb blocks would already create an induced five-cycle.

The last two items keep the source's preferred $\kappa(G)=\alpha(G)\omega(G)$
formulation visible. The polynomial $\kappa$-bound is proved first, and the
Erdős-Hajnal property is then recovered from the already-published equivalence
between the $\kappa$, perfect-subgraph, cograph, and homogeneous-set
formulations.

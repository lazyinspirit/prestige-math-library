---
page: graphs-walks-and-connectivity
title: "Graphs, Walks and Connectivity"
status: published
items: [def-finite-simple-graph, rem-finite-simple-graph-convention,
        def-multigraph-loop-and-digraph,
        def-graph-adjacency-incidence-neighbourhood-and-degree,
        def-subgraph-induced-subgraph-and-spanning-subgraph,
        def-graph-walk-trail-path-and-cycle,
        lem-every-graph-walk-contains-a-path-between-its-endpoints,
        def-connected-graph-and-connected-component,
        lem-graph-reachability-is-an-equivalence-relation,
        cor-connected-components-partition-the-vertex-set,
        def-graph-distance-and-girth,
        lem-graph-distance-is-a-metric-on-each-component,
        def-bipartite-graph, lem-an-odd-closed-walk-contains-an-odd-cycle,
        thm-bipartite-iff-no-odd-cycle,
        def-standard-complete-bipartite-path-and-cycle-graphs,
        def-petersen-graph, def-graph-isomorphism-and-complement,
        def-graph-deletion-contraction-minor-and-subdivision, def-line-graph,
        thm-handshake-lemma-for-finite-simple-graphs,
        cor-a-graph-has-an-even-number-of-odd-degree-vertices,
        cor-complete-graph-edge-count, cor-number-of-labelled-simple-graphs,
        def-vertex-and-edge-connectivity,
        def-bridge-in-a-graph,
        lem-edge-is-a-bridge-iff-it-lies-on-no-cycle,
        lem-edge-connectivity-at-most-minimum-degree,
        lem-vertex-connectivity-at-most-edge-connectivity,
        thm-whitney-connectivity-inequalities,
        thm-minimum-degree-forces-a-long-path,
        cor-minimum-degree-two-forces-a-cycle,
        thm-dense-finite-graph-is-connected]
examples: [fs-degree-sequence-determines-a-simple-graph,
           fs-all-even-degrees-force-one-cycle,
           fs-vertex-and-edge-connectivity-always-agree,
           fs-a-shortest-walk-need-not-be-a-path]
---

Finite cardinality supplies graph order, size, degree counts and the enumeration of two-element subsets, while [[thm-double-counting]] supplies the incidence identity behind the handshake lemma. The general definition [[def-equivalence-relation]], from the required Relations, Functions, and Quotients development, is applied to reachability. The counts [[thm-two-element-subsets-count]] and [[cor-cardinality-of-the-power-set]] license the complete-graph and labelled-graph enumerations.

A graph is fixed as finite, simple and undirected before adjacency, subgraphs, walks, paths, cycles and connected components are defined. Removing repetitions turns walks into paths; reachability then partitions the vertices, shortest-path distance satisfies the metric axioms componentwise, and parity characterizes bipartite graphs. Standard graph constructions lead to the handshake lemma and its parity consequence. Vertex and edge cuts yield Whitney's inequalities, a bridge is defined as an edge whose deletion adds a component and characterised as an edge on no cycle, and longest-path and extremal edge arguments give cycle and connectivity criteria.

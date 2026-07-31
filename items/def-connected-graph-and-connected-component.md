---
id: def-connected-graph-and-connected-component
kind: definition
title: "Connected graphs and connected components defined by the existence of vertex paths"
status: published
origin: session
deps: [rem-finite-simple-graph-convention, def-subgraph-induced-subgraph-and-spanning-subgraph, def-graph-walk-trail-path-and-cycle, lem-every-graph-walk-contains-a-path-between-its-endpoints]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "University of Lethbridge, Combinatorics: A Guided Tour, Paths and Cycles"
      url: "https://opentext.uleth.ca/Combinatorics/sect_graphs-walks-PathsCycles.html"
pipeline_run: null
---

## Definition

Vertices $u$ and $v$ of a graph $G$ are **connected**, or **reachable from one
another**, when a path in $G$ has endpoints $u$ and $v$. Equivalently, a walk
joins them, because [[lem-every-graph-walk-contains-a-path-between-its-endpoints]]
turns such a walk into a path.

For $v\in V(G)$, its **connected component** is the induced subgraph on

$$C_G(v):=\{\,u\in V(G):u\text{ is reachable from }v\,\}.$$

A graph is **connected** when its vertex set is nonempty and every two vertices
are reachable from one another. Thus the null graph is not connected. The
one-vertex graph is connected, since its vertex is joined to itself by the path
of length $0$ from [[def-graph-walk-trail-path-and-cycle]].

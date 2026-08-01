---
id: def-hamilton-path-cycle-and-hamilton-connected
kind: definition
title: "Hamilton paths, Hamilton cycles, Hamiltonian graphs and Hamilton-connected graphs"
status: draft
origin: session
authorship: literature-derived
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-graph-walk-trail-path-and-cycle, def-finite-simple-graph, def-connected-graph-and-connected-component]
justified_by: []
aliases: []
landmark: false
proof_strategy: null
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Eulerian and Hamiltonian Graphs"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-Hamilton.html"
pipeline_run: null
---

## Definition

Let $G$ be a finite simple graph ([[def-finite-simple-graph]]). A **Hamilton
path** is a path that contains every vertex of $G$ exactly once. A **Hamilton
cycle** is a cycle that contains every vertex of $G$ exactly once before
returning to its initial vertex. A graph is **Hamiltonian** when it has a
Hamilton cycle.

A graph with at least two vertices is **Hamilton-connected** when, for every
two distinct vertices $u$ and $v$, it has a Hamilton path whose endpoints are
$u$ and $v$. Paths and cycles use the conventions of
[[def-graph-walk-trail-path-and-cycle]], so a Hamilton cycle has at least three
vertices. Every Hamiltonian graph is connected in the sense of
[[def-connected-graph-and-connected-component]].

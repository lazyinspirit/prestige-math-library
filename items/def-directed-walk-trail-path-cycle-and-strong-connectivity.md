---
id: def-directed-walk-trail-path-cycle-and-strong-connectivity
kind: definition
title: "Directed walks, trails, paths and cycles, and strong connectivity"
status: published
origin: session
authorship: literature-derived
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-multigraph-loop-and-digraph, def-multigraph-and-digraph-degrees-and-connectivity, def-graph-walk-trail-path-and-cycle]
justified_by: []
aliases: []
landmark: false
proof_strategy: null
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Directed Graphs"
      url: "https://opentext.uleth.ca/Combinatorics/sect_graphs-walks-Directed.html"
pipeline_run: null
---

## Definition

Let $D=(V,A)$ be a finite digraph ([[def-multigraph-loop-and-digraph]]). A
**directed walk of length $\ell$** is a vertex list
$v_0,v_1,\ldots,v_\ell$ such that $(v_{i-1},v_i)\in A$ for every
$1\le i\le\ell$. It is **closed** when $v_0=v_\ell$.

A **directed trail** is a directed walk whose traversed arcs are distinct. A
**directed path** is a directed walk whose vertices are distinct. A
**directed cycle** is a closed directed walk
$v_0,\ldots,v_{\ell-1},v_\ell=v_0$ of length $\ell\ge3$ in which
$v_0,\ldots,v_{\ell-1}$ are distinct. The lower bound agrees with the library's
undirected cycle convention in [[def-graph-walk-trail-path-and-cycle]].

A digraph is **strongly connected** when its vertex set is nonempty and for
every ordered pair $u,v$ of vertices there is a directed path from $u$ to $v$.
It is **weakly connected** as defined through its underlying graph in
[[def-multigraph-and-digraph-degrees-and-connectivity]].

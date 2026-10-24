---
id: def-multigraph-and-digraph-degrees-and-connectivity
kind: definition
title: "Degree in a multigraph, indegree and outdegree in a digraph, and their underlying connectivity"
status: published
origin: session
authorship: literature-derived
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-multigraph-loop-and-digraph, def-finite-cardinality, def-finite-simple-graph, def-connected-graph-and-connected-component]
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
    - title: "Applied Combinatorics, Euler Tours and Trails"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-ToursTrails.html"
    - title: "Applied Combinatorics, Directed Graphs"
      url: "https://opentext.uleth.ca/Combinatorics/sect_graphs-walks-Directed.html"
pipeline_run: null
---

## Definition

Let $M$ be a finite undirected multigraph ([[def-multigraph-loop-and-digraph]]).
The **degree** $\deg_M(v)$ of a vertex $v$ is the number of incident edge ends:
each nonloop edge incident with $v$ contributes one, and each loop at $v$
contributes two.

For a finite digraph $D=(V,A)$, the **outdegree** and **indegree** are

$$\deg_D^+(v)=|\{(v,w)\in A:w\in V\}|,\qquad\deg_D^-(v)=|\{(w,v)\in A:w\in V\}|.$$

A directed loop $(v,v)$ contributes one to each quantity. A digraph vertex is
**isolated** when both degrees are zero. A multigraph vertex is isolated when
its degree is zero.

The **underlying undirected graph** of a multigraph is obtained by deleting
loops and replacing each nonempty parallel class by one simple edge. The
underlying undirected graph of a digraph has an edge $\{u,v\}$ for distinct
$u,v$ whenever $(u,v)$ or $(v,u)$ is an arc. A multigraph or digraph is
**weakly connected** when this underlying graph is connected in the sense of
[[def-connected-graph-and-connected-component]]. Thus the null graph is not
weakly connected and a one-vertex underlying graph is connected.

These finite counts use [[def-finite-cardinality]], and the underlying objects
use the simple-graph convention of [[def-finite-simple-graph]].

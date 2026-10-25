---
id: def-graph-deletion-contraction-minor-and-subdivision
kind: definition
title: "Vertex and edge deletion, edge contraction, graph minors, subdivisions and topological minors"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-simple-graph, def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, Chapter 1 preview"
      url: "https://diestel-graph-theory.com/basic.html"
pipeline_run: null
---

## Definition

Let $G=(V,E)$ be a graph. For $v\in V$, **vertex deletion** gives
$G-v:=G[V\setminus\{v\}]$. For $e\in E$, **edge deletion** gives
$G-e:=(V,E\setminus\{e\})$. The same notation is used for deleting a set of
vertices or edges.

For an edge $e=\{u,v\}$, **contracting $e$** identifies $u$ and $v$. More
precisely, take a new vertex $x_e$, put
$V'=(V\setminus\{u,v\})\cup\{x_e\}$, and let $q:V\to V'$ send $u,v$ to $x_e$
and fix every other vertex. Then

$$G/e:=\bigl(V',\ \{\,q[f]:f\in E\setminus\{e\},\ |q[f]|=2\,\}\bigr).$$

The condition $|q[f]|=2$ deletes loops, while writing the edge family as a set
merges parallel edges. Thus contraction returns a simple graph.

A graph $H$ is a **minor** of $G$ when it can be obtained by vertex deletions,
edge deletions and edge contractions. **Subdividing** an edge $\{u,v\}$ replaces
it by $\{u,x\}$ and $\{x,v\}$ for a new vertex $x$. A **subdivision** repeats
this operation zero or more times. The graph $H$ is a **topological minor** of
$G$ when some subdivision of $H$ is isomorphic to a subgraph of $G$
([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

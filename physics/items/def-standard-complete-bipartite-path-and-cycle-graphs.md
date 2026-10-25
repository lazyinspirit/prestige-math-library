---
id: def-standard-complete-bipartite-path-and-cycle-graphs
kind: definition
title: "Empty and complete graphs, complete bipartite graphs, and the convention that $P_n$ and $C_n$ have $n$ vertices"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-simple-graph, rem-finite-simple-graph-convention, def-bipartite-graph, def-graph-walk-trail-path-and-cycle]
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

On a finite vertex set $V$, the **empty graph** has edge set $\varnothing$ and
the **complete graph** $K_V$ has edge set $[V]^2$. When $V$ is an $n$-element
labelled set, these are also denoted $\overline K_n$ and $K_n$.

For disjoint finite sets $A$ and $B$, the **complete bipartite graph** $K_{A,B}$
has vertex set $A\cup B$ and edge set

$$\{\,\{a,b\}:a\in A,\ b\in B\,\}.$$

If $|A|=m$ and $|B|=n$, it is denoted $K_{m,n}$.

The **path graph** $P_n$ has $n$ vertices. For $n\ge1$, take vertices
$0,\ldots,n-1$ and edges $\{i,i+1\}$ for $0\le i<n-1$; it has length $n-1$.
Set $P_0$ equal to the null graph. The **cycle graph** $C_n$ is defined only for
$n\ge3$: it has vertices $0,\ldots,n-1$, the consecutive edges
$\{i,i+1\}$ for $0\le i<n-1$, and the closing edge $\{n-1,0\}$. Thus in this
notation the subscript records the number of vertices, not the length of a path.

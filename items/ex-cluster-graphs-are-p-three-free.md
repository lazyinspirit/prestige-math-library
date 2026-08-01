---
id: ex-cluster-graphs-are-p-three-free
kind: example
title: "A graph is $P_3$-free if and only if every connected component is complete"
status: published
origin: session
deps: [def-h-free-and-family-free-graph, def-induced-embedding-and-induced-copy, cor-connected-components-partition-the-vertex-set, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: [cluster graph]
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISGCI, Information System on Graph Classes and their Inclusions"
      url: "https://www.cs.sfu.ca/~pavol/graphclasses/"
pipeline_run: null
---

## Statement

A finite graph is $P_3$-free if and only if each of its connected components is complete. Such graphs are called cluster graphs.

## Facts & Assumptions

**Given:** A finite graph $G$.

[F1] $P_3$-free means having no induced copy of the three-vertex path ([[def-h-free-and-family-free-graph]], [[def-induced-embedding-and-induced-copy]]).

[L1] Connected components partition the vertices and contain every path between their vertices ([[cor-connected-components-partition-the-vertex-set]]).

[F2] $P_3$ has two consecutive edges and no edge between its endpoints ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** direct.

1.1 If every component is complete, three vertices in one component induce all three edges, while vertices meeting more than one component induce edges only within their component parts and therefore at most one edge. Neither pattern is $P_3$, so $G$ is $P_3$-free. [L1, F1, F2]

1.2 Conversely, suppose a component contains nonadjacent vertices $x,y$. Choose a shortest $x$-$y$ path $x=v_0,v_1,\ldots,v_k=y$, where $k\ge2$. [choose, L1]

2.1 Minimality of the path gives $v_0v_2\notin E(G)$, so $G[\{v_0,v_1,v_2\}]\cong P_3$. [step 1.2, F2]

3.1 Therefore a $P_3$-free graph cannot have a noncomplete component. Combining both directions proves the equivalence. [step 1.1, step 2.1, F1] ∎

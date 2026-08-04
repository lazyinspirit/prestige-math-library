---
id: ex-cluster-graphs-are-p-three-free
kind: example
title: "A graph is $P_3$-free if and only if every connected component is complete"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
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
    - title: "ISGCI, Cluster graphs"
      url: "https://www.graphclasses.org/classes/gc_1237.html"
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

## Remarks

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=7mm,inner sep=1pt},
  edge/.style={draw=blue!70!black,line width=1.2pt},
  caption/.style={font=\small,align=center}
]
\node[vertex] (a) at (0,0) {};
\node[vertex] (b) at (1.15,1.3) {};
\node[vertex] (c) at (2.3,0) {};
\draw[edge] (a)--(b)--(c)--cycle;
\node[caption] at (1.15,-.65) {complete component $K_3$};

\node[vertex] (d) at (4.1,.65) {};
\node[vertex] (e) at (5.55,.65) {};
\draw[edge] (d)--(e);
\node[caption] at (4.825,-.65) {complete component $K_2$};

\node[caption] at (2.85,-1.25) {$K_3\mathbin{\dot\cup}K_2$ is a cluster graph and is $P_3$-free};
\end{tikzpicture}
```

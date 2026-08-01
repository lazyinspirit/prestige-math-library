---
id: cex-c6-and-two-triangles-share-a-degree-sequence
kind: counterexample
title: "$C_6$ and the disjoint union of two triangles have the same degree sequence but are not isomorphic"
status: published
origin: session
deps: [fs-degree-sequence-determines-a-simple-graph, def-standard-complete-bipartite-path-and-cycle-graphs, def-graph-isomorphism-and-complement, def-connected-graph-and-connected-component]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, Chapter 1 preview"
      url: "https://diestel-graph-theory.com/basic.html"
pipeline_run: null
---

## Statement refuted

The false statement [[fs-degree-sequence-determines-a-simple-graph]] claims that
a finite simple graph is determined up to isomorphism by its degree sequence.

## Facts & Assumptions

**Given:** $G=C_6$ and $H=C_3\mathbin{\dot\cup}C_3$, the disjoint union of two triangles.

[F1] $C_n$ is the cycle graph on $n$ vertices ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] Isomorphisms preserve adjacency and therefore preserve path-reachability and connectedness ([[def-graph-isomorphism-and-complement]], [[def-connected-graph-and-connected-component]]).

## Counterexample

**Proof technique:** direct.

1.1 Every vertex of $G$ lies on the six-cycle and has degree $2$. Every vertex of $H$ lies on one of its two triangles and has degree $2$. Thus both degree sequences are $(2,2,2,2,2,2)$. [given, F1]

1.2 The graph $G$ is connected, since either direction around the cycle gives a path between any two vertices. The graph $H$ is disconnected, since no edge joins its two triangles. [given, F1]

2.1 By [F2], connectedness is invariant under isomorphism, so $G\not\cong H$. They have the same degree sequence by step 1.1, which refutes the stated claim. [step 1.1, step 1.2, F2] ∎

## Remarks

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=6.5mm,inner sep=1pt},
  edge/.style={draw=blue!70!black,line width=1.2pt},
  caption/.style={font=\small,align=center}
]
% C_6.
\node[vertex] (g1) at (0,1.4) {};
\node[vertex] (g2) at (1.2,.7) {};
\node[vertex] (g3) at (1.2,-.7) {};
\node[vertex] (g4) at (0,-1.4) {};
\node[vertex] (g5) at (-1.2,-.7) {};
\node[vertex] (g6) at (-1.2,.7) {};
\draw[edge] (g1)--(g2)--(g3)--(g4)--(g5)--(g6)--cycle;
\node[caption] at (0,-2) {$G=C_6$\\one component};

% C_3 dot-union C_3.
\node[vertex] (h1) at (3.3,1) {};
\node[vertex] (h2) at (4.35,-.8) {};
\node[vertex] (h3) at (2.25,-.8) {};
\node[vertex] (j1) at (6.2,1) {};
\node[vertex] (j2) at (7.25,-.8) {};
\node[vertex] (j3) at (5.15,-.8) {};
\draw[edge] (h1)--(h2)--(h3)--cycle;
\draw[edge] (j1)--(j2)--(j3)--cycle;
\node[caption] at (4.75,-2) {$H=C_3\mathbin{\dot\cup}C_3$\\two components};
\node[font=\scriptsize] at (2.35,1.85) {every displayed vertex has degree $2$};
\end{tikzpicture}
```

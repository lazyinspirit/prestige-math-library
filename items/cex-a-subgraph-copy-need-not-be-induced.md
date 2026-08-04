---
id: cex-a-subgraph-copy-need-not-be-induced
kind: counterexample
title: "$K_3$ contains $P_3$ as a subgraph but not as an induced subgraph"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-induced-embedding-and-induced-copy, def-subgraph-induced-subgraph-and-spanning-subgraph, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf"
pipeline_run: null
---

## Statement refuted

Every ordinary subgraph copy of $H$ in $G$ is an induced copy.

## Facts & Assumptions

**Given:** The graphs $P_3$ and $K_3$.

[F1] Deleting one edge from $K_3$ leaves a spanning subgraph isomorphic to $P_3$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] An induced embedding must preserve both adjacency and nonadjacency ([[def-induced-embedding-and-induced-copy]]).

## Counterexample

**Proof technique:** direct.

1.1 By deleting one triangle edge, $K_3$ contains an ordinary subgraph copy of $P_3$. [F1]

1.2 Any injection from the three vertices of $P_3$ to the three vertices of $K_3$ is bijective, but the two endpoints of $P_3$ are nonadjacent while their images in $K_3$ are adjacent. [F2]

2.1 Thus $K_3$ contains no induced $P_3$, despite containing an ordinary subgraph copy. [step 1.1, step 1.2] ∎

## Remarks

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=7mm,inner sep=1pt,font=\small},
  edge/.style={draw=blue!70!black,line width=1.2pt},
  caption/.style={font=\small,align=center}
]
\node[vertex] (k0) at (0,0) {$0$};
\node[vertex] (k1) at (1.2,1.35) {$1$};
\node[vertex] (k2) at (2.4,0) {$2$};
\draw[edge] (k0)--(k1)--(k2)--cycle;
\node[caption] at (1.2,-.65) {$K_3$};

\draw[->,line width=.9pt] (2.9,.68)--node[above,font=\scriptsize] {delete $02$} (4.25,.68);

\node[vertex] (p0) at (4.75,0) {$0$};
\node[vertex] (p1) at (5.95,1.35) {$1$};
\node[vertex] (p2) at (7.15,0) {$2$};
\draw[edge] (p0)--(p1)--(p2);
\draw[gray!65,dashed,line width=.8pt] (p0)--node[below,font=\scriptsize] {deleted} (p2);
\node[caption] at (5.95,-.65) {an ordinary $P_3$ subgraph\\not induced};
\end{tikzpicture}
```

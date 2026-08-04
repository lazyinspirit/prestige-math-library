---
id: cex-regular-graphs-are-not-hereditary
kind: counterexample
title: "The class of regular graphs is not hereditary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-hereditary-graph-class, def-graph-adjacency-incidence-neighbourhood-and-degree, def-subgraph-induced-subgraph-and-spanning-subgraph, def-standard-complete-bipartite-path-and-cycle-graphs]
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
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
pipeline_run: null
---

## Statement refuted

The class of finite regular graphs is hereditary.

## Facts & Assumptions

**Given:** The cycle $C_4=v_0v_1v_2v_3v_0$.

[F1] Every vertex of $C_4$ has degree two, so $C_4$ is regular ([[def-graph-adjacency-incidence-neighbourhood-and-degree]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] The induced subgraph on $\{v_0,v_1,v_2\}$ is $P_3$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[F3] A hereditary class is closed under induced subgraphs ([[def-hereditary-graph-class]]).

## Counterexample

**Proof technique:** direct.

1.1 The graph $C_4$ is regular. [F1]

1.2 Its displayed induced $P_3$ has degrees $1,2,1$, so it is not regular. [F2]

2.1 Thus regular graphs are not closed under induced subgraphs and do not form a hereditary class. [step 1.1, step 1.2, F3] ∎

## Remarks

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=8mm,inner sep=1pt,font=\small},
  chosen/.style={vertex,fill=blue!15},
  edge/.style={draw=blue!70!black,line width=1.2pt},
  caption/.style={font=\small,align=center}
]
\node[chosen] (v0) at (0,0) {$v_0$};
\node[chosen] (v1) at (0,1.5) {$v_1$};
\node[chosen] (v2) at (1.5,1.5) {$v_2$};
\node[vertex] (v3) at (1.5,0) {$v_3$};
\draw[edge] (v0)--(v1)--(v2)--(v3)--cycle;
\node[caption] at (.75,-.65) {$C_4$: every degree is $2$};

\draw[->,line width=.9pt] (2.1,.75)--node[above,font=\scriptsize] {$G[\{v_0,v_1,v_2\}]$} (4.05,.75);

\node[chosen] (w0) at (4.55,0) {$v_0$};
\node[chosen] (w1) at (5.75,1.5) {$v_1$};
\node[chosen] (w2) at (6.95,0) {$v_2$};
\draw[edge] (w0)--(w1)--(w2);
\node[caption] at (5.75,-.65) {$P_3$: degrees $1,2,1$};
\end{tikzpicture}
```

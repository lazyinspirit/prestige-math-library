---
id: fs-every-hereditary-class-has-a-finite-forbidden-basis
kind: false-statement
title: "Every hereditary graph class has a finite forbidden induced-subgraph basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-hereditary-classes-have-a-unique-minimal-forbidden-basis, def-bipartite-graph, thm-bipartite-iff-no-odd-cycle, def-standard-complete-bipartite-path-and-cycle-graphs, def-minimal-forbidden-induced-subgraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf"
pipeline_run: null
---

## False Statement

Every hereditary graph class has a finite minimal forbidden induced-subgraph basis.

## Facts & Assumptions

**Given:** The hereditary class $\mathcal B$ of finite bipartite graphs.

[L1] A graph is bipartite if and only if it contains no odd cycle ([[def-bipartite-graph]], [[thm-bipartite-iff-no-odd-cycle]]).

[F1] For every $k\ge1$, $C_{2k+1}$ is an odd cycle, and distinct lengths give nonisomorphic graphs ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A minimal forbidden induced subgraph is outside the class while all proper induced subgraphs are inside ([[def-minimal-forbidden-induced-subgraph]]).

[L2] The family of all such minimal graphs is the unique minimal basis ([[thm-hereditary-classes-have-a-unique-minimal-forbidden-basis]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the minimal forbidden basis of $\mathcal B$ is finite. [assume-contra]

1.2 For every $k\ge1$, the graph $C_{2k+1}$ is not bipartite. Every proper induced subgraph of this chordless cycle is a disjoint union of paths, hence is bipartite. Thus $C_{2k+1}$ is minimally forbidden. [L1, F1, F2]

2.1 The minimal basis therefore contains the pairwise nonisomorphic graphs $C_3,C_5,C_7,\ldots$. [step 1.2, L2]

3.1 This is an infinite family, contradicting step 1.1. Hence a hereditary class need not have a finite minimal forbidden basis. [step 1.1, step 2.1, discharge-contradiction] ∎

## Remarks

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=5.5mm,inner sep=0pt},
  edge/.style={draw=blue!70!black,line width=1.1pt},
  caption/.style={font=\small,align=center}
]
% C_3.
\node[vertex] (a1) at (0,1.25) {};
\node[vertex] (a2) at (-.95,-.4) {};
\node[vertex] (a3) at (.95,-.4) {};
\draw[edge] (a1)--(a2)--(a3)--cycle;
\node[caption] at (0,-1.05) {$C_3$};

% C_5.
\node[vertex] (b1) at (3.2,1.3) {};
\node[vertex] (b2) at (4.35,.35) {};
\node[vertex] (b3) at (3.9,-1.0) {};
\node[vertex] (b4) at (2.5,-1.0) {};
\node[vertex] (b5) at (2.05,.35) {};
\draw[edge] (b1)--(b2)--(b3)--(b4)--(b5)--cycle;
\node[caption] at (3.2,-1.55) {$C_5$};

% C_7.
\node[vertex] (c1) at (6.7,1.35) {};
\node[vertex] (c2) at (7.8,.85) {};
\node[vertex] (c3) at (8.05,-.35) {};
\node[vertex] (c4) at (7.3,-1.3) {};
\node[vertex] (c5) at (6.1,-1.3) {};
\node[vertex] (c6) at (5.35,-.35) {};
\node[vertex] (c7) at (5.6,.85) {};
\draw[edge] (c1)--(c2)--(c3)--(c4)--(c5)--(c6)--(c7)--cycle;
\node[caption] at (6.7,-1.85) {$C_7$};

\node[font=\Large] at (9.2,0) {$\cdots$};
\node[caption] at (4.6,-2.45) {$C_3,C_5,C_7,\ldots$ are the pairwise nonisomorphic minimal forbidden graphs};
\end{tikzpicture}
```

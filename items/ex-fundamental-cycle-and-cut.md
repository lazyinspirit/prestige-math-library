---
id: ex-fundamental-cycle-and-cut
kind: example
title: "A fundamental cycle and a fundamental cut in a fixed spanning tree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-fundamental-cycle-of-a-spanning-tree, lem-fundamental-cut-of-a-spanning-tree, def-spanning-tree]
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

## Statement

Let $G$ have vertices $\{1,2,3,4\}$ and edges $\{12,23,34,14,13\}$. For the spanning tree $T$ with edges $\{12,23,34\}$, the edge $14$ has fundamental cycle $1,2,3,4,1$. The edge $23$ has fundamental cut $\{23,13,14\}$.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,line width=0.7pt,every node/.style={font=\small}]
  \tikzset{vertex/.style={circle,draw,fill=white,inner sep=1.4pt,minimum size=5mm}}
  \begin{scope}[shift={(0,0)}]
    \node[vertex] (a1) at (-1,1) {$1$}; \node[vertex] (a2) at (1,1) {$2$};
    \node[vertex] (a3) at (1,-1) {$3$}; \node[vertex] (a4) at (-1,-1) {$4$};
    \draw[gray] (a1)--(a3);
    \draw[blue,very thick] (a1)--(a2)--(a3)--(a4);
    \draw[red,very thick] (a4)--node[left] {\scriptsize outside edge 14} (a1);
    \node[blue] at (0,-1.65) {cycle: 1-2-3-4-1};
  \end{scope}
  \begin{scope}[shift={(5,0)}]
    \node[vertex] (b1) at (-1,1) {$1$}; \node[vertex] (b2) at (1,1) {$2$};
    \node[vertex] (b3) at (1,-1) {$3$}; \node[vertex] (b4) at (-1,-1) {$4$};
    \draw (b1)--(b2) (b3)--(b4);
    \draw[red,very thick] (b2)--node[right] {\scriptsize tree edge 23} (b3);
    \draw[red,very thick] (b1)--(b3) (b1)--(b4);
    \draw[red,dashed] (-1.55,0)--(1.55,0);
    \node at (0,1.45) {\scriptsize side 1, 2};
    \node at (0,-1.45) {\scriptsize side 3, 4};
    \node[red] at (0,-1.95) {cut edges: 23, 13, 14};
  \end{scope}
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The graph $G$ and spanning subgraph $T$ above.

[L1] An outside edge and its unique tree path form the fundamental cycle ([[lem-fundamental-cycle-of-a-spanning-tree]]).

[L2] Deleting a tree edge partitions the tree into two sides, whose crossing edges form the fundamental cut ([[lem-fundamental-cut-of-a-spanning-tree]]).

[F1] A connected acyclic spanning subgraph is a spanning tree ([[def-spanning-tree]]).

## Verification

**Proof technique:** direct computation.

1.1 The graph $T$ is the path $1,2,3,4$, so it is a spanning tree. Its unique $1$-$4$ path together with $14$ is the stated $4$-cycle. [L1, F1]

1.2 Deleting $23$ leaves vertex sides $\{1,2\}$ and $\{3,4\}$. Exactly $23,13,14$ cross between them in $G$. [L2]

2.1 Hence the displayed cycle and cut are the required fundamental objects. [step 1.1, step 1.2] ∎

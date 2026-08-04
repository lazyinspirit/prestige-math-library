---
id: ex-spanning-trees-of-a-cycle
kind: example
title: "$\\tau(C_n)=n$ for every $n\\ge3$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-number-of-spanning-trees, def-spanning-tree, thm-tree-characterisations, def-standard-complete-bipartite-path-and-cycle-graphs]
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

For every $n\ge3$, the cycle graph $C_n$ has exactly $n$ spanning trees.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,line width=0.7pt,every node/.style={font=\small}]
  \tikzset{vertex/.style={circle,draw,fill=white,inner sep=1.3pt,minimum size=4.5mm}}
  \node[vertex] (v0) at (90:1.55) {$0$};
  \node[vertex] (v1) at (18:1.55) {$1$};
  \node[vertex] (v2) at (-54:1.55) {$2$};
  \node[vertex] (v3) at (-126:1.55) {$3$};
  \node[vertex] (v4) at (162:1.55) {$4$};
  \draw[blue,very thick] (v0)--(v1)--(v2)--(v3)--(v4);
  \draw[red,dashed,very thick] (v4)--node[above] {\scriptsize deleted $e$} (v0);
  \node[blue] at (0,-2.05) {$P_5$ after deleting $e$ from $C_5$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** $n\ge3$ and the cycle graph $C_n$.

[F1] $C_n$ has $n$ edges and deleting an arbitrary edge gives the path $P_n$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L1] A spanning tree on $n$ vertices has $n-1$ edges ([[thm-tree-characterisations]]).

[F2] $\tau$ counts spanning trees ([[def-number-of-spanning-trees]], [[def-spanning-tree]]).

## Verification

**Proof technique:** direct.

1.1 Deleting any one edge of $C_n$ gives a connected acyclic spanning graph, hence a spanning tree. The $n$ choices yield distinct trees. [F1, F2]

1.2 Conversely, every spanning tree uses $n-1$ of the $n$ cycle edges, so it is obtained by deleting exactly one edge. [L1, F1]

2.1 Therefore $\tau(C_n)=n$. [step 1.1, step 1.2, F2] ∎

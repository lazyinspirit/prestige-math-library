---
id: def-tree-forest-and-leaf
kind: definition
title: "Trees, forests, leaves and isolated vertices"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-graph-walk-trail-path-and-cycle, def-connected-graph-and-connected-component, def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf"
pipeline_run: null
---

## Definition

All graphs here are finite, simple and undirected ([[def-finite-simple-graph]]). A **forest** is a graph containing no cycle, and a **tree** is a connected forest ([[def-graph-walk-trail-path-and-cycle]], [[def-connected-graph-and-connected-component]]).

A vertex of degree one is a **leaf**. A vertex of degree zero is **isolated** ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]). Thus the one-vertex tree has an isolated vertex and no leaf under this convention. A **nontrivial tree** means a tree with at least two vertices.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,line width=0.7pt,every node/.style={font=\small}]
  \tikzset{vertex/.style={circle,draw,inner sep=1.4pt,minimum size=4.5mm}}
  \node[vertex] (a) at (-2,0) {};
  \node[vertex] (b) at (-1,0) {};
  \node[vertex,fill=blue!18] (l) at (0,0) {$v$};
  \node[vertex] (c) at (-1,0.85) {};
  \draw (a)--(b)--(l) (b)--(c);
  \node[blue] at (0,0.65) {\scriptsize leaf};
  \node at (-1,-0.65) {$T_1$};

  \node[vertex] (d) at (2,0) {};
  \node[vertex] (e) at (3,0) {};
  \draw (d)--(e);
  \node at (2.5,-0.65) {$T_2$};

  \node[vertex] (i) at (5,0) {};
  \node at (5,-0.65) {\scriptsize isolated};
  \node at (1.5,1.35) {forest $F$: components $T_1$, $T_2$, $K_1$};
\end{tikzpicture}
```

## Remarks

- The null graph is a forest but not a tree, because it is not connected under the library convention.
- Every connected component of a nonnull forest is a tree.

---
id: def-rooted-tree
kind: definition
title: "Rooted trees, ancestors, descendants, depth, height, parents and children"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-tree-forest-and-leaf, thm-tree-characterisations, def-graph-distance-and-girth]
justified_by: []
aliases: []
landmark: false
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

A **rooted tree** is a pair $(T,r)$ consisting of a tree $T$ and a distinguished vertex $r$, the **root** ([[def-tree-forest-and-leaf]]). The unique $r$-$v$ path is the **root path** of $v$ ([[thm-tree-characterisations]]).

The **depth** of $v$ is $d_T(r,v)$, and the **height** of $(T,r)$ is the maximum vertex depth ([[def-graph-distance-and-girth]]). A vertex $u$ is an **ancestor** of $v$, and $v$ a **descendant** of $u$, when $u$ lies on the root path of $v$. If $v\ne r$, the neighbour of $v$ immediately preceding it on its root path is its **parent**; the vertices having parent $v$ are the **children** of $v$.

The vertices of depth $k$ form **level $k$**. The root has depth zero and is its own ancestor, but it has no parent.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,line width=0.7pt,every node/.style={font=\small}]
  \tikzset{vertex/.style={circle,draw,fill=white,inner sep=1.4pt,minimum size=5mm}}
  \draw[dashed,gray] (-2.7,2.4)--(2.7,2.4);
  \draw[dashed,gray] (-2.7,1.2)--(2.7,1.2);
  \draw[dashed,gray] (-2.7,0)--(2.7,0);
  \node[anchor=west] at (2.8,2.4) {\scriptsize level $0$};
  \node[anchor=west] at (2.8,1.2) {\scriptsize level $1$};
  \node[anchor=west] at (2.8,0) {\scriptsize level $2$};

  \node[vertex,fill=blue!18,very thick] (r) at (0,2.4) {$r$};
  \node[vertex] (u) at (-1.2,1.2) {$u$};
  \node[vertex] (w) at (1.2,1.2) {$w$};
  \node[vertex] (v) at (-1.8,0) {$v$};
  \node[vertex] (x) at (-0.6,0) {$x$};
  \node[vertex] (y) at (1.2,0) {$y$};
  \draw (r)--(u) (r)--(w) (u)--(v) (u)--(x) (w)--(y);
  \node[blue] at (0.75,2.75) {\scriptsize root};
  \node at (-2.25,0.65) {\scriptsize $u$ is parent of $v$};
\end{tikzpicture}
```

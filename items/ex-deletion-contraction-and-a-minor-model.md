---
id: ex-deletion-contraction-and-a-minor-model
kind: example
title: "A worked graph records vertex deletion, edge deletion, edge contraction and the resulting minor model"
status: published
origin: session
deps: [def-graph-deletion-contraction-minor-and-subdivision, def-subgraph-induced-subgraph-and-spanning-subgraph]
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

## Example

Let $G$ have vertices $1,2,3,4$ and edges $12,23,34,41,13$. Then:

- $G-4$ is the triangle on $1,2,3$;
- $G-13$ is the cycle $C_4$;
- contracting $12$ produces the triangle on the new vertex $x$ and vertices
  $3,4$, so this triangle is a minor of $G$.

The contraction deletes the loop arising from $12$ and merges the two copies of
$x3$ arising from $13$ and $23$.

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=7mm,inner sep=1pt,font=\scriptsize},
  merged/.style={vertex,draw=blue!75!black,fill=blue!12,line width=1.3pt},
  edge/.style={draw=gray!75,line width=1pt},
  caption/.style={font=\small}
]
% Original graph G.
\begin{scope}[shift={(0,2.8)}]
  \node[vertex] (g1) at (0,1) {$1$};
  \node[vertex] (g2) at (1.5,1) {$2$};
  \node[vertex] (g3) at (1.5,-.5) {$3$};
  \node[vertex] (g4) at (0,-.5) {$4$};
  \draw[edge] (g1)--(g2)--(g3)--(g4)--cycle (g1)--(g3);
  \node[caption] at (.75,-1.15) {$G$};
\end{scope}
% Vertex deletion.
\begin{scope}[shift={(4.3,2.8)}]
  \node[vertex] (v1) at (0,1) {$1$};
  \node[vertex] (v2) at (1.5,1) {$2$};
  \node[vertex] (v3) at (1.5,-.5) {$3$};
  \draw[edge] (v1)--(v2)--(v3)--cycle;
  \node[caption] at (.75,-1.15) {$G-4$};
\end{scope}
% Edge deletion.
\begin{scope}
  \node[vertex] (e1) at (0,1) {$1$};
  \node[vertex] (e2) at (1.5,1) {$2$};
  \node[vertex] (e3) at (1.5,-.5) {$3$};
  \node[vertex] (e4) at (0,-.5) {$4$};
  \draw[edge] (e1)--(e2)--(e3)--(e4)--cycle;
  \node[caption] at (.75,-1.15) {$G-13=C_4$};
\end{scope}
% Edge contraction.
\begin{scope}[shift={(4.3,0)}]
  \node[merged] (x) at (0,1) {$x$};
  \node[vertex] (c3) at (1.5,-.5) {$3$};
  \node[vertex] (c4) at (-1.5,-.5) {$4$};
  \draw[edge] (x)--(c3)--(c4)--cycle;
  \node[caption] at (0,-1.15) {$G/12$: a triangle minor};
\end{scope}
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The graph $G$ displayed in the Example.

[F1] Vertex deletion takes the induced subgraph on the remaining vertices, edge deletion removes the named edge, and contraction deletes loops and merges parallel images ([[def-graph-deletion-contraction-minor-and-subdivision]], [[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

## Verification

**Proof technique:** direct.

1.1 Deleting vertex $4$ retains exactly $12,23,13$, the three edges of a triangle on $1,2,3$. Deleting edge $13$ retains exactly $12,23,34,41$, the four-cycle. [given, F1]

1.2 Under contraction of $12$ to $x$, the edge $12$ becomes a loop and is deleted; $13$ and $23$ both become $x3$ and merge; $41$ becomes $4x$; and $34$ remains $34$. The resulting simple edge set is $\{x3,34,4x\}$, a triangle. [given, F1]

2.1 Since this triangle is obtained from $G$ by an allowed edge contraction, it is a minor of $G$. [step 1.2, F1] ∎

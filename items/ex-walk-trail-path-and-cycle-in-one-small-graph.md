---
id: ex-walk-trail-path-and-cycle-in-one-small-graph
kind: example
title: "A small graph separates walks, trails, paths, closed walks and cycles by explicit vertex lists"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-graph-walk-trail-path-and-cycle, def-finite-simple-graph]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "University of Lethbridge, Combinatorics: A Guided Tour, Paths and Cycles"
      url: "https://opentext.uleth.ca/Combinatorics/sect_graphs-walks-PathsCycles.html"
pipeline_run: null
---

## Example

Let $G$ have vertex set $\{0,1,2,3\}$ and edge set
$\{01,12,20,23\}$, where $ij$ abbreviates $\{i,j\}$. The following lists
separate the standard notions:

- $(0,1,2,1)$ is a walk but not a trail;
- $(3,2,0,1,2)$ is a trail but not a path;
- $(3,2,1,0)$ is a path;
- $(0,1,0)$ is a closed walk but not a cycle;
- $(0,1,2,0)$ is a cycle.

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=7mm,inner sep=1pt,font=\small},
  base/.style={draw=gray!55,line width=.8pt},
  walk/.style={draw=red!75!black,line width=1.5pt},
  trail/.style={draw=orange!85!black,line width=1.5pt},
  path/.style={draw=blue!75!black,line width=1.5pt},
  cycle/.style={draw=green!55!black,line width=1.5pt},
  caption/.style={font=\scriptsize,align=center}
]
% Walk but not a trail: 12 is traversed twice.
\begin{scope}[shift={(0,2.5)}]
  \node[vertex] (w0) at (0,0) {$0$};
  \node[vertex] (w1) at (1.25,1) {$1$};
  \node[vertex] (w2) at (2.5,0) {$2$};
  \node[vertex] (w3) at (3.75,0) {$3$};
  \draw[base] (w0)--(w2) (w2)--(w3);
  \draw[walk] (w0)--(w1);
  \draw[walk,bend left=10,->] (w1) to node[above right,font=\scriptsize] {$2$} (w2);
  \draw[walk,bend left=10,->] (w2) to node[below left,font=\scriptsize] {$3$} (w1);
  \node[caption] at (1.9,-.65) {walk $(0,1,2,1)$\\edge $12$ twice};
\end{scope}
% Trail but not a path: vertex 2 is visited twice.
\begin{scope}[shift={(5.4,2.5)}]
  \node[vertex] (t0) at (0,0) {$0$};
  \node[vertex] (t1) at (1.25,1) {$1$};
  \node[vertex,draw=orange!85!black,line width=1.2pt] (t2) at (2.5,0) {$2$};
  \node[vertex] (t3) at (3.75,0) {$3$};
  \draw[trail] (t3)--(t2)--(t0)--(t1)--(t2);
  \node[caption] at (1.9,-.65) {trail $(3,2,0,1,2)$\\vertex $2$ twice};
\end{scope}
% A path.
\begin{scope}
  \node[vertex] (p0) at (0,0) {$0$};
  \node[vertex] (p1) at (1.25,1) {$1$};
  \node[vertex] (p2) at (2.5,0) {$2$};
  \node[vertex] (p3) at (3.75,0) {$3$};
  \draw[base] (p0)--(p2);
  \draw[path] (p3)--(p2)--(p1)--(p0);
  \node[caption] at (1.9,-.65) {path $(3,2,1,0)$};
\end{scope}
% A cycle.
\begin{scope}[shift={(5.4,0)}]
  \node[vertex] (c0) at (0,0) {$0$};
  \node[vertex] (c1) at (1.25,1) {$1$};
  \node[vertex] (c2) at (2.5,0) {$2$};
  \node[vertex] (c3) at (3.75,0) {$3$};
  \draw[base] (c2)--(c3);
  \draw[cycle] (c0)--(c1)--(c2)--cycle;
  \node[caption] at (1.9,-.65) {cycle $(0,1,2,0)$};
\end{scope}
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The graph $G$ and the vertex lists displayed above.

[F1] Walks require adjacent successive vertices; trails do not repeat edges; paths do not repeat vertices; cycles repeat only their first vertex at the end and have length at least $3$ ([[def-graph-walk-trail-path-and-cycle]]).

[F2] The displayed edge set is a subset of the two-element subsets of the finite vertex set, so $G$ is a finite simple graph ([[def-finite-simple-graph]]).

## Verification

**Proof technique:** direct.

1.1 Every successive pair in every displayed list is one of $01,12,20,23$, so every list is a walk in $G$. [given, F1, F2]

2.1 The list $(0,1,2,1)$ traverses $12$ twice, so it is not a trail. The list $(3,2,0,1,2)$ traverses the distinct edges $23,20,01,12$ but repeats vertex $2$, so it is a trail and not a path. [step 1.1, F1]

2.2 The list $(3,2,1,0)$ has four distinct vertices, so it is a path. The list $(0,1,0)$ is closed but repeats the edge $01$ and has length $2$, so it is not a cycle. [step 1.1, F1]

3.1 The list $(0,1,2,0)$ is closed, has length $3$, and has distinct vertices before returning to $0$, so it is a cycle. [step 1.1, F1] ∎

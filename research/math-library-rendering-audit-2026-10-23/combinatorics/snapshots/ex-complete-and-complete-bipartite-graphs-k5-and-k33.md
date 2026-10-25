---
id: ex-complete-and-complete-bipartite-graphs-k5-and-k33
kind: example
title: "$K_5$ and $K_{3,3}$ illustrate complete and complete bipartite graphs, degrees and edge counts"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-standard-complete-bipartite-path-and-cycle-graphs, thm-handshake-lemma-for-finite-simple-graphs, cor-complete-graph-edge-count]
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

The complete graph $K_5$ has degree $4$ at every vertex and has $10$ edges. The
complete bipartite graph $K_{3,3}$ has degree $3$ at every vertex and has $9$
edges.

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=7mm,inner sep=1pt,font=\scriptsize},
  edge/.style={draw=gray!75,line width=.8pt},
  leftpart/.style={vertex,draw=blue!75!black,fill=blue!10},
  rightpart/.style={vertex,draw=orange!85!black,fill=orange!12},
  caption/.style={font=\small,align=center}
]
% K_5.
\node[vertex] (k1) at (0,1.6) {$1$};
\node[vertex] (k2) at (1.55,.5) {$2$};
\node[vertex] (k3) at (.95,-1.3) {$3$};
\node[vertex] (k4) at (-.95,-1.3) {$4$};
\node[vertex] (k5) at (-1.55,.5) {$5$};
\draw[edge] (k1)--(k2)--(k3)--(k4)--(k5)--cycle;
\draw[edge] (k1)--(k3) (k1)--(k4) (k2)--(k4) (k2)--(k5) (k3)--(k5);
\node[caption] at (0,-2) {$K_5$: degree $4$, $10$ edges};

% K_{3,3}.
\node[leftpart] (u1) at (4.1,1.35) {$u_1$};
\node[leftpart] (u2) at (4.1,0) {$u_2$};
\node[leftpart] (u3) at (4.1,-1.35) {$u_3$};
\node[rightpart] (v1) at (7.1,1.35) {$v_1$};
\node[rightpart] (v2) at (7.1,0) {$v_2$};
\node[rightpart] (v3) at (7.1,-1.35) {$v_3$};
\draw[edge] (u1)--(v1) (u1)--(v2) (u1)--(v3)
            (u2)--(v1) (u2)--(v2) (u2)--(v3)
            (u3)--(v1) (u3)--(v2) (u3)--(v3);
\node[caption] at (5.6,-2) {$K_{3,3}$: degree $3$, $9$ edges};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The standard graphs $K_5$ and $K_{3,3}$.

[F1] $K_5$ contains every pair of its five vertices as an edge, while $K_{3,3}$ has two three-element parts and every edge between the parts ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L1] $K_5$ has $\binom52$ edges ([[cor-complete-graph-edge-count]]).

[L2] The sum of degrees is twice the number of edges ([[thm-handshake-lemma-for-finite-simple-graphs]]).

## Verification

**Proof technique:** direct.

1.1 Each vertex of $K_5$ is adjacent to the other four vertices, so its degree is $4$; [L1] gives $|E(K_5)|=\binom52=10$. [F1, L1, algebra]

1.2 Each vertex of $K_{3,3}$ is adjacent to all three vertices in the opposite part and none in its own part, so all six vertices have degree $3$. [F1]

2.1 By [L2], $2|E(K_{3,3})|=6\cdot3=18$, hence $|E(K_{3,3})|=9$. [step 1.2, L2, algebra] ∎

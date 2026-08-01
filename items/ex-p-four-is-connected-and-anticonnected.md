---
id: ex-p-four-is-connected-and-anticonnected
kind: example
title: "$P_4$ is both connected and anticonnected"
status: published
origin: session
deps: [def-anticonnected-graph-and-anticonnected-component, def-connected-graph-and-connected-component, def-standard-complete-bipartite-path-and-cycle-graphs, def-graph-isomorphism-and-complement]
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
    - title: "Maria Chudnovsky, The structure of bull-free graphs"
      url: "https://web.math.princeton.edu/~mchudnov/bullsurvey.pdf"
pipeline_run: null
---

## Statement

The path $P_4$ is connected and anticonnected. Indeed, $\overline{P_4}\cong P_4$.

## Facts & Assumptions

**Given:** $P_4$ with vertices $1,2,3,4$ and edges $12,23,34$.

[F1] A path is connected ([[def-connected-graph-and-connected-component]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A graph is anticonnected when its complement is connected ([[def-anticonnected-graph-and-anticonnected-component]]).

[F3] Complement edges are precisely the nonedges between distinct vertices ([[def-graph-isomorphism-and-complement]]).

## Verification

**Proof technique:** direct.

1.1 The graph $P_4$ is connected. [F1]

1.2 Its complement has edges $13,14,24$, which form the path $3,1,4,2$. Thus $\overline{P_4}\cong P_4$ and is connected. [F3]

2.1 Therefore $P_4$ is anticonnected as well as connected. [step 1.1, step 1.2, F2] ∎

## Remarks

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=7mm,inner sep=1pt,font=\small},
  edge/.style={draw=blue!70!black,line width=1.2pt},
  caption/.style={font=\small,align=center}
]
\node[vertex] (a1) at (0,0) {$1$};
\node[vertex] (a2) at (1.25,0) {$2$};
\node[vertex] (a3) at (2.5,0) {$3$};
\node[vertex] (a4) at (3.75,0) {$4$};
\draw[edge] (a1)--(a2)--(a3)--(a4);
\node[caption] at (1.875,-.7) {$P_4$: edges $12,23,34$};

\draw[<->,line width=.9pt] (4.2,0)--node[above,font=\scriptsize] {complement} (5.7,0);

\node[vertex] (b3) at (6.15,0) {$3$};
\node[vertex] (b1) at (7.4,0) {$1$};
\node[vertex] (b4) at (8.65,0) {$4$};
\node[vertex] (b2) at (9.9,0) {$2$};
\draw[edge] (b3)--(b1)--(b4)--(b2);
\node[caption] at (8.025,-.7) {$\overline{P_4}$: edges $13,14,24$};
\end{tikzpicture}
```

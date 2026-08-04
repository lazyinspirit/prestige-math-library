---
id: ex-pure-and-mixed-pairs-in-p-four
kind: example
title: "Complete, anticomplete and mixed vertex-set pairs in $P_4$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-edges-between-sets-and-pure-mixed-pairs, def-standard-complete-bipartite-path-and-cycle-graphs]
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
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
pipeline_run: null
---

## Statement

In the path $P_4=1,2,3,4$:

- $(\{2\},\{1,3\})$ is complete;
- $(\{1\},\{3,4\})$ is anticomplete; and
- $(\{2\},\{3,4\})$ is mixed.

## Facts & Assumptions

**Given:** $P_4$ with edge set $\{12,23,34\}$.

[F1] Complete means all cross pairs are edges, anticomplete means none are edges, and mixed means some but not all are edges ([[def-edges-between-sets-and-pure-mixed-pairs]]).

[F2] The only edges of the path are consecutive pairs ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** direct.

1.1 Both $21$ and $23$ are edges, so $(\{2\},\{1,3\})$ is complete. [F1, F2]

1.2 Neither $13$ nor $14$ is an edge, so $(\{1\},\{3,4\})$ is anticomplete. [F1, F2]

1.3 The pair $23$ is an edge but $24$ is not, so $(\{2\},\{3,4\})$ is mixed. [F1, F2]

2.1 These verify the three claimed pair types. [step 1.1, step 1.2, step 1.3] ∎

## Remarks

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=6.5mm,inner sep=1pt,font=\scriptsize},
  aset/.style={vertex,fill=blue!15},
  bset/.style={vertex,fill=orange!20},
  edge/.style={draw=gray!75!black,line width=1pt},
  caption/.style={font=\scriptsize,align=center}
]
% Complete pair.
\node[bset] (c1) at (0,0) {$1$};
\node[aset] (c2) at (1,0) {$2$};
\node[bset] (c3) at (2,0) {$3$};
\node[vertex] (c4) at (3,0) {$4$};
\draw[edge] (c1)--(c2)--(c3)--(c4);
\node[caption] at (1.5,-.65) {$A=\{2\}$, $B=\{1,3\}$\\complete};

% Anticomplete pair.
\node[aset] (a1) at (4.25,0) {$1$};
\node[vertex] (a2) at (5.25,0) {$2$};
\node[bset] (a3) at (6.25,0) {$3$};
\node[bset] (a4) at (7.25,0) {$4$};
\draw[edge] (a1)--(a2)--(a3)--(a4);
\node[caption] at (5.75,-.65) {$A=\{1\}$, $B=\{3,4\}$\\anticomplete};

% Mixed pair.
\node[vertex] (m1) at (8.5,0) {$1$};
\node[aset] (m2) at (9.5,0) {$2$};
\node[bset] (m3) at (10.5,0) {$3$};
\node[bset] (m4) at (11.5,0) {$4$};
\draw[edge] (m1)--(m2)--(m3)--(m4);
\node[caption] at (10,-.65) {$A=\{2\}$, $B=\{3,4\}$\\mixed};

\node[font=\scriptsize,blue!70!black] at (4.55,1.0) {blue: $A$};
\node[font=\scriptsize,orange!80!black] at (6.95,1.0) {orange: $B$};
\end{tikzpicture}
```

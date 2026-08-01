---
id: ex-kruskal-and-prim-on-a-weighted-graph
kind: example
title: "Kruskal's and Prim's procedures on the same weighted graph"
status: published
origin: session
deps: [thm-kruskals-minimum-spanning-tree-algorithm, thm-prims-minimum-spanning-tree-algorithm, def-weighted-graph-and-minimum-spanning-tree]
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
    - title: "P. T. Wood, Graph Theory lecture notes, Minimum spanning trees"
      url: "https://ptwiddle.github.io/MAS341-Graph-Theory-2017/lecturenotes/lecture8.html"
pipeline_run: null
---

## Statement

Let $G$ have edges $ab,bc,cd,ad,ac$ of weights $1,2,3,4,5$, respectively. Kruskal's procedure chooses $ab,bc,cd$. Prim's procedure started at $a$ makes the same choices, and the resulting MST has total weight $6$.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,line width=0.7pt,every node/.style={font=\small}]
  \tikzset{vertex/.style={circle,draw,fill=white,inner sep=1.5pt,minimum size=5mm}}
  \node[vertex] (a) at (-1.4,1) {$a$};
  \node[vertex] (b) at (1.4,1) {$b$};
  \node[vertex] (c) at (1.4,-1) {$c$};
  \node[vertex] (d) at (-1.4,-1) {$d$};
  \draw[gray] (a)--node[left,fill=white,inner sep=1pt] {$4$} (d);
  \draw[gray] (a)--node[below,fill=white,inner sep=1pt] {$5$} (c);
  \draw[blue,very thick] (a)--node[above,fill=white,inner sep=1pt] {$1$} (b);
  \draw[blue,very thick] (b)--node[right,fill=white,inner sep=1pt] {$2$} (c);
  \draw[blue,very thick] (c)--node[below,fill=white,inner sep=1pt] {$3$} (d);
  \node[blue] at (0,-1.7) {chosen in order: ab, bc, cd; total weight 6};
  \node at (0,1.7) {Kruskal and Prim from $a$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The weighted graph $(G,w)$ above.

[L1] Kruskal adds the lightest edge that does not form a cycle ([[thm-kruskals-minimum-spanning-tree-algorithm]]).

[L2] Prim adds the lightest edge leaving the reached set ([[thm-prims-minimum-spanning-tree-algorithm]]).

[F1] Tree weight is the sum of its edge weights ([[def-weighted-graph-and-minimum-spanning-tree]]).

## Verification

**Proof technique:** direct computation.

1.1 Kruskal considers the edges in weight order and accepts $ab$, then $bc$, then $cd$; at that point all four vertices are connected. [L1]

1.2 From $a$, Prim first chooses $ab$ of weight $1$, then $bc$ of weight $2$, then $cd$ of weight $3$. [L2]

2.1 Both procedures output the path with total weight $1+2+3=6$, and their correctness theorems make it an MST. [step 1.1, step 1.2, F1, L1, L2] ∎

---
id: def-elimination-tree-and-column-reach
kind: definition
title: Elimination-tree column patterns and reach
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-hermitian-structural-graph-adapter
  - def-symmetric-structural-elimination-graph-and-ordering
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 4, §4.2"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §4.1"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Definition

Let $A\in\mathbb C^{n\times n}$ satisfy $A=A^*$, use the Hermitian structural graph of [[def-hermitian-structural-graph-adapter]], and fix an elimination ordering $\pi=(v_0,\ldots,v_{n-1})$ of its vertices. For this chosen ordering, construct the filled graphs, parent map, and elimination forest by [[def-symmetric-structural-elimination-graph-and-ordering]]. All column sets, counts, ancestors, descendants, and reaches below are relative to $\pi$. For each $k$, let $N_k(v_k)$ be the later-neighbor set at elimination of $v_k$, and define its structural column set
$$\mathcal C_k=\{v_k\}\cup N_k(v_k).$$
Its off-diagonal size is the column count $\ell_k=|N_k(v_k)|$. An **ancestor** of $v_k$ is obtained by following one or more supplied parent edges; a **descendant** is the inverse relation. The **reach** of $v_k$ is the set of vertices visited by following its parent path, including $v_k$.


## Remarks

For a concrete example, take the real symmetric matrix whose off-diagonal support is the four-cycle shown on the left, with ordering $\pi=(v_0,v_1,v_2,v_3)$. Solid edges are original edges; the dashed edge $\{v_1,v_3\}$ is the only fill edge, added when $v_0$ is eliminated. The right-hand arrows point from each child to its parent.

```tikz
\begin{tikzpicture}[every node/.style={font=\small},vertex/.style={circle,draw,minimum size=9mm,inner sep=1pt}]
\node[vertex] (a0) at (0,0) {$v_0$};
\node[vertex] (a1) at (0,2) {$v_1$};
\node[vertex] (a2) at (2,2) {$v_2$};
\node[vertex] (a3) at (2,0) {$v_3$};
\draw (a0)--(a1);
\draw (a1)--(a2);
\draw (a2)--(a3);
\draw (a3)--(a0);
\draw[dashed] (a1)--(a3);
\node at (1,-0.9) {Original cycle and fill};
\node[vertex] (b0) at (4.2,1) {$v_0$};
\node[vertex] (b1) at (5.8,1) {$v_1$};
\node[vertex] (b2) at (7.4,1) {$v_2$};
\node[vertex] (b3) at (9,1) {$v_3$};
\draw[->] (b0)--(b1);
\draw[->] (b1)--(b2);
\draw[->] (b2)--(b3);
\node at (6.6,-0.9) {Elimination tree};
\end{tikzpicture}
```

Here $N_0(v_0)=\{v_1,v_3\}$, so $\mathcal C_0=\{v_0,v_1,v_3\}$ and $\ell_0=2$. The subsequent later-neighbor sets are $N_1(v_1)=\{v_2,v_3\}$, $N_2(v_2)=\{v_3\}$, and $N_3(v_3)=\varnothing$. Thus the parent path from $v_0$ visits all four vertices: its reach is $\{v_0,v_1,v_2,v_3\}$, and its ancestors are $v_1,v_2,v_3$. In particular, the reach and structural column need not coincide. The illustration follows the definitions and supplies no additional assumption or proof premise.

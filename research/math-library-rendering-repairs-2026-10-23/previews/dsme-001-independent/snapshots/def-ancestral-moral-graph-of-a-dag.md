---
id: def-ancestral-moral-graph-of-a-dag
kind: definition
title: "The ancestral moral graph of a DAG"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps: [def-d-separation-in-a-dag]
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §2-1, p. 672"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Fine Point 6.1, pp. 78–79"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

For $S\subseteq V$, its **ancestral set** is
$$\operatorname{An}_G(S):=\{v\in V:\text{there is a directed path from }v\text{ to some }s\in S\},$$
where paths of length zero are allowed, so $S\subseteq\operatorname{An}_G(S)$.
The induced directed subgraph on this set keeps exactly the arrows of $G$
whose two endpoints lie in $\operatorname{An}_G(S)$. Its **moral graph** is
the undirected simple graph obtained by replacing every arrow by an
undirected edge and joining every distinct pair of parents of a common child
by an undirected edge; loops and duplicate edges are discarded. This
undirected graph is the **ancestral moral graph** on $S$ and is denoted
$\operatorname{mor}_G(S)$.


## Remarks

The example below separates ancestral restriction from moralization. Let
$G$ have exactly the arrows $a\to c$, $b\to c$, and $c\to d$, and take
$S=\{c\}$. Then $\operatorname{An}_G(S)=\{a,b,c\}$: the descendant $d$
is removed before moralization. The final graph retains the undirected
edges $a-c$ and $b-c$ and adds $a-b$ because $a,b$ are parents of $c$.
The dashed edge marks this added edge; it is an ordinary edge of the moral
graph, not an arrow.

```tikz
\begin{tikzpicture}[scale=1.05, every node/.style={font=\small}]
\node at (0,2) {$G$};
\node (a) at (-0.8,1) {$a$};
\node (b) at (0.8,1) {$b$};
\node (c) at (0,0) {$c$};
\node (d) at (0,-1) {$d$};
\draw[->] (a) -- (c);
\draw[->] (b) -- (c);
\draw[->] (c) -- (d);
\node at (4,2) {Ancestral restriction};
\node (aa) at (3.2,1) {$a$};
\node (bb) at (4.8,1) {$b$};
\node (cc) at (4,0) {$c$};
\draw[->] (aa) -- (cc);
\draw[->] (bb) -- (cc);
\node at (8,2) {Moral graph};
\node (am) at (7.2,1) {$a$};
\node (bm) at (8.8,1) {$b$};
\node (cm) at (8,0) {$c$};
\draw (am) -- (cm);
\draw (bm) -- (cm);
\draw[dashed] (am) -- (bm);
\end{tikzpicture}
```

---
id: def-bondy-chvatal-closure
kind: definition
title: "The Bondy-Chvatal closure of a finite simple graph"
status: published
origin: session
authorship: literature-derived
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-graph-adjacency-incidence-neighbourhood-and-degree, lem-bondy-chvatal-edge-addition]
justified_by: [lem-bondy-chvatal-closure-well-defined]
aliases: []
landmark: false
proof_strategy: null
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Eulerian and Hamiltonian Graphs"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-Hamilton.html"
pipeline_run: null
---

## Definition

Let $G$ be a finite simple graph on $n$ vertices. Repeatedly add an edge between
nonadjacent vertices $u,v$ whenever their degrees in the current graph satisfy

$$ \deg(u)+\deg(v)\ge n. $$

Stop when no such pair remains. The resulting graph is the
**Bondy-Chvatal closure** of $G$, denoted $\operatorname{cl}(G)$. The edge
addition in [[lem-bondy-chvatal-edge-addition]] is the operation used at each
stage. The fact that the terminal graph does not depend on the order of
eligible additions is [[lem-bondy-chvatal-closure-well-defined]].

```tikz
\begin{tikzpicture}[scale=0.9]
  \node[circle,draw,inner sep=2pt] (u1) at (0,1.4) {$u$};
  \node[circle,draw,inner sep=2pt] (a1) at (1.6,1.4) {$a$};
  \node[circle,draw,inner sep=2pt] (v1) at (1.6,0) {$v$};
  \node[circle,draw,inner sep=2pt] (b1) at (0,0) {$b$};
  \draw (u1)--(a1)--(v1)--(b1)--(u1);
  \node at (0.8,-0.65) {$G$};

  \draw[->,thick] (2.25,0.7)--(4.05,0.7)
    node[midway,above] {$\deg(u)+\deg(v)\ge n$};

  \node[circle,draw,inner sep=2pt] (u2) at (4.7,1.4) {$u$};
  \node[circle,draw,inner sep=2pt] (a2) at (6.3,1.4) {$a$};
  \node[circle,draw,inner sep=2pt] (v2) at (6.3,0) {$v$};
  \node[circle,draw,inner sep=2pt] (b2) at (4.7,0) {$b$};
  \draw (u2)--(a2)--(v2)--(b2)--(u2);
  \draw[very thick] (u2)--(v2);
  \node at (5.5,-0.65) {$G+uv$};
\end{tikzpicture}
```

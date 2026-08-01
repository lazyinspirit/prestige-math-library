---
id: cex-strict-whitney-connectivity-inequalities
kind: counterexample
title: "Two dense lobes meeting at one cut vertex give $\\kappa(G)=1<\\lambda(G)=2<\\delta(G)=3$"
status: published
origin: session
deps: [fs-vertex-and-edge-connectivity-always-agree, def-vertex-and-edge-connectivity, def-graph-adjacency-incidence-neighbourhood-and-degree]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Wolfram MathWorld, Vertex Connectivity"
      url: "https://mathworld.wolfram.com/VertexConnectivity.html"
pipeline_run: null
---

## Statement refuted

The false statement [[fs-vertex-and-edge-connectivity-always-agree]] claims that
vertex connectivity, edge connectivity and minimum degree always agree.

## Facts & Assumptions

**Given:** For $i=1,2$, take vertices $a_i,b_i,c_i,d_i$ spanning $K_4$ with the edge $a_ib_i$ deleted. Add one vertex $v$, add the edges $va_i,vb_i$ for both $i$, and add no edge between the two four-vertex lobes.

[F1] $\kappa$ and $\lambda$ are the least sizes of vertex and edge cuts ([[def-vertex-and-edge-connectivity]]).

[F2] $\delta(G)$ is the least vertex degree ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## Counterexample

**Proof technique:** direct.

1.1 The graph is connected, and deleting $v$ separates the two lobes. No deletion of zero vertices disconnects a connected graph, so $\kappa(G)=1$. [given, F1]

1.2 In each lobe, $a_i$ and $b_i$ have two neighbours inside the lobe and the neighbour $v$, so degree $3$; $c_i,d_i$ have degree $3$ inside the lobe; and $v$ has degree $4$. Hence $\delta(G)=3$. [given, F2]

1.3 Deleting $va_1$ and $vb_1$ separates the first lobe from the rest, so $\lambda(G)\le2$. [given, F1]

1.4 Every edge lies on a cycle. The edges $va_i$ and $vb_i$ lie on the $4$-cycle $v,a_i,c_i,b_i,v$. Each internal edge incident with $a_i$ lies on the triangle $a_i,c_i,d_i,a_i$, and each internal edge incident with $b_i$ lies on $b_i,c_i,d_i,b_i$. Thus deleting one edge leaves an alternate path between its endpoints and cannot disconnect the graph, so $\lambda(G)\ge2$. [given, F1]

2.1 Steps 1.3 and 1.4 give $\lambda(G)=2$. Together with steps 1.1 and 1.2, this proves $\kappa(G)=1<\lambda(G)=2<\delta(G)=3$ and refutes equality in both Whitney inequalities. [step 1.1, step 1.2, step 1.3, step 1.4] ∎

## Remarks

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=7.5mm,inner sep=1pt,font=\scriptsize},
  cutvertex/.style={vertex,draw=violet!80!black,fill=violet!15,line width=1.4pt},
  edge/.style={draw=gray!70,line width=.9pt},
  edgecut/.style={draw=orange!85!black,line width=1.7pt}
]
\node[cutvertex] (v) at (0,0) {$v$};
% First K_4-a_1b_1 lobe.
\node[vertex] (a1) at (-1.5,.75) {$a_1$};
\node[vertex] (b1) at (-1.5,-.75) {$b_1$};
\node[vertex] (c1) at (-3.2,1.05) {$c_1$};
\node[vertex] (d1) at (-3.2,-1.05) {$d_1$};
\draw[edge] (a1)--(c1) (a1)--(d1) (b1)--(c1) (b1)--(d1) (c1)--(d1);
\draw[edgecut] (v)--(a1) (v)--(b1);
% Second K_4-a_2b_2 lobe.
\node[vertex] (a2) at (1.5,.75) {$a_2$};
\node[vertex] (b2) at (1.5,-.75) {$b_2$};
\node[vertex] (c2) at (3.2,1.05) {$c_2$};
\node[vertex] (d2) at (3.2,-1.05) {$d_2$};
\draw[edge] (a2)--(c2) (a2)--(d2) (b2)--(c2) (b2)--(d2) (c2)--(d2);
\draw[edge] (v)--(a2) (v)--(b2);
\node[font=\scriptsize,violet!80!black] at (0,1.05) {vertex cut $\{v\}$};
\node[font=\scriptsize,orange!85!black] at (-1.25,-1.65)
  {edge cut $\{va_1,vb_1\}$};
\node[font=\scriptsize] at (0,-2.15)
  {$\kappa(G)=1<\lambda(G)=2<\delta(G)=3$};
\end{tikzpicture}
```

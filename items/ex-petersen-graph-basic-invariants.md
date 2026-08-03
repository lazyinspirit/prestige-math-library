---
id: ex-petersen-graph-basic-invariants
kind: example
title: "The Petersen graph has ten vertices, is cubic, has girth five and has $\\kappa=\\lambda=3$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-petersen-graph, thm-two-element-subsets-count, def-graph-distance-and-girth, def-vertex-and-edge-connectivity, thm-whitney-connectivity-inequalities]
aliases: []
landmark: true
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

For $\Omega=\{1,2,3,4,5\}$, the Petersen graph on $[\Omega]^2$ has ten
vertices, is cubic, has girth $5$, and satisfies

$$\kappa(G)=\lambda(G)=3.$$

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=8mm,inner sep=1pt,font=\scriptsize},
  ordinary/.style={draw=gray!65,line width=.9pt},
  fivecycle/.style={draw=blue!75!black,line width=1.6pt}
]
% The blue outer pentagon is the cycle 12,34,15,23,45,12.
\node[vertex] (o12) at (0,2.8) {$12$};
\node[vertex] (o34) at (2.65,.86) {$34$};
\node[vertex] (o15) at (1.64,-2.26) {$15$};
\node[vertex] (o23) at (-1.64,-2.26) {$23$};
\node[vertex] (o45) at (-2.65,.86) {$45$};
\node[vertex] (i35) at (0,1.25) {$35$};
\node[vertex] (i25) at (1.19,.39) {$25$};
\node[vertex] (i24) at (.74,-1.01) {$24$};
\node[vertex] (i14) at (-.74,-1.01) {$14$};
\node[vertex] (i13) at (-1.19,.39) {$13$};
\draw[fivecycle] (o12)--(o34)--(o15)--(o23)--(o45)--cycle;
\draw[ordinary] (o12)--(i35) (o34)--(i25) (o15)--(i24)
                (o23)--(i14) (o45)--(i13);
\draw[ordinary] (i13)--(i24)--(i35)--(i14)--(i25)--cycle;
\node[font=\scriptsize,blue!75!black] at (0,-3.05)
  {the $5$-cycle $12,34,15,23,45,12$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The Petersen graph $G$ whose vertices are the two-element subsets of $\Omega=\{1,2,3,4,5\}$, adjacent exactly when disjoint.

[F1] This is the Petersen graph of [[def-petersen-graph]].

[L1] An $m$-element set has $\binom m2$ two-element subsets ([[thm-two-element-subsets-count]]).

[F2] Girth is the least cycle length, with the acyclic convention ([[def-graph-distance-and-girth]]).

[F3] $\kappa$ and $\lambda$ are the minimum sizes of vertex and edge cuts ([[def-vertex-and-edge-connectivity]]).

[L2] Whitney's inequalities give $\kappa(G)\le\lambda(G)\le\delta(G)$ for a nontrivial connected graph ([[thm-whitney-connectivity-inequalities]]).

## Verification

**Proof technique:** direct.

1.1 The vertex set has $\binom52=10$ elements by [L1]. For a vertex $A$, its neighbours are the two-element subsets of the three-element complement $\Omega\setminus A$, so it has $\binom32=3$ neighbours. Thus $G$ is cubic and $\delta(G)=3$. [F1, L1, algebra]

1.2 If distinct vertices $A,B$ are disjoint, their union has four elements and there is no two-element subset disjoint from both. If they intersect, their union has three elements and its two-element complement is their unique common neighbour. [F1]

1.3 Deleting any two vertices leaves a connected graph. Up to relabelling $\Omega$, two deleted two-element subsets are either the disjoint pair $12,34$ or the intersecting pair $12,13$. In the first case the remaining vertices have the spanning path $13,25,14,35,24,15,23,45$; in the second they have the spanning path $24,35,14,25,34,15,23,45$. Every successive pair displayed is disjoint. Relabelling preserves disjointness, so these cases cover every pair. [F1]

2.1 There is no triangle: adjacent vertices are disjoint and have no common neighbour by step 1.2. There is no $4$-cycle, because its two opposite vertices would have two distinct common neighbours, also impossible by step 1.2. [step 1.2]

2.2 Every two distinct vertices are at distance at most $2$: disjoint ones are adjacent, and intersecting ones have the common neighbour from step 1.2. Hence $G$ is connected. [step 1.2, F1]

3.1 The vertices $12,34,15,23,45$ in that order form a $5$-cycle, since consecutive sets, including $45$ and $12$, are disjoint. With step 2.1 and [F2], this proves $g(G)=5$. [step 2.1, F1, F2]

3.2 No set of at most two edges disconnects $G$. Indeed, if such a deletion produced a component on a smallest vertex set $S$, then $1\le|S|\le5$. Writing $e(S)$ for the number of edges inside $S$, cubicity gives $3|S|-2e(S)$ edges leaving $S$. For $|S|=1,2,3$ this number is at least $3,4,5$, since a simple triangle-free graph on those sizes has at most $0,1,2$ edges. For $|S|=4$, the absence of triangles and $4$-cycles makes the induced graph acyclic, so it has at most $3$ edges and at least $6$ edges leave. For $|S|=5$, it is either acyclic with at most $4$ edges or is a chordless $5$-cycle with $5$ edges, so at least $5$ edges leave. Every case has at least three boundary edges, a contradiction. Therefore $\lambda(G)\ge3$. [step 1.1, step 2.1, F3, algebra]

3.3 Deleting one vertex also leaves a connected graph: choose a second vertex, use step 1.3 on the remaining eight, and then add the second vertex back; it retains at least two of its three neighbours. Step 2.2 covers deletion of no vertices. Thus no vertex cut has size at most $2$, and $\kappa(G)\ge3$. [step 1.1, step 2.2, step 1.3, F3]

4.1 By [L2] and step 1.1, $\lambda(G)\le\delta(G)=3$. Together with step 3.2 this gives $\lambda(G)=3$. [step 1.1, step 3.2, L2]

5.1 Whitney's inequality [L2] and step 4.1 give $\kappa(G)\le3$, while step 3.3 gives the reverse bound. Hence $\kappa(G)=\lambda(G)=3$, with both lower bounds proved independently of cubic regularity. [step 4.1, step 3.3, L2] ∎

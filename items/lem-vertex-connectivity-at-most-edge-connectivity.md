---
id: lem-vertex-connectivity-at-most-edge-connectivity
kind: lemma
title: "For every nontrivial connected graph, $\\kappa(G)\\le\\lambda(G)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-vertex-and-edge-connectivity, def-connected-graph-and-connected-component, lem-every-graph-walk-contains-a-path-between-its-endpoints, cor-connected-components-partition-the-vertex-set]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wolfram MathWorld, Vertex Connectivity"
      url: "https://mathworld.wolfram.com/VertexConnectivity.html"
pipeline_run: null
---

## Statement

For every connected finite simple graph $G$ with at least two vertices,
$\kappa(G)\le\lambda(G)$.

## Facts & Assumptions

**Given:** A connected graph $G=(V,E)$ with $n=|V|\ge2$.

[F1] $\kappa(G)$ is the least size of a vertex set whose deletion disconnects $G$ or leaves at most one vertex, and $\lambda(G)$ is the least size of an edge cut ([[def-vertex-and-edge-connectivity]]).

[F2] The components of a disconnected graph partition its vertex set, and a walk between two different components must traverse an edge joining the two sides ([[cor-connected-components-partition-the-vertex-set]], [[def-connected-graph-and-connected-component]], [[lem-every-graph-walk-contains-a-path-between-its-endpoints]]).

## Proof

**Proof technique:** constructive.

1.1 Choose an edge cut $F$ of size $\lambda(G)$. Let $A$ be the vertex set of one component of $G-F$ and put $B=V\setminus A$. Then $A$ and $B$ are nonempty, and every edge of $G$ between $A$ and $B$ belongs to $F$. [given, F1, F2, choose, construct]

2.1 If $|F|\ge n-1$, deleting all but one vertex gives a vertex cut of size $n-1\le|F|$, so $\kappa(G)\le\lambda(G)$. [step 1.1, F1]

2.2 Suppose $|F|<n-1$. The bipartite set of all pairs with one endpoint in $A$ and one in $B$ has $|A||B|\ge|A|+|B|-1=n-1$ members. Hence not every such pair is an edge of $G$, for all cross edges lie in $F$. Choose nonadjacent $a\in A$ and $b\in B$. [step 1.1, algebra, choose]

3.1 For each edge $e\in F$, choose one endpoint $s(e)$ different from both $a$ and $b$; this is possible because $e\ne\{a,b\}$. Put $S=\{s(e):e\in F\}$. Then $a,b\notin S$, every edge of $F$ meets $S$, and $|S|\le|F|$. [step 2.2, construct]

4.1 Any path from $a\in A$ to $b\in B$ must use an edge between $A$ and $B$, hence an edge of $F$ by step 1.1, and therefore a vertex of $S$ by step 3.1. Thus $G-S$ has no $a$ to $b$ path and is disconnected, so $S$ is a vertex cut. [step 1.1, step 3.1, F1, F2]

5.1 In the case $|F|<n-1$, step 4.1 gives $\kappa(G)\le|S|\le|F|=\lambda(G)$; step 2.1 gives the same inequality in the remaining case. [step 2.1, step 3.1, step 4.1, F1, discharge-construct] ∎

---
id: cor-whitney-k-connected-path-characterisation
kind: corollary
title: "A finite graph on at least $k+1$ vertices is $k$-connected if and only if every two vertices have $k$ internally disjoint paths"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-menger-finite-directed-and-undirected-path-forms, def-vertex-and-edge-connectivity, def-graph-deletion-contraction-minor-and-subdivision, def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Whitman College, Menger's theorem and connectivity"
      url: "https://www.whitman.edu/mathematics/cgt_online/book/section05.07.html"
pipeline_run: null
---

## Statement

Let $k\ge1$ and let $G$ be a finite graph on at least $k+1$ vertices. Then $G$
is $k$-connected, meaning it is connected and $\kappa(G)\ge k$, if and only if
every two distinct vertices of $G$ are joined by at least $k$ internally
vertex-disjoint paths.

## Facts & Assumptions

**Given:** A finite graph $G$, an integer $k\ge1$, and $|V(G)|\ge k+1$.

[L1] For nonadjacent terminals, finite vertex Menger equates the largest internally disjoint path family with the smallest vertex separator ([[thm-menger-finite-directed-and-undirected-path-forms]]).

[F1] For a connected graph on at least two vertices, vertex connectivity is the minimum size of a set whose deletion disconnects the graph or leaves at most one vertex ([[def-vertex-and-edge-connectivity]]).

[F2] The open neighbourhood $N_G(x)$ is the set of neighbours of $x$, and its size is the degree of $x$ ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $G$ is $k$-connected and $x,y$ are nonadjacent. Every $x$-$y$ separator has at least $k$ vertices by [F1], so [L1] gives $k$ internally disjoint $x$-$y$ paths. [L1, F1]

1.2 Suppose instead that $xy$ is an edge and that $S$ separates $x$ from $y$ in $G-xy$ with $|S|\le k-2$. If the $x$-component of $(G-xy)-S$ contains a vertex other than $x$, deleting $S\cup\{x\}$ disconnects that vertex from $y$, contrary to [F1]. [F1]

1.3 If that $x$-component is the singleton $\{x\}$, then $N_G(x)\subseteq S\cup\{y\}$, so $|N_G(x)|\le k-1$; deleting $N_G(x)$ leaves the isolated $x$ and another vertex because $|V(G)|\ge k+1$, again contradicting [F1]. [F1, F2]

1.4 Thus every $x$-$y$ separator in $G-xy$ has size at least $k-1$. By [L1], $G-xy$ contains $k-1$ internally disjoint $x$-$y$ paths, and adjoining $xy$ gives $k$ such paths in $G$. [L1]

1.5 Conversely, suppose every pair has $k$ internally disjoint paths. If $|S|<k$ and $x,y\notin S$, at most $|S|$ of those paths have an internal vertex in $S$, so one survives in $G-S$; as at least two vertices survive, no such $S$ is a vertex cut. [F1]

2.1 Taking $S=\varnothing$ in step 1.5 gives connectivity, and then [F1] makes the absence of cuts of size below $k$ exactly $\kappa(G)\ge k$; steps 1.1--1.4 prove the converse direction. [F1, step 1.1, step 1.4, step 1.5] ∎

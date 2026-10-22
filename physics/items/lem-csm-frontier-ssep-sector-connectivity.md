---
id: lem-csm-frontier-ssep-sector-connectivity
kind: lemma
title: "Connectedness of fixed-occupancy exclusion sectors"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: null
sources:
  references:
    - title: "Shiba Biswal and Nicolas Lanchier, The simple exclusion process on finite connected graphs"
      url: "https://arxiv.org/pdf/1906.01752"
      locator: "Section 3, Lemmas 5–6 and proof: fixed-particle configurations are communicating classes. The statement here is graph-theoretic and is proved locally."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $G=(V,E)$ be a finite connected simple undirected graph with $m:=|V|\ge1$. For $0\le k\le m$, let $\mathcal C_k(G)$ be the set of all $k$-element subsets of $V$. Join distinct $A,B\in\mathcal C_k(G)$ when there is an edge $\{x,y\}\in E$ with $x\in A$, $y\notin A$, and $B=(A\setminus\{x\})\cup\{y\}$. Then this graph on $\mathcal C_k(G)$ is connected.

## Facts & Assumptions

**Given:** A finite connected simple undirected graph $G=(V,E)$, its number of vertices $m\ge1$, and an integer $0\le k\le m$.

[A1] The graph definitions, finite vertex set, connectedness, and fixed-cardinality configuration graph are exactly those in the Statement.

[L1] In this proof, a path in a graph is a finite vertex sequence whose consecutive vertices are joined by edges; it is simple if its vertices are distinct. A tree is a connected acyclic graph, a spanning tree is a tree subgraph containing every vertex, and a leaf is a vertex incident to exactly one edge. A legal configuration move replaces an occupied vertex by an adjacent vacant vertex, as in the configuration graph of the Statement.

## Proof

1.1 A finite connected graph has a spanning tree: start with one vertex and, while the current vertex set is not $V$, add an edge from that set to its complement together with the new endpoint. Such an edge exists because otherwise no path could join the current set to its complement. Finiteness makes this process terminate; each added edge attaches one new vertex, so the resulting spanning subgraph is connected and has no cycle. [A1, L1, construct]

2.1 We prove by induction on the number of vertices that the $k$-element subsets of any finite tree are connected for every admissible $k$. The assertion holds for a one-vertex tree, since its $0$- and $1$-element subset graphs each have one vertex. For a tree $T$ with at least two vertices, choose a simple path of maximum length; either endpoint is a leaf, because an additional neighbor outside the path would extend it, while an additional neighbor on the path would create a cycle. Let $v$ be a leaf. Removing a leaf leaves a connected acyclic graph, hence a smaller tree: the unique path between two remaining vertices cannot have the leaf as an interior vertex. If two configurations $A,B$ have the same occupancy at $v$, removing $v$ leaves two subsets of the same cardinality in $T-v$; by induction a sequence of legal moves there connects them, and the same moves in $T$ keep the occupancy at $v$ fixed. [A1, L1, step 1.1, construct]

3.1 Suppose $v\in A$ and $v\notin B$. Since $k<m$, choose a vacant vertex $w\notin A$ and let $v=v_0,v_1,\ldots,v_r=w$ be the unique simple path in $T$ from $v$ to $w$. Existence follows from connectedness, and two distinct simple paths would contain a cycle, so the path is unique. Let $j$ be the first index with $v_j\notin A$; then $v_0,\ldots,v_{j-1}$ are occupied. Move the particle at $v_{j-1}$ to the vacancy $v_j$, then the particle at $v_{j-2}$ to the new vacancy $v_{j-1}$, and continue until the particle at $v_0$ has moved to $v_1$. These are legal edge moves and leave $v$ vacant. The resulting configuration and $B$, restricted to $T-v$, both have $k$ particles; induction connects them without using $v$. [A1, L1, step 2.1, construct]

3.2 Suppose $v\notin A$ and $v\in B$. Since $k>0$, choose an occupied vertex $w\in A$ and use the unique path $v=v_0,\ldots,v_r=w$. Let $j$ be the first index with $v_j\in A$; all earlier vertices are vacant. Move the particle from $v_j$ to $v_{j-1}$, then from $v_{j-1}$ to $v_{j-2}$, and continue until $v_0=v$ is occupied. The moves are legal along the path. The resulting configuration and $B$, restricted to $T-v$, both have $k-1$ particles; induction connects them without using $v$. This proves the claim for trees, including the cases $k=0$ and $k=m$ already covered by their singleton configuration graphs. [A1, L1, step 2.1, construct]

4.1 Apply step 1.1 to $G$ and let $T$ be a spanning tree. Every move along an edge of $T$ is also an allowed move in $G$. steps 3.1 and 3.2 therefore connect any two $k$-element subsets using edges of $G$, so $\mathcal C_k(G)$ is connected. [A1, L1, step 1.1, step 2.1, step 3.1, step 3.2] ∎

---
id: lem-chordal-components-admit-both-orientations
kind: lemma
title: "Edges of finite chordal graphs admit both collider-free orientations"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
proof_strategy: direct
axiom_use: "The argument is finite and choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Meek, Causal Inference and Causal Explanation with Background Knowledge, Appendix"
      url: "https://arxiv.org/pdf/1302.4972"
    - title: "Lauritzen, Graphical Models lecture notes, §2.6"
      url: "https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf"
---

## Statement

An undirected graph is **chordal** when it has no induced cycle of length at
least four. A vertex is **simplicial** when all of its neighbors are pairwise
adjacent. A **perfect elimination order** is a total order in which the later
neighbors of each vertex form a clique. For every finite chordal undirected
graph $H$ and every edge $\{u,v\}$ of $H$, there are acyclic orientations of
all edges of $H$ with no unshielded collider $a\to w\leftarrow b$ with
$a,b$ nonadjacent, one having $u\to v$ and another having $v\to u$.

## Statement references

[Meek, Appendix](https://arxiv.org/pdf/1302.4972)

[Lauritzen, §2.6](https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf)

## Facts & Assumptions

**Given:** A finite chordal undirected graph $H$ and an edge $\{u,v\}$.

[A1] Chordality means that every induced cycle in $H$ has length at most three; all subgraphs used below are finite.

## Proof

1.1 We first show by induction on the number of vertices that a connected noncomplete chordal graph has two nonadjacent simplicial vertices. Choose nonadjacent vertices $a,b$ and an inclusion-minimal separator $S$ whose removal disconnects them. Let $C_a,C_b$ be the components of $H-S$ containing $a,b$. For every $s\in S$, minimality gives a path from $a$ to $b$ after restoring only $s$, so $s$ has a neighbor in each of $C_a,C_b$. If $x,y\in S$ were nonadjacent, shortest paths from $x$ to $y$ with internal vertices in $C_a$ and in $C_b$ would form an induced cycle of length at least four: each path is chordless by shortestness, there are no edges between the two components, and $x,y$ are nonadjacent. This contradicts chordality, so $S$ is a clique. The induced graphs on $C_a\cup S$ and $C_b\cup S$ are smaller connected chordal graphs. By induction, each is either complete, in which case any vertex in its nonempty component $C_a$ or $C_b$ is simplicial, or noncomplete, in which case it has two nonadjacent simplicial vertices and at least one lies outside the clique $S$. Such a vertex has no neighbors outside its component together with $S$, so it is simplicial in $H$. The chosen vertices from $C_a$ and $C_b$ are nonadjacent. Complete connected graphs have every vertex simplicial, and disconnected graphs have a simplicial vertex in each component. Therefore every nonempty finite chordal graph has a simplicial vertex. [given, A1, construct, choose]

2.1 Repeatedly remove a simplicial vertex. Each induced subgraph remains chordal, so step 1.1 supplies a simplicial vertex until the graph is empty. The removal order $v_1,\ldots,v_n$ is a perfect elimination order because the neighbors of $v_t$ that remain at its removal are pairwise adjacent. [A1, step 1.1, construct]

3.1 For each $t$, let $K_t=\{v_t\}\cup N_t^+$, where $N_t^+$ is the set of neighbors of $v_t$ later in the elimination order. Each $K_t$ is a clique by step 2.1. If $N_t^+$ is nonempty, let $p(t)$ be its earliest vertex and join the clique node $K_t$ to $K_{p(t)}$. The index strictly increases along parent edges, so these edges form a forest. Since $N_t^+$ is a clique, every vertex of $N_t^+$ other than $p(t)$ is a later neighbor of $p(t)$; hence $K_t\cap K_{p(t)}=N_t^+$. If a vertex $x$ belongs to $K_t$ with $t<x$, then $x\in N_t^+$ and this membership propagates to the parent node, eventually to $K_x$. Thus the clique nodes containing any fixed vertex form a connected subtree. Every graph edge lies in some $K_t$ by taking its earlier endpoint. This is a clique forest with the running-intersection property. [step 2.1, construct]

4.1 Root one tree of this forest. Each vertex $x$ belongs to a connected subtree of clique nodes, so there is a unique root-nearest node $C_x$ containing it. Order the clique nodes in postorder, and list the vertices owned by each node $C_x$ in any order. For any neighbor $y$ of $x$, a clique node $D$ contains both. The nodes $C_x,C_y,D$ lie in the connected subtrees of cliques containing $x$ and $y$, so $C_x,C_y$ are comparable along the root-to-$D$ path. If $C_y$ is an ancestor of $C_x$, the running-intersection property gives $y\in C_x$; if it is a strict descendant of $C_x$, its block is earlier in postorder; and if it is $C_x$, both vertices are in the same clique block. Thus any neighbor $y$ later than $x$ belongs to the clique $C_x$. All later neighbors of $x$ therefore lie in the clique $C_x$, so this order is a perfect elimination order. [step 3.1, construct]

5.1 Direct every edge from its later endpoint in this order to its earlier endpoint. The orientation is acyclic because every arrow decreases the order. The parents of any vertex are among its later neighbors, which form a clique by step 4.1; hence there is no unshielded collider. [step 4.1, construct]

6.1 Since $\{u,v\}$ is an edge, some clique node $C$ contains both. Root its clique tree at $C$. Then $C$ is the root-nearest node containing each of $u,v$, so both are owned by its vertex block. List $v$ before $u$ in that block; step 5.1 directs $u\to v$. Reversing their order directs $v\to u$. The remaining vertices in the block may retain any order, and other trees may be rooted and ordered independently. Both resulting orientations are acyclic and collider-free by steps 4.1–5.1. [step 3.1, step 4.1, step 5.1, construct, choose] ∎

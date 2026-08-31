---
id: thm-a-wide-coherent-blockade-contains-a-blockade-rainbow-copy-of-a-forest
kind: theorem
title: "A wide coherent blockade contains a blockade-rainbow copy of a forest"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-blockade-rainbow-induced-copy,
       def-blockade-length-and-width,
       def-tree-forest-and-leaf,
       def-graph-adjacency-incidence-neighbourhood-and-degree,
       def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Pure pairs. I. Trees and linear anticomplete pairs, Theorem 2.1"
      url: "https://arxiv.org/pdf/1809.00919"
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 6.3"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $F$ be a forest on vertices $u_1,\dots,u_m$, and let
$\mathcal B=(B_1,\dots,B_m)$ be a blockade in a graph $G$. Suppose that for
every distinct $i,j\in[m]$,

1. $B_i$ is complete to $B_j$ when $u_i u_j\in E(F)$; and
2. $B_i$ is anticomplete to $B_j$ when $u_i u_j\notin E(F)$.

Then $G$ contains a $\mathcal B$-rainbow induced copy of $F$.

## Facts & Assumptions

**Given:** A forest $F$ on vertices $u_1,\dots,u_m$, a graph $G$, and a
blockade $\mathcal B=(B_1,\dots,B_m)$ satisfying the two displayed
cross-block conditions.

[L1] A $\mathcal B$-rainbow induced copy of $F$ means an induced copy lying in
$V(\mathcal B)$ and using at most one vertex from each block
([[def-blockade-rainbow-induced-copy]]).

[F1] Every block of a blockade is nonempty
([[def-blockade-length-and-width]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], choose vertices $x_i\in B_i$ for every $i\in[m]$. Let $X:=\{x_1,\dots,x_m\}$. Because the blocks are pairwise disjoint, these $m$ vertices are distinct. [F1, choose, given]

2.1 For distinct $i,j\in[m]$, the hypothesis says that $x_i$ and $x_j$ are adjacent exactly when $u_i$ and $u_j$ are adjacent in $F$. Hence the map $u_i\mapsto x_i$ is an adjacency-preserving and nonadjacency-preserving bijection from $V(F)$ to $X$, so $G[X]$ is an induced copy of $F$. [step 1.1, given]

3.1 The copy $G[X]$ lies in $V(\mathcal B)$ and uses exactly one vertex from each block, so [L1] shows that it is $\mathcal B$-rainbow. [step 2.1, L1] ∎

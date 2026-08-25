---
id: lem-a-module-meets-an-induced-subgraph-in-a-module
kind: lemma
title: "If $M$ is a module of $G$ and $W\\subseteq V(G)$, then $M\\cap W$ is a module of $G[W]$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-module-of-a-graph, def-subgraph-induced-subgraph-and-spanning-subgraph, def-edges-between-sets-and-pure-mixed-pairs]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.3"
      url: "https://arxiv.org/pdf/0912.1457"
pipeline_run: null
---

## Statement

Let $M$ be a module of a finite simple graph $G$ and let $W\subseteq V(G)$. Then
$M\cap W$ is a module of the induced subgraph $G[W]$.

## Facts & Assumptions

**Given:** A module $M$ of a finite simple graph $G$ and a set $W\subseteq V(G)$.

[F1] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$ ([[def-module-of-a-graph]]).

[F2] $G[W]=(W,\,E(G)\cap[W]^2)$, so two vertices of $W$ are adjacent in $G[W]$ exactly when they are adjacent in $G$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[F3] The pair $(A,B)$ of disjoint sets is complete when every $a\in A$ is adjacent to every $b\in B$, anticomplete when no $a\in A$ is adjacent to any $b\in B$, and pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** direct.

1.1 Let $v\in W\setminus(M\cap W)$. Since $v\in W$, this gives $v\notin M$, so $(\{v\},M)$ is pure in $G$. [F1, given]

2.1 The vertex set of $G[W]$ is $W$, so the vertices outside $M\cap W$ in $G[W]$ are exactly the vertices $v$ of step 1.1. [F2]

2.2 If $(\{v\},M)$ is complete in $G$ then $v$ is adjacent in $G$ to every vertex of $M\cap W\subseteq M$, and if it is anticomplete then $v$ is adjacent in $G$ to no vertex of $M\cap W$. [step 1.1, F3]

3.1 Both $v$ and the vertices of $M\cap W$ lie in $W$, so those adjacencies are the same in $G[W]$ as in $G$; hence $(\{v\},M\cap W)$ is pure in $G[W]$. [step 2.2, F2, F3]

4.1 Every vertex of $G[W]$ outside $M\cap W$ therefore satisfies the module condition of [F1] in $G[W]$, so $M\cap W$ is a module of $G[W]$. [step 2.1, step 3.1, F1] ∎

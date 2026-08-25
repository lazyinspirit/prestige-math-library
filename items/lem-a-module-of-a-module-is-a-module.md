---
id: lem-a-module-of-a-module-is-a-module
kind: lemma
title: "A module of $G[M]$ is a module of $G$ whenever $M$ is a module of $G$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-module-of-a-graph, def-subgraph-induced-subgraph-and-spanning-subgraph, def-edges-between-sets-and-pure-mixed-pairs]
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.3"
      url: "https://arxiv.org/pdf/0912.1457"
pipeline_run: null
---

## Statement

Let $M$ be a module of a finite simple graph $G$ and let $X\subseteq M$ be a
module of the induced subgraph $G[M]$. Then $X$ is a module of $G$.

## Facts & Assumptions

**Given:** A module $M$ of a finite simple graph $G$, a module $X$ of $G[M]$, and a vertex $v\in V(G)\setminus X$.

[F1] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$ ([[def-module-of-a-graph]]).

[F2] $G[M]=(M,\,E(G)\cap[M]^2)$, so two vertices of $M$ are adjacent in $G[M]$ exactly when they are adjacent in $G$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[F3] The pair $(A,B)$ of disjoint sets is complete when every $a\in A$ is adjacent to every $b\in B$, anticomplete when no $a\in A$ is adjacent to any $b\in B$, and pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** cases.

1.1 First case: $v\in M\setminus X$. Since $X$ is a module of $G[M]$ and $v$ is a vertex of $G[M]$ outside $X$, the pair $(\{v\},X)$ is pure in $G[M]$; as $v$ and the vertices of $X$ all lie in $M$, the same adjacencies hold in $G$, so $(\{v\},X)$ is pure in $G$. [assume-case inM, F1, F2, F3]

1.2 Second case: $v\notin M$. Then $(\{v\},M)$ is pure in $G$ because $M$ is a module of $G$, and $X\subseteq M$, so $(\{v\},X)$ is pure in $G$. [assume-case outM, F1, F3]

2.1 A vertex $v\notin X$ lies in $M$ or outside $M$, so the two cases are exhaustive and $(\{v\},X)$ is pure in $G$ for every $v\in V(G)\setminus X$. [step 1.1, step 1.2, given, cases-exhaustive]

3.1 That is the module condition of [F1] for $X$ in $G$, so $X$ is a module of $G$. [step 2.1, F1] ∎

---
id: lem-a-union-of-parts-is-a-module-exactly-when-the-index-set-is
kind: lemma
title: "For a modular partition, a set of parts is a module of the quotient exactly when the union of those parts is a module of the graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-modular-partition-and-quotient-graph, def-module-of-a-graph, lem-disjoint-modules-are-a-pure-pair, def-edges-between-sets-and-pure-mixed-pairs]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
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

Let $\mathcal P$ be a modular partition of a finite simple graph $G$, let
$\mathcal X\subseteq\mathcal P$, and let $U=\bigcup_{M\in\mathcal X}M$. Then
$\mathcal X$ is a module of $G/\mathcal P$ if and only if $U$ is a module of
$G$.

## Facts & Assumptions

**Given:** A modular partition $\mathcal P$ of a finite simple graph $G$, a subset $\mathcal X\subseteq\mathcal P$, and the union $U=\bigcup_{M\in\mathcal X}M$.

[F1] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$ ([[def-module-of-a-graph]]).

[F2] A modular partition of $G$ is a set of nonempty, pairwise disjoint modules of $G$ whose union is $V(G)$; the quotient $G/\mathcal P$ has vertex set $\mathcal P$, with distinct parts $M,N$ adjacent exactly when $(M,N)$ is a complete pair in $G$ ([[def-modular-partition-and-quotient-graph]]).

[L1] Two disjoint nonempty modules of $G$ form a complete or an anticomplete pair, and not both ([[lem-disjoint-modules-are-a-pure-pair]]).

[F3] A disjoint pair is complete when every cross pair is an edge, anticomplete when no cross pair is an edge, and pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** direct.

1.1 Since the parts are nonempty, pairwise disjoint and cover $V(G)$, a vertex $v$ lies outside $U$ exactly when the unique part $N$ containing it lies outside $\mathcal X$; and $N$ is then disjoint from every $M\in\mathcal X$. [F2]

1.2 For $N\in\mathcal P\setminus\mathcal X$, $M\in\mathcal X$ and $v\in N$, the pair $(N,M)$ is complete or anticomplete by [L1]; it is complete exactly when $v$ is adjacent to every vertex of $M$, and anticomplete exactly when $v$ is adjacent to no vertex of $M$, because $M$ and $N$ are nonempty and the alternative is excluded. [L1, F3, F2]

2.1 For the forward direction, assume $\mathcal X$ is a module of $G/\mathcal P$ and let $v\in V(G)\setminus U$, lying in the part $N\notin\mathcal X$ of step 1.1. Then $N$ is adjacent in $G/\mathcal P$ to every member of $\mathcal X$ or to none. In the first case every $(N,M)$ with $M\in\mathcal X$ is complete, so by step 1.2 the vertex $v$ is adjacent to every vertex of $U$; in the second case every such $(N,M)$ is anticomplete, so $v$ is adjacent to no vertex of $U$. [step 1.1, step 1.2, F1, F2]

2.2 For the converse direction, assume $U$ is a module of $G$ and let $N\in\mathcal P\setminus\mathcal X$, which is a vertex of $G/\mathcal P$ outside $\mathcal X$. Choose $v\in N$; then $v\notin U$ by step 1.1, so $v$ is adjacent to every vertex of $U$ or to no vertex of $U$. In the first case step 1.2 makes every pair $(N,M)$ with $M\in\mathcal X$ complete, so $N$ is adjacent in $G/\mathcal P$ to every member of $\mathcal X$; in the second case every such pair is anticomplete, so $N$ is adjacent to none of them. [step 1.1, step 1.2, F1, F2, choose]

3.1 Step 2.1 makes $(\{v\},U)$ pure for every $v\in V(G)\setminus U$, so $U$ is a module of $G$, and step 2.2 makes $(\{N\},\mathcal X)$ pure in $G/\mathcal P$ for every part $N$ outside $\mathcal X$, so $\mathcal X$ is a module of $G/\mathcal P$; together these are the two directions of the equivalence. [step 2.1, step 2.2, F1, F3] ∎

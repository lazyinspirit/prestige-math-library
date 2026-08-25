---
id: lem-union-of-two-meeting-modules-is-a-module
kind: lemma
title: "The union of two modules with a common vertex is a module"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-module-of-a-graph, def-edges-between-sets-and-pure-mixed-pairs]
aliases: []
landmark: true
proof_strategy: cases
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
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.1"
      url: "https://arxiv.org/pdf/0912.1457"
pipeline_run: null
---

## Statement

Let $M$ and $N$ be modules of a finite simple graph $G$ with
$M\cap N\ne\varnothing$. Then $M\cup N$ is a module of $G$.

## Facts & Assumptions

**Given:** Modules $M,N$ of a finite simple graph $G$ with $M\cap N\ne\varnothing$, and a vertex $v\in V(G)\setminus(M\cup N)$.

[F1] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$ ([[def-module-of-a-graph]]).

[F2] The pair $(A,B)$ of disjoint sets is complete when every $a\in A$ is adjacent to every $b\in B$, anticomplete when no $a\in A$ is adjacent to any $b\in B$, and pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** cases.

1.1 Fix $u\in M\cap N$. Since $v\notin M\cup N$, the vertex $v$ lies outside $M$ and outside $N$, so both $(\{v\},M)$ and $(\{v\},N)$ are pure. [given, F1, choose]

1.2 First case: $uv\in E(G)$. Then $(\{v\},M)$ is not anticomplete, since $u\in M$, so it is complete; and likewise $(\{v\},N)$ is complete. [assume-case adj, F2]

1.3 Second case: $uv\notin E(G)$. Then $(\{v\},M)$ is not complete, since $u\in M$, so it is anticomplete; and likewise $(\{v\},N)$ is anticomplete. [assume-case nonadj, F2]

2.1 In the first case $v$ is adjacent to every vertex of $M$ and to every vertex of $N$, hence to every vertex of $M\cup N$; in the second case $v$ is adjacent to no vertex of $M$ and to no vertex of $N$, hence to no vertex of $M\cup N$. The two cases exhaust the possibilities. [step 1.1, step 1.2, step 1.3, F2, cases-exhaustive]

3.1 So $(\{v\},M\cup N)$ is pure for every vertex $v$ outside $M\cup N$, which is the module condition of [F1]. [step 2.1, F1] ∎

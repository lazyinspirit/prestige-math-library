---
id: lem-module-criteria
kind: lemma
title: "Three equivalent descriptions of a module: purity of every outside vertex, equality of outside neighbourhoods, and indistinguishability of the members"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-module-of-a-graph, def-edges-between-sets-and-pure-mixed-pairs, def-graph-adjacency-incidence-neighbourhood-and-degree]
aliases: []
landmark: true
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

Let $G$ be a finite simple graph and let $M\subseteq V(G)$. The following three
conditions are equivalent.

1. $M$ is a module of $G$ ([[def-module-of-a-graph]]).
2. $N_G(x)\setminus M=N_G(y)\setminus M$ for all $x,y\in M$.
3. For all $x,y\in M$ and all $v\in V(G)\setminus M$: $vx\in E(G)$ if and only
   if $vy\in E(G)$.

## Facts & Assumptions

**Given:** A finite simple graph $G$ and a set $M\subseteq V(G)$.

[F1] $M$ is a module of $G$ when every vertex $v\in V(G)\setminus M$ is adjacent to every vertex of $M$ or to no vertex of $M$; equivalently, the pair $(\{v\},M)$ is pure for every such $v$ ([[def-module-of-a-graph]]).

[F2] A disjoint pair $(A,B)$ is complete when every $a\in A$ is adjacent to every $b\in B$, anticomplete when no $a\in A$ is adjacent to any $b\in B$, and pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

[F3] $N_G(v)=\{u\in V:\{u,v\}\in E\}$ ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## Proof

**Proof technique:** direct.

1.1 For the implication from 1 to 2, assume $M$ is a module, and let $x,y\in M$ and $v\in N_G(x)\setminus M$. Then $v\notin M$, so $(\{v\},M)$ is pure, and it is not anticomplete because $v$ is adjacent to $x\in M$; hence it is complete, so $v$ is adjacent to $y$ and $v\in N_G(y)\setminus M$. [F1, F2, F3]

1.2 For the implication from 2 to 3, assume condition 2 and let $x,y\in M$ and $v\in V(G)\setminus M$ with $vx\in E(G)$. Then $v\in N_G(x)\setminus M=N_G(y)\setminus M$, so $vy\in E(G)$; exchanging the roles of $x$ and $y$ gives the reverse implication, which is condition 3. [F3]

1.3 For the implication from 3 to 1, assume condition 3 and let $v\in V(G)\setminus M$. If $v$ is adjacent to some $x\in M$, then condition 3 makes $v$ adjacent to every $y\in M$, so $(\{v\},M)$ is complete; if $v$ is adjacent to no vertex of $M$, then $(\{v\},M)$ is anticomplete. In both cases the pair is pure. [F2, F3]

2.1 Step 1.1 applies to both orders of $x$ and $y$, giving $N_G(x)\setminus M\subseteq N_G(y)\setminus M$ and $N_G(y)\setminus M\subseteq N_G(x)\setminus M$, so condition 1 implies condition 2. [step 1.1]

2.2 Step 1.3 verifies the condition of [F1] at every vertex outside $M$, so condition 3 implies condition 1. [step 1.3, F1]

3.1 The implications of steps 2.1, 1.2 and 2.2 form the cycle from 1 to 2 to 3 and back to 1, so the three conditions are equivalent. [step 2.1, step 1.2, step 2.2] ∎

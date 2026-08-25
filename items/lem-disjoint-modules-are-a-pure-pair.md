---
id: lem-disjoint-modules-are-a-pure-pair
kind: lemma
title: "Two disjoint nonempty modules form a complete or an anticomplete pair"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-module-of-a-graph, lem-module-criteria, def-edges-between-sets-and-pure-mixed-pairs]
aliases: []
landmark: true
proof_strategy: direct
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

Let $M$ and $N$ be disjoint nonempty modules ([[def-module-of-a-graph]]) of a
finite simple graph $G$. Then
the pair $(M,N)$ is complete or anticomplete, and it is not both.

## Facts & Assumptions

**Given:** Disjoint nonempty modules $M,N$ of a finite simple graph $G$.

[L1] For a module $M$ of $G$: for all $x,y\in M$ and all $v\in V(G)\setminus M$, $vx\in E(G)$ if and only if $vy\in E(G)$ ([[lem-module-criteria]]).

[F2] The pair $(A,B)$ of disjoint sets is complete when every $a\in A$ is adjacent to every $b\in B$, anticomplete when no $a\in A$ is adjacent to any $b\in B$, and pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x_0\in M$ and $y_0\in N$, which exist because both sets are nonempty. [given, choose]

1.2 Let $x\in M$ and $y\in N$. Since $y\notin M$ and $x,x_0\in M$, applying [L1] to the module $M$ gives that $xy\in E(G)$ if and only if $x_0y\in E(G)$. [L1, given]

1.3 Since $x_0\notin N$ and $y,y_0\in N$, applying [L1] to the module $N$ gives that $x_0y\in E(G)$ if and only if $x_0y_0\in E(G)$. [L1, given]

2.1 Combining steps 1.2 and 1.3, every $x\in M$ and $y\in N$ satisfy: $xy\in E(G)$ if and only if $x_0y_0\in E(G)$. [step 1.1, step 1.2, step 1.3]

3.1 If $x_0y_0\in E(G)$ then step 2.1 makes every cross pair an edge, so $(M,N)$ is complete; otherwise step 2.1 makes no cross pair an edge, so $(M,N)$ is anticomplete. The two cannot both hold, since the single pair $x_0y_0$ would then be both an edge and not an edge. [step 2.1, F2] ∎

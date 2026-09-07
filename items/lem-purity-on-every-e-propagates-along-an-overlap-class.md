---
id: lem-purity-on-every-e-propagates-along-an-overlap-class
title: "Purity propagates through E overlap chains"
kind: lemma
status: draft
origin: pipeline
deps: ["def-e-overlap-chain-relation-in-a-comb-block", "def-edges-between-sets-and-pure-mixed-pairs"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "Finite adjacency analysis and structural deduction"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Claim 6.5.3, overlap propagation"
      url: https://arxiv.org/html/2606.06258v2
---

## Statement

Fix a comb block $B_i$ and an $E$ overlap class $A$. If $u\notin A$ is pure to every induced $E$ contained in $A$, then $u$ is pure to $A$. In particular, any $u\notin B_i$ pure to every induced $E$ in $B_i$ is pure to every overlap class.

## Facts & Assumptions

[F1] [[def-e-overlap-chain-relation-in-a-comb-block]] supplies the following definition: Fix a block $B_i$ of a finite graph comb (def-comb-in-a-graph). Let $\mathcal E_i$ consist of all six-vertex subsets of $B_i$ inducing the graph in def-e-graph-and-co-e-graph. Put $X_i=\bigcup_{S\in\mathcal E_i}S$ and $Y_i=B_i\setminus X_i$. For $d,e\in X_i$, define $d\mathrel{R_i}e$ if there exist $m\geq0$ and vertices $d=d_0,d_1,\ldots,d_m=e$ in $X_i$ such that each consecutive pair is contained in some $S\in\mathcal E_i$. A zero-length chain is allowed. If $\mathcal E_i$ is empty then $X_i$ and the relation are empty. We call this the $E$ overlap chain relation.

[F2] [[def-edges-between-sets-and-pure-mixed-pairs]] supplies the following definition: Let $G$ be a finite simple graph and let $A,B\subseteq V(G)$ be disjoint. An **edge between $A$ and $B$** is an edge $ab$ with $a\in A$ and $b\in B$. The pair $(A,B)$ is: - **complete** when every $a\in A$ is adjacent to every $b\in B$; - **anticomplete** when no $a\in A$ is adjacent to any $b\in B$; - **pure** when it is complete or anticomplete; and - **mixed** when it is neither complete nor anticomplete. Adjacency is the symmetric edge relation of $G$ (def-finite-simple-graph, def-graph-adjacency-incidence-neighbourhood-and-degree). If $A=\varnothing$ or $B=\varnothing$, the pair is both complete and anticomplete, hence pure and not mixed.

## Proof

**Given:** The graph, vertices, sets and hypotheses in the statement.

1.1 Every induced $E$ meeting $A$ lies in $A$, because any two of its vertices have a length-one overlap chain. On each such six-vertex copy, purity means that all six adjacency values to $u$ are equal. If two copies share a vertex, their values coincide at that vertex and therefore agree everywhere. [given, F1, F2]

2.1 For any two vertices of a class choose a defining finite chain. Each consecutive pair has equal adjacency to $u$ because it lies in a common copy. Equality propagates along the chain, including a zero-length chain. Thus every vertex in the class has the same adjacency value. This is exactly purity. If there are no classes the assertion is vacuous. [F1, F2] ∎

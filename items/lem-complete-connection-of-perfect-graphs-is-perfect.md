---
id: lem-complete-connection-of-perfect-graphs-is-perfect
kind: lemma
title: "A complete connection of two perfect graphs is perfect"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complete-connection-of-two-disjoint-graphs,
       def-perfect-graph,
       def-subgraph-induced-subgraph-and-spanning-subgraph,
       def-proper-vertex-colouring-and-chromatic-number,
       def-clique-stable-set-and-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdos-Hajnal Conjecture - A Survey, Introduction"
      url: "https://arxiv.org/pdf/1606.08827"
pipeline_run: null
---

## Statement

If $G$ and $H$ are perfect graphs on disjoint vertex sets, then their complete
connection $G\nabla H$ is perfect.

## Facts & Assumptions

**Given:** Perfect graphs $G=(V_G,E_G)$ and $H=(V_H,E_H)$ with
$V_G\cap V_H=\varnothing$.

[L1] A graph is perfect exactly when every induced subgraph has equal clique
number and chromatic number ([[def-perfect-graph]]).

[L2] If $X\subseteq V_G\cup V_H$ and $X_G:=X\cap V_G$, $X_H:=X\cap V_H$, then
the induced subgraph of $G\nabla H$ on $X$ is
$G[X_G]\nabla H[X_H]$
([[def-complete-connection-of-two-disjoint-graphs]],
[[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[L3] In a complete connection, every clique is the union of a clique from each
side, while every stable set lies entirely in one side; therefore
$\omega(G\nabla H)=\omega(G)+\omega(H)$ and
$\chi(G\nabla H)=\chi(G)+\chi(H)$
([[def-clique-stable-set-and-numbers]],
[[def-proper-vertex-colouring-and-chromatic-number]]).

## Proof

**Proof technique:** direct.

1.1 Let $X\subseteq V_G\cup V_H$, and write $X_G:=X\cap V_G$ and $X_H:=X\cap V_H$. Because $G$ and $H$ are perfect, [L1] gives $\chi(G[X_G])=\omega(G[X_G])$ and $\chi(H[X_H])=\omega(H[X_H])$. [L1, given]

2.1 By [L2], the induced subgraph of $G\nabla H$ on $X$ is $G[X_G]\nabla H[X_H]$. Applying [L3] to that complete connection and then using step 1.1 yields $\chi((G\nabla H)[X]) =\chi(G[X_G])+\chi(H[X_H]) =\omega(G[X_G])+\omega(H[X_H]) =\omega((G\nabla H)[X]).$ [step 1.1, L2, L3]

3.1 Step 2.1 proves $\chi(K)=\omega(K)$ for every induced subgraph $K=(G\nabla H)[X]$, so $G\nabla H$ is perfect by [L1]. [step 2.1, L1] ∎

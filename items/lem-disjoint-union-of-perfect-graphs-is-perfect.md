---
id: lem-disjoint-union-of-perfect-graphs-is-perfect
kind: lemma
title: "A disjoint union of two perfect graphs is perfect"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-perfect-graph,
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

If $G$ and $H$ are perfect graphs on disjoint vertex sets, then their disjoint
union is perfect.

## Facts & Assumptions

**Given:** Perfect graphs $G=(V_G,E_G)$ and $H=(V_H,E_H)$ with
$V_G\cap V_H=\varnothing$.

[L1] A graph is perfect exactly when every induced subgraph has equal clique
number and chromatic number ([[def-perfect-graph]]).

[L2] If $X\subseteq V_G\cup V_H$ and $X_G:=X\cap V_G$, $X_H:=X\cap V_H$, then
the induced subgraph of the disjoint union on $X$ is the disjoint union of
$G[X_G]$ and $H[X_H]$
([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[L3] In a disjoint union, every clique lies in one side, while optimal
colourings of the two sides may reuse the same palette; therefore
$\omega(G\sqcup H)=\max\{\omega(G),\omega(H)\}$ and
$\chi(G\sqcup H)=\max\{\chi(G),\chi(H)\}$
([[def-clique-stable-set-and-numbers]],
[[def-proper-vertex-colouring-and-chromatic-number]]).

## Proof

**Proof technique:** direct.

1.1 Let $X\subseteq V_G\cup V_H$, and write $X_G:=X\cap V_G$ and $X_H:=X\cap V_H$. Since $G$ and $H$ are perfect, [L1] gives $\chi(G[X_G])=\omega(G[X_G])$ and $\chi(H[X_H])=\omega(H[X_H])$. [L1, given]

2.1 By [L2], the induced subgraph of $G\sqcup H$ on $X$ is $G[X_G]\sqcup H[X_H]$. Applying [L3] to that disjoint union and then using step 1.1 yields $\chi((G\sqcup H)[X])=\max\{\chi(G[X_G]),\chi(H[X_H])\}=\max\{\omega(G[X_G]),\omega(H[X_H])\}=\omega((G\sqcup H)[X]).$ [step 1.1, L2, L3]

3.1 Step 2.1 proves $\chi(K)=\omega(K)$ for every induced subgraph $K=(G\sqcup H)[X]$, so the disjoint union $G\sqcup H$ is perfect by [L1]. [step 2.1, L1] ∎

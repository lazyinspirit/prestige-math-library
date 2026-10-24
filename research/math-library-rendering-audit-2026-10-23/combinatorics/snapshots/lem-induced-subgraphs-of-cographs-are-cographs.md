---
id: lem-induced-subgraphs-of-cographs-are-cographs
kind: lemma
title: "Every induced subgraph of a cograph is a cograph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cograph-by-singletons-disjoint-union-and-complete-connection,
       def-complete-connection-of-two-disjoint-graphs,
       def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tero Harju, Lecture Notes on Combinatorial Structures in Graph Theory, Section 5.3"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Statement

If $G$ is a cograph and $X\subseteq V(G)$, then the induced subgraph $G[X]$ is
also a cograph.

## Facts & Assumptions

**Given:** A cograph $G$ and a subset $X\subseteq V(G)$.

[L1] A cograph is either null or is built from one-vertex graphs by finitely many disjoint unions and complete connections, and every cograph with at least two vertices has a last step of one of those two kinds ([[def-cograph-by-singletons-disjoint-union-and-complete-connection]]).

[L2] If $G_1=(V_1,E_1)$ and $G_2=(V_2,E_2)$ are vertex-disjoint, then for every $X\subseteq V_1\cup V_2$ the induced subgraph of their disjoint union on $X$ is the disjoint union of $G_1[X\cap V_1]$ and $G_2[X\cap V_2]$, while the induced subgraph of $G_1\nabla G_2$ on $X$ is $G_1[X\cap V_1]\nabla G_2[X\cap V_2]$ ([[def-complete-connection-of-two-disjoint-graphs]], [[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

## Proof

**Proof technique:** induction on a cograph construction of $G$.

1.1 We argue by induction on the recursive definition of cographs. If $G$ is the null graph or a one-vertex graph, then $G[X]$ is again the null graph or a one-vertex graph, so it is a cograph by [L1]. [given, L1, base]

1.2 Assume now that $G$ is nontrivial, and that the claim is already known for the two smaller cographs in the last construction step of $G$. By [L1], there exist vertex-disjoint smaller cographs $G_1$ and $G_2$ such that $G$ is either their disjoint union or their complete connection. Put $X_i:=X\cap V(G_i)$ for $i=1,2$. The induction hypothesis gives that $G_i[X_i]$ is a cograph for $i=1,2$. [L1, ih]

2.1 If $G$ is the disjoint union of $G_1$ and $G_2$, then [L2] gives $G[X]=G_1[X_1]\sqcup G_2[X_2]$, a disjoint union of cographs. If $G$ is $G_1\nabla G_2$, then [L2] gives $G[X]=G_1[X_1]\nabla G_2[X_2]$, a complete connection of cographs. In either case the recursive definition shows that $G[X]$ is a cograph. [step 1.2, L2]

3.1 Steps 1.1 and 2.1 complete the induction, so every induced subgraph of a cograph is a cograph. [step 1.1, step 2.1, discharge-induction] ∎

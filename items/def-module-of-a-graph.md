---
id: def-module-of-a-graph
kind: definition
title: "Modules of a graph, and the trivial modules"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-simple-graph, def-graph-adjacency-incidence-neighbourhood-and-degree, def-edges-between-sets-and-pure-mixed-pairs, def-subgraph-induced-subgraph-and-spanning-subgraph, def-finite-cardinality, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.3"
      url: "https://arxiv.org/pdf/0912.1457"
    - title: "T. Harju, Lecture Notes on Combinatorial Structures in Graph Theory, sec. 2"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a finite simple graph ([[def-finite-simple-graph]]). A vertex set
$M\subseteq V(G)$ is a **module** of $G$ when every vertex
$v\in V(G)\setminus M$ is adjacent to every vertex of $M$ or to no vertex of
$M$. Equivalently, the disjoint pair $(\{v\},M)$ is pure for every
$v\in V(G)\setminus M$ ([[def-edges-between-sets-and-pure-mixed-pairs]],
[[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

The condition constrains only the edges between $M$ and $V(G)\setminus M$: no
condition whatever is placed on the induced subgraph $G[M]$
([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

The **trivial modules** of $G$ are $\varnothing$, the singletons $\{v\}$ for
$v\in V(G)$, and $V(G)$ itself. Each of the three really is a module: for
$M=\varnothing$ every pair $(\{v\},\varnothing)$ is both complete and
anticomplete, hence pure; for $M=\{u\}$ the pair $(\{v\},\{u\})$ is complete
when $uv\in E(G)$ and anticomplete otherwise; and for $M=V(G)$ there is no
vertex outside $M$, so the condition is vacuous. A module that is not one of
these is **nontrivial**. Since $V(G)$ is finite, a module $M$ is nontrivial
exactly when $2\le|M|$ and $|M|\le|V(G)|-1$, the second bound because a subset
of a finite set has the full cardinality only if it is the whole set
([[def-finite-cardinality]], [[thm-subset-of-a-finite-set]]).

A module $M$ is **proper** when $M\ne V(G)$. Thus $\varnothing$ is a proper
module exactly when $V(G)\ne\varnothing$, every singleton of a graph with at
least two vertices is a proper module, and every nontrivial module is proper.

## Remarks

The word *module* is Habib and Paul's. The same object is called a *clan* by
Harju, a *closed set* by Gallai, and an *autonomous*, *partitive*, *externally
related* or *homogeneous* set elsewhere; the clash between the last of these and
the published meaning of *homogeneous set* is the subject of
[[rem-modules-and-the-word-homogeneous]].

---
id: def-clique-stable-set-and-numbers
kind: definition
title: "Cliques, stable sets, the clique number $\\omega(G)$ and stability number $\\alpha(G)$"
status: published
origin: session
deps: [def-finite-simple-graph, def-subgraph-induced-subgraph-and-spanning-subgraph, def-standard-complete-bipartite-path-and-cycle-graphs, def-finite-cardinality, cor-cardinality-of-the-power-set, thm-subset-of-a-finite-set, thm-well-ordering-principle]
justified_by: []
aliases: [independent set, independence number]
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://diestel-graph-theory.com/basic.html?level=1"
pipeline_run: null
---

## Definition

Let $G$ be a finite simple graph. A set $X\subseteq V(G)$ is a **clique** when every two distinct vertices of $X$ are adjacent, equivalently when $G[X]$ is complete. It is a **stable set**, or **independent set**, when no two distinct vertices of $X$ are adjacent, equivalently when $G[X]$ is edgeless ([[def-subgraph-induced-subgraph-and-spanning-subgraph]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

The **clique number** and **stability number** are

$$\omega(G):=\max\{|X|:X\text{ is a clique in }G\},\qquad \alpha(G):=\max\{|X|:X\text{ is a stable set in }G\}.$$

Both maxima exist because the families are nonempty, containing $\varnothing$, and lie inside the finite power set of $V(G)$ ([[def-finite-cardinality]], [[cor-cardinality-of-the-power-set]], [[thm-subset-of-a-finite-set]], [[thm-well-ordering-principle]]). In particular, $\omega(K_0)=\alpha(K_0)=0$.

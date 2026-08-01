---
id: def-induced-embedding-and-induced-copy
kind: definition
title: "Induced embeddings and induced copies of a graph"
status: published
origin: session
deps: [def-finite-simple-graph, def-subgraph-induced-subgraph-and-spanning-subgraph, def-graph-isomorphism-and-complement, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISGCI, Information System on Graph Classes and their Inclusions"
      url: "https://www.cs.sfu.ca/~pavol/graphclasses/"
pipeline_run: null
---

## Definition

Let $H$ and $G$ be finite simple graphs ([[def-finite-simple-graph]]). An **induced embedding** of $H$ in $G$ is an injection $\varphi:V(H)\to V(G)$ such that, for all distinct $x,y\in V(H)$,

$$xy\in E(H)\quad\Longleftrightarrow\quad \varphi(x)\varphi(y)\in E(G).$$

Thus $\varphi$ preserves both adjacency and nonadjacency ([[def-injection-surjection-bijection]]). Its image $G[\varphi(V(H))]$ is an **induced copy** of $H$ in $G$: the restricted map is an isomorphism from $H$ onto that induced subgraph ([[def-subgraph-induced-subgraph-and-spanning-subgraph]], [[def-graph-isomorphism-and-complement]]).

We say that $H$ is an **induced subgraph of $G$ up to isomorphism** when such an embedding exists.

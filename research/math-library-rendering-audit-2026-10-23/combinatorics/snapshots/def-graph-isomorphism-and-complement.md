---
id: def-graph-isomorphism-and-complement
kind: definition
title: "Graph isomorphisms, automorphisms and graph complements"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-simple-graph, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, Chapter 1 preview"
      url: "https://diestel-graph-theory.com/basic.html"
pipeline_run: null
---

## Definition

Let $G=(V,E)$ and $H=(W,F)$ be graphs. A **graph isomorphism** is a bijection
$\varphi:V\to W$ ([[def-injection-surjection-bijection]]) such that, for all
distinct $u,v\in V$,

$$\{u,v\}\in E\quad\Longleftrightarrow\quad\{\varphi(u),\varphi(v)\}\in F.$$

Graphs are **isomorphic**, written $G\cong H$, when such a map exists. An
**automorphism** of $G$ is an isomorphism from $G$ to itself.

The **complement** of $G$ is the graph

$$\overline G:=(V,[V]^2\setminus E).$$

Thus exactly one of $G$ and $\overline G$ contains any given pair of distinct
vertices as an edge, and $\overline{\overline G}=G$.

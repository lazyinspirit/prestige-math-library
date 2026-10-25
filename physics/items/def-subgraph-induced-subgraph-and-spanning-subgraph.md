---
id: def-subgraph-induced-subgraph-and-spanning-subgraph
kind: definition
title: "Subgraphs, induced subgraphs and spanning subgraphs"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-simple-graph]
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

Let $G=(V,E)$ be a graph. A graph $H=(W,F)$ is a **subgraph** of $G$ when
$W\subseteq V$ and $F\subseteq E\cap[W]^2$.

For $W\subseteq V$, the **subgraph induced by $W$** is

$$G[W]:=(W,\ E\cap[W]^2).$$

Thus it retains every edge of $G$ whose two endpoints lie in $W$. A subgraph
$H=(W,F)$ is **induced** when $H=G[W]$, and it is **spanning** when $W=V$.
These constructions remain finite simple graphs by
[[def-finite-simple-graph]].

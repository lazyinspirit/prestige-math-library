---
id: def-bipartite-graph
kind: definition
title: "A bipartite graph and a proper two-colouring of its vertices"
status: published
origin: session
deps: [def-finite-simple-graph]
justified_by: []
aliases: []
landmark: true
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

A graph $G=(V,E)$ is **bipartite** when there are disjoint subsets $A,B\subseteq
V$ with $V=A\cup B$ such that every edge has one endpoint in $A$ and the other
in $B$. The ordered pair $(A,B)$ is a **bipartition**.

Equivalently, a **proper two-colouring** is a map $c:V\to\{0,1\}$ satisfying
$c(u)\ne c(v)$ whenever $\{u,v\}\in E$: take $A=c^{-1}[\{0\}]$ and
$B=c^{-1}[\{1\}]$, or define $c$ from a bipartition. Either part may be empty,
so every edgeless graph, including the null graph, is bipartite.

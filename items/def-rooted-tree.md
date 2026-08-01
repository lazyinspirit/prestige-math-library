---
id: def-rooted-tree
kind: definition
title: "Rooted trees, ancestors, descendants, depth, height, parents and children"
status: published
origin: session
deps: [def-tree-forest-and-leaf, thm-tree-characterisations, def-graph-distance-and-girth]
justified_by: []
aliases: []
landmark: false
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

A **rooted tree** is a pair $(T,r)$ consisting of a tree $T$ and a distinguished vertex $r$, the **root** ([[def-tree-forest-and-leaf]]). The unique $r$-$v$ path is the **root path** of $v$ ([[thm-tree-characterisations]]).

The **depth** of $v$ is $d_T(r,v)$, and the **height** of $(T,r)$ is the maximum vertex depth ([[def-graph-distance-and-girth]]). A vertex $u$ is an **ancestor** of $v$, and $v$ a **descendant** of $u$, when $u$ lies on the root path of $v$. If $v\ne r$, the neighbour of $v$ immediately preceding it on its root path is its **parent**; the vertices having parent $v$ are the **children** of $v$.

The vertices of depth $k$ form **level $k$**. The root has depth zero and is its own ancestor, but it has no parent.

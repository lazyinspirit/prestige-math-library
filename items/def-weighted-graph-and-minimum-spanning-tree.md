---
id: def-weighted-graph-and-minimum-spanning-tree
kind: definition
title: "Real edge-weighted graphs, total tree weight and minimum spanning trees"
status: published
origin: session
deps: [def-spanning-tree, def-sum-over-a-finite-index-set, thm-reals-ordered-field, lem-spanning-tree-set-is-finite, thm-connected-iff-has-spanning-tree, lem-finite-set-has-max]
justified_by: []
aliases: [MST]
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "P. T. Wood, Graph Theory lecture notes, Minimum spanning trees"
      url: "https://ptwiddle.github.io/MAS341-Graph-Theory-2017/lecturenotes/lecture8.html"
pipeline_run: null
---

## Definition

A **real edge-weighted graph** is a pair $(G,w)$, where $G$ is a finite graph and $w:E(G)\to\mathbb R$. For a spanning tree $T$ of $G$, its **total weight** is

$$w(T):=\sum_{e\in E(T)}w(e)$$

([[def-spanning-tree]], [[def-sum-over-a-finite-index-set]], [[thm-reals-ordered-field]]). A **minimum spanning tree**, or **MST**, is a spanning tree $T$ satisfying $w(T)\le w(S)$ for every spanning tree $S$ of $G$.

If $G$ is connected, an MST exists: connectedness supplies a spanning tree, and the set of spanning trees is finite, so the finite nonempty set of their real weights has a least element. This is the order-dual form of the finite-set maximum principle ([[thm-connected-iff-has-spanning-tree]], [[lem-spanning-tree-set-is-finite]], [[lem-finite-set-has-max]]). If $G$ is disconnected, it has no spanning tree and hence no MST.

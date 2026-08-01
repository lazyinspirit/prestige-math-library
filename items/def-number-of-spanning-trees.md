---
id: def-number-of-spanning-trees
kind: definition
title: "The spanning-tree number $\\tau(G)$"
status: published
origin: session
deps: [lem-spanning-tree-set-is-finite, def-finite-cardinality]
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

For a finite graph $G$, its **spanning-tree number** is

$$\tau(G):=|\{T:T\text{ is a spanning tree of }G\}|.$$

This is a natural number because the displayed set is finite ([[lem-spanning-tree-set-is-finite]], [[def-finite-cardinality]]). In particular, $\tau(G)=0$ exactly when $G$ has no spanning tree.

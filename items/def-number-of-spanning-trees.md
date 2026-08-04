---
id: def-number-of-spanning-trees
kind: definition
title: "The spanning-tree number $\\tau(G)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
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
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf"
    - title: "ISI Bangalore discrete mathematics notes, Trees and Cayley’s theorem"
      url: "https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch4.S1.html"
pipeline_run: null
---

## Definition

For a finite graph $G$, its **spanning-tree number** is

$$\tau(G):=|\{T:T\text{ is a spanning tree of }G\}|.$$

This is a natural number because the displayed set is finite ([[lem-spanning-tree-set-is-finite]], [[def-finite-cardinality]]). In particular, $\tau(G)=0$ exactly when $G$ has no spanning tree.

---
id: def-kempe-chain
kind: definition
title: "Kempe chains as connected components induced by two colour classes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-proper-vertex-colouring-and-chromatic-number, def-subgraph-induced-subgraph-and-spanning-subgraph, def-connected-graph-and-connected-component]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 5.1.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch5.pdf"
pipeline_run: null
---

## Definition

Let $c$ be a proper vertex colouring of a graph $G$ ([[def-proper-vertex-colouring-and-chromatic-number]]) and let $a\ne b$ be colours. The **$a$-$b$ Kempe subgraph** is the subgraph induced by the vertices whose colours lie in $\{a,b\}$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]). An **$a$-$b$ Kempe chain** is a connected component of this induced subgraph ([[def-connected-graph-and-connected-component]]).

The word chain denotes a connected component, not necessarily a graph-theoretic path. A path inside a Kempe chain alternates colours because the ambient colouring is proper.


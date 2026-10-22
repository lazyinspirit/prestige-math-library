---
id: rem-finite-simple-graph-convention
kind: remark
title: "Unless stated otherwise, graph means finite, simple and undirected; orders, sizes and empty-set conventions are fixed here"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-simple-graph, def-finite-cardinality]
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

For a graph $G=(V,E)$ ([[def-finite-simple-graph]]), its **order** is $|V|$ and
its **size** is $|E|$ ([[def-finite-cardinality]]). The **null graph** has
$V=\varnothing$ and $E=\varnothing$. An **edgeless graph** has $E=\varnothing$
but may have vertices. Thus the null graph is the unique graph with no vertices,
while an edgeless graph need not be null.

All sums indexed by $V$ or $E$ use their ordinary empty values. A minimum or
maximum taken over the vertex set is used only when $V\ne\varnothing$; in
particular, minimum and maximum degree are not assigned values for the null
graph. Connectivity conventions for the null graph and the one-vertex graph are
stated with the definition of connectivity.

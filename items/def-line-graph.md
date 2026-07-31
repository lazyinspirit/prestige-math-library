---
id: def-line-graph
kind: definition
title: "The line graph whose vertices are the edges of the original graph and whose adjacency records a shared endpoint"
status: published
origin: session
deps: [def-finite-simple-graph, def-graph-adjacency-incidence-neighbourhood-and-degree]
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

For a graph $G=(V,E)$, its **line graph** $L(G)$ has vertex set $E$. Distinct
vertices $e,f\in E$ are adjacent in $L(G)$ exactly when the edges $e$ and $f$ of
$G$ share an endpoint, that is, when $e\cap f\ne\varnothing$.

Because $E$ is finite and adjacency is recorded as a set of two-element subsets
of $E$, the line graph is again a finite simple graph
([[def-finite-simple-graph]]). Incidence in $G$ has become adjacency in $L(G)$.

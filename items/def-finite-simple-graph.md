---
id: def-finite-simple-graph
kind: definition
title: "A finite simple graph is a finite vertex set together with a set of two-element vertex subsets"
status: published
origin: session
deps: [def-finite-cardinality]
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

A **finite simple graph** is an ordered pair $G=(V,E)$ in which $V$ is a finite
set and

$$E\subseteq [V]^2:=\{\,\{u,v\}\subseteq V: u\ne v\,\}.$$

The elements of $V=V(G)$ are the **vertices** and the elements of $E=E(G)$ are
the **edges**. Thus every edge has two distinct endpoints, there are no loops,
and an unordered pair of vertices occurs as at most one edge. Finiteness and the
notation $|V|$ and $|E|$ are those of [[def-finite-cardinality]].

When no qualifier is present, the word **graph** has this meaning.

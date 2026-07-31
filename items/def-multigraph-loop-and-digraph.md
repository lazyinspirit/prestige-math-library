---
id: def-multigraph-loop-and-digraph
kind: definition
title: "Multigraphs, loops and directed graphs as variants distinct from the default finite simple graph"
status: published
origin: session
deps: [def-finite-simple-graph, rem-finite-simple-graph-convention]
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

A **finite undirected multigraph** consists of a finite vertex set $V$, a finite
edge set $M$, and an endpoint map assigning to each $e\in M$ either a singleton
$\{v\}$ or a two-element subset $\{u,v\}$ of $V$. An edge assigned $\{v\}$ is a
**loop** at $v$. Distinct members of $M$ assigned the same endpoint set are
**parallel edges**.

A **finite directed graph**, or **digraph**, consists of a finite vertex set $V$
and a set $A\subseteq V\times V$ of **arcs**. An arc $(u,v)$ is directed from
$u$ to $v$; an arc $(v,v)$ is a directed loop.

These objects are variants, not instances of the default graph convention in
[[def-finite-simple-graph]] and [[rem-finite-simple-graph-convention]]. A theorem
stated merely for a graph therefore neither permits loops or parallel edges nor
supplies directions to its edges.

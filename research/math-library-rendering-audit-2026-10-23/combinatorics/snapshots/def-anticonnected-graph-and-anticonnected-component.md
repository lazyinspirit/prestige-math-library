---
id: def-anticonnected-graph-and-anticonnected-component
kind: definition
title: "Anticonnected graphs and anticonnected components"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-connected-graph-and-connected-component, def-graph-isomorphism-and-complement, def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: [co-connected graph, anticomponent]
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
pipeline_run: null
---

## Definition

A graph $G$ is **anticonnected**, or **co-connected**, when its complement $\overline G$ is connected ([[def-connected-graph-and-connected-component]], [[def-graph-isomorphism-and-complement]]).

An **anticonnected component**, or **anticomponent**, of $G$ is a vertex set $A\subseteq V(G)$ that is the vertex set of a connected component of $\overline G$. Equivalently, $G[A]$ is anticonnected and $A$ is inclusion-maximal with that property ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

Under the library convention, the null graph is not anticonnected, while a one-vertex graph is anticonnected.

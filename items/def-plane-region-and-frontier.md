---
id: def-plane-region-and-frontier
kind: definition
title: "Regions of the complement of a planar set and their frontiers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-connected-component-and-quasicomponent, def-interior-closure-boundary-top, def-subspace-topology-top, lem-metrics-on-rn]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 4, Section 4.1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Definition

Let $A\subseteq\mathbb R^2$, with the usual metric topology from [[lem-metrics-on-rn]]. A **region of the complement of $A$** is a connected component of the subspace $\mathbb R^2\setminus A$ ([[def-connected-component-and-quasicomponent]], [[def-subspace-topology-top]]).

The **frontier** of a subset $U\subseteq\mathbb R^2$ is

$$\operatorname{Fr}(U):=\overline U\cap\overline{\mathbb R^2\setminus U},$$

equivalently the set of points every open ball about which meets both $U$ and its complement, as in [[def-interior-closure-boundary-top]]. A region may be bounded or unbounded; these words concern the subset of the metric plane, not the combinatorial graph drawn in it.


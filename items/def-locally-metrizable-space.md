---
id: def-locally-metrizable-space
kind: definition
title: "A locally metrizable space: every point has a metrizable open neighbourhood"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-top, def-subspace-topology-top, def-metrizable-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "R. Engelking, General Topology, metrization theorems"
      url: "https://encyclopediaofmath.org/wiki/Metrizable_space"
pipeline_run: null
---

## Definition

A topological space $X$ is **locally metrizable** if every $x\in X$ belongs to an open set $U\subseteq X$ whose subspace topology ([[def-subspace-topology-top]]) is metrizable ([[def-metrizable-space]]). Thus $U$ is an open neighbourhood of $x$ in the convention of [[def-neighbourhood-top]]; no global metric on $X$ is part of the definition.

---
id: def-petersen-graph
kind: definition
title: "The Petersen graph on the two-element subsets of a five-element set, adjacent when disjoint"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-simple-graph, thm-two-element-subsets-count]
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

Fix a five-element set $\Omega$. The **Petersen graph** has vertex set
$[\Omega]^2$, the set of two-element subsets of $\Omega$, and edge set

$$\{\,\{A,B\}\subseteq [\Omega]^2:|\{A,B\}|=2\text{ and }A\cap B=\varnothing\,\}.$$

In words, two vertices are adjacent exactly when the corresponding two-element
subsets are disjoint. This is a finite simple graph, and its vertex set has
$\binom52=10$ elements by [[thm-two-element-subsets-count]]. The definition is
independent of the names assigned to the five elements, because a relabelling
preserves disjointness.

---
id: def-complete-bipartite-decomposition-of-a-graph
kind: definition
title: "A decomposition of a graph's edge set into complete bipartite subgraphs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-standard-complete-bipartite-path-and-cycle-graphs, def-bipartite-graph, def-subgraph-induced-subgraph-and-spanning-subgraph, def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "O. Pikhurko, An Introduction to Combinatorics, §3.2"
      url: "https://people.maths.ox.ac.uk/keevash/eac/notes.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a finite simple graph. A **complete bipartite decomposition** of $G$
is a list

$$((X_1,Y_1),\dots,(X_m,Y_m))$$

of pairs of disjoint nonempty subsets of $V(G)$ such that:

1. for each $k$, every pair $\{x,y\}$ with $x\in X_k$ and $y\in Y_k$ is an edge
   of $G$; and
2. every edge of $G$ lies in exactly one of those complete bipartite edge sets.

So the decomposition is of the **edge set** of $G$, not of its vertex set. The
unions $X_k\cup Y_k$ need not cover all vertices.

## Remarks

- The phrase "exactly one" is the key point: the Graham-Pollak argument counts
  edges through those parts and needs a genuine partition of the edge set.

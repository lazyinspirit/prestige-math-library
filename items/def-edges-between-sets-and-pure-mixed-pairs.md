---
id: def-edges-between-sets-and-pure-mixed-pairs
kind: definition
title: "Edges between disjoint vertex sets; complete, anticomplete, pure and mixed pairs"
status: published
origin: session
deps: [def-finite-simple-graph, def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The structure of bull-free graphs"
      url: "https://web.math.princeton.edu/~mchudnov/bullsurvey.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a finite simple graph and let $A,B\subseteq V(G)$ be disjoint. An **edge between $A$ and $B$** is an edge $ab$ with $a\in A$ and $b\in B$.

The pair $(A,B)$ is:

- **complete** when every $a\in A$ is adjacent to every $b\in B$;
- **anticomplete** when no $a\in A$ is adjacent to any $b\in B$;
- **pure** when it is complete or anticomplete; and
- **mixed** when it is neither complete nor anticomplete.

Adjacency is the symmetric edge relation of $G$ ([[def-finite-simple-graph]], [[def-graph-adjacency-incidence-neighbourhood-and-degree]]). If $A=\varnothing$ or $B=\varnothing$, the pair is both complete and anticomplete, hence pure and not mixed.

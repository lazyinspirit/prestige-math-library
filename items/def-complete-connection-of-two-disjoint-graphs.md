---
id: def-complete-connection-of-two-disjoint-graphs
kind: definition
title: "The complete connection of two disjoint graphs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph,
       def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Tero Harju, Lecture Notes on Combinatorial Structures in Graph Theory, Exercise 5.2"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Definition

Let $G=(V,E)$ and $H=(W,F)$ be finite simple graphs with $V\cap W=\varnothing$.
The **complete connection** of $G$ and $H$ is the graph

$$G\nabla H:=(V\cup W,\ E\cup F\cup\{\{v,w\}:v\in V,\ w\in W\}).$$

Thus $G\nabla H$ contains $G$ and $H$ on their own vertex sets and adds every
possible edge between the two sides. When $X\subseteq V$ and $Y\subseteq W$,
the induced subgraph on $X\cup Y$ is exactly $G[X]\nabla H[Y]$
([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

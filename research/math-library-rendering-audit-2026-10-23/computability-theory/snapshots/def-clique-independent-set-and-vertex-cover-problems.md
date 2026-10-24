---
id: def-clique-independent-set-and-vertex-cover-problems
kind: definition
title: "Clique, independent set, and vertex cover decision problems"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-graph-adjacency-incidence-neighbourhood-and-degree]
sources:
  scraped: []
  references:
    - title: "Fabrizio Iozzi and Luca Trevisan, Handout NP3"
      url: "https://lucatrevisan.github.io/30540/notes-np3.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $G=(V,E)$ be a finite simple graph.

- A subset $K\subseteq V$ is a **clique** when every two distinct vertices of
  $K$ are adjacent.
- A subset $I\subseteq V$ is an **independent set** when no two distinct
  vertices of $I$ are adjacent.
- A subset $C\subseteq V$ is a **vertex cover** when every edge in $E$ has at
  least one endpoint in $C$.

The associated decision problems are:

- **CLIQUE**: given $(G,k)$ with $k\in\mathbb{N}$, decide whether $G$ has a
  clique of size at least $k$;
- **INDEPENDENT SET**: given $(G,k)$, decide whether $G$ has an independent set
  of size at least $k$;
- **VERTEX COVER**: given $(G,k)$, decide whether $G$ has a vertex cover of
  size at most $k$.

Because the input graph is simple, adjacency means the edge relation from
[[def-graph-adjacency-incidence-neighbourhood-and-degree]] on the vertex set of
[[def-finite-simple-graph]].

---
id: def-graph-distance-and-girth
kind: definition
title: "Graph distance within a component, eccentricity, diameter and girth, including the acyclic convention"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-graph-walk-trail-path-and-cycle, def-connected-graph-and-connected-component, def-finite-cardinality]
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

Let $u$ and $v$ lie in the same connected component of a graph $G$. Their
**distance** is

$$d_G(u,v):=\min\{\,\ell\in\mathbb N:\text{some path from }u\text{ to }v\text{ has length }\ell\,\}.$$

The set being minimized is nonempty by connectivity and finite because a path
has no repeated vertex and $V(G)$ is finite ([[def-finite-cardinality]]). No
ordinary natural-number distance is assigned to vertices in different
components.

For a vertex $v$, its **eccentricity** is the maximum of $d_G(v,u)$ over the
vertices $u$ in its component. The **diameter** of a connected graph is the
maximum of $d_G(u,v)$ over all pairs of its vertices. Thus every component has
its own diameter, while a disconnected graph has no single graph diameter under
this convention.

The **girth** $g(G)$ is the minimum length of a cycle in $G$. If $G$ is acyclic,
set $g(G)=\infty$ by convention. This symbol records absence of a cycle and is
not a distance between vertices.

---
id: def-vertex-and-edge-covers-and-covering-numbers
kind: definition
title: "Vertex covers, edge covers and the covering numbers $\\tau(G)$ and $\\rho(G)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "M. Goemans, Lecture notes on bipartite matching"
      url: "https://math.mit.edu/~goemans/18433S07/matching-notes.pdf"
pipeline_run: null
---

## Definition

For a finite simple graph $G=(V,E)$, a **vertex cover** is a set $C\subseteq V$
such that every edge has an endpoint in $C$; its least possible size is
$$\tau(G):=\min\{\lvert C\rvert:C\text{ is a vertex cover of }G\}.$$
An **edge cover** is a set $F\subseteq E$ such that every vertex is incident
with an edge of $F$; if $G$ has no isolated vertices, its least possible size is
$$\rho(G):=\min\{\lvert F\rvert:F\text{ is an edge cover of }G\}.$$
Both extrema exist whenever their displayed families are nonempty, since $V$
and $E$ are finite. An isolated vertex prevents every edge cover.

---
id: def-vertex-and-edge-connectivity
kind: definition
title: "Vertex cuts, edge cuts, vertex connectivity $\\kappa(G)$ and edge connectivity $\\lambda(G)$, with conventions for complete and one-vertex graphs"
status: published
origin: session
deps: [def-connected-graph-and-connected-component, def-graph-deletion-contraction-minor-and-subdivision, def-standard-complete-bipartite-path-and-cycle-graphs, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Wolfram MathWorld, Vertex Connectivity"
      url: "https://mathworld.wolfram.com/VertexConnectivity.html"
pipeline_run: null
---

## Definition

Let $G=(V,E)$ be connected with $n=|V|\ge2$. A **vertex cut** is a set
$S\subseteq V$ for which $G-S$ is disconnected or has at most one vertex. An
**edge cut** is a set $F\subseteq E$ for which $G-F$ is disconnected. The
**vertex connectivity** and **edge connectivity** are

$$\kappa(G):=\min\{\,|S|:S\text{ is a vertex cut}\,\},\qquad\lambda(G):=\min\{\,|F|:F\text{ is an edge cut}\,\}.$$

The finite families being minimized are nonempty: deleting all but one vertex
is a vertex cut, and deleting all edges is an edge cut. For the complete graph
$K_n$, no deletion leaving at least two vertices disconnects it, so the first
definition gives the standard exceptional convention $\kappa(K_n)=n-1$.

For the one-vertex graph $K_1$, set $\kappa(K_1)=\lambda(K_1)=0$. The null graph
and every disconnected graph are outside the domain of these two connectivity
parameters under this convention. Thus the inequalities involving
$\delta(G)$ are stated only for nontrivial connected graphs, where the vertex
set is nonempty and $\delta(G)$ is defined.

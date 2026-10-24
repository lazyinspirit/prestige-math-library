---
id: lem-edge-connectivity-at-most-minimum-degree
kind: lemma
title: "For every nontrivial connected graph, $\\lambda(G)\\le\\delta(G)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-vertex-and-edge-connectivity, def-graph-adjacency-incidence-neighbourhood-and-degree]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Wolfram MathWorld, Vertex Connectivity"
      url: "https://mathworld.wolfram.com/VertexConnectivity.html"
pipeline_run: null
---

## Statement

For every connected finite simple graph $G$ with at least two vertices,
$\lambda(G)\le\delta(G)$.

## Facts & Assumptions

**Given:** A connected graph $G=(V,E)$ with $|V|\ge2$.

[F1] $\lambda(G)$ is the minimum size of an edge set whose deletion disconnects $G$ ([[def-vertex-and-edge-connectivity]]).

[F2] A vertex $v$ of minimum degree has exactly $\delta(G)$ incident edges ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## Proof

**Proof technique:** direct.

1.1 Choose a vertex $v$ with $\deg_G(v)=\delta(G)$ and let $F$ be the set of all edges incident with $v$. Then $|F|=\delta(G)$. [given, F2, choose]

2.1 In $G-F$, the vertex $v$ is isolated while at least one other vertex remains, so $G-F$ is disconnected. Thus $F$ is an edge cut. [step 1.1, F1]

3.1 Minimality in [F1] gives $\lambda(G)\le|F|=\delta(G)$. [step 1.1, step 2.1, F1] ∎

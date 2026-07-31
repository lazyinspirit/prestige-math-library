---
id: cex-strict-whitney-connectivity-inequalities
kind: counterexample
title: "Two dense lobes meeting at one cut vertex give $\\kappa(G)=1<\\lambda(G)=2<\\delta(G)=3$"
status: published
origin: session
deps: [fs-vertex-and-edge-connectivity-always-agree, def-vertex-and-edge-connectivity, def-graph-adjacency-incidence-neighbourhood-and-degree]
aliases: []
landmark: true
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

## Statement refuted

The false statement [[fs-vertex-and-edge-connectivity-always-agree]] claims that
vertex connectivity, edge connectivity and minimum degree always agree.

## Facts & Assumptions

**Given:** For $i=1,2$, take vertices $a_i,b_i,c_i,d_i$ spanning $K_4$ with the edge $a_ib_i$ deleted. Add one vertex $v$, add the edges $va_i,vb_i$ for both $i$, and add no edge between the two four-vertex lobes.

[F1] $\kappa$ and $\lambda$ are the least sizes of vertex and edge cuts ([[def-vertex-and-edge-connectivity]]).

[F2] $\delta(G)$ is the least vertex degree ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## Counterexample

**Proof technique:** direct.

1.1 The graph is connected, and deleting $v$ separates the two lobes. No deletion of zero vertices disconnects a connected graph, so $\kappa(G)=1$. [given, F1]

1.2 In each lobe, $a_i$ and $b_i$ have two neighbours inside the lobe and the neighbour $v$, so degree $3$; $c_i,d_i$ have degree $3$ inside the lobe; and $v$ has degree $4$. Hence $\delta(G)=3$. [given, F2]

1.3 Deleting $va_1$ and $vb_1$ separates the first lobe from the rest, so $\lambda(G)\le2$. [given, F1]

1.4 Every edge lies on a cycle. The edges $va_i$ and $vb_i$ lie on the $4$-cycle $v,a_i,c_i,b_i,v$. Each internal edge incident with $a_i$ lies on the triangle $a_i,c_i,d_i,a_i$, and each internal edge incident with $b_i$ lies on $b_i,c_i,d_i,b_i$. Thus deleting one edge leaves an alternate path between its endpoints and cannot disconnect the graph, so $\lambda(G)\ge2$. [given, F1]

2.1 Steps 1.3 and 1.4 give $\lambda(G)=2$. Together with steps 1.1 and 1.2, this proves $\kappa(G)=1<\lambda(G)=2<\delta(G)=3$ and refutes equality in both Whitney inequalities. [step 1.1, step 1.2, step 1.3, step 1.4] ∎

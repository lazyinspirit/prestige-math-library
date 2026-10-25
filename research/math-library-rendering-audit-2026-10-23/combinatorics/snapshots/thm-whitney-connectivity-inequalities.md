---
id: thm-whitney-connectivity-inequalities
kind: theorem
title: "Whitney's inequalities: $\\kappa(G)\\le\\lambda(G)\\le\\delta(G)$ for every nontrivial connected graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-edge-connectivity-at-most-minimum-degree, lem-vertex-connectivity-at-most-edge-connectivity]
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

## Statement

For every connected finite simple graph $G$ with at least two vertices,

$$\kappa(G)\le\lambda(G)\le\delta(G).$$

This includes complete graphs under the convention
$\kappa(K_n)=n-1$: for $K_n$ with $n\ge2$, all three quantities equal $n-1$.

## Facts & Assumptions

**Given:** A connected finite simple graph $G$ with at least two vertices.

[L1] $\kappa(G)\le\lambda(G)$ for every nontrivial connected graph ([[lem-vertex-connectivity-at-most-edge-connectivity]]).

[L2] $\lambda(G)\le\delta(G)$ for every nontrivial connected graph ([[lem-edge-connectivity-at-most-minimum-degree]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L1] and [L2] to $G$ gives $\kappa(G)\le\lambda(G)\le\delta(G)$. [L1, L2]

2.1 For $K_n$, deleting fewer than $n-1$ vertices leaves a nonempty complete graph and deleting $n-1$ leaves one vertex, so $\kappa(K_n)=n-1$; every vertex has degree $n-1$, and deleting all $n-1$ edges incident with one vertex is an edge cut, while any smaller edge deletion leaves every pair joined through a remaining direct edge or a two-edge path. Hence $\lambda(K_n)=\delta(K_n)=n-1$, as stated. [L1, L2, algebra] ∎

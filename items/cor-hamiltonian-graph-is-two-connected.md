---
id: cor-hamiltonian-graph-is-two-connected
kind: corollary
title: "Every Hamiltonian graph on at least three vertices is $2$-connected"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-hamilton-cycle-vertex-deletion-bound, def-vertex-and-edge-connectivity, def-hamilton-path-cycle-and-hamilton-connected]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Eulerian and Hamiltonian Graphs"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-Hamilton.html"
pipeline_run: null
---

## Statement

Every Hamiltonian finite simple graph $G$ with $|V(G)|\ge3$ satisfies
$\kappa(G)\ge2$; equivalently, it is $2$-connected.

## Facts & Assumptions

**Given:** A Hamiltonian graph $G$ on at least three vertices.

[F1] A Hamiltonian graph has a cycle containing all its vertices and is connected ([[def-hamilton-path-cycle-and-hamilton-connected]]).

[L1] Deleting any nonempty proper vertex set $S$ from a Hamiltonian graph leaves at most $|S|$ components ([[thm-hamilton-cycle-vertex-deletion-bound]]).

[F2] A vertex cut disconnects the graph or leaves at most one vertex, and $\kappa(G)$ is the minimum size of a vertex cut ([[def-vertex-and-edge-connectivity]]).

## Proof

**Proof technique:** direct.

1.1 The graph $G$ is connected by [F1]. For any vertex $v$, the set $\{v\}$ is nonempty and proper, and $G-v$ has at least two vertices. By [L1], it has at most one connected component, hence it is connected. [given, F1, L1]

2.1 Thus neither the empty set nor a singleton is a vertex cut: deleting nothing preserves connectedness, and deleting one vertex leaves a connected graph with at least two vertices. [step 1.1, F2]

3.1 Every vertex cut therefore has size at least two, so $\kappa(G)\ge2$ by [F2]. [step 2.1, F2] ∎

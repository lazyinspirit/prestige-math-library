---
id: cex-dirac-threshold-sharp
kind: counterexample
title: "Two disjoint copies of $K_m$ show that Dirac's bound cannot be lowered to $n/2-1$ for even $n=2m\\ge4$"
status: published
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [cor-diracs-hamiltonicity-theorem, def-standard-complete-bipartite-path-and-cycle-graphs, def-connected-graph-and-connected-component, def-graph-adjacency-incidence-neighbourhood-and-degree, def-hamilton-path-cycle-and-hamilton-connected]
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

## Statement refuted

For even $n\ge4$, every $n$-vertex graph with
$\delta(G)\ge n/2-1$ is Hamiltonian.

## Counterexample

For $m\ge2$, let $G$ be the disjoint union of two copies of $K_m$. Then
$n=2m$ and $\delta(G)=m-1=n/2-1$, but $G$ is not Hamiltonian.

## Facts & Assumptions

**Given:** An integer $m\ge2$ and two vertex-disjoint copies of $K_m$ with no edge between them.

[F1] Every vertex of $K_m$ is adjacent to the other $m-1$ vertices ([[def-standard-complete-bipartite-path-and-cycle-graphs]], [[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[F2] A Hamiltonian graph has a spanning cycle and is connected ([[def-hamilton-path-cycle-and-hamilton-connected]], [[def-connected-graph-and-connected-component]]).

[L1] Dirac's theorem uses the stronger threshold $\delta(G)\ge n/2$ ([[cor-diracs-hamiltonicity-theorem]]).

## Verification

**Proof technique:** direct.

1.1 The graph has $n=2m$ vertices. Every vertex has precisely the other $m-1$ vertices in its own copy as neighbours, so $\delta(G)=m-1=n/2-1$. [given, F1, algebra]

1.2 The two copies are distinct connected components because no edge joins them. Hence $G$ is disconnected and cannot be Hamiltonian by [F2]. [given, F2]

1.3 At the endpoint $m=2$, the construction is two disjoint edges on four vertices, with minimum degree $1=4/2-1$, so the same failure occurs. [given, algebra]

2.1 Thus lowering the threshold in [L1] by one for even order would make the theorem false. [step 1.1, step 1.2, step 1.3, L1] ∎

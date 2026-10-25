---
id: cex-hamiltonian-not-eulerian
kind: counterexample
title: "$K_4$ is Hamiltonian but has no Euler circuit"
status: published
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-hamilton-path-cycle-and-hamilton-connected, thm-eulers-euler-circuit-characterisation, def-standard-complete-bipartite-path-and-cycle-graphs, def-graph-adjacency-incidence-neighbourhood-and-degree, def-multigraph-loop-and-digraph]
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

Every Hamiltonian finite simple graph has an Euler circuit.

```tikz
\begin{tikzpicture}[scale=1.0]
  \node[circle,draw,inner sep=2.5pt] (v1) at (0,1.8) {$1$};
  \node[circle,draw,inner sep=2.5pt] (v2) at (1.8,1.8) {$2$};
  \node[circle,draw,inner sep=2.5pt] (v3) at (1.8,0) {$3$};
  \node[circle,draw,inner sep=2.5pt] (v4) at (0,0) {$4$};
  \draw (v1)--(v3);
  \draw (v2)--(v4);
  \draw[very thick] (v1)--(v2)--(v3)--(v4)--(v1);
\end{tikzpicture}
```

## Counterexample

The complete graph $K_4$ has a Hamilton cycle but no Euler circuit.

## Facts & Assumptions

**Given:** The complete graph $K_4$ on vertices $1,2,3,4$.

[F1] A complete graph contains every edge between distinct vertices ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A Hamilton cycle visits every vertex exactly once before returning to its start ([[def-hamilton-path-cycle-and-hamilton-connected]]).

[F3] Degree is the number of neighbours ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[F4] A finite simple graph can be regarded as the multigraph with the same vertex and edge sets and the evident endpoint map ([[def-multigraph-loop-and-digraph]]).

[L1] A connected finite multigraph has an Euler circuit exactly when every degree is even ([[thm-eulers-euler-circuit-characterisation]]).

## Verification

**Proof technique:** direct.

1.1 By completeness, $1,2,3,4,1$ is a cycle through all four vertices, so $K_4$ is Hamiltonian. [F1, F2]

1.2 Every vertex is adjacent to the other three, so every degree is three. Regard $K_4$ as the corresponding multigraph from [F4]. It is connected, but its degrees are odd; [L1] therefore rules out an Euler circuit. [F1, F3, F4, L1, algebra]

2.1 Hence Hamiltonicity does not imply existence of an Euler circuit. [step 1.1, step 1.2] ∎

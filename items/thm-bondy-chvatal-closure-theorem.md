---
id: thm-bondy-chvatal-closure-theorem
kind: theorem
title: "A graph is Hamiltonian if and only if its Bondy-Chvatal closure is Hamiltonian"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-bondy-chvatal-edge-addition, def-bondy-chvatal-closure, lem-bondy-chvatal-closure-well-defined, def-hamilton-path-cycle-and-hamilton-connected]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Eulerian and Hamiltonian Graphs"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-Hamilton.html"
pipeline_run: null
---

## Statement

A finite simple graph $G$ is Hamiltonian if and only if its Bondy-Chvatal
closure $\operatorname{cl}(G)$ is Hamiltonian.

## Facts & Assumptions

**Given:** A finite simple graph $G$.

[L1] Adding an eligible nonedge preserves Hamiltonicity in both directions ([[lem-bondy-chvatal-edge-addition]]).

[F1] The closure is obtained by a finite sequence of eligible edge additions ([[def-bondy-chvatal-closure]]).

[L2] The terminal closure is independent of the chosen eligible-addition order ([[lem-bondy-chvatal-closure-well-defined]]).

[F2] Hamiltonian means possessing a Hamilton cycle ([[def-hamilton-path-cycle-and-hamilton-connected]]).

## Proof

**Proof technique:** direct.

1.1 Along any sequence from $G$ to $\operatorname{cl}(G)$, [L1] says after each added edge that the graph before the addition is Hamiltonian exactly when the graph after it is Hamiltonian. [L1, F1, F2]

2.1 The sequence is finite, and [L2] identifies its terminal graph with the well-defined closure. Chaining the biconditionals from step 1.1 gives $G$ Hamiltonian if and only if $\operatorname{cl}(G)$ is Hamiltonian. [step 1.1, F1, L2] ∎

---
id: cex-hamilton-path-not-hamilton-cycle
kind: counterexample
title: "$P_3$ has a Hamilton path but no Hamilton cycle"
status: published
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-hamilton-path-cycle-and-hamilton-connected, def-standard-complete-bipartite-path-and-cycle-graphs, thm-hamilton-cycle-vertex-deletion-bound]
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

Every finite simple graph with a Hamilton path has a Hamilton cycle.

## Counterexample

The path graph $P_3$ has vertices $0,1,2$ and edges $01,12$.

## Facts & Assumptions

**Given:** The path graph $P_3$.

[F1] The graph $P_3$ has the displayed vertices and consecutive edges ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A Hamilton path contains every vertex exactly once ([[def-hamilton-path-cycle-and-hamilton-connected]]).

[L1] A Hamiltonian graph satisfies the vertex-deletion component bound ([[thm-hamilton-cycle-vertex-deletion-bound]]).

## Verification

**Proof technique:** direct.

1.1 The path $0,1,2$ uses both edges and contains every vertex exactly once, so it is a Hamilton path. [F1, F2]

1.2 Deleting the middle vertex $1$ leaves two isolated vertices, hence two components. This violates [L1] for the singleton set $S=\{1\}$, so $P_3$ has no Hamilton cycle. [F1, L1, algebra]

2.1 Therefore a Hamilton path need not extend to a Hamilton cycle. [step 1.1, step 1.2] ∎

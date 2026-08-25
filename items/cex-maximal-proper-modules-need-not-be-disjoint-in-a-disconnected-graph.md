---
id: cex-maximal-proper-modules-need-not-be-disjoint-in-a-disconnected-graph
kind: counterexample
title: "Maximal proper modules need not be disjoint when the graph or its complement is disconnected"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-module-of-a-graph, lem-modules-are-complement-invariant, lem-overlapping-proper-modules-of-a-connected-anticonnected-graph, lem-every-vertex-lies-in-a-unique-maximal-proper-module, def-modular-partition-and-quotient-graph, def-prime-graph, def-connected-graph-and-connected-component, def-anticonnected-graph-and-anticonnected-component, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Harju, Lecture Notes on Combinatorial Structures in Graph Theory, Remark 4.1"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Statement refuted

In every graph, the maximal proper modules are pairwise disjoint.

## Facts & Assumptions

**Given:** The edgeless graph $E_3$ on vertices $a,b,c$.

[L1] A set is a module when every outside vertex is complete or anticomplete to it ([[def-module-of-a-graph]]).

[L2] In a connected and anticonnected graph, overlapping proper modules do force a larger proper module and maximal proper modules are disjoint ([[lem-overlapping-proper-modules-of-a-connected-anticonnected-graph]], [[lem-every-vertex-lies-in-a-unique-maximal-proper-module]]).

[L3] A set is a module of a graph exactly when it is a module of the complement ([[lem-modules-are-complement-invariant]]).

## Counterexample

**Proof technique:** constructive.

1.1 In the edgeless graph $E_3$, every subset is a module, because every outside vertex is anticomplete to it. [L1, given, construct]

2.1 The sets $\{a,b\}$ and $\{a,c\}$ are proper modules, and each is maximal among proper modules because the only larger module containing it is the whole vertex set. [step 1.1]

3.1 These two maximal proper modules meet in $a$, so they are not pairwise disjoint. [step 2.1]

3.2 By [L3], the same two sets are also overlapping maximal proper modules in the complement graph $K_3$, which is connected while its complement is disconnected. [step 2.1, L3]

4.1 Therefore the conclusion of [L2] genuinely needs the connected-and-anticonnected hypotheses. [step 3.1, step 3.2, L2, discharge-construct] ∎

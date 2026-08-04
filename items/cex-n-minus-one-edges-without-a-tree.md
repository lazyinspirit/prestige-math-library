---
id: cex-n-minus-one-edges-without-a-tree
kind: counterexample
title: "A graph on $n$ vertices with $n-1$ edges need not be a tree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tree-characterisations, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf"
pipeline_run: null
---

## Statement refuted

Every graph on $n$ vertices with $n-1$ edges is a tree.

## Facts & Assumptions

**Given:** The graph $G=C_3\sqcup K_1$.

[F1] $C_3$ has three vertices and three edges, while $K_1$ has one vertex and no edges ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L1] The edge-count condition characterizes trees only together with connectedness or acyclicity ([[thm-tree-characterisations]]).

## Counterexample

**Proof technique:** direct.

1.1 The disjoint union has $n=4$ vertices and $3=n-1$ edges. [F1]

1.2 It is disconnected and also contains the cycle $C_3$, so it is not a tree. [F1, L1]

2.1 Hence the edge count alone is insufficient. [step 1.1, step 1.2] ∎

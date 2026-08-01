---
id: ex-two-spanning-trees-of-one-graph
kind: example
title: "A connected graph with two distinct spanning trees"
status: published
origin: session
deps: [def-spanning-tree, thm-connected-iff-has-spanning-tree, def-standard-complete-bipartite-path-and-cycle-graphs]
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
      url: "https://diestel-graph-theory.com/basic.html?level=1"
pipeline_run: null
---

## Statement

The triangle $C_3$ is connected and has three distinct spanning trees, obtained by deleting any one edge.

## Facts & Assumptions

**Given:** The cycle graph $C_3$.

[F1] $C_3$ is connected and has three edges ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A spanning tree is a connected acyclic spanning subgraph ([[def-spanning-tree]]).

[L1] A finite graph is connected if and only if it has a spanning tree ([[thm-connected-iff-has-spanning-tree]]).

## Verification

**Proof technique:** direct.

1.1 Deleting any edge of $C_3$ leaves a two-edge path on all three vertices, so each result is a spanning tree. [F1, F2]

2.1 The three deleted edges are different, so the three resulting edge sets are distinct. In particular, this connected graph has at least two spanning trees. [step 1.1, L1] ∎

---
id: lem-spanning-tree-set-is-finite
kind: lemma
title: "The set of spanning trees of a finite graph is finite"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-spanning-tree, def-finite-simple-graph, cor-cardinality-of-the-power-set, thm-subset-of-a-finite-set]
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

## Statement

Every finite graph has only finitely many spanning trees.

## Facts & Assumptions

**Given:** A finite graph $G$.

[F1] A spanning tree of $G$ is determined by its edge set, which is a subset of $E(G)$ ([[def-spanning-tree]]).

[L1] The power set of a finite set is finite, and every subset of a finite set is finite ([[cor-cardinality-of-the-power-set]], [[thm-subset-of-a-finite-set]]).

[F2] $E(G)$ is finite ([[def-finite-simple-graph]]).

## Proof

**Proof technique:** direct.

1.1 The map sending a spanning tree to its edge set embeds the set of spanning trees into $\mathcal P(E(G))$. [F1]

2.1 The latter power set is finite, so its subset consisting of spanning-tree edge sets is finite. [F2, L1] ∎

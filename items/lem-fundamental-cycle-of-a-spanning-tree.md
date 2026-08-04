---
id: lem-fundamental-cycle-of-a-spanning-tree
kind: lemma
title: "Every edge outside a spanning tree determines a unique fundamental cycle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-spanning-tree, lem-edge-addition-to-a-tree, thm-tree-characterisations]
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

If $T$ is a spanning tree of $G$ and $e=uv\in E(G)\setminus E(T)$, then $T+e$ has a unique cycle, namely $e$ together with the unique $u$-$v$ path in $T$. This is the **fundamental cycle** of $e$ with respect to $T$.

## Facts & Assumptions

**Given:** A spanning tree $T$ of $G$ and $e=uv\notin E(T)$.

[L1] A tree has a unique path between each two vertices ([[thm-tree-characterisations]]).

[L2] Adding an edge between nonadjacent vertices of a tree creates exactly one cycle ([[lem-edge-addition-to-a-tree]]).

[F1] $T$ contains every vertex of $G$ ([[def-spanning-tree]]).

## Proof

**Proof technique:** direct.

1.1 The endpoints $u,v$ belong to $T$ and are nonadjacent there. [Given, F1]

2.1 Let $P$ be the unique $u$-$v$ path in $T$. By edge addition, $P+e$ is the unique cycle in $T+e$. [step 1.1, L1, L2] ∎

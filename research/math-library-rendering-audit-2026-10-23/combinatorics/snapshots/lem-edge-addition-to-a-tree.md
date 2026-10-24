---
id: lem-edge-addition-to-a-tree
kind: lemma
title: "Adding an edge between two nonadjacent vertices of a tree creates exactly one cycle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-tree-forest-and-leaf, def-subgraph-induced-subgraph-and-spanning-subgraph, def-graph-walk-trail-path-and-cycle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf"
pipeline_run: null
---

## Statement

Let $T$ be a tree and let $u,v$ be nonadjacent vertices. Adding the edge $uv$ creates exactly one cycle.

## Facts & Assumptions

**Given:** A tree $T$ and nonadjacent vertices $u,v\in V(T)$.

[F1] A tree is connected and acyclic ([[def-tree-forest-and-leaf]]).

[F2] Paths and cycles have their usual vertex-simple meanings ([[def-graph-walk-trail-path-and-cycle]]).

## Proof

**Proof technique:** direct.

1.1 There is a $u$-$v$ path $P$ in $T$, and it is unique: if two distinct such paths existed, their first divergence and next reunion would yield a cycle. [F1, F2]

1.2 Every cycle in $T+uv$ must contain $uv$, since $T$ itself is acyclic. Removing $uv$ from such a cycle leaves a $u$-$v$ path in $T$. [F1, F2]

2.1 The path $P$ together with the new edge $uv$ is a cycle in $T+uv$. [step 1.1, F2]

3.1 By uniqueness in step 1.1, the path obtained in step 1.2 is $P$. Hence the cycle in step 2.1 is the only cycle. [step 1.1, step 1.2] ∎

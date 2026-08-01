---
id: lem-complement-commutes-with-induced-subgraphs
kind: lemma
title: "$\\overline{G[W]}=\\overline G[W]$ for every vertex set $W$"
status: published
origin: session
deps: [def-subgraph-induced-subgraph-and-spanning-subgraph, def-graph-isomorphism-and-complement]
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

For every finite graph $G$ and every $W\subseteq V(G)$,

$$\overline{G[W]}=\overline G[W]$$

as graphs on vertex set $W$.

## Facts & Assumptions

**Given:** A graph $G$ and $W\subseteq V(G)$.

[F1] $G[W]$ retains exactly the edges of $G$ with both endpoints in $W$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[F2] Complementation replaces adjacency by nonadjacency between distinct vertices ([[def-graph-isomorphism-and-complement]]).

## Proof

**Proof technique:** direct.

1.1 Both displayed graphs have vertex set $W$. [F1, F2]

1.2 For distinct $x,y\in W$, $xy$ is an edge of $\overline{G[W]}$ if and only if it is not an edge of $G[W]$, if and only if it is not an edge of $G$, if and only if it is an edge of $\overline G[W]$. [F1, F2]

2.1 Their vertex and edge sets are equal, so the graphs are equal. [step 1.1, step 1.2] ∎

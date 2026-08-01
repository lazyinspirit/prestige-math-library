---
id: lem-spanning-tree-exchange
kind: lemma
title: "The spanning-tree exchange lemma"
status: published
origin: session
deps: [def-spanning-tree, lem-fundamental-cycle-of-a-spanning-tree, lem-fundamental-cut-of-a-spanning-tree]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "P. T. Wood, Graph Theory lecture notes, Minimum spanning trees"
      url: "https://ptwiddle.github.io/MAS341-Graph-Theory-2017/lecturenotes/lecture8.html"
pipeline_run: null
---

## Statement

Let $T$ be a spanning tree of $G$.

1. If $e\in E(G)\setminus E(T)$ and $f$ is any edge other than $e$ on the fundamental cycle of $e$, then $T-f+e$ is a spanning tree.
2. If $f\in E(T)$ and $e$ crosses the fundamental cut of $f$, then $T-f+e$ is a spanning tree.

## Facts & Assumptions

**Given:** A graph $G$ and a spanning tree $T$.

[L1] $T+e$ has one fundamental cycle for every $e\notin T$ ([[lem-fundamental-cycle-of-a-spanning-tree]]).

[L2] Removing $f\in T$ gives a fundamental cut, and adding any crossing edge restores a spanning tree ([[lem-fundamental-cut-of-a-spanning-tree]]).

[F1] A spanning tree is a connected acyclic spanning subgraph ([[def-spanning-tree]]).

## Proof

**Proof technique:** constructive.

1.1 Construct $T':=T-f+e$, where $e\notin E(T)$ and $f\ne e$ lies on the fundamental cycle of $e$. Removing $f$ breaks that cycle but leaves the graph connected, because the rest of the cycle replaces every use of $f$. [construct, L1]

2.1 No other cycle exists in $T+e$, so $T-f+e$ is connected, acyclic and spanning, hence a spanning tree. [step 1.1, L1, F1]

3.1 The second assertion is exactly the restoration clause for the fundamental cut of $f$. [L2, discharge-construct] ∎

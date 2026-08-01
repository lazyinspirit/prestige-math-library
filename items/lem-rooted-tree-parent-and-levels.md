---
id: lem-rooted-tree-parent-and-levels
kind: lemma
title: "Every nonroot vertex has a unique parent, and adjacent vertices have depths differing by one"
status: published
origin: session
deps: [def-rooted-tree, thm-tree-characterisations, def-graph-distance-and-girth]
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

In a rooted tree $(T,r)$, every vertex other than $r$ has exactly one parent. If $uv\in E(T)$, then the depths of $u$ and $v$ differ by exactly one.

## Facts & Assumptions

**Given:** A rooted tree $(T,r)$.

[L1] There is a unique path from $r$ to each vertex ([[thm-tree-characterisations]]).

[F1] Depth is distance from $r$, and parent means the preceding vertex on the root path ([[def-rooted-tree]], [[def-graph-distance-and-girth]]).

## Proof

**Proof technique:** direct.

1.1 For $v\ne r$, its unique root path has positive length and therefore has one vertex immediately before $v$. This vertex is the unique parent of $v$. [L1, F1]

1.2 Let $uv$ be an edge. The root paths of $u$ and $v$ cannot diverge before their endpoints, since the two divergent tails together with $uv$ would form a cycle. Hence one root path is obtained from the other by appending $uv$. [L1]

2.1 Their lengths, and therefore their depths, differ by exactly one. [step 1.2, F1] ∎

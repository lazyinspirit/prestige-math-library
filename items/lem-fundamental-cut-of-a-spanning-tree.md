---
id: lem-fundamental-cut-of-a-spanning-tree
kind: lemma
title: "Every edge of a spanning tree determines a fundamental cut, and every edge crossing it restores a spanning tree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-spanning-tree, lem-edge-deletion-in-a-tree]
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

Let $T$ be a spanning tree of $G$ and $e\in E(T)$. The two components $A,B$ of $T-e$ determine the **fundamental cut**

$$\delta_T(e):=\{xy\in E(G):x\in A,\ y\in B\}.$$

For every $f\in\delta_T(e)$, the graph $T-e+f$ is a spanning tree of $G$.

## Facts & Assumptions

**Given:** A spanning tree $T$ of $G$ and $e\in E(T)$.

[L1] $T-e$ has exactly two tree components ([[lem-edge-deletion-in-a-tree]]).

[F2] A spanning tree contains every vertex of $G$ ([[def-spanning-tree]]).

## Proof

**Proof technique:** direct.

1.1 Let $A,B$ be the vertex sets of the two components of $T-e$. They partition $V(G)$. [L1, F2]

2.1 If $f=xy$ crosses from $A$ to $B$, then $T-e+f$ is connected: paths inside $A$ and $B$, together with $f$, join every pair of vertices. [step 1.1, L1]

2.2 It is acyclic: each side is acyclic, and a cycle using $f$ would require a second edge between the two sides, but $T-e+f$ has only $f$. [step 1.1, L1]

3.1 It is spanning by construction, so it is a spanning tree of $G$. [step 2.1, step 2.2, F2] ∎

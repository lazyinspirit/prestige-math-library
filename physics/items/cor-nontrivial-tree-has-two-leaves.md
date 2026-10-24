---
id: cor-nontrivial-tree-has-two-leaves
kind: corollary
title: "Every tree with at least two vertices has at least two leaves"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tree-characterisations, def-tree-forest-and-leaf, def-graph-walk-trail-path-and-cycle, def-graph-adjacency-incidence-neighbourhood-and-degree]
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
    - title: "ISI Bangalore discrete mathematics notes, Trees and Cayley’s theorem"
      url: "https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch4.S1.html"
pipeline_run: null
---

## Statement

Every tree with at least two vertices has at least two distinct leaves.

## Facts & Assumptions

**Given:** A tree $T$ with at least two vertices.

[L1] Every two vertices of a tree are joined by a unique path ([[thm-tree-characterisations]]).

[F1] A leaf has degree one ([[def-tree-forest-and-leaf]], [[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[F2] Because $T$ is finite, its set of paths has a maximum-length member ([[def-graph-walk-trail-path-and-cycle]]).

## Proof

**Proof technique:** direct.

1.1 Choose a path $P=v_0v_1\cdots v_k$ of maximum length. Since $T$ has at least two vertices and is connected, $k\ge1$. [F2, L1]

2.1 If $v_0$ had a neighbour other than $v_1$, that neighbour could not already lie on $P$, since that would form a cycle; adjoining it would therefore lengthen the maximum-length path $P$. Thus $v_0$ has degree one. [step 1.1, L1]

2.2 The same argument shows that $v_k$ has degree one. [step 1.1, L1]

3.1 Since $v_0\ne v_k$, these are two distinct leaves. [step 1.1, step 2.1, step 2.2, F1] ∎

---
id: lem-nonempty-forest-has-low-degree-vertex
kind: lemma
title: "Every nonempty forest has a vertex of degree at most one"
status: published
origin: session
deps: [def-tree-forest-and-leaf, cor-minimum-degree-two-forces-a-cycle, def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
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

Every forest with at least one vertex has a vertex of degree at most one.

## Facts & Assumptions

**Given:** A forest $F$ with $V(F)\ne\varnothing$.

[L1] A forest contains no cycle ([[def-tree-forest-and-leaf]]).

[L2] Every finite graph of minimum degree at least two contains a cycle ([[cor-minimum-degree-two-forces-a-cycle]]).

[F1] Vertex degrees are natural numbers ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose every vertex of $F$ has degree greater than one. [assume-contra]

2.1 Since degrees are natural numbers, $F$ has minimum degree at least two. [step 1.1, F1]

3.1 Hence $F$ contains a cycle. [step 2.1, L2]

4.1 This contradicts that $F$ is a forest, so some vertex has degree at most one. [step 3.1, L1, discharge-contradiction] ∎

---
id: lem-author-2501feae0519-sparsity-forces-berge-girth
kind: lemma
title: Finite edge-union sparsity excludes short Berge cycles
status: published
origin: pipeline
domain: mathematics
deps:
  - def-berge-cycles-and-incidence-graph
  - math:def-uniform-hypergraph-and-complete-partite-hypergraph
  - lem-author-2501feae0519-cycle-union-bound
  - math:def-finite-cardinality
dependency_roles:
  def-berge-cycles-and-incidence-graph: mathematical-premise
  math:def-uniform-hypergraph-and-complete-partite-hypergraph: mathematical-premise
  lem-author-2501feae0519-cycle-union-bound: mathematical-premise
  math:def-finite-cardinality: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement

Let $r\geq2$ and $q\geq3$ be integers. Suppose a finite $r$-uniform hypergraph has $|\bigcup\mathcal A|\geq1+(r-1)t$ whenever $\mathcal A$ is a family of $t$ distinct hyperedges with $1\leq t\leq q-1$. Then its Berge girth is at least $q$.

## Statement references

[[def-berge-cycles-and-incidence-graph]]

[[math:def-uniform-hypergraph-and-complete-partite-hypergraph]]

[[lem-author-2501feae0519-cycle-union-bound]]

[[math:def-finite-cardinality]]

## Facts & Assumptions

[F1] [[def-berge-cycles-and-incidence-graph]] defines Berge girth, [[math:def-uniform-hypergraph-and-complete-partite-hypergraph]] defines uniformity, and [[lem-author-2501feae0519-cycle-union-bound]] bounds the union of the edges of any Berge cycle. [[math:def-finite-cardinality]] defines the finite cardinalities used in both union-size bounds.

## Proof

**Given:** The hypotheses of the statement.

**Goal:** Its asserted conclusion.

1.1 If a Berge cycle had length $t<q$, its integer length and the integrality of $q$ would give $2\leq t\leq q-1$. Its distinct edge family would have union of size at most $(r-1)t$ by the cycle-union bound. [F1, given]

2.1 The assumed sparsity inequality applied to that family gives union size at least $1+(r-1)t$, a contradiction. Thus no such cycle exists, which is exactly the asserted girth bound, including the acyclic case. [given, F1, step 1.1] ∎

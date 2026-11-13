---
id: thm-external-finite-high-girth-weak-chromatic-hypergraphs
kind: theorem
title: Finite high-girth hypergraphs with no weak k-colouring
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-berge-cycles-and-incidence-graph
  - def-weak-hypergraph-colouring-palette
  - math:def-uniform-hypergraph-and-complete-partite-hypergraph
  - lem-author-2501feae0519-sparsity-forces-berge-girth
  - lem-author-2501feae0519-finite-uniform-sparse-obstruction
  - lem-author-2501feae0519-finite-graph-boundary-transfer
dependency_roles:
  def-berge-cycles-and-incidence-graph: mathematical-premise
  def-weak-hypergraph-colouring-palette: mathematical-premise
  math:def-uniform-hypergraph-and-complete-partite-hypergraph: mathematical-premise
  lem-author-2501feae0519-sparsity-forces-berge-girth: mathematical-premise
  lem-author-2501feae0519-finite-uniform-sparse-obstruction: mathematical-premise
  lem-author-2501feae0519-finite-graph-boundary-transfer: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement

For integers $r\geq2$, $q\geq3$ and $k\geq1$, there exists a finite $r$-uniform hypergraph of Berge girth at least $q$ that has no weak $k$-colouring, equivalently with weak chromatic number at least $k+1$.

## Statement references

[[def-berge-cycles-and-incidence-graph]]

[[def-weak-hypergraph-colouring-palette]]

[[math:def-uniform-hypergraph-and-complete-partite-hypergraph]]

[[lem-author-2501feae0519-sparsity-forces-berge-girth]]

[[lem-author-2501feae0519-finite-uniform-sparse-obstruction]]

[[lem-author-2501feae0519-finite-graph-boundary-transfer]]

## Facts & Assumptions

[F1] [[def-berge-cycles-and-incidence-graph]], [[def-weak-hypergraph-colouring-palette]] and [[math:def-uniform-hypergraph-and-complete-partite-hypergraph]] fix the girth, palette and uniformity conventions. [[lem-author-2501feae0519-sparsity-forces-berge-girth]] converts edge-union sparsity to Berge girth.

[F2] [[lem-author-2501feae0519-finite-uniform-sparse-obstruction]] supplies finite sparse witnesses for $r\geq3$. [[lem-author-2501feae0519-finite-graph-boundary-transfer]] supplies the finite $r=2$ boundary.

## Proof

**Given:** The hypotheses of the statement.

**Goal:** Its asserted conclusion.

1.1 If $r\geq3$, apply F2 with $s=q-1$. Its finite witness has no weak $k$-colouring and satisfies the sparsity hypothesis in F1, so F1 gives Berge girth at least $q$. If $r=2$, use the finite boundary witness in F2 directly. This proves existence throughout the stated range. [given, F1, F2, construct]

2.1 Because $r\geq2$, the weak chromatic number exists by F1. Absence of a weak $k$-colouring is equivalent to its least admissible positive palette size being greater than $k$: every colouring into a smaller palette also maps into $[k]$. For integers this is exactly the lower bound $k+1$. [F1, step 1.1, algebra] ∎

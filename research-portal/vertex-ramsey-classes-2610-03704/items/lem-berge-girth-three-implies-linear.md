---
id: lem-berge-girth-three-implies-linear
kind: lemma
title: Berge girth at least three forces linearity
status: published
origin: pipeline
domain: mathematics
deps:
  - def-berge-cycles-and-incidence-graph
dependency_roles:
  def-berge-cycles-and-incidence-graph: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

If a finite hypergraph has Berge girth at least three, then it is linear: any two distinct hyperedges have at most one common vertex.

## Statement references

[[def-berge-cycles-and-incidence-graph]]

## Facts & Assumptions

[F1] By [[def-berge-cycles-and-incidence-graph]], a Berge cycle of length two consists of two distinct hyperedges $e_0,e_1$ and two distinct vertices $x_0,x_1$, each belonging to both hyperedges. Berge girth is the least cycle length, or $\infty$ if there is no cycle, and linearity means that any two distinct hyperedges have at most one common vertex.

## Proof

**Given:** A finite hypergraph of Berge girth at least three.

**Goal:** The hypergraph is linear.

1.1 If two distinct hyperedges had two distinct common vertices, those edges and vertices would form a Berge cycle of length two: each vertex lies in the intersection of the two edges, as required for both cyclic indices. [F1]

2.1 Such a cycle would make the Berge girth at most two, contrary to the given lower bound. Hence no two distinct hyperedges have two distinct common vertices, so the hypergraph is linear. [given, F1, step 1.1] ∎

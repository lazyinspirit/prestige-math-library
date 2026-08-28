---
id: def-cograph-by-singletons-disjoint-union-and-complete-connection
kind: definition
title: "Cographs by the singleton, disjoint-union, and complete-connection recursion"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-connection-of-two-disjoint-graphs,
       def-finite-simple-graph]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Tero Harju, Lecture Notes on Combinatorial Structures in Graph Theory, Exercise 5.2"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Definition

The class of **cographs** is defined recursively as follows.

1. The null graph is a cograph.
2. Every one-vertex graph is a cograph.
3. If $G$ and $H$ are vertex-disjoint cographs, then their disjoint union is a
   cograph.
4. If $G$ and $H$ are vertex-disjoint cographs, then their complete connection
   $G\nabla H$ is a cograph.
5. No graph is a cograph unless it is obtained from the previous clauses by
   finitely many applications.

Equivalently, a finite graph is a cograph exactly when it is null or can be
built from singletons by repeatedly taking disjoint unions and complete
connections. In particular, every cograph with at least two vertices has a last
construction step in which it is obtained from two nonempty smaller cographs by
one of those two operations.

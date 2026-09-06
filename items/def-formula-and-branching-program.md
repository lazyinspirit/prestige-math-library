---
id: def-formula-and-branching-program
kind: definition
title: "Boolean formulas and deterministic branching programs"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-boolean-circuit-size-depth-fanin-and-basis]
verification:
  audited: 2026-09-07
  precheck: n/a
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Definition

A **Boolean formula** is a finite rooted tree whose leaves are labelled by
input variables or constants $0,1$, and whose internal nodes are NOT gates
with one child or AND/OR gates with two children. The root is the output,
and evaluation proceeds from leaves to root. A variable or constant may
label several distinct leaves; all occurrences of a variable receive the
same input value. Thus computed subformulas are not shared, but input
variables may be used repeatedly. In the gate-count convention of
[[def-boolean-circuit-size-depth-fanin-and-basis]], its size counts connective
gates and constant occurrences, but not variable leaves.

A deterministic branching program is a finite acyclic query graph with a
start node and sinks labelled $0$ or $1$. Each internal node is labelled by
an input bit and has one outgoing edge labelled $0$ and one outgoing edge
labelled $1$; computation follows the edge whose label is the queried bit's
value. Its size is its number of vertices. These are distinct size models.

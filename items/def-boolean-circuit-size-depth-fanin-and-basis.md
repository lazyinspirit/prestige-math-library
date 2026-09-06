---
id: def-boolean-circuit-size-depth-fanin-and-basis
kind: definition
title: "Boolean circuits: basis, fan-in, size, and depth"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Definition

A Boolean circuit on $n$ inputs is a finite directed acyclic graph with inputs
$x_1,\ldots,x_n$, constants $0$ and $1$, and NOT, AND, and OR gates; AND and
OR have fan-in two, while NOT has fan-in one. One node is designated as the
**output**. The circuit's value is the value at that node after evaluating the
graph in topological order. Its **size** is its number of non-input gates, and
its **depth** is the largest number of non-input gates on a directed path
ending at the output (a path may begin at an input or a constant).

If two fixed finite bounded-arity bases can simulate every gate (and every
constant) of one another by fixed finite circuits, then changing between them
costs only constant factors in size and depth. In particular this holds for
any two such functionally complete bases with simulable constants. No such
claim is made for an arbitrary finite basis that may fail to express one of
the Boolean operations.

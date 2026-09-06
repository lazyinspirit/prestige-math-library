---
id: def-ac-zero-nc-one-and-nc
kind: definition
title: "AC0, NC1, and NC under a stated uniformity convention"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-boolean-circuit-size-depth-fanin-and-basis, def-logspace-uniform-circuit-family]
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

All families in this definition are logspace-uniform. For bounded-fan-in
families this means exactly the query interface of
[[def-logspace-uniform-circuit-family]]. For an unbounded-fan-in gate, the
same interface is extended by a fan-in query and by predecessor queries
$(v,j)$ that return the $j$-th predecessor of gate $v$ (or report that
$j$ is out of range); the transducer must answer all such queries in
logarithmic space.

$\mathrm{AC}^0$ has polynomial size, constant depth, unbounded-fan-in AND/OR,
and NOT gates. $\mathrm{NC}^1$ has polynomial size, bounded fan-in, and
logarithmic depth. $\mathrm{NC}$ is the union of polynomial-size
bounded-fan-in families of polylogarithmic depth. This convention does not
constrain arbitrary $\mathrm{P/poly}$ families.

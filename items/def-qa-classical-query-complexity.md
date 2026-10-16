---
id: def-qa-classical-query-complexity
kind: definition
title: "Classical query complexity"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-classical-query-algorithm
  - def-qa-expected-query-cost
  - def-qa-bounded-error-promise-correctness
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Definition

For a classical query algorithm [[def-qa-classical-query-algorithm]] at input length $n$, its **worst-case classical query cost** is the maximum number of oracle calls over every promised instance and every random tape. When there are no promised instances of length $n$, define this cost to be $0$. If those counts are not uniformly bounded, the cost is infinite. One query returns the full value $f_z(x)$, regardless of its bit width. Expected-query bounds are reported separately using [[def-qa-expected-query-cost]].

For a bounded-error classical solver, the query cost is still worst-case over inputs and random tapes; the success requirement is the per-instance probability in [[def-qa-bounded-error-promise-correctness]]. Distributional input averages and expected query counts are different quantities.

---
id: def-qa-quantum-query-complexity
kind: definition
title: "Quantum query complexity"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-quantum-query-algorithm
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

For a $T$-query quantum algorithm [[def-qa-quantum-query-algorithm]] at input length $n$, its **worst-case quantum query cost** is the maximum number of designated oracle calls over all promised instances in $P_n$ and all measurement branches. When $P_n$ is empty, define this cost to be $0$. For nonempty $P_n$, a finite circuit and finite branch sets ensure that this maximum exists; a solver whose branch counts are not uniformly bounded has infinite worst-case query cost. An expected-query bound is the separate quantity defined by [[def-qa-expected-query-cost]].

In the pure query model, ordinary gates outside the oracle calls are uncharged by the query coordinate. If a task also reports gate, preparation, measurement, or classical costs, those are separate coordinates. Bounded-error query cost uses the same worst-case maximum; its success threshold is the per-instance condition in [[def-qa-bounded-error-promise-correctness]], not an average over oracle inputs.

---
id: def-qa-classical-query-algorithm
kind: definition
title: "Classical query algorithm"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-promise-query-instance
  - def-qa-input-encoding-and-size
  - def-probabilistic-polynomial-time-machine-interface
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

A **classical query algorithm** is a finite decision procedure for a fixed input length whose query actions are to the total function $f_z$ of [[def-qa-promise-query-instance]]. Each query chooses an address from the encoding of [[def-qa-input-encoding-and-size]], earlier replies, and any random bits used so far; it receives the entire $b(n)$-bit reply $f_z(x)$ as one query answer. The address choices may be adaptive.

For a randomized algorithm, each branch is determined by the input, oracle replies, and its finite random tape; the fair-bit tape convention for a bounded-time probabilistic machine is supplied by [[def-probabilistic-polynomial-time-machine-interface]]. The query model itself imposes no polynomial bit-time bound. A query bound is a worst-case bound over promised inputs and every random branch; classical computation between queries is charged separately only when a bit-cost model is specified.

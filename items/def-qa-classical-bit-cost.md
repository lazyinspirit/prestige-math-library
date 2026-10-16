---
id: def-qa-classical-bit-cost
kind: definition
title: "Classical bit-operation cost"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-input-encoding-and-size
  - def-qa-classical-query-algorithm
  - def-probabilistic-polynomial-time-machine-interface
  - def-multitape-and-nondeterministic-machines
justified_by: []
provenance:
  statement: ai-altered
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

For a classical query algorithm [[def-qa-classical-query-algorithm]], bit-operation cost is the number of transitions of a declared multitape Turing machine over a fixed finite alphabet; the $k$-tape transition reads and writes one symbol on each of its $k\ge1$ tapes and moves each head once per transition ([[def-multitape-and-nondeterministic-machines]]). It includes random-bit generation, any encoding work actually performed by that machine on declared public data or received replies, address formation, reading and writing every bit of an oracle reply, comparison/postprocessing, and writing the classical output. The abstract instance encoding in [[def-qa-input-encoding-and-size]] fixes the size parameter; it supplies neither a readable hidden input nor an encoding procedure to execute. The fair-bit machine convention is supplied by [[def-probabilistic-polynomial-time-machine-interface]]. The oracle invocation itself is one separately counted query action; its returned bits are not free to process.

For a query with an $a(n)$-bit address and a $b(n)$-bit reply, the machine's charged work includes forming the address and processing the $b(n)$ reply symbols. A claimed time bound also specifies whether it is worst-case over promised inputs and random tapes, as in [[def-probabilistic-polynomial-time-machine-interface]]. Query, nonoracle quantum gate, measurement, and classical bit costs remain distinct.

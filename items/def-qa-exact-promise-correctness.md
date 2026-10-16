---
id: def-qa-exact-promise-correctness
kind: definition
title: "Exact correctness for promise tasks"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-task-and-promise-domain
  - def-qa-quantum-query-algorithm
  - def-qa-finite-branch-output-law
  - def-qa-classical-query-algorithm
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

For a decision task $(Y,N)$ from [[def-qa-task-and-promise-domain]], a solver is **exact** if its normalized output law assigns probability one to yes on every encoded $z\in Y$ and probability one to no on every encoded $z\in N$. For a search task $(D,R)$ from the same definition, it is exact if, for every encoded $z\in D$, its normalized output law assigns probability one to outputs $w$ satisfying $(z,w)\in R$. These are per-instance requirements; no correctness is asserted outside the promise.

The solver is one of the quantum algorithms in [[def-qa-quantum-query-algorithm]] or classical algorithms in [[def-qa-classical-query-algorithm]]. For a quantum solver, its output weights are the normalized finite-branch law of [[def-qa-finite-branch-output-law]]. For a randomized classical solver, they are the probabilities induced by its declared finite random-tape law. Exactness does not follow merely from a circuit or algorithm description; it is a condition on its output law.

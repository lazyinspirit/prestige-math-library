---
id: def-qa-bounded-error-promise-correctness
kind: definition
title: "Worst-case bounded-error correctness"
status: published
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

A quantum or classical solver in [[def-qa-quantum-query-algorithm]] and [[def-qa-classical-query-algorithm]] for a decision task $(Y,N)$ of [[def-qa-task-and-promise-domain]] has **bounded error** (with the QA convention) if its normalized output law assigns probability at least $2/3$ to the correct answer for every encoded promised instance. A search solver has bounded error if, for every encoded $z$ in its domain $D$, its output law assigns probability at least $2/3$ to outputs $w$ satisfying $(z,w)\in R$. The guarantee is worst-case per instance, not averaged over an input distribution. The constant $2/3$ is a convention; amplification and its query/access cost are separate results.

For quantum algorithms the success event is evaluated from the normalized finite-branch output law of [[def-qa-finite-branch-output-law]]. Its normalization follows from the finite instrument and unitary branches in that definition; the success threshold remains a per-instance condition.

---
id: def-qa-rational-phase-reconstruction
kind: definition
title: Denominator-bounded rational phase reconstruction
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-regular-continued-fraction
  - def-convergents-of-regular-continued-fraction
  - lem-continued-fraction-determinant-identity
  - thm-normalized-finite-continued-fraction-uniqueness
  - thm-standard-representatives-modulo-n
  - lem-qa-rational-reconstruction-candidate-uniqueness
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "None; the definition uses finite integer arithmetic."
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §9"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§9, PDF pp. 45–49; continued-fraction phase recovery"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§5, PDF pp. 49–56; period finding and continued fractions"
---

## Definition

Let $N,Q$ be integers with $N\ge1$ and $Q>4N^2$. A measured phase label is represented by the unique integer $y$ with $0\le y<Q$ as in [[thm-standard-representatives-modulo-n]]. Write the normalized finite regular continued fraction of $y/Q$ as $[a_0;\ldots,a_s]$ and denote its convergents by $p_j/q_j$. Every convergent is reduced by [[lem-continued-fraction-determinant-identity]]. A **candidate** is a convergent whose numerator and denominator are reduced, whose denominator satisfies $1\le q_j\le N$, and which passes the exact integer test
$$2|yq_j-p_jQ|\le q_j.$$

The **reconstruction result** is the unique candidate if the candidate set is nonempty, and is FAIL otherwise. The candidate set includes the terminal convergent whenever it meets the same conditions. Uniqueness, and hence well-definedness of this value, follows from [[lem-qa-rational-reconstruction-candidate-uniqueness]] under $Q>4N^2$.

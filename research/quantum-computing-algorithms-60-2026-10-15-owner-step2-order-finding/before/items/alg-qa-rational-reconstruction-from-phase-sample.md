---
id: alg-qa-rational-reconstruction-from-phase-sample
kind: algorithm
title: Rational reconstruction from a phase sample
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qa-rational-phase-reconstruction
  - def-convergents-of-regular-continued-fraction
  - lem-qa-rational-reconstruction-candidate-uniqueness
  - alg-qa-quantum-phase-estimation
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "None; the routine is a finite Euclidean computation."
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §9"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§9, PDF pp. 45–49; reconstructing a period from a phase outcome"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§5, PDF pp. 49–56; continued-fraction postprocessing"
---

## Definition

**Input.** Integers $N\ge1$, $Q>4N^2$, and $y\in\{0,\ldots,Q-1\}$, with $Q=2^m$ and $y$ the label from [[alg-qa-quantum-phase-estimation]] when this routine is called from QPE.

**Output.** A reduced fraction $p/q$ with $1\le q\le N$, or FAIL.

**Instructions.** Run the Euclidean continued-fraction algorithm on $y/Q$ and normalize the finite expansion as in [[def-qa-rational-phase-reconstruction]]. Generate its convergents by the recurrence in [[def-convergents-of-regular-continued-fraction]], including the terminal convergent. For each one, reject it if its denominator exceeds $N$; otherwise compute $2|yq-pQ|$ exactly and accept it precisely when this integer is at most $q$. Return the first accepted candidate, or FAIL if none exists. The uniqueness result `lem-qa-rational-reconstruction-candidate-uniqueness` shows there cannot be two. The algorithm makes no floating-point comparison. Its deterministic bit bound is proved separately in `thm-qa-rational-reconstruction-bit-cost`.

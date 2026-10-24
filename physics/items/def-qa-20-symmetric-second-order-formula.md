---
id: def-qa-20-symmetric-second-order-formula
kind: definition
title: Symmetric second-order product formula
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-20-term-list-access-model
  - def-qa-20-first-order-product-formula
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 27 §§27.2–27.3, printed pp. 133–135: finite time-independent Hamiltonian evolution, operator-norm simulation, and product formulas."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 9 §§9.1–9.2, printed pp. 71–74: finite Hermitian evolution, operator-norm simulation, and Lie–Suzuki–Trotter methods."
---

## Definition

For the announced term order $1,\ldots,m$ and real $h$, define the palindromic product
$$S_2(h):=e^{-ihH_1/2}e^{-ihH_2/2}\cdots e^{-ihH_{m-1}/2}e^{-ihH_m}e^{-ihH_{m-1}/2}\cdots e^{-ihH_2/2}e^{-ihH_1/2}.$$
For $m=1$ this is just $e^{-ihH_1}$. The $r$-step approximation is $S_2(t/r)^r$, with $r\ge1$. A written product acts right-to-left, as in [[def-qa-20-first-order-product-formula]]. Every term call and any signed-time implementation cost must be declared by [[def-qa-20-term-list-access-model]].

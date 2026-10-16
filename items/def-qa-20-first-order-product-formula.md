---
id: def-qa-20-first-order-product-formula
kind: definition
title: First-order Lie product formula
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qa-20-term-list-access-model
  - def-qa-19-finite-matrix-dynamics
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

For a term-list input $H=\sum_{j=1}^m H_j$, a real time $h$, and the announced order $1,\ldots,m$, define
$$S_1(h):=e^{-ihH_1}e^{-ihH_2}\cdots e^{-ihH_m}.$$
Operator products are written in their ordinary left-to-right algebraic order, so the rightmost factor acts first on a vector. For an integer $r\ge1$, the $r$-step first-order approximation at time $t$ is $S_1(t/r)^r$. Each exponential is the finite-matrix evolution of [[def-qa-19-finite-matrix-dynamics]]; this definition does not identify the product with $e^{-itH}$ when terms fail to commute.

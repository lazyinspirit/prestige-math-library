---
id: def-qa-36-adiabatic-resource-model
kind: definition
title: Adiabatic path access and resource model
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qa-36-finite-adiabatic-path-model
  - def-qa-20-simulation-error-and-cost-model
  - def-qa-20-term-list-access-model
  - def-qc-uniform-circuit-family
  - def-qc-circuit-cost-model
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapters 27–30, printed pp. 133–156; PDF pp. 141–164.
    - title: Dorit Aharonov, Wim van Dam, Julia Kempe, Zeph Landau, Seth Lloyd, and Oded Regev, Adiabatic Quantum Computation is Equivalent to Standard Quantum Computation
      url: https://arxiv.org/pdf/quant-ph/0405098
      locator: §§2–3.1, PDF pp. 7–20; finite path model, local clock access, and circuit conversion.
verification:
  precheck: n/a
---

## Definition

An **adiabatic path access instance** consists of a finite path model ([[def-qa-36-finite-adiabatic-path-model]]), its exact initial preparation circuit $A_0$ and cost $C_{\rm init}$, a finite term count $r$, and a uniform description
$$H(s)=\sum_{j=1}^r c_j(s)H_j,$$
where the $H_j$ are stated finite-dimensional self-adjoint operators and the real coefficient functions $c_j$ have explicit rational binary inputs, uniform evaluation procedures, certified value errors and certified first-derivative bound $M_1\ge\sup_s\|H'(s)\|$. The access declaration provides, for every allowed time code $u$, either the exact term operation $e^{-iuH_j}$ as a named oracle with its query charge, or a full-list uniform circuit family $V_j(u)$ with a certified bound $\|V_j(u)-e^{-iuH_j}\|\le\eta_j(u)$. Each inverse or controlled call is available only when separately declared. This is the finite term-list access interface of [[def-qa-20-simulation-error-and-cost-model]] and [[def-qa-20-term-list-access-model]].

The resource record lists separately: $C_{\rm init}$; the term count $r$; all term-oracle queries; controlled and inverse calls; gate, clean-ancilla and dirty-ancilla counts; coefficient-precision bits; full circuit-description bits; uniform generator time; and the continuous evolution time $T$. If a physical energy-normalized action is used, it also records $T\sup_s\|H(s)\|$. A missing coordinate is unavailable, not zero. No arbitrary matrix description or spectral projector supplies an initial preparation, term exponential, controlled call, inverse, coefficient evaluator, or circuit generator for free.

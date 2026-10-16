---
id: def-qa-28-spectral-estimation-access
kind: definition
title: Eigenvalue-estimation access and aliasing convention
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-eigenphase-estimation-model
  - def-qc-controlled-unitary-access
  - def-qa-20-simulation-error-and-cost-model
  - def-qc-dirac-notation-conversion
  - def-qc-inverse-unitary-access
  - def-qc-circuit-cost-model
justified_by: []
axiom_use: "None; access consists of explicitly supplied finite-dimensional procedures and resource records."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

An **eigenvalue-estimation access instance** consists of a finite-dimensional system space; a costed state-preparation circuit $A_\psi$ with $A_\psi|0\rangle=|\psi\rangle$; a costed unitary $U$ and each controlled, inverse, or controlled-inverse version actually used; an injective known phase encoding $\lambda\mapsto\theta(\lambda)\in\mathbb R/\mathbb Z$ on the promised spectrum; and a specified decoder with its branch cut and output units. Exact controlled powers $U^{2^j}$ may instead be supplied individually, with their costs. If powers are synthesized from controlled-$U$, charge the exact number of calls and all control/wiring costs; no power or control is free.

For Hamiltonian access, the instance additionally specifies a Hermitian $H$, an interval containing $\sigma(H)$, a simulation rule for each requested signed time and its operator-error/cost bound, and how errors are allocated across the circuit. In the convention of [[def-qa-20-simulation-error-and-cost-model]], a simulator for $e^{-itH}$ implements the positive-sign phase unitary $e^{iH}$ at $t=-1$, using inverse access when that is what the supplied interface permits. Every preparation, inverse, controlled call, simulation, phase-register gate, decoder arithmetic operation, measurement, and written output is included in its declared cost coordinates. Aliasing is excluded by the injectivity promise and the chosen decoder; absent that promise, the output is only an estimate of the encoded phase modulo one, not of a uniquely identified eigenvalue.

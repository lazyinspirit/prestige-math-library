---
id: def-qa-20-simulation-error-and-cost-model
kind: definition
title: Hamiltonian simulation error and resources
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qa-19-finite-matrix-dynamics
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-qc-circuit-cost-model
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-uniform-circuit-family
  - def-qc-clean-and-dirty-ancillas
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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

Let $V$ be a finite-dimensional complex inner-product space and let $H=H^*$ be a specified endomorphism. Its exact time-$t$ evolution is $U_H(t)=e^{-itH}$ as defined by [[def-qa-19-finite-matrix-dynamics]]. The notation $\|T\|$ denotes the operator norm of [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]. The target register's Hilbert space is identified with $V$ as part of the input. A **Hamiltonian simulator at encoded time $t$ and tolerance $0<\epsilon<1$** is a declared procedure whose output is a unitary $W$ on the stated target register satisfying $\|W-U_H(t)\|\le\epsilon$. If its circuit uses auxiliary registers, the exact clean or dirty contract of [[def-qc-clean-and-dirty-ancillas]] must make the induced target unitary $W$ well-defined; the error is measured on that target unitary. The scalar time and tolerance have exact finite descriptions under the declared input convention; their description lengths are recorded.

The resource record lists, separately, the number of calls to each named oracle, controlled calls, inverse calls, elementary gate occurrences, clean and dirty ancillary wires, coefficient bits, full circuit-description bits, and classical generation time. A coordinate not supplied by the access contract is unavailable, not zero. No matrix description supplies a circuit, oracle, controlled call, inverse call, or term exponential for free; uniform-family and cost conventions are those of [[def-qc-uniform-circuit-family]], [[def-qc-circuit-cost-model]], [[def-qc-controlled-unitary-access]], and [[def-qc-inverse-unitary-access]]. No polynomial resource bound is asserted by this definition.

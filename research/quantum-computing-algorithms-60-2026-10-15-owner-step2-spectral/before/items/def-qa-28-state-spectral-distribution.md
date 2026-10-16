---
id: def-qa-28-state-spectral-distribution
kind: definition
title: State-dependent spectral distribution
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-functional-calculus-for-a-normal-endomorphism
  - prop-functional-calculus-for-normal-endomorphisms
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-spectral-resolution-and-polynomial-spectral-projections
  - def-qc-pure-state-and-ray
  - def-qc-dirac-notation-conversion
justified_by:
  - thm-qa-28-spectral-law-measurement
axiom_use: "None; the spectrum and its spectral projections form a finite family."
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

Let $H$ be a Hermitian endomorphism of a finite-dimensional complex inner-product space, with distinct eigenvalues $\lambda$ and orthogonal spectral projections $P_\lambda$. Let $\psi$ be a unit vector representing a pure state. Its **state-dependent spectral distribution** is the finite measure on $\sigma(H)$ defined by
$$\mu_\psi(\{\lambda\})=\|P_\lambda\psi\|^2=\langle\psi|P_\lambda|\psi\rangle.$$
The support is restricted to eigenvalues with nonzero weight; degeneracies are represented by one atom per distinct eigenvalue, not one atom per chosen eigenvector. The formula is the definition; its nonnegativity, total mass one, and functional-calculus moment identity are established in [[thm-qa-28-spectral-law-measurement]].

---
id: def-qc-qubit-and-bloch-representation
kind: definition
title: "Qubit spaces and states"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-pure-state-and-ray
  - def-qc-density-operator
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
justified_by: []
dependency_level: 2
axiom_use: "None; the basis and state spaces are finite and explicit."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.2, PDF pp.7–8"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27)"
      url: "https://arxiv.org/pdf/1907.09415v6"
      locator: "§1.3, PDF pp.7–8"
    - title: "Aram Harrow, 6.443/8.371/18.436 Quantum Information Science II, Lecture 1: Quantum states and operations (2018)"
      url: "https://web.mit.edu/8.371/www/lectures/lect01.pdf"
      locator: "§1.2, PDF pp.1–2"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

The **qubit space** is the one-qubit register $Q_2=\mathbb C^2$ of [[def-qc-register-and-computational-basis]], with ordered computational basis $(|0\rangle,|1\rangle)=(e_0,e_1)$. This basis is orthonormal by [[thm-qc-computational-basis-orthonormal]]. A **qubit state** is a density operator on $Q_2$ in the sense of [[def-qc-density-operator]], namely a non-negative endomorphism of trace one. A **pure qubit state** is a pure-state ray on $Q_2$ in the sense of [[def-qc-pure-state-and-ray]]. The Bloch coordinates and their state-space constraints are defined and proved in the following items on this page.

The term qubit here names the two-dimensional register and its mathematical state space. No physical preparation or measurement postulate is part of this definition.


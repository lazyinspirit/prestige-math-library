---
id: def-qc-bloch-coordinate-map
kind: definition
title: "Bloch coordinate maps"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-qubit-and-bloch-representation
  - def-qc-pauli-matrices
  - def-qc-density-operator
  - def-trace-of-an-endomorphism
  - def-trace-of-a-square-matrix
justified_by:
  - thm-qc-bloch-coordinate-existence-and-uniqueness
dependency_level: 4
axiom_use: "None; the coordinates are finite and explicit."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.3.2, PDF pp.21–22"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27)"
      url: "https://arxiv.org/pdf/1907.09415v6"
      locator: "Appendix A.9, PDF p.198"
    - title: "Aram Harrow, 6.443/8.371/18.436 Quantum Information Science II, Lecture 1: Quantum states and operations (2018)"
      url: "https://web.mit.edu/8.371/www/lectures/lect01.pdf"
      locator: "§1.2.1, PDF pp.2–3"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Let $Q_2$ be the qubit space of [[def-qc-qubit-and-bloch-representation]], and let $\rho$ be a density operator on $Q_2$ in the sense of [[def-qc-density-operator]]. Define its candidate Bloch coordinates in $\mathbb C^3$ by
$$r_j(\rho):=\operatorname{tr}(\rho\sigma_j)\quad(j\in\{x,y,z\}),\qquad \mathbf r(\rho):=(r_x(\rho),r_y(\rho),r_z(\rho)).$$
For any $\mathbf r=(r_x,r_y,r_z)\in\mathbb R^3$, define the associated Hermitian-matrix candidate
$$\rho(\mathbf r):=\frac12\bigl(I+r_xX+r_yY+r_zZ\bigr).$$
Write $\mathbf r\cdot\boldsymbol{\sigma}:=r_xX+r_yY+r_zZ$ and
$$\|\mathbf r\|_2:=\sqrt{r_x^2+r_y^2+r_z^2}.$$
The next theorem proves that these trace coordinates are real and that every Hermitian trace-one $2\times2$ matrix is uniquely $\rho(\mathbf r)$; the positivity theorem determines which real-coordinate candidates are states.


---
id: def-qc-pauli-matrices
kind: definition
title: "The Pauli matrices"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-qubit-and-bloch-representation
justified_by: []
dependency_level: 3
axiom_use: "None; these are explicit finite matrices."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.2.1, PDF pp.10–11"
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

In the ordered computational basis $(|0\rangle,|1\rangle)$ of [[def-qc-qubit-and-bloch-representation]], define the identity and Pauli endomorphisms of $Q_2$ by
$$I=\begin{pmatrix}1&0\\0&1\end{pmatrix},\qquad X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$

The displayed sign in $Y$ fixes all later orientation and rotation conventions.

## Remarks

The adjoint, product, and trace identities are proved in [[thm-qc-pauli-algebra]].


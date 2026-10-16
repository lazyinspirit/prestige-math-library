---
page: qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
title: "Qubits, Bloch Sphere, Pauli Algebra, and One-Qubit Gates"
status: draft
items:
  - def-qc-qubit-and-bloch-representation
  - def-qc-pauli-matrices
  - thm-qc-pauli-algebra
  - def-qc-bloch-coordinate-map
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - thm-qc-bloch-coordinate-existence-and-uniqueness
  - thm-qc-axis-rotation-pauli-formula
  - thm-qc-hadamard-pauli-conjugation
  - thm-qc-bloch-positivity-ball
  - thm-qc-bloch-purity-sphere
examples: []
requires:
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - registers-tensor-products-and-partial-trace
  - the-spectral-theorem-and-singular-value-decomposition
  - strongly-continuous-semigroups-and-hille-yosida
---

A qubit is the ordered two-dimensional complex register with basis $|0\rangle,|1\rangle$ and a state is a positive semidefinite trace-one operator. This page defines $X,Y,Z$ with the explicit sign convention for $Y$, proves their complete multiplication and trace table, and derives the unique real Bloch coordinates. The density operators correspond exactly to the closed unit ball in $\mathbb R^3$; its boundary sphere consists exactly of pure states. It also fixes exact matrices and scalar phases for $H,S,T$ and the Pauli gates, and proves the axis-rotation exponential formula and Hadamard conjugations. Inner products retain the repository's first-argument-linear convention through the cited state and register definitions. All claims are finite-dimensional mathematics; no physical postulate is used.


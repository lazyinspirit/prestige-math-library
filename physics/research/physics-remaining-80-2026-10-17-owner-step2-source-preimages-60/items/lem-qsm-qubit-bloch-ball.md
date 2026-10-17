---
id: lem-qsm-qubit-bloch-ball
kind: lemma
title: "Bloch-ball representation of a qubit density matrix"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsm-pauli-two-qubit-conventions
  - def-qsm-finite-two-qubit-state-and-separability
dependency_roles:
  def-qsm-pauli-two-qubit-conventions: mathematical-premise
  def-qsm-finite-two-qubit-state-and-separability: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Doron Cohen, Lecture Notes in Statistical Mechanics and Mesoscopics, §2.2"
      url: "https://physics.bgu.ac.il/~dcohen/ARCHIVE/sqm.pdf"
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1.2–2.1.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
---

## Statement

For every one-qubit density matrix $\rho$ in [[def-qsm-finite-two-qubit-state-and-separability]], there is a unique vector $a=(a_x,a_y,a_z)\in\mathbb R^3$ such that

$$\rho=\frac12(I+a_x\sigma_x+a_y\sigma_y+a_z\sigma_z).$$

The matrix is positive exactly when $|a|\le1$, where $|a|=\sqrt{a\cdot a}$ is the Euclidean norm defined in [[def-qsm-pauli-two-qubit-conventions]]. The coordinates are $a_j=\operatorname{tr}(\rho\sigma_j)$.

## Facts & Assumptions

**Given:** The Pauli matrices and trace convention of [[def-qsm-pauli-two-qubit-conventions]], and the definition of a one-qubit density matrix in [[def-qsm-finite-two-qubit-state-and-separability]].

[F1] [[def-qsm-pauli-two-qubit-conventions]]: the Pauli matrices are the displayed Hermitian matrices; $a\cdot b=a_xb_x+a_yb_y+a_zb_z$, $|a|=\sqrt{a\cdot a}$, and matrix trace is the sum of diagonal entries.

[F2] [[def-qsm-finite-two-qubit-state-and-separability]]: a one-qubit density matrix is Hermitian, positive semidefinite, and has trace one.

## Proof

1.1 Write $\rho=\begin{pmatrix}u&z\\\overline z&1-u\end{pmatrix}$, where $u\in\mathbb R$ because $\rho$ is Hermitian and the lower diagonal entry is fixed by $\operatorname{tr}\rho=1$. Set $a_x=2\operatorname{Re}z$, $a_y=-2\operatorname{Im}z$, and $a_z=2u-1$. Direct substitution of the displayed Pauli matrices gives $\rho=\tfrac12(I+a_x\sigma_x+a_y\sigma_y+a_z\sigma_z)$. Direct multiplication gives $\operatorname{tr}(\rho\sigma_j)=a_j$ for each $j$, so the entries of $\rho$ force uniqueness and each coefficient is real. [given, F1, F2, algebra]

2.1 The displayed matrix $A:=a_x\sigma_x+a_y\sigma_y+a_z\sigma_z$ is $\begin{pmatrix}a_z&a_x-ia_y\\a_x+ia_y&-a_z\end{pmatrix}$. Expanding its $2\times2$ determinant gives $\det(\lambda I-A)=\lambda^2-a_x^2-a_y^2-a_z^2=\lambda^2-|a|^2$. Thus the eigenvalues of the Hermitian matrix $A$ are $|a|$ and $-|a|$, and those of $\rho=(I+A)/2$ are $(1+|a|)/2$ and $(1-|a|)/2$. By the density definition [F2], $\rho$ is positive semidefinite exactly when both are nonnegative, which is equivalent to $|a|\le1$. [given, F1, F2, step 1.1, algebra] ∎

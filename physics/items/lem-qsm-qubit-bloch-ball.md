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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Doron Cohen, Lecture Notes in Statistical Mechanics and Mesoscopics, §2.2"
      url: "https://physics.bgu.ac.il/~dcohen/ARCHIVE/sqm.pdf"
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1.2–2.1.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
---

## Statement

Every Hermitian trace-one $2\times2$ matrix $\rho$ has a unique vector $a=(a_x,a_y,a_z)\in\mathbb R^3$ such that

$$\rho=\frac12(I+a_x\sigma_x+a_y\sigma_y+a_z\sigma_z).$$

Conversely, for every $a\in\mathbb R^3$ this formula defines a Hermitian trace-one matrix, and that matrix is positive semidefinite exactly when $|a|\le1$, where $|a|=\sqrt{a\cdot a}$ is the Euclidean norm defined in [[def-qsm-pauli-two-qubit-conventions]]. Thus the one-qubit density matrices of [[def-qsm-finite-two-qubit-state-and-separability]] are exactly the displayed matrices with $|a|\le1$. Their coordinates are $a_j=\operatorname{tr}(\rho\sigma_j)$.

## Facts & Assumptions

**Given:** The Pauli matrices and trace convention of [[def-qsm-pauli-two-qubit-conventions]], and the definition of a one-qubit density matrix in [[def-qsm-finite-two-qubit-state-and-separability]].

[F1] [[def-qsm-pauli-two-qubit-conventions]]: the Pauli matrices are the displayed Hermitian matrices; $a\cdot b=a_xb_x+a_yb_y+a_zb_z$, $|a|=\sqrt{a\cdot a}$, and matrix trace is the sum of diagonal entries.

[F2] [[def-qsm-finite-two-qubit-state-and-separability]]: a one-qubit density matrix is Hermitian, positive semidefinite, and has trace one.

## Proof

1.1 Write $\rho=\begin{pmatrix}u&z\\\overline z&1-u\end{pmatrix}$, where $u\in\mathbb R$ because $\rho$ is Hermitian and the lower diagonal entry is fixed by $\operatorname{tr}\rho=1$. Set $a_x=2\operatorname{Re}z$, $a_y=-2\operatorname{Im}z$, and $a_z=2u-1$. Direct substitution of the displayed Pauli matrices gives $\rho=\tfrac12(I+a_x\sigma_x+a_y\sigma_y+a_z\sigma_z)$. Direct multiplication gives $\operatorname{tr}(\rho\sigma_j)=a_j$ for each $j$, so the entries of $\rho$ force uniqueness and each coefficient is real. [given, F1, F2, algebra]

2.1 The constructed matrix is $\rho_a=\begin{pmatrix}p&w\\\overline w&q\end{pmatrix}$ with $p=(1+a_z)/2$, $q=(1-a_z)/2$, and $w=(a_x-ia_y)/2$. Its quadratic form at $(x,y)$ is $p|x|^2+w y\overline x+\overline w x\overline y+q|y|^2$. If $p>0$, completing the square gives $p|x+(w/p)y|^2+(q-|w|^2/p)|y|^2$, so positivity is equivalent to $q-|w|^2/p\ge0$. If $p=0$, positivity forces $w=0$ (otherwise choosing $y=1$ and $x=-tw$ for sufficiently large $t>0$ makes the quadratic form negative), and then is equivalent to $q\ge0$. In both cases the criterion is $p,q\ge0$ and $pq\ge|w|^2$. Here $pq-|w|^2=(1-a_x^2-a_y^2-a_z^2)/4=(1-|a|^2)/4$. Thus $|a|\le1$ implies the criterion, and the criterion implies $|a|\le1$. Hence $\rho_a$ is positive semidefinite exactly on the closed unit ball. [given, F1, F2, step 1.1, algebra] ∎

---
id: lem-qsm-pauli-boundary-mixture
kind: lemma
title: "Explicit separable state at the Pauli dimer boundary"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-qsm-pauli-two-qubit-conventions
  - def-qsm-finite-two-qubit-state-and-separability
  - lem-qsm-qubit-bloch-ball
dependency_roles:
  def-qsm-pauli-two-qubit-conventions: mathematical-premise
  def-qsm-finite-two-qubit-state-and-separability: mathematical-premise
  lem-qsm-qubit-bloch-ball: mathematical-premise
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
    - title: "Doron Cohen, Lecture Notes in Statistical Mechanics and Mesoscopics, §2.3"
      url: "https://physics.bgu.ac.il/~dcohen/ARCHIVE/sqm.pdf"
    - title: "Damian Markham et al., Survival of entanglement in thermal states, Example 1"
      url: "https://arxiv.org/pdf/quant-ph/0606103"
---

## Statement

For $n\in\{\pm\mathbf e_x,\pm\mathbf e_y,\pm\mathbf e_z\}$, with the standard vectors from [[def-qsm-pauli-two-qubit-conventions]], put $\rho_n=(I+n_x\sigma_x+n_y\sigma_y+n_z\sigma_z)/2$. The matrix
$$\rho_*:=\frac16\sum_{n\in\{\pm e_x,\pm e_y,\pm e_z\}}\rho_n\otimes\rho_{-n} =\frac14\left(I_4-\frac13C\right)$$
is a separable two-qubit density matrix.

## Facts & Assumptions

**Given:** The Pauli matrices, the qubit positivity criterion, and the finite-convex-product definition of separability.

[F1] [[def-qsm-pauli-two-qubit-conventions]]: the three Pauli matrices are Hermitian, square to $I$, $\mathbf e_x,\mathbf e_y,\mathbf e_z$ are the standard unit vectors of $\mathbb R^3$, and $C=\sum_j\sigma_j\otimes\sigma_j$.

[F2] [[def-qsm-finite-two-qubit-state-and-separability]]: a finite convex combination of product qubit density matrices is separable.

[F3] [[lem-qsm-qubit-bloch-ball]]: $(I+a\cdot\sigma)/2$ is a qubit density matrix whenever $a\in\mathbb R^3$ and $|a|\le1$.

## Proof

1.1 Each vector $n$ in the six-term sum has exactly one coordinate equal to $1$ or $-1$ and the others zero, so the Euclidean norm in [F1] gives $|n|=1$. Thus [F3] makes $\rho_n$ and $\rho_{-n}$ qubit density matrices. The six terms have nonnegative equal weights $1/6$ summing to one; [F2] therefore proves that $\rho_*$ is separable. [given, F1, F2, F3, algebra]

2.1 For a fixed axis $\mathbf e_j$, direct expansion gives $\rho_{e_j}\otimes\rho_{-e_j}+\rho_{-e_j}\otimes\rho_{e_j}=\tfrac12(I_4-\sigma_j\otimes\sigma_j)$. Summing this identity over $j=x,y,z$ and dividing by six yields $\rho_*=\tfrac14I_4-\tfrac1{12}C=\tfrac14(I_4-C/3)$, as claimed. [given, F1, step 1.1, algebra] ∎

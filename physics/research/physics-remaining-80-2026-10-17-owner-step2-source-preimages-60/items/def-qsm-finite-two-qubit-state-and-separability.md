---
id: def-qsm-finite-two-qubit-state-and-separability
kind: definition
title: "Finite two-qubit density matrices and separability"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsm-pauli-two-qubit-conventions
dependency_roles:
  def-qsm-pauli-two-qubit-conventions: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1.2–2.1.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
    - title: "Damian Markham et al., Survival of entanglement in thermal states, Example 1"
      url: "https://arxiv.org/pdf/quant-ph/0606103"
---

## Definition

Use the single-qubit space and ordered two-qubit basis from [[def-qsm-pauli-two-qubit-conventions]]. A one-qubit density matrix is a Hermitian $2\times2$ matrix $\rho$ such that $\langle \rho x,x\rangle\ge0$ for every $x\in\mathbb C^2$ and $\operatorname{tr}(\rho)=1$. A two-qubit density matrix is defined in the same way on $\mathbb C^2\otimes\mathbb C^2$, using the four-dimensional trace. A product density matrix is $\rho_A\otimes\rho_B$ for one-qubit density matrices $\rho_A,\rho_B$. A two-qubit density matrix is **separable** if it is a finite convex combination $\sum_{j=1}^m t_j\rho_{A,j}\otimes\rho_{B,j}$, where $t_j\ge0$ and $\sum_{j=1}^m t_j=1$. A two-qubit density matrix that is not separable is **entangled**. This finite-convex-combination convention is the one used by the local threshold proof.

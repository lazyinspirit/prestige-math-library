---
id: lem-qsm-pauli-separable-correlation-bound
kind: lemma
title: "Pauli exchange expectation bound for separable states"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-qsm-pauli-two-qubit-conventions
  - def-qsm-finite-two-qubit-state-and-separability
  - lem-qsm-qubit-bloch-ball
  - thm-cauchy-schwarz-in-an-inner-product-space
dependency_roles:
  def-qsm-pauli-two-qubit-conventions: mathematical-premise
  def-qsm-finite-two-qubit-state-and-separability: mathematical-premise
  lem-qsm-qubit-bloch-ball: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Doron Cohen, Lecture Notes in Statistical Mechanics and Mesoscopics, §2.3"
      url: "https://physics.bgu.ac.il/~dcohen/ARCHIVE/sqm.pdf"
    - title: "Damian Markham et al., Survival of entanglement in thermal states, Example 1"
      url: "https://arxiv.org/pdf/quant-ph/0606103"
---

## Statement

For every separable two-qubit density matrix $\rho$ and exchange operator $C$ from [[def-qsm-pauli-two-qubit-conventions]],
$$\operatorname{tr}(\rho C)\ge-1.$$

## Facts & Assumptions

**Given:** The Pauli exchange operator, qubit Bloch coordinates, the qubit positivity criterion, and the finite-convex-product definition of separability.

[F1] [[def-qsm-pauli-two-qubit-conventions]]: $C=\sum_{j=x,y,z}\sigma_j\otimes\sigma_j$.

[F2] [[lem-qsm-qubit-bloch-ball]]: every qubit density matrix has a Bloch vector $a\in\mathbb R^3$ with $|a|\le1$.

[F3] [[def-qsm-finite-two-qubit-state-and-separability]]: every separable $\rho$ is a finite convex combination of product density matrices.

[F4] [[thm-cauchy-schwarz-in-an-inner-product-space]]: for the real Euclidean inner product on $\mathbb R^3$, $|a\cdot b|\le |a|\,|b|$.

## Proof

1.1 For qubit density matrices $\rho_A,\rho_B$ with Bloch vectors $a,b$, factorization of the finite matrix trace gives $\operatorname{tr}((\rho_A\otimes\rho_B)C)=\sum_{j=x,y,z}\operatorname{tr}(\rho_A\sigma_j)\operatorname{tr}(\rho_B\sigma_j)=a\cdot b$. By [F4] and [F2], $a\cdot b\ge-|a||b|\ge-1$. [given, F1, F2, F4, algebra]

2.1 Write a separable $\rho$ as $\sum_{k=1}^m p_k\rho^A_k\otimes\rho^B_k$ as in [F3]. Linearity of the trace and step 1.1 give $\operatorname{tr}(\rho C)=\sum_kp_k\operatorname{tr}((\rho^A_k\otimes\rho^B_k)C)\ge\sum_kp_k(-1)=-1$. [given, F3, step 1.1, algebra] ∎

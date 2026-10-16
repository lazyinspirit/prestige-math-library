---
id: def-qa-30-mmw-game
kind: definition
title: "Matrix multiplicative-weights game and update"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qa-30-sdp-primal-dual-pair
  - def-non-negative-and-positive-operator
  - def-trace-of-a-square-matrix
  - def-qc-dirac-notation-conversion
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - lem-qa-30-hermitian-product-trace-real
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
verification:
  precheck: pass
---

## Definition

For $n\ge1$, a round count $T\ge1$, and Hermitian losses $M_1,\ldots,M_T\in\mathbb C^{n\times n}$ with $-I\preceq M_t\preceq I$, choose $0<\eta\le1$. Define $S_0=0$, $S_t=\sum_{s=1}^tM_s$, $W_t=e^{-\eta S_{t-1}}$, and $\rho_t=W_t/\operatorname{tr}(W_t)$. The round cost is $\operatorname{tr}(M_t\rho_t)$. The exponential is the finite-dimensional Hermitian spectral functional calculus. Loss matrices, access to them, and the classical or quantum work to construct them are input costs.

## Facts & Assumptions

**Given:** Finite Hermitian matrices, the finite-dimensional spectral theorem, and trace as the diagonal sum.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a Hermitian matrix has real eigenvalues and an orthonormal eigenbasis.

[F2] [[def-trace-of-a-square-matrix]]: trace is the sum of diagonal entries.

## Verification

**Proof technique:** direct.

1.1 Each $S_{t-1}$ is Hermitian, so [F1] diagonalizes it with real eigenvalues $\lambda_k$. The eigenvalues $e^{-\eta\lambda_k}$ of $W_t$ are strictly positive; thus $W_t$ is positive definite and [F2] gives $\operatorname{tr}(W_t)=\sum_ke^{-\eta\lambda_k}>0$. Therefore $\rho_t$ is defined. [given, F1, F2, algebra]

2.1 Scaling the positive operator $W_t$ by its positive trace gives $\rho_t\succeq0$, and trace linearity gives $\operatorname{tr}(\rho_t)=1$. Thus each update is a density matrix and its cost is well-defined. [given, F2, step 1.1, algebra] ∎

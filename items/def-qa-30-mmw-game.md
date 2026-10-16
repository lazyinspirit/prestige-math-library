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
  - def-self-adjoint-and-normal-endomorphism
  - prop-adjoint-algebra
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-real-and-complex-inner-product-space
  - def-non-negative-and-positive-operator
  - def-trace-of-a-square-matrix
  - def-qc-dirac-notation-conversion
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-functional-calculus-for-a-normal-endomorphism
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - def-qc-density-operator
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

For $n\ge1$, a round count $T\ge1$, and Hermitian losses $M_1,\ldots,M_T\in\mathbb C^{n\times n}$ with $-I\preceq M_t\preceq I$, choose $0<\eta\le1$. Define $S_0=0$, $S_t=\sum_{s=1}^tM_s$, $W_t=e^{-\eta S_{t-1}}$, and $\rho_t=W_t/\operatorname{tr}(W_t)$. The round cost is $\operatorname{tr}(M_t\rho_t)$. The exponential is the finite-dimensional Hermitian spectral functional calculus. Loss matrices, access to them, and the classical or quantum work to construct them are input costs.

## Facts & Assumptions

**Given:** Finite Hermitian loss matrices $M_1,\ldots,M_T$, a real parameter $0<\eta\le1$, and the trace as the diagonal sum.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional normal operator has an orthonormal eigenbasis.

[F2] [[prop-adjoint-algebra]] and [[def-self-adjoint-and-normal-endomorphism]]: adjoints distribute over finite sums, and self-adjoint operators are normal.

[F3] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Sx,y\rangle=\langle x,S^*y\rangle$.

[F4] [[def-real-and-complex-inner-product-space]]: the inner product is conjugate-symmetric.

[F5] [[def-functional-calculus-for-a-normal-endomorphism]]: for a normal $S=\sum_k\lambda_kP_k$, $f(S)=\sum_k f(\lambda_k)P_k$.

[F6] [[def-real-exponential-function-and-e]] and [[cor-exponential-reciprocal-and-positivity]]: $\exp$ is defined on $\mathbb R$ and $\exp(x)>0$ for every real $x$.

[F7] [[def-trace-of-a-square-matrix]]: trace is the sum of diagonal entries.

[F8] [[def-non-negative-and-positive-operator]] and [[def-qc-density-operator]]: nonnegative means self-adjoint with nonnegative quadratic form; positive definite means strictly positive quadratic form on nonzero vectors; a density operator is nonnegative with trace one.

[F9] [[lem-qa-30-hermitian-product-trace-real]]: the trace of a product of Hermitian matrices is real.

## Verification

**Proof technique:** direct.

1.1 Each $S_{t-1}$ is Hermitian by [F2] and hence normal, so [F1] gives an orthonormal eigenbasis $S_{t-1}e_k=\lambda_ke_k$. For each unit $e_k$, [F3] and [F4] give $\lambda_k=\langle S_{t-1}e_k,e_k\rangle=\langle e_k,S_{t-1}e_k\rangle=\overline{\lambda_k}$, so $\lambda_k\in\mathbb R$. By [F5] and [F6], the eigenvalues $\exp(-\eta\lambda_k)$ of $W_t$ are positive; hence $W_t$ is positive definite and [F7] gives $\operatorname{tr}(W_t)=\sum_k\exp(-\eta\lambda_k)>0$. Therefore $\rho_t$ is defined. [given, F1, F2, F3, F4, F5, F6, F7, algebra]

2.1 Scaling the positive operator $W_t$ by its positive trace gives $\rho_t\succeq0$, and the diagonal-sum definition of trace gives $\operatorname{tr}(\rho_t)=\operatorname{tr}(W_t)/\operatorname{tr}(W_t)=1$. Thus each update is a density matrix by [F8]. Since $M_t$ and $\rho_t$ are Hermitian, their product has real trace by [F9], so the round cost is a well-defined real number. [given, F7, F8, F9, step 1.1, algebra] ∎

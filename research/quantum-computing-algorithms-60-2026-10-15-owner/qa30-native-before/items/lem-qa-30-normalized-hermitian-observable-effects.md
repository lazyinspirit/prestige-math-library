---
id: lem-qa-30-normalized-hermitian-observable-effects
kind: lemma
title: "Normalized Hermitian observable defines a two-outcome POVM"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-real-and-complex-inner-product-space
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qc-finite-positive-effect-family
  - def-qc-density-operator
  - def-qc-dirac-notation-conversion
  - prop-trace-is-linear
  - lem-qa-30-positive-product-trace-nonnegative
  - lem-qa-30-hermitian-product-trace-real
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
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

## Statement

Let $M=M^*$ act on a finite-dimensional nonzero complex inner-product space and suppose $\|M\|\le1$. Then $E_+=(I+M)/2$ and $E_-=(I-M)/2$ are effects summing to $I$. For a density operator $\rho$, the two outcomes assigned values $+1$ and $-1$ have mean $\operatorname{tr}(M\rho)$.

## Facts & Assumptions

**Given:** The finite-dimensional operator norm, positive-operator order, density condition $\rho\succeq0$ and $\operatorname{tr}(\rho)=1$, and the Born probabilities $\operatorname{tr}(E_\pm\rho)$.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional Hermitian operator has an orthonormal eigenbasis with real eigenvalues.

[F2] [[def-qc-finite-positive-effect-family]]: an effect is an operator between $0$ and $I$, and the two effects form a POVM when their sum is $I$.

[F3] [[def-qc-density-operator]]: a density operator is nonnegative with trace one.

[F4] [[prop-trace-is-linear]]: trace is linear on finite-dimensional endomorphisms.

[F5] [[lem-qa-30-positive-product-trace-nonnegative]]: the trace of a product of positive semidefinite matrices is nonnegative real.

[F6] [[lem-qa-30-hermitian-product-trace-real]]: the trace of two Hermitian matrices' product is real.

[F7] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the supremum of $\|Tv\|$ over unit vectors $v$.

## Proof

**Proof technique:** direct.

1.1 By [F1], write the eigenvalues of $M$ with unit eigenvectors $e_k$ as $\lambda_k$. Then [F7] gives $|\lambda_k|=\|Me_k\|\le\|M\|\le1$, so the eigenvalues $(1\pm\lambda_k)/2$ of $E_\pm$ lie in $[0,1]$. Hence $0\preceq E_\pm\preceq I$, and direct addition gives $E_++E_-=I$. [given, F1, F2, F7, algebra]

2.1 By [F3] and [F5], $p_\pm=\operatorname{tr}(E_\pm\rho)$ are nonnegative; by [F6] they are real. Using [F4] and $\operatorname{tr}(\rho)=1$, $p_+-p_-=\operatorname{tr}(((I+M)/2-(I-M)/2)\rho)=\operatorname{tr}(M\rho)$. This is the mean of the $+1,-1$ outcomes. [given, F3, F4, F5, F6, step 1.1, algebra] ∎

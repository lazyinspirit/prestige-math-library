---
id: ex-zero-ritz-residual-does-not-identify-ground-state
kind: example
title: "A zero Ritz residual can belong to an excited eigenstate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - thm-finite-hermitian-ritz-residual-certifies-spectrum-and-eigendirection
  - def-countable-choice
  - thm-complex-spectral-theorem-for-normal-endomorphisms
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Under Countable Choice, take $A=\operatorname{diag}(-1,1)$ and the unit Ritz
vector $u=e_2$. Its Rayleigh quotient is $\mu=1$ and its residual norm is
$\rho=\|(A-\mu I)u\|=0$, yet the ground eigenvalue is $-1$. The residual
certifies spectral proximity but does not identify the ground-state branch.

## Facts & Assumptions

**Given:** Countable Choice, the finite Hermitian residual theorem, $A=\operatorname{diag}(-1,1)$, and $u=e_2$.

[A1] Countable Choice as stated in [[def-countable-choice]].

[F1] The residual bound places the Rayleigh value near some eigenvalue; the residual alone does not identify which eigenvalue or the lowest one ([[thm-finite-hermitian-ritz-residual-certifies-spectrum-and-eigendirection]]).

[F2] A Hermitian matrix has real eigenvalues and an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Verification

1.1 By [F2], the eigenvalues of $A$ are $-1$ and $1$, so its ground eigenvalue is $-1$. The vector $u=e_2$ is a unit eigenvector for $1$, whence $\mu=u^*Au=1$ and $(A-\mu I)u=0$. Thus $\rho=0$. [F2, given, algebra]

2.1 The general residual theorem [F1] therefore returns exact proximity to the spectrum, but this example's nearby eigenvalue is the excited value $1$, not the ground value $-1$. Even an exactly zero residual norm cannot supply spectral ordering information. [A1, F1, step 1.1, given] ∎


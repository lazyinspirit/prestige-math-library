---
id: ex-incomplete-ci-trial-energy-exceeds-finite-ground-energy
kind: example
title: "An incomplete finite trial space can lie strictly above the Hamiltonian ground energy"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-matrix-product-and-identity-matrix
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let the finite configuration space be $\mathbb C^2$ and the Hermitian
Hamiltonian be $H=\operatorname{diag}(0,2)$. Its ground energy is $0$, while
the one-dimensional trial space $V_{\mathrm{trial}}=\operatorname{span}\{e_2\}$
has variational energy $2$. This is the finite-dimensional form of the warning
that an incomplete configuration-interaction space need not contain the ground
state.

## Facts & Assumptions

**Given:** The Hamiltonian $H=\operatorname{diag}(0,2)$ on $\mathbb C^2$ and trial space $\operatorname{span}\{e_2\}$.

[F1] A Hermitian matrix has an orthonormal eigenbasis with real eigenvalues ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Verification

1.1 The eigenvalues of $H$ are $0$ and $2$, with corresponding unit eigenvectors $e_1,e_2$ by [F1]. For a unit vector $v=(a,b)$, $v^*Hv=2|b|^2\ge0$, and equality holds at $e_1$, so the full-space ground energy is $0$. [F1, given, algebra]

2.1 Every unit vector in $V_{\mathrm{trial}}$ is $e^{i\theta}e_2$ for some real $\theta$, and its energy is $(e^{i\theta}e_2)^*H(e^{i\theta}e_2)=2$. Thus the restricted minimum is $2>0$, strictly above the full finite-dimensional ground energy. [step 1.1, given, algebra] ∎


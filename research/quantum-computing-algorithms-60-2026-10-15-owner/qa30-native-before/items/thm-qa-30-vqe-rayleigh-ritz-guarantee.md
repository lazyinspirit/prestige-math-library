---
id: thm-qa-30-vqe-rayleigh-ritz-guarantee
kind: theorem
title: "VQE Rayleigh–Ritz upper bound and equality case"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qa-30-vqe-rayleigh-objective
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qc-dirac-notation-conversion
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/2012.09265v2"
      url: "https://arxiv.org/pdf/2012.09265"
verification:
  precheck: pass
---

## Statement

For every ansatz parameter $\theta$, $E(\theta)\ge E_0$, with equality exactly when $|\psi(\theta)\rangle$ lies in the ground eigenspace of $H$. Thus a VQE evaluation gives an upper bound on the ground energy, but an ansatz family or classical optimizer need not reach $E_0$.

## Facts & Assumptions

**Given:** A finite-dimensional Hermitian $H$ and a normalized ansatz state.

[F1] [[def-qa-30-vqe-rayleigh-objective]]: $E(\theta)=\langle\psi|H|\psi\rangle_D$ and $E_0=\min\sigma(H)$.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: $H$ has an orthonormal eigenbasis and real eigenvalues.

[F3] [[def-qc-dirac-notation-conversion]]: the Dirac expectation is the root-convention matrix coefficient.

## Proof

**Proof technique:** direct.

1.1 Let $e_j$ be an orthonormal eigenbasis with eigenvalues $\lambda_j\ge E_0$, and write $\psi=\sum_jc_je_j$. By [F1]–[F3], $E(\theta)-E_0=\sum_j(\lambda_j-E_0)|c_j|^2\ge0.$ The coefficients have squared magnitudes summing to one. [given, F1, F2, F3, algebra]

2.1 Every summand in step 1.1 is nonnegative. The sum is zero exactly when $c_j=0$ for each $\lambda_j>E_0$, which is exactly the condition that $\psi$ belongs to the eigenspace for $E_0$, allowing any degeneracy there. [given, step 1.1, algebra] ∎

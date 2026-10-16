---
id: def-qa-30-vqe-rayleigh-objective
kind: definition
title: "Variational eigenvalue objective"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps:
  - def-qa-30-variational-quantum-algorithm
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qc-dirac-notation-conversion
  - lem-qa-30-hermitian-product-trace-real
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

## Definition

Let $H=H^*$ be a Hermitian matrix on a nonzero finite-dimensional complex space, let $|\psi_0\rangle$ be a unit vector, and let $U(\theta)$ be a supplied unitary ansatz. The variational eigenvalue objective is
$$E(\theta)=\langle\psi(\theta)|H|\psi(\theta)\rangle_D,\qquad |\psi(\theta)\rangle=U(\theta)|\psi_0\rangle.$$
The target ground energy is $E_0=\min\sigma(H)$. The spectral theorem makes $E_0$ well-defined and each normalized state energy real. No ansatz coverage or optimizer convergence follows from this objective definition. Charge input-state preparation, each ansatz and observable call, measurements, shots, optimizer arithmetic, and output precision.

## Facts & Assumptions

**Given:** A finite Hermitian $H$, normalized $|\psi(\theta)\rangle$, and the Dirac/root conversion convention.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional Hermitian matrix has an orthonormal eigenbasis with real eigenvalues.

[F2] [[def-qc-dirac-notation-conversion]]: $\langle\psi|H|\psi\rangle_D=\langle H\psi,\psi\rangle_{\rm root}$.

## Verification

**Proof technique:** direct.

1.1 Expand $|\psi(\theta)\rangle=\sum_jc_j|e_j\rangle$ in the orthonormal eigenbasis from [F1], with eigenvalues $\lambda_j$. The root convention in [F2] gives $E(\theta)=\sum_j\lambda_j|c_j|^2$, a real number because each $\lambda_j$ is real. [given, F1, F2, algebra]

2.1 The coefficients satisfy $\sum_j|c_j|^2=1$. Therefore $E(\theta)$ is a convex combination of eigenvalues and is at least their minimum $E_0$. This defines a variational upper estimate of the ground energy, without asserting that the ansatz attains it. [given, step 1.1, algebra] ∎

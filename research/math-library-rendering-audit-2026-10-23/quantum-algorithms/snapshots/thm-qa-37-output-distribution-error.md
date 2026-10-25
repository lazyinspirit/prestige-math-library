---
id: thm-qa-37-output-distribution-error
kind: theorem
title: "Operator error bounds measured output variation"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - lem-qa-21-pure-state-trace-distance-from-vector-error
  - thm-qc-trace-norm-duality-and-norm-properties
  - thm-qc-measurement-variation-at-most-trace-distance
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-qc-trace-distance
  - def-qc-povm-and-outcome-law
  - def-qc-density-operator
justified_by: []
axiom_use: "None; finite-dimensional spectral decomposition and trace-norm inequalities are choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
      locator: "Chapter 2 §2.6.2, measurement variation and trace distance, PDF pp. 39–41."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.2, operator-norm gate error, PDF pp. 26–29."
---

## Statement

Let $U,V$ be unitary operators on a finite-dimensional Hilbert space, let
$\rho$ be any density operator, and let $\mathsf M$ be any finite POVM. If
$\|U-V\|_{\rm op}\le\epsilon$, then the outcome distributions obtained by
measuring $U\rho U^*$ and $V\rho V^*$ have total-variation distance at most
$\epsilon$.

## Facts & Assumptions

**Given:** Finite-dimensional unitaries $U,V$, a density operator $\rho$, a finite POVM, and $\|U-V\|_{\rm op}\le\epsilon$.

[F1] For unit vectors $u,v$, pure-state trace distance is at most $\|u-v\|$. [[lem-qa-21-pure-state-trace-distance-from-vector-error]]

[F2] Trace distance is one half the trace norm of the density-operator difference. [[def-qc-trace-distance]]

[F3] The trace norm obeys the triangle inequality and positive homogeneity. [[thm-qc-trace-norm-duality-and-norm-properties]]

[F4] A finite POVM's total-variation change is bounded by trace distance. [[thm-qc-measurement-variation-at-most-trace-distance]]

[F5] Every finite-dimensional density operator has an orthonormal spectral decomposition; its eigenvalues are nonnegative and sum to one. [[thm-complex-spectral-theorem-for-normal-endomorphisms]] [[def-qc-density-operator]]

[F6] The operator norm is induced by the Hilbert-space norm, and a unitary preserves that vector norm. [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]

## Proof

1.1 First let $\rho=|\psi\rangle\langle\psi|$ be pure with $\|\psi\|=1$. Then $U\psi,V\psi$ are unit vectors by [F6] and $\|U\psi-V\psi\|=\|(U-V)\psi\|\le\epsilon$ by the operator-norm definition in [F6]. By [F2] and the pure-state estimate in [F1], the output trace distance is at most $\epsilon$. [F1, F2, F6, given, algebra]

2.1 For a general density operator, [F5] gives $\rho=\sum_jp_j|\psi_j\rangle\langle\psi_j|$ with $p_j\ge0$ and $\sum_jp_j=1$. Unitary conjugation preserves this mixture. The trace-norm triangle inequality and homogeneity [F3], applied to the sum of output projector differences, bound the output trace distance by $\sum_jp_j\epsilon=\epsilon$ using step 1.1. [F2, F3, F5, step 1.1, algebra]

3.1 Apply the POVM variation bound [F4] to the two output density operators from step 2.1. Their total variation distance is at most their trace distance, hence at most $\epsilon$. [F4, step 2.1] ∎

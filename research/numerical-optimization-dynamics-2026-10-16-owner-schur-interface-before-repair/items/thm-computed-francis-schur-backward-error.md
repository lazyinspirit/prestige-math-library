---
id: thm-computed-francis-schur-backward-error
kind: theorem
title: "A computed Francis Schur factorization has a conditional normwise backward-error bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-finite-budget-francis-schur-reduction
  - alg-complex-scaled-householder-reflector-step
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - lem-scaled-householder-step-meets-local-backward-error-premise
  - lem-unitary-similarity-error-accumulation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Statement

Suppose the computed reduction completes without range failure and returns a product representation $Q$ of exact unitary reflectors and a computed factor $\widehat T$. Index every Hessenberg-reduction and QR update by $j$. Assume the local computed update has the form

$$\widehat H_j=P_j^*(\widehat H_{j-1}+E_j+D_j)P_j,$$

where $P_j$ is the exact unitary reflector represented by the stored vector, $D_j$ is the explicitly recorded deflation perturbation, $m_j$ is the active dimension, $m_ju<1$, and

$$\|E_j\|_F\le3\gamma_{m_j}\|\widehat H_{j-1}\|_F,\qquad \gamma_{m_j}=\frac{m_ju}{1-m_ju}.$$

Then $\widehat T=Q^*(A+\Delta)Q$ for some $\Delta$ satisfying

$$\|\Delta\|_F\le \sum_j3\gamma_{m_j}\|\widehat H_{j-1}\|_F+\sum_j\|D_j\|_F.$$

This is a conditional backward-error theorem. It does not assert that the current real or complex reflector implementations meet the displayed local premise, and it yields no unconditional forward eigenvalue bound for a nonnormal matrix.

## Facts & Assumptions

**Given:** The completed computed factors, exact reflector product $Q$, operationwise arithmetic with unit roundoff $u$, and the local per-step hypotheses in the statement.

[F1] [[alg-finite-budget-francis-schur-reduction]]: the output stores the exact product representation of its reflector factors and records each deflation change.

[A1] The required local premise is the two-sided similarity relation and $3\gamma_{m_j}$ bound displayed in this theorem. The current real supplier [[lem-scaled-householder-step-meets-local-backward-error-premise]] states a one-sided bound with its explicit $\kappa_r$ constant and a separate-block bound; it does not state this two-sided $3\gamma_{m_j}$ interface. The complex routine [[alg-complex-scaled-householder-reflector-step]] has no local error theorem. This is a hypothesis here, not a claim that either supplier proves it.

[F2] [[lem-unitary-similarity-error-accumulation]]: local errors conjugated through exact unitary factors give one global backward perturbation bounded by the sum of local Frobenius bounds.

[F3] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: the operationwise model fixes the unit roundoff $u$ and the convention $\gamma_m=mu/(1-mu)$ when $mu<1$.

## Proof

1.1 Apply [F2] to the finite sequence of updates in [F1], taking the local arithmetic perturbation at step $j$ to be $E_j$ and the recorded deflation perturbation to be $D_j$. It gives $\widehat T=Q^*(A+\Delta)Q$ with $\|\Delta\|_F\le\sum_j(\|E_j\|_F+\|D_j\|_F)$. [given, F1, A1, F2]

2.1 By [A1] and the convention in [F3], $\|E_j\|_F\le3\gamma_{m_j}\|\widehat H_{j-1}\|_F$ for each step. Substitution into the bound from step 1.1 gives the displayed sum. [step 1.1, A1, F3, algebra] ∎

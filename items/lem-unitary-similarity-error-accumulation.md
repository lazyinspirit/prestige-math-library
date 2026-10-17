---
id: lem-unitary-similarity-error-accumulation
kind: lemma
title: "Local unitary-similarity perturbations accumulate as a backward perturbation"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-frobenius-matrix-norm
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "James W. Demmel, Applied Numerical Linear Algebra, §4.4"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Statement

Let $A\in\mathbb C^{n\times n}$, let $U_0$ be unitary, and set $H_0=U_0^*AU_0$. For $j=1,\ldots,m$, suppose

$$H_j=P_j^*(H_{j-1}+E_j+D_j)P_j,$$

where each $P_j$ is unitary, $E_j$ is a local arithmetic perturbation, and $D_j$ is a local deflation perturbation. Then for $U_m=U_0P_1\cdots P_m$ there is a matrix $\Delta$ such that

$$H_m=U_m^*(A+\Delta)U_m,\qquad \|\Delta\|_F\le\sum_{j=1}^m\bigl(\|E_j\|_F+\|D_j\|_F\bigr).$$

The assertion also holds over $\mathbb R$ with orthogonal factors.

## Facts & Assumptions

**Given:** The matrices and update relations in the statement.

[F1] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: each $P_j$ and $U_0$ is unitary.

[F2] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: unitary multiplication on either side preserves the Frobenius norm.

## Proof

1.1 Set $\Delta_0=0$ and $U_j=U_{j-1}P_j$. If $H_{j-1}=U_{j-1}^*(A+\Delta_{j-1})U_{j-1}$, then the stated update gives $H_j=U_j^*(A+\Delta_{j-1}+U_{j-1}(E_j+D_j)U_{j-1}^*)U_j$. Thus define $\Delta_j=\Delta_{j-1}+U_{j-1}(E_j+D_j)U_{j-1}^*$. The base case holds by the definition of $H_0$, so induction gives the displayed representation for $j=m$. [given, F1, algebra]

2.1 By [F2], $\|U_{j-1}(E_j+D_j)U_{j-1}^*\|_F=\|E_j+D_j\|_F\le\|E_j\|_F+\|D_j\|_F$. Applying the triangle inequality to the sum defining $\Delta_m$ proves the stated bound. [step 1.1, F2, algebra] ∎

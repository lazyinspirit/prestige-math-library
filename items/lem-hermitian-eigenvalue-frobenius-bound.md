---
id: lem-hermitian-eigenvalue-frobenius-bound
kind: lemma
title: Hermitian eigenvalues lie within a certified Frobenius bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [thm-complex-spectral-theorem-for-normal-endomorphisms, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §§5.1 and 5.6"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

If $n\ge1$, $A=A^*\in\mathbb C^{n\times n}$ and $M\ge\|A\|_F$, then every eigenvalue $\lambda$ of $A$ satisfies $|\lambda|\le M$. More generally, if a nonempty Hermitian matrix family $\mathcal A\subseteq\mathbb C^{n\times n}$ satisfies $\|A\|_F\le M$ for all $A\in\mathcal A$, then every eigenvalue of every member lies in $[-M,M]$.

## Facts & Assumptions

**Given:** $A,\mathcal A,M$ as in the statement.

[F1] A Hermitian matrix has a unit eigenvector for each eigenvalue ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] The operator 2-norm is at most the Frobenius norm ([[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

[F3] The operator 2-norm is induced by the Euclidean vector norm ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 Let $Av=\lambda v$ with $\|v\|_2=1$. Then $|\lambda|=\|\lambda v\|_2=\|Av\|_2\le\|A\|_2\le\|A\|_F\le M$, using [F1], [F2], and the induced norm definition [F3]. [given, F1, F2, F3, algebra]

2.1 The same calculation applies separately to each $A\in\mathcal A$, using its unit eigenvectors and the common bound $M$. Since Hermitian eigenvalues are real by [F1], all are in $[-M,M]$. [given, F1, step 1.1] ∎


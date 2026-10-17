---
id: lem-hermitian-two-by-two-inertia-sign-test
kind: lemma
title: A Hermitian two-by-two pivot inertia is determined by determinant and trace signs
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [thm-complex-spectral-theorem-for-normal-endomorphisms, def-self-adjoint-and-normal-endomorphism, thm-characteristic-polynomial-is-similarity-invariant, def-characteristic-polynomial-of-a-matrix, thm-determinant-of-a-triangular-matrix, lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients, def-determinant-of-a-square-matrix, def-trace-of-a-square-matrix, lem-complex-hermitian-inertia-congruence]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §5.6"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

Let $D\in\mathbb C^{2\times2}$ be Hermitian, and let $\Delta=\det D$ and
$t=\operatorname{tr}D$, using the matrix determinant and trace. Here
$\operatorname{inertia}(D)$ denotes the counts, with multiplicity, of its
positive, negative, and zero eigenvalues ([[lem-complex-hermitian-inertia-congruence]]).
Then $\Delta$
and $t$ are real. If $\Delta<0$, then
$\operatorname{inertia}(D)=(1,1,0)$. If $\Delta>0$ and $t>0$, then
$\operatorname{inertia}(D)=(2,0,0)$; if $\Delta>0$ and $t<0$, then
$\operatorname{inertia}(D)=(0,2,0)$. No conclusion is asserted when $\Delta=0$
or when $\Delta>0$ and $t=0$.

## Facts & Assumptions

**Given:** A Hermitian matrix $D\in\mathbb C^{2\times2}$.

[F1] A Hermitian endomorphism is normal ([[def-self-adjoint-and-normal-endomorphism]]), and every finite-dimensional complex normal endomorphism has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] Similar matrices have the same characteristic polynomial ([[thm-characteristic-polynomial-is-similarity-invariant]]).

[F3] The matrix characteristic polynomial is $\chi_D(x)=\det(xI-D)$ ([[def-characteristic-polynomial-of-a-matrix]]).

[F4] The determinant of a triangular matrix is the product of its diagonal entries ([[thm-determinant-of-a-triangular-matrix]]).

[F5] For a positive-size matrix, the constant coefficient of $\chi_D$ is $\det D$ and its $x$ coefficient is $-\operatorname{tr}D$ ([[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]]).

[F6] The matrix determinant is the finite Leibniz sum ([[def-determinant-of-a-square-matrix]]).

[F7] The matrix trace is the sum of the diagonal entries ([[def-trace-of-a-square-matrix]]).

[F8] Inertia is the triple of positive, negative, and zero eigenvalue counts with multiplicity ([[lem-complex-hermitian-inertia-congruence]]).

## Proof

1.1 By [F1], choose a unitary $U$ and real eigenvalues $\lambda_1,\lambda_2$ such that $D=U\operatorname{diag}(\lambda_1,\lambda_2)U^*$. The matrices $D$ and $\operatorname{diag}(\lambda_1,\lambda_2)$ are similar, so [F2] gives the same characteristic polynomial. By [F3], [F4] and the determinant definition [F6], $\chi_D(x)=(x-\lambda_1)(x-\lambda_2)=x^2-(\lambda_1+\lambda_2)x+\lambda_1\lambda_2$. [given, F1, F2, F3, F4, F6, choose, algebra]

2.1 By [F5], the constant and linear coefficients of $\chi_D$ are $\Delta$ and $-t$. The matrix trace is the diagonal sum by [F7]. Comparing with the factorization in step 1.1 gives $\Delta=\lambda_1\lambda_2$ and $t=\lambda_1+\lambda_2$, so both are real. [F5, F7, step 1.1, algebra]

3.1 If $\Delta<0$, the two real eigenvalues have opposite signs, so there is one positive and one negative eigenvalue. If $\Delta>0$, their product is positive and neither is zero, so they have the same sign; their sum $t$ is then positive exactly when both are positive and negative exactly when both are negative. By [F8], these sign counts are the three stated inertia triples. [given, F8, step 2.1, algebra] ∎


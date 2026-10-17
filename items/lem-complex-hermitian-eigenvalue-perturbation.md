---
id: lem-complex-hermitian-eigenvalue-perturbation
kind: lemma
title: Hermitian eigenvalues move by at most the spectral norm perturbation
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [lem-complex-hermitian-realification-identities, thm-weyl-inequalities-for-self-adjoint-sums, def-operator-norm-on-a-finite-dimensional-inner-product-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §§5.2 and 5.4"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

Let $A,E\in\mathbb C^{n\times n}$ be Hermitian, and order their real eigenvalues decreasingly as $\lambda_1(A)\ge\cdots\ge\lambda_n(A)$, $\lambda_1(E)\ge\cdots\ge\lambda_n(E)$, and likewise for $A+E$. Then for every $1\le k\le n$,
$$
|\lambda_k(A+E)-\lambda_k(A)|\le\|E\|_2.
$$

## Facts & Assumptions

**Given:** Hermitian $A,E$ and the ordered eigenvalues in the statement.

[F1] Realification duplicates each Hermitian eigenvalue and preserves operator 2-norms ([[lem-complex-hermitian-realification-identities]]).

[F2] Weyl's two-sided eigenvalue inequalities hold for real self-adjoint sums ([[thm-weyl-inequalities-for-self-adjoint-sums]]).

[F3] The operator norm is induced by the Euclidean vector norm ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 Realify $A$ and $E$. Their eigenvalues in decreasing order repeat each complex eigenvalue twice, so the $2k$-th eigenvalue of $\mathcal R(A)$ is $\lambda_k(A)$ and similarly for $E$ and $A+E$. By [F2] with indices $i=2k,j=1$, the upper Weyl inequality gives $\lambda_{2k}(\mathcal R(A+E))\le\lambda_{2k}(\mathcal R(A))+\lambda_1(\mathcal R(E))$. With $i=2k,j=2n$, the lower inequality gives $\lambda_{2k}(\mathcal R(A+E))\ge\lambda_{2k}(\mathcal R(A))+\lambda_{2n}(\mathcal R(E))$. [given, F1, F2]

2.1 For a unit eigenvector $u$ of the Hermitian $E$, $|\lambda|=\|Eu\|_2\le\|E\|_2$ by [F3]. Hence $-\|E\|_2\le\lambda_{2n}(\mathcal R(E))$ and $\lambda_1(\mathcal R(E))\le\|E\|_2$ by [F1]. Step 1.1 places $\lambda_k(A+E)-\lambda_k(A)$ between these two bounds, proving the result. [given, F1, F3, step 1.1, algebra] ∎


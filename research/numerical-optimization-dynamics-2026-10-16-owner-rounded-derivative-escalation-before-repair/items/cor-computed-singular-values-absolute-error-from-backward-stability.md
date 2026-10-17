---
id: cor-computed-singular-values-absolute-error-from-backward-stability
kind: corollary
title: "Backward stable computed singular values have absolute error bounded by the perturbation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-bidiagonal-svd-backward-error-under-local-stability, lem-singular-values-lipschitz-in-spectral-norm, thm-singular-value-decomposition, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]
dependency_level: 4
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §6.3"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
    - title: "James Demmel and W. Kahan, Accurate Singular Values of Bidiagonal Matrices, Theorem 3"
      url: "https://www.netlib.org/lapack/lawnspdf/lawn03.pdf"
---

## Statement

Let $A\in\mathbb F^{m\times n}$ and put $C=A$ when $m\ge n$, $C=A^*$ when $m<n$. Suppose a successful computed SVD path in this tall orientation supplies a nearby matrix $C+E=\widehat U\widehat B\widehat V^*$ with unitary factors, as in [[thm-bidiagonal-svd-backward-error-under-local-stability]]. If the returned values are the exact singular values of $\widehat B$, then for every $1\le i\le p=\min(m,n)$,
$$|\widehat\sigma_i-\sigma_i(A)|\le\|E\|_2\le\|E\|_F.$$
This assertion applies to a successful, fully reduced result; a finite-budget `budget-exhausted` output has residual reports but no such accuracy conclusion.

## Facts & Assumptions

**Given:** The successful nearby-factorization relation in the statement and singular values $\widehat\sigma_i=\sigma_i(\widehat B)$.

[F1] [[thm-bidiagonal-svd-backward-error-under-local-stability]] supplies $C+E=\widehat U\widehat B\widehat V^*$ under its local arithmetic hypotheses.

[F2] [[lem-singular-values-lipschitz-in-spectral-norm]] bounds each singular-value change by the spectral norm of the matrix perturbation.

[F3] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: unitary factors preserve singular values and $\|E\|_2\le\|E\|_F$.

[F4] [[thm-singular-value-decomposition]]: taking the adjoint of an SVD interchanges its two orthonormal singular-vector bases and leaves the $p$ ordered singular values unchanged.

## Proof

1.1 By [F1], $C+E=\widehat U\widehat B\widehat V^*$. By [F3], $\widehat U\widehat B\widehat V^*$ has the same ordered singular values as $\widehat B$, namely $\widehat\sigma_i$; by [F4], $C$ and $A$ have the same $p$ singular values. [F1, F3, F4]

2.1 Apply [F2] to $C$ and $C+E$. It gives $|\sigma_i(C+E)-\sigma_i(C)|\le\|E\|_2$; step 1.1 identifies these singular values with $\widehat\sigma_i$ and $\sigma_i(A)$, respectively, and [F3] gives $\|E\|_2\le\|E\|_F$. [step 1.1, F2, F3, algebra] ∎

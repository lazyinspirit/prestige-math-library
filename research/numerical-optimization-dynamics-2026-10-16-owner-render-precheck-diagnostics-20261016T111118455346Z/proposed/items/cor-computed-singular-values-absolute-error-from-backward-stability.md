---
id: cor-computed-singular-values-absolute-error-from-backward-stability
kind: corollary
title: "Backward stable computed singular values have absolute error bounded by the perturbation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma, thm-bidiagonal-svd-backward-error-under-local-stability, lem-singular-values-lipschitz-in-spectral-norm, thm-singular-value-decomposition, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison, alg-implicit-shifted-bidiagonal-qr-with-deflation]
dependency_level: 6
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

Let $A\in\mathbb F^{m\times n}$ and put $C=A$ when $m\ge n$, $C=A^*$ when $m<n$. Suppose a successful computed SVD path in this tall orientation supplies $C+E=\widehat U\begin{bmatrix}\widehat B\\0\end{bmatrix}\widehat V^*$, where $\widehat U\in\mathbb F^{M\times M}$ and $\widehat V\in\mathbb F^{p\times p}$ are the exact unitary products represented by the stored local transformations, $M=\max(m,n)$, $p=\min(m,n)$, and the returned square $\widehat B\in\mathbb F^{p\times p}$ is the diagonal final bidiagonal matrix from [[alg-implicit-shifted-bidiagonal-qr-with-deflation]]. These are the theoretical factors in [[thm-bidiagonal-svd-backward-error-under-local-stability]], separate from the rounded dense accumulators returned for candidate triplets. If the returned values are the exact singular values of $\widehat B$, then for every $1\le i\le p$,
$$|\widehat\sigma_i-\sigma_i(A)|\le\|E\|_2\le\|E\|_F.$$
For actual rounded modulus readout from a diagonal $\widehat B$, let $\epsilon_{\rm read}=((1+u)^4-1)\max_i|d_i|$ for the successful scaled complex modulus algorithm; use zero for exact real absolute values. After ordering the candidates, the bound is $|\widehat\sigma_i-\sigma_i(A)|\le\|E\|_2+\epsilon_{\rm read}$. This assertion applies to a successful, fully reduced result; a finite-budget `budget-exhausted` output has residual reports but no such accuracy conclusion.

## Facts & Assumptions

**Given:** The successful nearby-factorization relation, exact values $s_i=\sigma_i(\widehat B)$, and either exact readout $\widehat\sigma_i=s_i$ or the specified rounded diagonal-modulus readout.

[F1] [[thm-bidiagonal-svd-backward-error-under-local-stability]] supplies $C+E=\widehat U\begin{bmatrix}\widehat B\\0\end{bmatrix}\widehat V^*$ under its local arithmetic hypotheses, with the same tall-orientation dimensions.

[F2] [[lem-singular-values-lipschitz-in-spectral-norm]] bounds each singular-value change by the spectral norm of the matrix perturbation.

[F3] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: unitary factors preserve singular values and $\|E\|_2\le\|E\|_F$.

[F4] [[thm-singular-value-decomposition]]: taking the adjoint of an SVD interchanges its two orthonormal singular-vector bases and leaves the $p$ ordered singular values unchanged.

[F5] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] supplies the successful real square-root and component-operation relative model.

## Proof

1.1 By [F1], $C+E=\widehat U\begin{bmatrix}\widehat B\\0\end{bmatrix}\widehat V^*$. The tall matrix $\begin{bmatrix}\widehat B\\0\end{bmatrix}$ has the singular values of $\widehat B$, since its adjoint times itself is $\widehat B^*\widehat B$; unitary invariance in [F3] therefore gives the ordered singular values $s_i$ for $C+E$. By [F4], $C$ and $A$ have the same $p$ singular values. [F1, F3, F4, algebra]

2.1 Apply [F2] to $C$ and $C+E$. It gives $|\sigma_i(C+E)-\sigma_i(C)|\le\|E\|_2$; step 1.1 identifies these singular values with $s_i$ and $\sigma_i(A)$, respectively, and [F3] gives $\|E\|_2\le\|E\|_F$. [step 1.1, F2, F3, algebra]

3.1 A scaled modulus of two real components has relative norm factors between $(1-u)^4$ and $(1+u)^4$, by expanding the two scaling operations, square products and sum, square root and rescaling. Hence each rounded magnitude differs from $|d_i|$ by at most $\epsilon_{\rm read}$. If two finite lists differ coordinatewise by at most $\epsilon$, their ordered lists do too: otherwise at the violating rank the count of entries above or below the corresponding threshold contradicts the coordinatewise bounds. Apply this to the diagonal magnitudes and combine with step 2.1. For exact readout $\widehat\sigma_i=s_i$ the first bound follows already from step 2.1; for rounded readout the additional modulus allowance gives the stated extension. Real sign removal is exact. [F5, step 2.1, algebra] ∎


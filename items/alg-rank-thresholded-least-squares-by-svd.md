---
id: alg-rank-thresholded-least-squares-by-svd
kind: algorithm
title: "Rank-thresholded least squares by the singular value decomposition"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [alg-householder-bidiagonalization, alg-implicit-shifted-bidiagonal-qr-with-deflation, def-numerical-rank-relative-to-a-norm-scale-and-tolerance, prop-spectral-numerical-rank-counts-singular-values-over-real-or-complex, def-truncated-singular-value-pseudoinverse-at-a-declared-threshold, def-inner-product-norm, lem-exact-householder-bidiagonal-reduction, lem-implicit-bidiagonal-qr-bulge-chase-unitary-equivalence]
justified_by: []
dependency_level: 6
verification:
  precheck: n/a
sources:
  references:
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §3.2.2"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
---

## Definition

Input $A\in\mathbb F^{m\times n}$, $b\in\mathbb F^m$, a rank threshold $\tau\ge0$, and a finite nonnegative integer bidiagonal-QR sweep budget $N$, with $\mathbb F=\mathbb R$ or $\mathbb C$; vector residuals use the Euclidean norm of [[def-inner-product-norm]]. First compute the Householder bidiagonal reduction. If it returns `range-failure`, stop with `inconclusive`, identify the failed stage as Householder reduction, and return its supplied partial factors and stored transformations, together with any available diagnostics; do not request a bidiagonal matrix or residual reports that the failed call did not supply. Only after successful reduction call the finite-budget bidiagonal QR procedure with deflation tolerance zero and no additional sparsity cleanup. If that call returns `range-failure` or `budget-exhausted`, stop with `inconclusive`, identify the failed stage as bidiagonal QR, and return its supplied partial work matrix, accumulators, transformation lists, deflation record, and available residual reports. No failure or budget-exhausted branch claims a least-squares solution.

On exact-arithmetic convergence, use the exact SVD record $A=U\Sigma V^*$ from the returned transformation products and diagonal candidates. Set $q=\#\{i:\sigma_i>\tau\}$, form $A_\tau=U\Sigma_\tau V^*$ and the canonical truncated pseudoinverse $A_\tau^+$ of [[def-truncated-singular-value-pseudoinverse-at-a-declared-threshold]], and compute $x_\tau=A_\tau^+b$. Return $x_\tau$, the declared threshold, $q$, the model residual $\|A_\tau x_\tau-b\|_2$, the original residual $\|Ax_\tau-b\|_2$, and the discarded tail size $\sigma_{q+1}$ (defined as $0$ for $q=p=\min(m,n)$). The strict comparison $\sigma_i>\tau$ is used, so values equal to the threshold are discarded. In finite precision, use singular-value estimates $(\widehat U,\widehat\Sigma,\widehat V)$ to form $\widehat I=\{i:\widehat\sigma_i>\tau\}$, $\widehat A_\tau=\widehat U\widehat\Sigma_\tau\widehat V^*$, and the coordinate candidate $\widehat x=\widehat V\widehat\Sigma_{\widehat I}^{+}\widehat U^*b$, where $\widehat\Sigma_{\widehat I}^{+}$ has diagonal entries $1/\widehat\sigma_i$ for $i\in\widehat I$ and zero otherwise; compute both residuals and label the threshold count `unverified` unless a certified error interval separates every compared value from $\tau$. This finite-precision candidate is not called a certified numerical rank or a minimum-norm least-squares solution.

---
page: interpolative-cur-and-nystrom-decompositions
title: Interpolative cur and nystrom decompositions
status: draft
items:
  - alg-strong-rrqr-interpolative-decomposition
  - lem-moore-penrose-products-are-orthogonal-projectors
  - def-cur-reconstruction-cores
  - def-psd-nystrom-approximation
  - lem-strong-rrqr-interpolative-decomposition-returns-a-status
  - thm-strong-rrqr-interpolative-decomposition-error
  - thm-skeleton-cur-exactness
  - thm-cur-projection-residual-bound
  - lem-nystrom-square-root-projector-identity
  - thm-psd-nystrom-order-and-exactness
  - thm-nystrom-deterministic-spectral-residual-bound
examples: []
---

This page proves a strong-RRQR-selected column interpolative decomposition with coefficient and trailing-block error bounds. The procedure returns its RRQR status and, on success, $J,T$ plus the permutation, selected and trailing blocks, interpolation matrix, inverse-row and trailing-column norms, and score diagnostics. A finite-precision run tests the exact rank of the represented dyadic input and returns the underlying RRQR certificate status and data separately from the direct ID-certificate status. The direct ID check tests the actual returned coefficients and computes the exact squared Frobenius reconstruction residual, giving an explicit spectral residual upper bound independently of RRQR certification. The capped procedure returns a status in finite work. The strong singular-value-relative error theorem is exact-arithmetic only; an analogous computed strong comparison additionally requires the RRQR score and factorization certificate.

For CUR, the skeleton core $W^\dagger$ and projected least-squares core $C^\dagger A R^\dagger$ are defined separately. The skeleton reconstruction is exact when $\operatorname{rank}(A)=\operatorname{rank}(W)=k$. The two-sided Frobenius residual bound applies to the projected core only.

The CUR statements use finite positive ambient dimensions, while Nyström uses $n\ge1$ and allows a zero sketch width. For a positive-semidefinite matrix, Nyström is a square-root orthogonal-projection compression. This proves positive-semidefinite order, exactness when the sampled columns capture $\operatorname{Ran}(A)$, and a deterministic spectral residual estimate when the leading eigenvector sketch has full row rank. The estimate is conditional on that rank premise. Randomized expected or high-probability rates, leverage-score rates, and uniform relative spectral accuracy are not asserted here; any such claim requires its own proved sampling theorem and explicit tail, gap, and rank hypotheses.

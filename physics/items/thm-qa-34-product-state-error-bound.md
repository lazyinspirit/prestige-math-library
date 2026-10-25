---
id: thm-qa-34-product-state-error-bound
kind: theorem
title: Tensor-product state errors add under trace distance
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps:
  - def-qc-density-operator
  - def-qc-trace-norm
  - def-trace-of-an-endomorphism
  - def-qc-trace-distance
  - def-qc-tensor-map
  - def-qc-tensor-register-and-permutation
  - lem-qc-trace-norm-tensor-product
  - thm-non-negative-operator-characterisations
  - thm-qc-measurement-variation-at-most-trace-distance
  - thm-qc-trace-norm-duality-and-norm-properties
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Statement

For a positive integer $L$ and density operators $\rho_j,\sigma_j$ on finite-dimensional $H_j$, $j=1,\ldots,L$,
$$D\left(\bigotimes_{j=1}^L\rho_j,\bigotimes_{j=1}^L\sigma_j\right)\le\sum_{j=1}^L D(\rho_j,\sigma_j).$$
Consequently every finite POVM on the product output changes its outcome law by at most this sum.

## Facts & Assumptions

**Given:** The finite density-operator pairs in the Statement.

[F1] [[def-qc-density-operator]]: each state is nonnegative of trace one.

[F2] [[def-qc-trace-distance]]: $D(\rho,\sigma)=\tfrac12\|\rho-\sigma\|_1$.

[F3] [[lem-qc-trace-norm-tensor-product]]: $\|A\otimes B\|_1=\|A\|_1\|B\|_1$.

[F4] [[thm-qc-measurement-variation-at-most-trace-distance]]: a finite POVM changes total variation by at most the input trace distance.

[F5] [[thm-non-negative-operator-characterisations]]: every finite-dimensional nonnegative self-adjoint operator has an orthonormal eigenbasis with nonnegative eigenvalues.

[F6] [[def-qc-tensor-map]]: tensor maps act factorwise on product vectors; [[def-qc-tensor-register-and-permutation]] supplies the finite product-basis convention.

[F7] [[thm-qc-trace-norm-duality-and-norm-properties]]: the trace norm satisfies the triangle inequality.

[F8] [[def-qc-trace-norm]]: the trace norm is the sum of singular values.

[F9] [[def-trace-of-an-endomorphism]]: the trace is the sum of diagonal entries in any orthonormal basis.

## Proof


1.1 By [F5], write each $\rho_j$ in an orthonormal eigenbasis with nonnegative eigenvalues. By [F9] their sum is $\operatorname{tr}\rho_j=1$. The tensor-product basis from [F6] diagonalizes $\bigotimes_j\rho_j$ with eigenvalues all products of those nonnegative eigenvalues. Their sum is $\prod_j\operatorname{tr}\rho_j=1$, so the product is a density operator; the same argument applies to $\bigotimes_j\sigma_j$. [given, F1, F5, F6, F9, algebra]

1.2 Add and subtract the products with their first $r$ factors changed, for $r=0,\ldots,L$, to obtain $\bigotimes_{j=1}^L\rho_j-\bigotimes_{j=1}^L\sigma_j=\sum_{r=1}^L\left(\bigotimes_{j<r}\rho_j\right)\otimes(\rho_r-\sigma_r)\otimes\left(\bigotimes_{j>r}\sigma_j\right).$ This is a finite telescoping identity. [given, construct, algebra]

2.1 Apply [F7] to the trace-norm triangle inequality for the finite sum in step 1.2. By [F1], [F5], [F8], and [F9], each unchanged state factor has trace norm one; by [F3], the $r$th summand has trace norm exactly $\|\rho_r-\sigma_r\|_1$. Divide by $2$ and use [F2] to obtain the asserted sum. [step 1.2, F1, F2, F3, F5, F7, F8, F9, algebra]

3.1 Apply [F4] to the product output states verified in step 1.1 and the declared finite POVM. The resulting outcome total variation is at most their trace distance, hence at most the sum from step 2.1. [step 1.1, step 2.1, F4] ∎

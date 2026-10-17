---
id: lem-hermitian-idempotent-trace-equals-rank
kind: lemma
title: "A Hermitian idempotent has trace equal to its rank"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-rank-r-orthogonal-projector-domain
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-matrix-product-and-identity-matrix
  - def-trace-of-a-square-matrix
  - def-rank-and-nullity
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Alan Edelman, Tomás A. Arias, and Steven T. Smith, The Geometry of Algorithms with Orthogonality Constraints, SIAM Journal on Matrix Analysis and Applications 20 (1998), §§2.3.2 and 2.5"
      url: https://math.mit.edu/~edelman/publications/geometry_of_algorithms.pdf
    - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 3, Princeton University Press (2008), §3.4.4"
      url: https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf
verification: {}
---

## Statement

If $P\in\mathbb C^{n\times n}$ is Hermitian and $P^2=P$, then
$\operatorname{tr}P=\operatorname{rank}P$, where rank is the dimension of the
image ([[def-rank-and-nullity]]).

## Facts & Assumptions

**Given:** A finite-dimensional complex inner-product space and a Hermitian idempotent endomorphism $P$.

[F1] Every normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] The rank of an endomorphism is the dimension of its image ([[def-rank-and-nullity]]).

## Proof


1.1 By [F1], choose an orthonormal eigenbasis for $P$ with eigenvalues $\lambda_1,\ldots,\lambda_n$. Idempotence gives $\lambda_j^2=\lambda_j$, so each $\lambda_j$ is $0$ or $1$. [given, F1, choose, algebra]

2.1 Let $U$ be the unitary matrix whose columns are the eigenbasis from step 1.1, so $U^*PU=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$. Expanding the diagonal sums gives $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ for square matrices, hence $\operatorname{tr}P=\operatorname{tr}(U^*PU)=\sum_j\lambda_j$. The image is spanned exactly by the eigenvectors with eigenvalue $1$, so by [F2] its dimension, and thus the rank, is the number of indices with $\lambda_j=1$. Therefore trace and rank agree. [F2, step 1.1, algebra] ∎


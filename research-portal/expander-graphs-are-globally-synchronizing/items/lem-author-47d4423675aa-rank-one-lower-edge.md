---
id: lem-author-47d4423675aa-rank-one-lower-edge
title: A negative adjacency eigenvalue survives all-ones centering
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-vertex-hilbert-space
  - prop-expander-prereq-selfadjoint-order-and-norm
  - math:thm-complex-spectral-theorem-for-normal-endomorphisms
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
dependency_roles:
  def-expander-prereq-vertex-hilbert-space: mathematical-premise
  prop-expander-prereq-selfadjoint-order-and-norm: mathematical-premise
  math:thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement

For a real symmetric $n\times n$ matrix $B$, $n\ge1$, and $p\ge0$, let $\lambda_{\min}(B)$ be its least eigenvalue and let $\|\cdot\|$ be the vertex Hilbert-space operator norm. With $J$ the all-ones matrix, $\|B-pJ\|\ge-\lambda_{\min}(B)$.

## Statement references

[[def-expander-prereq-vertex-hilbert-space]]

[[prop-expander-prereq-selfadjoint-order-and-norm]]

[[math:thm-complex-spectral-theorem-for-normal-endomorphisms]]

[[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]

## Facts & Assumptions

[F1] In the finite-dimensional complex vertex space, a real symmetric matrix is self-adjoint and therefore normal. A normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis; the vertex convention has the same adjoint and orthogonality as the library convention. [[def-expander-prereq-vertex-hilbert-space]] [[math:thm-complex-spectral-theorem-for-normal-endomorphisms]]

[F2] The induced operator norm is $\|M\|=\max_{\|v\|_2=1}\|Mv\|_2$ on the nonzero vertex space. For a real symmetric matrix $M$, the norm-order equivalence gives $-\|M\|I\preceq M\preceq\|M\|I$, hence $|u^*Mu|\le\|M\|$ for every unit vector $u$. [[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]] [[prop-expander-prereq-selfadjoint-order-and-norm]]

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the stated conclusions.

1.1 By [F1], $B$ has an orthonormal eigenbasis. Each eigenvalue is real because, for a unit eigenvector $v$, it equals the real quadratic value $v^*Bv$. Since $n\ge1$, choose a unit eigenvector $u$ for the least eigenvalue $\lambda_{\min}(B)$ among this finite nonempty spectrum. Since $u^*Ju=|\sum_i u_i|^2\ge0$, one has $u^*(B-pJ)u=\lambda_{\min}(B)-p|\sum_i u_i|^2\le\lambda_{\min}(B)$. [F1, given, algebra]

2.1 The matrix $B-pJ$ is real symmetric, so the norm bound in [F2] gives $\|B-pJ\|\ge-u^*(B-pJ)u\ge-\lambda_{\min}(B)$, proving the claim even if the right-hand side is negative. [F2, step 1.1, algebra] ∎

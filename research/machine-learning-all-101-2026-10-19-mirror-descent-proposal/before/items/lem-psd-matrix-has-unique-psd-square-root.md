---
id: lem-psd-matrix-has-unique-psd-square-root
kind: lemma
title: A positive-semidefinite matrix has a unique positive-semidefinite square root
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - def-matrix-product-and-identity-matrix
  - thm-of-square-roots
  - def-euclidean-inner-product
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.6, full-matrix AdaGrad scale $G_t^{1/2}$, PDF pp. 113–118; existence and uniqueness are proved locally here."
    - title: "John Duchi, Elad Hazan, and Yoram Singer, Adaptive Subgradient Methods for Online Learning and Stochastic Optimization"
      url: "https://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf"
      locator: "§2, diagonal adaptive scale and Gram accumulation, PDF pp. 8–10; matrix-root existence and uniqueness are proved locally here."
verification:
  precheck: n/a
---

## Statement

Let $d\ge1$ and let $G\in\mathbb R^{d\times d}$ be symmetric and positive semidefinite, meaning $v^\top Gv\ge0$ for every $v\in\mathbb R^d$. Then there is a unique symmetric positive-semidefinite matrix $H$ such that $H^2=G$. If $G=Q\operatorname{diag}(\lambda_1,\ldots,\lambda_d)Q^\top$ is an orthogonal diagonalization, this root is $H=Q\operatorname{diag}(\sqrt{\lambda_1},\ldots,\sqrt{\lambda_d})Q^\top$.

## Statement references

[[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real self-adjoint matrix has an orthonormal eigenbasis.

[[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: for a real Euclidean matrix, self-adjointness is symmetry.

[[def-matrix-product-and-identity-matrix]]: matrix products and transposes use ordinary finite-dimensional matrix algebra.

[[thm-of-square-roots]]: every nonnegative real eigenvalue has a unique nonnegative scalar square root.

[[def-euclidean-inner-product]]: the quadratic form and orthogonality use the standard Euclidean inner product.

## Facts & Assumptions

**Given:** A symmetric positive-semidefinite $G\in\mathbb R^{d\times d}$ with $d\ge1$.

[F1] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a self-adjoint endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis.

[F2] [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: in an orthonormal real basis, the adjoint matrix is the transpose, so a symmetric matrix is self-adjoint.

[F3] [[def-matrix-product-and-identity-matrix]]: products, powers, and transposes are the usual finite-dimensional matrix operations.

[F4] [[thm-of-square-roots]]: every real $\lambda\ge0$ has a unique scalar $r\ge0$ with $r^2=\lambda$.

[F5] [[def-euclidean-inner-product]]: $v^\top w=\langle v,w\rangle$ and $\|v\|_2^2=\langle v,v\rangle$ in standard orthonormal coordinates.

[A1] $G$ is symmetric and satisfies $v^\top Gv\ge0$ for all $v\in\mathbb R^d$.

## Proof

1.1 By [F1, F2], choose an orthogonal matrix $Q$ whose columns are an orthonormal eigenbasis of $G$, so $G=Q\operatorname{diag}(\lambda_1,\ldots,\lambda_d)Q^\top$. For each unit eigenvector $q_i$, $\lambda_i=q_i^\top Gq_i\ge0$ by [A1]. [given, A1, F1, F2, F5, choose, algebra]

1.2 Let $S$ be any symmetric positive-semidefinite matrix with $S^2=G$. Associativity gives $SG=S^3=GS$, so $S$ preserves every eigenspace $E_\lambda(G)$: if $Gv=\lambda v$, then $G(Sv)=S(Gv)=\lambda Sv$. Its restriction to each $E_\lambda(G)$ is symmetric and positive semidefinite. By [F1, F2] that restriction has an orthonormal eigenbasis; each eigenvalue $\mu$ satisfies $\mu\ge0$ and $\mu^2=\lambda$, hence [F4] forces $\mu=\sqrt\lambda$. Therefore $S=\sqrt\lambda I$ on each $E_\lambda(G)$. [given, A1, F1, F2, F3, F4, algebra]

2.1 By [F4], choose $r_i=\sqrt{\lambda_i}\ge0$ with $r_i^2=\lambda_i$, and set $H=Q\operatorname{diag}(r_1,\ldots,r_d)Q^\top$. This matrix is symmetric and $H^2=Q\operatorname{diag}(\lambda_1,\ldots,\lambda_d)Q^\top=G$. For every $v$, $v^\top Hv=\sum_i r_i(q_i^\top v)^2\ge0$, so $H$ is positive semidefinite. [step 1.1, F3, F4, F5, construct, algebra]

3.1 The eigenspaces in step 1.1 form an orthogonal basis of $\mathbb R^d$, and step 1.2 shows that $S$ and $H$ act identically on every vector in that basis. Hence $S=H$, proving uniqueness. [step 1.1, step 2.1, step 1.2, F1, algebra] ∎

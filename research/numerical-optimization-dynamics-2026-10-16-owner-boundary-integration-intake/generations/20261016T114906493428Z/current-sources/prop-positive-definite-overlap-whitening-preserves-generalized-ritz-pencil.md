---
id: prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil
kind: proposition
title: Positive-definite overlap whitening preserves a generalized Ritz pencil
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-cholesky-factorisation-with-positive-diagonal
  - def-matrix-product-and-identity-matrix
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 47
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf
      locator: "§47.2.1, equations (47.8)–(47.9): the stiffness–mass generalized eigenproblem."
    - title: Bertrand Mercier, Topics in Finite Element Solution of Elliptic Problems, Chapter 8
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf
      locator: "§8.4, printed p. 131: the generalized stiffness–mass eigenproblem for conforming finite elements."
verification: {}
---

## Statement

Let $H=H^*\in M_n(\mathbb C)$ be a finite Hermitian stiffness matrix and
let $S=S^*>0$ be a positive-definite overlap or mass matrix. By Cholesky
factorization ([[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]),
write $S=LL^*$ with $L$ invertible lower triangular and positive diagonal.
Define the whitened Hermitian matrix
$$\widetilde H:=L^{-1}HL^{-*},\qquad L^{-*}:=(L^*)^{-1}.$$
The generalized Ritz equation $Hc=\lambda Sc$ is equivalent under the
invertible change of coordinates $y=L^*c$ to
$\widetilde H y=\lambda y$. The Rayleigh quotients agree:
$$\frac{c^*Hc}{c^*Sc}=\frac{y^*\widetilde H y}{y^*y}\qquad(c\ne0).$$

## Facts & Assumptions

**Given:** A Hermitian matrix $H$, a Hermitian positive-definite matrix $S$,
its Cholesky factor $L$, and a nonzero coefficient vector $c$.

[F1] A Hermitian positive-definite matrix has a unique Cholesky factorization
$S=LL^*$ with $L$ lower triangular and positive real diagonal; such $L$ is
invertible ([[def-cholesky-factorisation-with-positive-diagonal]],
[[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]).

[F2] Matrix multiplication, conjugate transpose, and inverse use the
associative matrix-product convention
([[def-matrix-product-and-identity-matrix]]).

## Proof
**Proof technique:** direct.

**Given:** $H=H^*$, $S=LL^*$, $L$ invertible, $c\ne0$, and $y=L^*c$.

1.1 The matrix $\widetilde H=L^{-1}HL^{-*}$ is Hermitian, since $\widetilde H^*=(L^{-*})^*H^*(L^{-1})^* =L^{-1}HL^{-*}=\widetilde H.$ The coordinate map $c\mapsto y=L^*c$ is invertible by [F1]. [F1, F2, given, algebra]

2.1 Substituting $c=L^{-*}y$ into $Hc=\lambda Sc$ and multiplying by $L^{-1}$ gives $L^{-1}HL^{-*}y=\lambda L^{-1}LL^*L^{-*}y=\lambda y.$ Every operation is reversible because $L$ is invertible, so the generalized and whitened eigenproblems have exactly the same eigenvalues, with eigenvectors related by $y=L^*c$. [F1, F2, step 1.1, given, algebra]

3.1 With $c=L^{-*}y$, matrix multiplication gives $c^*Hc=y^*L^{-1}HL^{-*}y=y^*\widetilde H y,\qquad c^*Sc=y^*L^{-1}LL^*L^{-*}y=y^*y.$ Since $c\ne0$ iff $y\ne0$, division proves equality of the two Rayleigh quotients. [F1, F2, step 1.1, algebra] ∎

## Remarks

The equivalence is exact linear algebra. It does not by itself assert a
continuum eigenvalue bound: that requires the finite basis to be a conforming
subspace of the stated form domain and the matrices to be the corresponding
form and inner-product matrices.

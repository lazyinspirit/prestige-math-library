---
id: ex-nearly-dependent-overlap-matrix-whitening-and-conditioning
kind: example
title: A nearly dependent finite basis has an ill-conditioned overlap matrix
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-cholesky-factorisation-with-positive-diagonal
  - def-matrix-product-and-identity-matrix
  - prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 47
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf
      locator: "§47.2.1, generalized stiffness–mass Ritz matrices."
    - title: Bertrand Mercier, Topics in Finite Element Solution of Elliptic Problems, Chapter 8
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf
      locator: "§8.4, printed pp. 131–132, the conforming generalized eigenvalue pencil."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Example

For $0<\varepsilon<1$, take the two unit vectors
$$v_1=(1,0),\qquad v_2=(1-\varepsilon,\sqrt{2\varepsilon-\varepsilon^2})$$
in $\mathbb R^2$. Their overlap (Gram) matrix is
$$S_\varepsilon=\begin{pmatrix}1&1-\varepsilon\\1-\varepsilon&1\end{pmatrix}.$$
With the stiffness matrix $H=I$, the generalized Ritz eigenvalues are
$1/(2-\varepsilon)$ and $1/\varepsilon$. The basis vectors approach one
another as $\varepsilon\downarrow0$, while the overlap condition number is
$(2-\varepsilon)/\varepsilon$. Cholesky whitening changes coordinates but
preserves those generalized eigenvalues exactly.

## Facts & Assumptions

**Given:** $0<\varepsilon<1$, the vectors $v_1,v_2$, the Gram matrix
$S_\varepsilon$, and $H=I$.

[F1] Matrix products, conjugate transpose, identity matrices and the overlap
matrix convention are as in [[def-matrix-product-and-identity-matrix]].

[F2] A Hermitian positive-definite matrix has a unique Cholesky factor with
positive diagonal ([[def-cholesky-factorisation-with-positive-diagonal]],
[[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]).

[F3] Cholesky whitening preserves the eigenvalues and Rayleigh quotients of
the generalized Hermitian pencil ([[prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil]]).

## Proof

**Proof technique:** direct.

**Given:** The two basis vectors and matrices in the example.

1.1 Both vectors have norm one and $v_1^Tv_2=1-\varepsilon$, so their Gram matrix is the displayed $S_\varepsilon$. Its eigenvectors $(1,1)$ and $(1,-1)$ have eigenvalues $2-\varepsilon$ and $\varepsilon$, both positive. Thus $S_\varepsilon$ is positive definite and its spectral condition number is $(2-\varepsilon)/\varepsilon$. Also $\|v_1-v_2\|^2=2\varepsilon$, which tends to zero. [F1, given, algebra]

2.1 For $H=I$, diagonalizing $S_\varepsilon$ in the same two eigenvectors shows that $Hc=\lambda S_\varepsilon c$ has eigenvalues $\lambda=(2-\varepsilon)^{-1}$ and $\lambda=\varepsilon^{-1}$. The Cholesky factor is $L=\begin{pmatrix}1&0\\1-\varepsilon&\sqrt{2\varepsilon-\varepsilon^2}\end{pmatrix},$ so $S_\varepsilon=LL^*$ and its positive diagonal makes it the factor in [F2]. By [F3], the whitened Hermitian problem has the same two eigenvalues. For example, at $\varepsilon=1/N$ with integer $N\ge2$, the condition number is $2N-1$, which grows without bound although whitening is an exact change of coordinates. [F2, F3, step 1.1, given, algebra] ∎

## Remarks

This calculation concerns exact arithmetic. Whitening removes the overlap
matrix from the generalized pencil; it does not make the original basis
well-conditioned or provide a finite-precision stability bound.

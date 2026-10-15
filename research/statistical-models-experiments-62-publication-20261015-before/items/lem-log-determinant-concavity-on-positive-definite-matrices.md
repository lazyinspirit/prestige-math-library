---
id: lem-log-determinant-concavity-on-positive-definite-matrices
kind: lemma
title: "The log determinant is concave on positive-definite matrices"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - prop-standard-coordinate-inner-products
  - prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-determinant-of-a-triangular-matrix
  - thm-determinant-multiplicative
  - def-determinant-of-a-square-matrix
  - def-matrix-minors-cofactors-and-adjugate
  - thm-laplace-cofactor-expansion
  - thm-adjugate-identity-over-a-commutative-ring
  - prop-matrix-differentials-obey-sum-product-and-adjoint-rules
  - thm-determinant-differential-and-jacobis-formula
  - thm-derivative-of-matrix-inversion
  - prop-differentials-of-trace-and-frobenius-linear-functionals
  - def-trace-of-a-square-matrix
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §3.1.5"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
---

## Statement

For $p\ge1$, if $A_0,A_1\in\mathbb R^{p\times p}$ are symmetric and $v^{\mathsf T}A_i v>0$ for every nonzero $v\in\mathbb R^p$ and $i\in\{0,1\}$, then for every $t\in[0,1]$,
$$\log\det((1-t)A_0+tA_1)\ge(1-t)\log\det A_0+t\log\det A_1.$$

## Facts & Assumptions

**Given:** Two real symmetric positive-definite $p\times p$ matrices $A_0,A_1$, with $p\ge1$.

[F1] [[prop-standard-coordinate-inner-products]]: the standard pairing on $\mathbb R^p$ is $\langle x,y\rangle=\sum_{i<p}x_i y_i$.

[F2] [[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]: $T$ is self-adjoint if and only if $A=A^*$; over $\mathbb R$, $A^*$ is $A^{\mathsf T}$.

[F3] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a self-adjoint endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis.

[F4] [[thm-determinant-of-a-triangular-matrix]]: the determinant of a triangular matrix is the product of its diagonal entries.

[F5] [[thm-determinant-multiplicative]]: for same-sized square matrices over a commutative ring, $\det(AB)=\det(A)\det(B)$.

[F6] [[def-determinant-of-a-square-matrix]]: $\det(A):=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}a_{\sigma(i),i}$.

[F7] [[prop-matrix-differentials-obey-sum-product-and-adjoint-rules]]: $d(AB)=dA\,B+A\,dB$.

[F8] [[thm-determinant-differential-and-jacobis-formula]]: on the invertible locus, $D\det(A)[H]=\det(A)\operatorname{tr}(A^{-1}H)$.

[F9] [[thm-derivative-of-matrix-inversion]]: for invertible $A$, $D\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}$.

[F10] [[prop-differentials-of-trace-and-frobenius-linear-functionals]]: $D(\operatorname{tr})(A)[H]=\operatorname{tr}(H)$.

[F11] [[def-trace-of-a-square-matrix]]: $\operatorname{tr}(A)$ is the sum of the diagonal entries of $A$.

[F12] [[def-matrix-minors-cofactors-and-adjugate]]: for a positive-sized square matrix, the cofactors are signed deleted-row-and-column minors and $\operatorname{adj}(A)=\operatorname{cof}(A)^{\mathsf T}$.

[F13] [[thm-laplace-cofactor-expansion]]: for a positive-sized square matrix over a commutative ring, determinant expansion along any row or column is the sum of entries times their corresponding cofactors.

[F14] [[thm-adjugate-identity-over-a-commutative-ring]]: for a positive-sized square matrix over a commutative ring, $A\operatorname{adj}(A)=\operatorname{adj}(A)A=\det(A)I$.

## Proof

**Proof technique:** restrict to a line and compute its second derivative.

1.1 For $t\in[0,1]$, put $A_t=(1-t)A_0+tA_1$ and $H=A_1-A_0$. For every nonzero $v$, $v^{\mathsf T}A_tv=(1-t)v^{\mathsf T}A_0v+t v^{\mathsf T}A_1v>0$, so $A_t$ is symmetric positive definite. By [F1] the standard coordinate basis is orthonormal, [F2] makes the symmetric matrix self-adjoint, and [F3] gives an orthonormal eigenbasis. Each eigenvalue $\lambda_i(t)$ is positive because for its unit eigenvector $v_i$, $\lambda_i(t)=v_i^{\mathsf T}A_tv_i>0$. [given, F1, F2, F3, algebra]

2.1 In that eigenbasis $A_t=Q\Lambda Q^{\mathsf T}$ with $Q Q^{\mathsf T}=I_p$ and $\Lambda=\operatorname{diag}(\lambda_1(t),\ldots,\lambda_p(t))$. By [F4] and [F5], $\det A_t=\det Q\,\det\Lambda\,\det Q^{\mathsf T}=\det\Lambda=\prod_i\lambda_i(t)>0$, since [F5] gives $\det Q\det Q^{\mathsf T}=\det I_p$ and [F6] gives $\det I_p=1$ from the Leibniz formula. Thus $g(t)=\log\det A_t$ is real-valued on $[0,1]$. [F4, F5, F6, step 1.1, algebra]

3.1 Since $A_t$ is invertible, the determinant differential in [F8] is Jacobi's formula; its cofactor representation and invertible-matrix reduction use [F12], [F13], and [F14]. The scalar derivative of $\log$ then gives $g'(t)=\operatorname{tr}(A_t^{-1}H)$. [F8, F12, F13, F14, step 2.1, algebra]

4.1 Differentiate this trace along the same line. The product rule [F7], inverse derivative [F9], and trace derivative [F10] give $g''(t)=-\operatorname{tr}(A_t^{-1}H A_t^{-1}H)$. [F7, F9, F10, step 3.1, algebra]

5.1 Fix $t$ and define the symmetric matrix $S=A_t^{-1/2}HA_t^{-1/2}$ by diagonalizing $A_t$ from [F3] and taking the positive inverse square roots of its eigenvalues. By [F11], $\operatorname{tr}(XY)=\operatorname{tr}(YX)$ because both sides are $\sum_{i,j}X_{ij}Y_{ji}$ with indices interchanged; applying this identity gives $\operatorname{tr}(A_t^{-1}HA_t^{-1}H)=\operatorname{tr}(S^2)=\sum_{i,j}S_{ij}^2\ge0$. Hence [step 4.1] implies $g''(t)\le0$. [F3, F11, step 4.1, algebra]

6.1 A twice-differentiable real function with nonpositive second derivative on an interval is concave there. Applying this to $g$ yields the stated chord inequality for the arbitrary endpoints $A_0,A_1$ and $t\in[0,1]$. [step 5.1, given, algebra] ∎
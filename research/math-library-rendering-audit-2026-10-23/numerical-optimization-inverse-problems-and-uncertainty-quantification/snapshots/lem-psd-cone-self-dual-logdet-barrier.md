---
id: lem-psd-cone-self-dual-logdet-barrier
kind: lemma
title: "The positive semidefinite cone is self-dual and its log determinant barrier has parameter n"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-self-concordant-log-homogeneous-barrier
  - def-conic-optimization-primal-dual-models
  - lem-log-determinant-concavity-on-positive-definite-matrices
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-determinant-differential-and-jacobis-formula
  - thm-derivative-of-matrix-inversion
  - prop-differentials-of-trace-and-frobenius-linear-functionals
  - def-trace-of-a-square-matrix
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §11.6.1, Example 11.7, and §11.6.4, Example 11.11."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 16"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture16.pdf"
      locator: "Full §16.3, semidefinite cone and log determinant barrier."
---

## Statement

Let $n\ge1$, let $\mathbb S^n$ have trace pairing $\langle X,Y\rangle=\operatorname{tr}(XY)$, and let $\mathbb S_+^n$ be the cone of real symmetric positive semidefinite matrices. Then $(\mathbb S_+^n)^*=\mathbb S_+^n$. On $\mathbb S_{++}^n$, $F(X)=-\log\det X$ is an $n$-log-homogeneous self-concordant barrier, with
$$DF(X)[H]=-\operatorname{tr}(X^{-1}H),\qquad D^2F(X)[H,J]=\operatorname{tr}(X^{-1}HX^{-1}J),$$
and $\lambda_F(X)=\sqrt n$.

## Facts & Assumptions

**Given:** The trace pairing, positive-definite matrices, and the self-concordant barrier convention.

[F1] Every real symmetric matrix has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F2] The trace pairing on symmetric matrices is $\langle X,Y\rangle=\operatorname{tr}(XY)$ and $X\succeq0$ means $v^TXv\ge0$ for every $v$ ([[def-conic-optimization-primal-dual-models]]).

[F3] The determinant differential on invertible matrices is $D\det(X)[H]=\det(X)\operatorname{tr}(X^{-1}H)$ ([[thm-determinant-differential-and-jacobis-formula]]).

[F4] The derivative of inversion is $D(X^{-1})[H]=-X^{-1}HX^{-1}$ ([[thm-derivative-of-matrix-inversion]]).

[F5] The trace is linear in matrix entries ([[prop-differentials-of-trace-and-frobenius-linear-functionals]], [[def-trace-of-a-square-matrix]]).

[F6] The log determinant is concave on the positive-definite cone ([[lem-log-determinant-concavity-on-positive-definite-matrices]]); this published result is reused, not reproved as a separate concavity theorem here.

[F7] The Frobenius norm is $\|M\|_F=(\sum_{i,j}M_{ij}^2)^{1/2}$ for real matrices.

[F8] Euclidean vectors satisfy Cauchy–Schwarz ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

1.1 The set $\mathbb S_+^n$ is a closed convex cone because quadratic-form inequalities are preserved by nonnegative sums and limits. If both $X$ and $-X$ are positive semidefinite, their quadratic forms vanish on every vector; testing $e_i$ gives $X_{ii}=0$, then testing $e_i+e_j$ gives $X_{ij}=0$, so the cone is pointed. The identity is interior: diagonalize $E=E^T=U\operatorname{diag}(\lambda_i)U^T$. From the entry definition, $\|E\|_F^2=\sum_{i,j}E_{ij}^2=\operatorname{tr}(E^2)$; the finite sums give $\operatorname{tr}(AB)=\sum_{i,j}A_{ij}B_{ji}=\sum_{j,i}B_{ji}A_{ij}=\operatorname{tr}(BA)$, so $\operatorname{tr}(E^2)=\operatorname{tr}(\operatorname{diag}(\lambda_i^2))=\sum_i\lambda_i^2$. Thus $\|E\|_F<1$ implies $|\lambda_i|<1$ for every $i$, hence $I+E\succ0$, proving that $I$ is interior and the cone is proper. If $X,Y\succeq0$, their positive square roots exist by [F1]. The same trace identity gives $\operatorname{tr}(XY)=\operatorname{tr}(X^{1/2}YX^{1/2})\ge0$, since $X^{1/2}YX^{1/2}\succeq0$ and its diagonal entries are nonnegative. Thus $\mathbb S_+^n\subseteq(\mathbb S_+^n)^*$. Conversely, if $Y$ is in the dual cone under [F2], testing against $vv^T\succeq0$ gives $v^TYv=\operatorname{tr}(Yvv^T)\ge0$ for every $v$, so $Y\succeq0$. [F1, F2, F5, F7, algebra]

1.2 For $X\succ0$ and symmetric $H$, set $Z=X^{-1/2}HX^{-1/2}$. Then $\det(X+sH)=\det(X)\det(I+sZ)$. Diagonalizing the symmetric $Z$ and differentiating the scalar sum $-\log\det(X+sH)=-\log\det X-\sum_i\log(1+s\lambda_i(Z))$ gives $DF(X)[H]=-\operatorname{tr}(X^{-1}H)$ and $D^2F(X)[H,H]=\operatorname{tr}(Z^2)$. Polarization gives the displayed bilinear Hessian formula. Equivalently the first derivative follows from [F3], and differentiating it uses [F4]–[F5]. [F1, F2, F3, F4, F5, algebra, construct]

2.1 Differentiating the inverse formula once more gives $D^3F(X)[U,V,V]=-2\operatorname{tr}(Z_U Z_V^2)$, where $Z_U=X^{-1/2}UX^{-1/2}$ and $Z_V=X^{-1/2}VX^{-1/2}$. By [F8] after vectorizing matrices, $|\operatorname{tr}(Z_UZ_V^2)|\le\|Z_U\|_F\|Z_V^2\|_F$. Diagonalizing the symmetric $Z_V$ gives $\|Z_V^2\|_F^2=\sum_i\lambda_i^4\le(\sum_i\lambda_i^2)^2=\|Z_V\|_F^4$. The latter Frobenius norms are exactly the local norms, proving the mixed self-concordance inequality. Also $\|Z\|_2=\max_i|\lambda_i(Z)|\le(\sum_i\lambda_i(Z)^2)^{1/2}=\|Z\|_F$, so if $\|H\|_X=\|Z\|_F<1$, then $I+Z\succ0$ and $X+H\succ0$. [F1, F7, F8, step 1.2, algebra]

3.1 Scaling gives $F(\alpha X)=F(X)-n\log\alpha$. The local dual norm satisfies $\|DF(X)\|_{X,*}^2=\operatorname{tr}(I_n)=n$. If a sequence tends to a finite boundary matrix, its determinant tends to zero through positive values, so $F\to+\infty$. These facts, [F6], and the positive-definite Hessian in step 1.2 establish the stated barrier properties. [F1, F5, F6, step 1.2, algebra] ∎

---
id: thm-zero-initialized-gd-selects-minimum-norm-least-squares
kind: theorem
title: "Zero-initialized gradient descent selects minimum-norm least squares"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - alg-gradient-descent
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution
  - thm-least-squares-solutions-and-normal-equation
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the finite-dimensional real spectral theorem supplies the orthonormal eigenbasis."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Trevor Hastie, Andrea Montanari, Saharon Rosset, and Ryan J. Tibshirani, Surprises in High-Dimensional Ridgeless Least Squares Interpolation, §2.2, Proposition 1"
      url: "https://arxiv.org/pdf/1903.08560"
    - title: "Cornell CS 3780, Linear Regression, Lecture 12, pp. 1–2"
      url: "https://www.cs.cornell.edu/courses/cs3780/2026sp/slides/lec12.pdf"
---

## Statement

Let $n,d\ge1$, $X\in\mathbb R^{n\times d}$, $y\in\mathbb R^n$, and $F(w)=\frac12\|Xw-y\|_2^2$. Define the full-batch fixed-step gradient iterates by $w_0=0$ and $w_{k+1}=w_k-\eta X^{\mathsf T}(Xw_k-y)$ for every integer $k\ge0$. Here $\lambda_{\max}(X^{\mathsf T}X)$ is the largest eigenvalue of the symmetric matrix $X^{\mathsf T}X$. If $X\ne0$ and $0<\eta\le1/\lambda_{\max}(X^{\mathsf T}X)$, then $w_k$ converges to the unique least-squares minimizer of smallest Euclidean norm. If $X=0$, then every $\eta>0$ gives the constant iterate $w_k=0$, which is the unique least-squares minimizer of smallest Euclidean norm.

## Statement references

[Trevor Hastie et al., *Surprises in High-Dimensional Ridgeless Least Squares Interpolation*, §2.2, Proposition 1](https://arxiv.org/pdf/1903.08560)

[Cornell CS 3780, *Linear Regression*, Lecture 12](https://www.cs.cornell.edu/courses/cs3780/2026sp/slides/lec12.pdf)

## Facts & Assumptions

**Given:** A finite real matrix $X\in\mathbb R^{n\times d}$, a vector $y\in\mathbb R^n$, the quadratic objective $F(w)=\frac12\|Xw-y\|_2^2$, and the stated fixed-step iteration from $w_0=0$.

[F1] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: every self-adjoint endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis.

[F2] [[thm-least-squares-solutions-and-normal-equation]]: the least-squares minimizers of a finite-dimensional linear map are exactly the solutions of its normal equation, and any two minimizers differ by a vector in the map's kernel.

[F3] [[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]]: for every finite real matrix $A$ and right-hand side $b$, $A^+b$ is the unique least-squares minimizer of minimum Euclidean norm.

[F4] [[alg-gradient-descent]]: fixed-step Euclidean gradient descent uses the update $x_{k+1}=x_k-t_k\nabla f(x_k)$ when the iterate is not stationary.

## Proof

**Proof technique:** diagonalize the positive-semidefinite normal matrix and solve each scalar recurrence.

1.1 If $X=0$, then $F(w)=\frac12\|y\|_2^2$ for every $w$, and the displayed update leaves $w_0=0$ fixed. Since $\|w\|_2\ge0$ with equality only at $w=0$, this is the unique least-squares minimizer of minimum norm. [given, algebra]

1.2 Suppose $X\ne0$ and set $A=X^{\mathsf T}X$. The matrix $A$ is symmetric, and $\langle u,Au\rangle=\|Xu\|_2^2\ge0$, so its eigenvalues are nonnegative. By [F1], choose an orthonormal eigenbasis $u_1,\ldots,u_d$ with $Au_j=\lambda_j u_j$ and $0\le\lambda_j\le\lambda_{\max}$. If $\lambda_j=0$, then $Xu_j=0$ and $\langle X^{\mathsf T}y,u_j\rangle=\langle y,Xu_j\rangle=0$; conversely, $Xz=0$ implies $Az=0$, so the zero-eigenvalue space is exactly $\ker X$. [F1, given, algebra, choose]

2.1 For any increment $h$, expansion of the square gives $F(w+h)=F(w)+\langle X^{\mathsf T}(Xw-y),h\rangle+\frac12\|Xh\|_2^2$; since the last term is $O(\|h\|_2^2)$, $\nabla F(w)=Aw-X^{\mathsf T}y$. Thus the iteration is $w_{k+1}=(I-\eta A)w_k+\eta X^{\mathsf T}y$, the fixed-step update in [F4]. Writing $c_{j,k}=\langle w_k,u_j\rangle$ and $b_j=\langle X^{\mathsf T}y,u_j\rangle$, for $\lambda_j>0$ induction on $k$ gives $c_{j,k}=\frac{1-(1-\eta\lambda_j)^k}{\lambda_j}b_j$; for $\lambda_j=0$, $c_{j,k}=0$ for all $k$. [F4, given, step 1.2, algebra, induction]

3.1 The step bound gives $0\le1-\eta\lambda_j<1$ for every positive eigenvalue, including the endpoint $\eta=1/\lambda_{\max}$ where the largest-eigenvalue factor is zero. Hence $c_{j,k}\to b_j/\lambda_j$ when $\lambda_j>0$, and the zero-eigenvalue coordinates remain zero. There are finitely many coordinates, so $w_k$ converges to a vector $w_\infty$ satisfying $Aw_\infty=X^{\mathsf T}y$ and $w_\infty\perp\ker X$. [given, F1, step 1.2, step 2.1, algebra]

4.1 By [F2], the normal equation $Aw_\infty=X^{\mathsf T}y$ makes $w_\infty$ a least-squares minimizer, and every least-squares minimizer is $w_\infty+z$ for some $z\in\ker X$. The orthogonality in step 3.1 yields $\|w_\infty+z\|_2^2=\|w_\infty\|_2^2+\|z\|_2^2$, with equality to $\|w_\infty\|_2^2$ only for $z=0$. Thus $w_\infty$ is the unique minimum-norm least-squares minimizer, in agreement with [F3]. [F2, F3, step 3.1, algebra] ∎

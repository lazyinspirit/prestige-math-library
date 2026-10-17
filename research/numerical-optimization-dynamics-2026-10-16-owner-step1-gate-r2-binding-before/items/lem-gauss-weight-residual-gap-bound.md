---
id: lem-gauss-weight-residual-gap-bound
kind: lemma
title: A residual and spectral gap bound a Gaussian weight error
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - thm-jacobi-matrix-spectrum-equals-gauss-nodes
  - thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared
  - def-gauss-moment-data
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020"
      url: "https://gubner.ece.wisc.edu/gaussquad.pdf"
    - title: "MATH 373 Lecture Notes, Lecture 14: Gaussian Quadrature, §§10.2–10.5"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf"
    - title: "Walter Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
---

## Statement

Let $(a,b,m,2m-1,\mu)$ be moment data. Put $\mu_0:=\mu([a,b])>0$.
Let $J$ be the $m\times m$ real symmetric Jacobi matrix of
[[thm-jacobi-matrix-spectrum-equals-gauss-nodes]], with distinct eigenvalues
$\lambda_1<\cdots<\lambda_m$ and Gaussian weights $w_i$ of
[[thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared]].
Fix $i$, a nonzero vector $v\in\mathbb R^m$, a real number $\theta$, and
$\rho\ge0$. Suppose $\|v\|_2\ge s>0$ and
$$ \|Jv-\theta v\|_2\le\rho,\qquad g:=\min_{k\ne i}|\lambda_k-\theta|>0. $$
For $m\ge2$,
$$ \left|w_i-\mu_0\frac{v_1^2}{\|v\|_2^2}\right| \le \frac{2\sqrt2\,\mu_0\rho}{sg}. $$

## Facts & Assumptions

**Given:** Moment data, a real symmetric $J$ with distinct ordered eigenvalues, its $i$th Gaussian weight, and a nonzero candidate vector $v$ and shift $\theta$ satisfying the stated residual and gap bounds.

[F1] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: $J$ has an orthonormal eigenbasis $u_1,\ldots,u_m$ with $Ju_k=\lambda_ku_k$.

[F2] [[def-gauss-moment-data]]: $\mu_0=\mu([a,b])>0$.

[F3] [[thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared]]: $w_i=\mu_0(u_i)_1^2$ for a unit eigenvector $u_i$ at $\lambda_i$.

[F4] [[def-euclidean-inner-product]]: on $\mathbb R^m$, $\|x\|_2^2=\sum_{k=1}^m x_k^2$ and each summand is nonnegative.

## Proof

1.1 Normalize $\widehat v:=v/\|v\|_2$. Then $\|J\widehat v-\theta\widehat v\|_2=\|Jv-\theta v\|_2/\|v\|_2\le\rho/s$. Expand $\widehat v=\sum_{k=1}^m c_ku_k$ in the orthonormal basis [F1]. Then $\|J\widehat v-\theta\widehat v\|_2^2=\sum_{k=1}^{m}c_k^2(\lambda_k-\theta)^2 \ge g^2\sum_{k\ne i}c_k^2.$ Thus $\sum_{k\ne i}c_k^2\le\rho^2/(s^2g^2)$. [given, F1, F4, algebra]

2.1 Put $\varepsilon=1$ if $c_i\ge0$ and $\varepsilon=-1$ otherwise. Since $\widehat v$ and $u_i$ are unit vectors, $\|\widehat v-\varepsilon u_i\|_2^2=2(1-|c_i|)\le2(1-c_i^2)=2\sum_{k\ne i}c_k^2\le2\rho^2/(s^2g^2)$. [given, step 1.1, F1, F4, algebra]

3.1 By [F4], $\widehat v_1^2\le\sum_{k=1}^m\widehat v_k^2=1$ and $(u_i)_1^2\le\sum_{k=1}^m(u_i)_k^2=1$, since all coordinate squares are nonnegative. Hence $|\widehat v_1|,|(u_i)_1|\le1$. Therefore $|\widehat v_1^2-(u_i)_1^2| =|\widehat v_1-\varepsilon(u_i)_1|\,|\widehat v_1+\varepsilon(u_i)_1| \le2\|\widehat v-\varepsilon u_i\|_2 \le2\sqrt2\,\rho/(sg).$ [F4, step 2.1, algebra]

4.1 Since $\widehat v_1^2=v_1^2/\|v\|_2^2$, multiply step 3.1 by $\mu_0>0$ from [F2] and use [F3]. The result is the claimed Gaussian weight bound. [F2, F3, step 3.1, algebra] ∎

---
id: lem-linucb-ridge-information-matrix
kind: lemma
title: The ridge information matrix is positive definite and invertible
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
verification:
  precheck: pass
deps: [cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
       def-cholesky-factorisation-with-positive-diagonal,
       def-determinant-of-a-square-matrix,
       def-euclidean-inner-product,
       def-linear-contextual-bandit-model,
       def-matrix-product-and-identity-matrix,
       thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique,
       thm-determinant-multiplicative,
       thm-determinant-of-a-triangular-matrix,
       thm-determinant-of-transpose,
       thm-real-square-matrix-invertible-iff-determinant-nonzero]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§19.2, equations (19.4)–(19.6), and the positive-ridge discussion."
---

## Statement

In the finite-dimensional linear contextual bandit model, for every $0\le t\le n$ the matrix $V_t=\lambda I_d+\sum_{s=1}^tA_sA_s^{\mathsf T}$ is symmetric and satisfies $x^{\mathsf T}V_tx>0$ for every nonzero $x\in\mathbb R^d$. It is invertible, has determinant at least $\lambda^d>0$, and for every $x\in\mathbb R^d$,

$$x^{\mathsf T}V_t^{-1}x\le\frac{\|x\|_2^2}{\lambda}.$$

## Statement references

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, §19.2](https://tor-lattimore.com/downloads/book/book.pdf)


## Facts & Assumptions

**Given:** The model's fixed $\lambda>0$, feature vectors $A_s\in\mathbb R^d$, and the matrices $V_t=\lambda I_d+\sum_{s=1}^tA_sA_s^{\mathsf T}$.

[F1] [[def-linear-contextual-bandit-model]] gives the displayed $V_t$ and Euclidean feature vectors.

[F2] [[def-euclidean-inner-product]]: $x^{\mathsf T}y=\langle x,y\rangle$ and $\|x\|_2^2=x^{\mathsf T}x$.

[F3] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric matrix has an orthonormal eigenbasis.

[F4] [[def-cholesky-factorisation-with-positive-diagonal]] and [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]: a real symmetric matrix with positive quadratic form on nonzero vectors factors as $LL^{\mathsf T}$ with positive diagonal.

[F5] [[def-determinant-of-a-square-matrix]], [[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]], and [[thm-determinant-of-a-triangular-matrix]]: determinant is multiplicative and unchanged by transpose; for triangular $L$ it is the product of its diagonal entries. Thus for an orthogonal $Q$, $\det(Q)\det(Q^{\mathsf T})=\det(QQ^{\mathsf T})=1$.

[F6] [[thm-real-square-matrix-invertible-iff-determinant-nonzero]]: a real square matrix with nonzero determinant is invertible.

## Proof

1.1 For any $x\ne0$, the model formula gives $$x^{\mathsf T}V_tx=\lambda\|x\|_2^2+\sum_{s=1}^t(A_s^{\mathsf T}x)^2>0,$$ since $\lambda>0$ and $\|x\|_2>0$. Each summand $A_sA_s^{\mathsf T}$ is symmetric, so $V_t$ is symmetric as well. [given, F1, F2, algebra]

2.1 By [F3], choose an orthonormal eigenbasis $q_1,\ldots,q_d$ of $V_t$ with eigenvalues $\mu_1,\ldots,\mu_d$. Applying step 1.1 to each unit eigenvector gives $\mu_i=q_i^{\mathsf T}V_tq_i\ge\lambda$. [step 1.1, F3, algebra, choose]

2.2 Alternatively identifying the determinant sign explicitly, [F4] gives $V_t=LL^{\mathsf T}$ with positive diagonal. By [F5], $\det V_t=(\prod_i L_{ii})^2>0$; [F6] therefore also yields invertibility. [step 1.1, F4, F5, F6, algebra]

3.1 Expand any $x=\sum_i c_iq_i$ in that orthonormal basis. Then $x^{\mathsf T}V_t^{-1}x=\sum_i c_i^2/\mu_i\le\lambda^{-1}\sum_i c_i^2=\lambda^{-1}\|x\|_2^2$, using $\mu_i\ge\lambda>0$. This also shows $V_t^{-1}$ exists. [step 2.1, F2, algebra]

3.2 The same diagonalization and [F5] give $\det V_t=\det(Q)\det(\operatorname{diag}(\mu_1,\ldots,\mu_d))\det(Q^{\mathsf T})=\prod_i\mu_i\ge\lambda^d>0$. [step 2.1, F3, F5, algebra]

4.1 Steps 1.1, 2.2, 3.1, and 3.2 prove symmetry, strict positivity of the quadratic form, the inverse bound, the determinant lower bound, and invertibility for each $t$. The case $t=0$ uses the same formulas with an empty sum. [step 1.1, step 2.2, step 3.1, step 3.2, given] ∎

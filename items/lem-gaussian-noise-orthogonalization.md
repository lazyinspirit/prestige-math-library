---
id: lem-gaussian-noise-orthogonalization
kind: lemma
title: Orthogonal coordinates diagonalize a finite-dimensional Gaussian noise law
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-parallel-gaussian-channel-with-power-constraint, def-axiom-of-choice, def-multivariate-normal-law, def-standard-normal-and-normal-laws, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, thm-non-negative-square-root-exists-and-is-unique, thm-orthogonal-transform-preserves-standard-normal-product-law]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC is used in the multivariate-normal realization and in the published orthogonal-normal invariance theorem, at step 2.1.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.4"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2006, Lecture 4"
      url: https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/da928274a46632ce0d35d2012a1c8e74_lecture4.pdf
---

## Statement

Assume AC. Let $K\in\mathbb R^{d\times d}$ be symmetric positive definite and let $Z\sim N_d(0,K)$ be the additive noise in [[def-parallel-gaussian-channel-with-power-constraint]]. Then there are an orthogonal matrix $U$ and positive numbers $\lambda_1,\ldots,\lambda_d$ such that $K=U^T\operatorname{diag}(\lambda_1,\ldots,\lambda_d)U$ and the coordinates of $UZ$ are independent with laws $N(0,\lambda_j)$. For every input $X$, $\|UX\|_2=\|X\|_2$ and $U(X+Z)=UX+UZ$, so this change of coordinates preserves the power constraint and the channel law.

## Facts & Assumptions

**Given:** AC, a positive-definite covariance matrix $K$, and a centered Gaussian vector $Z$ with covariance $K$.

[A1] [[def-axiom-of-choice]]: AC is assumed by the multivariate-normal construction and by the orthogonal-normal invariance supplier.

[F1] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric endomorphism has an orthonormal eigenbasis; positive definiteness makes each eigenvalue positive.

[F2] [[thm-non-negative-square-root-exists-and-is-unique]]: a positive-semidefinite symmetric matrix has a unique positive-semidefinite square root.

[F3] [[def-multivariate-normal-law]] and [[def-standard-normal-and-normal-laws]]: $N_d(0,K)$ is realized as $K^{1/2}G$ with independent standard-normal coordinates in $G$.

[F4] [[thm-orthogonal-transform-preserves-standard-normal-product-law]]: under AC, if $G\sim N_d(0,I_d)$ has independent standard-normal coordinates and $U^TU=I_d$, then $UG$ again has independent standard-normal coordinates.

## Proof

1.1 By [F1], choose an orthogonal eigenbasis $U$ for $K$, so $K=U^T\Lambda U$ with $\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_d)$ and $\lambda_j>0$. The positive square root is $K^{1/2}=U^T\Lambda^{1/2}U$: this matrix is positive semidefinite, squares to $K$, and is therefore the unique square root in [F2]. [F1, F2, given, choose]

2.1 By [F3], write $Z$ in law as $K^{1/2}G$. Since $UU^T=I_d$, $UZ$ therefore has the law of $\Lambda^{1/2}UG$. By [A1] and [F4], the coordinates of $UG$ are independent standard normals; multiplication by $\sqrt{\lambda_j}$ gives independent $N(0,\lambda_j)$ coordinates. [A1, F3, F4, step 1.1, algebra]

3.1 Orthogonality gives $\|UX\|_2^2=X^TU^TUX=\|X\|_2^2$, and linearity gives $U(X+Z)=UX+UZ$. Thus the transformed channel has parallel independent Gaussian noise and exactly the same input power and code/error correspondence. [step 1.1, step 2.1, algebra] ∎

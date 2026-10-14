---
id: lem-gaussian-kullback-leibler-covariance-formula
kind: lemma
title: Kullback–Leibler divergence between nondegenerate centered Gaussian laws
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - thm-independent-random-elements-have-product-joint-law
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness
  - thm-change-of-variables-for-expectation
  - def-kullback-leibler-divergence
  - def-trace-of-a-square-matrix
  - def-determinant-of-a-square-matrix
  - thm-determinant-is-product-of-eigenvalues
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ac-supplies-sequential-choices-for-probability-constructions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: AC is inherited from the finite-dimensional Gaussian-law definition. The Borel change-of-variables supplier assumes Countable Choice, which follows from AC; no further choice is used.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, Theorems 3.2 and 5.1 proofs"
      url: "https://arxiv.org/pdf/1506.00691"
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics Lecture Notes, MIT OpenCourseWare, Chapter 5"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
dependency_level: 4
---

## Statement

Let $p\ge1$ and let $\Sigma_0,\Sigma_1$ be real symmetric positive-definite
$p\times p$ matrices. Under the Gaussian law and directional KL conventions
of [[def-multivariate-normal-law]] and
[[def-kullback-leibler-divergence]],
$$D\bigl(N_p(0,\Sigma_0)\|N_p(0,\Sigma_1)\bigr)=\frac12\left[\operatorname{tr}(\Sigma_1^{-1}\Sigma_0)-p+\log\frac{\det\Sigma_1}{\det\Sigma_0}\right].$$

## Facts & Assumptions

**Given:** Axiom of Choice, an integer $p\ge1$, and positive-definite real
symmetric matrices $\Sigma_0,\Sigma_1\in\mathbb R^{p\times p}$.

[F1] [[def-multivariate-normal-law]]: $N_p(0,\Sigma)$ is the law of
$\Sigma^{1/2}Z$ for independent standard-normal coordinates and has mean zero
and covariance $\Sigma$.

[F2] [[def-standard-normal-and-normal-laws]]: each standard-normal
coordinate has density $\phi_1(t)=(2\pi)^{-1/2}e^{-t^2/2}$ with respect to
one-dimensional Lebesgue measure.

[F3] [[thm-independent-random-elements-have-product-joint-law]]:
independent coordinates have their finite product law.

[F4] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]],
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]], and
[[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]: coordinate Lebesgue
product measure agrees with Euclidean Lebesgue measure; nonnegative product
integrals factor; finite measures agreeing on a generating pi-system agree
on its sigma-algebra.

[F5] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] and
[[thm-determinant-is-product-of-eigenvalues]]: a positive-definite symmetric
matrix has positive eigenvalues, and its determinant is their product.

[F6] [[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]:
for an invertible linear map $T:\mathbb R^p\to\mathbb R^p$ and nonnegative
Borel $h$, $\int h(y)\,dy=\int h(Tx)|\det T|\,dx$. Its Countable Choice
hypothesis follows from the assumed AC by
[[lem-ac-supplies-sequential-choices-for-probability-constructions]].

[F7] [[thm-change-of-variables-for-expectation]]: expectation of a
measurable function of a random vector is integration against its law when
the function is integrable.

[F8] [[def-kullback-leibler-divergence]]: for mutually absolutely continuous
probability laws with positive Lebesgue densities $f_0,f_1$,
$D(P_0\|P_1)=\int\log(f_0/f_1)\,dP_0$.

[F9] [[def-trace-of-a-square-matrix]] and
[[def-determinant-of-a-square-matrix]] define trace as the finite diagonal
sum and determinant as the finite Leibniz sum.

## Proof

1.1 Let $Z=(Z_1,\ldots,Z_p)$ be the independent standard-normal vector in [F1], and put $\phi_p(z)=\prod_{i=1}^p\phi_1(z_i)=(2\pi)^{-p/2}e^{-\|z\|_2^2/2}$. For every Borel rectangle $R=\prod_iB_i$, [F3] gives $\mathbb P(Z\in R)=\prod_i\int_{B_i}\phi_1(t)\,dt$. Tonelli's theorem and the product-Lebesgue identity in [F4] show that this equals $\int_R\phi_p(z)\,dz$. Rectangles generate the Borel sigma-algebra, so measure uniqueness in [F4] proves that $Z$ has density $\phi_p$. [F1, F2, F3, F4]

2.1 Let $\Sigma$ be positive definite and write $A=\Sigma^{1/2}$ using the real spectral theorem. If $\lambda_1,\ldots,\lambda_p>0$ are the eigenvalues of $\Sigma$, then $A$ has eigenvalues $\sqrt{\lambda_i}$; [F5] gives $\det A=\sqrt{\det\Sigma}>0$. For a Borel set $E\subseteq\mathbb R^p$, apply [F6] to $T=A$ and the nonnegative Borel function $g_E(x)=\mathbf1_E(x)\phi_p(A^{-1}x)|\det A^{-1}|$. This gives $$\mathbb P(AZ\in E)=\int_E\phi_p(A^{-1}x)|\det A^{-1}|\,dx.$$ Because $\|A^{-1}x\|_2^2=x^T\Sigma^{-1}x$ and $|\det A^{-1}|=(\det\Sigma)^{-1/2}$, [F1] yields the positive density $$f_\Sigma(x)=(2\pi)^{-p/2}(\det\Sigma)^{-1/2}\exp\!\left(-\frac12x^T\Sigma^{-1}x\right).$$ [F1, F5, F6, step 1.1, algebra]

3.1 The two densities in step 2.1 are strictly positive. Their log ratio is $$\log\frac{f_{\Sigma_0}(x)}{f_{\Sigma_1}(x)}=\frac12\log\frac{\det\Sigma_1}{\det\Sigma_0}+\frac12x^T(\Sigma_1^{-1}-\Sigma_0^{-1})x.$$ It is integrable under $N_p(0,\Sigma_0)$ because it is a constant plus a finite quadratic form and [F1] gives finite second moments. Applying [F7] and [F8], $$D\bigl(N_p(0,\Sigma_0)\|N_p(0,\Sigma_1)\bigr)=\frac12\log\frac{\det\Sigma_1}{\det\Sigma_0}+\frac12\operatorname{tr}\bigl((\Sigma_1^{-1}-\Sigma_0^{-1})\Sigma_0\bigr).$$ The trace identity follows by expanding the quadratic form as a finite sum and using $\mathbb E[X_iX_j]=(\Sigma_0)_{ij}$. [F1, F7, F8, F9, step 2.1, algebra]

4.1 Finite trace linearity and $\Sigma_0^{-1}\Sigma_0=I_p$ give $\operatorname{tr}((\Sigma_1^{-1}-\Sigma_0^{-1})\Sigma_0)=\operatorname{tr}(\Sigma_1^{-1}\Sigma_0)-p$. Substitution into step 3.1 proves the formula. [F9, step 3.1, algebra] ∎
---
id: lem-positive-definite-gaussian-integral
kind: lemma
title: Gaussian integral for a positive-definite quadratic form
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-cholesky-factorisation-with-positive-diagonal
  - def-countable-choice
  - def-determinant-of-a-square-matrix
  - def-euclidean-inner-product
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-borel-sigma-algebra
  - def-integral-of-a-nonnegative-simple-function
  - def-measurable-function-between-measurable-spaces
  - def-matrix-product-and-identity-matrix
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-matrix-space
  - def-nonnegative-lebesgue-integral
  - def-self-adjoint-and-normal-endomorphism
  - lem-metrics-on-rn
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-algebra-of-continuous-functions
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-borel-sets-are-lebesgue-measurable
  - thm-composition-of-continuous-functions
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - thm-determinant-of-transpose
  - thm-exponential-is-strictly-increasing
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - thm-gaussian-integral
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-monotone-convergence-for-the-integral
  - thm-nonnegative-measurable-functions-admit-increasing-simple-approximations
  - thm-of-square-roots
  - thm-real-square-matrix-invertible-iff-determinant-nonzero
  - thm-substitution-for-improper-integrals
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used by the Lebesgue and box-measure, Borel-to-Lebesgue, Riemann–Lebesgue equality, product-completion, and C^1 change-of-variables suppliers. No full Axiom of Choice is used."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Laplace method for integrals, PHYS 2400, University of Connecticut"
      url: "https://www.phys.uconn.edu/~rozman/Courses/P2400_23S/downloads/laplace-method-integrals.pdf"
      locator: "Complete 7-page PDF inspected, especially the Gaussian reductions on pp. 2–6; the exact multivariate integral is proved locally."
    - title: "NIST Digital Library of Mathematical Functions, §2.3(iii), Laplace's Method"
      url: "https://dlmf.nist.gov/2.3"
      locator: "Equations (2.3.13)–(2.3.18) and conditions (a)–(c); one-dimensional endpoint formulation, used as asymptotic context only."
    - title: "Francis Bach, Approximating Integrals with Laplace's Method"
      url: "https://francisbach.com/laplace-method/"
      locator: "The multidimensional Hessian and Jacobian derivation in the opening Laplace approximation argument; the local proof supplies domination and tails."
---

## Statement

Assume Countable Choice. Let $d\ge1$ be an integer and let $H\in M_d(\mathbb R)$,
the square-matrix space of [[def-matrix-space]],
be symmetric positive definite in the sense of
[[def-cholesky-factorisation-with-positive-diagonal]]. Let $\lambda_d$ denote
the Lebesgue measure of
[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]. Interpret the
displayed integral as the nonnegative Lebesgue integral of
[[def-nonnegative-lebesgue-integral]].
$$\int_{\mathbb R^d}\exp\!\left(-\frac12 u^{\mathsf T}Hu\right)\,d\lambda_d(u) =\frac{(2\pi)^{d/2}}{\sqrt{\det H}}.$$

## Facts & Assumptions

**Given:** Countable Choice, an integer $d\ge1$, and a real symmetric positive-definite matrix $H\in M_d(\mathbb R)$.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function.

[F1] [[def-euclidean-inner-product]]: the standard inner product is $\langle x,y\rangle=\sum_{j<d}x_jy_j$, with norm $\|x\|_2=\sqrt{\langle x,x\rangle}$.

[F2] [[def-self-adjoint-and-normal-endomorphism]] defines self-adjointness by $T=T^*$, and [[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]] says a real symmetric matrix in an orthonormal basis represents a self-adjoint endomorphism.

[F3] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a self-adjoint endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis.

[F4] [[def-cholesky-factorisation-with-positive-diagonal]] defines real positive definiteness by symmetry and $v^{\mathsf T}Hv>0$ for every nonzero $v$; [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]] supplies a factorization $H=LL^{\mathsf T}$ with $L$ lower triangular and positive diagonal.

[F5] [[def-determinant-of-a-square-matrix]], [[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]], and [[thm-determinant-of-a-triangular-matrix]]: the determinant is defined by the Leibniz formula, determinants multiply, are unchanged by transpose, and a triangular determinant is the product of its diagonal entries.

[F6] [[thm-of-square-roots]]: every nonnegative real has a unique nonnegative square root.

[F7] [[thm-gaussian-integral]]: $\int_{\mathbb R}e^{-x^2}\,dx=\sqrt\pi$.

[F8] [[thm-substitution-for-improper-integrals]]: a monotone differentiable surjection between intervals carries a convergent improper integral to the corresponding transformed integral when the proper substitution hypotheses hold on compact truncations.

[F9] [[thm-lebesgue-measure-is-a-complete-measure]] and [[thm-lebesgue-measure-of-a-box-of-every-kind]]: under Countable Choice, $\lambda_k$ is a measure and every bounded box is measurable with its volume; the boxes $[-m,m]^k$ therefore give a countable finite-measure cover of $\mathbb R^k$.

[F10] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for nonnegative product-measurable functions on sigma-finite measure spaces, the product and iterated integrals agree.

[F11] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under Countable Choice, a $C^1$ diffeomorphism transforms a nonnegative Lebesgue integral by the absolute Jacobian determinant.

[F12] [[thm-real-square-matrix-invertible-iff-determinant-nonzero]]: a real square matrix is invertible exactly when its determinant is nonzero.

[F13] [[def-matrix-product-and-identity-matrix]]: matrix products are the usual finite coordinate sums and $I$ is the identity matrix.

[F14] [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[lem-metrics-on-rn]], [[thm-algebra-of-continuous-functions]], [[thm-composition-of-continuous-functions]], [[thm-exponential-is-strictly-increasing]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[def-borel-sigma-algebra]], [[thm-borel-sets-are-lebesgue-measurable]], [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[def-measurable-function-between-measurable-spaces]], and [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: the Euclidean norm is continuous for the Euclidean metric, so $z\mapsto e^{-\|z\|_2^2/2}$ is continuous on each $\mathbb R^k$, hence Borel and Lebesgue measurable under Countable Choice; on $\mathbb R^k\times\mathbb R$, the product $e^{-\|z\|_2^2/2}e^{-t^2/2}$ is measurable for the product sigma-algebra because the coordinate projections are measurable by the measurable-rectangle definition and products of measurable functions are measurable.

[F15] [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]: under the canonical identification $\mathbb R^{k+1}=\mathbb R^k\times\mathbb R$, $\lambda_{k+1}$ is the completion of $\lambda_k\times\lambda_1$, so the measures agree on product-measurable sets.

[F16] [[def-integral-of-a-nonnegative-simple-function]] and [[def-nonnegative-lebesgue-integral]]: the integral of a nonnegative simple function is the sum of its coefficients times the measures of its level sets, and the nonnegative integral is the supremum over simple minorants.

[F17] [[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]] and [[thm-monotone-convergence-for-the-integral]]: an increasing simple approximation to a nonnegative product-measurable function has the same simple integrals under $\lambda_{k+1}$ and $\lambda_k\times\lambda_1$ by [F15]–[F16]; monotone convergence therefore makes its two nonnegative integrals equal.

[F18] [[thm-continuous-implies-integrable]] and [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: under Countable Choice, a continuous function on $[-m,m]$, $m\ge1$, is bounded and Riemann integrable, and its Riemann and Lebesgue integrals agree.

## Proof

1.1 By [F2], the symmetric matrix $H$ represents a self-adjoint endomorphism of $\mathbb R^d$. By [F3], choose an orthonormal eigenbasis $q_1,\ldots,q_d$ with eigenvalues $\lambda_1,\ldots,\lambda_d$. Positive definiteness [F4] gives $\lambda_j\|q_j\|_2^2=q_j^{\mathsf T}Hq_j>0$, so each $\lambda_j>0$. Writing $Q$ for the matrix with these columns and $\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_d)$, we have $H=Q\Lambda Q^{\mathsf T}$ and $Q^{\mathsf T}Q=I$ by orthonormality. By the Leibniz definition of determinant in [F5], $\det I=1$; multiplicativity and transpose invariance then give $(\det Q)^2=1$. Also $\det\Lambda=\prod_j\lambda_j>0$ by [F5], hence $\det H=(\det Q)^2\det\Lambda=\prod_j\lambda_j>0$. [given, F1, F2, F3, F4, F5, F13, algebra, choose]

1.2 The substitution $x=\sqrt2\,t$ in [F8], followed by [F7], gives the improper Riemann value $\int_{\mathbb R}e^{-x^2/2}\,dx=\sqrt{2\pi}$. On each $[-m,m]$, $m\ge1$, the continuous integrand has equal Riemann and Lebesgue integrals by [F14] and [F18]. The nonnegative measurable functions $e^{-x^2/2}\mathbf1_{[-m,m]}(x)$ increase to $e^{-x^2/2}$ on $\mathbb R$, so monotone convergence [F17] identifies $G_1:=\int_{\mathbb R}e^{-x^2/2}\,d\lambda_1(x)$ with the limit of these proper integrals, namely $\sqrt{2\pi}$. [A1, F7, F8, F14, F17, F18, algebra]

2.1 By [F4], choose a lower-triangular $L$ with positive diagonal such that $H=LL^{\mathsf T}$. Then [F5] gives $\det H=(\det L)^2$ and $\det L>0$, so [F6] identifies $\sqrt{\det H}=\det L$. Since $\det L>0$, [F12] also shows that $L$ is invertible. [step 1.1, F4, F5, F6, F12, F13, algebra, choose]

2.2 For $k\ge1$ put $G_k:=\int_{\mathbb R^k}e^{-\|z\|_2^2/2}\,d\lambda_k(z)$. For each $k$, the spaces $\mathbb R^k$ and $\mathbb R$ are sigma-finite by [F9], and [F14] makes the product integrand product-measurable. By [F15]–[F17], its integral under $\lambda_{k+1}$ equals its integral under $\lambda_k\times\lambda_1$; Tonelli [F10] then gives $G_{k+1}=G_kG_1$. Starting at [step 1.2], induction yields $G_d=(2\pi)^{d/2}$. [A1, step 1.2, F1, F9, F10, F14, F15, F16, F17, ih, discharge-induction]

3.1 The linear map $T(u)=L^{\mathsf T}u$ is a $C^1$ diffeomorphism of $\mathbb R^d$ by step 2.1, with Jacobian determinant $\det(L^{\mathsf T})=\det L>0$ by [F5]. Since $u^{\mathsf T}Hu=\|L^{\mathsf T}u\|_2^2$, [F11] gives $G_d=\det L\int_{\mathbb R^d}e^{-u^{\mathsf T}Hu/2}\,d\lambda_d(u)$. [A1, F1, F4, F5, F11, F13, step 2.1, step 2.2, algebra]

4.1 Substituting [step 2.2] and $\det L=\sqrt{\det H}$ from [step 2.1] into [step 3.1] gives the asserted formula. [step 2.1, step 2.2, step 3.1, algebra] ∎

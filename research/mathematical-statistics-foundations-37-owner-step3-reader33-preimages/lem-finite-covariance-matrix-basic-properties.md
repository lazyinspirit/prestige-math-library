---
id: lem-finite-covariance-matrix-basic-properties
kind: lemma
title: "Basic finite covariance matrix identities for robust mean bounds"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [def-random-element-and-real-random-variable, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-moments-variance-and-covariance, cor-expectation-linearity-monotonicity-and-modulus-bound, thm-cauchy-schwarz-in-an-inner-product-space, def-euclidean-inner-product, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases, def-rayleigh-quotient, cor-rayleigh-quotient-extreme-eigenvalue-characterisation]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Stanislav Minsker, Geometric Median and Robust Estimation in Banach Spaces, Corollary 4.1"
      url: "https://arxiv.org/pdf/1308.1334"
      locator: "PDF p. 8; finite-second-moment covariance trace in the Hilbert mean bound. The finite-dimensional entry and Rayleigh-quotient arguments are proved locally."
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, Theorem 2"
      url: "https://arxiv.org/pdf/1907.11391"
      locator: "PDF pp. 14–16; multivariate covariance trace and largest-eigenvalue terms used in the robust mean rate. The lemma verifies their relation locally."
---

## Statement

Let $d\ge1$ and let $X$ be a Borel random vector in $\mathbb R^d$ with $E\|X\|_2^2<\infty$. Define $\mu=EX$ coordinatewise, $Y=X-\mu$, and the finite matrix $\Sigma$ by $\Sigma_{rs}=E[Y_rY_s]$ for $1\le r,s\le d$. Then $\Sigma$ is symmetric positive semidefinite,
$$
\operatorname{tr}\Sigma=E\|X-\mu\|_2^2,
$$
and $0\le\lambda_{\max}(\Sigma)\le\operatorname{tr}\Sigma$. If $\operatorname{tr}\Sigma=0$, then $X=\mu$ almost surely.

## Facts & Assumptions

**Given:** A Borel random vector $X$ in $\mathbb R^d$, $d\ge1$, with finite second moment.

[F1] A real random variable is a measurable map to $\mathbb R$, expectation is integration against the probability measure, and variance is the second centered moment ([[def-random-element-and-real-random-variable]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[def-moments-variance-and-covariance]]).

[F2] Expectation is linear for integrable variables, and Cauchy–Schwarz bounds the expectation of a product by the product of the square-root second moments ([[cor-expectation-linearity-monotonicity-and-modulus-bound]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F3] The Euclidean inner product is $\langle x,y\rangle=\sum_{r=1}^d x_ry_r$ and $\|x\|_2^2=\langle x,x\rangle$ ([[def-euclidean-inner-product]]).

[F4] A nonnegative measurable function with integral zero vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F5] A symmetric matrix in the standard orthonormal basis represents a self-adjoint endomorphism; its largest eigenvalue is the maximum of its Rayleigh quotient $R_\Sigma(v)=\langle\Sigma v,v\rangle/\langle v,v\rangle$ over nonzero $v$ ([[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]], [[def-rayleigh-quotient]], [[cor-rayleigh-quotient-extreme-eigenvalue-characterisation]]).

## Proof

**Proof technique:** direct.

**Given:** A Borel random vector $X$ in $\mathbb R^d$, $d\ge1$, with $E\|X\|_2^2<\infty$.

1.1 Each coordinate $X_r$ is square-integrable because $|X_r|\le\|X\|_2$, and is integrable by [F2]. Hence each $\mu_r$ is finite. Also $E[Y_r^2]\le2E[X_r^2]+2\mu_r^2<\infty$. For every $r,s$, [F2] gives $E|Y_rY_s|\le\sqrt{E[Y_r^2]E[Y_s^2]}<\infty$, so every entry of $\Sigma$ exists. Since $Y_rY_s=Y_sY_r$, $\Sigma$ is symmetric. [F1, F2, F3, given, algebra]

2.1 For $v\in\mathbb R^d$, linearity of expectation [F2] and the finite-sum definition [F3] give $v^{\mathsf T}\Sigma v=E[\langle v,Y\rangle^2]\ge0$, so $\Sigma$ is positive semidefinite. Summing its diagonal entries and using linearity again yields $\operatorname{tr}\Sigma=E[\sum_{r=1}^dY_r^2]=E\|Y\|_2^2$. [F2, F3, step 1.1, algebra]

3.1 For nonzero $v$, [F5] identifies $\lambda_{\max}(\Sigma)$ with the maximum Rayleigh quotient; by [F2], Cauchy–Schwarz gives $R_\Sigma(v)=E[\langle v,Y\rangle^2]/\|v\|_2^2\le E\|Y\|_2^2=\operatorname{tr}\Sigma$. Positive semidefiniteness from step 2.1 also gives $R_\Sigma(v)\ge0$, so maximizing proves $0\le\lambda_{\max}(\Sigma)\le\operatorname{tr}\Sigma$. [F2, F3, F5, step 2.1, algebra]

4.1 If $\operatorname{tr}\Sigma=0$, step 2.1 gives $E\|Y\|_2^2=0$. Apply [F4] to the nonnegative measurable function $\|Y\|_2^2$; it is zero almost surely. The Euclidean norm is positive definite, so $Y=0$ almost surely and $X=\mu$ almost surely. [F3, F4, step 2.1] ∎


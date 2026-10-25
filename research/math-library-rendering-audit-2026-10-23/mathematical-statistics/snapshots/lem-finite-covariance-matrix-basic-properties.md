---
id: lem-finite-covariance-matrix-basic-properties
kind: lemma
title: "Basic finite covariance matrix identities for robust mean bounds"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [def-random-element-and-real-random-variable, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-moments-variance-and-covariance, cor-expectation-linearity-monotonicity-and-modulus-bound, thm-cauchy-schwarz-in-an-inner-product-space, def-euclidean-inner-product, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases, def-rayleigh-quotient, cor-rayleigh-quotient-extreme-eigenvalue-characterisation]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
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

[F1] The Borel random-vector hypothesis means inverse images of Borel sets are measurable; composing with the continuous coordinate and norm-square maps preserves this property because inverse images of open sets under continuous maps are open. Expectation is integration against the probability measure and variance is the second centered moment ([[def-random-element-and-real-random-variable]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[def-moments-variance-and-covariance]]).

[F2] Expectation is linear for integrable variables ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]). The pointwise inequalities $|x|\le1+x^2$ and $2|xy|\le x^2+y^2$ give the integrability bounds used below.

[F3] The Euclidean inner product is $\langle x,y\rangle=\sum_{r=1}^d x_ry_r$ and $\|x\|_2^2=\langle x,x\rangle$ ([[def-euclidean-inner-product]]).

[F4] A nonnegative measurable function with integral zero vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F5] Cauchy–Schwarz holds in the Euclidean inner product, and a symmetric matrix in the standard orthonormal basis represents a self-adjoint endomorphism whose largest eigenvalue is the maximum of its Rayleigh quotient $R_\Sigma(v)=\langle\Sigma v,v\rangle/\langle v,v\rangle$ over nonzero $v$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]], [[def-rayleigh-quotient]], [[cor-rayleigh-quotient-extreme-eigenvalue-characterisation]]).

## Proof

**Proof technique:** direct.

**Given:** A Borel random vector $X$ in $\mathbb R^d$, $d\ge1$, with $E\|X\|_2^2<\infty$.

1.1 Each coordinate $X_r$ is square-integrable because $|X_r|\le\|X\|_2$, and is integrable since $|X_r|\le1+X_r^2$. Hence each $\mu_r$ is finite. Also $E[Y_r^2]\le2E[X_r^2]+2\mu_r^2<\infty$. For every $r,s$, the pointwise inequality $2|Y_rY_s|\le Y_r^2+Y_s^2$ gives $E|Y_rY_s|<\infty$, so every entry of $\Sigma$ exists. Since $Y_rY_s=Y_sY_r$, $\Sigma$ is symmetric. [F1, F3, given, algebra]

2.1 For $v\in\mathbb R^d$, linearity of expectation [F2] and the finite-sum definition [F3] give $v^{\mathsf T}\Sigma v=E[\langle v,Y\rangle^2]\ge0$, so $\Sigma$ is positive semidefinite. Summing its diagonal entries and using linearity again yields $\operatorname{tr}\Sigma=E[\sum_{r=1}^dY_r^2]=E\|Y\|_2^2$. [F2, F3, step 1.1, algebra]

3.1 For nonzero $v$, [F5] identifies $\lambda_{\max}(\Sigma)$ with the maximum Rayleigh quotient; pointwise Euclidean Cauchy–Schwarz gives $R_\Sigma(v)=E[\langle v,Y\rangle^2]/\|v\|_2^2\le E\|Y\|_2^2=\operatorname{tr}\Sigma$. Positive semidefiniteness from step 2.1 also gives $R_\Sigma(v)\ge0$, so maximizing proves $0\le\lambda_{\max}(\Sigma)\le\operatorname{tr}\Sigma$. [F3, F5, step 2.1, algebra]

4.1 If $\operatorname{tr}\Sigma=0$, step 2.1 gives $E\|Y\|_2^2=0$. By [F1], the continuous polynomial $x\mapsto\|x-\mu\|_2^2$ composed with the Borel map $X$ is measurable, so [F4] applies and gives $\|Y\|_2^2=0$ almost surely. The Euclidean norm is positive definite, hence $Y=0$ almost surely and $X=\mu$ almost surely. [F1, F4, step 2.1] ∎


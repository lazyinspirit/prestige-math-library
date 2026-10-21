---
id: lem-gaussian-hermite-covariance-expansion
kind: lemma
title: Hermite expansion of a correlated Gaussian feature kernel
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - cor-cauchy-schwarz-for-random-variables
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - cor-mean-value-theorem
  - def-axiom-of-choice
  - def-monic-probabilists-hermite-polynomials
  - def-multivariate-normal-law
  - def-real-exponential-function-and-e
  - def-standard-normal-and-normal-laws
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-gaussian-ltwo-hermite-completeness
  - lem-hermite-orthogonality-and-monomial-expansion
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-derivative-of-exponential
  - thm-dominated-convergence
  - thm-exponential-addition-formula
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arthur Jacot, Franck Gabriel, and Clément Hongler, Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
      url: "https://arxiv.org/pdf/1806.07572"
      locator: "Appendix A.4, Lemma 2, printed pp. 16–17; Hermite expansion of the Gaussian dual activation"
---

## Statement

Assume AC. Let $\gamma$ be standard Gaussian measure, let $h_m=H_m/\sqrt{m!}$ be the normalized probabilists’ Hermite basis, and let $f,g\in L^2(\gamma)$ have coefficients $a_m=\int f h_m\,d\gamma$ and $b_m=\int g h_m\,d\gamma$. For $\rho\in[-1,1]$, let $(X,Y)$ have the centered bivariate normal law with unit variances and correlation $\rho$. Then
$$\mathbb E[f(X)g(Y)]=\sum_{m=0}^{\infty}a_mb_m\rho^m.$$
The series is absolutely convergent, including at $\rho=\pm1$. In particular, the Gaussian dual kernel of $f$ is $\sum_{m\ge0}a_m^2\rho^m$, and $\sum_{m\ge0}a_m^2=\|f\|_{L^2(\gamma)}^2$.

## Statement references

[Jacot, Gabriel, and Hongler, Appendix A.4, Lemma 2, Hermite expansion of the dual activation kernel](https://arxiv.org/pdf/1806.07572)

[[def-monic-probabilists-hermite-polynomials|Monic probabilists’ Hermite recurrence and explicit coefficients]]

[[lem-hermite-orthogonality-and-monomial-expansion|Gaussian Hermite orthogonality]]

[[lem-gaussian-ltwo-hermite-completeness|Completeness and Parseval in Gaussian L²]]

## Facts & Assumptions

**Given:** AC; $f,g\in L^2(\gamma)$; their normalized Hermite coefficients; and a centered unit-variance Gaussian pair $(X,Y)$ of correlation $\rho\in[-1,1]$.

[A1] AC supplies the countable and dependent choice required by the Gaussian and Hermite suppliers ([[def-axiom-of-choice]], [[lem-ac-supplies-sequential-choices-for-probability-constructions]]).

[F1] The functions $h_m$ form a complete orthonormal basis of real $L^2(\gamma)$, so the Hermite expansions converge in norm and satisfy Parseval ([[lem-gaussian-ltwo-hermite-completeness]]).

[F2] The monic Hermite polynomials satisfy $H_0=1$, $H_1(x)=x$, $xH_m=H_{m+1}+mH_{m-1}$, and
$H_m(x)=m!\sum_{j=0}^{\lfloor m/2\rfloor}(-1/2)^j x^{m-2j}/(j!(m-2j)!)$ ([[def-monic-probabilists-hermite-polynomials]]).

[F3] The standard normal has density $(2\pi)^{-1/2}e^{-x^2/2}$, and each linear projection of a centered Gaussian vector is a scalar normal with the corresponding covariance quadratic form as its variance, including variance zero ([[def-standard-normal-and-normal-laws]], [[def-multivariate-normal-law]]).

[F4] Finite linear combinations commute with expectation for integrable random variables ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

[F5] Dominated convergence applies under a single integrable majorant ([[thm-dominated-convergence]]).

[F6] The $L^2$ Cauchy–Schwarz inequality bounds product expectations ([[cor-cauchy-schwarz-for-random-variables]]).

[F7] The real exponential is defined by its power series, has derivative equal to itself, and obeys $\exp(x+y)=\exp(x)\exp(y)$ ([[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[thm-exponential-addition-formula]]).

[F8] The one-variable chain rule and product rule apply to the real generating function ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[F9] A difference quotient of a differentiable real function on a compact interval is bounded in absolute value by a bound for its derivative on that interval ([[cor-mean-value-theorem]]).

## Proof
**Proof technique:** direct.

1.1 For real $s$ and $x$, set $G_x(s)=\exp(sx-s^2/2)$. By [F7]–[F8], $G_x'(s)=(x-s)G_x(s)$. Put $P_m(x)=G_x^{(m)}(0)$. Then $P_0=1$ and $P_1=x$; differentiating the identity $G_x'=(x-s)G_x$ $m$ times and setting $s=0$ gives $P_{m+1}=xP_m-mP_{m-1}$ for $m\ge1$. The Hermite recurrence in [F2] therefore gives $P_m=H_m$ for every $m$. [F2, F7, F8, algebra]

2.1 For real $s,t$, [F3] gives $sX+tY\sim N(0,v)$ with $v=s^2+2\rho st+t^2\ge0$. Completing the square in the standard-normal density gives $\mathbb E e^{aZ}=e^{a^2/2}$ for real $a$ and $Z\sim N(0,1)$, so $\mathbb E e^{sX+tY}=e^{v/2}$ by the scalar normal's affine definition; when $v=0$, its law is a point mass and the same formula holds. Thus [F7] gives $\mathbb E[G_X(s)G_Y(t)]=e^{-(s^2+t^2)/2}\mathbb E e^{sX+tY}=e^{\rho st}$. This uses the given pair directly and includes $\rho=\pm1$. [A1, F3, F7, step 1.1, algebra]

3.1 For any fixed finite $m,n$, differentiating the expectation identity in step 2.1 $m$ times in $s$ and $n$ times in $t$ at $(0,0)$ is justified as follows. On a bounded parameter rectangle, each required derivative of the integrand is bounded by $K(1+|X|)^q(1+|Y|)^q e^{R(|X|+|Y|)}$ for finite $K,q,R$. This is integrable by [F6], since completing the square gives finite second moments for each marginal factor $(1+|Z|)^q e^{R|Z|}$ under $Z\sim N(0,1)$. On a slightly larger rectangle, [F9] gives the same majorant for each difference quotient, so [F5] passes each of the finitely many derivatives through expectation. By step 1.1 the derivative on the left is $\mathbb E[H_m(X)H_n(Y)]$; differentiating $e^{\rho st}$ on the right gives $m!\rho^m$ if $m=n$ and $0$ otherwise. Hence $\mathbb E[H_m(X)H_n(Y)]=m!\delta_{mn}\rho^m$. [F3, F5, F6, F7, F8, F9, step 1.1, step 2.1, algebra]

4.1 For finite partial sums $f_M=\sum_{m=0}^M a_mh_m$ and $g_M=\sum_{m=0}^M b_mh_m$, step 3.1, finite expectation linearity and orthonormality give $\mathbb E[f_M(X)g_M(Y)]=\sum_{m=0}^M a_mb_m\rho^m$. [F1, F4, step 3.1, algebra]

5.1 By [F1], $f_M\to f$ and $g_M\to g$ in $L^2(\gamma)$. Since both marginals of $(X,Y)$ are $\gamma$, [F6] bounds the product-expectation error by $\|f_M-f\|_2\|g_M\|_2+\|f\|_2\|g_M-g\|_2$, which tends to zero. Also $\sum_m|a_mb_m\rho^m|\le(\sum_m a_m^2)^{1/2}(\sum_m b_m^2)^{1/2}$ by [F1] and Cauchy–Schwarz for sequences. Taking $M\to\infty$ proves the stated identity and endpoint absolute convergence; the case $f=g$ gives the dual-kernel formula. [F1, F6, step 4.1] ∎

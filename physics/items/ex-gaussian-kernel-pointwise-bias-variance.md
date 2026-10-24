---
id: ex-gaussian-kernel-pointwise-bias-variance
kind: example
title: "Gaussian-kernel moments and pointwise constants"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-density-target-and-kernel-density-estimator
  - lem-nonnegative-kde-integrates-to-one
  - thm-kde-pointwise-second-order-bias
  - thm-kde-pointwise-variance
  - lem-plane-gaussian-integral-in-polar-coordinates
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-chain-rule
  - thm-derivative-of-exponential
  - thm-exponential-beats-every-polynomial
  - thm-integration-by-parts
  - thm-ftc-second-part
  - thm-monotone-convergence-for-the-integral
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OpenCourseWare 14.385, Fall 2007, PDF pp. 2–4 and 6"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Ryan Tibshirani, Nonparametric Regression: Nearest Neighbors and Kernels, Advanced Topics in Statistical Learning, Spring 2024, §3, PDF p. 5"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/nn_kernels.pdf"
---

## Example

For $d\ge1$, take the standard Gaussian kernel
$$K_d(u)=(2\pi)^{-d/2}e^{-\|u\|^2/2}.$$
Its second-moment matrix is $\mu_{jk}=\delta_{jk}$ and
$\|K_d\|_2^2=(4\pi)^{-d/2}$, where $\delta_{jk}$ is $1$ for $j=k$ and $0$
otherwise. Thus, under the pointwise theorem hypotheses,
$$\mathbb E\widehat f_h(x)-f(x)=\tfrac12h^2\Delta f(x)+o(h^2),\qquad \operatorname{Var}(\widehat f_h(x)) =\frac{f(x)}{nh^d}(4\pi)^{-d/2}+o((nh^d)^{-1}).$$
Here $\Delta f=\sum_{j=1}^d\partial_{jj}f$.

## Facts & Assumptions

**Given:** $d\ge1$, the kernel $K_d$ above, and a density/sample satisfying the hypotheses of [[thm-kde-pointwise-second-order-bias]] and [[thm-kde-pointwise-variance]].

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The nonnegative plane Gaussian integral is $\int_{\mathbb R^2}e^{-(x^2+y^2)}d(x,y)=\pi$ ([[lem-plane-gaussian-integral-in-polar-coordinates]]).

[F2] Tonelli factors nonnegative integrals of products on Euclidean product spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F3] Under $\mathrm{AC}_\omega$, nonnegative C$^1$ substitutions obey change of variables ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F4] Fubini factors absolutely integrable products on sigma-finite product spaces ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] The chain rule and $(\exp)'=\exp$ give derivatives of $\phi$ ([[thm-chain-rule]], [[thm-derivative-of-exponential]]).

[F6] Integration by parts and the second fundamental theorem evaluate $\int u v'$ on a compact interval when the derivatives are integrable ([[thm-integration-by-parts]], [[thm-ftc-second-part]]).

[F7] The exponential dominates each fixed polynomial at infinity ([[thm-exponential-beats-every-polynomial]]).

[F8] The pointwise bias and variance expansions hold with their stated regularity and bandwidth conditions ([[thm-kde-pointwise-second-order-bias]], [[thm-kde-pointwise-variance]]).

[F9] Integrals of nonnegative functions pass to increasing-domain limits ([[thm-monotone-convergence-for-the-integral]]).

## Verification


1.1 Put $I=\int_{\mathbb R}e^{-t^2}dt$. Tonelli [F2] and [F1] give $I^2=\int_{\mathbb R^2}e^{-(x^2+y^2)}d(x,y)=\pi$. Since $I\ge0$, $I=\sqrt\pi$. Let $\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$. The substitution $s=t/\sqrt2$ in [F3] then gives $\int\phi=1$. By [F5], $\phi'(t)=-t\phi(t)$. Integration by parts [F6] gives $\int_0^R t\phi(t)dt=\phi(0)-\phi(R)$. By [F7], $\phi(R)\to0$ and $R\phi(R)\to0$, so $\int|t|\phi(t)dt=2\phi(0)<\infty$. Oddness then gives $\int t\phi(t)dt=0$. Integration by parts [F6] on $[-R,R]$ also yields $\int_{-R}^R t^2\phi(t)dt =\int_{-R}^R\phi(t)dt-[t\phi(t)]_{-R}^R.$ As $R\to\infty$, $R\phi(R)\to0$ by [F7] (put $s=R^2/4$ and use $R\le2s$ for $R\ge2$), and the right side tends to $1$, so $\int t^2\phi(t)dt=1$ by [F9]. [given, A1, F1, F2, F3, F5, F6, F7, F9]

2.1 Since $K_d(u)=\prod_{j=1}^d\phi(u_j)$, repeated use of Tonelli [F2] shows $\int K_d=1$. Fubini [F4], the one-dimensional moments from step 1.1, and absolute integrability give $\mu_{jj}=1$ and $\mu_{jk}=0$ for $j\ne k$. Also $\int K_d(u)^2du=(2\pi)^{-d}\prod_{j=1}^d\int_{\mathbb R}e^{-u_j^2}du_j =(2\pi)^{-d}\pi^{d/2}=(4\pi)^{-d/2}.$ [step 1.1, F1, F2, F4, algebra]

3.1 Substituting $\mu_{jk}=\delta_{jk}$ and $\|K_d\|_2^2=(4\pi)^{-d/2}$ into [F8] yields the two displayed leading terms. The Gaussian kernel is nonnegative and integrates to one by step 2.1, so [[lem-nonnegative-kde-integrates-to-one]] also confirms that each finite estimate is a density. [step 2.1, F8, algebra] ∎


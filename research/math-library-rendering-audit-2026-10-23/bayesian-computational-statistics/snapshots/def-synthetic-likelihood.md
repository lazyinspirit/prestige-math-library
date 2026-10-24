---
id: def-synthetic-likelihood
kind: definition
title: "Ideal and finite-simulation synthetic likelihood"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-statistic-and-estimator
  - def-law-or-distribution-of-a-random-element
  - def-identically-distributed-and-iid-random-variables
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-determinant-differential-and-jacobis-formula
justified_by: []
axiom_use: "AC is assumed for the multivariate-normal density and for comparison with the pointwise likelihood-density interface. No parameter-indexed measurability or extra choice is asserted."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Victor M.-H. Ong et al., Variational Bayes with Synthetic Likelihood, Statistics and Computing 28(4), 971–988 (2018)"
      url: "https://arxiv.org/pdf/1608.03069"
    - title: "Christopher C. Drovandi et al., Approximating the Likelihood in Approximate Bayesian Computation, Handbook of Approximate Bayesian Computation (2020)"
      url: "https://arxiv.org/pdf/1803.06645"
    - title: "David T. Frazier et al., Bayesian Inference Using Synthetic Likelihood: Asymptotics and Adjustments, Journal of the American Statistical Association 118(544), 2821–2832 (2023)"
      url: "https://researchmgt.monash.edu/ws/portalfiles/portal/565177239/392125894_oa.pdf"
---

## Definition

Let $\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$ be a statistical experiment and let $S:\mathcal X\to\mathbb R^d$ be a statistic, meaning a measurable map to its declared Borel target as in [[def-statistic-and-estimator]], where $d\ge1$ is finite. Expectations are Lebesgue integrals under $P_\theta$ as in [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and variances and covariances use centered second moments as in [[def-moments-variance-and-covariance]]. For every $\theta\in\Theta$, assume
$$\mathbb E_\theta\!\left[\|S\|_2^2\right]<\infty,\qquad \|x\|_2^2:=\sum_{j=1}^d x_j^2.$$
The **binding mean** and **summary covariance** are the pointwise-defined quantities
$$b_j(\theta):=\mathbb E_\theta[S_j],\qquad \Sigma_{jk}(\theta):=\mathbb E_\theta\!\left[(S_j-b_j(\theta))(S_k-b_k(\theta))\right]\quad(1\le j,k\le d).$$
Each covariance entry is finite since $2|uv|\le u^2+v^2$ and the coordinates are square-integrable. The matrix is symmetric and positive semidefinite because for $a\in\mathbb R^d$,
$$a^T\Sigma(\theta)a=\mathbb E_\theta\!\left[(a^T(S-b(\theta)))^2\right]\ge0.$$
No measurability or continuity of $\theta\mapsto b(\theta)$ or $\theta\mapsto\Sigma(\theta)$ follows from these pointwise definitions.

Assume AC ([[def-axiom-of-choice]]). If $\Sigma(\theta)$ is positive definite, the **ideal Gaussian synthetic likelihood** for observed data $y\in\mathcal X$ is the Gaussian density evaluated at its summary, as supplied by [[def-multivariate-normal-law]] and [[thm-nondegenerate-multivariate-normal-law-has-density]],
$$g_{\mathrm{SL}}(y\mid\theta):=\varphi_d\!\left(S(y);b(\theta),\Sigma(\theta)\right)=(2\pi)^{-d/2}\det(\Sigma(\theta))^{-1/2}\exp\!\left[-\tfrac12(S(y)-b(\theta))^T\Sigma(\theta)^{-1}(S(y)-b(\theta))\right].$$
Here $\varphi_d(\,\cdot\,;m,\Sigma)$ is the Lebesgue density of $N_d(m,\Sigma)$. If $\Sigma(\theta)$ is singular, this positive-definite-covariance density is not defined by this item.

Let $Q_\theta:=P_\theta\circ S^{-1}$ be the pushforward law of the statistic under $P_\theta$ as in [[def-law-or-distribution-of-a-random-element]]. For $m\ge2$, let $S_1,\ldots,S_m$ be IID simulated summaries with common law $Q_\theta$, where IID means a common law and mutual independence as in [[def-identically-distributed-and-iid-random-variables]]. Set
$$\bar S_m:=m^{-1}\sum_{i=1}^m S_i,\qquad \widehat\Sigma_m:=(m-1)^{-1}\sum_{i=1}^m(S_i-\bar S_m)(S_i-\bar S_m)^T.$$
The **finite-simulation plug-in synthetic likelihood** is the random quantity
$$\widehat g_{\mathrm{SL},m}(y\mid\theta):=\varphi_d(S(y);\bar S_m,\widehat\Sigma_m).$$
when $\widehat\Sigma_m$ is positive definite, and is **unavailable** otherwise. The finite plug-in quantity is a function of simulated summaries; it is not defined as an unbiased estimator of the ideal Gaussian density.

The exact experiment’s likelihood density, when the experiment is dominated as in [[def-dominated-statistical-experiment]] and given a pointwise density as in [[def-likelihood-density]], and this Gaussian summary approximation are different objects. The latter density-selection interface assumes AC and does not assert a common exceptional null set across an arbitrary parameter set; the present definition adds no parameter-indexed measurability. This definition makes no claim that the actual summary law is Gaussian, that $g_{\mathrm{SL}}$ equals an exact likelihood, or that it yields posterior calibration, consistency, a Bernstein–von Mises theorem, or coverage. No optimizer or optimizer convergence property is included.

## Remarks

If a positive-definite covariance matrix varies differentiably in a real matrix direction $H$, Jacobi’s formula gives
$$D\det(\Sigma)[H]=\det(\Sigma)\operatorname{tr}(\Sigma^{-1}H)$$
by [[thm-determinant-differential-and-jacobis-formula]]. This differentiates the determinant factor only; this definition assumes no differentiability of the binding mean or covariance.

A positive-definite matrix has the unique Cholesky factor used in numerical evaluation by [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]. This factorization does not ensure that a finite-simulation covariance is positive definite.

---
id: alg-ensemble-kalman-filter
kind: algorithm
title: Perturbed-observation ensemble Kalman filter
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-data-assimilation-problem
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
axiom_use: Assume AC for the specified multivariate-normal perturbation laws. The finite ensemble updates and linear solves use no additional choice.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4 §4.2.3"
      url: "https://arxiv.org/pdf/1506.07825v1"
    - title: "Geir Evensen, Femke C. Vossepoel, and Peter Jan van Leeuwen, Data Assimilation Fundamentals, Chapter 8"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-96709-3.pdf"
---

## Definition

Fix an ensemble size $N\ge2$, forecast map $\Psi$, observation map $G$, datum $y\in\mathbb R^p$, and observation covariance $\Gamma\succ0$. The input is a state ensemble $x^1,\ldots,x^N\in\mathbb R^d$, forecast-error draws $\xi^i$ that are independent across members and of the input ensemble, each with the caller-specified additive model-error law, and observation perturbations $\eta^i\sim N_p(0,\Gamma)$ under [[def-multivariate-normal-law]]. The observation perturbations are independent across members and independent of the forecast ensemble and forecast-error draws.

1. Forecast each member: $\widehat x^i=\Psi(x^i)+\xi^i$.

2. Form predicted observations $z^i=G(\widehat x^i)$, means $\bar x=N^{-1}\sum_i\widehat x^i$, $\bar z=N^{-1}\sum_i z^i$, and empirical covariance blocks
$$C_{xz}=N^{-1}\sum_i(\widehat x^i-\bar x)(z^i-\bar z)^T,\qquad C_{zz}=N^{-1}\sum_i(z^i-\bar z)(z^i-\bar z)^T.$$
The divisor-$N$ convention is part of this algorithm.

3. Form $S_N=C_{zz}+\Gamma$. Since $C_{zz}$ is positive semidefinite and $\Gamma$ is positive definite, $S_N$ is positive definite. Factor it by Cholesky and solve $S_NK_N^T=C_{xz}^T$ by triangular solves.

4. Update every member using its perturbed datum:
$$x^{a,i}=\widehat x^i+K_N(y+\eta^i-z^i).$$

Return the updated ensemble and its empirical mean and covariance. When $G(x)=Hx$, $C_{xz}=C_xH^T$ and $C_{zz}=HC_xH^T$, giving the usual sample-covariance Kalman gain. This item specifies the perturbed-observation variant; deterministic square-root updates are different finite-ensemble procedures. Finite ensembles in nonlinear models are approximations and carry no general posterior-exactness claim.

---
id: def-finite-gaussian-mixture
kind: definition
title: "Finite Gaussian mixture with positive-definite component covariances"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-axiom-of-choice
  - def-determinant-of-a-square-matrix
  - def-invertible-matrix-and-general-linear-group
  - def-moments-variance-and-covariance
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
justified_by:
  - thm-finite-gaussian-component-density-normalized
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Christopher M. Bishop, Pattern Recognition and Machine Learning"
      url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf"
verification:
  precheck: n/a
---

## Definition

Assume AC. Let $p\ge1$, $\mu\in\mathbb R^p$, and let $\Sigma\in\mathbb R^{p\times p}$ be symmetric positive definite, meaning $v^{\mathsf T}\Sigma v>0$ for every nonzero $v\in\mathbb R^p$. Define the component function

$$\phi_p(x;\mu,\Sigma):=(2\pi)^{-p/2}(\det\Sigma)^{-1/2}\exp\!\left(-\tfrac12(x-\mu)^{\mathsf T}\Sigma^{-1}(x-\mu)\right),\qquad x\in\mathbb R^p.$$

The component law is $N_p(\mu,\Sigma)$, the $p$-dimensional normal law with mean $\mu$ and covariance matrix $\Sigma$. The separate local normalization result proves that $\phi_p$ is its Lebesgue density.

A finite $K$-component Gaussian mixture has an integer $K\ge1$, weights $\pi_1,\ldots,\pi_K>0$ with $\sum_{k=1}^K\pi_k=1$, means $\mu_k\in\mathbb R^p$, and symmetric positive-definite covariance matrices $\Sigma_k\in\mathbb R^{p\times p}$. Its density is

$$f_\theta(x):=\sum_{k=1}^K\pi_k\phi_p(x;\mu_k,\Sigma_k),$$

where $\theta=((\pi_k,\mu_k,\Sigma_k))_{k=1}^K$. For a positive integer $n$ and an ordered sample $x_1,\ldots,x_n$ modeled as conditionally independent observations from this mixture, define the likelihood $L(\theta;x_{1:n}):=\prod_{i=1}^n f_\theta(x_i)$ and log likelihood $\ell(\theta;x_{1:n}):=\sum_{i=1}^n\log f_\theta(x_i)$. The responsibility weight of component $k$ for observation $x_i$ is

$$\gamma_{ik}(\theta):=\frac{\pi_k\phi_p(x_i;\mu_k,\Sigma_k)}{\sum_{j=1}^K\pi_j\phi_p(x_i;\mu_j,\Sigma_j)}.$$

## Definition references

[[def-multivariate-normal-law]] — $N_p(\mu,\Sigma)$ is the probability law whose scalar projections along $u\in\mathbb R^p$ are normal with mean $u^{\mathsf T}\mu$ and variance $u^{\mathsf T}\Sigma u$; AC supplies its stated construction.

[[def-moments-variance-and-covariance]] — covariance is the expectation of the product of centered coordinates.

[[def-determinant-of-a-square-matrix]] — $\det\Sigma$ is the determinant of the square matrix $\Sigma$.

[[def-invertible-matrix-and-general-linear-group]] — $\Sigma^{-1}$ denotes the two-sided inverse, which exists for positive-definite $\Sigma$.

[[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] — real symmetric matrices admit orthonormal eigenbases; positive definiteness makes all eigenvalues positive.

[[thm-finite-gaussian-component-density-normalized]] — the displayed component function is normalized and is the Lebesgue density of $N_p(\mu,\Sigma)$.

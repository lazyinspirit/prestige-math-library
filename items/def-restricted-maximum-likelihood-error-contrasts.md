---
id: def-restricted-maximum-likelihood-error-contrasts
kind: definition
title: "Restricted maximum likelihood from error contrasts"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-gaussian-linear-mixed-model
  - def-linear-mixed-model
  - def-fixed-design-linear-regression-model
  - def-error-contrast-matrix
  - lem-error-contrast-matrix-exists
  - lem-gaussian-error-contrast-is-multivariate-normal
  - lem-reml-error-contrast-covariance-is-positive-definite
  - thm-nondegenerate-multivariate-normal-law-has-density
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Fan Li, STA610 Lecture 4: Maximum Likelihood Estimation and Inference for the Hierarchical Normal Model, PDF pp. 4–5"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec4-MLE-HNM.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §2.4.2"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
---

## Definition

Assume AC and a Gaussian family of the form in [[def-gaussian-linear-mixed-model]], indexed by a nonempty parameter set $\Theta$. For each $\theta\in\Theta$, let $G_\theta$ and $R_\theta$ be the latent and residual covariance matrices in
$$V_\theta=ZG_\theta Z^T+R_\theta\succ0.$$
Let the fixed design $X\in\mathbb R^{n\times p}$ have full column rank with $p<n$. Fix an error-contrast matrix $K\in\mathbb R^{n\times(n-p)}$ as in [[def-error-contrast-matrix]], independently of $\theta$. By [[lem-gaussian-error-contrast-is-multivariate-normal]], the contrast vector $K^TY$ has law $N_{n-p}(0,K^TV_\theta K)$ and its law does not depend on the fixed-effect parameter $\beta$. The local result [[lem-reml-error-contrast-covariance-is-positive-definite]] shows that this covariance is positive definite, and [[thm-nondegenerate-multivariate-normal-law-has-density]] gives its Gaussian density. The **restricted likelihood for this fixed contrast basis** is
$$L_R(\theta;y)=(2\pi)^{-(n-p)/2}\det(K^TV_\theta K)^{-1/2} \exp\!\left(-\tfrac12(K^Ty)^T(K^TV_\theta K)^{-1}(K^Ty)\right).$$
This item defines the likelihood for a fixed, parameter-independent choice of contrast coordinates; it makes no claim about likelihood comparisons across different fixed-effect designs.

## Remarks

The local column-basis convention is $K\in\mathbb R^{n\times(n-p)}$ with columns spanning $\operatorname{col}(X)^\perp$, so $K^TY$ is defined. The restriction $p<n$ supplies a nonzero contrast space; when $p=n$, this definition makes no variance-likelihood claim.

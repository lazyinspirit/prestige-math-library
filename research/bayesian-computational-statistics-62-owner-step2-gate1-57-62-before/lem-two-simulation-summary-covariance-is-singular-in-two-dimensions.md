---
id: lem-two-simulation-summary-covariance-is-singular-in-two-dimensions
kind: lemma
title: "A two-simulation covariance in two dimensions is singular"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-cholesky-factorisation-with-positive-diagonal
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David T. Frazier et al., Bayesian Inference Using Synthetic Likelihood: Asymptotics and Adjustments, Journal of the American Statistical Association 118(544), 2821–2832 (2023)"
      url: "https://researchmgt.monash.edu/ws/portalfiles/portal/565177239/392125894_oa.pdf"
    - title: "Victor M.-H. Ong et al., Variational Bayes with Synthetic Likelihood, Statistics and Computing 28(4), 971–988 (2018)"
      url: "https://arxiv.org/pdf/1608.03069"
---

## Statement

For any two simulated vectors $z_1,z_2\in\mathbb R^2$, put $\bar z=(z_1+z_2)/2$ and define the Bessel-corrected sample covariance
$$
\widehat\Sigma:=\sum_{i=1}^2(z_i-\bar z)(z_i-\bar z)^T.
$$
Then $\widehat\Sigma$ is not positive definite.

## Facts & Assumptions

**Given:** Two vectors $z_1,z_2\in\mathbb R^2$ and the covariance matrix defined in the Statement.

[F1] A real symmetric matrix is positive definite when its quadratic form is strictly positive on every nonzero vector. [[def-cholesky-factorisation-with-positive-diagonal]]

## Proof

**Proof technique:** direct.

1.1 Set $v=(z_1-z_2)/2$. Then $z_1-\bar z=v$ and $z_2-\bar z=-v$, so $\widehat\Sigma=2vv^T$. [given, construct, algebra]

2.1 Write $v=(a,b)$. If $v\ne0$, choose $u=(-b,a)$; if $v=0$, choose $u=(1,0)$. In either case $u\ne0$, $u^Tv=0$, and $u^T\widehat\Sigma u=2(u^Tv)^2=0$. This contradicts the strict quadratic-form condition in [F1], so $\widehat\Sigma$ is not positive definite. [F1, step 1.1, choose, algebra] ∎

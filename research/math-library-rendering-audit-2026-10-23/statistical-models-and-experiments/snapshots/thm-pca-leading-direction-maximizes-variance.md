---
id: thm-pca-leading-direction-maximizes-variance
kind: theorem
title: "The leading PCA eigenspace maximizes projected variance"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-covariance-and-correlation-principal-component-analysis
  - def-covariance-matrix-of-a-random-vector
  - def-moments-variance-and-covariance
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-courant-fischer-min-max-principle
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Online Bayesian Data Analysis, Lecture Notes 8: Learning Signal Representations (11 April 2016)"
      url: "https://cims.nyu.edu/~cfgranda/pages/OBDA_spring16/material/learning_representations.pdf"
    - title: "Soumendu Sundar Mukherjee, Multivariate Analysis, Lecture 8: Principal Component Analysis"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-8.pdf"
---

## Statement

Fix a parameter $\theta$ in the model of
[[def-covariance-and-correlation-principal-component-analysis]], and let
$X$ have finite second moment and covariance matrix $\Sigma_\theta$. For
every unit vector $a\in\mathbb R^p$,
$$\operatorname{Var}_\theta(a^{\mathsf T}X)=a^{\mathsf T}\Sigma_\theta a.$$
Consequently, the maximum projected variance is the largest eigenvalue
$\lambda_1(\Sigma_\theta)$, and its maximizing unit vectors are exactly the
unit vectors in the leading eigenspace. When all coordinate variances are
positive, the same assertion applied to
$D_\theta^{-1}(X-\mu_\theta)$ says that correlation-PCA maximizes the
variance of linear scores of the standardized coordinates.

## Facts & Assumptions

**Given:** A parameter $\theta$, a real random vector $X\in\mathbb R^p$ with
finite second moment under $P_\theta$, and a unit vector
$a\in\mathbb R^p$. For the correlation statement, assume every diagonal
entry of $\Sigma_\theta$ is positive.

[F1] [[def-covariance-and-correlation-principal-component-analysis]]:
$\Sigma_\theta$ is the covariance matrix used for covariance-PCA, and
$D_\theta^{-1}(X-\mu_\theta)$ is the population-standardized vector used for
correlation-PCA.

[F2] [[def-covariance-matrix-of-a-random-vector]]: the entries of
$\Sigma_\theta$ are
$\mathbb E_\theta[(X_j-\mu_{\theta,j})(X_k-\mu_{\theta,k})]$.

[F3] [[def-moments-variance-and-covariance]]: variance is the expectation of
the centered square.

[F4] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]:
expectation is linear on integrable finite sums.

[F5] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] and
[[thm-courant-fischer-min-max-principle]]: a real symmetric matrix has an
orthonormal eigenbasis, and its largest eigenvalue is the maximum of its
Rayleigh quotient on unit vectors.

## Proof

**Proof technique:** direct.

1.1 Put $Y=X-\mu_\theta$. Finite second moments make every coordinate in the finite sums below integrable. Expanding the centered scalar square and using [F4] gives $\operatorname{Var}_\theta(a^{\mathsf T}X) =\mathbb E_\theta[(a^{\mathsf T}Y)^2] =\sum_{j,k}a_ja_k\mathbb E_\theta[Y_jY_k] =a^{\mathsf T}\Sigma_\theta a$ by [F2] and [F3]. [F2, F3, F4, given, algebra]

2.1 By [F5], write $a=\sum_{j=1}^pc_je_j$ in an orthonormal eigenbasis of $\Sigma_\theta$ with eigenvalues $\lambda_1\ge\cdots\ge\lambda_p$ and $\sum_jc_j^2=1$. Then $a^{\mathsf T}\Sigma_\theta a=\sum_j\lambda_jc_j^2\le\lambda_1\sum_jc_j^2 =\lambda_1$. The difference is $\lambda_1-a^{\mathsf T}\Sigma_\theta a =\sum_j(\lambda_1-\lambda_j)c_j^2$, a sum of nonnegative terms, so equality holds exactly when $c_j=0$ for every $\lambda_j<\lambda_1$. This is exactly the unit sphere in the leading eigenspace. Step 1.1 identifies this Rayleigh quotient with projected variance, proving the covariance-PCA assertion. [F1, F5, step 1.1, algebra]

3.1 If all coordinate variances are positive, [F1] defines $Z_\theta=D_\theta^{-1}(X-\mu_\theta)$ with covariance $R_\theta=D_\theta^{-1}\Sigma_\theta D_\theta^{-1}$. The hypotheses of steps 1.1--2.1 hold with $Z_\theta$ and $R_\theta$ in place of $X$ and $\Sigma_\theta$, so the leading correlation-PCA eigenspace maximizes the variance of unit linear scores of $Z_\theta$. [F1, step 1.1, step 2.1] ∎
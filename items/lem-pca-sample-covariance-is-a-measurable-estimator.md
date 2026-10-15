---
id: lem-pca-sample-covariance-is-a-measurable-estimator
kind: lemma
title: "Sample-centered covariance is a measurable statistic and estimator"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-statistical-experiment
  - def-parametric-statistical-model
  - def-estimand-on-a-statistical-model
  - def-statistic-and-estimator
  - def-sample-covariance-and-operator-norm-loss
  - def-identically-distributed-and-iid-random-variables
  - def-covariance-matrix-of-a-random-vector
  - lem-finite-second-moment-covariance-matrix-is-well-defined
  - thm-continuous-preimages-of-borel-sets-are-borel
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Online Bayesian Data Analysis, Lecture Notes 8: Learning Signal Representations (11 April 2016)"
      url: "https://cims.nyu.edu/~cfgranda/pages/OBDA_spring16/material/learning_representations.pdf"
    - title: "Soumendu Sundar Mukherjee, Multivariate Analysis, Lecture 8: Principal Component Analysis"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-8.pdf"
---

## Statement

Let $(P_\theta)_{\theta\in\Theta}$ be a family of Borel probability laws on
$\mathbb R^p$ with $\mathbb E_\theta\|X\|_2^2<\infty$. For each $n\ge1$,
observe an iid sample $X_1,\ldots,X_n$ with common law $P_\theta$ and sample
law $P_\theta^{\otimes n}$ on the Borel data space $(\mathbb R^p)^n$. Put
$\Sigma_\theta=\operatorname{Cov}_\theta(X)$ and let
$\psi(\theta)=\Sigma_\theta$ be the covariance-matrix estimand with target
the Borel space $\mathbb S^p$ of real symmetric $p\times p$ matrices. The
sample-centered covariance map
$$T_n(x_1,\ldots,x_n):=\frac1n\sum_{i=1}^n(x_i-\bar x)(x_i-\bar x)^{\mathsf T},\qquad \bar x=\frac1n\sum_{i=1}^nx_i,$$
is a statistic with target the Borel space $\mathbb S^p$, and hence is an
estimator of $\psi$ in the sense of [[def-statistic-and-estimator]]. This
statement asserts measurability and target type only; it asserts no
unbiasedness or consistency.

## Facts & Assumptions

**Given:** A finite $p\ge1$, $n\ge1$, a family of Borel laws
$(P_\theta)_{\theta\in\Theta}$ on $\mathbb R^p$ with finite second moments,
and an iid sample experiment on Borel sample space $(\mathbb R^p)^n$.

[F1] [[def-statistical-experiment]] and
[[def-parametric-statistical-model]]: the sample experiment is a parameter-indexed
family of probability laws on its measurable data space.

[F2] [[def-identically-distributed-and-iid-random-variables]]: under each
$P_\theta^{\otimes n}$, the sample coordinates are iid with common law
$P_\theta$.

[F3] [[def-covariance-matrix-of-a-random-vector]] and
[[lem-finite-second-moment-covariance-matrix-is-well-defined]]: the covariance
$\Sigma_\theta$ is finite and symmetric, so it belongs to $\mathbb S^p$.

[F4] [[def-estimand-on-a-statistical-model]]: $\psi(\theta)=\Sigma_\theta$
is the stated target function on the parameter set.

[F5] [[def-sample-covariance-and-operator-norm-loss]]:
the sample-centered covariance is
$n^{-1}\sum_i(X_i-\bar X)(X_i-\bar X)^{\mathsf T}$.

[F6] [[def-statistic-and-estimator]]: a statistic is a measurable map from the
data space to a measurable target, and it is an estimator when its target
space is that of the stated estimand.

[F7] [[thm-continuous-preimages-of-borel-sets-are-borel]]: a continuous map
between topological spaces has Borel preimages of Borel sets.

## Proof

**Proof technique:** direct.

1.1 Regard $\mathbb S^p$ as the subspace of $\mathbb R^{p^2}$ with its Borel sigma-algebra. Each matrix coordinate of $T_n$ is a polynomial in the $np$ real sample coordinates, so $T_n:(\mathbb R^p)^n\to\mathbb R^{p^2}$ is continuous. Its values are symmetric because every outer product is symmetric, hence it is also continuous as a map into the subspace $\mathbb S^p$. By [F7] it is Borel measurable. [F5, F7, given, algebra]

2.1 By [F1] and [F2], the sample experiment is the stated parameter-indexed iid experiment; [F3] places $\Sigma_\theta$ in $\mathbb S^p$, and [F4] identifies it as the estimand target. The formula in [F5] is exactly $T_n$. Thus [F6] and step 1.1 make $T_n$ a statistic and, since its target space is the same $\mathbb S^p$, an estimator of $\psi$. [F1, F2, F3, F4, F5, F6, step 1.1] ∎
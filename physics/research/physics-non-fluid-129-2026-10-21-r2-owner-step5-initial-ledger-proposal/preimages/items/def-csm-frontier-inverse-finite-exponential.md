---
id: def-csm-frontier-inverse-finite-exponential
kind: definition
title: Finite exponential Gibbs family for inverse inference
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-csm-exponential-normalization-covariance
  - def-euclidean-inner-product
  - thm-extreme-value-metric
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-real-exponential-function-and-e
  - def-natural-logarithm
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - thm-exponential-addition-formula
dependency_roles:
  thm-csm-exponential-normalization-covariance: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-natural-logarithm: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
axiom_use: No choice principle is used.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Martin J. Wainwright and Michael I. Jordan, Graphical Models, Exponential Families, and Variational Inference"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/wainwright-jordan-fnt.pdf"
      locator: "§3.2 and §3.5.1, printed pp. 38–40 and 61–62 / PDF pp. 44–46 and 67–68: canonical exponential-family form, log partition function, mean, and covariance."
    - title: "Charles J. Geyer, Stat 8931 (Exponential Families) Lecture Notes: Two Examples of Agresti"
      url: "https://www.stat.umn.edu/geyer/8931expfam/infinity.pdf"
      locator: "§2, printed pp. 1–2 / PDF pp. 0–1: full-support canonical exponential-family examples and the boundary-MLE distinction."
verification:
  precheck: pass
---

## Definition

Let $X$ be a finite nonempty set, let $k\in\mathbb N$ with $k\ge1$, let $w:X\to(0,\infty)$ be a positive reference weight, and let $T:X\to\mathbb R^k$. Here $\mathbb R^k$ consists of functions $k\to\mathbb R$, with $k=\{0,\ldots,k-1\}$. On this page use the one-based coordinate labels $v_j:=v(j-1)$ for $1\le j\le k$ and $v\in\mathbb R^k$; in particular $T_j(x):=T(x)(j-1)$. Thus the Euclidean inner product is $\theta\cdot T(x):=\sum_{j=1}^k\theta_jT_j(x)=\sum_{i<k}\theta(i)T(x)(i)$. For $\theta\in\mathbb R^k$, define the partition sum and log-partition function by
$$Z(\theta):=\sum_{x\in X}w(x)e^{\theta\cdot T(x)},\qquad A(\theta):=\log Z(\theta),$$
and define the finite exponential Gibbs family by
$$\pi_\theta(x):=w(x)e^{\theta\cdot T(x)-A(\theta)}\quad(x\in X).$$
All objects here are mathematical; $\theta\cdot T(x)$ is a real number. The representation is called minimal when there is no nonzero $a\in\mathbb R^k$ for which $a\cdot T(x)$ is constant over all $x\in X$.

For a finite set $S\subseteq\mathbb R^k$, its convex hull is the set of sums $\sum_{s\in S}\lambda_s s$ with $\lambda_s\ge0$ and $\sum_{s\in S}\lambda_s=1$. Its affine hull is the set of sums of the same form with real coefficients $\lambda_s$ whose sum is $1$. The relative interior of a convex set is its interior in its affine hull with the Euclidean subspace topology. These definitions will be used for the sufficient-statistic support $T(X)$.

## Definition references

[[def-real-exponential-function-and-e]]

[[def-natural-logarithm]]

[[def-euclidean-inner-product]]

## Facts & Assumptions

**Given:** A finite nonempty $X$, positive weights $w(x)$, and a map $T:X\to\mathbb R^k$.

[F1] [[thm-csm-exponential-normalization-covariance]]: on a sigma-finite measure space, if a positive exponential weight has one integrable envelope on each compact parameter set for its zeroth, first, and second moments, then its partition function is finite, strictly positive, and $C^2$, its normalized density is a probability density, and the gradient and Hessian of the log partition function are the mean and covariance of the statistic.

[F2] Counting measure on finite $X$ is sigma-finite, and a function on $X$ is integrable exactly when its finite sum is finite.

[F3] [[def-euclidean-inner-product]]: $\theta\cdot T(x)$ is the ordinary Euclidean inner product, a finite sum of coordinate products.

[F4] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space attains a finite maximum and minimum.

[F5] [[def-real-exponential-function-and-e]]: $\exp$ is the real exponential power-series function defined for every real input.

[F6] [[def-natural-logarithm]]: $\log$ is the inverse of $\exp$ on $(0,\infty)$.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm is a norm and satisfies $|a\cdot b|\le\|a\|_2\|b\|_2$.

[F8] [[cor-exponential-reciprocal-and-positivity]]: $\exp(t)>0$ and $\exp(-t)=1/\exp(t)$ for every real $t$.

[F9] [[thm-exponential-is-strictly-increasing]]: $\exp$ is strictly increasing on $\mathbb R$.

[F10] [[thm-exponential-addition-formula]]: $\exp(s+t)=\exp(s)\exp(t)$ for all real $s,t$.

## Proof

**Given:** The finite family and the notation in the Definition.

1.1 For every nonempty compact $C\subseteq\mathbb R^k$ and every $x\in X$, [F3, F7] give $|\eta\cdot T(x)-\eta'\cdot T(x)|\le\|\eta-\eta'\|_2\|T(x)\|_2$; hence $\eta\mapsto\eta\cdot T(x)$ is continuous. It attains a finite maximum $M_C(x)$ on $C$ by [F4]. Define
$$G_C(x):=w(x)\exp(M_C(x))\left(1+\sum_{j=1}^{k}|T_j(x)|^2\right).$$
The exponential is finite and positive at this real input by [F5, F8], and the sum is finite, so $G_C$ is finite and nonnegative at every $x$. It is integrable under counting measure by [F2]. Since $\eta\cdot T(x)\le M_C(x)$ for every $\eta\in C$, monotonicity of $\exp$ [F9] shows that $G_C$ dominates
$w(x)e^{\theta\cdot T(x)}(1+\sum_j|T_j(x)|^2)$ for every $\theta\in C$. Thus the counting-measure model satisfies the envelope hypotheses of [F1]. Applying [F1] gives $0<Z(\theta)<\infty$, $A\in C^2(\mathbb R^k)$, and the normalized probability mass function $\pi_\theta$. [given, F1, F2, F3, F4, F5, F7, F8, F9]

2.1 Since every summand in $Z(\theta)$ is positive and finite [F5, F8], each $\pi_\theta(x)>0$. Also $\exp(A(\theta))=Z(\theta)$ by [F6], so $e^{-A(\theta)}=1/Z(\theta)$ by [F8]. By [F10], $\pi_\theta(x)=w(x)e^{\theta\cdot T(x)}e^{-A(\theta)}$, which is exactly the normalized density supplied by [F1]. Summing over finite $X$ gives $\sum_{x\in X}\pi_\theta(x)=e^{-A(\theta)}Z(\theta)=1$. Hence the Definition gives a probability vector with full support for every finite $\theta$. [F1, F5, F6, F8, F10, step 1.1, algebra] ∎

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
dependency_roles:
  thm-csm-exponential-normalization-covariance: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
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

Let $X$ be a finite nonempty set, let $k\ge1$, let $w:X\to(0,\infty)$ be a positive reference weight, and let $T:X\to\mathbb R^k$. Use the Euclidean inner product $\theta\cdot T(x):=\sum_{j=1}^k\theta_jT_j(x)$. For $\theta\in\mathbb R^k$, define the partition sum and log-partition function by
$$Z(\theta):=\sum_{x\in X}w(x)e^{\theta\cdot T(x)},\qquad A(\theta):=\log Z(\theta),$$
and define the finite exponential Gibbs family by
$$\pi_\theta(x):=w(x)e^{\theta\cdot T(x)-A(\theta)}\quad(x\in X).$$
All objects here are mathematical; $\theta\cdot T(x)$ is a real number. The representation is called minimal when there is no nonzero $a\in\mathbb R^k$ for which $a\cdot T(x)$ is constant over all $x\in X$.

For a finite set $S\subseteq\mathbb R^k$, its convex hull is the set of sums $\sum_{s\in S}\lambda_s s$ with $\lambda_s\ge0$ and $\sum_{s\in S}\lambda_s=1$. Its affine hull is the set of sums of the same form with real coefficients $\lambda_s$ whose sum is $1$. The relative interior of a convex set is its interior in its affine hull with the Euclidean subspace topology. These definitions will be used for the sufficient-statistic support $T(X)$.

## Facts & Assumptions

**Given:** A finite nonempty $X$, positive weights $w(x)$, and a map $T:X\to\mathbb R^k$.

[F1] [[thm-csm-exponential-normalization-covariance]]: on a sigma-finite measure space, if a positive exponential weight has one integrable envelope on each compact parameter set for its zeroth, first, and second moments, then its partition function is finite, strictly positive, and $C^2$, its normalized density is a probability density, and the gradient and Hessian of the log partition function are the mean and covariance of the statistic.

[F2] Counting measure on finite $X$ is sigma-finite, and a function on $X$ is integrable exactly when its finite sum is finite. For nonempty compact $C\subseteq\mathbb R^k$, the function
$$G_C(x):=w(x)\exp\!\left(\max_{\eta\in C}\eta\cdot T(x)\right)\left(1+\sum_{j=1}^{k}|T_j(x)|^2\right)$$
is finite at every $x$ and integrable: the maximum is finite by [F4], and the sum has finitely many terms.

[F3] [[def-euclidean-inner-product]]: $\theta\cdot T(x)$ is the ordinary Euclidean inner product, a finite sum of coordinate products.

[F4] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space attains a finite maximum and minimum.

## Proof

**Given:** The finite family and the notation in the Definition.

1.1 For every nonempty compact $C\subseteq\mathbb R^k$, the function $\eta\mapsto\eta\cdot T(x)$ is continuous by [F3] and attains a finite maximum on $C$ by [F4]. Therefore the function $G_C$ of [F2] is finite at every $x$ and integrable under counting measure; it dominates
$w(x)e^{\theta\cdot T(x)}(1+\sum_j|T_j(x)|^2)$ for every $\theta\in C$. Thus the counting-measure model satisfies the envelope hypotheses of [F1]. Applying [F1] gives $0<Z(\theta)<\infty$, $A\in C^2(\mathbb R^k)$, and the normalized probability mass function $\pi_\theta$. [given, F1, F2, F3, F4]

2.1 Since every summand in $Z(\theta)$ is positive and finite, each $\pi_\theta(x)>0$, and summing its definition over finite $X$ gives $\sum_{x\in X}\pi_\theta(x)=e^{-A(\theta)}Z(\theta)=1$. Hence the Definition gives a probability vector with full support for every finite $\theta$. [step 1.1, algebra] ∎

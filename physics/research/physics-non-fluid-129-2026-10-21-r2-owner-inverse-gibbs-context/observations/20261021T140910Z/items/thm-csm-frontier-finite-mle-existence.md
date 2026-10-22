---
id: thm-csm-frontier-finite-mle-existence
kind: theorem
title: Exact finite-MLE criterion for a minimal finite exponential Gibbs family
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-frontier-inverse-finite-exponential
  - thm-csm-frontier-inverse-identifiability
  - lem-csm-frontier-finite-polytope-support
  - thm-csm-exponential-normalization-covariance
  - thm-extreme-value-metric
  - cor-euclidean-closed-balls-and-spheres-are-compact
dependency_roles:
  def-csm-frontier-inverse-finite-exponential: mathematical-premise
  thm-csm-frontier-inverse-identifiability: mathematical-premise
  lem-csm-frontier-finite-polytope-support: mathematical-premise
  thm-csm-exponential-normalization-covariance: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  cor-euclidean-closed-balls-and-spheres-are-compact: mathematical-premise
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
      locator: "§3.6 and §6.1, printed pp. 64–66 and 146–147 / PDF pp. 70–72 and 152–153: moment matching, IID log likelihood, and unique MLE for means in the interior of the mean-parameter polytope; Appendix B.1 proves the gradient-map range."
    - title: "Charles J. Geyer, Stat 8931 (Exponential Families) Lecture Notes: Two Examples of Agresti"
      url: "https://www.stat.umn.edu/geyer/8931expfam/infinity.pdf"
      locator: "§§2, 3.2, and 4.6.3, printed pp. 1–2, 8–9, and 55–56 / PDF pp. 0–1, 8–9, and 56–57: boundary observations can place the MLE at infinity and the relative-interior distinction."
verification:
  precheck: pending
---

## Statement

Use the finite exponential family, minimality, convex hull, affine hull, and relative-interior definitions from the A-page finite-family Definition. The sample space is $X^n$ with product mass $\prod_{i=1}^n\pi_\theta(x_i)$, which is the IID sampling model; $n\ge1$. For a realized tuple $x_1,\dots,x_n\in X$, set $\bar T=n^{-1}\sum_{i=1}^nT(x_i)$ and $K=\operatorname{conv}(T(X))$. A finite MLE is a parameter $\hat\theta\in\mathbb R^k$ attaining the maximum of that likelihood. Then a finite MLE exists if and only if $\bar T\in\operatorname{ri}K$, and when it exists it is unique.

## Statement references

[[def-csm-frontier-inverse-finite-exponential]]

[[thm-csm-frontier-inverse-identifiability]]

[[lem-csm-frontier-finite-polytope-support]]

## Facts & Assumptions

**Given:** The finite family, minimality, $n\ge1$, and the realized IID sample in the Statement.

[A1] The sampling model is IID with mass function $\pi_\theta$; the likelihood of the realized sample is $\prod_{i=1}^n\pi_\theta(x_i)$.

[F1] [[def-csm-frontier-inverse-finite-exponential]]: $\pi_\theta(x)=w(x)e^{\theta\cdot T(x)-A(\theta)}$ with $w(x)>0$, and $K$ is the finite convex hull of $T(X)$.

[F2] [[thm-csm-frontier-inverse-identifiability]]: $\nabla A(\theta)=\mathbb E_{\pi_\theta}T$ and $\nabla^2A(\theta)=\operatorname{Cov}_{\pi_\theta}(T)$; for a minimal family this covariance is positive definite for every finite $\theta$ and the affine hull of $T(X)$ is $\mathbb R^k$.

[F3] [[thm-csm-exponential-normalization-covariance]]: for the finite family, $\nabla A(\theta)=\mathbb E_{\pi_\theta}T$ and $\nabla^2A(\theta)=\operatorname{Cov}_{\pi_\theta}(T)$; its compact-envelope hypothesis is verified in the finite-family Definition.

[F4] [[lem-csm-frontier-finite-polytope-support]]: if $\bar T$ is a boundary point of the full-dimensional finite convex hull $K$, a unit vector $u$ satisfies $u\cdot(T(x)-\bar T)\le0$ for every $x\in X$.

[F5] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space attains its minimum.

[F6] [[cor-euclidean-closed-balls-and-spheres-are-compact]]: every Euclidean closed ball in $\mathbb R^k$ of positive radius is compact.

## Proof

**Given:** The IID model and realized finite sample in the Statement.

1.1 Since $\pi_\theta(x_i)=w(x_i)e^{\theta\cdot T(x_i)-A(\theta)}$, the log likelihood is
$\ell(\theta)=\sum_i\log w(x_i)+n\bigl(\theta\cdot\bar T-A(\theta)\bigr)$.
Also $\bar T$ is the convex combination with weights $1/n$ of $T(x_i)$, so $\bar T\in K$. By [F2], for every nonzero $v$, the second derivative of $s\mapsto\ell(\theta+sv)$ is
$-n\,v^\mathsf T\operatorname{Cov}_{\pi_{\theta+sv}}(T)v<0$.
Thus $\ell$ is strictly concave on $\mathbb R^k$. [given, A1, F1, F2, algebra]

2.1 Suppose $\bar T\in\operatorname{ri}K$. Minimality makes $K$ full-dimensional, so there is $\epsilon>0$ such that the open ball of radius $\epsilon$ about $\bar T$ lies in $K$; set $\delta=\epsilon/2$, so the closed ball of radius $\delta$ lies in that open ball and hence in $K$. For every unit $u$, $\bar T+\delta u$ is a convex combination of the vectors $T(x)$, so at least one $x$ satisfies $u\cdot(T(x)-\bar T)\ge\delta$. Put $w_{\min}=\min_{x\in X}w(x)>0$. If $\theta=ru$ with $r=\|\theta\|_2>0$, then
$A(\theta)-\theta\cdot\bar T
=\log\sum_xw(x)e^{\theta\cdot(T(x)-\bar T)}
\ge r\delta+\log w_{\min}$.
Hence $\theta\mapsto A(\theta)-\theta\cdot\bar T$ tends to $+\infty$ as $\|\theta\|_2\to\infty$. [given, F1, F3, algebra]

2.2 The function in step 2.1 is continuous by [F3]. Choose $R>0$ large enough that it exceeds its value at $0$ outside the closed ball $\overline B_2(0,R)$. This ball is nonempty and compact by [F6], so [F5] gives a minimizer $\hat\theta$ on it; the outside bound makes it a global minimizer on $\mathbb R^k$. Differentiability and the fact that $\mathbb R^k$ is open imply $\nabla A(\hat\theta)=\bar T$, so [A1] and the log-likelihood expression of step 1.1 show that $\hat\theta$ is a finite MLE. Strict concavity from step 1.1 makes it unique. [A1, F3, F5, F6, step 1.1, step 2.1, algebra]

3.1 Suppose $\bar T\notin\operatorname{ri}K$. Since $\bar T\in K$ by step 1.1 and $K$ is full-dimensional, $\bar T$ is a boundary point. By [F4] choose a unit $u$ with $u\cdot(T(x)-\bar T)\le0$ for every $x$. Full affine span implies at least one of these inequalities is strict; otherwise $u\cdot T$ would be constant on $X$. Every $\pi_\theta(x)$ is positive, so
$u\cdot(\nabla A(\theta)-\bar T)=\sum_x\pi_\theta(x)u\cdot(T(x)-\bar T)<0$
for every finite $\theta$. Therefore the directional derivative of $\ell$ along $u$ is
$n\,u\cdot(\bar T-\nabla A(\theta))>0$ at every finite $\theta$. From any candidate parameter a sufficiently small positive step along $u$ increases the log likelihood, so no finite MLE exists. This proves both directions. [given, A1, F1, F2, F3, F4, step 1.1, algebra] ∎

## Remarks

This is an exact finite IID model statement. It does not assert that a finite dataset is typical, that an estimator is consistent or concentrated, or that any algorithm computes the MLE. No MCMC output is treated as IID data; a dependent-chain analysis would require its own finite-state Markov-chain central limit theorem and autocorrelation-aware variance conditions, which are not used here.

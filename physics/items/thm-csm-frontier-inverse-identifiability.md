---
id: thm-csm-frontier-inverse-identifiability
kind: theorem
title: Identifiability and covariance in a finite exponential Gibbs family
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-frontier-inverse-finite-exponential
  - thm-csm-exponential-normalization-covariance
  - thm-rank-nullity
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-exponential-addition-formula
  - cor-exponential-reciprocal-and-positivity
dependency_roles:
  def-csm-frontier-inverse-finite-exponential: mathematical-premise
  thm-csm-exponential-normalization-covariance: mathematical-premise
  thm-rank-nullity: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
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
      locator: "§3.5.1, Proposition 2, and §3.5.2, Proposition 3, printed pp. 61–63 / PDF pp. 67–69: the log-partition Hessian is covariance and minimality is equivalent to injectivity of the mean map."
    - title: "Charles J. Geyer, Stat 8931 (Exponential Families) Lecture Notes: Two Examples of Agresti"
      url: "https://www.stat.umn.edu/geyer/8931expfam/infinity.pdf"
      locator: "§§2 and 3.2, printed pp. 1–2 and 8–9 / PDF pp. 0–1 and 8–9: boundary observations, full support, and finite-parameter MLE failure."
verification:
  precheck: pass
---

## Statement

For the finite exponential family of the preceding Definition, write $\mu_\theta:=\sum_{x\in X}\pi_\theta(x)T(x)$. Define $\operatorname{Cov}_{\pi_\theta}(T)$ by entries
$\operatorname{Cov}_{\pi_\theta}(T)_{ab}:=\sum_{x\in X}\pi_\theta(x)(T_a(x)-\mu_{\theta,a})(T_b(x)-\mu_{\theta,b})$.
The gradient and Hessian mean $\nabla A(\theta):=(\partial_jA(\theta))_{j=1}^k$ and $\nabla^2A(\theta):=(\partial_i\partial_jA(\theta))_{i,j=1}^k$. A symmetric matrix is positive definite when its quadratic form is positive on every nonzero vector. The map $\theta\mapsto\pi_\theta$ is injective when $\pi_\theta(x)=\pi_\varphi(x)$ for every $x$ implies $\theta=\varphi$. The following conditions are equivalent: the representation is minimal; no nonzero $a\in\mathbb R^k$ makes $a\cdot T(x)$ constant on $X$; the affine hull of $T(X)$ is $\mathbb R^k$; $\nabla^2 A(\theta)$ is positive definite for every $\theta$; and the map $\theta\mapsto\pi_\theta$ is injective.

## Statement references

[[def-csm-frontier-inverse-finite-exponential]]

[[thm-csm-exponential-normalization-covariance]]

## Facts & Assumptions

**Given:** The finite exponential family, its log-partition function $A$, and its full-support probability vectors $\pi_\theta$.

[F1] [[def-csm-frontier-inverse-finite-exponential]]: $X$ is finite nonempty, $w(x)>0$, $\pi_\theta(x)>0$ for every $x,\theta$, and the Definition calls the representation minimal exactly when no nonzero $a$ makes $a\cdot T$ constant on $X$.

[F2] [[thm-csm-exponential-normalization-covariance]]: under a compact-parameter integrable envelope, $\partial_a A=\mathbb E_\theta[T_a]$ and $\partial_a\partial_b A=\operatorname{Cov}_\theta(T_a,T_b)$. The finite model satisfies that envelope by step 1.1 of [F1]'s Definition proof and [F1].

[F3] [[thm-rank-nullity]]: for a linear map with finite-dimensional domain, domain dimension is kernel dimension plus image dimension.

[F4] The affine hull of a finite set $T(X)$ is $T(x_0)+D$, where $D$ is the span of the finitely many differences $T(x)-T(x_0)$; it is all of $\mathbb R^k$ exactly when $D=\mathbb R^k$.

[F5] [[def-natural-logarithm]]: $\log$ is the inverse of $\exp$ on $(0,\infty)$, so $\log(\exp t)=t$.

[F6] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing and satisfies $\log(ab)=\log a+\log b$ for positive $a,b$.

[F7] [[thm-exponential-addition-formula]]: $\exp(s+t)=\exp(s)\exp(t)$ for real $s,t$.

[F8] [[cor-exponential-reciprocal-and-positivity]]: $\exp(t)>0$ for every real $t$.

## Proof

**Given:** The finite exponential family of the Statement.

1.1 The envelope verified in [F1] lets [F2] apply with counting measure, so $\nabla A(\theta)=\mathbb E_{\pi_\theta}T$ and $\nabla^2A(\theta)=\operatorname{Cov}_{\pi_\theta}(T)$. [given, F1, F2]

2.1 For any $a\in\mathbb R^k$, the quadratic form is
$a^\mathsf T\nabla^2A(\theta)a=\sum_{x\in X}\pi_\theta(x)\bigl(a\cdot T(x)-\mathbb E_{\pi_\theta}[a\cdot T]\bigr)^2$.
Every weight is positive by [F1], so this sum is zero exactly when $a\cdot T(x)$ has the same value at every $x\in X$. Thus the Hessian is positive definite for every $\theta$ exactly when no nonzero $a$ makes $a\cdot T$ constant, which is minimality by [F1]. [F1, step 1.1, algebra]

2.2 If $\pi_\theta=\pi_\varphi$ as functions on $X$, positivity allows taking logarithms of their equal positive values. The product law and inverse identity [F5, F6] then give $(\theta-\varphi)\cdot T(x)=A(\theta)-A(\varphi)$ for every $x$. Under minimality this forces $\theta-\varphi=0$. Conversely, if a nonzero $a$ makes $a\cdot T(x)=c$ constant, the exponential addition formula [F7] gives $Z(\theta+ta)=\exp(tc)Z(\theta)$. Since $Z(\theta)>0$ and $\exp(tc)>0$ by [F1, F8], the logarithm laws [F5, F6] give $A(\theta+ta)=A(\theta)+tc$. Substitution in the family formula and another use of [F7] show $\pi_{\theta+ta}=\pi_\theta$ for every real $t$; the parametrization is not injective. [F1, F5, F6, F7, F8, step 1.1, algebra]

3.1 Let $D=\operatorname{span}\{T(x)-T(x_0):x\in X\}$ for a fixed $x_0\in X$. If $D$ is proper, choose a basis $v_1,\dots,v_r$ of $D$, with $r<k$, and define $L:\mathbb R^k\to\mathbb R^r$ by $L(a)=(a\cdot v_1,\dots,a\cdot v_r)$. Rank-nullity [F3] gives $\dim\ker L\ge k-r>0$, so some nonzero $a$ is orthogonal to every difference and $a\cdot T$ is constant. Conversely, if such a nonzero $a$ exists, every difference lies in the proper hyperplane $a^\perp$, so $D$ is proper. By [F4], $D=\mathbb R^k$ exactly when the affine hull is $\mathbb R^k$. This proves the stated equivalence with full affine dimension and completes the identifiability conditions. [given, F1, F3, F4, algebra] ∎

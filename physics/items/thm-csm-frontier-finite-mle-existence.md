---
id: thm-csm-frontier-finite-mle-existence
kind: theorem
title: Exact finite-MLE criterion for a minimal finite exponential Gibbs family
status: published
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
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-euclidean-inner-product
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - cor-mean-value-theorem
  - cor-exponential-reciprocal-and-positivity
dependency_roles:
  def-csm-frontier-inverse-finite-exponential: mathematical-premise
  thm-csm-frontier-inverse-identifiability: mathematical-premise
  lem-csm-frontier-finite-polytope-support: mathematical-premise
  thm-csm-exponential-normalization-covariance: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  cor-euclidean-closed-balls-and-spheres-are-compact: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
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
      locator: "§3.6 and §6.1, printed pp. 64–66 and 146–147 / PDF pp. 70–72 and 152–153: moment matching, IID log likelihood, and unique MLE for means in the interior of the mean-parameter polytope; Appendix B.1 proves the gradient-map range."
    - title: "Charles J. Geyer, Stat 8931 (Exponential Families) Lecture Notes: Two Examples of Agresti"
      url: "https://www.stat.umn.edu/geyer/8931expfam/infinity.pdf"
      locator: "§§2, 3.2, and 4.6.3, printed pp. 1–2, 8–9, and 55–56 / PDF pp. 0–1, 8–9, and 56–57: boundary observations can place the MLE at infinity and the relative-interior distinction."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Use the finite exponential family, minimality, convex hull, affine hull, and relative-interior definitions from the A-page finite-family Definition. Assume the representation is minimal. The sample space is $X^n$ with product mass $\prod_{i=1}^n\pi_\theta(x_i)$, which is the IID sampling model; $n\ge1$. For a realized tuple $x_1,\dots,x_n\in X$, set $\bar T=n^{-1}\sum_{i=1}^nT(x_i)$ and $K=\operatorname{conv}(T(X))$. A finite MLE is a parameter $\hat\theta\in\mathbb R^k$ attaining the maximum of that likelihood. Then a finite MLE exists if and only if $\bar T\in\operatorname{ri}K$, and when it exists it is unique.

## Statement references

[[def-csm-frontier-inverse-finite-exponential]]

[[thm-csm-frontier-inverse-identifiability]]

[[lem-csm-frontier-finite-polytope-support]]

## Facts & Assumptions

**Given:** The finite family, minimality, $n\ge1$, and the realized IID sample in the Statement.

[A1] The sampling model is IID with mass function $\pi_\theta$; the likelihood of the realized sample is $\prod_{i=1}^n\pi_\theta(x_i)$.

[F1] [[def-csm-frontier-inverse-finite-exponential]]: $\pi_\theta(x)=w(x)e^{\theta\cdot T(x)-A(\theta)}$ with $w(x)>0$; its proof verifies $0<Z(\theta)<\infty$, normalization and full support, and $K$ is the finite convex hull of $T(X)$.

[F2] [[thm-csm-frontier-inverse-identifiability]]: for a minimal family, $\nabla^2A(\theta)$ is positive definite for every finite $\theta$, and the affine hull of $T(X)$ is $\mathbb R^k$.

[F3] [[thm-csm-exponential-normalization-covariance]]: for the finite family, $A\in C^2(\mathbb R^k)$, $\nabla A(\theta)=\mathbb E_{\pi_\theta}T$, and $\nabla^2A(\theta)=\operatorname{Cov}_{\pi_\theta}(T)$; its compact-envelope hypothesis is verified in the finite-family Definition.

[F4] [[lem-csm-frontier-finite-polytope-support]]: if $\bar T$ is a boundary point of the full-dimensional finite convex hull $K$, a unit vector $u$ satisfies $u\cdot(T(x)-\bar T)\le0$ for every $x\in X$.

[F5] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space attains its minimum.

[F6] [[cor-euclidean-closed-balls-and-spheres-are-compact]]: every Euclidean closed ball in $\mathbb R^k$ of positive radius is compact.

[F7] [[def-natural-logarithm]]: $\log$ is the inverse of $\exp$ on $(0,\infty)$, so $\log(\exp t)=t$ for every real $t$.

[F8] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing on $(0,\infty)$ and satisfies $\log(ab)=\log a+\log b$ for positive reals $a,b$.

[F9] [[cor-mean-value-theorem]]: if a real function is continuous on a closed interval and differentiable on its interior, then its derivative equals the interval's average rate of change at some interior point.

[F10] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm is a norm, with positive definiteness and absolute homogeneity; in particular $\|\theta\|_2>0$ for $\theta\ne0$ and $\|\theta/r\|_2=\|\theta\|_2/r$ for $r>0$.

[F11] [[def-euclidean-inner-product]]: $\|u\|_2=\sqrt{u\cdot u}$, so $\|u\|_2=1$ implies $u\cdot u=1$.

[F12] For a convex set $C$, a function $f:C\to\mathbb R$ is strictly concave when $f((1-t)\theta+t\varphi)>(1-t)f(\theta)+tf(\varphi)$ for every distinct $\theta,\varphi\in C$ and every $t\in(0,1)$.

[F13] [[cor-exponential-reciprocal-and-positivity]]: $\exp(t)>0$ for every real $t$.

## Proof

**Given:** The IID model and realized finite sample in the Statement.

1.1 Since every $\pi_\theta(x_i)>0$, the likelihood is positive. Repeated application of the logarithm product law [F8], followed by $\log(\exp t)=t$ [F7], gives the log likelihood
$$\ell(\theta)=\log\prod_{i=1}^n\pi_\theta(x_i)=\sum_{i=1}^n\log w(x_i)+n\bigl(\theta\cdot\bar T-A(\theta)\bigr).$$
Because $\log$ is strictly increasing [F8], maximizing this log likelihood is equivalent to maximizing the likelihood. Also $\bar T$ is the convex combination with weights $1/n$ of $T(x_i)$, so $\bar T\in K$. [given, A1, F1, F7, F8, algebra]

1.2 Suppose $\bar T\in\operatorname{ri}K$. Minimality makes $K$ full-dimensional, so there is $\epsilon>0$ such that the open ball of radius $\epsilon$ about $\bar T$ lies in $K$; set $\delta=\epsilon/2$, so the closed ball of radius $\delta$ lies in that open ball and hence in $K$. For every unit $u$, $\bar T+\delta u$ is a convex combination of the vectors $T(x)$; since $u\cdot u=1$ by [F11], at least one $x$ satisfies $u\cdot(T(x)-\bar T)\ge\delta$. Put $w_{\min}=\min_{x\in X}w(x)>0$. If $\theta\ne0$, write $r=\|\theta\|_2$ and $u=\theta/r$; [F10] gives $r>0$ and $\|u\|_2=1$. For some $x$ as above, $\theta\cdot(T(x)-\bar T)\ge r\delta$. Since the $x$th summand is part of $Z(\theta)$ and is positive by [F13], monotonicity and the product law of $\log$ [F8], together with [F7], give
$$A(\theta)=\log Z(\theta)\ge\log\bigl(w_{\min}e^{\theta\cdot T(x)}\bigr)=\log w_{\min}+\theta\cdot T(x),$$
and hence $A(\theta)-\theta\cdot\bar T\ge r\delta+\log w_{\min}$. Thus $\theta\mapsto A(\theta)-\theta\cdot\bar T$ tends to $+\infty$ as $\|\theta\|_2\to\infty$. [given, F1, F2, F7, F8, F10, F11, F13, algebra]

2.1 Let $\theta\ne\varphi$ and put $v=\varphi-\theta$ and $g(s)=\ell(\theta+sv)$ for $s\in[0,1]$. By $A\in C^2$ [F3], $g$ is twice continuously differentiable; by [F2] its second derivative is $g''(s)=-n\,v^\mathsf T\nabla^2A(\theta+sv)v<0$. Thus $g'$ is strictly decreasing: for $0\le a<b\le1$, the mean value theorem [F9] applied to $g'$ gives $g'(b)-g'(a)=g''(c)(b-a)<0$ for some $c\in(a,b)$. Fix $t\in(0,1)$. Applying [F9] to $g$ on $[0,t]$ and $[t,1]$ gives $\alpha\in(0,t)$ and $\beta\in(t,1)$ such that
$$\frac{g(t)-g(0)}{t}=g'(\alpha)>g'(\beta)=\frac{g(1)-g(t)}{1-t}.$$
Rearranging yields $g(t)>(1-t)g(0)+tg(1)$. By [F12], $\ell$ is strictly concave on $\mathbb R^k$. [F2, F3, F9, F12, step 1.1, algebra]

3.1 The function $\Phi(\theta):=A(\theta)-\theta\cdot\bar T$ is continuous: $A$ is continuous by [F3], and the linear form is continuous by the Cauchy–Schwarz bound [F10]. It tends to $+\infty$ by step 1.2. Choose $R>0$ large enough that $\Phi(\theta)>\Phi(0)$ whenever $\|\theta\|_2>R$. The closed ball $\overline B_2(0,R)$ is nonempty and compact by [F6], so [F5] gives a minimizer $\hat\theta$ on it. Since $0$ lies in the ball and every point outside has value greater than $\Phi(0)$, $\hat\theta$ is a global minimizer on $\mathbb R^k$. The log-likelihood formula in step 1.1 and $n\ge1$ show that it is a finite MLE. If two distinct finite MLEs existed, their midpoint would have a strictly larger log likelihood by step 2.1, a contradiction; hence it is unique. [F3, F5, F6, F10, step 1.1, step 2.1, step 1.2, algebra]

4.1 Suppose $\bar T\notin\operatorname{ri}K$. Since $\bar T\in K$ by step 1.1 and $K$ is full-dimensional, $\bar T$ is a boundary point. By [F4] choose a unit $u$ with $u\cdot(T(x)-\bar T)\le0$ for every $x$. Full affine span implies at least one of these inequalities is strict; otherwise $u\cdot T$ would be constant on $X$. Every $\pi_\theta(x)$ is positive, so
$u\cdot(\nabla A(\theta)-\bar T)=\sum_x\pi_\theta(x)u\cdot(T(x)-\bar T)<0$
for every finite $\theta$. Therefore the directional derivative of $\ell$ along $u$ is
$n\,u\cdot(\bar T-\nabla A(\theta))>0$ at every finite $\theta$. By the definition of a positive derivative, a sufficiently small positive step along $u$ increases $\ell$, and therefore increases the likelihood by [F8]. No finite MLE exists. This proves both directions. [given, A1, F1, F2, F3, F4, F8, step 1.1, algebra] ∎

## Remarks

This is an exact finite IID model statement. It does not assert that a finite dataset is typical, that an estimator is consistent or concentrated, or that any algorithm computes the MLE. No MCMC output is treated as IID data; a dependent-chain analysis would require its own finite-state Markov-chain central limit theorem and autocorrelation-aware variance conditions, which are not used here.

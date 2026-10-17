---
id: ex-nonorthogonal-lasso-proximal-gradient-step
kind: example
title: "One proximal-gradient step for a nonorthogonal Lasso design"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-lasso-estimator
  - alg-proximal-gradient-and-fista
  - lem-prox-l1-is-soft-thresholding
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §6.5.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Example

Use the Lasso objective of [[def-lasso-estimator]] with $n=d=2$,
$$X=\begin{pmatrix}1&0\\1&1\end{pmatrix},\qquad y=\begin{pmatrix}1\\1\end{pmatrix},\qquad \tau=\frac1{10},$$
and start at $\theta_0=(0,0)$. The columns of $X$ have inner product $1$, so this is not an orthogonal design. With valid smoothness constant $L=3$, one exact proximal-gradient update is
$$\theta_1=\left(\frac35,\frac4{15}\right).$$
This is a first iterate calculation; it does not claim that $\theta_1$ minimizes the Lasso objective.

## Facts & Assumptions

**Given:** The design, response, penalty and initial vector displayed in the Example.

[F1] [[def-lasso-estimator]]: $Q_y(\theta)=n^{-1}\|y-X\theta\|_2^2+2\tau\|\theta\|_1$.

[F2] [[alg-proximal-gradient-and-fista]]: one proximal-gradient step is $\theta_1=\operatorname{prox}_{g/L}(\theta_0-\nabla f(\theta_0)/L)$ with $f=n^{-1}\|y-X\theta\|_2^2$ and $g=2\tau\|\cdot\|_1$.

[F3] [[lem-prox-l1-is-soft-thresholding]]: the positive multiple of $\|\cdot\|_1$ is proper, closed and convex, and its proximal map applies $S_{s\lambda}$ coordinatewise.

## Verification

1.1 Here $f(\theta)=\frac12\|y-X\theta\|_2^2$ is a convex continuously differentiable quadratic: for $0\le\alpha\le1$, $$f((1-\alpha)u+\alpha v)=(1-\alpha)f(u)+\alpha f(v)-\alpha(1-\alpha)\|X(u-v)\|_2^2/2.$$ Its gradient is $\nabla f(\theta)=H\theta-X^Ty$ with $H=X^TX=\begin{pmatrix}2&1\\1&1\end{pmatrix}$. For $h=(a,b)$, $$\|Hh\|_2^2=(2a+b)^2+(a+b)^2=5a^2+6ab+2b^2\le8a^2+5b^2\le8\|h\|_2^2,$$ using $6ab\le3(a^2+b^2)$. Thus $\nabla f$ is $\sqrt8$-Lipschitz and $L=3$ is valid. The nonsmooth term $g=(1/5)\|\cdot\|_1$ is proper, closed and convex by [F3]. Also $X^Ty=(2,1)$, so $\nabla f(\theta_0)=(-2,-1)$ and $\theta_0-\nabla f(\theta_0)/3=(2/3,1/3)$. [F1, F2, F3, given, algebra]

2.1 The nonsmooth term is $g=(1/5)\|\cdot\|_1$, and the proximal parameter is $1/3$, so its soft-threshold level is $(1/3)(1/5)=1/15$. Applying [F3] to $(2/3,1/3)$ gives $(2/3-1/15,1/3-1/15)=(3/5,4/15)$. [F2, F3, step 1.1, algebra] ∎

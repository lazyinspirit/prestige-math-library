---
id: def-physics-informed-neural-network-loss
kind: definition
title: "Physics-informed residual loss and Hölder regularization"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-measure-space
  - def-measure
  - def-integrable-real-and-complex-functions-and-their-integrals
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "equations (2.4)–(2.6), (3.3), Assumptions 3.1–3.2"
---

## Definition

Let $U\subset\mathbb R^d$ be a bounded Lipschitz domain, let $\Gamma\subseteq\partial U$ be closed, let $L$ be a differential operator on $U$, and let $B$ be a boundary operator on $\Gamma$. Let $f:U\to\mathbb R$ and $g:\Gamma\to\mathbb R$ be target data. For a trial function $h$, define its residuals by $r_h(x)=L[h](x)-f(x)$ and $q_h(x)=B[h](x)-g(x)$. For $0<\alpha\le1$ and a function $v$ on a set $E$, define its Hölder seminorm by
$$[v]_{\alpha;E}=\sup_{x\ne y\in E}\frac{|v(x)-v(y)|}{|x-y|^\alpha}.$$
Only trial functions for which $L[h]$ on $U$ and $B[h]$ on $\Gamma$ are pointwise defined and finite are admitted. For the population loss, require $f,r_h$ to be measurable with respect to $(U,\mu_r)$ and $g,q_h$ to be measurable with respect to $(\Gamma,\mu_b)$. For positive fixed weights $\lambda_r,\lambda_b$ and probability measures $\mu_r$ on $U$, $\mu_b$ on $\Gamma$, the population loss is
$$\operatorname{Loss}^{\mathrm{PINN}}(h;\lambda)=\lambda_r\int_U|r_h|^2\,d\mu_r+\lambda_b\int_\Gamma|q_h|^2\,d\mu_b.$$
These nonnegative population integrals take values in $[0,+\infty]$, so they may be infinite. The Hölder seminorms below may likewise be infinite.

For $d\ge2$, given positive integer counts $m_r,m_b$, residual collocation points $x_r^1,\ldots,x_r^{m_r}$, and boundary collocation points $x_b^1,\ldots,x_b^{m_b}$, the empirical loss is
$$\operatorname{Loss}^{\mathrm{PINN}}_{m}(h;\lambda)=\frac{\lambda_r}{m_r}\sum_{i=1}^{m_r}|r_h(x_r^i)|^2+\frac{\lambda_b}{m_b}\sum_{j=1}^{m_b}|q_h(x_b^j)|^2.$$
For $d=1$, a bounded Lipschitz domain has finite boundary, so $\Gamma$ is finite. When every point of $\Gamma$ is available deterministically, define its exact full-boundary contribution by
$$\operatorname{Loss}^{\mathrm{PINN},b}(h;\lambda_b)=\lambda_b\sum_{y\in\Gamma}\mu_b(\{y\})|q_h(y)|^2=\lambda_b\int_\Gamma|q_h|^2\,d\mu_b,$$
and, for a positive integer count $m_r$ and residual collocation points $x_r^1,\ldots,x_r^{m_r}$, set
$$\operatorname{Loss}^{\mathrm{PINN}}_{m}(h;\lambda)=\frac{\lambda_r}{m_r}\sum_{i=1}^{m_r}|r_h(x_r^i)|^2+\operatorname{Loss}^{\mathrm{PINN},b}(h;\lambda_b).$$
For $d\ge2$, its Hölder-regularized version is
$$\operatorname{Loss}_{m}(h;\lambda,\lambda_m^R)=\operatorname{Loss}^{\mathrm{PINN}}_m(h;\lambda)+\lambda^R_{r,m}[L[h]]_{\alpha;U}^{2}+\lambda^R_{b,m}[B[h]]_{\alpha;\Gamma}^{2}.$$
For $d=1$, the Hölder-regularized version is
$$\operatorname{Loss}_{m}(h;\lambda,\lambda_m^R)=\operatorname{Loss}^{\mathrm{PINN}}_m(h;\lambda)+\lambda^R_{r,m}[L[h]]_{\alpha;U}^{2};$$
it uses the exact full-boundary contribution above, has no random boundary sample, and has no boundary seminorm penalty. Require the regularization coefficients appearing in either version to be nonnegative; a zero coefficient contributes zero even when its seminorm is infinite. For finite realized sample lists the empirical sums are finite; the regularized objective is allowed to take the value $+\infty$. These are population and empirical functionals; they do not specify an optimization algorithm or assert that training reaches a global minimizer.

## Definition references
[[def-measure-space|measure space]]

[[def-measure|measure]]

[[def-integrable-real-and-complex-functions-and-their-integrals|integrable real and complex functions and their integrals]]

[Shin et al., equations (2.4)–(2.6), (3.3): weighted empirical PINN loss and Hölder regularization](https://arxiv.org/pdf/2004.01806)


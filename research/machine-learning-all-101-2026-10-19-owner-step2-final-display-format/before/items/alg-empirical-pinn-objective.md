---
id: alg-empirical-pinn-objective
kind: algorithm
title: "Empirical Hölder-regularized PINN objective"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-physics-informed-neural-network-loss]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "equations (3.1)–(3.3), Theorems 3.1–3.2"
---

## Definition

Inputs are a dimension $d\ge1$, the data and operators specified in the physics-informed residual loss definition, $0<\alpha\le1$, positive weights $\lambda_r,\lambda_b$, and an admissible trial function $h$. The procedure returns the scalar empirical objective value $J_m(h)$. It uses the realized sample points and target values as inputs; it does not generate random samples.

For $d\ge2$, also supply positive integer counts $m_r,m_b$, residual samples $x_r^1,\ldots,x_r^{m_r}\in U$ with their observed values $f(x_r^i)$, boundary samples $x_b^1,\ldots,x_b^{m_b}\in\Gamma$ with their observed values $g(x_b^j)$, constants $c_r,c_b,C_r,C_b>0$, and small-scale cutoffs $\ell_{0,i},\rho_{0,i}>0$. At the selected partition scales $0<\ell_i\le\ell_{0,i}$, require cells $U_j^{\ell_r}$ and $\Gamma_j^{\ell_b}$ with masses at least $c_r\ell_r^d$ and $c_b\ell_b^{d-1}$, each contained in a cube of side $\ell_i$. Require upper ball-mass bounds $\mu_r(\overline B_\rho(x)\cap U)\le C_r\rho^d$ and $\mu_b(\overline B_\rho(y)\cap\Gamma)\le C_b\rho^{d-1}$ for every center and for all $0<\rho\le\rho_{0,i}$. The admissible counts satisfy, for $i\in\{r,b\}$,
$$m_i\ge\max\{1,c_i^{-2}\ell_{0,i}^{-2s_i},c_i^{-2}d^{s_i}\rho_{0,i}^{-2s_i}\},$$
so the computed partition scales and fill radii lie in the specified ranges.

For $d=1$, supply a positive integer $m_r$, residual samples $x_r^1,\ldots,x_r^{m_r}\in U$ with observed values $f(x_r^i)$, constants $c_r,C_r>0$, and cutoffs $\ell_{0,r},\rho_{0,r}>0$. At the residual scale $\ell_r$ below, require a finite measurable partition with each cell contained in an interval of length $\ell_r$ and mass at least $c_r\ell_r$, and require upper ball-mass bounds $\mu_r(\overline B_\rho(x)\cap U)\le C_r\rho$ for every center $x\in U$ and all $0<\rho\le\rho_{0,r}$. The admissible count satisfies
$$m_r\ge\max\{1,c_r^{-2}\ell_{0,r}^{-2},c_r^{-2}\rho_{0,r}^{-2}\},$$
so $\ell_r=\delta_r$ is in the specified ranges. Supply the observed boundary values at every point of the finite set $\Gamma$ with their masses $\mu_b(\{y\})$. No random boundary sample or boundary sample count is used.

For $d\ge2$, set $s_r=d$, $s_b=d-1$, and, for $i\in\{r,b\}$, compute
$$\ell_i=(c_i\sqrt{m_i})^{-1/s_i},\qquad \delta_i=\sqrt d\,\ell_i,\qquad \kappa_i=C_i/c_i,$$
$$C_m=3\max_{i\in\{r,b\}}\{\kappa_i d^{s_i/2}m_i^{1/2}\},\qquad
\widehat\lambda^R_{i,m}=\frac{3\lambda_i\delta_i^{2\alpha}}{C_m}.$$
For $d=1$, compute
$$\ell_r=\delta_r=(c_r\sqrt{m_r})^{-1},\qquad \kappa_r=C_r/c_r,\qquad C_m=3\kappa_r m_r^{1/2},$$
$$\widehat\lambda^R_{r,m}=\frac{3\lambda_r\delta_r^{2\alpha}}{C_m}
=\frac{\lambda_r c_r^{-2\alpha}}{\kappa_r}m_r^{-\alpha-1/2},\qquad \widehat\lambda^R_{b,m}=0.$$
For $d\ge2$, use supplied regularization weights $\lambda^R_{i,m}$ satisfying $\lambda^R_{i,m}\ge\widehat\lambda^R_{i,m}$ componentwise; for a sequence of sample counts also require $\|\lambda_m^R\|_\infty=O(\|\widehat\lambda_m^R\|_\infty)$. For $d=1$, set $\lambda^R_{b,m}=0$ and choose $\lambda^R_{r,m}\ge\widehat\lambda^R_{r,m}$, with the corresponding one-coordinate max-norm order condition across a sequence of counts. If no residual weights are supplied, set them equal to their thresholds.

Finally evaluate and return $J_m(h)=\operatorname{Loss}_m(h;\lambda,\lambda_m^R)$ using the realized residual values, the realized boundary values when $d\ge2$, the exact weighted full-boundary contribution when $d=1$, and the residual seminorm penalty when $d=1$ or both seminorm penalties when $d\ge2$. The regularization thresholds are the source's exact thresholds and cannot be replaced by a generic positive penalty.

## Definition references
[[def-physics-informed-neural-network-loss|physics informed neural network loss]]

[Shin et al., equations (3.1)–(3.3): exact thresholds, scaling condition, and objective](https://arxiv.org/pdf/2004.01806)

## Remark

For $d\ge2$, the exact residual and boundary threshold coordinates are
$$\widehat\lambda^R_{r,m}=\frac{3\lambda_r(\sqrt d)^{2\alpha}c_r^{-2\alpha/d}m_r^{-\alpha/d}}{C_m},\qquad \widehat\lambda^R_{b,m}=\frac{3\lambda_b(\sqrt d)^{2\alpha}c_b^{-2\alpha/(d-1)}m_b^{-\alpha/(d-1)}}{C_m},$$
where $C_m=3\max\{(C_r/c_r)(\sqrt d)^d m_r^{1/2},(C_b/c_b)(\sqrt d)^{d-1}m_b^{1/2}\}$. For $d=1$, the residual threshold is $\widehat\lambda^R_{r,m}=(\lambda_r c_r^{-2\alpha}/\kappa_r)m_r^{-\alpha-1/2}$, with $\kappa_r=C_r/c_r$, and the boundary threshold is zero. The weight vector must satisfy the componentwise lower bound and max-norm order condition in the Algorithm.

The original all-$\varepsilon>0$ sampling quantifier has no probability-measure instances; it is preserved and refuted in the all-scale inconsistency lemma. The small-scale range above is the corrected active sampling convention. No lower-mass constant normalization is implicit in this algorithm.

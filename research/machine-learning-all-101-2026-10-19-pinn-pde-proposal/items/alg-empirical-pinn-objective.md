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

Choose $0<\alpha\le1$ and positive residual and boundary weights $\lambda_r,\lambda_b$. For $d\ge2$, let $\mu_r$ and $\mu_b$ be the residual and boundary sampling measures. The constants $c_r,c_b>0$ satisfy $\mu_r(U_j^\varepsilon)\ge c_r\varepsilon^d$ and $\mu_b(\Gamma_j^\varepsilon)\ge c_b\varepsilon^{d-1}$ for the cells in the sample partitions at the selected small scales $0<\varepsilon\le\varepsilon_{0,r},\varepsilon_{0,b}$; $C_r,C_b>0$ satisfy $\mu_r(B_\varepsilon(x)\cap U)\le C_r\varepsilon^d$ and $\mu_b(B_\varepsilon(y)\cap\Gamma)\le C_b\varepsilon^{d-1}$. Require the upper ball-mass bounds at the selected fill radii, and take sample counts sufficiently large for both these radii and the partition scales to be in their specified ranges. Given sample counts $m_r,m_b$, put
$$\kappa_r=C_r/c_r,\qquad \kappa_b=C_b/c_b,$$
$$C_m=3\max\!\left\{\kappa_r(\sqrt d)^d m_r^{1/2},\ \kappa_b(\sqrt d)^{d-1}m_b^{1/2}\right\},$$
$$\widehat\lambda^R_{r,m}=\frac{3\lambda_r(\sqrt d)^{2\alpha}c_r^{-2\alpha/d}m_r^{-\alpha/d}}{C_m},\qquad \widehat\lambda^R_{b,m}=\frac{3\lambda_b(\sqrt d)^{2\alpha}c_b^{-2\alpha/(d-1)}m_b^{-\alpha/(d-1)}}{C_m}.$$
Choose regularization weights componentwise at least these thresholds and satisfying $\|\lambda_m^R\|_\infty=O(\|\widehat\lambda_m^R\|_\infty)$ as sample counts grow. Evaluate the Hölder-regularized objective from the preceding definition on a trial class. For $d=1$, set
$$C_m=3\kappa_r m_r^{1/2},\qquad \widehat\lambda^R_{r,m}=\frac{\lambda_r c_r^{-2\alpha}}{\kappa_r}m_r^{-\alpha-1/2},\qquad \widehat\lambda^R_{b,m}=0,$$
and use only the residual seminorm penalty. The thresholds are part of the source theorem and cannot be replaced by a generic positive penalty.

## Definition references
[[def-physics-informed-neural-network-loss|physics informed neural network loss]]

[Shin et al., equations (3.1)–(3.3): exact thresholds, scaling condition, and objective](https://arxiv.org/pdf/2004.01806)

## Remark

For $d\ge2$, the exact residual and boundary threshold coordinates are
$$\widehat\lambda^R_{r,m}=\frac{3\lambda_r(\sqrt d)^{2\alpha}c_r^{-2\alpha/d}m_r^{-\alpha/d}}{C_m},\qquad \widehat\lambda^R_{b,m}=\frac{3\lambda_b(\sqrt d)^{2\alpha}c_b^{-2\alpha/(d-1)}m_b^{-\alpha/(d-1)}}{C_m},$$
where $C_m=3\max\{(C_r/c_r)(\sqrt d)^d m_r^{1/2},(C_b/c_b)(\sqrt d)^{d-1}m_b^{1/2}\}$. For $d=1$, the residual threshold is $\widehat\lambda^R_{r,m}=(\lambda_r c_r^{-2\alpha}/\kappa_r)m_r^{-\alpha-1/2}$, with $\kappa_r=C_r/c_r$, and the boundary threshold is zero. The weight vector must satisfy the componentwise lower bound and max-norm order condition in the Algorithm.

The original all-$\varepsilon>0$ sampling quantifier has no probability-measure instances; it is preserved and refuted in the all-scale inconsistency lemma. The small-scale range above is the corrected active sampling convention. No lower-mass constant normalization is implicit in this algorithm.

---
id: alg-duffy-weighted-product-gauss-quadrature
kind: algorithm
title: Weighted product Gauss quadrature after the Duffy transform
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-duffy-reference-triangle-map, thm-duffy-weak-singularity-transform, def-gauss-jacobi-quadrature-rule, def-countable-choice, lem-gauss-jacobi-weight-finite-moment-measure]
justified_by: [cor-duffy-weighted-product-gauss-error]
axiom_use: Countable Choice is used only for the positive Lebesgue-density Gaussian rules.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Imperial College London, Numerical quadrature, Finite Element course notes, §1.6
      url: https://finite-element.github.io/1_quadrature.html
      locator: §1.6, equations (1.11)–(1.13), tensor rule after the Duffy map.
---

## Definition

Assume Countable Choice. Let $\alpha<2$, put $\rho=1-\alpha>-1$, and let $n\ge1$. For a continuous amplitude $G$ on $[0,1]^2$, let $(z_j,w_j)_{j=1}^n$ be the Gauss–Jacobi rule for weight $(1+t)^\rho$ on $[-1,1]$, and $(\zeta_i,v_i)_{i=1}^n$ the rule for weight $1$ there. Map nodes and weights to $[0,1]$ by
$$r_j=(1+z_j)/2,\quad a_j=2^{-(\rho+1)}w_j,\qquad s_i=(1+\zeta_i)/2,\quad b_i=v_i/2.$$
The **Duffy weighted product rule** is
$$Q_{n,\alpha}^{D}(G)=\sum_{j=1}^n\sum_{i=1}^n a_jb_iG(r_j,s_i).$$
It approximates $\int_0^1\int_0^1r^{1-\alpha}G(r,s)\,ds\,dr$. When $G(r,s)=(1+s^2)^{-\alpha/2}q(r,rs)$ for a continuous $q:T\to\mathbb R$, this target is the triangle integral identified in [[thm-duffy-weak-singularity-transform]]. The finite nodes and weights are well-defined by the supplied Gauss–Jacobi rule; the error estimate for such transformed amplitudes is [[cor-duffy-weighted-product-gauss-error]].

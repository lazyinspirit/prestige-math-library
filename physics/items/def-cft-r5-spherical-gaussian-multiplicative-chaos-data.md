---
id: def-cft-r5-spherical-gaussian-multiplicative-chaos-data
kind: definition
title: Spherical Gaussian multiplicative chaos interaction data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-cft-r5-spherical-gaussian-free-field
  - def-radon-measure-on-an-lch-space
dependency_roles:
  def-cft-r5-spherical-gaussian-free-field: mathematical-premise
  def-radon-measure-on-an-lch-space: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Rémi Rhodes and Vincent Vargas, Lecture notes on Gaussian multiplicative chaos and Liouville Quantum Gravity, arXiv:1602.07323v1"
      url: https://arxiv.org/pdf/1602.07323
      locator: "§2.2, Theorem 2.3, PDF pp. 3–5; §2.3, PDF pp. 5–8."
    - title: "Colin Guillarmou, Antti Kupiainen, Rémi Rhodes, Vincent Vargas, Conformal Bootstrap in Liouville Theory, arXiv:2005.11530v1"
      url: https://arxiv.org/pdf/2005.11530v1
      locator: "§1.1, equations (1.3)–(1.6), PDF pp. 4–5."
---

## Definition

Let $X$ be the centered random distribution on the Riemann sphere with covariance $K(z,w)=\log(1/|z-w|)+\log|z|_++\log|w|_+$ and background measure $dA_0(z)=|z|_+^{-4}dxdy$, as specified by the earlier GFF definition. Let $\rho_\varepsilon$ range over its smooth local averaging families. For $0<\gamma<2$, define the regularized positive random measures

$$M_{\gamma,\varepsilon}(dz)=\exp\!\left(\gamma X_\varepsilon(z)-\frac{\gamma^2}{2}\mathbb E[X_\varepsilon(z)^2]\right)dA_0(z).$$

A **spherical Gaussian multiplicative chaos datum at parameter $\gamma$** is a finite positive random Radon measure $M_\gamma$ on $S$ such that for every $f\in C(S;\mathbb R)$, $\int_S f\,dM_{\gamma,\varepsilon}$ converges in probability to $\int_S f\,dM_\gamma$ as $\varepsilon\downarrow0$, with the same limit for every admitted smoothing family. “Nonzero” means $\mathbb P(M_\gamma(S)>0)=1$. This definition specifies the required limit as data; it does not by itself assert that such data exist for every $0<\gamma<2$.

## Definition references

[[def-cft-r5-spherical-gaussian-free-field]]

[[def-radon-measure-on-an-lch-space]]

## Remarks

The subcritical parameter range in the cited construction is $0<\gamma<2$ in real dimension two. The local $L^2$ argument on the assigned page covers only $0<\gamma<\sqrt2$; a complete local construction of the Radon-measure limit on the full interval remains a separate proof obligation.

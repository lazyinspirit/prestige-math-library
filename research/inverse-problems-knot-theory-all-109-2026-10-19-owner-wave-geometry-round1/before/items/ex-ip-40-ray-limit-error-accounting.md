---
id: ex-ip-40-ray-limit-error-accounting
kind: example
title: Exact-solution correction errors vanish in the Gaussian-beam ray limit
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - lem-ip-gaussian-beam-null-bicharacteristic
  - thm-ip-variable-metric-wave-ibvp-energy-wellposedness
  - thm-holder-inequality-for-integrals
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - def-riemannian-speed-and-length
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Lauri Oksanen, Mikko Salo, Plamen Stefanov, and Gunther Uhlmann, Inverse problems for real principal type operators (arXiv:2001.07599v2)"
      url: "https://arxiv.org/pdf/2001.07599v2"
      locator: "§3, Theorem 3.1 and proof, PDF pp. 20–32: normalized bicharacteristic concentration and correction/error terms."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (full author lecture notes, arXiv:2312.08123v1)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "§3.4, PDF pp. 32–39: Gaussian concentration and the limits of the lecture's beam proof sketch."
proof_strategy: Cauchy–Schwarz error expansion
---

## Statement

Let $(M,g)$ be a compact Riemannian manifold, let $T>0$, and let $Q=(0,T)\times M$ carry product measure $dV_gdt$. Fix a unit-speed geodesic segment $\gamma:[0,L]\to M$ and $t_0$ with $0<t_0<T-L$, and set $\Gamma(s)=(t_0+s,\gamma(s))$, $0\le s\le L$; $ds$ denotes its arclength parameter. Let $a\in C^\infty([0,T]\times M)$, and for each $\lambda\ge1$ let $u_{j,\lambda}^{\mathrm{app}}\in L^2(Q)$ and $R_{j,\lambda}\in L^2(Q)$ for $j=1,2$. Suppose $\|u_{j,\lambda}^{\mathrm{app}}\|_{L^2(Q)}\le C_0$, $\|R_{j,\lambda}\|_{L^2(Q)}\le C_1\lambda^{-1/2}$, and
$$\int_Q a\,u_{1,\lambda}^{\mathrm{app}}u_{2,\lambda}^{\mathrm{app}}\,dV_gdt\longrightarrow \int_0^L a(t_0+s,\gamma(s))\,ds.$$
Set $u_{j,\lambda}=u_{j,\lambda}^{\mathrm{app}}+R_{j,\lambda}$. Then
$$\left|\int_Q a\,u_{1,\lambda}u_{2,\lambda}\,dV_gdt-\int_Q a\,u_{1,\lambda}^{\mathrm{app}}u_{2,\lambda}^{\mathrm{app}}\,dV_gdt\right|=O(\lambda^{-1/2}),$$
and hence the exact-solution product has the same ray-integral limit. In the wave application, the Gaussian-beam construction supplies the normalized approximate-product limit and the energy correction supplies the stated $L^2$ remainder order.

## Statement references

[[lem-ip-gaussian-beam-null-bicharacteristic]]

[[thm-ip-variable-metric-wave-ibvp-energy-wellposedness]]

[[thm-holder-inequality-for-integrals]]

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-riemannian-volume-density]]

[[def-riemannian-speed-and-length]]

## Facts & Assumptions

**Given:** A smooth coefficient $a$ on the compact spacetime cylinder; two uniformly $L^2$-bounded approximate solutions; and two $L^2$ correction remainders of order $\lambda^{-1/2}$.

[F1] If $v$ and $w$ are square integrable, $\int|vw|\le\|v\|_2\|w\|_2$. ([[thm-holder-inequality-for-integrals]])

## Proof

1.1 Expand the exact product:
$$u_{1,\lambda}u_{2,\lambda}-u_{1,\lambda}^{\mathrm{app}}u_{2,\lambda}^{\mathrm{app}}=R_{1,\lambda}u_{2,\lambda}^{\mathrm{app}}+u_{1,\lambda}^{\mathrm{app}}R_{2,\lambda}+R_{1,\lambda}R_{2,\lambda}.$$
Multiplying by $a$, integrating, and applying [F1] to each term gives an absolute value at most
$$\|a\|_{L^\infty(Q)}\big(\|R_{1,\lambda}\|_2\|u_{2,\lambda}^{\mathrm{app}}\|_2+\|u_{1,\lambda}^{\mathrm{app}}\|_2\|R_{2,\lambda}\|_2+\|R_{1,\lambda}\|_2\|R_{2,\lambda}\|_2\big).$$
[F1, given, algebra]

2.1 By the hypotheses, the preceding expression is bounded by $\|a\|_\infty(2C_0C_1\lambda^{-1/2}+C_1^2\lambda^{-1})$, which is $O(\lambda^{-1/2})$ for $\lambda\ge1$. Since this difference tends to zero, the assumed approximate-product limit passes unchanged to the exact product. [step 1.1, given, algebra] ∎

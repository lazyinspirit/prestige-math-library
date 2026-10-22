---
id: lem-ip-cta-gaussian-beam-ray-limit
kind: lemma
title: "CTA Gaussian-beam quasimodes and geodesic concentration"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-transversally-anisotropic-product-domain
  - def-ip-injective-geodesic-ray-transform
  - def-riemannian-metric-and-riemannian-manifold
  - def-geodesic-of-an-affine-connection
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
  - thm-collar-neighborhood-theorem
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dos Santos Ferreira, Kurylev, Lassas, and Salo, The Calderon problem in transversally anisotropic geometries (2016)"
      url: "https://arxiv.org/pdf/1305.1273"
      locator: "Section 3, Proposition 3.1 and complete proof, PDF pp. 13-22."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (2023)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "Section 3.4, Gaussian beams, PDF pp. 32-39."
---

## Statement

Let $(M_0,g_0)$ be a compact smooth Riemannian manifold with smooth boundary and let $\gamma:[0,L]\to M_0$ be a unit-speed nontangential geodesic segment. For every real $\lambda$ and every $K>0$, there is a family $v_{\tau+i\lambda}\in C^\infty(M_0)$, $\tau\geq1$, such that
$$\|(-\Delta_{g_0}-(\tau+i\lambda)^2)v_{\tau+i\lambda}\|_{L^2(M_0)}=O(\tau^{-K}),\qquad \|v_{\tau+i\lambda}\|_{L^2(M_0)}=O(1),$$
and for every $\psi\in C(M_0)$,
$$\lim_{\tau\to\infty}\int_{M_0}|v_{\tau+i\lambda}|^2\psi\,dV_{g_0} =\int_0^L e^{-2\lambda t}\psi(\gamma(t))\,dt.$$
The statement permits transversal manifolds without an orientability assumption and makes no boundary condition assertion for the quasimodes.

## Statement references

[[def-ip-transversally-anisotropic-product-domain|Transversal manifold]]

[[def-ip-injective-geodesic-ray-transform|Nontangential geodesic segment]]

## Facts & Assumptions

**Given:** the compact Riemannian transversal, a nontangential segment, a real attenuation $\lambda$, and $K>0$.

[F1] [[def-riemannian-metric-and-riemannian-manifold]]: geodesic normal coordinates, the metric volume density, and the Laplace-Beltrami operator are defined locally without choosing an orientation.

[F2] [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]: the geodesic ODE has local solutions and smooth dependence on initial data, so parallel frames and exponential-coordinate maps vary smoothly along an embedded geodesic subsegment.

[L1] The source proof in Dos Santos Ferreira--Kurylev--Lassas--Salo constructs a local Fermi-coordinate beam, solves its phase jets by a Riccati equation and higher-order ODEs, solves amplitude jets by transport ODEs, patches finitely many pieces at self-intersections, and proves the product limit by nonstationary phase. This carrier has not yet supplied a complete local verification of the global phase/amplitude patching and the self-intersection cross-term estimates for every nontangential segment. The exact unresolved obligation is the full proof of those patching and limit steps under the statement's unoriented-manifold hypotheses.

## Proof

**Given:** the data in the statement.

1.1 Embed the segment in a collar extension across $\partial M_0$ and cover it by finitely many coordinate neighborhoods. On an embedded subsegment, parallel transport an orthonormal normal frame and set $F(t,y)=\exp_{\gamma(t)}(\sum_\alpha y_\alpha E_\alpha(t))$. The inverse function theorem gives local Fermi coordinates with $g_{jk}(t,0)=\delta_{jk}$ and $\partial_i g_{jk}(t,0)=0$. This construction is along an interval and uses no orientation of $M_0$. [F1, F2, given]

1.2 In one such chart, seek $v_s=e^{is\Theta}a$, $s=\tau+i\lambda$, with $\Theta(t,0)=t$ and $\operatorname{Im}\Theta(t,y)\geq c|y|^2$. Expand $\Theta$ into homogeneous transverse Taylor polynomials. The quadratic polynomial is $\frac12H(t)y\cdot y$; substituting into $g(d\Theta,d\Theta)=1$ gives the matrix Riccati equation $H'+H^2=F(t)$, where $F$ is determined by the second transverse Taylor coefficient of the inverse metric. An initial complex symmetric $H(t_0)$ with positive-definite imaginary part yields a smooth solution with positive imaginary part on a short subsegment. Each higher homogeneous phase term then solves a linear first-order ODE along $t$, because its newest coefficient occurs linearly in the eikonal equation. [F1, F2, given, algebra]

2.1 Substituting $a=\tau^{(m-1)/4}\sum_{j=0}^N s^{-j}a_{-j}$ into $(-\Delta_{g_0}-s^2)e^{is\Theta}a$ cancels successive powers of $s$ by linear transport ODEs for the transverse Taylor coefficients of each $a_{-j}$. The leading coefficient solves $a_0(t,0)=c_0\exp(-\frac12\int_{t_0}^t\operatorname{tr}H(r)\,dr)$. A Borel realization of the recursively specified Taylor jets and a transverse cutoff produce a smooth local beam; Gaussian integration gives bounded $L^2$ norm and a residual that tends to zero faster than any prescribed power after increasing the Taylor order. [F1, step 1.2, construct]

3.1 To obtain the stated global quasimode, the local beams must be matched on overlaps, added across every self-intersection, and the cross terms in $|v_s|^2$ must be shown to vanish as $\tau\to\infty$. The source argument uses equality of phase/amplitude jets on overlaps and nonstationary phase for distinct branches. This carrier has not supplied the complete estimates under the full hypotheses of the statement, so this proof remains escalated at [L1]. [L1, step 1.1, step 2.1] ∎


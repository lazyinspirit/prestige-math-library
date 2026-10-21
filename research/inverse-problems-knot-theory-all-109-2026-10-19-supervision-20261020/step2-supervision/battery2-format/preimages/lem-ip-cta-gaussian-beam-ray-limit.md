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
      locator: "Section 3, Proposition 3.1, PDF p. 14; proof on pp. 14-22, particularly equation (3.6) on pp. 21-22. External global patching and distinct-branch estimates; current partial reading specified in F3."
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

[F3] **External input:** Dos Santos Ferreira--Kurylev--Lassas--Salo, Proposition 3.1, PDF p. 14, supplies exactly the residual, norm, and attenuated ray limit in the statement on an oriented compact transversal of dimension at least two. Its finite Taylor-jet construction and distinct-branch cross-term estimate (equation (3.6), PDF pp. 21--22) are imported, including overlap matching at self-intersections. For this repair the proposition and the cross-term argument on pp. 21--22 were inspected; the entire proof on pp. 14--22 is not claimed as newly reconstructed. Historical source coverage is distinct from this reading extent.

[F4] The construction for each fixed $K$ uses finitely many charts, finite Taylor orders, and linear transport and matrix ODEs with fixed initial data. Increasing the finite order suffices for that $K$; no simultaneous choice of quasimodes for unrelated $K$ or $\lambda$ is required. The parameter $\tau$ then enters the resulting explicit formula. Thus the use here adds no choice axiom to the statement.

## Proof

**Given:** the data in the statement.

1.1 Embed the segment in a collar extension across $\partial M_0$ and cover it by finitely many coordinate neighborhoods. On an embedded subsegment, parallel transport an orthonormal normal frame and set $F(t,y)=\exp_{\gamma(t)}(\sum_\alpha y_\alpha E_\alpha(t))$. The inverse function theorem gives local Fermi coordinates with $g_{jk}(t,0)=\delta_{jk}$ and $\partial_i g_{jk}(t,0)=0$. This construction is along an interval and uses no orientation of $M_0$. [F1, F2, given]

1.2 In one such chart, seek $v_s=e^{is\Theta}a$, $s=\tau+i\lambda$, with $\Theta(t,0)=t$ and $\operatorname{Im}\Theta(t,y)\geq c|y|^2$. Expand $\Theta$ into homogeneous transverse Taylor polynomials. The quadratic polynomial is $\frac12H(t)y\cdot y$; substituting into $g(d\Theta,d\Theta)=1$ gives the matrix Riccati equation $H'+H^2=F(t)$, where $F$ is determined by the second transverse Taylor coefficient of the inverse metric. An initial complex symmetric $H(t_0)$ with positive-definite imaginary part yields a smooth solution with positive imaginary part on a short subsegment. Each higher homogeneous phase term then solves a linear first-order ODE along $t$, because its newest coefficient occurs linearly in the eikonal equation. [F1, F2, given, algebra]

2.1 Substituting $a=\tau^{(m-1)/4}\sum_{j=0}^N s^{-j}a_{-j}$ into $(-\Delta_{g_0}-s^2)e^{is\Theta}a$ cancels successive powers of $s$ by linear transport ODEs for the transverse Taylor coefficients of each $a_{-j}$. The leading coefficient solves $a_0(t,0)=c_0\exp(-\frac12\int_{t_0}^t\operatorname{tr}H(r)\,dr)$. A finite Taylor realization to the order required for the fixed $K$ and a transverse cutoff produce a smooth local beam; Gaussian integration gives bounded $L^2$ norm and a residual that tends to zero faster than any prescribed power after increasing the Taylor order. [F1, step 1.2, construct]

3.1 On an oriented transversal of dimension at least two, apply [F3] to complete the finite overlap matching and eliminate all distinct-branch cross terms. This gives the stated global family and limit; steps 1.1--2.1 describe its local ingredients, without claiming a new proof of the imported global estimates. [F3, F4, step 1.1, step 2.1]

3.2 For a nonorientable transversal let $\pi:\widetilde M_0\to M_0$ be its orientation double cover, with deck involution $\sigma$, and lift $\gamma$ to $\widetilde\gamma$. Let $w_s$ be the oriented beam from [F3] along that lift. Define the descended function by $\pi^*v_s=w_s+\sigma^*w_s$. The residual and norm bounds follow by a finite sum and the covering integral formula. The two lifted segments have no common tangent branch: equality of position and velocity at different times would make the geodesic periodic, contrary to its nontangential boundary exit; opposite velocities at a repeated point would force a zero midpoint velocity by geodesic uniqueness. There are only finitely many crossing branches, by compactness and local uniqueness. The distinct-branch estimate in [F3], applied to these two lifts, therefore gives a zero mixed-term limit. For every continuous $\psi$ the covering formula is
$$\int_{M_0}|v_s|^2\psi\,dV=\int_{\widetilde M_0}|w_s|^2(\psi\circ\pi)\,dV+\operatorname{Re}\int_{\widetilde M_0}w_s\overline{\sigma^*w_s}(\psi\circ\pi)\,dV.$$
The first term has precisely the required ray limit and the second tends to zero. In particular there is no extra factor two in the normalization. The same argument works if the cover is disconnected. [F1, F3, F4, step 3.1, algebra]

3.3 If the transversal has dimension one, the component containing the segment is an interval with arclength coordinate $t$ beginning at its incoming endpoint. Set $v_s=e^{ist}$ on this component and zero on all other components. The residual is zero and the asserted integral formula is exact. In dimension zero the given unit-speed segment cannot exist. This covers the dimensions not needed in the CTA application as well. [F1, given, algebra] ∎

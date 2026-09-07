---
id: ex-divergence-theorem-on-a-euclidean-ball
title: "Volume-form divergence on the Euclidean ball"
kind: example
status: draft
origin: pipeline
deps: ["prop-general-stokes-agrees-with-classical-gauss-flux", "prop-integration-of-top-forms-by-finite-parametrizations"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Example 16.9 pp.409–410; Nicolaescu Example 3.4.14 pp.120–121"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Example

For the closed unit ball $B^3$ oriented by $dx\wedge dy\wedge dz$, the field $F=(x,y,z)$ has divergence 3 and outward flux $4\pi$. The field $G=(x,0,0)$ has divergence 1 and outward flux $4\pi/3$. In each case the volume integral equals the flux.

## Facts & Assumptions

[F1] [[prop-general-stokes-agrees-with-classical-gauss-flux]]: For $\mu=dx\wedge dy\wedge dz$ and a smooth Euclidean field $F$, the volume-form divergence is $\partial_xF_x+\partial_yF_y+\partial_zF_z$. For a surface parametrization $r(u,v)$, $$r^*(\iota_F\mu)=\big(F(r)\cdot(r_u\times r_v)\big)\,du\wedge dv.$$ Consequently the volume-form divergence theorem agrees with the classical Gauss flux theorem on compact smooth regions that also admit the supplied elementary-solid presentation required by that classical theorem.

[F2] [[prop-integration-of-top-forms-by-finite-parametrizations]]: Let $n\geq1$, let $M^n$ be oriented, and let $\omega\in\Omega_c^n(M)$. For $1\leq i\leq m$ let $D_i\subset\mathbb R^n$ be bounded open Jordan domains and $F_i:\overline D_i\to M$ continuous and smooth up to the boundary in target coordinates: near each parameter point, a target coordinate representative extends smoothly to a Euclidean neighborhood. Suppose $F_i|_{D_i}$ is an orientation-preserving diffeomorphism onto an open $W_i\subset M$, the $W_i$ are pairwise disjoint, and $\operatorname{supp}\omega\subset\bigcup_i\overline W_i$. Then $$\int_M\omega=\sum_{i=1}^m\int_{D_i}F_i^*\omega.$$ An empty family is allowed when the support is empty. No nonsingularity of $DF_i$ on $\partial D_i$, and no $M$-valued extension across a genuine target boundary, is assumed.

## Verification

**Given:** The objects and hypotheses in the statement above.

1.1 Use $R(r,\phi,\theta)=(r\sin\phi\cos\theta,r\sin\phi\sin\theta,r\cos\phi)$ on $(0,1)\times(0,\pi)\times(0,2\pi)$. Its determinant is $r^2\sin\phi>0$, it is a diffeomorphism onto its open image and extends smoothly in coordinates from the closed box. The missing radial cut and axes lie in the image of its parameter boundary. Finite parametrizations give $\operatorname{Vol}B^3=\int_0^1r^2dr\int_0^\pi\sin\phi d\phi\int_0^{2\pi}d\theta=4\pi/3$. [F2]

2.1 For the sphere parametrization $q=R(1,\phi,\theta)$, $q_\phi\times q_\theta=\sin\phi\,q$, which points outward for $0<\phi<\pi$. Thus F has flux integrand $\sin\phi$, whose double integral is $4\pi$; its volume divergence integral is $3(4\pi/3)=4\pi$. [F1, F2, step 1.1]

3.1 For G the flux integrand is $q_x^2\sin\phi=\sin^3\phi\cos^2\theta$. The two factors integrate to $4/3$ and $\pi$, giving $4\pi/3$. The first value follows from $u=\cos\phi$, and the second from $\cos^2\theta=(1+\cos2\theta)/2$. Divergence is one, so its volume integral agrees. The poles and seam are parameter-boundary images handled by the finite-parametrization formula. [F1, F2, step 1.1, step 2.1] ∎

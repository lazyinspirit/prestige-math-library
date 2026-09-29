---
id: fs-geodesic-curvature-is-the-ordinary-curvature-of-a-space-curve
kind: false-statement
title: Geodesic curvature need not equal ambient curve curvature
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve
  - def-geodesic-of-an-affine-connection
  - def-riemannian-metric-and-riemannian-manifold
  - prop-christoffel-formula-for-the-levi-civita-connection
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, §The Gauss–Bonnet Formula, printed pp. 163–164 (PDF pp. 179–180), lines 6421–6431: signed curvature is the normal component of intrinsic covariant acceleration, and unit speed makes that acceleration tangent-orthogonal. Context only; the counterexample is calculated locally."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 15, §15.1, Definition 15.1.1 and Example 15.1.3, lines 6271–6283 and 6309–6319 (PDF pp. 121–122): geodesics have zero intrinsic acceleration, and the induced connection on a Euclidean submanifold is tangential projection. Context only; this refutation computes the intrinsic acceleration from Christoffel symbols."
---

## Statement

False: For every oriented Riemannian surface $M\subset\mathbb R^3$ with its
induced metric and every unit-speed $C^2$ curve $\gamma$ in $M$, the signed
geodesic curvature $k_g$ equals the ordinary Euclidean curvature of the
space curve, $\|\gamma''\|$.

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9,
§“The Gauss–Bonnet Formula,” printed pp. 163–164 (PDF pp. 179–180), lines
6421–6431, defines the signed surface curvature from the normal component of
intrinsic covariant acceleration and derives its orthogonality to the tangent
for a unit-speed curve. Datar, *Lectures on Riemannian Geometry*, Lecture 15,
§15.1, Definition 15.1.1 and Example 15.1.3, lines 6271–6283 and 6309–6319,
records the intrinsic geodesic equation and the tangential-projection
description for an induced submanifold metric. These passages give context;
the refutation below uses an explicit metric-coordinate calculation.

## Facts & Assumptions

**Given:** A claimed identity between signed geodesic curvature and ordinary Euclidean curvature for every unit-speed curve on every oriented embedded Riemannian surface.

[F1] For a unit-speed curve on an oriented surface, its covariant acceleration satisfies $A_\gamma=k_gJT$ and $k_g=g(A_\gamma,JT)$ ([[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

[F2] In coordinates, the Levi–Civita symbols of a Riemannian metric are given by $\Gamma^k{}_{ij}=\tfrac12\sum_\ell g^{k\ell}(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij})$ ([[prop-christoffel-formula-for-the-levi-civita-connection]]).

[F3] A smooth curve is an affinely parametrized geodesic when its covariant acceleration vanishes ([[def-geodesic-of-an-affine-connection]]).

[F4] A Riemannian metric is positive definite at every point ([[def-riemannian-metric-and-riemannian-manifold]]).

## Refutation

**Proof technique:** An explicit unit-speed curve on the round sphere.

1.1 Take the unit sphere $S^2\subset\mathbb R^3$ with its induced round metric and outward orientation, and let $\gamma(t)=(\cos t,\sin t,0)$ for $t\in\mathbb R$. Then $\gamma'=(-\sin t,\cos t,0)$ has norm $1$, while $\gamma''=(-\cos t,-\sin t,0)=-\gamma(t)$ has norm $1$ and is normal to $S^2$ because $T_{\gamma(t)}S^2=\gamma(t)^\perp$. Thus the ordinary space-curve curvature is $\|\gamma''(t)\|=1$. [F4, given]

2.1 Around any point of the equator use a longitude-latitude chart $X(u,v)=(\cos v\cos u,\cos v\sin u,\sin v)$ on a longitude interval and $|v|<\pi/2$. Differentiating $X$ gives $g_{uu}=\cos^2v$, $g_{uv}=0$, and $g_{vv}=1$. Formula [F2] therefore yields $\Gamma^u{}_{uu}=0$ and $\Gamma^v{}_{uu}=\sin v\cos v$. The curve from step 1.1 has coordinates $(u,v)=(t,0)$ on this chart, so its coordinate second derivatives vanish and both components of its covariant acceleration are zero at $v=0$. This calculation applies in a chart around every parameter value. [F2, step 1.1, given]

3.1 Hence $D_t\gamma'=0$ everywhere, so [F3] identifies $\gamma$ as an affinely parametrized geodesic. Its covariant acceleration is $A_\gamma=0$, and [F1] then gives $k_g=0$. Together with step 1.1 this gives $k_g=0\ne1=\|\gamma''\|$, so the proposed universal equality is false. The witness is a single explicit curve and uses no choice principle. [F1, F3, step 1.1, step 2.1, algebra] ∎

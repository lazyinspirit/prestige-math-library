---
id: def-jacobi-field
kind: definition
title: Jacobi field
status: published
origin: pipeline
deps:
  - lem-covariant-derivatives-commute-up-to-curvature-in-a-two-parameter-variation
  - def-riemann-curvature-four-tensor
  - def-covariant-derivative-along-a-curve
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Chapter 10"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: The Jacobi Equation, definition following Theorem 10.2, printed pp.175-176 (PDF labels P191-192)
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025), Definition 21.2.3"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: printed p.157 (PDF label P163)
---

## Definition

Let $(M,g)$ be a Riemannian manifold, let $I$ be a nondegenerate interval,
and let $\gamma:I\to M$ be an affinely parametrized geodesic. For a smooth
vector field $J$ along $\gamma$, write $D_tJ$ for its covariant derivative
along $\gamma$ and $D_t^2J=D_t(D_tJ)$, using
[[def-covariant-derivative-along-a-curve]]. The curvature operator $R$ has the
convention
$$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z,$$
as fixed by [[lem-covariant-derivatives-commute-up-to-curvature-in-a-two-parameter-variation]]
and used in [[def-riemann-curvature-four-tensor]]. A smooth field $J$ is a
**Jacobi field** along $\gamma$ when it satisfies the Jacobi equation
$$D_t^2J+R(J,\dot\gamma)\dot\gamma=0$$
throughout $I$. We write $\mathcal J(\gamma)$ for the set of these fields.

The interval is required to have nonempty interior so that the covariant
derivatives are defined; if an endpoint is included, the equation there uses
the one-sided derivatives of the smooth field. Constant geodesics are included:
when $\dot\gamma=0$, the curvature term vanishes and the equation is
$D_t^2J=0$. On a zero-dimensional manifold the only field is zero, so the
equation holds. In dimension one the same equation and curvature convention
apply without a separate restriction. The definition classifies a specified
field and geodesic and makes no existence choice.

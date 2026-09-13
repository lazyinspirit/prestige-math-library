---
id: def-riemann-curvature-four-tensor
kind: definition
title: Riemann curvature four-tensor
status: draft
origin: pipeline
deps: ["thm-curvature-is-a-type-one-three-tensor", "def-riemannian-metric-and-riemannian-manifold", "thm-fundamental-theorem-of-riemannian-geometry"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 11, Section 11.1, printed pages 71–72
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 7, equation (7.4), printed page 118
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $(M,g)$ be a Riemannian manifold, let $\nabla$ be its unique
Levi–Civita connection, and let $R$ be the curvature tensor with the sign fixed
above. The **Riemann curvature four-tensor** is the covariant tensor

$$\operatorname{Rm}(X,Y,Z,W):=g(R(X,Y)Z,W).$$

Thus the first two arguments are the two differentiating slots, the third is
the field acted on, and the fourth lowers the output index. In coordinates,
if $R(\partial_i,\partial_j)\partial_k=R^m{}_{kij}\partial_m$, then
$R_{ijkl}=g_{lm}R^m{}_{kij}$ under this argument order. This convention makes
$\operatorname{Rm}(u,v,v,u)$ positive on a positively curved round sphere.

The definition uses no chosen frame. On an empty or zero-dimensional manifold
it gives the unique zero four-tensor; in dimension one the same formula applies
and later symmetries force it to vanish. It is valid up to the boundary when a
Riemannian manifold with boundary is supplied.

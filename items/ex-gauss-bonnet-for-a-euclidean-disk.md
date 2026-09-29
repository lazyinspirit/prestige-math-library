---
id: ex-gauss-bonnet-for-a-euclidean-disk
kind: example
title: Euclidean disk boundary curvature
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - thm-fundamental-theorem-of-riemannian-geometry
  - def-axiom-of-choice
  - cor-gauss-bonnet-for-compact-oriented-surfaces-with-smooth-boundary
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve
  - def-oriented-riemannian-surface-and-positive-quarter-turn
  - thm-gaussian-curvature-structure-equation
  - def-curvilinear-triangulation-of-a-compact-surface
  - thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
  - def-countable-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, Theorem 9.3 and the boundary-orientation convention, printed pp. 163-167 (PDF pp. 179-183): the Euclidean disk is the model boundary case, with geodesic curvature 1/R on the counterclockwise circle."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.0.1, printed pp. 10-13 (PDF pp. 17-20): the boundary formula applied to the flat disk."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Assume the axiom of choice.
Let $D=\{x\in\mathbb R^2:|x|\le R\}$ with $R>0$, the standard orientation and
the Euclidean metric. Then $K\equiv0$, the positively oriented boundary is
the counterclockwise circle, $k_g=1/R$ along it, and
$$\int_DK\,dA=0,\qquad\int_{\partial D}k_g\,ds=2\pi,\qquad\chi(D)=1,$$
so the Gauss-Bonnet identity reads $0+2\pi=2\pi\chi(D)=2\pi$. The boundary
term is exactly the missing $2\pi$: a flat disk has vanishing curvature but a
positive boundary contribution.

## Facts & Assumptions

**Given:** The radius $R>0$, the region $D=\{x\in\mathbb R^2:|x|\le R\}$ with the standard orientation of $\mathbb R^2$ and the Euclidean metric.

[A1] full AC is assumed; it is inherited through the smooth-boundary Gauss-Bonnet corollary quoted below and is used nowhere else in this Euclidean computation ([[def-axiom-of-choice]]).

[F1] For a compact oriented Riemannian surface with smooth boundary, $\int_DK\,dA+\int_{\partial D}k_g\,ds=2\pi\chi(D)$ with the outward-normal-first boundary orientation ([[cor-gauss-bonnet-for-compact-oriented-surfaces-with-smooth-boundary]]).

[F2] On each boundary arc the outward-normal-first rule selects the unit tangent $T$ with $(\nu,T)$ positive for an outward transverse vector $\nu$, and then $JT$ is the inward unit conormal; the signed geodesic curvature of a regular $C^2$ unit-speed curve is $k_g=g(\nabla_TT,JT)$ ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]], [[def-oriented-riemannian-surface-and-positive-quarter-turn]], [[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

[F3] The Euclidean Levi-Civita derivative on $\mathbb R^2$ is $\nabla_XY=\sum_jX(Y^j)\partial_j$ in Cartesian coordinates, with vanishing Christoffel symbols; ordinary directional differentiation is torsion free and metric compatible for the constant Euclidean metric, so uniqueness identifies it as the Levi-Civita connection; in particular $\nabla_TT$ along a curve is the ordinary derivative of the unit tangent ([[thm-fundamental-theorem-of-riemannian-geometry]]).

[F4] For a smooth positive orthonormal frame with connection form $\omega$, $d\omega=-K\,dA$ ([[thm-gaussian-curvature-structure-equation]]).

[F5] A finite face-to-face piecewise $C^2$ curvilinear triangulation of a compact smooth surface with boundary has the well-defined count $\chi(D)=V-E+F$ ([[def-curvilinear-triangulation-of-a-compact-surface]], [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

## Verification

**Proof technique:** compute the curvature, the Euler characteristic and the boundary term of the Euclidean disk.

1.1 The frame $(\partial_1,\partial_2)$ is orthonormal with $\nabla\partial_i=0$ by [F3], so its connection form vanishes and $d\omega=0$; [F4] gives $K\,dA=0$, hence $K\equiv0$ on $D$ and $\int_DK\,dA=0$. [F3, F4, algebra]

1.2 The vertices $R(1,0)$, $R(-1/2,\sqrt3/2)$, $R(-1/2,-\sqrt3/2)$ divide $\partial D$ into three regular $C^2$ arcs bounding a single closed face with three edges and three vertices, and the links are intervals at the boundary vertices; this is a finite curvilinear triangulation of $D$ with $V=3$, $E=3$, $F=1$, so by [F5] $\chi(D)=3-3+1=1$. [F5, given, construct]

1.3 Parametrize $\gamma(t)=R(\cos t,\sin t)$, $0\le t\le2\pi$. The outward unit normal is $\nu=(\cos t,\sin t)$, the unit tangent selected by the outward-normal-first rule is $T=(-\sin t,\cos t)$ with $(\nu,T)$ positive, and $JT=-(\cos t,\sin t)$. By [F3], $\nabla_TT=-(1/R)(\cos t,\sin t)$, so $k_g=g(-(1/R)(\cos t,\sin t),-(\cos t,\sin t))=1/R$ and $\int_{\partial D}k_g\,ds=(1/R)\cdot2\pi R=2\pi$. [F2, F3, algebra]

2.1 By steps 1.1, 1.2 and 1.3, the Gauss-Bonnet identity [F1] holds in the form $0+2\pi=2\pi\cdot1$; the boundary integral supplies the entire right-hand side because the flat disk has $K\equiv0$. [F1, step 1.1, step 1.2, step 1.3, algebra]

3.1 No new choice is made: the disk, its triangulation and the circle parametrization are explicit, and full AC entered only through the inherited smooth-boundary corollary of [F1]. [A1, step 2.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.3 and the boundary convention preceding it, printed pp. 163-167, gives the disk as the model computation: the counterclockwise circle of radius $R$ has signed geodesic curvature $1/R$ and contributes $2\pi$. Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.0.1, printed pp. 10-13, states the same formula. The Euclidean connection is the published library item [[thm-fundamental-theorem-of-riemannian-geometry]], and $\chi(D)=1$ is counted here from the explicit three-arc triangulation using [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]], not imported from classification.

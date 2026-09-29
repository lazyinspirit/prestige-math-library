---
id: fs-gauss-bonnet-for-a-surface-with-boundary-has-no-boundary-term
kind: false-statement
title: A boundary term is necessary
status: draft
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
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, Theorem 9.3, printed pp. 165-167 (PDF pp. 181-183): the local Gauss-Bonnet formula carries the boundary geodesic-curvature term, which is absent for closed surfaces."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.0.1, printed pp. 10-13 (PDF pp. 17-20): the formula with the boundary integral, applied here to a Euclidean disk."
---

## Statement

Assume the axiom of choice.
False: for a compact oriented Riemannian surface with nonempty smooth
boundary the Gauss-Bonnet formula has no boundary term, that is
$\int_MK\,dA=2\pi\chi(M)$. The Euclidean disk of radius $R>0$ has $K\equiv0$,
$\chi(D)=1$ and $\int_{\partial D}k_g\,ds=2\pi\ne0$, so omitting the boundary
integral would assert $0=2\pi$.

## Facts & Assumptions

**Given:** The claim that the closed-surface form $\int_MK\,dA=2\pi\chi(M)$ holds verbatim on surfaces with boundary, to be refuted by an explicit Euclidean disk.

[A1] full AC is assumed; it is inherited through the smooth-boundary Gauss-Bonnet corollary quoted below and is used nowhere else in this Euclidean computation ([[def-axiom-of-choice]]).

[F1] For a compact oriented Riemannian surface with smooth boundary, $\int_MK\,dA+\int_{\partial M}k_g\,ds=2\pi\chi(M)$ with the outward-normal-first boundary orientation ([[cor-gauss-bonnet-for-compact-oriented-surfaces-with-smooth-boundary]]).

[F2] On each smooth boundary arc the tangent is oriented by the outward-normal-first rule: for an outward transverse vector $\nu$, the selected unit tangent $T$ is the one for which $(\nu,T)$ is positive; $JT$ is then the inward unit conormal ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]], [[def-oriented-riemannian-surface-and-positive-quarter-turn]]).

[F3] For a regular $C^2$ unit-speed curve with tangent $T$, the signed geodesic curvature is $k_g=g(\nabla_TT,JT)$, and $\nabla_TT$ is the covariant acceleration ([[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

[F4] The Euclidean metric on $\mathbb R^2$ has Levi-Civita derivative $\nabla_XY=\sum_jX(Y^j)\partial_j$ in Cartesian coordinates, with vanishing Christoffel symbols: ordinary directional differentiation is torsion free and metric compatible for the constant Euclidean metric, so uniqueness identifies it as the Levi-Civita connection; the covariant derivative along a curve is the ordinary derivative of the vector field, and the coordinate frame $(\partial_1,\partial_2)$ is orthonormal with $\nabla\partial_i=0$ ([[thm-fundamental-theorem-of-riemannian-geometry]]).

[F5] For a smooth positive orthonormal frame with connection form $\omega$, $d\omega=-K\,dA$ ([[thm-gaussian-curvature-structure-equation]]).

[F6] A finite face-to-face piecewise $C^2$ curvilinear triangulation of a compact smooth surface with smooth boundary has a well-defined count $\chi(M)=V-E+F$ ([[def-curvilinear-triangulation-of-a-compact-surface]], [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

## Refutation

**Proof technique:** compute the boundary term of a Euclidean disk and show that the boundary-free identity would be false.

1.1 Let $D=\{x\in\mathbb R^2:|x|\le R\}$ with $R>0$, the standard orientation and the Euclidean metric. By [F4] the orthonormal frame $(\partial_1,\partial_2)$ has $\nabla\partial_i=0$, so its connection form $\omega=0$ and $d\omega=0$; [F5] gives $K\,dA=0$, and since $dA\ne0$ at every point, $K\equiv0$ on $D$. Thus $\int_DK\,dA=0$. [F4, F5, given, algebra]

1.2 The boundary circle is divided by the three vertices $R(1,0)$, $R(-1/2,\sqrt3/2)$, $R(-1/2,-\sqrt3/2)$ into three regular $C^2$ arcs, and the single closed face they bound has those three vertices and three edges, with link an interval at each boundary vertex and non-antipodal one-sided velocities; this is a finite curvilinear triangulation of $D$ with $V=3$, $E=3$, $F=1$, so by [F6] $\chi(D)=3-3+1=1$. [F6, given]

1.3 Parametrize the boundary circle by $\gamma(t)=R(\cos t,\sin t)$, $0\le t\le2\pi$. Its unit tangent is $T=(-\sin t,\cos t)$, the outward unit normal is $\nu=(\cos t,\sin t)$ and $(\nu,T)$ is positively oriented, so this is the outward-normal-first boundary orientation of [F2]; the inward unit conormal is $JT=-(\cos t,\sin t)$. By [F4] the covariant acceleration is the ordinary acceleration of the unit-speed parametrization, $\nabla_TT=-(1/R)(\cos t,\sin t)$, and [F3] gives $k_g=g(-(1/R)(\cos t,\sin t),-(\cos t,\sin t))=1/R$. [F2, F3, F4, algebra]

2.1 By step 1.3 the boundary integral is $\int_{\partial D}k_g\,ds=(1/R)\cdot2\pi R=2\pi$, while $\int_DK\,dA=0$ by step 1.1; the boundary contribution is therefore nonzero. [step 1.1, step 1.3, algebra]

3.1 Omitting the boundary integral would make the Gauss-Bonnet identity read $\int_DK\,dA=2\pi\chi(D)$, that is $0=2\pi\chi(D)=2\pi\cdot1$, which is false. With the boundary term retained, [F1] reads $0+2\pi=2\pi\chi(D)$, consistent with $\chi(D)=1$. Hence the asserted boundary-free identity is false, and the boundary term is indispensable. [F1, step 1.1, step 1.2, step 2.1, algebra]

4.1 No new choice is made: the Euclidean disk, its three-arc triangulation and the circle parametrization are explicit, and full AC entered only through the inherited smooth-boundary corollary of [F1]. [A1, step 3.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.3, printed pp. 165-167, gives the Gauss-Bonnet formula with the boundary geodesic-curvature integral, and Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.0.1, printed pp. 10-13, states the same formula. The disk computation follows Lee's worked boundary case: the circle of radius $R$ has signed geodesic curvature $1/R$ in the outward-normal-first orientation, contributing $2\pi$, which no closed-surface statement can produce. The Euclidean frame and connection are the library item [[thm-fundamental-theorem-of-riemannian-geometry]], and $\chi(D)=1$ is counted here from an explicit three-arc curvilinear triangulation rather than imported from classification.

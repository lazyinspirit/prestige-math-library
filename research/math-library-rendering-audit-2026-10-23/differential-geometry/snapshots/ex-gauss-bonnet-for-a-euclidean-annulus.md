---
id: ex-gauss-bonnet-for-a-euclidean-annulus
kind: example
title: Euclidean annulus boundary signs
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
      locator: "Chapter 9, Theorem 9.3, printed pp. 165-167 (PDF pp. 181-183): the boundary term with the outward-normal-first orientation, applied to a region with two boundary components."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.0.1, printed pp. 10-13 (PDF pp. 17-20): the formula with boundary, here specialized to an annulus."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Assume the axiom of choice.
Let $0<r<R$ and let $A=\{x\in\mathbb R^2:r\le|x|\le R\}$ be the Euclidean
annulus with the standard orientation and metric. Then $K\equiv0$, the outer
circle $|x|=R$ contributes $+2\pi$ and the inner circle $|x|=r$ contributes
$-2\pi$ to the boundary integral, and the total boundary integral vanishes:
$$\int_AK\,dA=0,\qquad\int_{\partial A}k_g\,ds=2\pi-2\pi=0,\qquad\chi(A)=0,$$
so the Gauss-Bonnet identity reads $0=0$. The opposite signs come from the
outward-normal-first convention: the outward normal is radial and points
away from the annulus on the outer circle but toward the origin on the inner
circle, so the inner boundary is traversed clockwise.

## Facts & Assumptions

**Given:** The open annulus data $0<r<R$, the region $A=\{r\le|x|\le R\}$ with the standard orientation of $\mathbb R^2$ and the Euclidean metric.

[A1] full AC is assumed; it is inherited through the smooth-boundary Gauss-Bonnet corollary quoted below and is used nowhere else in this Euclidean computation ([[def-axiom-of-choice]]).

[F1] For a compact oriented Riemannian surface with smooth boundary, $\int_AK\,dA+\int_{\partial A}k_g\,ds=2\pi\chi(A)$ with the outward-normal-first boundary orientation ([[cor-gauss-bonnet-for-compact-oriented-surfaces-with-smooth-boundary]]).

[F2] On each boundary arc the outward-normal-first rule selects the unit tangent $T$ with $(\nu,T)$ positive for an outward transverse vector $\nu$, and then $JT$ is the inward unit conormal; the signed geodesic curvature of a regular $C^2$ unit-speed curve is $k_g=g(\nabla_TT,JT)$ ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]], [[def-oriented-riemannian-surface-and-positive-quarter-turn]], [[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

[F3] The Euclidean Levi-Civita derivative on $\mathbb R^2$ is $\nabla_XY=\sum_jX(Y^j)\partial_j$ in Cartesian coordinates, with vanishing Christoffel symbols; ordinary directional differentiation is torsion free and metric compatible for the constant Euclidean metric, so uniqueness identifies it as the Levi-Civita connection; in particular $\nabla_TT$ along a curve is the ordinary derivative of the unit tangent ([[thm-fundamental-theorem-of-riemannian-geometry]]).

[F4] For a smooth positive orthonormal frame with connection form $\omega$, $d\omega=-K\,dA$ ([[thm-gaussian-curvature-structure-equation]]).

[F5] A finite face-to-face piecewise $C^2$ curvilinear triangulation of a compact smooth surface with boundary has the well-defined count $\chi(A)=V-E+F$ ([[def-curvilinear-triangulation-of-a-compact-surface]], [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

## Verification

**Proof technique:** compute the curvature, the Euler characteristic and the two boundary contributions of the Euclidean annulus.

1.1 The frame $(\partial_1,\partial_2)$ of $\mathbb R^2$ is orthonormal with $\nabla\partial_i=0$ by [F3], so its connection form vanishes and $d\omega=0$; by [F4], $K\,dA=0$ and hence $K\equiv0$ on $A$, so $\int_AK\,dA=0$. [F3, F4, algebra]

1.2 With $u_i=(\cos(2\pi i/3),\sin(2\pi i/3))$, put $a_i=ru_i$ and $b_i=Ru_i$ for $i=0,1,2$ (indices mod $3$). The polar map $\Phi_i(s,t)=(r+(R-r)s)(\cos(2\pi(i+t)/3),\sin(2\pi(i+t)/3))$ is a smooth embedding of the closed parameter square $[0,1]^2$ onto the $i$th annular sector: its Jacobian determinant is $(R-r)(r+(R-r)s)2\pi/3>0$. Its diagonal $\delta_i(t)=\Phi_i(t,t)$ joins $a_i$ to $b_{i+1}$ and has relative interior strictly inside $A$ and the angular sector. The two closed parameter triangles cut by $s=t$ map to regular curvilinear triangular disks with vertices $a_i,a_{i+1},b_{i+1}$ and $a_i,b_i,b_{i+1}$. Thus the inner circle arcs $a_ia_{i+1}$, outer circle arcs $b_ib_{i+1}$, radial segments $a_ib_i$ and curves $\delta_i$ are twelve edges with six vertices and six faces; sectors meet along full radial edges and their two triangles meet along $\delta_i$. The positive Jacobian gives the inherited orientations, with the outer arcs counterclockwise and the inner arcs clockwise. The resulting face-to-face curvilinear triangulation has interval links at all boundary vertices, so by [F5] $\chi(A)=6-12+6=0$. [F5, given, construct]

1.3 On the outer circle $\gamma_{\mathrm{out}}(t)=R(\cos t,\sin t)$ the outward normal is $\nu=(\cos t,\sin t)$ and the outward-normal-first tangent is $T=(-\sin t,\cos t)$ with $JT=-(\cos t,\sin t)$. By [F3], $\nabla_TT=-(1/R)(\cos t,\sin t)$, so $k_g=g(-(1/R)(\cos t,\sin t),-(\cos t,\sin t))=1/R$ and $\int_{|x|=R}k_g\,ds=(1/R)\cdot2\pi R=+2\pi$. [F2, F3, algebra]

1.4 On the inner circle $\gamma_{\mathrm{in}}(t)=r(\cos t,\sin t)$ the outward normal of $A$ is $\nu=-(\cos t,\sin t)$, so the outward-normal-first tangent is the clockwise unit tangent $T'=-(-\sin t,\cos t)=(\sin t,-\cos t)$, and $JT'=(\cos t,\sin t)$. By [F3], $\nabla_{T'}T'=-(1/r)(\cos t,\sin t)$, so $k_g'=g(-(1/r)(\cos t,\sin t),(\cos t,\sin t))=-1/r$ and $\int_{|x|=r}k_g\,ds=-(1/r)\cdot2\pi r=-2\pi$. [F2, F3, algebra]

2.1 By steps 1.3 and 1.4 the boundary integral is $\int_{\partial A}k_g\,ds=2\pi-2\pi=0$, and by step 1.1 the curvature integral is $0$; with $\chi(A)=0$ of step 1.2 the identity [F1] reads $0+0=2\pi\cdot0$, which is true. [F1, step 1.1, step 1.2, step 1.3, step 1.4, algebra]

3.1 No new choice is made: the annulus, its triangulation and both circle parametrizations are explicit, and full AC entered only through the inherited smooth-boundary corollary of [F1]. [A1, step 2.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.3, printed pp. 165-167, contains the boundary term with the outward-normal-first orientation, and Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.0.1, printed pp. 10-13, states the same formula; the annulus is the standard region with two boundary components whose contributions cancel. The Euclidean connection is the published library item [[thm-fundamental-theorem-of-riemannian-geometry]]; the sign of the inner contribution is computed here directly from the outward-normal-first rule, not assumed.

---
id: ex-gauss-bonnet-for-the-round-sphere
kind: example
title: Total curvature of a round sphere
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces
  - thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
  - def-curvilinear-triangulation-of-a-compact-surface
  - thm-gaussian-curvature-structure-equation
  - def-connection-one-form-of-an-oriented-orthonormal-frame
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form
  - def-riemannian-volume-form-on-an-oriented-manifold
  - def-first-fundamental-form-and-surface-area-density
  - def-surface-area-and-scalar-surface-integral-of-a-patch
  - lem-parameter-boundary-exceptions-do-not-affect-surface-integrals
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
      locator: "Chapter 9, Theorem 9.7, printed pp. 167-172 (PDF pp. 183-188): the global identity on the round sphere, where the constant curvature and the area give 4 pi."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.2.4, printed pp. 14-15 (PDF pp. 21-22): the global identity, with the sphere of constant curvature as the standard check."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Assume the axiom of choice.
Let $S^2_R$ be the round sphere of radius $R>0$ with its induced metric and
standard orientation. Then $K\equiv1/R^2$, the area is $4\pi R^2$, and
$$\int_{S^2_R}K\,dA=\frac{1}{R^2}\cdot4\pi R^2=4\pi=2\pi\chi(S^2_R)$$
with $\chi(S^2_R)=2$ counted from the octahedral curvilinear triangulation
$V=6$, $E=12$, $F=8$. The polar chart used for the curvature computation
misses only the two poles and the seam, where $K$ is obtained by continuity.

## Facts & Assumptions

**Given:** The round sphere $S^2_R$ of radius $R>0$ with the metric induced from $\mathbb R^3$, its standard orientation, and the spherical polar chart $X(\theta,\varphi)=R(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$.

[A1] full AC is assumed; it is inherited through the global Gauss-Bonnet theorem quoted below and also covers the countable-choice hypothesis inherited by the curvature structure equation; the explicit computations add no choice ([[def-axiom-of-choice]]).

[F1] For every closed oriented Riemannian surface, $\int_{S^2_R}K\,dA=2\pi\chi(S^2_R)$ ([[thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces]]).

[F2] For a regular embedded surface patch the induced metric coefficients are the Euclidean Gram products of its parameter tangent vectors, and its area density is the square root of the Gram determinant ([[def-first-fundamental-form-and-surface-area-density]]).

[F3] The area of a regular patch is the integral of its Gram area density over its parameter domain; changing bounded integrands on a content-zero parameter boundary does not change that integral ([[def-surface-area-and-scalar-surface-integral-of-a-patch]], [[lem-parameter-boundary-exceptions-do-not-affect-surface-integrals]]).

[F4] In coordinates the Levi-Civita symbols are $\Gamma^k{}_{ij}=\tfrac12\sum_\ell g^{k\ell}(\partial_ig_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$ ([[prop-christoffel-formula-for-the-levi-civita-connection]]).

[F5] For a smooth positive orthonormal frame with connection form $\omega(X)=g(\nabla_Xe_1,e_2)$ one has $\nabla_Xe_1=\omega(X)e_2$ and $d\omega=-K\,dA$; the area form satisfies $dA=e^1\wedge e^2$ for the dual coframe and is the unique positive unit top form of the orientation ([[def-connection-one-form-of-an-oriented-orthonormal-frame]], [[thm-gaussian-curvature-structure-equation]], [[prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form]], [[def-riemannian-volume-form-on-an-oriented-manifold]]).

[F6] A finite face-to-face piecewise $C^2$ curvilinear triangulation of a compact smooth surface has the well-defined count $\chi(S^2_R)=V-E+F$ ([[def-curvilinear-triangulation-of-a-compact-surface]], [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

## Verification

**Proof technique:** compute the round metric, connection form and curvature in polar coordinates, integrate the constant curvature against the sphere's area, and count an explicit triangulation.

1.1 Direct differentiation of $X(\theta,\varphi)=R(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$ gives $\langle X_\theta,X_\theta\rangle=R^2$, $\langle X_\varphi,X_\varphi\rangle=R^2\sin^2\theta$, and $\langle X_\theta,X_\varphi\rangle=0$. By [F2] these are the induced metric coefficients, so $e_1=(1/R)\partial_\theta$ and $e_2=(1/(R\sin\theta))\partial_\varphi$ are a smooth positive orthonormal frame with dual coframe $e^1=R\,d\theta$, $e^2=R\sin\theta\,d\varphi$. By [F4], $\Gamma^\theta{}_{\varphi\varphi}=-\sin\theta\cos\theta$ and $\Gamma^\varphi{}_{\theta\varphi}=\Gamma^\varphi{}_{\varphi\theta}=\cot\theta$ are the only nonzero symbols, so $\nabla_{e_1}e_1=0$ and $\nabla_{e_2}e_1=(\cot\theta/R)e_2$. [F2, F4, algebra]

1.2 Let $u_1,u_2,u_3$ be the standard unit coordinate vectors in $\mathbb R^3$. The six points $\pm R u_1,\pm R u_2,\pm R u_3$ are the vertices of the regular octahedron inscribed in $S^2_R$; radial projection of its boundary gives a face-to-face curvilinear triangulation of $S^2_R$ with $V=6$, $E=12$ (the octahedron's edges, each a great-circle arc) and $F=8$ (the spherical triangles cut out by the coordinate octants), so by [F6] $\chi(S^2_R)=6-12+8=2$. [F6, given, construct]

2.1 By step 1.1, $\omega(e_1)=0$ and $\omega(e_2)=\cot\theta/R$, hence $\omega=\cos\theta\,d\varphi$; then $d\omega=-\sin\theta\,d\theta\wedge d\varphi$, while $dA=e^1\wedge e^2=R^2\sin\theta\,d\theta\wedge d\varphi$ by [F5]. Comparing with $d\omega=-K\,dA$ gives $K=1/R^2$ on the chart. The chart domain is dense in $S^2_R$ (its complement is the two poles together with the seam $\varphi=0$), and both $K$ and the constant $1/R^2$ are continuous on $S^2_R$, so $K\equiv1/R^2$ on all of $S^2_R$. [F5, step 1.1, algebra]

2.2 The Gram determinant of step 1.1 is $R^4\sin^2\theta$, so [F2] gives area density $R^2\sin\theta$ on $0<\theta<\pi$, $0<\varphi<2\pi$. The excluded poles and longitude seam are the parameter-boundary exceptions of [F3] and contribute zero area. Hence $\operatorname{Area}(S^2_R)=\int_0^{2\pi}\int_0^\pi R^2\sin\theta\,d\theta\,d\varphi=4\pi R^2$. This is also the Riemannian area form of [F5]. [F2, F3, F5, step 1.1, algebra]

3.1 By steps 2.1 and 2.2, $\int_{S^2_R}K\,dA=(1/R^2)\cdot4\pi R^2=4\pi$, and by step 1.2, $2\pi\chi(S^2_R)=2\pi\cdot2=4\pi$; the global identity [F1] is therefore verified on the round sphere, $\int_{S^2_R}K\,dA=2\pi\chi(S^2_R)$. [F1, step 2.1, step 2.2, step 1.2, algebra]

4.1 No new choice is made: the polar chart, the octahedral vertices and the triangulation are explicit, and AC licenses the inherited global Gauss-Bonnet theorem of [F1] and the countable-choice assumption of the structure equation in [F5]. [A1, step 3.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.7, printed pp. 167-172, gives the global identity, and Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.2.4, printed pp. 14-15, states it. The round metric and total area are computed directly above from the Gram coefficients and patch area density [[def-first-fundamental-form-and-surface-area-density]], while $\chi(S^2_R)=2$ is counted from the octahedral triangulation.

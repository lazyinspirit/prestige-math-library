---
id: ex-gauss-bonnet-for-a-spherical-cap
kind: example
title: Gauss-Bonnet for a spherical cap
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - cor-gauss-bonnet-for-compact-oriented-surfaces-with-smooth-boundary
  - thm-gaussian-curvature-structure-equation
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form
  - def-riemannian-volume-form-on-an-oriented-manifold
  - def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve
  - def-connection-one-form-of-an-oriented-orthonormal-frame
  - def-curvilinear-triangulation-of-a-compact-surface
  - thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
  - def-first-fundamental-form-and-surface-area-density
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
      locator: "Chapter 9, printed pp. 156-172 (PDF pp. 173-188): the cap computation is the boundary case of Theorem 9.3 on the sphere of constant curvature R^{-2}."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.0.1, printed pp. 10-13 (PDF pp. 17-20): the local formula with boundary applied to constant-curvature disks."
---

## Example

Assume the axiom of choice.
Let $S^2_R$ be the round sphere of radius $R$ and let $D=\{0\le\theta\le
\theta_0\}$ be the north polar cap with $0<\theta_0<\pi$ in the polar chart
$X(\theta,\varphi)=R(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$.
Then $K=1/R^2$ on $D$,
$$\int_DK\,dA=2\pi(1-\cos\theta_0),\qquad \int_{\partial D}k_g\,ds=2\pi\cos\theta_0,$$
so the positively oriented boundary supplies the term $2\pi\cos\theta_0$ that
makes the Gauss-Bonnet sum equal to $2\pi=2\pi\chi(D)$ with $\chi(D)=1$. The
sign of the boundary term is fixed by the outward-normal-first convention, and
for $\theta_0>\pi/2$ that term is negative.

## Facts & Assumptions

**Given:** The round sphere $S^2_R$ of radius $R$ with its induced metric and standard orientation, and its north polar cap $D$ with $0<\theta_0<\pi$.

[A1] full AC is assumed; it is inherited from the smooth-boundary Gauss-Bonnet corollary and is used nowhere else in this computation ([[def-axiom-of-choice]]).

[F1] For a compact oriented Riemannian surface with smooth boundary, $\int_DK\,dA+\int_{\partial D}k_g\,ds=2\pi\chi(D)$ with the outward-normal-first boundary orientation ([[cor-gauss-bonnet-for-compact-oriented-surfaces-with-smooth-boundary]]).

[F2] For a smooth positive orthonormal frame $(e_1,e_2)$ with connection form $\omega$, one has $d\omega=-K\,dA$ ([[thm-gaussian-curvature-structure-equation]]).

[F3] In coordinates the Levi-Civita symbols are $\Gamma^k{}_{ij}=\tfrac12\sum_\ell g^{k\ell}(\partial_ig_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$ ([[prop-christoffel-formula-for-the-levi-civita-connection]]).

[F4] The Riemannian volume form is the unique positive unit top form for the specified orientation, and for a positive orthonormal coframe $(e^1,e^2)$ one has $dA=e^1\wedge e^2$ ([[prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form]], [[def-riemannian-volume-form-on-an-oriented-manifold]]).

[F5] For a regular $C^2$ unit-speed curve with tangent $T$, the signed geodesic curvature is $k_g=g(\nabla_TT,JT)$, where $J$ is the positive quarter-turn of the orientation ([[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

[F6] The frame equations $\nabla_Xe_1=\omega(X)e_2$ and $\nabla_Xe_2=-\omega(X)e_1$ hold for the connection form $\omega(X)=g(\nabla_Xe_1,e_2)$, and $Je_1=e_2$, $Je_2=-e_1$ for the positive quarter-turn ([[def-connection-one-form-of-an-oriented-orthonormal-frame]]).

[F7] The induced metric on a regular embedded surface patch has coefficients given by Euclidean Gram products of its parameter tangent vectors ([[def-first-fundamental-form-and-surface-area-density]]).

[F8] A curvilinear triangulation of a compact smooth surface is finite face-to-face data with $V$ vertices, $E$ edges and $F$ faces, and for a compact smooth surface with smooth boundary $\chi$ is the common value of $V-E+F$ over all finite curvilinear triangulations ([[def-curvilinear-triangulation-of-a-compact-surface]], [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

## Verification

**Proof technique:** compute the round metric, connection form and curvature in the polar chart, integrate over the cap, compute the geodesic curvature of the positively oriented latitude circle, and identify the constant $2\pi$ with $2\pi\chi(D)$ through an explicit finite triangulation of the cap.

1.1 On overlapping polar patches away from the north pole, the parametrization $X(\theta,\varphi)=R(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$ has $X_\theta=R(\cos\theta\cos\varphi,\cos\theta\sin\varphi,-\sin\theta)$ and $X_\varphi=R\sin\theta(-\sin\varphi,\cos\varphi,0)$, so by [F7] the induced metric is $g=R^2d\theta^2+R^2\sin^2\theta\,d\varphi^2$ with $g_{\theta\theta}=R^2$, $g_{\varphi\varphi}=R^2\sin^2\theta$ and $g_{\theta\varphi}=0$. Hence $e_1=(1/R)\partial_\theta$ and $e_2=(1/(R\sin\theta))\partial_\varphi$ form a smooth positive orthonormal frame on each such patch, with dual coframe $e^1=R\,d\theta$, $e^2=R\sin\theta\,d\varphi$. The polar frame is undefined at the pole, but the induced metric is smooth there in ordinary surface coordinates. [F7, given, algebra]

1.2 The cap carries the finite curvilinear triangulation by the three meridian arcs from the pole to the three boundary points at $\varphi=0,2\pi/3,4\pi/3$ together with the three boundary arcs joining consecutive ones: the vertices are the pole and the three boundary points, so $V=4$; the edges are the three meridians and the three boundary arcs, so $E=6$; and the faces are the three closed lune triangles between consecutive meridians, each an embedded closed triangular disk meeting the others exactly along common full edges, so $F=3$. Therefore $\chi(D)=4-6+3=1$ by [F8]. [F8, given]

2.1 Since only $g_{\varphi\varphi}=R^2\sin^2\theta$ depends on the coordinates, [F3] gives $\Gamma^\theta{}_{\varphi\varphi}=-\sin\theta\cos\theta$ and $\Gamma^\varphi{}_{\theta\varphi}=\Gamma^\varphi{}_{\varphi\theta}=\cot\theta$, all other symbols vanishing; in particular $\nabla_{\partial_\varphi}\partial_\theta=\cot\theta\,\partial_\varphi$ and $\nabla_{\partial_\theta}\partial_\theta=0$. Consequently $\nabla_{e_1}e_1=(1/R^2)\nabla_{\partial_\theta}\partial_\theta=0$ and $\nabla_{e_2}e_1=(1/(R\sin\theta))\nabla_{\partial_\varphi}((1/R)\partial_\theta)=(\cot\theta/R)e_2$. [F3, step 1.1, algebra]

2.2 On the latitude circle $\theta=\theta_0$ the field $e_2$ restricts to a unit tangent field, and the curve $\gamma(\varphi)=X(\theta_0,\varphi)$ has speed $R\sin\theta_0$; parametrized by arclength its unit tangent is $T=e_2$. The outward normal of the cap at $\theta=\theta_0$ points in the direction of increasing $\theta$, that is along $e_1$, and $(e_1,e_2)$ is positively oriented, so this parametrization is the positively oriented boundary and has length $2\pi R\sin\theta_0$. [F4, step 1.1, given]

3.1 By step 2.1, $\omega(e_1)=g(\nabla_{e_1}e_1,e_2)=0$ and $\omega(e_2)=g((\cot\theta/R)e_2,e_2)=\cot\theta/R$; since $\omega$ is a one-form on the chart with $\omega=\omega(e_1)e^1+\omega(e_2)e^2$, this gives $\omega=\cos\theta\,d\varphi$. [F6, step 2.1, algebra]

4.1 From [F6] and step 3.1, $\nabla_TT=\nabla_{e_2}e_2=-\omega(e_2)e_1=-(\cot\theta_0/R)e_1$ along the circle, and $J T=Je_2=-e_1$; hence by [F5] the signed geodesic curvature of the positively oriented boundary is $k_g=g(-(\cot\theta_0/R)e_1,-e_1)=\cot\theta_0/R$. [F5, F6, step 2.2, step 3.1, algebra]

4.2 Exterior differentiation of step 3.1 gives $d\omega=-\sin\theta\,d\theta\wedge d\varphi$, while $dA=e^1\wedge e^2=R^2\sin\theta\,d\theta\wedge d\varphi$ by [F4]; comparing with $d\omega=-K\,dA$ from [F2] yields $K=1/R^2$ on the polar patches away from the pole. In an ordinary smooth chart about the pole, Gram–Schmidt gives a smooth positive orthonormal frame for the induced metric; its smooth connection form and nowhere-zero area form make $K=-(d\omega)/dA$ continuous there by [F2]. Thus $K=1/R^2$ also at the pole. [F2, F4, step 1.1, step 3.1, algebra]

5.1 The pole has zero area because the smooth area density is bounded in an ordinary chart around it. Integrate first over $\varepsilon\le\theta\le\theta_0$ using the polar patches and let $\varepsilon\downarrow0$; then $\int_DK\,dA=(1/R^2)\int_0^{2\pi}\int_0^{\theta_0}R^2\sin\theta\,d\theta\,d\varphi=2\pi(1-\cos\theta_0)$. [F4, step 1.1, step 4.2, algebra]

5.2 By step 2.2 and step 4.1, $\int_{\partial D}k_g\,ds=(\cot\theta_0/R)\cdot 2\pi R\sin\theta_0=2\pi\cos\theta_0$. [step 2.2, step 4.1, algebra]

6.1 Steps 5.1 and 5.2 give $\int_DK\,dA+\int_{\partial D}k_g\,ds=2\pi(1-\cos\theta_0)+2\pi\cos\theta_0=2\pi$, which by [F1] equals $2\pi\chi(D)$; step 1.2 identifies $\chi(D)=1$. The boundary sign was fixed by the outward-normal-first convention of [F1] and [F5]: the positively oriented latitude circle carries $JT=-e_1$, the inward unit conormal. The full-choice assumption entered only through the parent corollary [F1]. [A1, F1, step 1.2, step 5.1, step 5.2, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, printed pp. 156-172, treats the constant-curvature sphere through the local formula with boundary term (Theorem 9.3), and Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.0.1, printed pp. 10-13, states the same formula. The cap metric, curvature, area, and boundary geodesic curvature are computed above from the Gram metric [[def-first-fundamental-form-and-surface-area-density]], the connection formula [[prop-christoffel-formula-for-the-levi-civita-connection]], and the structure equation [[thm-gaussian-curvature-structure-equation]]; $\chi(D)=1$ is counted from the three-lune triangulation.
